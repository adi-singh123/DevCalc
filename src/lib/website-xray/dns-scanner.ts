/**
 * src/lib/website-xray/dns-scanner.ts
 * Asynchronous DNS records and nameserver inspection with provider detection.
 */

import dns from "dns/promises";

export interface DnsScanResult {
  ipAddresses: string[];
  ipv6Addresses: string[];
  nameservers: string[];
  cnames: string[];
  mxRecords: string[];
  txtRecords: string[];
  dnsProvider?: string;
  dnsDurationMs: number;
}

export async function scanDns(hostname: string): Promise<DnsScanResult> {
  const start = performance.now();
  const result: DnsScanResult = {
    ipAddresses: [],
    ipv6Addresses: [],
    nameservers: [],
    cnames: [],
    mxRecords: [],
    txtRecords: [],
    dnsDurationMs: 0,
  };

  const lookupTasks = [
    dns.resolve4(hostname).then((ips) => { result.ipAddresses = ips; }).catch(() => {}),
    dns.resolve6(hostname).then((ips) => { result.ipv6Addresses = ips; }).catch(() => {}),
    dns.resolveNs(hostname).then((ns) => { result.nameservers = ns; }).catch(() => {}),
    dns.resolveCname(hostname).then((cnames) => { result.cnames = cnames; }).catch(() => {}),
    dns.resolveMx(hostname).then((mx) => { result.mxRecords = mx.map((m) => `${m.exchange} (${m.priority})`); }).catch(() => {}),
    dns.resolveTxt(hostname).then((txt) => { result.txtRecords = txt.map((t) => t.join(" ")); }).catch(() => {}),
  ];

  await Promise.allSettled(lookupTasks);
  result.dnsDurationMs = Math.round(performance.now() - start);

  const allNs = result.nameservers.join(" ").toLowerCase();
  if (allNs.includes("cloudflare.com")) {
    result.dnsProvider = "Cloudflare DNS";
  } else if (allNs.includes("awsdns") || allNs.includes("route53")) {
    result.dnsProvider = "Amazon Route 53";
  } else if (allNs.includes("googledomains.com") || allNs.includes("google.com")) {
    result.dnsProvider = "Google Cloud DNS";
  } else if (allNs.includes("azure-dns")) {
    result.dnsProvider = "Azure DNS";
  } else if (allNs.includes("digitalocean.com")) {
    result.dnsProvider = "DigitalOcean DNS";
  } else if (allNs.includes("godaddy.com") || allNs.includes("domaincontrol.com")) {
    result.dnsProvider = "GoDaddy DNS";
  } else if (allNs.includes("namecheap.com") || allNs.includes("registrar-servers.com")) {
    result.dnsProvider = "Namecheap DNS";
  } else if (allNs.includes("nsone.net") || allNs.includes("ns1.net")) {
    result.dnsProvider = "NS1 / IBM";
  } else if (allNs.includes("vercel-dns.com")) {
    result.dnsProvider = "Vercel DNS";
  } else if (allNs.includes("netlify")) {
    result.dnsProvider = "Netlify DNS";
  }

  return result;
}

