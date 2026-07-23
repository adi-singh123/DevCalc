import Link from "next/link";
import { calculators } from "@/src/data/calculators";

type CalculatorListByCategoryProps = {
  title: string;
  category: string;
  currentSlug?: string;
  /** Optional hard cap. Leave unset to show every calculator in the category
   *  inside a scrollable panel instead of truncating the list. */
  limit?: number;
  /** Max height (px) of the scrollable list before a scrollbar appears. */
  maxHeightPx?: number;
};

export default function CalculatorListByCategory({
  title,
  category,
  currentSlug,
  limit,
  maxHeightPx = 380,
}: CalculatorListByCategoryProps) {
  const allFiltered = calculators.filter(
    (calculator) =>
      calculator.category === category && calculator.slug !== currentSlug
  );

  const filteredCalculators = limit ? allFiltered.slice(0, limit) : allFiltered;

  if (filteredCalculators.length === 0) {
    return null;
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-700 dark:bg-slate-900">
      <div className="border-b border-stone-200 bg-[#faf7f0] p-4 dark:border-slate-700 dark:bg-slate-900">
        <h3 className="font-serif text-lg font-semibold text-[#26364a] dark:text-white">
          {title}
        </h3>
      </div>

      <div
        className="thin-scrollbar divide-y divide-stone-100 overflow-y-auto dark:divide-slate-700"
        style={{ maxHeight: maxHeightPx }}
      >
        {filteredCalculators.map((calculator) => (
          <Link
            key={calculator.slug}
            href={`/${calculator.slug}`}
            className="block p-4 text-sm font-medium text-stone-700 transition-colors hover:bg-[#faf7f0] hover:text-[#1f3a5c] dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            {calculator.name}
          </Link>
        ))}
      </div>
    </div>
  );
}