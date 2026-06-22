import { calculators } from "@/src/data/calculators";

type Calculator = (typeof calculators)[number];

export type ChatMatch =
  | {
      type: "calculator";
      calculator: Calculator;
      score: number;
    }
  | {
      type: "faq";
      calculator: Calculator;
      question: string;
      answer: string;
      score: number;
    }
  | null;

export type ScoredCalculator = {
  calculator: Calculator;
  score: number;
};

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const STOP_WORDS = new Set([
  "i",
  "want",
  "to",
  "my",
  "show",
  "find",
  "calculate",
  "tell",
  "me",
  "a",
  "an",
  "the",
  "for",
  "of",
  "is",
  "please",
  "can",
  "you",
  "help",
  "with",
]);

const WEIGHTS = {
  EXACT_PHRASE_NAME: 100,
  EXACT_PHRASE_KEYWORD: 80,
  WORD_NAME: 20,
  WORD_KEYWORD: 15,
  WORD_DESCRIPTION: 2,
  FAQ_WORD_MATCH: 5,
} as const;

const MIN_SCORE_THRESHOLD = 5;

// ---------------------------------------------------------------------------
// Normalization helpers
// ---------------------------------------------------------------------------

/** Lowercase, strip punctuation, collapse whitespace. */
function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text: string): string[] {
  return normalize(text)
    .split(" ")
    .filter((word) => word.length > 0 && !STOP_WORDS.has(word));
}

/** Word-boundary aware "contains word" check (avoids "cat" matching "category"). */
function containsWord(haystack: string, word: string): boolean {
  if (!word) return false;
  return new RegExp(`(?:^|\\s)${escapeRegExp(word)}(?:$|\\s)`).test(haystack);
}

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// ---------------------------------------------------------------------------
// Pre-normalized calculator index (computed once per module load, not per call)
// ---------------------------------------------------------------------------

type IndexedCalculator = {
  calculator: Calculator;
  name: string;
  description: string;
  keywords: string[];
  category: string;
  faqs: { question: string; answer: string; searchText: string }[];
};

let calculatorIndexCache: IndexedCalculator[] | null = null;

function getCalculatorIndex(): IndexedCalculator[] {
  if (calculatorIndexCache) return calculatorIndexCache;

  calculatorIndexCache = calculators.map((calculator) => ({
    calculator,
    name: normalize(calculator.name),
    description: normalize(calculator.description),
    keywords: (calculator.seo?.keywords ?? []).map((keyword) =>
      normalize(keyword),
    ),
    category: normalize(calculator.category),
    faqs: (calculator.faqs ?? []).map((faq) => ({
      question: faq.question,
      answer: faq.answer,
      searchText: normalize(`${faq.question} ${faq.answer}`),
    })),
  }));

  return calculatorIndexCache;
}

// ---------------------------------------------------------------------------
// Core scoring
// ---------------------------------------------------------------------------

