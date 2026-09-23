const baseUrl = process.env.AUDIT_BASE_URL || "http://127.0.0.1:3102";

function visibleWordCount(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[^;]+;/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
if (!sitemapResponse.ok) {
  throw new Error(`Sitemap returned ${sitemapResponse.status}`);
}

const sitemap = await sitemapResponse.text();
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  (match) => new URL(match[1]).pathname,
);

let nextIndex = 0;
const results = [];

async function inspectNextPage() {
  while (nextIndex < paths.length) {
    const path = paths[nextIndex++];
    const response = await fetch(`${baseUrl}${path}`);
    const html = await response.text();

    results.push({
      path,
      status: response.status,
      title: /<title>[^<]+<\/title>/i.test(html),
      description: /<meta name="description" content="[^"]+/i.test(html),
      canonical: /<link rel="canonical" href="[^"]+/i.test(html),
      indexable: /<meta name="robots" content="[^"]*index/i.test(html),
      h1Count: (html.match(/<h1\b/gi) || []).length,
      structuredData: /application\/ld\+json/i.test(html),
      breadcrumb: path === "/" || /BreadcrumbList/.test(html),
      visibleWords: visibleWordCount(html),
    });
  }
}

await Promise.all(Array.from({ length: 10 }, inspectNextPage));

const failures = results.filter(
  (page) =>
    page.status !== 200 ||
    !page.title ||
    !page.description ||
    !page.canonical ||
    !page.indexable ||
    page.h1Count !== 1 ||
    !page.structuredData ||
    !page.breadcrumb ||
    page.visibleWords < 150,
);

console.log(
  JSON.stringify(
    {
      checked: results.length,
      passed: results.length - failures.length,
      failed: failures.length,
      failures,
    },
    null,
    2,
  ),
);

if (failures.length) {
  process.exitCode = 1;
}
