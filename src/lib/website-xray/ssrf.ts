/**
 * src/lib/website-xray/ssrf.ts
 * Strict Server-Side Request Forgery (SSRF) and private IP defense validation.
 */

import dns from "dns/promises";

// Blocked private, loopback, and link-local IPv4 CIDR ranges
const BLOCKED_IPV4_RANGES: Array<{ start: number; end: number; label: string }> = [
  { start: ipToLong("0.0.0.0"), end: ipToLong("0.255.255.255"), label: "Current network (RFC 1122)" },
  { start: ipToLong("10.0.0.0"), end: ipToLong("10.255.255.255"), label: "Private Class A (RFC 1918)" },
  { start: ipToLong("100.64.0.0"), end: ipToLong("100.127.255.255"), label: "Carrier-grade NAT (RFC 6598)" },
  { start: ipToLong("127.0.0.0"), end: ipToLong("127.255.255.255"), label: "Loopback (RFC 1122)" },
  { start: ipToLong("169.254.0.0"), end: ipToLong("169.254.255.255"), label: "Link-local / Cloud Metadata (RFC 3927)" },
  { start: ipToLong("172.16.0.0"), end: ipToLong("172.31.255.255"), label: "Private Class B (RFC 1918)" },
  { start: ipToLong("192.0.0.0"), end: ipToLong("192.0.0.255"), label: "IETF Protocol Assignments (RFC 6890)" },
  { start: ipToLong("192.0.2.0"), end: ipToLong("192.0.2.255"), label: "Documentation TEST-NET-1 (RFC 5737)" },
  { start: ipToLong("192.168.0.0"), end: ipToLong("192.168.255.255"), label: "Private Class C (RFC 1918)" },
  { start: ipToLong("198.18.0.0"), end: ipToLong("198.19.255.255"), label: "Benchmark Testing (RFC 2544)" },
  { start: ipToLong("198.51.100.0"), end: ipToLong("198.51.100.255"), label: "Documentation TEST-NET-2 (RFC 5737)" },
  { start: ipToLong("203.0.113.0"), end: ipToLong("203.0.113.255"), label: "Documentation TEST-NET-3 (RFC 5737)" },
  { start: ipToLong("224.0.0.0"), end: ipToLong("239.255.255.255"), label: "Multicast (RFC 5771)" },
  { start: ipToLong("240.0.0.0"), end: ipToLong("255.255.255.255"), label: "Reserved / Broadcast (RFC 1112)" },
];

function ipToLong(ip: string): number {
  return ip
    .split(".")
    .reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;
}

export function isBlockedIpv4(ip: string): { blocked: boolean; reason?: string } {
  const ipLong = ipToLong(ip);
  for (const range of BLOCKED_IPV4_RANGES) {
    if (ipLong >= range.start && ipLong <= range.end) {
      return { blocked: true, reason: `Target IP ${ip} resides in forbidden range: ${range.label}` };
    }
  }
  return { blocked: false };
}

export function isBlockedIpv6(ip: string): { blocked: boolean; reason?: string } {
  const norm = ip.toLowerCase();
  if (norm === "::1" || norm === "0:0:0:0:0:0:0:1") {
    return { blocked: true, reason: "IPv6 Loopback (::1) is forbidden." };
  }
  if (norm === "::" || norm === "0:0:0:0:0:0:0:0") {
    return { blocked: true, reason: "IPv6 Unspecified (::) is forbidden." };
  }
  if (norm.startsWith("fe80:") || norm.startsWith("fe8") || norm.startsWith("fe9") || norm.startsWith("fea") || norm.startsWith("feb")) {
    return { blocked: true, reason: "IPv6 Link-Local address (fe80::/10) is forbidden." };
  }
  if (norm.startsWith("fc00:") || norm.startsWith("fd00:") || norm.startsWith("fc") || norm.startsWith("fd")) {
    return { blocked: true, reason: "IPv6 Unique Local address (fc00::/7) is forbidden." };
  }
  // IPv4-mapped IPv6
  if (norm.includes("::ffff:")) {
    const v4part = norm.split("::ffff:")[1];
    if (v4part && /^\d+\.\d+\.\d+\.\d+$/.test(v4part)) {
      return isBlockedIpv4(v4part);
    }
  }
  return { blocked: false };
}

export async function validateTargetUrl(rawUrl: string): Promise<{ safe: boolean; reason?: string; resolvedIps?: string[] }> {
  let parsed: URL;
  try {
    let toParse = rawUrl.trim();
    if (!toParse.startsWith("http://") && !toParse.startsWith("https://")) {
      toParse = `https://${toParse}`;
    }
    parsed = new URL(toParse);
  } catch {
    return { safe: false, reason: "Malformed URL or invalid URI protocol." };
  }

  // Enforce HTTP / HTTPS protocol only
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    return { safe: false, reason: `Disallowed protocol "${parsed.protocol}". Only HTTP and HTTPS are permitted.` };
  }

  const hostname = parsed.hostname.toLowerCase();

  // Block obvious internal hosts
  if (
    hostname === "localhost" ||
    hostname.endsWith(".localhost") ||
    hostname.endsWith(".local") ||
    hostname.endsWith(".internal") ||
    hostname.endsWith(".lan") ||
    hostname === "127.0.0.1" ||
    hostname === "0.0.0.0" ||
    hostname === "metadata.google.internal" ||
    hostname === "instance-data"
  ) {
    return { safe: false, reason: `Target host "${hostname}" is an internal address and blocked for security.` };
  }

  // Check direct IPv4 format
  if (/^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
    const v4Check = isBlockedIpv4(hostname);
    if (v4Check.blocked) {
      return { safe: false, reason: v4Check.reason };
    }
  }

  // Check direct IPv6 format
  if (hostname.startsWith("[") && hostname.endsWith("]")) {
    const rawV6 = hostname.slice(1, -1);
    const v6Check = isBlockedIpv6(rawV6);
    if (v6Check.blocked) {
      return { safe: false, reason: v6Check.reason };
    }
  }

  // Resolve hostname via DNS and check all resolved IPs
  try {
    const ips: string[] = [];
    try {
      const v4s = await dns.resolve4(hostname);
      ips.push(...v4s);
    } catch {}

    try {
      const v6s = await dns.resolve6(hostname);
      ips.push(...v6s);
    } catch {}

    if (ips.length === 0) {
      const lookup = await dns.lookup(hostname, { all: true });
      lookup.forEach((entry) => ips.push(entry.address));
    }

    if (ips.length === 0) {
      return { safe: false, reason: `Domain "${hostname}" could not be resolved by DNS.` };
    }

    for (const ip of ips) {
      if (ip.includes(":")) {
        const v6Check = isBlockedIpv6(ip);
        if (v6Check.blocked) {
          return { safe: false, reason: v6Check.reason, resolvedIps: ips };
        }
      } else {
        const v4Check = isBlockedIpv4(ip);
        if (v4Check.blocked) {
          return { safe: false, reason: v4Check.reason, resolvedIps: ips };
        }
      }
    }

    return { safe: true, resolvedIps: ips };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return { safe: false, reason: `DNS Resolution failed for "${hostname}": ${message}` };
  }
}

