const slug = process.env.BLOG_SLUG?.trim();
const siteUrl = (process.env.SITE_URL || "https://www.devcalc.in").replace(/\/$/, "");

if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  throw new Error("BLOG_SLUG must be a valid generated blog slug.");
}

const articleUrl = `${siteUrl}/blog/${slug}`;

async function fetchText(url, attempt) {
  const requestUrl = new URL(url);
  requestUrl.searchParams.set("publish_check", `${Date.now()}-${attempt}`);
  const response = await fetch(requestUrl, {
    cache: "no-store",
    headers: {
      "Cache-Control": "no-cache",
      "User-Agent": "DevCalc-Publish-Verification/1.0",
    },
    signal: AbortSignal.timeout(20_000),
  });
  return { ok: response.ok, status: response.status, text: await response.text() };
}

async function verify(attempt) {
  const [article, sitemap, rss] = await Promise.all([
    fetchText(articleUrl, attempt),
    fetchText(`${siteUrl}/sitemap.xml`, attempt),
    fetchText(`${siteUrl}/rss.xml`, attempt),
  ]);
  const failures = [];
  if (!article.ok || !article.text.includes(slug)) failures.push(`article (${article.status})`);
  if (!sitemap.ok || !sitemap.text.includes(articleUrl)) failures.push(`sitemap (${sitemap.status})`);
  if (!rss.ok || !rss.text.includes(articleUrl)) failures.push(`RSS (${rss.status})`);
  return failures;
}

let lastFailures = [];
const maxAttempts = 15;
for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
  lastFailures = await verify(attempt);
  if (lastFailures.length === 0) {
    console.log(`Verified public article, sitemap and RSS: ${articleUrl}`);
    process.exit(0);
  }
  console.log(`Verification attempt ${attempt}/${maxAttempts} waiting for publication: ${lastFailures.join(", ")}`);
  if (attempt < maxAttempts) await new Promise((resolve) => setTimeout(resolve, 20_000));
}

throw new Error(`Published article did not become publicly discoverable: ${lastFailures.join(", ")}`);
