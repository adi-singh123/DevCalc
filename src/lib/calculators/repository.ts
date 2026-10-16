import "server-only";

import { unstable_cache } from "next/cache";
import type { Calculator, CalculatorDirectoryItem, ChatCalculator } from "@/src/types/calculator";
import { getTursoClient } from "@/src/lib/db/turso";

type CalculatorRow = Record<string, unknown>;

export type CalculatorPage = {
  calculators: CalculatorDirectoryItem[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
};

const SELECT_COLUMNS = `
  slug, name, description, category, is_popular, compare_with_json,
  seo_title, seo_description, seo_keywords_json, seo_content,
  editorial_intro, benchmark_context_json, steps_json, formula_json,
  faqs_json, renderer_key
`;

const DIRECTORY_COLUMNS = "slug, name, description, category, is_popular, compare_with_json";

async function withRetry<T>(operation: () => Promise<T>, label: string): Promise<T> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, attempt * 400));
    }
  }
  throw new Error(`Turso query failed after retries: ${label}`, { cause: lastError });
}

function text(row: CalculatorRow, key: string, optional = false): string | undefined {
  const value = row[key];
  if (typeof value === "string" && (optional || value.trim())) return value;
  if (optional && value == null) return undefined;
  throw new Error(`Invalid calculator database value for ${key}.`);
}

function json<T>(row: CalculatorRow, key: string, fallback?: T): T {
  const value = row[key];
  if (value == null && fallback !== undefined) return fallback;
  if (typeof value !== "string") throw new Error(`Invalid calculator JSON value for ${key}.`);
  try {
    return JSON.parse(value) as T;
  } catch (error) {
    throw new Error(`Could not parse calculator JSON column ${key}.`, { cause: error });
  }
}

function optionalJson<T>(row: CalculatorRow, key: string): T | undefined {
  if (row[key] == null) return undefined;
  return json<T>(row, key);
}

function rowToCalculator(row: CalculatorRow): Calculator {
  return {
    slug: text(row, "slug")!,
    name: text(row, "name")!,
    description: text(row, "description")!,
    category: text(row, "category")!,
    isPopular: Number(row.is_popular) === 1,
    compareWith: json<string[]>(row, "compare_with_json", []),
    seo: {
      title: text(row, "seo_title")!,
      description: text(row, "seo_description")!,
      keywords: json<string[]>(row, "seo_keywords_json", []),
    },
    seoContent: text(row, "seo_content", true) ?? "",
    editorialIntro: text(row, "editorial_intro", true),
    benchmarkContext: optionalJson<NonNullable<Calculator["benchmarkContext"]>>(row, "benchmark_context_json"),
    steps: json<Calculator["steps"]>(row, "steps_json", []),
    formula: json<Calculator["formula"]>(row, "formula_json"),
    faqs: json<Calculator["faqs"]>(row, "faqs_json", []),
  };
}

function rowToDirectoryItem(row: CalculatorRow): CalculatorDirectoryItem {
  return {
    slug: String(row.slug),
    name: String(row.name),
    description: String(row.description),
    category: String(row.category),
    isPopular: Number(row.is_popular) === 1,
    compareWith: typeof row.compare_with_json === "string" ? JSON.parse(row.compare_with_json) as string[] : [],
  };
}

async function queryCalculators(): Promise<Calculator[]> {
  const result = await withRetry(
    () => getTursoClient().execute(`SELECT ${SELECT_COLUMNS} FROM calculators WHERE status = 'published' ORDER BY sort_order, name`),
    "published calculators",
  );
  return result.rows.map((row) => rowToCalculator(row as CalculatorRow));
}

async function queryCalculatorBySlug(slug: string): Promise<Calculator | null> {
  const result = await withRetry(
    () => getTursoClient().execute({
      sql: `SELECT ${SELECT_COLUMNS} FROM calculators WHERE slug = ? AND status = 'published' LIMIT 1`,
      args: [slug],
    }),
    `calculator ${slug}`,
  );
  return result.rows[0] ? rowToCalculator(result.rows[0] as CalculatorRow) : null;
}

const getCalculatorsCached = unstable_cache(queryCalculators, ["published-calculators"], {
  revalidate: 300,
  tags: ["calculators"],
});

const getCalculatorDirectoryCached = unstable_cache(async (): Promise<CalculatorDirectoryItem[]> => {
  const result = await withRetry(
    () => getTursoClient().execute(`
      SELECT slug, name, description, category, is_popular, compare_with_json
      FROM calculators
      WHERE status = 'published'
      ORDER BY sort_order, name
    `),
    "calculator directory",
  );
  return result.rows.map((row) => rowToDirectoryItem(row as CalculatorRow));
}, ["calculator-directory"], { revalidate: 300, tags: ["calculators"] });

const getCalculatorChatDirectoryCached = unstable_cache(async (): Promise<ChatCalculator[]> => {
  const result = await withRetry(
    () => getTursoClient().execute(`
      SELECT slug, name, description, category, seo_keywords_json, faqs_json
      FROM calculators
      WHERE status = 'published'
      ORDER BY sort_order, name
    `),
    "calculator chat directory",
  );
  return result.rows.map((row) => ({
    slug: String(row.slug),
    name: String(row.name),
    description: String(row.description),
    category: String(row.category),
    seo: { keywords: typeof row.seo_keywords_json === "string" ? JSON.parse(row.seo_keywords_json) as string[] : [] },
    faqs: typeof row.faqs_json === "string" ? JSON.parse(row.faqs_json) as Calculator["faqs"] : [],
  }));
}, ["calculator-chat-directory"], { revalidate: 3600, tags: ["calculators"] });

