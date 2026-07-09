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
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
      <div className="border-b border-slate-200 p-4 dark:border-slate-700">
        <h3 className="font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>

      <div
        className="thin-scrollbar divide-y divide-slate-200 overflow-y-auto dark:divide-slate-700"
        style={{ maxHeight: maxHeightPx }}
      >
        {filteredCalculators.map((calculator) => (
          <Link
            key={calculator.slug}
            href={`/${calculator.slug}`}
            className="block p-4 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-primary dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            {calculator.name}
          </Link>
        ))}
      </div>
    </div>
  );
}