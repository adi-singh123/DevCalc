/**
 * src/lib/website-xray/fetcher.ts
 * Safe HTTP fetcher with timeout, redirect tracking, byte limits, and SSRF verification on every hop.
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
const TIMEOUT_MS = 10000;
const MAX_BODY_BYTES = 2 * 1024 * 1024; // 2 MB

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
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; DevCalc-XRayBot/1.0; +https://devcalc.in/website-x-ray)",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.5",
          "Cache-Control": "no-cache",
        },
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

      return {
        url: initialUrl,
        finalUrl: currentUrl,
        statusCode: res.status,
        statusText: res.statusText || "OK",
        headers: headersMap,
        rawHeaders: res.headers,
        html,
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

