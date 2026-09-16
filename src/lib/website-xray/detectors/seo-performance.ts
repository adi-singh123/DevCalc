/**
 * src/lib/website-xray/detectors/seo-performance.ts
 * HTML SEO elements parsing & asset distribution counting.
 */

import { SeoAudit, PerformanceAudit } from "../types";

function decodeHtml(value: string): string {
  const entities: Record<string, string> = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " };
  return value.replace(/&(#x[\da-f]+|#\d+|\w+);/gi, (_, entity: string) => {
    if (entity[0] === "#") {
      const hex = entity[1]?.toLowerCase() === "x";
      const code = Number.parseInt(entity.slice(hex ? 2 : 1), hex ? 16 : 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : _;
    }
    return entities[entity.toLowerCase()] ?? _;
  });
}

function attributes(tag: string): Record<string, string> {
  const result: Record<string, string> = {};
  for (const match of tag.matchAll(/([^\s=/>]+)\s*=\s*(?:["']([^"']*)["']|([^\s>]+))/g)) {
    result[match[1].toLowerCase()] = decodeHtml(match[2] ?? match[3] ?? "");
  }
  return result;
}

function findTag(html: string, tagName: string, predicate: (attrs: Record<string, string>) => boolean) {
  for (const match of html.matchAll(new RegExp(`<${tagName}\\b[^>]*>`, "gi"))) {
    const attrs = attributes(match[0]);
    if (predicate(attrs)) return attrs;
  }
}

function metaContent(html: string, attribute: "name" | "property", value: string) {
  return findTag(html, "meta", (attrs) => attrs[attribute]?.toLowerCase() === value.toLowerCase())?.content;
}

export function auditSeo(html: string): SeoAudit {
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  const title = titleMatch ? decodeHtml(titleMatch[1].trim()) : undefined;
  const titleLength = title ? title.length : 0;

  const description = metaContent(html, "name", "description")?.trim();
  const descriptionLength = description ? description.length : 0;

  const canonical = findTag(html, "link", (attrs) => attrs.rel?.toLowerCase().split(/\s+/).includes("canonical"))?.href?.trim();

  const robotsDirectives = metaContent(html, "name", "robots")?.trim();

  const h1Matches = Array.from(html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi));
  const h1Texts = h1Matches
    .map((m) => decodeHtml(m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()))
    .filter(Boolean);
  const h1Count = h1Texts.length;

  const ogTitle = metaContent(html, "property", "og:title");
  const ogDescription = metaContent(html, "property", "og:description");
  const ogImage = metaContent(html, "property", "og:image");
  const hasOpenGraph = Boolean(ogTitle || ogDescription || ogImage);

  const hasTwitterCard = Boolean(metaContent(html, "name", "twitter:card"));

  const jsonLdMatches = Array.from(
    html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)
  );
  const structuredDataTypes: string[] = [];
  let validStructuredDataCount = 0;
  for (const m of jsonLdMatches) {
    try {
      const parsed = JSON.parse(m[1]);
      validStructuredDataCount++;
      if (parsed["@type"]) {
        structuredDataTypes.push(String(parsed["@type"]));
      } else if (Array.isArray(parsed["@graph"])) {
        parsed["@graph"].forEach((item: { "@type"?: string }) => {
          if (item["@type"]) structuredDataTypes.push(String(item["@type"]));
        });
      }
    } catch {}
  }
  const hasStructuredData = validStructuredDataCount > 0;

  const hasViewport = Boolean(metaContent(html, "name", "viewport"));
  const hasFavicon = Boolean(findTag(html, "link", (attrs) => /(?:^|\s)(?:shortcut icon|icon|apple-touch-icon)(?:\s|$)/i.test(attrs.rel || "")));

  const htmlLang = findTag(html, "html", (attrs) => Boolean(attrs.lang))?.lang;

  const hasSitemapIndicator = html.includes("sitemap.xml");

  let score = 0;
  if (title && titleLength >= 10 && titleLength <= 70) score += 20;
  else if (title) score += 10;

  if (description && descriptionLength >= 50 && descriptionLength <= 170) score += 20;
  else if (description) score += 10;

  if (canonical) score += 10;
  if (h1Count === 1) score += 15;
  else if (h1Count > 1) score += 8;

  if (ogTitle && ogDescription && ogImage) score += 10;
  else if (hasOpenGraph) score += 5;
  if (hasTwitterCard) score += 5;
  if (hasStructuredData) score += 10;
  if (hasViewport) score += 5;
  if (htmlLang) score += 5;
  if (/\bnoindex\b/i.test(robotsDirectives || "")) score -= 15;

  return {
    score: Math.min(100, Math.max(0, score)),
    title,
    titleLength,
    description,
    descriptionLength,
    canonical,
    robotsDirectives,
    h1Count,
    h1Texts,
    hasOpenGraph,
    ogTitle,
    ogDescription,
    ogImage,
    hasTwitterCard,
    hasStructuredData,
    structuredDataTypes: Array.from(new Set(structuredDataTypes)),
    hasViewport,
    hasFavicon,
    htmlLang,
    hasSitemapIndicator,
  };
}

export function auditPerformance(
  html: string,
  timing: { dnsMs: number; connectMs: number; tlsMs: number; ttfbMs: number; totalMs: number },
  bodyBytes: number,
  contentEncoding?: string
): PerformanceAudit {
  const scriptsCount = (html.match(/<script\b/gi) || []).length;
  const stylesCount = (html.match(/<link\b[^>]*rel=["']stylesheet["']|<style\b/gi) || []).length;
  const imagesCount = (html.match(/<img\b|<picture\b/gi) || []).length;
  const fontsCount = (html.match(/fonts\.(?:googleapis|gstatic)\.com|\.woff2?/gi) || []).length;
  const apisCount = (html.match(/\/api\/|\/graphql/gi) || []).length;

  return {
    dnsLookupMs: timing.dnsMs,
    tcpConnectMs: timing.connectMs,
    tlsHandshakeMs: timing.tlsMs,
    ttfbMs: timing.ttfbMs,
    totalResponseTimeMs: timing.totalMs,
    contentLengthBytes: bodyBytes,
    contentEncoding,
    resourceCounts: {
      scripts: scriptsCount,
      stylesheets: stylesCount,
      images: imagesCount,
      fonts: fontsCount,
      apis: apisCount,
      thirdPartyRequests: 0,
      total: scriptsCount + stylesCount + imagesCount + fontsCount,
    },
  };
}
