import { validateTargetUrl } from "@/src/lib/website-xray/ssrf";
import { unstable_cache } from "next/cache";
import { getCarbonCache, setCarbonCache } from "./cache";
import type { CarbonScanResult, HostingStatus } from "./types";

const ENERGY_PER_GB_KWH = 0.81;
const STANDARD_GRID_G_PER_KWH = 442;
const GREEN_GRID_G_PER_KWH = 291;
const MAX_DOCUMENT_BYTES = 5 * 1024 * 1024;
const MAX_RESOURCES = 100;
const TIMEOUT_MS = 10_000;
const MAX_REDIRECTS = 5;

const headers = { "User-Agent": "DevCalc-CarbonBot/1.0 (+https://www.devcalc.in/website-carbon-footprint-calculator)", Accept: "text/html,application/xhtml+xml" };

function normalizeInput(raw: string) {
  try {
    const candidate = /^https?:\/\//i.test(raw.trim()) ? raw.trim() : `https://${raw.trim()}`;
    const url = new URL(candidate);
    if (!/^https?:$/.test(url.protocol) || url.username || url.password || !url.hostname.includes(".")) throw new Error("INVALID_URL");
    url.hash = "";
    return url;
  } catch { throw new Error("INVALID_URL"); }
}

async function readLimitedHtml(response: Response) {
  if (!response.body) throw new Error("UNREACHABLE");
  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  const deadline = Date.now() + TIMEOUT_MS;
  try {
    while (true) {
      const remaining = deadline - Date.now();
      if (remaining <= 0) throw new Error("TIMEOUT");
      const part = await new Promise<ReadableStreamReadResult<Uint8Array>>((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error("TIMEOUT")), remaining);
        reader.read().then(
          (value) => { clearTimeout(timer); resolve(value); },
          (error) => { clearTimeout(timer); reject(error); },
        );
      });
      if (part.done) break;
      total += part.value.byteLength;
      if (total > MAX_DOCUMENT_BYTES) throw new Error("PAGE_TOO_LARGE");
      chunks.push(part.value);
    }
  } finally { void reader.cancel().catch(() => undefined); reader.releaseLock(); }
  const buffer = new Uint8Array(total);
  let cursor = 0;
  for (const chunk of chunks) { buffer.set(chunk, cursor); cursor += chunk.byteLength; }
  return buffer;
}

async function safeFetch(url: string, method: "GET" | "HEAD", extraHeaders?: Record<string, string>, timeoutMs = TIMEOUT_MS) {
  let current = url;
  for (let hop = 0; hop <= MAX_REDIRECTS; hop += 1) {
    const validation = await validateTargetUrl(current);
    if (!validation.safe) throw new Error("SSRF_BLOCKED");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(current, { method, headers: { ...headers, ...extraHeaders }, redirect: "manual", signal: controller.signal });
      if ([301, 302, 303, 307, 308].includes(response.status)) {
        const location = response.headers.get("location");
        if (!location) throw new Error("UNREACHABLE");
        await response.body?.cancel();
        current = new URL(location, current).toString();
        continue;
      }
      return { response, finalUrl: current };
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") throw new Error("TIMEOUT");
      throw error;
    } finally { clearTimeout(timeout); }
  }
  throw new Error("TOO_MANY_REDIRECTS");
}

function extractResourceUrls(html: string, baseUrl: string) {
  const found = new Set<string>();
  const patterns = [
    /<(?:script|img|source|iframe|video|audio)[^>]+(?:src|poster)=["']([^"']+)["']/gi,
    /<link(?=[^>]+rel=["'](?:stylesheet|preload|modulepreload|icon|apple-touch-icon)["'])[^>]+href=["']([^"']+)["']/gi,
  ];
  for (const pattern of patterns) {
    for (const match of html.matchAll(pattern)) {
      try {
        const url = new URL(match[1], baseUrl);
        if (/^https?:$/.test(url.protocol)) { url.hash = ""; found.add(url.toString()); }
      } catch { /* Ignore malformed resource references. */ }
    }
  }
  return [...found];
}

async function measureResource(url: string): Promise<number | null> {
  try {
    let result = await safeFetch(url, "HEAD", undefined, 2500);
    const directHeader = result.response.headers.get("content-length");
    const directLength = directHeader === null ? NaN : Number(directHeader);
    if (result.response.ok && Number.isFinite(directLength) && directLength > 0) return directLength;
    result = await safeFetch(url, "GET", { Range: "bytes=0-0", Accept: "*/*" }, 2500);
    const contentRange = result.response.headers.get("content-range")?.match(/\/(\d+)$/)?.[1];
    const fallbackHeader = result.response.headers.get("content-length");
    const fallbackLength = fallbackHeader === null ? NaN : Number(fallbackHeader);
    await result.response.body?.cancel();
    if (contentRange) return Number(contentRange);
    return result.response.ok && Number.isFinite(fallbackLength) && fallbackLength > 0 ? fallbackLength : null;
  } catch { return null; }
}

async function checkGreenHosting(domain: string): Promise<{ status: HostingStatus; hostedBy?: string }> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);
    const response = await fetch(`https://api.thegreenwebfoundation.org/api/v3/greencheck/${encodeURIComponent(domain)}`, { signal: controller.signal, next: { revalidate: 86400 } });
    clearTimeout(timeout);
    if (!response.ok) return { status: "unknown" };
    const data = await response.json() as { green?: boolean; hosted_by?: string };
    if (data.green === true) return { status: "green", hostedBy: data.hosted_by };
    if (data.green === false) return { status: "not-green" };
    return { status: "unknown" };
  } catch { return { status: "unknown" }; }
}

