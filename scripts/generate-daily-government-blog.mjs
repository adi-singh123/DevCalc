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
  process.env.NVIDIA_CONTENT_MODEL || "nvidia/nemotron-3.5-lightning-30b-a3b";
const reviewModel =
  process.env.NVIDIA_REVIEW_MODEL || "nvidia/nemotron-3-super-120b-a12b";

const officialDomains = [
  "irctc.co.in",
  "gst.gov.in",
  "pib.gov.in",,
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
    title,
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
  if (!Array.isArray(content) || content.length < 5 || content.length > 10) {
    errors.push("return 5-10 content sections");
  }
  if (!Array.isArray(faqs) || faqs.length < 5 || faqs.length > 7) {
    errors.push("return 5-7 FAQs");
  }
  if (!Array.isArray(content) || !Array.isArray(faqs)) return errors;
  const words = wordCount({ content });
  if (words < 350 || words > 2_200) errors.push(`body word count is ${words}; it must be 350-2,200`);
  const tables = content.filter((section) => section?.table).length;
  if (tables > 1) errors.push(`table count is ${tables}; maximum is 1`);
  for (const section of content) {
    if (!Array.isArray(section?.paragraphs) || section.paragraphs.length < 1 || section.paragraphs.length > 4) {
      errors.push(`section "${section?.heading || "untitled"}" must have 1-4 paragraphs`);
    }
    if (Array.isArray(section?.points) && section.points.length > 3) errors.push(`section "${section?.heading || "untitled"}" has ${section.points.length} bullets; maximum is 3`);
  }
  for (const faq of faqs) {
    if (typeof faq?.question !== "string" || typeof faq?.answer !== "string") errors.push("every FAQ must have question and answer strings");
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

async function runFinalQualityGate(factResult, draft) {
  const result = await nvidiaChat(
    [
      {
        role: "system",
        content: "You are an adversarial government-information fact checker. Return valid JSON only. Your job is to veto unsafe or low-quality publication, not to rewrite it.",
      },
      {
        role: "user",
        content: `Fact ledger: ${JSON.stringify(factResult)}. Proposed metadata and article: ${JSON.stringify(draft)}. Return {"approved":boolean,"unsupportedClaims":string[],"contradictions":string[],"repetition":string[],"headingProblems":string[],"faqProblems":string[]}. Report only material problems. Faithful paraphrases are allowed when their meaning matches a ledger fact; do not demand identical wording. A concise FAQ may recap a body fact and should not be marked repetitive for that reason. Reject material unstated scope, benefit, target, cause, effect, prediction, recommendation or superlative; incorrect arithmetic; sections that substantially repeat one another; FAQs whose main answer is merely that information is unavailable; untranslated or malformed text; or SEO text that ends mid-thought. Do not contradict the supplied ledger in your own review. Approve only when every reported problem is material and all problem arrays are empty.`,
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
  ];
  return { result, problems: [...new Set(problems)] };
}

function validateArticle(article, existing, availableUrls, validCalculatorSlugs, today) {
  const errors = [];
  if (!article || typeof article !== "object") throw new Error("Generated article is not an object.");
  for (const field of ["slug", "title", "seoTitle", "seoDescription", "description", "category", "effectiveDate"]) {
    if (typeof article[field] !== "string" || !article[field].trim()) errors.push(`${field} must be a non-empty string`);
  }
  if (errors.length) throw new Error(`Generated article rejected:\n- ${errors.join("\n- ")}`);
  if (existing.some((item) => item.slug === article.slug)) errors.push("duplicate slug");
  if (article.publishedDate !== today || article.lastVerified !== today) {
    errors.push(`publishedDate and lastVerified must be ${today}`);
  }
  if (article.seoTitle.length < 35 || article.seoTitle.length > 65) errors.push("SEO title must be 35-65 characters");
  if (article.seoDescription.length < 120 || article.seoDescription.length > 165) errors.push("SEO description must be 120-165 characters");
  if (!Array.isArray(article.keywords) || article.keywords.length < 5) errors.push("keywords must contain at least 5 items");
  if (!Array.isArray(article.relatedCalculatorSlugs)) errors.push("relatedCalculatorSlugs must be an array");
  if (!Array.isArray(article.content) || article.content.length < 5 || article.content.length > 12) errors.push("5-12 focused content sections are required");
  if (!Array.isArray(article.faqs) || article.faqs.length < 5 || article.faqs.length > 8) errors.push("5-8 FAQs are required");
  if (!Array.isArray(article.sources)) errors.push("sources must be an array");
  if (errors.length) throw new Error(`Generated article rejected:\n- ${errors.join("\n- ")}`);
  const bodyWords = wordCount(article);
  if (bodyWords < 350 || bodyWords > 2_400) errors.push(`main article body has ${bodyWords} words; 350-2,400 useful words are required`);
  const tableCount = article.content.filter((section) => section.table).length;
  if (tableCount > 1) errors.push("no more than one useful table is allowed");
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
      if (typeof paragraph !== "string" || paragraph.trim().length < 80) errors.push(`section ${section.heading} contains an invalid paragraph`);
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
    if (typeof faq?.answer !== "string" || faq.answer.trim().length < 40) errors.push(`FAQ has no meaningful answer: ${faq?.question || "unknown question"}`);
  }
  const faqQuestions = article.faqs.map((faq) => normalizedWords(faq.question ?? ""));
  if (new Set(faqQuestions).size !== faqQuestions.length) errors.push("FAQ questions must be unique");
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
  if (article.sources.length < 1) errors.push("at least 1 primary official source is required");
  const cited = new Set([...availableUrls].filter(isOfficialUrl).map(normalizeUrl));
  for (const source of article.sources) {
    if (!isOfficialUrl(source.url)) errors.push(`non-official source: ${source.url}`);
    else if (!cited.has(normalizeUrl(source.url))) errors.push(`source was not supplied in the official source corpus: ${source.url}`);
  }
  article.relatedCalculatorSlugs = article.relatedCalculatorSlugs.filter((slug) => validCalculatorSlugs.includes(slug));
  if (/<\/?(?:script|iframe|object|embed|form)\b/i.test(JSON.stringify(article))) errors.push("unsafe HTML detected");
  if (errors.length) throw new Error(`Generated article rejected:\n- ${errors.join("\n- ")}`);
}

async function main() {
  const today = todayInIndia();
  const repairSlug = process.env.REPAIR_SLUG?.trim() || "";
  const database = createClient({ url: databaseUrl, authToken: databaseAuthToken });
  const existingResult = await database.execute(
    "SELECT slug, title, sources_json FROM blog_posts WHERE status IN ('draft', 'published')",
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
  })).filter((article) => article.slug !== repairSlug);
  const calculatorSlugs = await findCalculatorSlugs();
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
        ? `Your previous response was structurally inconsistent and cannot be used: ${JSON.stringify(previousInvalidSelection)}. Re-evaluate the corpus and return a corrected decision. If the topic is publishable, set publishable to true and include exactly one matching sourceId. If it is not publishable, set publishable to false and return an empty sourceIds array.`
        : `Select one substantial, useful and genuinely current government rule, scheme change, compliance deadline, tax change, consumer update or citizen-service update from exactly one primary official source record in this corpus.`;
      selection = await nvidiaChat(
        [
          { role: "system", content: "You are a cautious Indian public-information editor. Return valid JSON only, keep the decision fields internally consistent, and never use facts outside the supplied official-source corpus." },
          { role: "user", content: `Today is ${today} in India. ${selectionInstruction} Reject greetings, speeches without a concrete public update, ceremonies, awards, political promotion and topics too thin for a useful guide. Return exactly {"publishable":boolean,"reason":string,"topic":string,"sourceIds":number[]}. When publishable is true, sourceIds must contain exactly one valid sourceId from the corpus. When publishable is false, sourceIds must be empty. Reject a source that cannot support at least 500 useful non-repetitive words. Existing topics to avoid: ${JSON.stringify(existingSummary)}. Official corpus: ${JSON.stringify(numberedCorpus)}.` },
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
      if (isPublishable && selectedIds.length === 1) break;
      if (!isPublishable && selectedIds.length === 0 && attempt === 3) break;
      previousInvalidSelection = selection;
    }
    if (!isPublishable || selectedIds.length !== 1) {
      throw new Error(
        `No safely publishable topic found: ${selection.reason || "insufficient official evidence"} (publishable=${JSON.stringify(selection.publishable)}, sourceIds=${JSON.stringify(selection.sourceIds ?? selection.sourceId ?? [])})`,
      );
    }
    selectedSources = selectedIds.map((id) => sourceCorpus[id - 1]);
  }
  const selectedUrls = selectedSources.map((source) => source.url);
  const factualBoundary = `Selected topic: ${selection.topic}. Today: ${today}. Use only these official sources and never add facts absent from them: ${JSON.stringify(selectedSources)}`;
  const generatedMetadata = await nvidiaChat(
    [
      {
        role: "system",
        content: "You plan evidence-bound, people-first DevCalc guides. Return valid JSON only and never add facts outside supplied official sources.",
      },
      {
        role: "user",
        content: `${factualBoundary}\nCreate article metadata. Return keys slug, title, seoTitle, seoDescription, description, category, keywords, effectiveDate, relatedCalculatorSlugs. SEO title must be 35-65 characters and description 120-165 characters. Slug must be lowercase hyphenated. Only use calculator slugs from ${JSON.stringify(calculatorSlugs)}. Avoid existing topics ${JSON.stringify(existingSummary)}.`,
      },
    ],
    3_000,
  );
  const metadata = normalizeMetadata(generatedMetadata, selection);
  if (repairSlug) metadata.slug = repairSlug;

  const factResult = await nvidiaChat(
    [
      {
        role: "system",
        content: "You are a meticulous fact extractor. Return valid JSON only. Copy no long passages and never infer an unstated fact.",
      },
      {
        role: "user",
        content: `${factualBoundary}\nBuild a factual ledger before writing. Return {"facts":[{"id":string,"claim":string,"evidence":string}],"unknowns":string[],"usefulReaderQuestions":string[]}. Include every material number with its date, unit and comparison period. Explicitly list anything the source does not establish. Do not label a threshold, risk, eligibility rule, trend, cause or impact unless the source explicitly does so.`,
      },
    ],
    4_000,
  );
  if (!Array.isArray(factResult.facts) || factResult.facts.length < 3) {
    throw new Error("Official source did not produce a sufficient factual ledger.");
  }

  const generatedBody = await nvidiaChat(
    [
      {
        role: "system",
        content: "You are a senior public-information editor. Write clear, useful, non-repetitive prose from the supplied fact ledger only. Return valid JSON only.",
      },
      {
        role: "user",
        content: `Topic: ${selection.topic}. Fact ledger: ${JSON.stringify(factResult)}. Return {"content":[{"heading":string,"paragraphs":string[],"points":string[],"table":null or {"headers":string[],"rows":string[][]}}],"faqs":[{"question":string,"answer":string}]}. Requirements: 5-10 topic-specific sections and enough words to explain all supported facts clearly without padding (normally 500-2,000), 1-3 paragraphs per section, at most 3 concise bullets where genuinely useful, zero or one small evidence-backed table, and 5-7 distinct FAQs that reflect likely reader questions. Do not use generic headings about families, employers, eligibility, documents, costs or participation unless the fact ledger specifically supports them. State each key number no more than twice across the article. Distinguish source facts from clearly labelled arithmetic. Do not invent implications, safety thresholds, regional effects, outage risk, advice, causes or future outcomes. If evidence is limited, keep the article concise rather than padding it. Every FAQ object must contain exactly a non-empty question and answer.`,
      },
    ],
    14_000,
  );
  if (!Array.isArray(generatedBody.content) || !Array.isArray(generatedBody.faqs)) {
    throw new Error("NVIDIA returned an invalid article body.");
  }

  let reviewResult = await nvidiaChat(
    [
      {
        role: "system",
        content: "You are the final independent fact-checker and copy editor. Return valid JSON only. Correct problems instead of merely describing them.",
      },
      {
        role: "user",
        content: `Fact ledger: ${JSON.stringify(factResult)}. Candidate article: ${JSON.stringify(generatedBody)}. Audit every number, date, comparison, causal statement and FAQ. Remove repetition, unsupported inference, irrelevant boilerplate and contradictions. Fix malformed FAQ objects. Return {"approved":boolean,"issues":string[],"content":[{"heading":string,"paragraphs":string[],"points":string[],"table":null or {"headers":string[],"rows":string[][]}}],"faqs":[{"question":string,"answer":string}]}. approved may be true only when the returned corrected content is fully supported by the ledger, coherent, useful and non-repetitive. Keep 5-10 sections, at least 500 useful body words without padding, zero or one factual table and 5-7 valid FAQs.`,
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
          content: `Editorial correction attempt ${correctionAttempt} of 4. Fact ledger: ${JSON.stringify(factResult)}. Current article: ${JSON.stringify(reviewResult)}. Problems to correct: ${JSON.stringify([...shapeErrors, ...(reviewResult.issues ?? [])])}. Return the complete corrected object as {"approved":true,"issues":[],"content":[...],"faqs":[...]}. Preserve only claims supported by the fact ledger. Use 5-10 specific sections, at least 500 useful body words without padding, zero or one table total, no more than 3 bullets in any section, and 5-7 distinct FAQs with question and answer strings. Do not claim approval unless every constraint is satisfied.`,
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
      publisher: "Press Information Bureau, Government of India",
      publishedDate: source.publishedDate,
    })),
  };
  let validationError;
  for (let validationAttempt = 1; validationAttempt <= 5; validationAttempt += 1) {
    try {
      validateArticle(draft, existing, selectedUrls, calculatorSlugs, today);
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
          content: `Deterministic correction attempt ${validationAttempt} of 4. Fact ledger: ${JSON.stringify(factResult)}. Draft content and FAQs: ${JSON.stringify({ content, faqs })}. Validation errors to fix: ${validationError.message}. Return {"content":[{"heading":string,"paragraphs":string[],"points":string[],"table":null or {"headers":string[],"rows":string[][]}}],"faqs":[{"question":string,"answer":string}]}. Correct every listed problem while preserving 5-10 specific sections, at least 500 useful words, no more than 3 bullets per section and 5-7 valid FAQs. Use direct factual wording only. Do not use untranslated quotations, HTML entities, repeated source-attribution boilerplate or claims about unstated purpose, scope, benefit, effect, outcome or future impact.`,
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

  let { problems: qualityProblems } = await runFinalQualityGate(factResult, draft);
  for (let qualityAttempt = 1; qualityProblems.length > 0 && qualityAttempt <= 4; qualityAttempt += 1) {
    const corrected = await nvidiaChat(
      [
        {
          role: "system",
          content: "You are a senior fact-check correction editor. Return valid JSON only. Correct every material issue without adding new claims.",
        },
        {
          role: "user",
          content: `Correction attempt ${qualityAttempt} of 4. Fact ledger: ${JSON.stringify(factResult)}. Current draft: ${JSON.stringify(draft)}. Final-review findings: ${JSON.stringify(qualityProblems)}. Return {"title":string,"seoTitle":string,"seoDescription":string,"description":string,"content":[{"heading":string,"paragraphs":string[],"points":string[],"table":null or {"headers":string[],"rows":string[][]}}],"faqs":[{"question":string,"answer":string}]}. Resolve every finding using only ledger facts. Completely remove each flagged claim everywhere in the title, descriptions, body, bullets, table and FAQs unless the fact ledger explicitly contains that exact material fact. Do not merely rephrase a flagged unsupported claim. Keep 5-10 non-repetitive sections, 450-2,200 useful words, no more than 3 bullets per section, and 5-7 useful FAQs. Remove questions whose answer is mainly that the source does not provide information.`,
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
    validateArticle(draft, existing, selectedUrls, calculatorSlugs, today);
    ({ problems: qualityProblems } = await runFinalQualityGate(factResult, draft));
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
    image: "",
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
          json_array_length(faqs_json) AS faq_count
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
      Number(row.section_count) < 5 ||
      Number(row.section_count) > 12 ||
      Number(row.faq_count) < 5 ||
      Number(row.faq_count) > 8
    ) {
      throw new Error(`Database verification failed for generated article ${article.slug}.`);
    }

    if (process.env.GITHUB_OUTPUT) {
      await fs.appendFile(process.env.GITHUB_OUTPUT, `slug=${article.slug}\n`, "utf8");
    }
  } finally {
    database.close();
  }
  console.log(`Published database article: /blog/${article.slug}`);
}

await main();
