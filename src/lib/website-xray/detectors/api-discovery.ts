/**
 * src/lib/website-xray/detectors/api-discovery.ts
 * Scans document HTML, embedded scripts, Next.js App Router chunks, JSON-LD feeds,
 * and CDN image transform APIs to discover public REST, GraphQL, AJAX, dynamic query/calculation routes.
 */

import { ObservedApi } from "@/src/lib/website-xray/types";

export function discoverApis(html: string, scriptsContent: string, targetHostname: string): ObservedApi[] {
  const apis: ObservedApi[] = [];
  const seenKeys = new Set<string>();
  let idCounter = 1;

  // Combine HTML + fetched script bundles for complete inspection
  const combinedContent = `${html}\n\n${scriptsContent || ""}`;

  const addApi = (
    endpoint: string,
    resourceType: ObservedApi["resourceType"],
    method: ObservedApi["method"] = "GET",
    source: ObservedApi["source"] = "html-discovery",
    initiator = "DOM / Script Discovery"
  ) => {
    let clean = endpoint
      .trim()
      .replace(/^["'`]|["'`]$/g, "")
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'")
      .replace(/\\n|\\r|\\t/g, "")
      .replace(/[,;)}]$/, "");

    const isCdnTransform =
      clean.includes("/cdn-cgi/image/") ||
      clean.includes("/_next/image") ||
      clean.includes("imgix.net") ||
      clean.includes("cloudinary.com");

    // Ignore raw static asset files unless they are dynamic CDN image transform APIs
    if (!isCdnTransform) {
      if (
        !clean ||
        clean.length < 2 ||
        clean.length > 300 ||
        clean.endsWith(".png") ||
        clean.endsWith(".jpg") ||
        clean.endsWith(".jpeg") ||
        clean.endsWith(".gif") ||
        clean.endsWith(".svg") ||
        clean.endsWith(".webp") ||
        clean.endsWith(".avif") ||
        clean.endsWith(".ico") ||
        clean.endsWith(".css") ||
        clean.endsWith(".woff") ||
        clean.endsWith(".woff2") ||
        clean.endsWith(".ttf") ||
        clean.endsWith(".eot") ||
        clean.endsWith(".mp4") ||
        clean.endsWith(".webm") ||
        clean.startsWith("#") ||
        clean.startsWith("javascript:") ||
        clean.startsWith("mailto:") ||
        clean.startsWith("tel:")
      ) {
        return;
      }
    }

    // Normalize path vs full URL
    let fullUrl = "";
    let path = "";
    let host = targetHostname;

    if (clean.startsWith("http://") || clean.startsWith("https://")) {
      try {
        const u = new URL(clean);
        host = u.hostname;
        path = u.pathname + (u.search || "");
        fullUrl = clean;
      } catch {
        return;
      }
    } else {
      if (!clean.startsWith("/")) clean = `/${clean}`;
      path = clean;
      fullUrl = `https://${targetHostname}${clean}`;
    }

    // Filter out pure static html document links
    if (path.endsWith(".html") || path.endsWith(".htm")) {
      return;
    }

    // De-duplicate by method + host + clean path
    const key = `${method}:${host}:${path.slice(0, 120)}`;
    if (seenKeys.has(key)) return;
    seenKeys.add(key);

    apis.push({
      id: `api-${idCounter++}`,
      method,
      url: fullUrl,
      path,
      host,
      resourceType,
      source,
      details: {
        initiator,
        headersRedacted: {
          authorization: "[REDACTED]",
          cookie: "[REDACTED]",
          "content-type": "application/json",
          "accept": "application/json, text/plain, */*",
        },
      },
    });
  };

  // 1. Explicit REST / Versioned / Microservice APIs
  const restPatterns = [
    /(?:['"`])(\/api\/[a-zA-Z0-9_\-\/\.\[\]\?\=\&\%\+]+)(?:['"`])/gi,
    /(?:['"`])(\/_api\/[a-zA-Z0-9_\-\/\.\[\]\?\=\&\%\+]+)(?:['"`])/gi,
    /(?:['"`])(\/v[1-9]\/[a-zA-Z0-9_\-\/\.\[\]\?\=\&\%\+]+)(?:['"`])/gi,
    /(?:['"`])(\/rest\/[a-zA-Z0-9_\-\/\.\[\]\?\=\&\%\+]+)(?:['"`])/gi,
    /(?:['"`])(\/ajax\/[a-zA-Z0-9_\-\/\.\[\]\?\=\&\%\+]+)(?:['"`])/gi,
    /(?:['"`])(\/wp-json\/[a-zA-Z0-9_\-\/\.\[\]\?\=\&\%\+]+)(?:['"`])/gi,
    /(?:['"`])(\/_next\/data\/[a-zA-Z0-9_\-\/\.\[\]\?\=\&\%\+]+)(?:['"`])/gi,
    /(?:['"`])(\/trpc\/[a-zA-Z0-9_\-\/\.\[\]\?\=\&\%\+]+)(?:['"`])/gi,
    /(?:['"`])(\/(?:service|services|gateway|backend|feed|json|data|rpc)\/[a-zA-Z0-9_\-\/\.\[\]\?\=\&\%\+]+)(?:['"`])/gi,
    /(?:['"`])(\/graphql[a-zA-Z0-9_\-\/\.\[\]\?\=\&\%\+]*)(?:['"`])/gi,
  ];

  for (const regex of restPatterns) {
    let match: RegExpExecArray | null;
    while ((match = regex.exec(combinedContent)) !== null) {
      const ep = match[1];
      const isGraphQL = ep.toLowerCase().includes("graphql");
      const isStaticJson = ep.includes(".json") || ep.includes("/json/") || ep.includes("/feed");
      const type: ObservedApi["resourceType"] = isGraphQL
        ? "graphql"
        : isStaticJson
        ? "static-json"
        : "rest";

      addApi(ep, type, "GET", "script-analysis", "REST / Gateway Endpoint Pattern");
      if (apis.length >= 80) break;
    }
  }

  // 2. CDN Image Transformation & Processing APIs (e.g. Cloudflare Image Resizing / Next.js Image Optimization)
  const cdnImageRegex = /https?:\/\/[a-zA-Z0-9_\-\.]+(?:\/cdn-cgi\/image\/[^"'\s>]+|\/_next\/image\?[^"'\s>]+)/gi;
  let cdnMatch: RegExpExecArray | null;
  while ((cdnMatch = cdnImageRegex.exec(combinedContent)) !== null) {
    const ep = cdnMatch[0];
    addApi(ep, "cdn-transform", "GET", "html-discovery", "CDN Dynamic Image Transform & Optimization API");
    if (apis.length >= 80) break;
  }

  // 3. Dynamic Comparison, Calculation, Specs & Filtering Routes
  const dynamicQueryRegex = /(?:['"`])(\/(?:compare-cars|variant-explained|which-variant|engine-specifications|price-in-[a-zA-Z0-9_\-]+|search|filter|compare|variant|pricing|calculate|query|autocomplete|suggest|lookup|find|feed|catalog|api-v[1-9])(?:[/?][a-zA-Z0-9_\-\/\.\[\]\?\=\&\%\+]+)?)(?:['"`])/gi;
  let dynamicMatch: RegExpExecArray | null;
  while ((dynamicMatch = dynamicQueryRegex.exec(combinedContent)) !== null) {
    const ep = dynamicMatch[1];
    addApi(ep, "discovered-endpoint", "GET", "html-discovery", "Dynamic Comparison / Calculation / Search Route");
    if (apis.length >= 80) break;
  }

  // 4. Absolute API & Backend Subdomains (e.g., https://api.domain.com/..., https://assets.domain.com/...)
  const absoluteApiRegex = /https?:\/\/(?:[a-zA-Z0-9_-]+\.)*(?:api|backend|services|data|gateway|cms|auth|search|gql|cdn-api|assets)\.[a-zA-Z0-9.-]+(?:\/[a-zA-Z0-9_\-/\.?=&%+]+)?/gi;
  let absMatch: RegExpExecArray | null;
  while ((absMatch = absoluteApiRegex.exec(combinedContent)) !== null) {
    const url = absMatch[0];
    const isAsset = url.includes("assets.") || url.includes("cdn.");
    const type: ObservedApi["resourceType"] = url.toLowerCase().includes("graphql")
      ? "graphql"
      : isAsset
      ? "microservice"
      : "rest";
    addApi(url, type, "GET", "script-analysis", "Backend / Microservice Subdomain");
    if (apis.length >= 80) break;
  }

  // 5. Next.js App Router Client Chunks & Static Bundles
  const nextChunksRegex = /(?:['"`])(\/_next\/static\/(?:chunks|css)\/[a-zA-Z0-9_\-/\.?=&%+]+)(?:['"`])/gi;
  let chunkMatch: RegExpExecArray | null;
  let chunkCount = 0;
  while ((chunkMatch = nextChunksRegex.exec(combinedContent)) !== null) {
    if (chunkCount < 8) {
      addApi(chunkMatch[1], "next-data", "GET", "html-discovery", "Next.js App Router Client Chunk");
      chunkCount++;
    }
  }

  // 6. Structured Data JSON-LD Schemas (Schema.org API Data Feeds)
  const jsonLdRegex = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let ldMatch: RegExpExecArray | null;
  while ((ldMatch = jsonLdRegex.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(ldMatch[1]);
      const schemaType = parsed["@type"] || "Schema";
      addApi(
        `/@json-ld/${schemaType.toString().toLowerCase()}`,
        "structured-data",
        "GET",
        "html-discovery",
        `JSON-LD Structured Data Schema (${schemaType})`
      );
    } catch {
      // Ignore malformed JSON-LD
    }
  }

  // 7. Client HTTP calls: fetch(), axios, $.ajax, XMLHttpRequest
  const fetchRegex = /fetch\(\s*["'`]?([a-zA-Z0-9_\-/\.?=&%+:/]+)["'`]?/gi;
  let fetchMatch: RegExpExecArray | null;
  while ((fetchMatch = fetchRegex.exec(combinedContent)) !== null) {
    const ep = fetchMatch[1];
    if (ep.startsWith("/") || ep.startsWith("http")) {
      addApi(ep, "fetch", "GET", "script-analysis", "JavaScript fetch() invocation");
    }
    if (apis.length >= 80) break;
  }

  const axiosRegex = /axios(?:\.(?:get|post|put|delete|patch))?\(\s*["'`]?([a-zA-Z0-9_\-/\.?=&%+:/]+)["'`]?/gi;
  let axiosMatch: RegExpExecArray | null;
  while ((axiosMatch = axiosRegex.exec(combinedContent)) !== null) {
    const ep = axiosMatch[1];
    if (ep.startsWith("/") || ep.startsWith("http")) {
      addApi(ep, "xhr", "GET", "script-analysis", "Axios client request");
    }
    if (apis.length >= 80) break;
  }

  // 8. Client Configuration Constants & Environment Variables
  const configVarRegex = /(?:apiUrl|baseURL|API_URL|API_ENDPOINT|NEXT_PUBLIC_API_URL|REACT_APP_API_URL|VITE_API_URL|base_url)\s*[:=]\s*["'`]?([^"'`\s;,>]+)["'`]?/gi;
  let configMatch: RegExpExecArray | null;
  while ((configMatch = configVarRegex.exec(combinedContent)) !== null) {
    const ep = configMatch[1];
    if (ep.startsWith("/") || ep.startsWith("http")) {
      addApi(ep, "discovered-endpoint", "GET", "script-analysis", "Client Config Variable (apiUrl/baseURL)");
    }
    if (apis.length >= 80) break;
  }

  // 9. Form POST / Action endpoints
  const formActionRegex = /<form[^>]+action=["']([^"']+)["']/gi;
  let formMatch: RegExpExecArray | null;
  while ((formMatch = formActionRegex.exec(html)) !== null) {
    const action = formMatch[1];
    if (action && !action.startsWith("#") && !action.endsWith(".html")) {
      addApi(action, "discovered-endpoint", "POST", "html-discovery", "Form Submit Action Handler");
    }
    if (apis.length >= 80) break;
  }

  return apis;
}