export function getCalculators(): Promise<Calculator[]> {
  return getCalculatorsCached();
}

export function getCalculatorsFresh(): Promise<Calculator[]> {
  return queryCalculators();
}

export async function getCalculatorBySlug(slug: string): Promise<Calculator | null> {
  const cached = unstable_cache(() => queryCalculatorBySlug(slug), ["calculator", slug], {
    revalidate: 300,
    tags: ["calculators", `calculator:${slug}`],
  });
  return cached();
}

export async function getCalculatorDirectory(): Promise<CalculatorDirectoryItem[]> {
  return getCalculatorDirectoryCached();
}

export function getCalculatorChatDirectory(): Promise<ChatCalculator[]> {
  return getCalculatorChatDirectoryCached();
}

export async function getCalculatorPage({
  page,
  pageSize = 18,
  query = "",
}: {
  page: number;
  pageSize?: number;
  query?: string;
}): Promise<CalculatorPage> {
  const safePageSize = Math.min(Math.max(Math.trunc(pageSize), 1), 48);
  const search = query.trim();
  const where = search
    ? "status = 'published' AND (name LIKE ? OR description LIKE ? OR category LIKE ? OR seo_keywords_json LIKE ?)"
    : "status = 'published'";
  const searchArgs = search ? Array(4).fill(`%${search}%`) : [];

  const getCachedPage = unstable_cache(async (): Promise<CalculatorPage> => {
    const countResult = await withRetry(
      () => getTursoClient().execute({
        sql: `SELECT COUNT(*) AS total FROM calculators WHERE ${where}`,
        args: searchArgs,
      }),
      "calculator page count",
    );
    const total = Number(countResult.rows[0]?.total ?? 0);
    const totalPages = Math.max(1, Math.ceil(total / safePageSize));
    const safePage = Math.min(Math.max(Math.trunc(page) || 1, 1), totalPages);

    const result = await withRetry(
      () => getTursoClient().execute({
        sql: `SELECT ${DIRECTORY_COLUMNS} FROM calculators WHERE ${where} ORDER BY is_popular DESC, sort_order, name LIMIT ? OFFSET ?`,
        args: [...searchArgs, safePageSize, (safePage - 1) * safePageSize],
      }),
      `calculator page ${safePage}`,
    );

    return {
      calculators: result.rows.map((row) => rowToDirectoryItem(row as CalculatorRow)),
      page: safePage,
      pageSize: safePageSize,
      total,
      totalPages,
    };
  }, ["calculator-page", String(page), String(safePageSize), search], { revalidate: 300, tags: ["calculators"] });

  return getCachedPage();
}

export async function getPopularCalculators(limit = 6): Promise<CalculatorDirectoryItem[]> {
  const safeLimit = Math.min(Math.max(Math.trunc(limit), 1), 12);
  const getCachedPopular = unstable_cache(async () => {
    const result = await withRetry(
      () => getTursoClient().execute({
        sql: `SELECT ${DIRECTORY_COLUMNS} FROM calculators WHERE status = 'published' AND is_popular = 1 ORDER BY sort_order, name LIMIT ?`,
        args: [safeLimit],
      }),
      "popular calculators",
    );
    return result.rows.map((row) => rowToDirectoryItem(row as CalculatorRow));
  }, ["popular-calculators", String(safeLimit)], { revalidate: 300, tags: ["calculators"] });
  return getCachedPopular();
}

export async function getCalculatorsByCategory(
  category: string,
  options: { excludeSlug?: string; limit?: number } = {},
): Promise<CalculatorDirectoryItem[]> {
  const limit = Math.min(Math.max(Math.trunc(options.limit ?? 120), 1), 120);
  const args: Array<string | number> = [category];
  let exclusion = "";
  if (options.excludeSlug) {
    exclusion = "AND slug <> ?";
    args.push(options.excludeSlug);
  }
  args.push(limit);
  const getCachedCategory = unstable_cache(async () => {
    const result = await withRetry(
      () => getTursoClient().execute({
        sql: `SELECT ${DIRECTORY_COLUMNS} FROM calculators WHERE status = 'published' AND category = ? ${exclusion} ORDER BY sort_order, name LIMIT ?`,
        args,
      }),
      `calculator category ${category}`,
    );
    return result.rows.map((row) => rowToDirectoryItem(row as CalculatorRow));
  }, ["calculator-category", category, options.excludeSlug ?? "", String(limit)], { revalidate: 300, tags: ["calculators"] });
  return getCachedCategory();
}

export async function getPublishedCalculatorSlugsFresh(): Promise<string[]> {
  const result = await withRetry(
    () => getTursoClient().execute("SELECT slug FROM calculators WHERE status = 'published' ORDER BY sort_order, name"),
    "published calculator slugs",
  );
  return result.rows.map((row) => String(row.slug));
}

export async function getCalculatorCategoryCounts(): Promise<Map<string, number>> {
  const getCachedCounts = unstable_cache(async () => {
    const result = await withRetry(
      () => getTursoClient().execute("SELECT category, COUNT(*) AS total FROM calculators WHERE status = 'published' GROUP BY category"),
      "calculator category counts",
    );
    return result.rows.map((row) => [String(row.category), Number(row.total)] as const);
  }, ["calculator-category-counts"], { revalidate: 300, tags: ["calculators"] });
  return new Map(await getCachedCounts());
}