function gradeFor(co2: number): CarbonScanResult["grade"] {
  if (co2 <= 0.1) return "A+";
  if (co2 <= 0.25) return "A";
  if (co2 <= 0.5) return "B";
  if (co2 <= 1) return "C";
  if (co2 <= 1.76) return "D";
  if (co2 <= 3) return "E";
  return "F";
}

const persistedScan = unstable_cache(scanFresh, ["website-carbon-v1"], { revalidate: 86400 });

export async function scanWebsiteCarbon(rawUrl: string): Promise<CarbonScanResult> {
  const url = normalizeInput(rawUrl).toString();
  const cached = getCarbonCache(url);
  if (cached) return cached;
  const result = await persistedScan(url);
  setCarbonCache(url, result);
  return result;
}

async function scanFresh(url: string): Promise<CarbonScanResult> {
  const documentResult = await safeFetch(url, "GET");
  if (!documentResult.response.ok) throw new Error("UNREACHABLE");
  const contentType = documentResult.response.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) throw new Error("NOT_HTML");
  const documentLength = Number(documentResult.response.headers.get("content-length"));
  if (documentLength > MAX_DOCUMENT_BYTES) throw new Error("PAGE_TOO_LARGE");
  const buffer = await readLimitedHtml(documentResult.response);
  const html = new TextDecoder("utf-8", { fatal: false }).decode(buffer);
  const finalUrl = new URL(documentResult.finalUrl);
  const hostingPromise = checkGreenHosting(finalUrl.hostname);
  const allResources = extractResourceUrls(html, finalUrl.toString());
  const resources = allResources.slice(0, MAX_RESOURCES);
  const sizes: Array<number | null> = [];
  for (let offset = 0; offset < resources.length; offset += 16) {
    sizes.push(...await Promise.all(resources.slice(offset, offset + 16).map(measureResource)));
  }
  const measured = sizes.filter((size): size is number => size !== null);
  const pageWeightBytes = buffer.byteLength + measured.reduce((total, size) => total + size, 0);
  const hosting = await hostingPromise;
  const intensity = hosting.status === "green" ? GREEN_GRID_G_PER_KWH : STANDARD_GRID_G_PER_KWH;
  const co2 = (pageWeightBytes / 1_000_000_000) * ENERGY_PER_GB_KWH * intensity;
  const notes: string[] = [];
  if (allResources.length > MAX_RESOURCES) notes.push(`Only the first ${MAX_RESOURCES} discovered resources were measured.`);
  if (measured.length < resources.length) notes.push(`${resources.length - measured.length} resources did not publish a measurable transfer size.`);
  notes.push("Request count excludes resources loaded later by JavaScript or CSS, and the server-side estimate may be lower than a browser trace.");
  if (hosting.status === "unknown") notes.push("Green hosting could not be verified, so the global grid intensity was used.");

  const value: CarbonScanResult = {
    url: finalUrl.toString(), domain: finalUrl.hostname, pageWeightBytes, htmlBytes: buffer.byteLength,
    requestCount: allResources.length + 1, measuredResourceCount: measured.length + 1,
    unmeasuredResourceCount: Math.max(0, allResources.length - measured.length), hostingStatus: hosting.status,
    hostedBy: hosting.hostedBy, energyPerGbKwh: ENERGY_PER_GB_KWH, carbonIntensityGPerKwh: intensity,
    co2PerVisitGrams: co2, grade: gradeFor(co2), scannedAt: new Date().toISOString(), cached: false, notes,
  };
  return value;
}