/** Score a single indexed calculator against a normalized query + its word tokens. */
function scoreCalculator(
  entry: IndexedCalculator,
  query: string,
  words: string[],
): number {
  let score = 0;

  const slug = normalize(
    entry.calculator.slug,
  );

  // Exact phrase matches
  if (
    query.length > 0 &&
    entry.name.includes(query)
  ) {
    score += 100;
  }

  if (
    query.length > 0 &&
    slug.includes(query)
  ) {
    score += 95;
  }

  if (
    query.length > 0 &&
    entry.category.includes(query)
  ) {
    score += 60;
  }

  for (const keyword of entry.keywords) {
    if (
      query.length > 0 &&
      keyword.includes(query)
    ) {
      score += 80;
    }
  }

  // Word matches
  for (const word of words) {
    if (
      containsWord(
        entry.name,
        word,
      )
    ) {
      score += 30;
    }

    if (
      containsWord(
        slug,
        word,
      )
    ) {
      score += 25;
    }

    if (
      containsWord(
        entry.category,
        word,
      )
    ) {
      score += 15;
    }

    for (const keyword of entry.keywords) {
      if (
        containsWord(
          keyword,
          word,
        )
      ) {
        score += 20;
        break;
      }
    }

    if (
      containsWord(
        entry.description,
        word,
      )
    ) {
      score += 3;
    }

    // FAQ boost
    for (const faq of entry.faqs) {
      if (
        containsWord(
          faq.searchText,
          word,
        )
      ) {
        score += 5;
        break;
      }
    }
  }

  return score;
}
/** Find the best-scoring FAQ within a single calculator. Returns null if no words match. */
function scoreFaqs(
  entry: IndexedCalculator,
  words: string[],
): { question: string; answer: string; score: number } | null {
  if (entry.faqs.length === 0 || words.length === 0) return null;

  let best: { question: string; answer: string; score: number } | null = null;

  for (const faq of entry.faqs) {
    let score = 0;

    for (const word of words) {
      if (containsWord(faq.searchText, word)) {
        score += WEIGHTS.FAQ_WORD_MATCH;
      }
    }

    if (score > 0 && (!best || score > best.score)) {
      best = { question: faq.question, answer: faq.answer, score };
    }
  }

  return best;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Finds the single best match (calculator or FAQ) for a free-text chat message.
 * Returns null if nothing clears the minimum confidence threshold.
 */
export function findBestMatch(message: string): ChatMatch {
  const query = normalize(message);
  const words = tokenize(message);

  if (query.length === 0) return null;

  const index = getCalculatorIndex();

  let bestMatch: ChatMatch = null;
  let bestScore = 0;

  for (const entry of index) {
    // FAQ candidate
    const faqResult = scoreFaqs(entry, words);
    if (faqResult && faqResult.score > bestScore) {
      bestScore = faqResult.score;
      bestMatch = {
        type: "faq",
        calculator: entry.calculator,
        question: faqResult.question,
        answer: faqResult.answer,
        score: faqResult.score,
      };
    }

    // Calculator candidate
    const calcScore = scoreCalculator(entry, query, words);
    if (calcScore > bestScore) {
      bestScore = calcScore;
      bestMatch = {
        type: "calculator",
        calculator: entry.calculator,
        score: calcScore,
      };
    }
  }

  if (!bestMatch || bestScore < MIN_SCORE_THRESHOLD) {
    return null;
  }

  return bestMatch;
}

/**
 * Returns up to 6 calculators belonging to the same category as the queried
 * category name (matched by exact name OR fuzzy word overlap).
 */
export function getCategoryCalculators(
  message: string,
  limit = 6,
): Calculator[] | null {
  const query = normalize(message);
  if (query.length === 0) return null;

  const index = getCalculatorIndex();

  // 1. Try exact category match first.
  let matchedCategory: string | null = null;
  for (const entry of index) {
    if (entry.category === query) {
      matchedCategory = entry.category;
      break;
    }
  }

  // 2. Fall back to word-overlap match if no exact hit.
  if (!matchedCategory) {
    const words = tokenize(message);
    for (const entry of index) {
      if (words.some((word) => containsWord(entry.category, word))) {
        matchedCategory = entry.category;
        break;
      }
    }
  }

  if (!matchedCategory) return null;

  return index
    .filter((entry) => entry.category === matchedCategory)
    .slice(0, limit)
    .map((entry) => entry.calculator);
}

/**
 * Returns the top N calculators ranked by relevance score (descending),
 * with ties broken by calculator name for stable, deterministic ordering.
 */
export function findTopMatches(
  message: string,
  limit = 3,
): ScoredCalculator[] {
  const query = normalize(message);
  const words = tokenize(message);

  if (query.length === 0) return [];

  const index = getCalculatorIndex();

  return index
    .map((entry) => ({
      calculator: entry.calculator,
      score: scoreCalculator(entry, query, words),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.calculator.name.localeCompare(b.calculator.name);
    })
    .slice(0, limit);
}

/**
 * Clears the memoized calculator index. Call this only if `calculators` data
 * can change at runtime (e.g. in tests or hot-reload scenarios).
 */
export function clearCalculatorIndexCache(): void {
  calculatorIndexCache = null;
}