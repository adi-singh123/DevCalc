// lib/calculator-stats.ts
//
import { getCalculatorCategoryCounts } from "@/src/lib/calculators/repository";

export interface CategoryCount {
  category: string;
  count: number;
}

/** Total number of live calculators. Use this anywhere you currently show "100+". */
export async function getTotalCalculatorCount(): Promise<number> {
  const counts = await getCalculatorCategoryCounts();
  return [...counts.values()].reduce((total, count) => total + count, 0);
}

/** Count of calculators per category, e.g. for category cards or nav dropdown badges. */
export async function getCategoryCounts(): Promise<CategoryCount[]> {
  const counts = await getCalculatorCategoryCounts();
  return Array.from(counts, ([category, count]) => ({ category, count })).sort(
    (a, b) => b.count - a.count
  );
}

/** Count for a single category, e.g. on that category's landing page header. */
export async function getCategoryCount(category: string): Promise<number> {
  const counts = await getCalculatorCategoryCounts();
  return counts.get(category) ?? 0;
}

/** Total number of distinct categories, e.g. for the homepage stats strip. */
export async function getTotalCategoryCount(): Promise<number> {
  const counts = await getCalculatorCategoryCounts();
  return counts.size;
}
