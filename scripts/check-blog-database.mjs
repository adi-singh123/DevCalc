import { createClient } from "@libsql/client";
import { config } from "dotenv";

config({ path: ".env.local", override: false, quiet: true });
const url = process.env.TURSO_DATABASE_URL?.trim();
const authToken = process.env.TURSO_AUTH_TOKEN?.trim();
if (!url || !authToken) throw new Error("TURSO_DATABASE_URL and TURSO_AUTH_TOKEN are required in .env.local.");

const client = createClient({ url, authToken });
try {
  const schema = await client.execute("PRAGMA table_info(blog_posts)");
  const summary = await client.execute(`
    SELECT COUNT(*) AS total,
      SUM(CASE WHEN status = 'published' THEN 1 ELSE 0 END) AS published,
      SUM(CASE WHEN json_array_length(keywords_json) < 5 THEN 1 ELSE 0 END) AS insufficient_keywords,
      SUM(CASE WHEN NOT json_valid(content_json) THEN 1 ELSE 0 END) AS invalid_content,
      SUM(CASE WHEN NOT json_valid(faqs_json) THEN 1 ELSE 0 END) AS invalid_faqs
    FROM blog_posts
  `);
  const testTable = await client.execute("SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'devcalc_connection_test'");
  if (schema.rows.length !== 23) throw new Error(`Expected 23 blog_posts columns, found ${schema.rows.length}.`);
  if (Number(summary.rows[0]?.total ?? 0) === 0) throw new Error("blog_posts contains no articles.");
  if (Number(summary.rows[0]?.insufficient_keywords ?? 0)) throw new Error("One or more blogs have fewer than five SEO keywords.");
  if (Number(summary.rows[0]?.invalid_content ?? 0) || Number(summary.rows[0]?.invalid_faqs ?? 0)) throw new Error("One or more blog JSON documents are invalid.");
  if (testTable.rows.length) throw new Error("The obsolete devcalc_connection_test table still exists.");
  console.log(JSON.stringify({ columns: schema.rows.length, total: Number(summary.rows[0]?.total ?? 0), published: Number(summary.rows[0]?.published ?? 0), testTableRemoved: true }, null, 2));
} finally {
  client.close();
}
