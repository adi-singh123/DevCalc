// lib/calculator-stats.ts
//
import { getCalculators } from "@/src/lib/calculators/repository";

export interface CategoryCount {
  category: string;
  count: number;
}

/** Total number of live calculators. Use this anywhere you currently show "100+". */
export async function getTotalCalculatorCount(): Promise<number> {
  const calculators = await getCalculators();
  return calculators.length;
}

/** Count of calculators per category, e.g. for category cards or nav dropdown badges. */
export async function getCategoryCounts(): Promise<CategoryCount[]> {
  const calculators = await getCalculators();
  const counts = new Map<string, number>();
  for (const calc of calculators) {
    counts.set(calc.category, (counts.get(calc.category) ?? 0) + 1);
  }
  return Array.from(counts, ([category, count]) => ({ category, count })).sort(
    (a, b) => b.count - a.count
  );
}

/** Count for a single category, e.g. on that category's landing page header. */
export async function getCategoryCount(category: string): Promise<number> {
  const calculators = await getCalculators();
  return calculators.filter((c) => c.category === category).length;
}

/** Total number of distinct categories, e.g. for the homepage stats strip. */
export async function getTotalCategoryCount(): Promise<number> {
  const calculators = await getCalculators();
  return new Set(calculators.map((c) => c.category)).size;
}
