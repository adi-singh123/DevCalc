const slug = process.env.BLOG_SLUG?.trim();
const siteUrl = (process.env.SITE_URL || "https://www.devcalc.in").replace(/\/$/, "");

if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  throw new Error("BLOG_SLUG must be a valid generated blog slug.");
}

const articleUrl = `${siteUrl}/blog/${slug}`;

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { "User-Agent": "DevCalc-Publish-Verification/1.0" },
    signal: AbortSignal.timeout(20_000),
  });
  return { ok: response.ok, status: response.status, text: await response.text() };
}

async function verify() {
  const [article, sitemap, rss] = await Promise.all([
    fetchText(articleUrl),
    fetchText(`${siteUrl}/sitemap.xml`),
    fetchText(`${siteUrl}/rss.xml`),
  ]);
  const failures = [];
  if (!article.ok || !article.text.includes(slug)) failures.push(`article (${article.status})`);
  if (!sitemap.ok || !sitemap.text.includes(articleUrl)) failures.push(`sitemap (${sitemap.status})`);
  if (!rss.ok || !rss.text.includes(articleUrl)) failures.push(`RSS (${rss.status})`);
  return failures;
}

let lastFailures = [];
for (let attempt = 1; attempt <= 7; attempt += 1) {
  lastFailures = await verify();
  if (lastFailures.length === 0) {
    console.log(`Verified public article, sitemap and RSS: ${articleUrl}`);
    process.exit(0);
  }
  console.log(`Verification attempt ${attempt}/7 waiting for cache refresh: ${lastFailures.join(", ")}`);
  if (attempt < 7) await new Promise((resolve) => setTimeout(resolve, 20_000));
}

throw new Error(`Published article did not become publicly discoverable: ${lastFailures.join(", ")}`);
