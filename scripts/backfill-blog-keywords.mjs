import { createClient } from "@libsql/client";
import { config } from "dotenv";

config({ path: ".env.local", override: false, quiet: true });

const url = process.env.TURSO_DATABASE_URL?.trim();
const authToken = process.env.TURSO_AUTH_TOKEN?.trim();
if (!url || !authToken) {
  throw new Error("TURSO_DATABASE_URL and TURSO_AUTH_TOKEN are required in .env.local.");
}

function cleanPhrase(value) {
  return String(value)
    .replace(/\([^)]*\)/g, " ")
    .replace(/\b20\d{2}\b/g, " ")
    .replace(/\s+/g, " ")
    .replace(/[?:|]+$/g, "")
    .trim();
}

function createKeywords({ slug, title, category }) {
  const cleanTitle = cleanPhrase(title);
  const topic = cleanPhrase(cleanTitle.split(/:|\bvs\.?\b/i)[0]);
  const slugPhrase = cleanPhrase(slug.replace(/-/g, " "));
  const candidates = [
    cleanTitle,
    slugPhrase,
    topic,
    `${topic} guide`,
    `${topic} calculator`,
    `${topic} formula`,
    `how to calculate ${topic}`,
    `${topic} India`,
    `${category} calculator`,
    `${category} guide India`,
    "DevCalc",
  ];

  const unique = new Map();
  for (const candidate of candidates) {
    const keyword = cleanPhrase(candidate);
    const key = keyword.toLowerCase();
    if (keyword.length >= 3 && keyword.length <= 90 && !unique.has(key)) {
      unique.set(key, keyword);
    }
  }
  return [...unique.values()].slice(0, 10);
}

const client = createClient({ url, authToken });
try {
  const result = await client.execute(`
    SELECT slug, title, category
    FROM blog_posts
    WHERE json_array_length(keywords_json) = 0
    ORDER BY id
  `);

  for (const row of result.rows) {
    const keywords = createKeywords({
      slug: String(row.slug),
      title: String(row.title),
      category: String(row.category),
    });
    if (keywords.length < 5) {
      throw new Error(`Could not produce enough keywords for ${row.slug}.`);
    }
    await client.execute({
      sql: "UPDATE blog_posts SET keywords_json = ? WHERE slug = ?",
      args: [JSON.stringify(keywords), String(row.slug)],
    });
  }

  const verification = await client.execute(`
    SELECT COUNT(*) AS total,
      SUM(CASE WHEN json_array_length(keywords_json) >= 5 THEN 1 ELSE 0 END) AS with_keywords,
      MIN(json_array_length(keywords_json)) AS minimum_keywords,
      MAX(json_array_length(keywords_json)) AS maximum_keywords
    FROM blog_posts
    WHERE status = 'published'
  `);
  console.log(JSON.stringify({ updated: result.rows.length, ...verification.rows[0] }, null, 2));
} finally {
  client.close();
}
