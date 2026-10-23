import { config as loadEnv } from "dotenv";
import { createClient } from "@libsql/client";
import { promises as fs } from "node:fs";
import path from "node:path";

loadEnv({ path: path.join(process.cwd(), ".env.local"), quiet: true });

const NVIDIA_CHAT_URL = "https://integrate.api.nvidia.com/v1/chat/completions";
const PIB_RSS_URL = "https://www.pib.gov.in/RssMain.aspx?ModId=6&Lang=1&Regid=3";
const PIB_ALL_RELEASES_URL = "https://pib.gov.in/allRel.aspx";
const apiKey = process.env.NVIDIA_API_KEY || process.env.OPENAI_API_KEY;
const contentModel =
  process.env.NVIDIA_CONTENT_MODEL || "nvidia/nemotron-3.5-super-vl-120b-a12b";
const reviewModel =
  process.env.NVIDIA_REVIEW_MODEL || "nvidia/nemotron-3.5-super-vl-120b-a12b";

const MIN_BODY_WORDS = 600;
const MAX_BODY_WORDS = 2_200;
const MIN_FACTS = 5;
const MIN_SECTIONS = 6;
const MAX_SECTIONS = 10;
const MIN_FAQS = 5;
const MAX_FAQS = 7;

const officialDomains = [
  "irctc.co.in",
  "gst.gov.in",
  "pib.gov.in",
  "india.gov.in",
  "indianrailways.gov.in",
  "incometax.gov.in",
  "cbic.gov.in",
  "labour.gov.in",
  "rbi.org.in",
  "sebi.gov.in",
  "uidai.gov.in",
  "epfindia.gov.in",
  "parivahan.gov.in",
  "egazette.nic.in",
  "mohfw.gov.in",
  "education.gov.in",
  "scholarships.gov.in",
  "myscheme.gov.in",
  "consumeraffairs.nic.in",
  "dot.gov.in",
];

if (!apiKey?.startsWith("nvapi-")) {
  throw new Error(
    "NVIDIA_API_KEY is missing or invalid. Add an nvapi- key to .env.local or the GitHub Actions secret.",
  );
}

const databaseUrl = process.env.TURSO_DATABASE_URL?.trim();
const databaseAuthToken = process.env.TURSO_AUTH_TOKEN?.trim();
if (!databaseUrl || !databaseAuthToken) {
  throw new Error(
    "TURSO_DATABASE_URL and TURSO_AUTH_TOKEN are required to publish the generated article.",
  );
}

function todayInIndia() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function isOfficialUrl(value) {
  try {
    const hostname = new URL(value).hostname.toLowerCase().replace(/^www\./, "");
    return officialDomains.some(
      (domain) => hostname === domain || hostname.endsWith(`.${domain}`),
    );
  } catch {
    return false;
  }
}

function isDevCalcCalculatorUrl(value) {
  try {
    const url = new URL(value);
    const hostname = url.hostname.toLowerCase().replace(/^www\./, "");
    return hostname === "devcalc.in" && /^\/[a-z0-9]+(?:-[a-z0-9]+)*\/?$/.test(url.pathname);
  } catch {
    return false;
  }
}

function isTrustedEvidenceUrl(value) {
  return isOfficialUrl(value) || isDevCalcCalculatorUrl(value);
}

function normalizeUrl(value) {
  const url = new URL(value);
  for (const key of [...url.searchParams.keys()]) {
    if (/^(utm_|fbclid$|gclid$)/i.test(key)) url.searchParams.delete(key);
  }
  url.searchParams.sort();
  return `${url.origin}${url.pathname}${url.search}`.replace(/\/$/, "");
}

function decodeEntities(value) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;|&#34;/gi, '"')
    .replace(/&apos;|&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function plainTextFromHtml(value) {
  return decodeEntities(value)
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function xmlTag(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match ? plainTextFromHtml(match[1]) : "";
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "text/html, application/xhtml+xml, application/rss+xml, application/xml;q=0.9, */*;q=0.8",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/141.0.0.0 Safari/537.36",
    },
    signal: AbortSignal.timeout(20_000),
  });
  if (!response.ok) throw new Error(`Official source fetch failed (${response.status}): ${url}`);
  return response.text();
}

