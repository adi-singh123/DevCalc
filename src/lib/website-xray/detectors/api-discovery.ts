/**
 * src/lib/website-xray/detectors/api-discovery.ts
 * Scans document HTML, embedded scripts, RSC flight data, and client bundles
 * to discover public REST, GraphQL, AJAX, search/filter, and backend API endpoints.
 */

import { ObservedApi } from "@/src/lib/website-xray/types";

export function discoverApis(html: string, targetHostname: string): ObservedApi[] {
  const apis: ObservedApi[] = [];
  const seenPaths = new Set<string>();
  let idCounter = 1;

  const addApi = (
    endpoint: string,
    resourceType: ObservedApi["resourceType"],
    method: ObservedApi["method"] = "GET",
    source: ObservedApi["source"] = "html-discovery",
    initiator = "DOM / Script Discovery"
  ) => {
    let clean = endpoint.trim().replace(/^["'`]|["'`]$/g, "");
    
    // Ignore static asset extensions
    if (
      !clean ||
      clean.length < 2 ||
      clean.length > 200 ||
      clean.endsWith(".png") ||
      clean.endsWith(".jpg") ||
      clean.endsWith(".jpeg") ||
      clean.endsWith(".gif") ||
      clean.endsWith(".svg") ||
      clean.endsWith(".webp") ||
      clean.endsWith(".ico") ||
      clean.endsWith(".css") ||
      clean.endsWith(".woff") ||
      clean.endsWith(".woff2") ||
      clean.endsWith(".ttf") ||
      clean.startsWith("#") ||
      clean.startsWith("javascript:") ||
      clean.startsWith("mailto:")
    ) {
      return;
    }

    // Normalize path vs full URL
    let fullUrl = "";
    let path = "";
    let host = targetHostname;

    if (clean.startsWith("http://") || clean.startsWith("https://")) {
      try {
        const u = new URL(clean);
        host = u.hostname;
        path = u.pathname + u.search;
        fullUrl = clean;
      } catch {
        return;
      }
    } else {
      if (!clean.startsWith("/")) clean = `/${clean}`;
      path = clean;
      fullUrl = `https://${targetHostname}${clean}`;
    }

    // De-duplicate
    const key = `${method}:${host}:${path}`;
    if (seenPaths.has(key)) return;
    seenPaths.add(key);

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
        },
      },
    });
  };

  // 1. Explicit REST / GraphQL / Versioned APIs
  const restPatterns = [
    /(?:['"`])(\/api\/[a-zA-Z0-9_\-\/\.\[\]\?\=\&]+)(?:['"`])/gi,
    /(?:['"`])(\/graphql[a-zA-Z0-9_\-\/\.\[\]\?\=\&]*)(?:['"`])/gi,
    /(?:['"`])(\/v[1-9]\/[a-zA-Z0-9_\-\/\.\[\]\?\=\&]+)(?:['"`])/gi,
    /(?:['"`])(\/rest\/[a-zA-Z0-9_\-\/\.\[\]\?\=\&]+)(?:['"`])/gi,
    /(?:['"`])(\/ajax\/[a-zA-Z0-9_\-\/\.\[\]\?\=\&]+)(?:['"`])/gi,
    /(?:['"`])(\/wp-json\/[a-zA-Z0-9_\-\/\.\[\]\?\=\&]+)(?:['"`])/gi,
    /(?:['"`])(\/_next\/data\/[a-zA-Z0-9_\-\/\.\[\]\?\=\&]+)(?:['"`])/gi,
    /(?:['"`])(\/(?:service|services|gateway|backend|feed|json|data)\/[a-zA-Z0-9_\-\/\.\[\]\?\=\&]+)(?:['"`])/gi,
  ];

  for (const regex of restPatterns) {
    let match: RegExpExecArray | null;
    while ((match = regex.exec(html)) !== null) {
      const ep = match[1];
      const type: ObservedApi["resourceType"] = ep.includes("graphql")
        ? "graphql"
        : ep.includes("/json/") || ep.includes(".json")
        ? "static-json"
        : "rest";
      addApi(ep, type, "GET", "html-discovery", "Pattern Discovery");
      if (apis.length >= 35) break;
    }
  }

  // 2. Absolute API & Backend Subdomains (e.g., https://api.v3cars.com/...)
  const absoluteApiRegex = /https?:\/\/(?:api\.|backend\.|services\.|data\.|gateway\.)[a-zA-Z0-9\.\-]+(?:\/[a-zA-Z0-9_\-\/\.\?\=\&]+)?/gi;
  let absMatch: RegExpExecArray | null;
  while ((absMatch = absoluteApiRegex.exec(html)) !== null) {
    const url = absMatch[0];
    const type: ObservedApi["resourceType"] = url.includes("graphql") ? "graphql" : "rest";
    addApi(url, type, "GET", "script-analysis", "Backend Host Subdomain");
    if (apis.length >= 35) break;
  }

  // 3. Client fetch(), axios, and AJAX calls in scripts
  const fetchRegex = /fetch\(\s*["'`]?([a-zA-Z0-9_\-\/\.\?\=\&:\/]+)["'`]?/gi;
  let fetchMatch: RegExpExecArray | null;
  while ((fetchMatch = fetchRegex.exec(html)) !== null) {
    const ep = fetchMatch[1];
    if (ep.startsWith("/") || ep.startsWith("http")) {
      addApi(ep, "fetch", "GET", "script-analysis", "JavaScript fetch() invocation");
    }
    if (apis.length >= 35) break;
  }

  const axiosRegex = /axios(?:\.(?:get|post|put|delete|patch))?\(\s*["'`]?([a-zA-Z0-9_\-\/\.\?\=\&:\/]+)["'`]?/gi;
  let axiosMatch: RegExpExecArray | null;
  while ((axiosMatch = axiosRegex.exec(html)) !== null) {
    const ep = axiosMatch[1];
    if (ep.startsWith("/") || ep.startsWith("http")) {
      addApi(ep, "xhr", "GET", "script-analysis", "Axios client request");
    }
    if (apis.length >= 35) break;
  }

  // 4. API Configuration Variables (apiUrl, baseURL, API_ENDPOINT)
  const configVarRegex = /(?:apiUrl|baseURL|API_URL|endpoint|NEXT_PUBLIC_API_URL)\s*[:=]\s*["'`]?([^"'`\s;,>]+)["'`]?/gi;
  let configMatch: RegExpExecArray | null;
  while ((configMatch = configVarRegex.exec(html)) !== null) {
    const ep = configMatch[1];
    if (ep.startsWith("/") || ep.startsWith("http")) {
      addApi(ep, "discovered-endpoint", "GET", "script-analysis", "Client Config Variable (apiUrl/baseURL)");
    }
    if (apis.length >= 35) break;
  }

  // 5. Dynamic Search, Query, Filter & Pricing Endpoints (Next.js / SPA action routes)
  const dynamicQueryRegex = /(?:['"`])(\/(?:search|filter|compare|variant|pricing|calculate|query|autocomplete|lookup)\/[a-zA-Z0-9_\-\/\.\?\=\&]+)(?:['"`])/gi;
  let dynamicMatch: RegExpExecArray | null;
  while ((dynamicMatch = dynamicQueryRegex.exec(html)) !== null) {
    const ep = dynamicMatch[1];
    addApi(ep, "discovered-endpoint", "GET", "html-discovery", "Dynamic Filter / Query Endpoint");
    if (apis.length >= 35) break;
  }

  // 6. Form action endpoints with dynamic handlers
  const formActionRegex = /<form[^>]+action=["']([^"']+)["']/gi;
  let formMatch: RegExpExecArray | null;
  while ((formMatch = formActionRegex.exec(html)) !== null) {
    const action = formMatch[1];
    if (action && !action.startsWith("#")) {
      addApi(action, "discovered-endpoint", "POST", "html-discovery", "Form Submit Action Handler");
    }
    if (apis.length >= 35) break;
  }

  return apis;
}
