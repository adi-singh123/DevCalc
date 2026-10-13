import { createClient } from "@libsql/client";
import { config } from "dotenv";

config({ path: ".env.local", override: false, quiet: true });
const url = process.env.TURSO_DATABASE_URL?.trim();
const authToken = process.env.TURSO_AUTH_TOKEN?.trim();
const sourceOrigin = (process.env.SITE_PAGE_IMPORT_ORIGIN || "https://www.devcalc.in").replace(/\/$/, "");
if (!url || !authToken) throw new Error("TURSO_DATABASE_URL and TURSO_AUTH_TOKEN are required in .env.local.");

const pages = [
  { slug: "about", name: "About DevCalc", pageType: "AboutPage" },
  { slug: "privacy-policy", name: "Privacy Policy", pageType: "WebPage" },
  { slug: "terms", name: "Terms of Use", pageType: "WebPage" },
];

function decodeHtml(value) {
  return value.replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([:\w-]+)=(?:"([^"]*)"|'([^']*)')/g)]
    .map((match) => [match[1].toLowerCase(), decodeHtml(match[2] ?? match[3] ?? "")]));
}

function extractHeadValue(html, selector, attribute = "content") {
  const tags = selector === "link" ? html.match(/<link\b[^>]*>/gi) ?? [] : html.match(/<meta\b[^>]*>/gi) ?? [];
  for (const tag of tags) {
    const attrs = attributes(tag);
    const wanted = selector === "link" ? { rel: "canonical" } : selector;
    if (Object.entries(wanted).every(([key, value]) => attrs[key] === value) && attrs[attribute]) return attrs[attribute];
  }
  return "";
}

async function fetchPage(page) {
  const response = await fetch(`${sourceOrigin}/${page.slug}`, {
    headers: { "User-Agent": "DevCalc-Site-Page-Importer/1.0" },
    signal: AbortSignal.timeout(30_000),
  });
  if (!response.ok) throw new Error(`Could not import /${page.slug}: HTTP ${response.status}`);
  const html = await response.text();
  const main = html.match(/<main\b[^>]*>[\s\S]*?<\/main>/i)?.[0];
  const title = decodeHtml(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() || "");
  const description = extractHeadValue(html, { name: "description" });
  const keywords = extractHeadValue(html, { name: "keywords" }).split(",").map((item) => item.trim()).filter(Boolean);
  const canonicalUrl = extractHeadValue(html, "link", "href");
  const canonicalPath = canonicalUrl ? new URL(canonicalUrl).pathname : `/${page.slug}`;
  if (!main || !title || !description) throw new Error(`/${page.slug} is missing required SSR HTML or metadata.`);
  return { ...page, title, description, keywords, canonicalPath, bodyHtml: main };
}

const client = createClient({ url, authToken });
try {
  for (const definition of pages) {
    const page = await fetchPage(definition);
    await client.execute({
      sql: `INSERT INTO site_pages (slug, name, page_type, seo_title, seo_description, keywords_json, canonical_path, body_html, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'published')
        ON CONFLICT(slug) DO UPDATE SET name=excluded.name, page_type=excluded.page_type,
        seo_title=excluded.seo_title, seo_description=excluded.seo_description,
        keywords_json=excluded.keywords_json, canonical_path=excluded.canonical_path,
        body_html=excluded.body_html, status='published'`,
      args: [page.slug, page.name, page.pageType, page.title, page.description, JSON.stringify(page.keywords), page.canonicalPath, page.bodyHtml],
    });
    console.log(`Imported /${page.slug} into site_pages.`);
  }
} finally {
  client.close();
}