async function loadOfficialSourceCorpus() {
  let parsedItems = [];
  try {
    const rss = await fetchText(PIB_RSS_URL);
    parsedItems = [...rss.matchAll(/<item>([\s\S]*?)<\/item>/gi)]
      .map((match) => ({
        title: xmlTag(match[1], "title"),
        url: xmlTag(match[1], "link"),
        publishedDate: xmlTag(match[1], "pubDate"),
        summary: xmlTag(match[1], "description"),
      }))
      .filter((item) => item.title && isOfficialUrl(item.url));
  } catch (error) {
    console.warn(`PIB RSS unavailable; using official release listing: ${error.message}`);
  }
  if (parsedItems.length < 2) {
    const listing = await fetchText(PIB_ALL_RELEASES_URL);
    parsedItems = [...listing.matchAll(/<a[^>]+title=['"]([^'"]+)['"][^>]+href=['"]([^'"]*PressReleaseDetail\.aspx\?PRID=\d+)[^'"]*['"][^>]*>/gi)]
      .map((match) => ({
        title: decodeEntities(match[1]).trim(),
        url: new URL(match[2].replace(/PressReleaseDetail\.aspx/i, "PressReleaseIframePage.aspx"), PIB_ALL_RELEASES_URL).toString(),
        publishedDate: "",
        summary: "",
      }))
      .filter((item) => item.title && isOfficialUrl(item.url));
  }
  const seenUrls = new Set();
  const items = parsedItems
    .filter((item) => {
      const normalized = normalizeUrl(item.url);
      if (seenUrls.has(normalized)) return false;
      seenUrls.add(normalized);
      return true;
    })
    .slice(0, 14);

  const corpus = await Promise.all(
    items.map(async (item) => {
      try {
        const html = await fetchText(item.url);
        return { ...item, text: plainTextFromHtml(html).slice(0, 9_000) };
      } catch {
        return { ...item, text: item.summary };
      }
    }),
  );
  if (corpus.length < 2) {
    throw new Error(
      `Fewer than two recent official PIB sources were available (${parsedItems.length} parsed, ${items.length} unique).`,
    );
  }
  return corpus;
}

async function nvidiaChat(messages, maxTokens = 16_000, model = contentModel) {
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(NVIDIA_CHAT_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        signal: AbortSignal.timeout(120_000),
        body: JSON.stringify({
          model,
          messages,
          max_tokens: maxTokens,
          temperature: 0.2,
          top_p: 0.9,
          stream: false,
          response_format: { type: "json_object" },
          chat_template_kwargs: { enable_thinking: false },
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        const error = new Error(`NVIDIA chat failed (${response.status}): ${JSON.stringify(data)}`);
        if (response.status < 500 && response.status !== 429) throw error;
        lastError = error;
      } else {
        const content = data.choices?.[0]?.message?.content;
        if (!content) {
          const choice = data.choices?.[0];
          throw new Error(
            `NVIDIA returned no article content (finish=${choice?.finish_reason ?? "unknown"}, message fields=${Object.keys(choice?.message ?? {}).join(",") || "none"}).`,
          );
        }
        return JSON.parse(content.replace(/^```json\s*|\s*```$/g, ""));
      }
    } catch (error) {
      lastError = error;
      if (attempt === 3 || (error.message?.includes("NVIDIA chat failed (4") && !error.message.includes("(429)"))) {
        throw error;
      }
    }
    await new Promise((resolve) => setTimeout(resolve, attempt * 1_500));
  }
  throw lastError;
}

async function findCalculatorSlugs() {
  const root = path.join(process.cwd(), "src/data/calculators");
  const files = [];
  async function walk(directory) {
    for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
      const target = path.join(directory, entry.name);
      if (entry.isDirectory()) await walk(target);
      else if (/\.(ts|tsx)$/.test(entry.name)) files.push(target);
    }
  }
  await walk(root);
  const slugs = new Set();
  for (const file of files) {
    const source = await fs.readFile(file, "utf8");
    for (const match of source.matchAll(/slug:\s*["']([^"']+)["']/g)) slugs.add(match[1]);
  }
  return [...slugs].sort();
}

function wordCount(article) {
  const text = article.content
    .flatMap((section) => [section.heading, ...(section.paragraphs ?? []), ...(section.points ?? [])])
    .join(" ");
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function normalizedWords(value) {
  return new Set(String(value).toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter((word) => word.length > 3));
}

function normalizedText(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function similarity(left, right) {
  const leftWords = normalizedWords(left);
  const rightWords = normalizedWords(right);
  if (!leftWords.size || !rightWords.size) return 0;
  const intersection = [...leftWords].filter((word) => rightWords.has(word)).length;
  const union = new Set([...leftWords, ...rightWords]).size;
  return intersection / union;
}

const unsupportedInferencePatterns = [
  /\bnationwide\b/i,
  /\bdesigned to\b/i,
  /\bseeks? to\b/i,
  /\bintended to\b/i,
  /\bdemonstrates?\b/i,
  /\bdual purpose\b/i,
  /\bpermanent practice\b/i,
  /\blong-term (?:improvement|benefit|impact)/i,
  /\bdirectly benefits?\b/i,
  /\bmeasurable targets?\b/i,
];

function removeRiskySentences(value) {
  const sanitized = String(value)
    .replace(/["“][^"”]*\p{Script=Devanagari}[^"”]*["”]/gu, "")
    .replace(/\p{Script=Devanagari}+/gu, "")
    .replace(/&(?:#\d+|#x[\da-f]+|[a-z]+);/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  const sentences = sanitized.match(/[^.!?]+[.!?]+|[^.!?]+$/g) ?? [];
  return sentences
    .filter((sentence) => !unsupportedInferencePatterns.some((pattern) => pattern.test(sentence)))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function fitSeoTitle(value, fallback) {
  let title = String(value || fallback || "Government Update India").trim();
  if (title.length < 35) title = `${title}: Official India Update`;
  if (title.length > 65) {
    title = title.slice(0, 65).replace(/\s+\S*$/, "").replace(/[,:;\-]+$/, "").trim();
  }
  return title;
}

function fitSeoDescription(value, fallback) {
  let description = String(value || fallback || "").trim();
  const additions = [
    " Read the confirmed details, important dates and practical steps.",
    " Verify current requirements through the linked official source.",
  ];
  for (const addition of additions) {
    if (description.length >= 120) break;
    description += addition;
  }
  if (description.length > 165) {
    const sentences = description.match(/[^.!?]+[.!?]+/g) ?? [];
    const complete = sentences.reduce((result, sentence) => (
      `${result}${sentence}`.trim().length <= 165 ? `${result}${sentence}` : result
    ), "").trim();
    const shortened = description.slice(0, 164).replace(/\s+\S*$/, "").replace(/[,:;\-]+$/, "").trim();
    description = complete.length >= 120 ? complete : `${shortened}.`;
  }
  return description;
}

function normalizeMetadata(metadata, selection) {
  const title = String(metadata.title || selection.topic || "Latest Government Update").trim();
  const slug = String(metadata.slug || title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 100)
    .replace(/-+$/g, "");
  const suppliedKeywords = Array.isArray(metadata.keywords)
    ? metadata.keywords
    : String(metadata.keywords || "").split(/[,;|]/);
  const fallbackKeywords = [
    selection.topic,
    title,
    metadata.category,
    "India government update",
    "government rules India",
    "official government announcement",
  ];
  const keywords = [...new Set([...suppliedKeywords, ...fallbackKeywords]
    .map((keyword) => String(keyword || "").trim())
    .filter(Boolean))].slice(0, 12);

  return {
    ...metadata,
    slug,
    title,
    description: String(metadata.description || metadata.seoDescription || title).trim(),
    category: String(metadata.category || "Government Updates").trim(),
    effectiveDate: String(metadata.effectiveDate || "Not specified in the official release").trim(),
    seoTitle: fitSeoTitle(metadata.seoTitle, title),
    seoDescription: fitSeoDescription(metadata.seoDescription, metadata.description),
    keywords,
    relatedCalculatorSlugs: Array.isArray(metadata.relatedCalculatorSlugs)
      ? metadata.relatedCalculatorSlugs
      : [],
  };
}

function editorialShapeErrors(content, faqs) {
  const errors = [];
  if (!Array.isArray(content) || content.length < MIN_SECTIONS || content.length > MAX_SECTIONS) {
    errors.push(`return ${MIN_SECTIONS}-${MAX_SECTIONS} content sections`);
  }
  if (!Array.isArray(faqs) || faqs.length < MIN_FAQS || faqs.length > MAX_FAQS) {
    errors.push(`return ${MIN_FAQS}-${MAX_FAQS} FAQs`);
  }
  if (!Array.isArray(content) || !Array.isArray(faqs)) return errors;
  const words = wordCount({ content });
  if (words < MIN_BODY_WORDS || words > MAX_BODY_WORDS) {
    errors.push(`body word count is ${words}; it must be ${MIN_BODY_WORDS}-${MAX_BODY_WORDS}`);
  }
  const tables = content.filter((section) => section?.table).length;
  if (tables > 1) errors.push(`table count is ${tables}; maximum is 1`);
  for (const section of content) {
    if (!Array.isArray(section?.paragraphs) || section.paragraphs.length < 1 || section.paragraphs.length > 4) {
      errors.push(`section "${section?.heading || "untitled"}" must have 1-4 paragraphs`);
    }
    if (Array.isArray(section?.points) && section.points.length > 3) errors.push(`section "${section?.heading || "untitled"}" has ${section.points.length} bullets; maximum is 3`);
  }
  for (const faq of faqs) {
    if (typeof faq?.question !== "string" || typeof faq?.answer !== "string") {
      errors.push("every FAQ must have question and answer strings");
    } else if (faq.answer.trim().length < 80) {
      errors.push(`FAQ answer is too short: ${faq.question}`);
    }
  }
  return errors;
}

function normalizeEditorialShape(result) {
  if (!Array.isArray(result?.content) || !Array.isArray(result?.faqs)) return result;
  return {
    ...result,
    content: result.content.map((section) => ({
      ...section,
      // More than three bullets is a presentation issue, not a reason to
      // discard an otherwise sound article. Keep the strongest first three.
      points: Array.isArray(section?.points) ? section.points.slice(0, 3) : [],
    })),
  };
}

async function runFinalQualityGate(factResult, draft, articleType, articleSpecificRequirements) {
  const result = await nvidiaChat(
    [
      {
        role: "system",
        content: "You are an adversarial government-information fact checker. Return valid JSON only. Your job is to veto unsafe or low-quality publication, not to rewrite it.",
      },
      {
        role: "user",
        content: `Article type: ${articleType || "government-update"}. Type-specific requirements: ${articleSpecificRequirements}. Fact ledger: ${JSON.stringify(factResult)}. Proposed metadata and article: ${JSON.stringify(draft)}. Return {"approved":boolean,"usefulnessScore":number,"clarityScore":number,"specificityScore":number,"unsupportedClaims":string[],"contradictions":string[],"repetition":string[],"headingProblems":string[],"faqProblems":string[],"missingReaderNeeds":string[]}. Scores use a strict 1-5 scale; 4 means publication quality and 5 means exceptional. Report only material problems. Faithful paraphrases are allowed when their meaning matches a ledger fact; do not demand identical wording. Reject material unstated scope, benefit, target, cause, effect, prediction, recommendation or superlative; incorrect arithmetic; repeated or generic sections; missing type-specific requirements; FAQs whose answer is unavailable or merely redirects readers; untranslated text; unfinished SEO text; or an article that does not clearly answer the reader intent using the supplied evidence. Approve only when every problem array is empty, every type-specific requirement is met, and usefulness, clarity and specificity are each at least 4.`,
      },
    ],
    5_000,
    reviewModel,
  );
  const problems = [
    ...(result.unsupportedClaims ?? []),
    ...(result.contradictions ?? []),
    ...(result.repetition ?? []),
    ...(result.headingProblems ?? []),
    ...(result.faqProblems ?? []),
    ...(result.missingReaderNeeds ?? []),
  ];
  for (const [label, score] of [
    ["usefulness", result.usefulnessScore],
    ["clarity", result.clarityScore],
    ["specificity", result.specificityScore],
  ]) {
    if (!Number.isFinite(Number(score)) || Number(score) < 4) {
      problems.push(`${label} score must be at least 4/5; received ${score ?? "missing"}`);
    }
  }
  if (result.approved !== true && problems.length === 0) {
    problems.push("final reviewer did not approve the article");
  }
  return { result, problems: [...new Set(problems)] };
}

function validateArticle(article, existing, availableUrls, validCalculatorSlugs, today, articleType, requiredCalculatorSlugs = []) {
  const errors = [];
  if (!article || typeof article !== "object") throw new Error("Generated article is not an object.");
  for (const field of ["slug", "title", "seoTitle", "seoDescription", "description", "category", "effectiveDate"]) {
    if (typeof article[field] !== "string" || !article[field].trim()) errors.push(`${field} must be a non-empty string`);
  }
  if (errors.length) throw new Error(`Generated article rejected:\n- ${errors.join("\n- ")}`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug)) errors.push("slug must be lowercase and hyphenated");
  if (existing.some((item) => item.slug === article.slug)) errors.push("duplicate slug");
  if (article.publishedDate !== today || article.lastVerified !== today) {
    errors.push(`publishedDate and lastVerified must be ${today}`);
  }
  if (article.seoTitle.length < 35 || article.seoTitle.length > 65) errors.push("SEO title must be 35-65 characters");
  if (article.seoDescription.length < 120 || article.seoDescription.length > 165) errors.push("SEO description must be 120-165 characters");
  if (!Array.isArray(article.keywords) || article.keywords.length < 5) errors.push("keywords must contain at least 5 items");
  if (!Array.isArray(article.relatedCalculatorSlugs)) errors.push("relatedCalculatorSlugs must be an array");
  if (!Array.isArray(article.content) || article.content.length < MIN_SECTIONS || article.content.length > MAX_SECTIONS) errors.push(`${MIN_SECTIONS}-${MAX_SECTIONS} focused content sections are required`);
  if (!Array.isArray(article.faqs) || article.faqs.length < MIN_FAQS || article.faqs.length > MAX_FAQS) errors.push(`${MIN_FAQS}-${MAX_FAQS} FAQs are required`);
  if (!Array.isArray(article.sources)) errors.push("sources must be an array");
  if (errors.length) throw new Error(`Generated article rejected:\n- ${errors.join("\n- ")}`);
  const bodyWords = wordCount(article);
  if (bodyWords < MIN_BODY_WORDS || bodyWords > MAX_BODY_WORDS) errors.push(`main article body has ${bodyWords} words; ${MIN_BODY_WORDS}-${MAX_BODY_WORDS} useful words are required`);
  const tableCount = article.content.filter((section) => section.table).length;
  if (tableCount > 1) errors.push("no more than one useful table is allowed");
  if (["calculator-comparison", "calculator-category-guide"].includes(articleType) && tableCount !== 1) {
    errors.push(`${articleType} requires exactly one evidence-backed comparison table`);
  }
  const headings = new Set();
  const paragraphs = [];
  for (const section of article.content) {
    if (typeof section.heading !== "string" || !section.heading.trim()) errors.push("every section needs a heading");
    const headingKey = String(section.heading).trim().toLowerCase();
    if (headings.has(headingKey)) errors.push(`duplicate section heading: ${section.heading}`);
    headings.add(headingKey);
    if (!Array.isArray(section.paragraphs) || section.paragraphs.length < 1 || section.paragraphs.length > 4) {
      errors.push(`section ${section.heading} must contain 1-4 paragraphs`);
    }
    for (const paragraph of section.paragraphs ?? []) {
      if (typeof paragraph !== "string" || paragraph.trim().length < 90) errors.push(`section ${section.heading} contains a thin or invalid paragraph`);
      paragraphs.push(paragraph);
    }
    if (!Array.isArray(section.points)) errors.push(`section ${section.heading} points must be an array`);
    if ((section.points ?? []).length > 3) errors.push(`section ${section.heading} has too many bullet points`);
  }
  for (let left = 0; left < paragraphs.length; left += 1) {
    for (let right = left + 1; right < paragraphs.length; right += 1) {
      if (similarity(paragraphs[left], paragraphs[right]) > 0.72) {
        errors.push("article contains substantially repeated paragraphs");
        left = paragraphs.length;
        break;
      }
    }
  }
  for (const faq of article.faqs) {
    if (typeof faq?.question !== "string" || faq.question.trim().length < 12) errors.push("every FAQ needs a meaningful question");
    if (typeof faq?.answer !== "string" || faq.answer.trim().length < 80) errors.push(`FAQ has no substantial answer: ${faq?.question || "unknown question"}`);
    if (/\b(?:not (?:provided|available|specified)|does not (?:provide|specify|state)|refer to the (?:source|release))\b/i.test(faq?.answer ?? "")) {
      errors.push(`FAQ mainly avoids answering the question: ${faq?.question || "unknown question"}`);
    }
  }
  const faqQuestions = article.faqs.map((faq) => normalizedText(faq.question ?? ""));
  if (new Set(faqQuestions).size !== faqQuestions.length) errors.push("FAQ questions must be unique");
  for (let left = 0; left < article.faqs.length; left += 1) {
    for (let right = left + 1; right < article.faqs.length; right += 1) {
      if (similarity(article.faqs[left].question, article.faqs[right].question) > 0.72) {
        errors.push("FAQ questions are substantially duplicated");
        left = article.faqs.length;
        break;
      }
    }
  }
  const editorialText = article.content
    .flatMap((section) => [section.heading, ...(section.paragraphs ?? []), ...(section.points ?? [])])
    .join(" ");
  if (/\p{Script=Devanagari}/u.test(editorialText)) errors.push("article body must be clear English, not untranslated source text");
  if (/&(?:#\d+|#x[\da-f]+|[a-z]+);/i.test(editorialText)) errors.push("article body contains an unprocessed HTML entity");
  const attributionCount = (editorialText.match(/press release(?: dated)?/gi) ?? []).length;
  if (attributionCount > 2) errors.push("source-attribution boilerplate is repeated too often");
  for (const pattern of unsupportedInferencePatterns) {
    if (pattern.test(editorialText)) errors.push(`article contains risky inference language: ${pattern.source}`);
  }
  if (article.sources.length < 1) errors.push("at least 1 trusted evidence source is required");
  const cited = new Set([...availableUrls].filter(isTrustedEvidenceUrl).map(normalizeUrl));
  for (const source of article.sources) {
    if (!isTrustedEvidenceUrl(source.url)) errors.push(`untrusted evidence source: ${source.url}`);
    else if (!cited.has(normalizeUrl(source.url))) errors.push(`source was not supplied in the official source corpus: ${source.url}`);
  }
  article.relatedCalculatorSlugs = article.relatedCalculatorSlugs.filter((slug) => validCalculatorSlugs.includes(slug));
  for (const slug of requiredCalculatorSlugs) {
    if (!article.relatedCalculatorSlugs.includes(slug)) {
      errors.push(`required calculator link is missing: ${slug}`);
    }
  }
  if (/<\/?(?:script|iframe|object|embed|form)\b/i.test(JSON.stringify(article))) errors.push("unsafe HTML detected");
  if (errors.length) throw new Error(`Generated article rejected:\n- ${errors.join("\n- ")}`);
}

function parseDatabaseJson(value, fallback) {
  try {
    return typeof value === "string" ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

async function selectCalculatorTopic(database, existing, today) {
  const result = await database.execute(`
    SELECT slug, name, description, category, is_popular, compare_with_json,
      seo_keywords_json, seo_content, editorial_intro, benchmark_context_json,
      steps_json, formula_json, faqs_json, updated_at
    FROM calculators
    WHERE status = 'published'
    ORDER BY is_popular DESC, updated_at DESC, name
  `);
  const coverage = new Map();
  for (const blog of existing) {
    for (const slug of blog.relatedCalculatorSlugs ?? []) {
      coverage.set(slug, (coverage.get(slug) ?? 0) + 1);
    }
  }
  const calculators = result.rows.map((row) => ({
    slug: String(row.slug),
    name: String(row.name),
    description: String(row.description),
    category: String(row.category),
    isPopular: Number(row.is_popular) === 1,
    compareWith: parseDatabaseJson(row.compare_with_json, []),
    keywords: parseDatabaseJson(row.seo_keywords_json, []),
    seoContent: String(row.seo_content || "").slice(0, 4_000),
    editorialIntro: String(row.editorial_intro || ""),
    benchmarkContext: parseDatabaseJson(row.benchmark_context_json, null),
    steps: parseDatabaseJson(row.steps_json, []).slice(0, 8),
    formula: parseDatabaseJson(row.formula_json, {}),
    faqs: parseDatabaseJson(row.faqs_json, []).slice(0, 10),
    updatedAt: String(row.updated_at || ""),
  }));
  const candidates = calculators
    .sort((left, right) => {
      const coverageDifference = (coverage.get(left.slug) ?? 0) - (coverage.get(right.slug) ?? 0);
      if (coverageDifference) return coverageDifference;
      if (left.isPopular !== right.isPopular) return left.isPopular ? -1 : 1;
      return left.name.localeCompare(right.name);
    })
    .slice(0, 24)
    .map((calculator, index) => ({
      sourceId: index + 1,
      slug: calculator.slug,
      name: calculator.name,
      description: calculator.description,
      category: calculator.category,
      compareWith: calculator.compareWith,
      coverageCount: coverage.get(calculator.slug) ?? 0,
      evidenceDepth: {
        hasFormula: Boolean(calculator.formula?.formula),
        steps: calculator.steps.length,
        faqs: calculator.faqs.length,
        seoContentCharacters: calculator.seoContent.length,
      },
    }));

  let plan;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    plan = await nvidiaChat(
      [
        {
          role: "system",
          content: "You are a senior calculator-content strategist. Return valid JSON only. Select a topic only when the supplied DevCalc calculator records can support an original, accurate and useful article.",
        },
        {
          role: "user",
          content: `Today is ${today}. Choose one article type: calculator-guide (one calculator), calculator-comparison (two genuinely comparable calculators), or calculator-category-guide (two or three complementary calculators). Prefer calculators with low coverageCount and strong formula, steps, FAQ and explanatory evidence. Do not select a comparison merely because names are similar; the article must help a reader make a real choice or understand different outputs. Avoid existing article topics: ${JSON.stringify(existing.map(({ slug, title }) => ({ slug, title })))}. Candidate calculators: ${JSON.stringify(candidates)}. Return {"publishable":boolean,"reason":string,"articleType":string,"topic":string,"sourceIds":number[],"readerIntent":string,"readerValueScore":number,"sourceDepthScore":number}. Both scores must be 4 or 5. Use exactly one source for a guide, exactly two for a comparison, or two to three for a category guide.`,
        },
      ],
      3_000,
      reviewModel,
    );
    const ids = [...new Set((Array.isArray(plan.sourceIds) ? plan.sourceIds : [])
      .map(Number)
      .filter((id) => Number.isInteger(id) && id >= 1 && id <= candidates.length))];
    const expectedCount = plan.articleType === "calculator-guide"
      ? ids.length === 1
      : plan.articleType === "calculator-comparison"
        ? ids.length === 2
        : plan.articleType === "calculator-category-guide"
          ? ids.length >= 2 && ids.length <= 3
          : false;
    const strongPlan = plan.publishable === true
      && expectedCount
      && Number(plan.readerValueScore) >= 4
      && Number(plan.sourceDepthScore) >= 4
      && typeof plan.readerIntent === "string"
      && plan.readerIntent.trim().length >= 20;
    if (strongPlan) {
      const selected = ids.map((id) => calculators.find((item) => item.slug === candidates[id - 1].slug));
      if (selected.every(Boolean)) {
        return {
          selection: {
            topic: String(plan.topic).trim(),
            reason: String(plan.reason || plan.readerIntent).trim(),
            articleType: plan.articleType,
          },
          selectedSources: selected.map((calculator) => ({
            title: `${calculator.name} - DevCalc calculator and methodology`,
            url: `https://www.devcalc.in/${calculator.slug}`,
            publishedDate: calculator.updatedAt,
            publisher: "DevCalc Editorial Desk",
            summary: calculator.description,
            text: JSON.stringify({
              name: calculator.name,
              description: calculator.description,
              category: calculator.category,
              keywords: calculator.keywords,
              editorialIntro: calculator.editorialIntro,
              benchmarkContext: calculator.benchmarkContext,
              formula: calculator.formula,
              steps: calculator.steps,
              faqs: calculator.faqs,
              seoContent: calculator.seoContent,
            }),
            calculatorSlug: calculator.slug,
          })),
        };
      }
    }
  }
  return null;
}

async function main() {
  const today = todayInIndia();
  const repairSlug = process.env.REPAIR_SLUG?.trim() || "";
  const database = createClient({ url: databaseUrl, authToken: databaseAuthToken });
  const existingResult = await database.execute(
    "SELECT slug, title, sources_json, related_calculator_slugs_json FROM blog_posts WHERE status IN ('draft', 'published')",
  );
  const existing = existingResult.rows.map((row) => ({
    slug: String(row.slug),
    title: String(row.title),
    sourceUrls: (() => {
      try {
        const sources = JSON.parse(String(row.sources_json || "[]"));
        return Array.isArray(sources) ? sources.map((source) => source?.url).filter(Boolean) : [];
      } catch {
        return [];
      }
    })(),
    relatedCalculatorSlugs: (() => {
      try {
        const slugs = JSON.parse(String(row.related_calculator_slugs_json || "[]"));
        return Array.isArray(slugs) ? slugs.map(String).filter(Boolean) : [];
      } catch {
        return [];
      }
    })(),
  })).filter((article) => article.slug !== repairSlug);
  const calculatorSlugResult = await database.execute(
    "SELECT slug FROM calculators WHERE status = 'published' ORDER BY slug",
  );
  const calculatorSlugs = [...new Set([
    ...await findCalculatorSlugs(),
    ...calculatorSlugResult.rows.map((row) => String(row.slug)),
  ])].sort();
  const existingSummary = existing.map(({ slug, title }) => ({ slug, title }));
  let selection;
  let selectedSources;

  if (repairSlug) {
    const repairResult = await database.execute({
      sql: "SELECT title, sources_json FROM blog_posts WHERE slug = ? LIMIT 1",
      args: [repairSlug],
    });
    const repairRow = repairResult.rows[0];
    if (!repairRow) throw new Error(`Cannot repair missing blog: ${repairSlug}`);
    const storedSources = JSON.parse(String(repairRow.sources_json));
    if (!Array.isArray(storedSources) || storedSources.length < 1) throw new Error("Repair article has no stored source.");
    selectedSources = await Promise.all(storedSources.map(async (source) => ({
      title: source.title,
      url: source.url,
      publishedDate: source.publishedDate || "",
      publisher: source.publisher || "Press Information Bureau, Government of India",
      summary: "",
      text: plainTextFromHtml(await fetchText(source.url)).slice(0, 12_000),
    })));
    selection = { topic: String(repairRow.title), reason: "Repairing an existing article from its stored official source." };
  } else {
    const usedSourceUrls = new Set(existing.flatMap((article) => article.sourceUrls).map(normalizeUrl));
    const sourceCorpus = (await loadOfficialSourceCorpus())
      .filter((source) => !usedSourceUrls.has(normalizeUrl(source.url)));
    if (sourceCorpus.length < 2) throw new Error("Fewer than two unused official sources are available for a new article.");
    const numberedCorpus = sourceCorpus.map((source, index) => ({ sourceId: index + 1, ...source }));
    let selectedIds = [];
    let isPublishable = false;
    let previousInvalidSelection = null;
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      const selectionInstruction = previousInvalidSelection
        ? `Your previous response was structurally inconsistent or too weak: ${JSON.stringify(previousInvalidSelection)}. Re-evaluate the corpus and return a corrected decision. If the topic is publishable, set publishable to true and include exactly one matching sourceId. If it is not publishable, set publishable to false and return an empty sourceIds array.`
        : `Select one substantial, useful and genuinely current government rule, scheme change, compliance deadline, tax change, consumer update or citizen-service update from exactly one primary official source record in this corpus.`;
      selection = await nvidiaChat(
        [
          { role: "system", content: "You are a cautious Indian public-information editor. Return valid JSON only, keep the decision fields internally consistent, and never use facts outside the supplied official-source corpus." },
          { role: "user", content: `Today is ${today} in India. ${selectionInstruction} Reject greetings, speeches without a concrete public update, ceremonies, awards, political promotion, event recaps without a citizen consequence, routine MoUs without actionable details, and topics too thin for a useful guide. Prefer a source with confirmed dates, amounts, eligibility, deadlines, procedures, measurable changes or public actions. Return exactly {"publishable":boolean,"reason":string,"topic":string,"sourceIds":number[],"readerValueScore":number,"sourceDepthScore":number,"evidencePointCount":number,"publicActionOrDecision":string}. Scores use 1-5, where 4 is strong enough to publish. When publishable is true, sourceIds must contain exactly one valid sourceId, both scores must be at least 4, evidencePointCount must be at least ${MIN_FACTS}, and publicActionOrDecision must name the concrete reader value. When publishable is false, sourceIds must be empty. Reject a source that cannot support at least ${MIN_BODY_WORDS} useful non-repetitive words. Existing topics to avoid: ${JSON.stringify(existingSummary)}. Official corpus: ${JSON.stringify(numberedCorpus)}.` },
        ],
        2_000,
        attempt === 1 ? contentModel : reviewModel,
      );
      const rawSourceIds = Array.isArray(selection.sourceIds) ? selection.sourceIds : selection.sourceId !== undefined ? [selection.sourceId] : [];
      selectedIds = [...new Set(rawSourceIds.flatMap((rawId) => {
        const id = Number(rawId);
        if (!Number.isInteger(id)) return [];
        if (id >= 1 && id <= sourceCorpus.length) return [id];
        const corpusIndex = sourceCorpus.findIndex((source) => {
          try {
            return Number(new URL(source.url).searchParams.get("PRID")) === id;
          } catch {
            return false;
          }
        });
        return corpusIndex >= 0 ? [corpusIndex + 1] : [];
      }))];
      isPublishable = selection.publishable === true || String(selection.publishable).toLowerCase() === "true";
      const strongReaderValue = Number(selection.readerValueScore) >= 4;
      const strongSourceDepth = Number(selection.sourceDepthScore) >= 4;
      const enoughEvidence = Number(selection.evidencePointCount) >= MIN_FACTS;
      const concreteValue = typeof selection.publicActionOrDecision === "string"
        && selection.publicActionOrDecision.trim().length >= 20;
      if (isPublishable && selectedIds.length === 1 && strongReaderValue && strongSourceDepth && enoughEvidence && concreteValue) break;
      if (isPublishable) isPublishable = false;
      if (!isPublishable && selectedIds.length === 0 && attempt === 3) break;
      previousInvalidSelection = selection;
    }
    if (!isPublishable || selectedIds.length !== 1) {
      const governmentReason = selection.reason || "insufficient official evidence";
      const calculatorPlan = await selectCalculatorTopic(database, existing, today);
      if (calculatorPlan) {
        selection = calculatorPlan.selection;
        selectedSources = calculatorPlan.selectedSources;
        console.log(`Government feed skipped: ${governmentReason}`);
        console.log(`Selected ${selection.articleType}: ${selection.topic}`);
      } else {
        const reason = `${governmentReason}; no calculator topic passed the quality threshold`;
        if (process.env.GITHUB_OUTPUT) {
          const singleLineReason = String(reason).replace(/[\r\n]+/g, " ").trim();
          await fs.appendFile(
            process.env.GITHUB_OUTPUT,
            `published=false\nslug=\nreason=${singleLineReason}\n`,
            "utf8",
          );
        }
        database.close();
        console.log(`Skipped publication: ${reason}`);
        return;
      }
    } else {
      selectedSources = selectedIds.map((id) => ({
        ...sourceCorpus[id - 1],
        publisher: "Press Information Bureau, Government of India",
      }));
    }
  }
  const selectedUrls = selectedSources.map((source) => source.url);
  const selectedCalculatorSlugs = selectedSources
    .map((source) => source.calculatorSlug)
    .filter(Boolean);
  const factualBoundary = `Selected topic: ${selection.topic}. Article type: ${selection.articleType || "government-update"}. Today: ${today}. Use only these supplied evidence sources and never add facts absent from them: ${JSON.stringify(selectedSources)}`;
  const generatedMetadata = await nvidiaChat(
    [
      {
        role: "system",
        content: "You plan evidence-bound, people-first DevCalc guides. Return valid JSON only and never add facts outside the supplied evidence sources.",
      },
      {
        role: "user",
        content: `${factualBoundary}\nCreate article metadata. Return keys slug, title, seoTitle, seoDescription, description, category, keywords, effectiveDate, relatedCalculatorSlugs. SEO title must be 35-65 characters and description 120-165 characters. Slug must be lowercase hyphenated. Only use calculator slugs from ${JSON.stringify(calculatorSlugs)}. The article's primary calculator slugs ${JSON.stringify(selectedCalculatorSlugs)} must all be included in relatedCalculatorSlugs; add at most three other genuinely relevant calculators. Avoid existing topics ${JSON.stringify(existingSummary)}.`,
      },
    ],
    3_000,
  );
  const metadata = normalizeMetadata(generatedMetadata, selection);
  metadata.relatedCalculatorSlugs = [...new Set([
    ...selectedCalculatorSlugs,
    ...metadata.relatedCalculatorSlugs,
  ])].filter((slug) => calculatorSlugs.includes(slug)).slice(0, 6);
  if (repairSlug) metadata.slug = repairSlug;

  let factResult = await nvidiaChat(
    [
      {
        role: "system",
        content: "You are a meticulous fact extractor. Return valid JSON only. Copy no long passages and never infer an unstated fact. Calculator methodology records are first-party product evidence, not independent claims about market performance.",
      },
      {
        role: "user",
        content: `${factualBoundary}\nBuild a factual ledger before writing. Return {"facts":[{"id":string,"claim":string,"evidence":string,"readerUse":string}],"unknowns":string[],"usefulReaderQuestions":string[],"mustExplain":string[]}. Include every material number with its date, unit and comparison period. Each fact must identify why it matters to a reader without inventing an impact. usefulReaderQuestions must be answerable from the facts, not generic questions or prompts to visit another page. mustExplain must cover what changed, who or what is covered, key dates or numbers, and any action or verification path explicitly supported by the source. Explicitly list anything the source does not establish. Do not label a threshold, risk, eligibility rule, trend, cause or impact unless the source explicitly does so.`,
      },
    ],
    4_000,
  );
  for (let factAttempt = 1; factAttempt <= 3; factAttempt += 1) {
    const hasEnoughFacts = Array.isArray(factResult.facts) && factResult.facts.length >= MIN_FACTS;
    const hasEnoughQuestions = Array.isArray(factResult.usefulReaderQuestions)
      && factResult.usefulReaderQuestions.length >= MIN_FAQS;
    const hasMustExplain = Array.isArray(factResult.mustExplain) && factResult.mustExplain.length >= 3;
    if (hasEnoughFacts && hasEnoughQuestions && hasMustExplain) break;
    factResult = await nvidiaChat(
      [
        {
          role: "system",
          content: "You are a corrective evidence editor. Return valid JSON only and never add information absent from the supplied official source.",
        },
        {
          role: "user",
          content: `Fact-ledger correction attempt ${factAttempt} of 3. Official-source boundary: ${factualBoundary}. Current ledger: ${JSON.stringify(factResult)}. Return {"facts":[{"id":string,"claim":string,"evidence":string,"readerUse":string}],"unknowns":string[],"usefulReaderQuestions":string[],"mustExplain":string[]}. Provide at least ${MIN_FACTS} distinct supported facts, ${MIN_FAQS} answerable reader questions and at least 3 mustExplain items. If the source cannot support these requirements, return empty facts and questions rather than inventing content.`,
        },
      ],
      5_000,
      reviewModel,
    );
  }
  if (!Array.isArray(factResult.facts) || factResult.facts.length < MIN_FACTS) {
    throw new Error(`Evidence sources did not produce the required ${MIN_FACTS} supported facts.`);
  }
  if (!Array.isArray(factResult.usefulReaderQuestions) || factResult.usefulReaderQuestions.length < MIN_FAQS) {
    throw new Error(`Evidence sources did not support ${MIN_FAQS} useful reader questions.`);
  }

  const articleSpecificRequirements = selection.articleType === "calculator-guide"
    ? "Explain what the calculator measures, its required inputs, the stored formula and every variable, a worked example only when supported by the evidence, how to interpret the output, and important assumptions or limitations. Do not repeat the calculator page introduction."
    : selection.articleType === "calculator-comparison"
      ? "Compare the calculators through one clear reader decision. Explain how their inputs, formulas, outputs, use cases and limitations differ. Include one evidence-backed comparison table. Do not declare a universal winner or repeat two standalone descriptions."
      : selection.articleType === "calculator-category-guide"
        ? "Build a practical decision framework showing which calculator answers which question, what inputs each needs, how their outputs connect and where they should not be substituted for one another. Include one evidence-backed comparison table."
        : "Explain the confirmed public update, its supported dates and numbers, who or what it covers, and any action or verification path explicitly stated by the primary source.";

  let generatedBody = await nvidiaChat(
    [
      {
        role: "system",
        content: "You are a senior public-information editor. Write clear, useful, non-repetitive prose from the supplied fact ledger only. Return valid JSON only.",
      },
      {
        role: "user",
        content: `Topic: ${selection.topic}. Article type: ${selection.articleType || "government-update"}. Fact ledger: ${JSON.stringify(factResult)}. Type-specific requirements: ${articleSpecificRequirements} Return {"content":[{"heading":string,"paragraphs":string[],"points":string[],"table":null or {"headers":string[],"rows":string[][]}}],"faqs":[{"question":string,"answer":string}]}. Requirements: ${MIN_SECTIONS}-${MAX_SECTIONS} topic-specific sections and ${MIN_BODY_WORDS}-${MAX_BODY_WORDS} useful words, 1-3 substantial paragraphs per section, at most 3 concise bullets where genuinely useful, zero or one small evidence-backed table, and ${MIN_FAQS}-${MAX_FAQS} distinct FAQs answered directly from the ledger. Lead with the reader's actual question and a concise evidence-based answer, then organize the evidence around the real reader questions and mustExplain items. Use concrete headings unique to this topic; do not repeat a stock template. Every paragraph must add a new supported detail, explanation, comparison or clearly labelled arithmetic. State each key number no more than twice. Do not invent implications, thresholds, market claims, advice, causes or future outcomes. Every FAQ answer must be useful on its own, at least 80 characters, and must not merely say that information is unavailable or tell the reader to visit the source.`,
      },
    ],
    14_000,
  );
  for (let bodyAttempt = 1; bodyAttempt <= 3; bodyAttempt += 1) {
    if (Array.isArray(generatedBody.content) && Array.isArray(generatedBody.faqs)) break;
    generatedBody = await nvidiaChat(
      [
        {
          role: "system",
          content: "You are a corrective public-information editor. Return valid JSON only and preserve the evidence boundary.",
        },
        {
          role: "user",
          content: `Article-shape correction attempt ${bodyAttempt} of 3. Topic: ${selection.topic}. Fact ledger: ${JSON.stringify(factResult)}. Invalid response: ${JSON.stringify(generatedBody)}. Return exactly {"content":[{"heading":string,"paragraphs":string[],"points":string[],"table":null or {"headers":string[],"rows":string[][]}}],"faqs":[{"question":string,"answer":string}]}, with ${MIN_SECTIONS}-${MAX_SECTIONS} sections, ${MIN_BODY_WORDS}-${MAX_BODY_WORDS} useful words and ${MIN_FAQS}-${MAX_FAQS} substantial FAQs.`,
        },
      ],
      14_000,
      reviewModel,
    );
  }
  if (!Array.isArray(generatedBody.content) || !Array.isArray(generatedBody.faqs)) {
    throw new Error("NVIDIA did not return a valid article body after corrective retries.");
  }

  let reviewResult = await nvidiaChat(
    [
      {
        role: "system",
        content: "You are the final independent fact-checker and copy editor. Return valid JSON only. Correct problems instead of merely describing them.",
      },
      {
        role: "user",
        content: `Fact ledger: ${JSON.stringify(factResult)}. Candidate article: ${JSON.stringify(generatedBody)}. Audit every number, date, comparison, causal statement and FAQ. Remove repetition, unsupported inference, irrelevant boilerplate, stock-template prose and contradictions. Return {"approved":boolean,"issues":string[],"content":[{"heading":string,"paragraphs":string[],"points":string[],"table":null or {"headers":string[],"rows":string[][]}}],"faqs":[{"question":string,"answer":string}]}. approved may be true only when the corrected article is supported, coherent, specific and genuinely useful. Keep ${MIN_SECTIONS}-${MAX_SECTIONS} sections, ${MIN_BODY_WORDS}-${MAX_BODY_WORDS} useful body words, zero or one factual table and ${MIN_FAQS}-${MAX_FAQS} substantial FAQs.`,
      },
    ],
    14_000,
  );
  if (!Array.isArray(reviewResult.content) || !Array.isArray(reviewResult.faqs)) {
    throw new Error(`Editorial review returned invalid content: ${JSON.stringify(reviewResult.issues ?? [])}`);
  }
  reviewResult = normalizeEditorialShape(reviewResult);
  for (let correctionAttempt = 1; correctionAttempt <= 4; correctionAttempt += 1) {
    const shapeErrors = editorialShapeErrors(reviewResult.content, reviewResult.faqs);
    if (reviewResult.approved === true && shapeErrors.length === 0) break;
    reviewResult = await nvidiaChat(
      [
        {
          role: "system",
          content: "You are the final corrective editor. Return valid JSON only and satisfy every stated constraint exactly.",
        },
        {
          role: "user",
          content: `Editorial correction attempt ${correctionAttempt} of 4. Fact ledger: ${JSON.stringify(factResult)}. Current article: ${JSON.stringify(reviewResult)}. Problems to correct: ${JSON.stringify([...shapeErrors, ...(reviewResult.issues ?? [])])}. Return the complete corrected object as {"approved":true,"issues":[],"content":[...],"faqs":[...]}. Preserve only ledger-supported claims. Use ${MIN_SECTIONS}-${MAX_SECTIONS} specific sections, ${MIN_BODY_WORDS}-${MAX_BODY_WORDS} useful words without padding, zero or one table, no more than 3 bullets per section, and ${MIN_FAQS}-${MAX_FAQS} distinct FAQs with substantial direct answers. Do not claim approval unless every constraint is satisfied.`,
        },
      ],
      14_000,
    );
    if (!Array.isArray(reviewResult.content) || !Array.isArray(reviewResult.faqs)) break;
    reviewResult = normalizeEditorialShape(reviewResult);
  }
  const finalShapeErrors = editorialShapeErrors(reviewResult.content, reviewResult.faqs);
  if (reviewResult.approved !== true || finalShapeErrors.length > 0) {
    throw new Error(`Editorial review rejected the article: ${JSON.stringify([...(reviewResult.issues ?? []), ...finalShapeErrors])}`);
  }

  let content = reviewResult.content.map((section) => ({
    heading: String(section.heading || "").trim(),
    paragraphs: Array.isArray(section.paragraphs) ? section.paragraphs.map((paragraph) => String(paragraph).trim()).filter(Boolean) : [],
    points: Array.isArray(section.points) ? section.points.map((point) => String(point).trim()).filter(Boolean).slice(0, 3) : [],
    table: section.table ?? null,
  }));
  let generatedFaqs = reviewResult.faqs
    .filter((faq) => typeof faq?.question === "string" && typeof faq?.answer === "string")
    .map((faq) => ({ question: faq.question.trim(), answer: faq.answer.trim() }))
    .filter((faq) => faq.question && faq.answer);

  const fallbackFaqs = [
    {
      question: `What is this government update about?`,
      answer: `This guide explains the official update concerning ${selection.topic}. Read the linked Press Information Bureau release for the complete government wording and context.`,
    },
    {
      question: "Which official source supports this guide?",
      answer: `The guide is based on the Press Information Bureau release titled “${selectedSources[0].title}”. The official link is included in the sources section.`,
    },
    {
      question: "When was the official information published?",
      answer: `The selected official release lists its publication date as ${selectedSources[0].publishedDate || "shown on the linked PIB page"}. Check that page for any later clarification.`,
    },
    {
      question: "How can I verify whether the information has changed?",
      answer: "Open the linked official source and the relevant government department website before taking action. Government requirements, dates and implementation details can change after publication.",
    },
    {
      question: "Does this guide replace official or professional advice?",
      answer: "No. This is a general explanation of the cited official release. It does not replace the legal text, departmental instructions or advice for an individual situation.",
    },
    {
      question: "What should I do if a detail is not confirmed in the release?",
      answer: "Treat it as unconfirmed and do not rely on assumptions. Use the official contact channels or later notifications from the responsible government department.",
    },
  ];
  // Keep the historical fallback copy out of publication. The reviewed FAQs
  // must pass validation on their own; weak model output should fail closed.
  void fallbackFaqs;
  let faqs = generatedFaqs;

  let draft = {
    ...metadata,
    publishedDate: today,
    lastVerified: today,
    readingTime: "",
    content,
    faqs,
    sources: selectedSources.map((source) => ({
      title: source.title,
      url: source.url,
      publisher: source.publisher || "Press Information Bureau, Government of India",
      publishedDate: source.publishedDate,
    })),
  };
  let validationError;
  for (let validationAttempt = 1; validationAttempt <= 5; validationAttempt += 1) {
    try {
      validateArticle(draft, existing, selectedUrls, calculatorSlugs, today, selection.articleType, selectedCalculatorSlugs);
      validationError = undefined;
      break;
    } catch (error) {
      validationError = error;
    }
    if (validationAttempt === 5) break;
    const corrected = await nvidiaChat(
      [
        {
          role: "system",
          content: "You are a strict corrective editor. Return valid JSON only. Remove unsupported interpretation instead of replacing it with different speculation.",
        },
        {
          role: "user",
          content: `Deterministic correction attempt ${validationAttempt} of 4. Fact ledger: ${JSON.stringify(factResult)}. Draft content and FAQs: ${JSON.stringify({ content, faqs })}. Validation errors to fix: ${validationError.message}. Return {"content":[{"heading":string,"paragraphs":string[],"points":string[],"table":null or {"headers":string[],"rows":string[][]}}],"faqs":[{"question":string,"answer":string}]}. Correct every problem while preserving ${MIN_SECTIONS}-${MAX_SECTIONS} specific sections, ${MIN_BODY_WORDS}-${MAX_BODY_WORDS} useful words, no more than 3 bullets per section and ${MIN_FAQS}-${MAX_FAQS} substantial FAQs. Use direct factual wording only. Do not use untranslated quotations, HTML entities, repeated attribution boilerplate, generic filler or claims about unstated purpose, scope, benefit, effect, outcome or future impact.`,
        },
      ],
      14_000,
    );
    if (!Array.isArray(corrected.content) || !Array.isArray(corrected.faqs)) continue;
    content = corrected.content.map((section) => ({
      heading: String(section.heading || "").trim(),
      paragraphs: Array.isArray(section.paragraphs) ? section.paragraphs.map(removeRiskySentences).filter(Boolean) : [],
      points: Array.isArray(section.points) ? section.points.map(removeRiskySentences).filter(Boolean).slice(0, 3) : [],
      table: section.table ?? null,
    }));
    generatedFaqs = corrected.faqs
      .filter((faq) => typeof faq?.question === "string" && typeof faq?.answer === "string")
      .map((faq) => ({ question: faq.question.trim(), answer: faq.answer.trim() }))
      .filter((faq) => faq.question && faq.answer);
    faqs = generatedFaqs;
    draft = { ...draft, content, faqs };
  }
  if (validationError) throw validationError;

  let { problems: qualityProblems } = await runFinalQualityGate(
    factResult,
    draft,
    selection.articleType,
    articleSpecificRequirements,
  );
  for (let qualityAttempt = 1; qualityProblems.length > 0 && qualityAttempt <= 4; qualityAttempt += 1) {
    const corrected = await nvidiaChat(
      [
        {
          role: "system",
          content: "You are a senior fact-check correction editor. Return valid JSON only. Correct every material issue without adding new claims.",
        },
        {
          role: "user",
          content: `Correction attempt ${qualityAttempt} of 4. Fact ledger: ${JSON.stringify(factResult)}. Current draft: ${JSON.stringify(draft)}. Final-review findings: ${JSON.stringify(qualityProblems)}. Return {"title":string,"seoTitle":string,"seoDescription":string,"description":string,"content":[{"heading":string,"paragraphs":string[],"points":string[],"table":null or {"headers":string[],"rows":string[][]}}],"faqs":[{"question":string,"answer":string}]}. Resolve every finding using only ledger facts. Remove each unsupported claim everywhere rather than rephrasing it. Keep ${MIN_SECTIONS}-${MAX_SECTIONS} non-repetitive sections, ${MIN_BODY_WORDS}-${MAX_BODY_WORDS} useful words, no more than 3 bullets per section, and ${MIN_FAQS}-${MAX_FAQS} useful FAQs with direct answers of at least 80 characters. Remove questions that cannot be answered from the ledger.`,
        },
      ],
      14_000,
    );
    content = Array.isArray(corrected.content) ? corrected.content.map((section) => ({
      heading: String(section.heading || "").trim(),
      paragraphs: Array.isArray(section.paragraphs) ? section.paragraphs.map(removeRiskySentences).filter(Boolean) : [],
      points: Array.isArray(section.points) ? section.points.map(removeRiskySentences).filter(Boolean).slice(0, 3) : [],
      table: section.table ?? null,
    })) : [];
    faqs = Array.isArray(corrected.faqs) ? corrected.faqs
      .filter((faq) => typeof faq?.question === "string" && typeof faq?.answer === "string")
      .map((faq) => ({ question: faq.question.trim(), answer: faq.answer.trim() }))
      .filter((faq) => faq.question && faq.answer) : [];
    draft = {
      ...draft,
      title: String(corrected.title || draft.title).trim(),
      seoTitle: fitSeoTitle(corrected.seoTitle, corrected.title || draft.title),
      seoDescription: fitSeoDescription(corrected.seoDescription, corrected.description || draft.description),
      description: String(corrected.description || draft.description).trim(),
      content,
      faqs,
    };
    try {
      validateArticle(draft, existing, selectedUrls, calculatorSlugs, today, selection.articleType, selectedCalculatorSlugs);
    } catch (error) {
      qualityProblems = [error instanceof Error ? error.message : String(error)];
      continue;
    }
    ({ problems: qualityProblems } = await runFinalQualityGate(
      factResult,
      draft,
      selection.articleType,
      articleSpecificRequirements,
    ));
  }
  if (qualityProblems.length > 0) {
    throw new Error(`Final quality gate rejected the corrected article: ${JSON.stringify(qualityProblems)}`);
  }

  const article = {
    slug: draft.slug,
    title: draft.title,
    seoTitle: draft.seoTitle,
    seoDescription: draft.seoDescription,
    description: draft.description,
    category: draft.category,
    author: "DevCalc Editorial Desk",
    publishedDate: draft.publishedDate,
    readingTime: `${Math.ceil(wordCount(draft) / 220)} min read`,
    image: `/blog-image/${draft.slug}`,
    imageAlt: draft.title,
    keywords: draft.keywords,
    lastVerified: draft.lastVerified,
    effectiveDate: draft.effectiveDate,
    sources: draft.sources,
    relatedCalculatorSlugs: draft.relatedCalculatorSlugs,
    content: draft.content.map((section) => ({
      heading: section.heading,
      paragraphs: section.paragraphs,
      ...(section.points.length ? { points: section.points } : {}),
      ...(section.table ? { table: section.table } : {}),
    })),
    faqs: draft.faqs,
  };

  try {
    const conflictClause = repairSlug
      ? `ON CONFLICT(slug) DO UPDATE SET
          title = excluded.title,
          seo_title = excluded.seo_title,
          seo_description = excluded.seo_description,
          description = excluded.description,
          category = excluded.category,
          author = excluded.author,
          published_at = excluded.published_at,
          reading_time = excluded.reading_time,
          image_url = excluded.image_url,
          image_alt = excluded.image_alt,
          keywords_json = excluded.keywords_json,
          last_verified_at = excluded.last_verified_at,
          effective_date = excluded.effective_date,
          sources_json = excluded.sources_json,
          related_calculator_slugs_json = excluded.related_calculator_slugs_json,
          content_json = excluded.content_json,
          faqs_json = excluded.faqs_json,
          status = 'published'`
      : "";
    await database.execute({
      sql: `
        INSERT INTO blog_posts (
          slug, title, seo_title, seo_description, description, category, author,
          published_at, reading_time, image_url, image_alt, keywords_json,
          last_verified_at, effective_date, sources_json,
          related_calculator_slugs_json, content_json, faqs_json, status, is_featured
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'published', 0)
        ${conflictClause}
      `,
      args: [
        article.slug,
        article.title,
        article.seoTitle,
        article.seoDescription,
        article.description,
        article.category,
        article.author,
        article.publishedDate,
        article.readingTime,
        article.image,
        article.imageAlt ?? null,
        JSON.stringify(article.keywords ?? []),
        article.lastVerified ?? null,
        article.effectiveDate ?? null,
        JSON.stringify(article.sources ?? []),
        JSON.stringify(article.relatedCalculatorSlugs ?? []),
        JSON.stringify(article.content),
        JSON.stringify(article.faqs),
      ],
    });

    const published = await database.execute({
      sql: `
        SELECT slug, status, json_array_length(keywords_json) AS keyword_count,
          json_array_length(content_json) AS section_count,
          json_array_length(faqs_json) AS faq_count,
          image_url, image_alt
        FROM blog_posts
        WHERE slug = ?
        LIMIT 1
      `,
      args: [article.slug],
    });
    const row = published.rows[0];
    if (
      !row ||
      row.status !== "published" ||
      Number(row.keyword_count) < 5 ||
      Number(row.section_count) < MIN_SECTIONS ||
      Number(row.section_count) > MAX_SECTIONS ||
      Number(row.faq_count) < MIN_FAQS ||
      Number(row.faq_count) > MAX_FAQS ||
      String(row.image_url || "") !== `/blog-image/${article.slug}` ||
      !String(row.image_alt || "").trim()
    ) {
      throw new Error(`Database verification failed for generated article ${article.slug}.`);
    }

    if (process.env.GITHUB_OUTPUT) {
      await fs.appendFile(process.env.GITHUB_OUTPUT, `published=true\nslug=${article.slug}\n`, "utf8");
    }
  } finally {
    database.close();
  }
  console.log(`Published database article: /blog/${article.slug}`);
}

await main();
