import { calculators } from "@/src/data/calculators";

type ComparisonInput = {
  currentSlug: string;
  category: string;
  compareWith?: string[];
  limit?: number;
};

export function getComparisonCalculators({
  currentSlug,
  category,
  compareWith = [],
  limit = 3,
}: ComparisonInput) {
  const selected = [] as typeof calculators;
  const selectedSlugs = new Set([currentSlug]);

  for (const slug of compareWith) {
    const calculator = calculators.find((item) => item.slug === slug);
    if (!calculator || selectedSlugs.has(calculator.slug)) continue;
    selected.push(calculator);
    selectedSlugs.add(calculator.slug);
    if (selected.length === limit) return selected;
  }

  for (const calculator of calculators) {
    if (calculator.category !== category || selectedSlugs.has(calculator.slug)) continue;
    selected.push(calculator);
    selectedSlugs.add(calculator.slug);
    if (selected.length === limit) break;
  }

  return selected;
}
