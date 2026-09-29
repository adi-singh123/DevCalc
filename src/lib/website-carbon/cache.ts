import type { CarbonScanResult } from "./types";

const entries = new Map<string, { value: CarbonScanResult; expiresAt: number }>();
const TTL_MS = 24 * 60 * 60 * 1000;
const MAX_ENTRIES = 500;

export function getCarbonCache(url: string) {
  const key = url;
  const entry = entries.get(key);
  if (!entry) return null;
  if (Date.now() >= entry.expiresAt) { entries.delete(key); return null; }
  return { ...entry.value, cached: true };
}

export function setCarbonCache(url: string, value: CarbonScanResult) {
  if (entries.size >= MAX_ENTRIES) {
    const oldest = entries.keys().next().value;
    if (oldest) entries.delete(oldest);
  }
  entries.set(url, { value, expiresAt: Date.now() + TTL_MS });
}
