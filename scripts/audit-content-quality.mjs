import { createHash } from "node:crypto";
import { config } from "dotenv";
import { createClient } from "@libsql/client";

config({ path: ".env.local", override: false, quiet: true });

const url = process.env.TURSO_DATABASE_URL?.trim();
const authToken = process.env.TURSO_AUTH_TOKEN?.trim();
if (!url || !authToken) throw new Error("TURSO_DATABASE_URL and TURSO_AUTH_TOKEN are required.");

function parseJson(value, label) {
  try {
    return JSON.parse(String(value));
  } catch (error) {
    throw new Error(`Invalid JSON in ${label}.`, { cause: error });
  }
}

function visibleWords(html) {
  return String(html)
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z0-9#]+;/gi, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function fingerprint(value) {
  return createHash("sha256")
    .update(String(value).replace(/\s+/g, " ").trim().toLowerCase())
    .digest("hex");
}

function duplicateGroups(rows, field) {
  const groups = new Map();
  for (const row of rows) {
    const hash = fingerprint(row[field]);
    groups.set(hash, [...(groups.get(hash) ?? []), String(row.slug)]);
  }
  return [...groups.values()].filter((slugs) => slugs.length > 1);
}

const client = createClient({ url, authToken });
try {
  const calculatorResult = await client.execute(`
    SELECT slug, seo_content, steps_json, formula_json, faqs_json, seo_keywords_json
    FROM calculators WHERE status = 'published' ORDER BY slug
  `);
  const calculatorProblems = [];
  for (const row of calculatorResult.rows) {
    const steps = parseJson(row.steps_json, `${row.slug}.steps_json`);
    const formula = parseJson(row.formula_json, `${row.slug}.formula_json`);
    const faqs = parseJson(row.faqs_json, `${row.slug}.faqs_json`);
    const keywords = parseJson(row.seo_keywords_json, `${row.slug}.seo_keywords_json`);
    const problems = [];
    if (visibleWords(row.seo_content) < 120) problems.push("less than 120 words of page-specific SEO content");
    if (steps.length < 3) problems.push("fewer than 3 usage steps");
    if (faqs.length < 3) problems.push("fewer than 3 FAQs");
    if (keywords.length < 3) problems.push("fewer than 3 SEO keywords");
    if (!formula?.formula || !formula?.explanation || !formula?.example?.input || !formula?.example?.output) {
      problems.push("incomplete formula or worked example");
    }
    if (problems.length) calculatorProblems.push({ slug: String(row.slug), problems });
  }

  const blogResult = await client.execute(`
    SELECT slug, content_json, faqs_json, keywords_json, sources_json
    FROM blog_posts WHERE status = 'published' ORDER BY slug
  `);
  const blogProblems = [];
  for (const row of blogResult.rows) {
    const sections = parseJson(row.content_json, `${row.slug}.content_json`);
    const faqs = parseJson(row.faqs_json, `${row.slug}.faqs_json`);
    const keywords = parseJson(row.keywords_json, `${row.slug}.keywords_json`);
    const sources = parseJson(row.sources_json, `${row.slug}.sources_json`);
    const wordCount = sections.reduce(
      (total, section) => total + visibleWords([section.heading, ...(section.paragraphs ?? []), ...(section.points ?? [])].join(" ")),
      0,
    );
    const problems = [];
    if (wordCount < 450) problems.push(`only ${wordCount} article words`);
    if (sections.length < 5) problems.push("fewer than 5 article sections");
    if (faqs.length < 3) problems.push("fewer than 3 FAQs");
    if (keywords.length < 3) problems.push("fewer than 3 SEO keywords");
    if (sources.length === 0) problems.push("no source records");
    if (problems.length) blogProblems.push({ slug: String(row.slug), problems });
  }

  const duplicateCalculatorContent = duplicateGroups(calculatorResult.rows, "seo_content");
  const duplicateBlogContent = duplicateGroups(blogResult.rows, "content_json");

  console.log(`Calculators checked: ${calculatorResult.rows.length}`);
  console.log(`Calculator pages needing review: ${calculatorProblems.length}`);
  console.log(JSON.stringify(calculatorProblems, null, 2));
  console.log(`Blogs checked: ${blogResult.rows.length}`);
  console.log(`Blog pages needing review: ${blogProblems.length}`);
  console.log(JSON.stringify(blogProblems, null, 2));
  console.log(`Exact duplicate calculator content groups: ${duplicateCalculatorContent.length}`);
  console.log(JSON.stringify(duplicateCalculatorContent, null, 2));
  console.log(`Exact duplicate blog content groups: ${duplicateBlogContent.length}`);
  console.log(JSON.stringify(duplicateBlogContent, null, 2));
} finally {
  client.close();
}
