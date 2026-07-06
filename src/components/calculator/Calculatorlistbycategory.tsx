import Link from "next/link";
import { calculators } from "@/src/data/calculators";

type CalculatorListByCategoryProps = {
  title: string;
  category: string;
  currentSlug?: string;
  limit?: number;
};

export default function CalculatorListByCategory({
  title,
  category,
  currentSlug,
  limit = 6,
}: CalculatorListByCategoryProps) {
  const filteredCalculators = calculators
    .filter(
      (calculator) =>
        calculator.category === category &&
        calculator.slug !== currentSlug
    )
    .slice(0, limit);

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

      <div className="divide-y divide-slate-200 dark:divide-slate-700">
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