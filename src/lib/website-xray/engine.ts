/**
 * src/lib/website-xray/engine.ts
 * Master inspection engine uniting fetcher, DNS, TLS, and all detectors.
 */

import crypto from "crypto";
import { XRayScanResult } from "./types";
import { getCachedScan, setCachedScan } from "./cache";
import { scanDns } from "./dns-scanner";
import { scanTls } from "./tls-scanner";
import { fetchTargetSafely } from "./fetcher";
import { detectTechnologies } from "./detectors/technology";
import { detectInfrastructure } from "./detectors/infrastructure";
import { detectThirdPartyServices } from "./detectors/third-party";
import { discoverApis } from "./detectors/api-discovery";
import { auditSecurity } from "./detectors/security";
import { auditSeo, auditPerformance } from "./detectors/seo-performance";

export async function runXRayScan(rawUrl: string, forceFresh = false): Promise<XRayScanResult> {
  const startTime = performance.now();

  // Check cache first if not forced fresh
  if (!forceFresh) {
    const cached = getCachedScan(rawUrl);
    if (cached) return cached;
  }

  let parsedUrl: URL;
  try {
    let toParse = rawUrl.trim();
    if (!toParse.startsWith("http://") && !toParse.startsWith("https://")) {
      toParse = `https://${toParse}`;
    }
    parsedUrl = new URL(toParse);
  } catch {
    throw new Error("Invalid URL format provided");
  }

  const hostname = parsedUrl.hostname;

  // Execute HTTP fetch and DNS lookup in parallel
  const [httpResult, dnsResult] = await Promise.all([
    fetchTargetSafely(parsedUrl.toString()),
    scanDns(hostname),
  ]);

  // Execute TLS scan
  const finalParsed = new URL(httpResult.finalUrl);
  const tlsResult = await scanTls(finalParsed.hostname, finalParsed.port ? parseInt(finalParsed.port) : 443);

  // Run all detectors with combined HTML and bundled script texts
  const technologies = detectTechnologies(httpResult.html, httpResult.rawHeaders, httpResult.headers);
  const infrastructure = detectInfrastructure(httpResult.rawHeaders, dnsResult, tlsResult);
  const thirdPartyServices = detectThirdPartyServices(httpResult.html);
  const apis = discoverApis(httpResult.html, httpResult.scriptsContent || "", finalParsed.hostname);
  const security = auditSecurity(httpResult.rawHeaders, finalParsed.protocol === "https:");
  const seo = auditSeo(httpResult.html);

  const timing = {
    dnsMs: dnsResult.dnsDurationMs,
    connectMs: 0,
    tlsMs: 0,
    ttfbMs: httpResult.timing.ttfbMs,
    totalMs: httpResult.timing.totalMs,
  };

  const performanceAudit = auditPerformance(
    httpResult.html,
    timing,
    httpResult.bodyBytes,
    httpResult.headers["content-encoding"]
  );

  // Calculate weighted overall score
  const modernTechScore = Math.min(100, technologies.length * 20 + (infrastructure.cdn ? 20 : 0));
  let perfScore = 100;
  if (timing.ttfbMs > 800) perfScore -= 20;
  else if (timing.ttfbMs > 400) perfScore -= 10;
  if (timing.totalMs > 2500) perfScore -= 30;
  else if (timing.totalMs > 1500) perfScore -= 15;
  perfScore = Math.max(20, perfScore);

  const weightedTotal = Math.round(
    security.score * 0.3 +
    seo.score * 0.25 +
    modernTechScore * 0.25 +
    perfScore * 0.2
  );

  let grade: XRayScanResult["overallScore"]["grade"] = "F";
  if (weightedTotal >= 92) grade = "A+";
  else if (weightedTotal >= 85) grade = "A";
  else if (weightedTotal >= 70) grade = "B";
  else if (weightedTotal >= 55) grade = "C";
  else if (weightedTotal >= 40) grade = "D";

  const totalDurationMs = Math.round(performance.now() - startTime);

  const scanResult: XRayScanResult = {
    id: `xray_${crypto.randomUUID().slice(0, 8)}`,
    success: true,
    target: {
      inputUrl: rawUrl,
      finalUrl: httpResult.finalUrl,
      hostname: finalParsed.hostname,
      protocol: finalParsed.protocol.replace(":", ""),
      port: finalParsed.port ? parseInt(finalParsed.port) : (finalParsed.protocol === "https:" ? 443 : 80),
      pathname: finalParsed.pathname,
    },
    http: {
      statusCode: httpResult.statusCode,
      statusText: httpResult.statusText,
      redirectChain: httpResult.redirectChain,
      headers: httpResult.headers,
      httpVersion: httpResult.httpVersion,
    },
    overallScore: {
      total: weightedTotal,
      grade,
      breakdown: {
        security: security.score,
        seo: seo.score,
        performance: perfScore,
        modernTech: modernTechScore,
      },
    },
    technologies,
    infrastructure,
    apis,
    thirdPartyServices,
    security,
    seo,
    performance: performanceAudit,
    scanMeta: {
      scannedAts: new Date().toISOString(),
      durationMs: totalDurationMs,
      scannerVersion: "1.0.0",
      cached: false,
      partial: false,
    },
  };

  setCachedScan(rawUrl, scanResult);

  return scanResult;
}
