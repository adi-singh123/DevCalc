import { config as loadEnv } from "dotenv";
import { promises as fs } from "node:fs";
import path from "node:path";

loadEnv({ path: path.join(process.cwd(), ".env.local"), quiet: true });

const NVIDIA_CHAT_URL = "https://integrate.api.nvidia.com/v1/chat/completions";
const PIB_RSS_URL = "https://www.pib.gov.in/RssMain.aspx?ModId=6&Lang=1&Regid=3";
const OUTPUT_FILE = path.join(
  process.cwd(),
  "src/data/blogs/generated/government-blogs.json",
);
const apiKey = process.env.NVIDIA_API_KEY || process.env.OPENAI_API_KEY;
const contentModel =
  process.env.NVIDIA_CONTENT_MODEL || "nvidia/nemotron-3.5-lightning-30b-a3b";

const officialDomains = [
  "pib.gov.in",
  "egazette.nic.in",
  "india.gov.in",
  "incometax.gov.in",
  "cbic.gov.in",
  "gst.gov.in",
  "labour.gov.in",
  "rbi.org.in",
  "sebi.gov.in",
  "uidai.gov.in",
  "epfindia.gov.in",
  "parivahan.gov.in",
  "indianrailways.gov.in",
  "irctc.co.in",
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
    signal: AbortSignal.timeout(20_000),
  });
  if (!response.ok) throw new Error(`Official source fetch failed (${response.status}): ${url}`);
  return response.text();
}

