/**
 * src/lib/website-xray/cache.ts
 * In-memory scan cache with 15-min TTL, rate limiter, and concurrency limiter.
 */

import { XRayScanResult } from "./types";

interface CacheEntry {
  result: XRayScanResult;
  expiresAt: number;
}

const SCAN_CACHE = new Map<string, CacheEntry>();
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes
const MAX_CACHE_ENTRIES = 500;

// Rate limiting: IP -> Array of timestamps
const RATE_LIMIT_MAP = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 20;

export function normalizeUrlForCache(rawUrl: string): string {
  try {
    const parsed = new URL(rawUrl.trim());
    const host = parsed.hostname.toLowerCase();
    const port = parsed.port ? `:${parsed.port}` : "";
    let path = parsed.pathname;
    if (path.length > 1 && path.endsWith("/")) {
      path = path.slice(0, -1);
    }
    return `${parsed.protocol}//${host}${port}${path}${parsed.search}`;
  } catch {
    return rawUrl.trim().toLowerCase();
  }
}

export function getCachedScan(url: string): XRayScanResult | null {
  const key = normalizeUrlForCache(url);
  const entry = SCAN_CACHE.get(key);
  if (!entry) return null;

  if (Date.now() > entry.expiresAt) {
    SCAN_CACHE.delete(key);
    return null;
  }

  return {
    ...entry.result,
    scanMeta: {
      ...entry.result.scanMeta,
      cached: true,
    },
  };
}

export function setCachedScan(url: string, result: XRayScanResult): void {
  const key = normalizeUrlForCache(url);

  if (SCAN_CACHE.size >= MAX_CACHE_ENTRIES) {
    const oldestKey = SCAN_CACHE.keys().next().value;
    if (oldestKey) SCAN_CACHE.delete(oldestKey);
  }

  SCAN_CACHE.set(key, {
    result,
    expiresAt: Date.now() + CACHE_TTL_MS,
  });
}

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetMs: number } {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  let timestamps = RATE_LIMIT_MAP.get(ip) || [];
  timestamps = timestamps.filter((t) => t > windowStart);

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    const oldest = timestamps[0];
    const resetMs = Math.max(0, oldest + RATE_LIMIT_WINDOW_MS - now);
    RATE_LIMIT_MAP.set(ip, timestamps);
    return { allowed: false, remaining: 0, resetMs };
  }

  timestamps.push(now);
  RATE_LIMIT_MAP.set(ip, timestamps);
  return {
    allowed: true,
    remaining: MAX_REQUESTS_PER_WINDOW - timestamps.length,
    resetMs: RATE_LIMIT_WINDOW_MS,
  };
}
