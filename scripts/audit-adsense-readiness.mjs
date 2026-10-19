const baseUrl = (process.env.AUDIT_BASE_URL || "https://www.devcalc.in").replace(/\/$/, "");
const minimumWords = Number(process.env.AUDIT_MIN_WORDS || 120);

function decodeXml(value) {
  return value.replaceAll("&amp;", "&").replaceAll("&lt;", "<").replaceAll("&gt;", ">");
}

function visibleText(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z0-9#]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function request(url) {
  const response = await fetch(url, {
    redirect: "follow",
    headers: { "user-agent": "DevCalc readiness audit/1.0" },
  });
  return { response, text: await response.text() };
}

const failures = [];
const notices = [];
const { response: sitemapResponse, text: sitemap } = await request(`${baseUrl}/sitemap.xml`);
if (!sitemapResponse.ok) throw new Error(`Sitemap returned ${sitemapResponse.status}.`);

const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => {
  const listed = new URL(decodeXml(match[1]));
  return `${baseUrl}${listed.pathname}${listed.search}`;
});
if (!urls.length) throw new Error("No URLs were found in sitemap.xml.");

for (const [index, url] of urls.entries()) {
  try {
    const { response, text: html } = await request(url);
    const checks = [];
    if (!response.ok) checks.push(`HTTP ${response.status}`);
    if (!/<title>[^<]+<\/title>/i.test(html)) checks.push("missing title");
    if (!/<meta[^>]+name=["']description["'][^>]+content=["'][^"']+/i.test(html) && !/<meta[^>]+content=["'][^"']+["'][^>]+name=["']description["']/i.test(html)) checks.push("missing meta description");
    if (!/<link[^>]+rel=["']canonical["']/i.test(html)) checks.push("missing canonical");
    const h1Count = (html.match(/<h1\b/gi) || []).length;
    if (h1Count !== 1) checks.push(`${h1Count} H1 elements`);
    if (/highrevenueformat|highperformanceformat|adsterra|window\.atOptions/i.test(html)) checks.push("third-party ad network found");
    const words = visibleText(html).split(/\s+/).filter(Boolean).length;
    if (words < minimumWords) checks.push(`only ${words} visible words`);
    if (checks.length) failures.push(`${url}: ${checks.join(", ")}`);
  } catch (error) {
    failures.push(`${url}: ${error instanceof Error ? error.message : String(error)}`);
  }
  if ((index + 1) % 25 === 0) console.log(`Checked ${index + 1}/${urls.length}`);
}

const { response: adsResponse, text: adsText } = await request(`${baseUrl}/ads.txt`);
if (!adsResponse.ok) failures.push(`${baseUrl}/ads.txt: HTTP ${adsResponse.status}`);
if (!adsText.includes("google.com, pub-3757135541422436, DIRECT, f08c47fec0942fa0")) failures.push(`${baseUrl}/ads.txt: expected Google publisher record missing`);
if (adsText.charCodeAt(0) === 0xfeff) failures.push(`${baseUrl}/ads.txt: UTF-8 BOM found`);

const { text: homeHtml } = await request(baseUrl);
if (!homeHtml.includes("ca-pub-3757135541422436")) failures.push(`${baseUrl}: AdSense publisher ID missing`);
if (!homeHtml.includes("/privacy-policy")) notices.push("Privacy Policy is not linked from the homepage.");

console.log(`\nAdSense readiness audit: ${urls.length} sitemap URLs checked`);
console.log(`Failures: ${failures.length}`);
for (const failure of failures) console.error(`- ${failure}`);
for (const notice of notices) console.warn(`Notice: ${notice}`);

if (failures.length) process.exitCode = 1;
