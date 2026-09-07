/**
 * src/lib/website-xray/fetcher.ts
 * Safe HTTP fetcher with realistic browser headers, redirect tracking, byte limits,
 * SSRF verification on every hop, and first-party script bundle discovery.
 */

import { validateTargetUrl } from "./ssrf";

export interface HttpResponseData {
  url: string;
  finalUrl: string;
  statusCode: number;
  statusText: string;
  headers: Record<string, string>;
  rawHeaders: Headers;
  html: string;
  scriptsContent: string;
  bodyBytes: number;
  timing: {
    dnsMs: number;
    connectMs: number;
    tlsMs: number;
    ttfbMs: number;
    totalMs: number;
  };
  redirectChain: Array<{ url: string; statusCode: number }>;
  httpVersion?: string;
}

const MAX_REDIRECTS = 5;
const TIMEOUT_MS = 12000;
const SCRIPT_TIMEOUT_MS = 8000;
const MAX_BODY_BYTES = 2 * 1024 * 1024; // 2 MB
const MAX_SCRIPT_BYTES = 600 * 1024; // 600 KB per script
const MAX_SCRIPT_COUNT = 35;
const SCRIPT_FETCH_CONCURRENCY = 8;

const BROWSER_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 (compatible; DevCalc-XRayBot/1.0; +https://www.devcalc.in/website-x-ray)",
  "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
  "sec-ch-ua": '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"Windows"',
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Sec-Fetch-User": "?1",
  "Upgrade-Insecure-Requests": "1",
  "Cache-Control": "no-cache",
};

/**
 * Extracts and safely fetches top first-party script bundles to expose client-side APIs
 */
async function fetchFirstPartyScripts(html: string, baseUrl: string): Promise<string> {
  try {
    const base = new URL(baseUrl);
    const scriptSrcMatches = html.matchAll(/<script[^>]+src=["']([^"']+)["']/gi);
    const scriptUrls: string[] = [];

    for (const match of scriptSrcMatches) {
      const src = match[1]?.trim();
      if (!src || src.startsWith("data:") || src.startsWith("blob:")) continue;

      try {
        const resolved = new URL(src, base);
        // Include sibling asset hosts (for example, www.example.com -> static.example.com).
        const rootDomain = base.hostname.replace(/^www\./i, "");
        const isSameDomain =
          resolved.hostname === base.hostname ||
          resolved.hostname === rootDomain ||
          resolved.hostname.endsWith(`.${rootDomain}`);
        const isAppBundle = resolved.pathname.includes("/_next/") || 
                            resolved.pathname.includes("/static/") || 
                            resolved.pathname.includes("/assets/") || 
                            resolved.pathname.includes("/js/") ||
                            resolved.pathname.includes("/build/");

        if (isSameDomain && isAppBundle && resolved.pathname.endsWith(".js")) {
          if (!scriptUrls.includes(resolved.toString())) {
            scriptUrls.push(resolved.toString());
          }
        }
      } catch {
        continue;
      }

      if (scriptUrls.length >= MAX_SCRIPT_COUNT) break;
    }

    if (scriptUrls.length === 0) return "";

    const fetchScript = async (url: string) => {
      try {
        const ssrfCheck = await validateTargetUrl(url);
        if (!ssrfCheck.safe) return "";

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), SCRIPT_TIMEOUT_MS);

        const res = await fetch(url, {
          headers: {
            "User-Agent": BROWSER_HEADERS["User-Agent"],
            "Accept": "*/*",
          },
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (!res.ok) return "";
        const buf = await res.arrayBuffer();
        const text = new TextDecoder("utf-8").decode(buf.slice(0, MAX_SCRIPT_BYTES));
        return text;
      } catch {
        return "";
      }
    };

    const scriptTexts: string[] = [];
    for (let offset = 0; offset < scriptUrls.length; offset += SCRIPT_FETCH_CONCURRENCY) {
      const batch = scriptUrls.slice(offset, offset + SCRIPT_FETCH_CONCURRENCY);
      const results = await Promise.allSettled(batch.map(fetchScript));
      scriptTexts.push(
        ...results
          .filter((result): result is PromiseFulfilledResult<string> => result.status === "fulfilled")
          .map((result) => result.value)
      );
    }
    return scriptTexts.join("\n\n");
  } catch {
    return "";
  }
}

export async function fetchTargetSafely(initialUrl: string): Promise<HttpResponseData> {
  const redirectChain: Array<{ url: string; statusCode: number }> = [];
  let currentUrl = initialUrl;
  let hops = 0;

  const startTime = performance.now();
  let firstByteTime = 0;

  while (hops < MAX_REDIRECTS) {
    const ssrfCheck = await validateTargetUrl(currentUrl);
    if (!ssrfCheck.safe) {
      throw new Error(`SSRF Blocked: ${ssrfCheck.reason} on hop to ${currentUrl}`);
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
      const res = await fetch(currentUrl, {
        method: "GET",
        headers: BROWSER_HEADERS,
        redirect: "manual",
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      if (firstByteTime === 0) {
        firstByteTime = performance.now();
      }

      if ([301, 302, 303, 307, 308].includes(res.status)) {
        const location = res.headers.get("location");
        redirectChain.push({ url: currentUrl, statusCode: res.status });

        if (!location) {
          throw new Error(`Redirect status ${res.status} received without Location header`);
        }

        const nextUrl = new URL(location, currentUrl).toString();
        currentUrl = nextUrl;
        hops++;
        continue;
      }

      const headersMap: Record<string, string> = {};
      res.headers.forEach((value, key) => {
        const lk = key.toLowerCase();
        if (lk.includes("cookie") || lk.includes("auth") || lk.includes("token") || lk.includes("key")) {
          headersMap[key] = "[REDACTED]";
        } else {
          headersMap[key] = value;
        }
      });

      const arrayBuffer = await res.arrayBuffer();
      const sliced = arrayBuffer.slice(0, MAX_BODY_BYTES);
      const decoder = new TextDecoder("utf-8", { fatal: false });
      const html = decoder.decode(sliced);

      const endTime = performance.now();
      const totalMs = Math.round(endTime - startTime);
      const ttfbMs = Math.round(firstByteTime - startTime);

      // Fetch top first-party scripts for deep client API discovery
      const scriptsContent = await fetchFirstPartyScripts(html, currentUrl);

      return {
        url: initialUrl,
        finalUrl: currentUrl,
        statusCode: res.status,
        statusText: res.statusText || "OK",
        headers: headersMap,
        rawHeaders: res.headers,
        html,
        scriptsContent,
        bodyBytes: arrayBuffer.byteLength,
        timing: {
          dnsMs: 0,
          connectMs: 0,
          tlsMs: 0,
          ttfbMs,
          totalMs,
        },
        redirectChain,
        httpVersion: "HTTP/1.1",
      };
    } catch (err: unknown) {
      clearTimeout(timeoutId);
      if (err instanceof Error) {
        if (err.name === "AbortError") {
          throw new Error(`Target request timed out after ${TIMEOUT_MS / 1000}s`);
        }
        throw err;
      }
      throw new Error(String(err));
    }
  }

  throw new Error(`Exceeded maximum redirect limit of ${MAX_REDIRECTS} hops`);
}
