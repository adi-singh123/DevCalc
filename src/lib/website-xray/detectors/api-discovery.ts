/**
 * Finds API requests that are explicitly referenced by a document or its client bundles.
 * This is static analysis: it does not claim that inferred routes were observed on the wire.
 */

import { ObservedApi } from "@/src/lib/website-xray/types";

const STATIC_ASSET_RE = /\.(?:avif|bmp|css|eot|gif|ico|jpe?g|m4a|map|mp3|mp4|ogg|otf|pdf|png|svg|ttf|webm|webp|woff2?)(?:[?#]|$)/i;
const API_PATH_RE = /(?:^|\/)(?:api|_api|api-v\d+|rest|ajax|graphql|gql|trpc|rpc|wp-json|services?|gateway|backend)(?:\/|\?|$)/i;
const HTTP_METHODS = new Set<ObservedApi["method"]>([
  "GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS",
]);

function requestMethod(value: string | undefined, fallback: ObservedApi["method"]): ObservedApi["method"] {
  const method = value?.toUpperCase() as ObservedApi["method"] | undefined;
  return method && HTTP_METHODS.has(method) ? method : fallback;
}

function resourceTypeFor(endpoint: string, kind: "fetch" | "xhr" | "rest"): ObservedApi["resourceType"] {
  if (/graphql|\/gql(?:\/|\?|$)/i.test(endpoint)) return "graphql";
  if (/\/_next\/data\/|\.json(?:[?#]|$)/i.test(endpoint)) return "static-json";
  return kind;
}

/** Turns minified string concatenation into a readable endpoint template. */
function concatExpressionToTemplate(expression: string): string | null {
  const stringParts = Array.from(expression.matchAll(/['"`]([^'"`]*)['"`]/g), (match) => match[1]);
  if (stringParts.length === 0) return null;

  const firstUrlPart = stringParts.findIndex((part) => part.startsWith("/") || /^https?:\/\//i.test(part));
  if (firstUrlPart < 0) return null;

  let result = stringParts[firstUrlPart];
  for (let index = firstUrlPart + 1; index < stringParts.length; index++) {
    result += `{value}${stringParts[index]}`;
  }
  return result || null;
}

function findFirstCallArguments(content: string, callStart: RegExp): Array<{ firstArgument: string; tail: string }> {
  const calls: Array<{ firstArgument: string; tail: string }> = [];
  let start: RegExpExecArray | null;

  while ((start = callStart.exec(content)) !== null) {
    const argumentStart = callStart.lastIndex;
    let quote = "";
    let escaped = false;
    let depth = 0;
    let end = argumentStart;

    for (; end < content.length; end++) {
      const character = content[end];
      if (quote) {
        if (escaped) escaped = false;
        else if (character === "\\") escaped = true;
        else if (character === quote) quote = "";
        continue;
      }
      if (character === '"' || character === "'" || character === "`") quote = character;
      else if (character === "(") depth++;
      else if (character === ")") {
        if (depth === 0) break;
        depth--;
      } else if (character === "," && depth === 0) break;
    }

    const firstArgument = content.slice(argumentStart, end).trim();
    if (firstArgument) calls.push({ firstArgument, tail: content.slice(end, end + 700) });
    callStart.lastIndex = Math.max(callStart.lastIndex, end);
  }
  return calls;
}

export function discoverApis(html: string, scriptsContent: string, targetUrl: string): ObservedApi[] {
  const apis: ObservedApi[] = [];
  const seenKeys = new Set<string>();
  const combinedContent = `${html}\n${scriptsContent || ""}`;
  let idCounter = 1;

  let baseUrl: URL;
  try {
    baseUrl = new URL(targetUrl.includes("://") ? targetUrl : `https://${targetUrl}`);
  } catch {
    return [];
  }

  const addApi = (
    endpoint: string,
    kind: "fetch" | "xhr" | "rest",
    method: ObservedApi["method"],
    source: ObservedApi["source"],
    initiator: string,
    requireApiShape = false
  ) => {
    let clean = endpoint
      .trim()
      .replace(/^['"`]|['"`]$/g, "")
      .replace(/\\\//g, "/")
      .replace(/\\u0026/gi, "&")
      .replace(/&amp;/gi, "&")
      .replace(/[;,)+]+$/, "");

    if (
      !clean || clean.length > 600 || clean.startsWith("#") ||
      /^(?:data|blob|javascript|mailto|tel):/i.test(clean) ||
      STATIC_ASSET_RE.test(clean) || /\/_next\/static\//i.test(clean)
    ) return;

    if (/^[a-zA-Z_$][\w$]*$/.test(clean)) return;

    let resolved: URL;
    try {
      resolved = new URL(clean, baseUrl);
    } catch {
      return;
    }
    if (!/^https?:$/.test(resolved.protocol)) return;
    const baseIsLocal = /^(?:localhost|127\.0\.0\.1|\[::1\])$/i.test(baseUrl.hostname);
    const resultIsLocal = /^(?:localhost|127\.0\.0\.1|\[::1\])$/i.test(resolved.hostname);
    if (!baseIsLocal && resultIsLocal) return;
    if (requireApiShape && !API_PATH_RE.test(resolved.pathname) && !/\.json$/i.test(resolved.pathname)) return;
    if (requireApiShape && /^\/v\d+\/?$/i.test(resolved.pathname)) return;

    const path = `${resolved.pathname}${resolved.search}`.replace(/%7Bvalue%7D/gi, "{value}");
    const key = `${method}:${resolved.host}:${path}`;
    if (seenKeys.has(key)) return;
    seenKeys.add(key);

    apis.push({
      id: `api-${idCounter++}`,
      method,
      url: resolved.toString(),
      path,
      host: resolved.host,
      resourceType: resourceTypeFor(path, kind),
      source,
      details: { initiator },
    });
  };

  // fetch(url, { method: "POST" }) and fetch(url).
  const fetchRegex = /\bfetch\s*\(\s*['"`]([^'"`]{1,600})['"`](?:\s*,\s*\{([\s\S]{0,1000}?)\})?/gi;
  let match: RegExpExecArray | null;
  while ((match = fetchRegex.exec(combinedContent)) !== null) {
    const method = requestMethod(match[2]?.match(/\bmethod\s*:\s*['"`]([A-Z]+)['"`]/i)?.[1], "GET");
    addApi(match[1], "fetch", method, "script-analysis", "fetch() request");
  }

  // axios.get(url), axios.post(url), etc.
  const axiosMethodRegex = /\baxios\s*\.\s*(get|post|put|patch|delete|head|options)\s*\(\s*['"`]([^'"`]{1,600})['"`]/gi;
  while ((match = axiosMethodRegex.exec(combinedContent)) !== null) {
    addApi(match[2], "xhr", requestMethod(match[1], "GET"), "script-analysis", `axios.${match[1].toLowerCase()}() request`);
  }

  // axios({ url: "/api/...", method: "post" }) and common request-client configs.
  const requestConfigRegex = /\b(?:axios|request)\s*\(\s*\{([\s\S]{0,1600}?)\}\s*\)/gi;
  while ((match = requestConfigRegex.exec(combinedContent)) !== null) {
    const config = match[1];
    const endpoint = config.match(/\burl\s*:\s*['"`]([^'"`]{1,600})['"`]/i)?.[1];
    if (!endpoint) continue;
    const method = requestMethod(config.match(/\bmethod\s*:\s*['"`]([A-Z]+)['"`]/i)?.[1], "GET");
    addApi(endpoint, "xhr", method, "script-analysis", "HTTP client request config");
  }

  // XMLHttpRequest.open(method, url).
  const xhrRegex = /\.open\s*\(\s*['"`](GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)['"`]\s*,\s*['"`]([^'"`]{1,600})['"`]/gi;
  while ((match = xhrRegex.exec(combinedContent)) !== null) {
    addApi(match[2], "xhr", requestMethod(match[1], "GET"), "script-analysis", "XMLHttpRequest.open() request");
  }

  // jQuery shorthand calls and $.ajax({ url, method/type }).
  const jqueryMethodRegex = /\$\.(get|post|getJSON)\s*\(\s*['"`]([^'"`]{1,600})['"`]/gi;
  while ((match = jqueryMethodRegex.exec(combinedContent)) !== null) {
    addApi(match[2], "xhr", match[1].toLowerCase() === "post" ? "POST" : "GET", "script-analysis", `jQuery $.${match[1]}() request`);
  }
  const jqueryAjaxRegex = /\$\.ajax\s*\(\s*\{([\s\S]{0,1600}?)\}\s*\)/gi;
  while ((match = jqueryAjaxRegex.exec(combinedContent)) !== null) {
    const config = match[1];
    const endpoint = config.match(/\burl\s*:\s*['"`]([^'"`]{1,600})['"`]/i)?.[1];
    if (!endpoint) continue;
    const method = requestMethod(config.match(/\b(?:method|type)\s*:\s*['"`]([A-Z]+)['"`]/i)?.[1], "GET");
    addApi(endpoint, "xhr", method, "script-analysis", "jQuery $.ajax() request");
  }

  // Browser data channels with fixed request semantics.
  const beaconRegex = /\bnavigator\.sendBeacon\s*\(\s*['"`]([^'"`]{1,600})['"`]/gi;
  while ((match = beaconRegex.exec(combinedContent)) !== null) {
    addApi(match[1], "fetch", "POST", "script-analysis", "navigator.sendBeacon() request");
  }
  const eventSourceRegex = /\bnew\s+EventSource\s*\(\s*['"`]([^'"`]{1,600})['"`]/gi;
  while ((match = eventSourceRegex.exec(combinedContent)) !== null) {
    addApi(match[1], "fetch", "GET", "script-analysis", "EventSource stream");
  }

  // Minified API clients commonly hide endpoints behind a small wrapper:
  // `return a("/cars/models/".concat(id, "/prices"), options)`.
  const wrappedRequests = findFirstCallArguments(
    scriptsContent,
    /(?:return|await)\s+[$A-Z_a-z][$\w]{0,5}\s*\(\s*/g
  );
  for (const request of wrappedRequests) {
    const endpoint = concatExpressionToTemplate(request.firstArgument);
    if (!endpoint || !endpoint.startsWith("/")) continue;
    const method = requestMethod(request.tail.match(/\bmethod\s*:\s*['"`]([A-Z]+)['"`]/i)?.[1], "GET");
    addApi(endpoint, "fetch", method, "script-analysis", "Client API wrapper request");
  }

  // Reconstruct direct fetch calls whose URL is built with String.concat().
  const concatenatedFetches = findFirstCallArguments(scriptsContent, /\bfetch\s*\(\s*/g);
  for (const request of concatenatedFetches) {
    if (!request.firstArgument.includes(".concat(")) continue;
    const endpoint = concatExpressionToTemplate(request.firstArgument);
    if (!endpoint || (!endpoint.startsWith("/") && !endpoint.startsWith("http"))) continue;
    const method = requestMethod(request.tail.match(/\bmethod\s*:\s*['"`]([A-Z]+)['"`]/i)?.[1], "GET");
    addApi(endpoint, "fetch", method, "script-analysis", "fetch() concatenated request");
  }

  // Explicit API-looking URL literals that may be passed through a wrapper.
  const apiLiteralRegex = /['"`]((?:https?:\/\/[^'"`\s]{1,600}|\/[^'"`\s]{1,600}))['"`]/gi;
  while ((match = apiLiteralRegex.exec(combinedContent)) !== null) {
    addApi(match[1], "rest", "GET", "script-analysis", "API URL referenced in client code", true);
  }

  // HTML forms are real browser submissions, not inferred API GETs.
  const formRegex = /<form\b([^>]*)>/gi;
  while ((match = formRegex.exec(html)) !== null) {
    const attrs = match[1];
    const action = attrs.match(/\baction\s*=\s*['"]([^'"]+)['"]/i)?.[1];
    if (!action) continue;
    const method = requestMethod(attrs.match(/\bmethod\s*=\s*['"]([^'"]+)['"]/i)?.[1], "GET");
    addApi(action, "rest", method, "html-discovery", "HTML form submission");
  }

  // Put write operations and direct request-call evidence ahead of inferred literals.
  const methodRank: Record<ObservedApi["method"], number> = {
    POST: 0, PUT: 1, PATCH: 2, DELETE: 3, GET: 4, HEAD: 5, OPTIONS: 6,
  };
  return apis
    .sort((a, b) => methodRank[a.method] - methodRank[b.method] || (a.resourceType === "rest" ? 1 : 0) - (b.resourceType === "rest" ? 1 : 0))
    .slice(0, 100)
    .map((api, index) => ({ ...api, id: `api-${index + 1}` }));
}
