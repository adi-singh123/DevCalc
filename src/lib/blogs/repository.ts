import "server-only";

import { unstable_cache } from "next/cache";

import type { Blog, BlogFaq, BlogSection, BlogSource } from "@/src/types/blog";
import { getTursoClient } from "@/src/lib/db/turso";

type BlogRow = {
  slug: unknown;
  title: unknown;
  seo_title: unknown;
  seo_description: unknown;
  description: unknown;
  category: unknown;
  author: unknown;
  published_at: unknown;
  reading_time: unknown;
  image_url: unknown;
  image_alt: unknown;
  keywords_json: unknown;
  last_verified_at: unknown;
  effective_date: unknown;
  sources_json: unknown;
  related_calculator_slugs_json: unknown;
  content_json: unknown;
  faqs_json: unknown;
};

const SELECT_BLOG_COLUMNS = `
  slug, title, seo_title, seo_description, description, category, author,
  published_at, reading_time, image_url, image_alt, keywords_json,
  last_verified_at, effective_date, sources_json,
  related_calculator_slugs_json, content_json, faqs_json
`;

function requiredText(value: unknown, column: string): string {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Invalid blog database value for ${column}.`);
  }
  return value;
}

function optionalText(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value : undefined;
}

function parseJson<T>(value: unknown, column: string): T {
  if (typeof value !== "string") {
    throw new Error(`Invalid blog JSON value for ${column}.`);
  }
  try {
    return JSON.parse(value) as T;
  } catch (error) {
    throw new Error(`Could not parse blog JSON column ${column}.`, { cause: error });
  }
}

function rowToBlog(row: BlogRow): Blog {
  return {
    slug: requiredText(row.slug, "slug"),
    title: requiredText(row.title, "title"),
    seoTitle: requiredText(row.seo_title, "seo_title"),
    seoDescription: requiredText(row.seo_description, "seo_description"),
    description: requiredText(row.description, "description"),
    category: requiredText(row.category, "category"),
    author: requiredText(row.author, "author"),
    publishedDate: requiredText(row.published_at, "published_at"),
    readingTime: requiredText(row.reading_time, "reading_time"),
    image: typeof row.image_url === "string" ? row.image_url : "",
    imageAlt: optionalText(row.image_alt),
    keywords: parseJson<string[]>(row.keywords_json, "keywords_json"),
    lastVerified: optionalText(row.last_verified_at),
    effectiveDate: optionalText(row.effective_date),
    sources: parseJson<BlogSource[]>(row.sources_json, "sources_json"),
    relatedCalculatorSlugs: parseJson<string[]>(
      row.related_calculator_slugs_json,
      "related_calculator_slugs_json",
    ),
    content: parseJson<BlogSection[]>(row.content_json, "content_json"),
    faqs: parseJson<BlogFaq[]>(row.faqs_json, "faqs_json"),
  };
}

async function queryPublishedBlogs(): Promise<Blog[]> {
  const result = await getTursoClient().execute(`
    SELECT ${SELECT_BLOG_COLUMNS}
    FROM blog_posts
    WHERE status = 'published'
    ORDER BY is_featured DESC, published_at DESC, id DESC
  `);
  return result.rows.map((row) => rowToBlog(row as unknown as BlogRow));
}

async function queryPublishedBlogBySlug(slug: string): Promise<Blog | null> {
  const result = await getTursoClient().execute({
    sql: `
      SELECT ${SELECT_BLOG_COLUMNS}
      FROM blog_posts
      WHERE slug = ? AND status = 'published'
      LIMIT 1
    `,
    args: [slug],
  });
  const row = result.rows[0];
  return row ? rowToBlog(row as unknown as BlogRow) : null;
}

const getPublishedBlogsCached = unstable_cache(
  queryPublishedBlogs,
  ["published-blog-posts"],
  { revalidate: 60, tags: ["blog-posts"] },
);

export function getPublishedBlogs(): Promise<Blog[]> {
  return getPublishedBlogsCached();
}

export async function getPublishedBlogBySlug(slug: string): Promise<Blog | null> {
  const getCachedBlog = unstable_cache(
    () => queryPublishedBlogBySlug(slug),
    ["published-blog-post", slug],
    { revalidate: 60, tags: ["blog-posts", `blog-post:${slug}`] },
  );
  return getCachedBlog();
}
