/**
 * src/lib/website-xray/detectors/infrastructure.ts
 * CDN, Cloud Platform, Hosting Provider, and Web Server classification.
 */

import { InfrastructureDetection } from "../types";
import { DnsScanResult } from "../dns-scanner";

export function detectInfrastructure(
  headers: Headers,
  dnsResult: DnsScanResult,
  tlsResult: InfrastructureDetection["tls"]
): InfrastructureDetection {
  const result: InfrastructureDetection = {
    ipAddresses: dnsResult.ipAddresses,
    nameservers: dnsResult.nameservers,
    dnsProvider: dnsResult.dnsProvider,
    tls: tlsResult,
  };

  const serverHeader = (headers.get("server") || "").trim();
  const cfRay = headers.get("cf-ray");
  const amzCf = headers.get("x-amz-cf-id");
  const vercelId = headers.get("x-vercel-id");
  const netlifyId = headers.get("x-nf-request-id");
  const fastlyDebug = headers.get("fastly-debug-digest") || headers.get("x-served-by");
  const akamai = headers.get("x-akamai-transformed") || headers.get("x-akamai-request-id");

  // CDN Detection
  if (cfRay) {
    result.cdn = {
      name: "Cloudflare",
      confidence: 100,
      confidenceLevel: "confirmed",
      evidence: [`Found CF-Ray edge trace header: ${cfRay}`],
    };
  } else if (amzCf) {
    result.cdn = {
      name: "Amazon CloudFront",
      confidence: 100,
      confidenceLevel: "confirmed",
      evidence: ["Found X-Amz-Cf-Id edge routing header"],
    };
  } else if (fastlyDebug) {
    result.cdn = {
      name: "Fastly CDN",
      confidence: 95,
      confidenceLevel: "likely",
      evidence: ["Found Fastly edge distribution header"],
    };
  } else if (akamai) {
    result.cdn = {
      name: "Akamai Edge",
      confidence: 95,
      confidenceLevel: "likely",
      evidence: ["Found Akamai edge transformation header"],
    };
  }

  // Hosting / Cloud Platform Detection
  if (vercelId) {
    result.hosting = {
      name: "Vercel Cloud Platform",
      confidence: 100,
      confidenceLevel: "confirmed",
      evidence: [`Found X-Vercel-Id edge execution header: ${vercelId}`],
    };
  } else if (netlifyId) {
    result.hosting = {
      name: "Netlify Platform",
      confidence: 100,
      confidenceLevel: "confirmed",
      evidence: [`Found X-NF-Request-Id header: ${netlifyId}`],
    };
  } else if (headers.get("x-goog-generation") || headers.get("x-guploader-uploadid")) {
    result.hosting = {
      name: "Google Cloud Platform (GCP)",
      confidence: 95,
      confidenceLevel: "likely",
      evidence: ["Found Google Cloud edge metadata headers"],
    };
  } else if (headers.get("x-github-request-id")) {
    result.hosting = {
      name: "GitHub Pages",
      confidence: 100,
      confidenceLevel: "confirmed",
      evidence: ["Found X-GitHub-Request-Id header"],
    };
  }

  // Server Detection
  if (serverHeader) {
    result.server = {
      name: serverHeader,
      evidence: [`Server header returned: ${serverHeader}`],
    };
  }

  return result;
}

