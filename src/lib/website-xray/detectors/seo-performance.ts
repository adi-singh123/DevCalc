/**
 * src/lib/website-xray/detectors/seo-performance.ts
 * HTML SEO elements parsing & asset distribution counting.
 */

import { SeoAudit, PerformanceAudit } from "../types";

export function auditSeo(html: string): SeoAudit {
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : undefined;
  const titleLength = title ? title.length : 0;

  const descMatch =
    html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i) ||
    html.match(/<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i);
  const description = descMatch ? descMatch[1].trim() : undefined;
  const descriptionLength = description ? description.length : 0;

  const canonMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
  const canonical = canonMatch ? canonMatch[1].trim() : undefined;

  const robotsMatch = html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i);
  const robotsDirectives = robotsMatch ? robotsMatch[1].trim() : undefined;

  const h1Matches = Array.from(html.matchAll(/<h1[^>]*>([^<]*)<\/h1>/gi));
  const h1Texts = h1Matches.map((m) => m[1].trim()).filter(Boolean);
  const h1Count = h1Texts.length;

  const ogTitleMatch = html.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']*)["']/i);
  const ogDescMatch = html.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']*)["']/i);
  const ogImgMatch = html.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']*)["']/i);
  const hasOpenGraph = Boolean(ogTitleMatch || ogDescMatch || ogImgMatch);

  const twitterMatch = html.match(/<meta\s+name=["']twitter:card["']/i);
  const hasTwitterCard = Boolean(twitterMatch);

  const jsonLdMatches = Array.from(
    html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)
  );
  const structuredDataTypes: string[] = [];
  for (const m of jsonLdMatches) {
    try {
      const parsed = JSON.parse(m[1]);
      if (parsed["@type"]) {
        structuredDataTypes.push(String(parsed["@type"]));
      } else if (Array.isArray(parsed["@graph"])) {
        parsed["@graph"].forEach((item: { "@type"?: string }) => {
          if (item["@type"]) structuredDataTypes.push(String(item["@type"]));
        });
      }
    } catch {}
  }
  const hasStructuredData = jsonLdMatches.length > 0;

  const hasViewport = /<meta\s+name=["']viewport["']/i.test(html);
  const hasFavicon = /<link\s+[^>]*rel=["'](?:shortcut icon|icon|apple-touch-icon)["']/i.test(html);

  const langMatch = html.match(/<html[^>]*\slang=["']([^"']+)["']/i);
  const htmlLang = langMatch ? langMatch[1] : undefined;

  const hasSitemapIndicator = html.includes("sitemap.xml");

  let score = 0;
  if (title && titleLength >= 10 && titleLength <= 70) score += 20;
  else if (title) score += 10;

  if (description && descriptionLength >= 50 && descriptionLength <= 170) score += 20;
  else if (description) score += 10;

  if (canonical) score += 10;
  if (h1Count === 1) score += 15;
  else if (h1Count > 1) score += 8;

  if (hasOpenGraph) score += 10;
  if (hasTwitterCard) score += 5;
  if (hasStructuredData) score += 10;
  if (hasViewport) score += 5;
  if (htmlLang) score += 5;

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
    ogTitle: ogTitleMatch ? ogTitleMatch[1] : undefined,
    ogDescription: ogDescMatch ? ogDescMatch[1] : undefined,
    ogImage: ogImgMatch ? ogImgMatch[1] : undefined,
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