async function loadOfficialSourceCorpus() {
  const rss = await fetchText(PIB_RSS_URL);
  const parsedItems = [...rss.matchAll(/<item>([\s\S]*?)<\/item>/gi)]
    .map((match) => ({
      title: xmlTag(match[1], "title"),
      url: xmlTag(match[1], "link"),
      publishedDate: xmlTag(match[1], "pubDate"),
      summary: xmlTag(match[1], "description"),
    }))
    .filter((item) => item.title && isOfficialUrl(item.url));
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

async function nvidiaChat(messages, maxTokens = 16_000) {
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
          model: contentModel,
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
    .flatMap((section) => [section.heading, ...section.paragraphs, ...section.points])
    .join(" ");
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function fitSeoTitle(value, fallback) {
  let title = String(value || fallback || "Government Update India").trim();
  if (title.length < 35) title = `${title}: Official India Update`;
  if (title.length > 65) {
    const shortened = title.slice(0, 62).replace(/\s+\S*$/, "").trim();
    title = `${shortened || title.slice(0, 62).trim()}...`;
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
    const shortened = description.slice(0, 162).replace(/\s+\S*$/, "").replace(/[,:;-]+$/, "").trim();
    description = `${shortened || description.slice(0, 162).trim()}...`;
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

function validateArticle(article, existing, availableUrls, validCalculatorSlugs, today) {
  const errors = [];
  if (!article || typeof article !== "object") throw new Error("Generated article is not an object.");
  for (const field of ["slug", "title", "seoTitle", "seoDescription", "description", "category", "effectiveDate", "imageAlt"]) {
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
  if (!Array.isArray(article.content) || article.content.length < 14) errors.push("at least 14 content sections are required");
  if (!Array.isArray(article.faqs) || article.faqs.length < 5) errors.push("at least 5 FAQs are required");
  if (!Array.isArray(article.sources)) errors.push("sources must be an array");
  if (errors.length) throw new Error(`Generated article rejected:\n- ${errors.join("\n- ")}`);
  if (wordCount(article) < 3000) errors.push("main article body must contain at least 3,000 words");
  if (!article.content.some((section) => section.table)) errors.push("at least one useful table is required");
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
  const existing = JSON.parse(await fs.readFile(OUTPUT_FILE, "utf8"));
  const calculatorSlugs = await findCalculatorSlugs();
  const existingSummary = existing.map(({ slug, title }) => ({ slug, title }));
  const sourceCorpus = await loadOfficialSourceCorpus();

  const numberedCorpus = sourceCorpus.map((source, index) => ({
    sourceId: index + 1,
    ...source,
  }));
  const selection = await nvidiaChat(
    [
      {
        role: "system",
        content: "You are a cautious Indian public-information editor. Return JSON only and never use facts outside the supplied official-source corpus.",
      },
      {
        role: "user",
        content: `Today is ${today} in India. Select one substantial, useful and genuinely current government rule, scheme change, compliance deadline, tax change, consumer update or citizen-service update from exactly one primary official source record in this corpus. Reject greetings, speeches without a concrete public update, ceremonies, awards, political promotion and topics too thin for a useful guide. Return {"publishable":boolean,"reason":string,"topic":string,"sourceIds":number[]} with exactly one source ID. Existing topics to avoid: ${JSON.stringify(existingSummary)}. Official corpus: ${JSON.stringify(numberedCorpus)}`,
      },
    ],
    2_000,
  );

  const rawSourceIds = Array.isArray(selection.sourceIds)
    ? selection.sourceIds
    : selection.sourceId !== undefined
      ? [selection.sourceId]
      : [];
  const selectedIds = [...new Set(rawSourceIds
    .map((id) => Number(id))
    .filter((id) => Number.isInteger(id) && id >= 1 && id <= sourceCorpus.length))];
  const isPublishable = selection.publishable === true
    || String(selection.publishable).toLowerCase() === "true";
  if (!isPublishable || selectedIds.length !== 1) {
    throw new Error(`No safely publishable topic found: ${selection.reason || "insufficient related official sources"}`);
  }
  const selectedSources = selectedIds.map((id) => sourceCorpus[id - 1]);
  const selectedUrls = selectedSources.map((source) => source.url);
  const sectionHeadings = [
    "Official Update at a Glance",
    "Why This Development Matters",
    "Who May Be Affected",
    "Important Dates and Current Status",
    "Services, Measures or Actions Announced",
    "How Individuals Can Respond or Participate",
    "What Families and Caregivers Should Know",
    "What Employers and Institutions Should Know",
    "Access Across States, Regions and Communities",
    "Eligibility, Documents and Costs Confirmed by Sources",
    "What the Official Sources Do Not Announce",
    "Practical Reader Checklist",
    "Common Misunderstandings to Avoid",
    "Questions to Resolve Before Taking Action",
    "How to Track Corrections and Follow-up Notices",
    "Where and How to Verify Future Updates",
  ];

  const factualBoundary = `Selected topic: ${selection.topic}. Today: ${today}. Use only these official sources and never add facts absent from them: ${JSON.stringify(selectedSources)}`;
  const generatedMetadata = await nvidiaChat(
    [
      {
        role: "system",
        content: "You plan evidence-bound, people-first DevCalc guides. Return valid JSON only and never add facts outside supplied official sources.",
      },
      {
        role: "user",
        content: `${factualBoundary}\nCreate article metadata. Return keys slug, title, seoTitle, seoDescription, description, category, keywords, effectiveDate, imageAlt, relatedCalculatorSlugs. SEO title must be 35-65 characters and description 120-165 characters. Slug must be lowercase hyphenated. imageAlt should describe DevCalc's neutral site artwork in the context of this guide. Only use calculator slugs from ${JSON.stringify(calculatorSlugs)}. Avoid existing topics ${JSON.stringify(existingSummary)}.`,
      },
    ],
    3_000,
  );
  const metadata = normalizeMetadata(generatedMetadata, selection);

  const content = [];
  for (let start = 0; start < sectionHeadings.length; start += 3) {
    const headings = sectionHeadings.slice(start, start + 3);
    const parts = await Promise.all(
      headings.map((heading, offset) =>
        nvidiaChat(
          [
            {
              role: "system",
              content: "You write one source-bound public-information section. Return valid JSON only, remain concise, and never invent details.",
            },
            {
              role: "user",
              content: `${factualBoundary}\nWrite only the section titled ${JSON.stringify(heading)}. Return {"section":{"heading":string,"paragraphs":string[],"points":string[],"table":null or {"headers":string[],"rows":string[][]}}}. The complete section, including bullet points, must be 230-260 useful words and no longer. Use 2-3 concise paragraphs and no more than 3 short points, without repetition or filler. Explain confirmed facts, affected readers, practical implications, limitations and source-based cautions appropriate to this heading. ${start + offset === 0 ? "Include one small factual table supported directly by the sources." : "Use table=null."} Never give individualized legal, tax, medical or investment advice.`,
            },
          ],
          2_200,
        ),
      ),
    );
    for (const [offset, part] of parts.entries()) {
      const generatedSection = part.section ?? part.sections?.[0] ?? part;
      if (!generatedSection || !Array.isArray(generatedSection.paragraphs)) {
        throw new Error(`NVIDIA returned an invalid section for ${headings[offset]}.`);
      }
      content.push({
        ...generatedSection,
        heading: headings[offset],
        points: Array.isArray(generatedSection.points) ? generatedSection.points : [],
        table: generatedSection.table ?? null,
      });
    }
  }

  const faqResult = await nvidiaChat(
    [
      {
        role: "system",
        content: "You write concise, source-bound FAQs. Return valid JSON only.",
      },
      {
        role: "user",
        content: `${factualBoundary}\nReturn {"faqs":[{"question":string,"answer":string}]} with exactly 6 detailed FAQs. Answers must remain within the official evidence, identify uncertainty clearly and avoid individualized advice.`,
      },
    ],
    3_000,
  );

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
  const generatedFaqs = Array.isArray(faqResult.faqs) ? faqResult.faqs : [];
  const faqs = [...generatedFaqs];
  for (const fallback of fallbackFaqs) {
    if (faqs.length >= 6) break;
    if (!faqs.some((faq) => faq?.question === fallback.question)) faqs.push(fallback);
  }

  if (!content.some((section) => section.table)) {
    content[0].table = {
      headers: ["Official source", "Publisher", "Published"],
      rows: selectedSources.map((source) => [
        source.title,
        "Press Information Bureau, Government of India",
        source.publishedDate || "See official release",
      ]),
    };
  }

  const draft = {
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
  validateArticle(draft, existing, selectedUrls, calculatorSlugs, today);

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
    image: "/icon.png",
    imageAlt: draft.imageAlt,
    keywords: draft.keywords,
    lastVerified: draft.lastVerified,
    effectiveDate: draft.effectiveDate,
    automationDisclosure: "NVIDIA AI assisted the first draft using the linked official source material. A DevCalc editor must verify every claim before merging and publication. Rules can change; use the primary sources for current legal wording.",
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

  await fs.writeFile(OUTPUT_FILE, `${JSON.stringify([article, ...existing], null, 2)}\n`, "utf8");
  console.log(`Created review draft: /blog/${article.slug}`);
}

await main();
