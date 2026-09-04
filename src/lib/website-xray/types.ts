/**
 * src/lib/website-xray/types.ts
 * Strong TypeScript types for Website X-Ray engine and report
 */

export type ConfidenceLevel = "confirmed" | "likely" | "inferred" | "possible" | "unknown";

export interface TechnologyDetection {
  name: string;
  category: "Framework" | "Library" | "CMS" | "CSS Framework" | "UI Component" | "Backend / Runtime" | "E-Commerce" | "Build Tool / Engine";
  confidence: number;
  confidenceLevel: ConfidenceLevel;
  version?: string;
  icon?: string;
  evidence: string[];
  detectedFrom: Array<"html" | "headers" | "scripts" | "styles" | "cookies" | "meta" | "assets">;
}

export interface InfrastructureDetection {
  cdn?: {
    name: string;
    confidence: number;
    confidenceLevel: ConfidenceLevel;
    evidence: string[];
  };
  hosting?: {
    name: string;
    confidence: number;
    confidenceLevel: ConfidenceLevel;
    evidence: string[];
  };
  server?: {
    name: string;
    version?: string;
    evidence: string[];
  };
  reverseProxy?: {
    name: string;
    evidence: string[];
  };
  dnsProvider?: string;
  ipAddresses: string[];
  nameservers: string[];
  tls: {
    enabled: boolean;
    protocol?: string;
    issuer?: string;
    validFrom?: string;
    validTo?: string;
    daysRemaining?: number;
    authorized?: boolean;
  };
}

export interface ObservedApi {
  id: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";
  url: string;
  path: string;
  host: string;
  status?: number;
  contentType?: string;
  durationMs?: number;
  resourceType: "fetch" | "xhr" | "rest" | "graphql" | "static-json" | "discovered-endpoint" | "cdn-transform" | "next-data" | "structured-data" | "microservice";
  source: "live-request" | "html-discovery" | "script-analysis";
  details?: {
    initiator?: string;
    headersRedacted?: Record<string, string>;
  };
}

export interface ThirdPartyService {
  name: string;
  category:
    | "Analytics"
    | "Advertising"
    | "Customer Support & Chat"
    | "Error Monitoring"
    | "Payments"
    | "Fonts"
    | "Video & Media"
    | "Tag Management"
    | "Security & Anti-Bot"
    | "Marketing & CRM"
    | "Other";
  domains: string[];
  confidence: number;
  confidenceLevel: ConfidenceLevel;
  evidence: string[];
}

export interface SecurityHeaderCheck {
  header: string;
  present: boolean;
  value?: string;
  status: "pass" | "warn" | "fail" | "info";
  description: string;
  recommendation?: string;
}

export interface SecurityAudit {
  score: number;
  https: boolean;
  hsts: boolean;
  headers: SecurityHeaderCheck[];
  summary: {
    passed: number;
    warnings: number;
    failed: number;
  };
}

export interface SeoAudit {
  score: number;
  title?: string;
  titleLength?: number;
  description?: string;
  descriptionLength?: number;
  canonical?: string;
  robotsDirectives?: string;
  h1Count: number;
  h1Texts: string[];
  hasOpenGraph: boolean;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  hasTwitterCard: boolean;
  hasStructuredData: boolean;
  structuredDataTypes: string[];
  hasViewport: boolean;
  hasFavicon: boolean;
  htmlLang?: string;
  hasSitemapIndicator: boolean;
}

export interface PerformanceAudit {
  dnsLookupMs: number;
  tcpConnectMs: number;
  tlsHandshakeMs: number;
  ttfbMs: number;
  totalResponseTimeMs: number;
  contentLengthBytes?: number;
  contentEncoding?: string;
  resourceCounts: {
    scripts: number;
    stylesheets: number;
    images: number;
    fonts: number;
    apis: number;
    thirdPartyRequests: number;
    total: number;
  };
}

export interface XRayScanResult {
  id: string;
  success: boolean;
  target: {
    inputUrl: string;
    finalUrl: string;
    hostname: string;
    protocol: string;
    port: number;
    pathname: string;
  };
  http: {
    statusCode: number;
    statusText: string;
    redirectChain: Array<{ url: string; statusCode: number }>;
    headers: Record<string, string>;
    httpVersion?: string;
  };
  overallScore: {
    total: number;
    grade: "A+" | "A" | "B" | "C" | "D" | "F";
    breakdown: {
      security: number;
      seo: number;
      performance: number;
      modernTech: number;
    };
  };
  technologies: TechnologyDetection[];
  infrastructure: InfrastructureDetection;
  apis: ObservedApi[];
  thirdPartyServices: ThirdPartyService[];
  security: SecurityAudit;
  seo: SeoAudit;
  performance: PerformanceAudit;
  scanMeta: {
    scannedAts: string;
    durationMs: number;
    scannerVersion: string;
    cached: boolean;
    partial: boolean;
    warnings?: string[];
  };
}

export interface ScanRequestPayload {
  url: string;
  forceFresh?: boolean;
}

export interface ScanResponsePayload {
  success: boolean;
  data?: XRayScanResult;
  error?: string;
  errorCode?: "INVALID_URL" | "SSRF_BLOCKED" | "TOUTOUT" | "UNREACHABLE" | "RATE_LIMITED" | "INTERNAL_ERROR";
}
