import "server-only";

import { unstable_cache } from "next/cache";
import { getTursoClient } from "@/src/lib/db/turso";

export type SitePage = {
  slug: string;
  name: string;
  pageType: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  canonicalPath: string;
  bodyHtml: string;
  updatedAt: string;
};

type SitePageRow = Record<string, unknown>;

function requiredText(value: unknown, column: string): string {
  if (typeof value !== "string" || !value.trim()) throw new Error(`Invalid site_pages value for ${column}.`);
  return value;
}

function rowToSitePage(row: SitePageRow): SitePage {
  const keywords = JSON.parse(requiredText(row.keywords_json, "keywords_json")) as unknown;
  if (!Array.isArray(keywords) || keywords.some((item) => typeof item !== "string")) {
    throw new Error("Invalid site_pages keywords_json value.");
  }
  return {
    slug: requiredText(row.slug, "slug"),
    name: requiredText(row.name, "name"),
    pageType: requiredText(row.page_type, "page_type"),
    seoTitle: requiredText(row.seo_title, "seo_title"),
    seoDescription: requiredText(row.seo_description, "seo_description"),
    keywords,
    canonicalPath: requiredText(row.canonical_path, "canonical_path"),
    bodyHtml: requiredText(row.body_html, "body_html"),
    updatedAt: requiredText(row.updated_at, "updated_at"),
  };
}

async function queryPublishedSitePage(slug: string): Promise<SitePage | null> {
  const result = await getTursoClient().execute({
    sql: `SELECT slug, name, page_type, seo_title, seo_description, keywords_json,
      canonical_path, body_html, updated_at FROM site_pages
      WHERE slug = ? AND status = 'published' LIMIT 1`,
    args: [slug],
  });
  const row = result.rows[0];
  return row ? rowToSitePage(row as SitePageRow) : null;
}

export function getPublishedSitePage(slug: string): Promise<SitePage | null> {
  const getCachedPage = unstable_cache(
    () => queryPublishedSitePage(slug),
    ["published-site-page", slug],
    { revalidate: 60, tags: ["site-pages", `site-page:${slug}`] },
  );
  return getCachedPage();
}
