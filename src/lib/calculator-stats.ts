// lib/calculator-stats.ts
//
// Adjust this import to wherever your calculator list actually lives,
// e.g. "@/data/calculators" or "@/content/calculators.json".
// Expected shape per item: { slug: string; title: string; category: string; ... }
import { calculators } from "@/src/data/calculators";

export interface CategoryCount {
  category: string;
  count: number;
}

/** Total number of live calculators. Use this anywhere you currently show "100+". */
export function getTotalCalculatorCount(): number {
  return calculators.length;
}

/** Count of calculators per category, e.g. for category cards or nav dropdown badges. */
export function getCategoryCounts(): CategoryCount[] {
  const counts = new Map<string, number>();
  for (const calc of calculators) {
    counts.set(calc.category, (counts.get(calc.category) ?? 0) + 1);
  }
  return Array.from(counts, ([category, count]) => ({ category, count })).sort(
    (a, b) => b.count - a.count
  );
}

/** Count for a single category, e.g. on that category's landing page header. */
export function getCategoryCount(category: string): number {
  return calculators.filter((c) => c.category === category).length;
}

/** Total number of distinct categories, e.g. for the homepage stats strip. */
export function getTotalCategoryCount(): number {
  return new Set(calculators.map((c) => c.category)).size;
}