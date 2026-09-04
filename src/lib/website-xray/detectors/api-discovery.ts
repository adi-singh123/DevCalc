/**
 * src/lib/website-xray/detectors/api-discovery.ts
 * Scans document HTML, embedded scripts, RSC flight data, JSON-LD, and client bundles
 * to discover public REST, GraphQL, AJAX, search/filter, and backend API endpoints.
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

    // Ignore static asset extensions, CSS, images, and fonts
    if (
      !clean ||
      clean.length < 2 ||
      clean.length > 250 ||
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

    // Filter out common UI anchor links that are not API endpoints (e.g., pure static html pages)
    if (path.endsWith(".html") || path.endsWith(".htm")) {
      return;
    }

    // De-duplicate by method + host + path
    const key = `${method}:${host}:${path}`;
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

  // 2. Absolute API & Backend Subdomains (e.g., https://api.domain.com/..., https://cms.domain.com/...)
  const absoluteApiRegex = /https?:\/\/(?:[a-zA-Z0-9_-]+\.)*(?:api|backend|services|data|gateway|cms|auth|search|gql|cdn-api)\.[a-zA-Z0-9.-]+(?:\/[a-zA-Z0-9_\-/\.?=&%+]+)?/gi;
  let absMatch: RegExpExecArray | null;
  while ((absMatch = absoluteApiRegex.exec(combinedContent)) !== null) {
    const url = absMatch[0];
    const type: ObservedApi["resourceType"] = url.toLowerCase().includes("graphql") ? "graphql" : "rest";
    addApi(url, type, "GET", "script-analysis", "Backend Host Subdomain");
    if (apis.length >= 80) break;
  }

  // 3. Client HTTP calls: fetch(), axios, $.ajax, XMLHttpRequest
  const fetchRegex = /fetch\(\s*["'`]?([a-zA-Z0-9_\-/\.?=&%+:/]+)["'`]?/gi;
  let fetchMatch: RegExpExecArray | null;
  while ((fetchMatch = fetchRegex.exec(combinedContent)) !== null) {
    const ep = fetchMatch[1];
    if (ep.startsWith("/") || ep.startsWith("http")) {
      addApi(ep, "fetch", "GET", "script-analysis", "JavaScript fetch() call");
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

  const jqueryAjaxRegex = /\$\.(?:ajax|get|post|getJSON)\(\s*["'`]?([a-zA-Z0-9_\-/\.?=&%+:/]+)["'`]?/gi;
  let jqMatch: RegExpExecArray | null;
  while ((jqMatch = jqueryAjaxRegex.exec(combinedContent)) !== null) {
    const ep = jqMatch[1];
    if (ep.startsWith("/") || ep.startsWith("http")) {
      addApi(ep, "xhr", "GET", "script-analysis", "jQuery AJAX invocation");
    }
    if (apis.length >= 80) break;
  }

  // 4. API Configuration Constants & Environment Variables
  const configVarRegex = /(?:apiUrl|baseURL|API_URL|API_ENDPOINT|NEXT_PUBLIC_API_URL|REACT_APP_API_URL|VITE_API_URL|base_url)\s*[:=]\s*["'`]?([^"'`\s;,>]+)["'`]?/gi;
  let configMatch: RegExpExecArray | null;
  while ((configMatch = configVarRegex.exec(combinedContent)) !== null) {
    const ep = configMatch[1];
    if (ep.startsWith("/") || ep.startsWith("http")) {
      addApi(ep, "discovered-endpoint", "GET", "script-analysis", "Client Config Variable (apiUrl/baseURL)");
    }
    if (apis.length >= 80) break;
  }

  // 5. Dynamic Search, Auto-Suggest, Filter, Variant & Pricing Endpoints
  const dynamicQueryRegex = /(?:['"`])(\/(?:search|filter|compare|variant|pricing|calculate|query|autocomplete|suggest|lookup|find|feed|catalog|api-v[1-9])(?:[/?][a-zA-Z0-9_\-/\.?=&%+]+)?)(?:['"`])/gi;
  let dynamicMatch: RegExpExecArray | null;
  while ((dynamicMatch = dynamicQueryRegex.exec(combinedContent)) !== null) {
    const ep = dynamicMatch[1];
    addApi(ep, "discovered-endpoint", "GET", "html-discovery", "Dynamic Filter / Search / Suggest Endpoint");
    if (apis.length >= 80) break;
  }

  // 6. OpenAPI / Swagger & Schema Feeds
  const swaggerRegex = /(?:['"`])(\/(?:swagger|openapi|api-docs|schema)[a-zA-Z0-9_\-/\.?=&%+]*(?:\.json|\.yaml|\.yml)?)(?:['"`])/gi;
  let swMatch: RegExpExecArray | null;
  while ((swMatch = swaggerRegex.exec(combinedContent)) !== null) {
    const ep = swMatch[1];
    addApi(ep, "static-json", "GET", "html-discovery", "OpenAPI / Swagger Schema Spec");
    if (apis.length >= 80) break;
  }

  // 7. Form POST / Action endpoints
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
