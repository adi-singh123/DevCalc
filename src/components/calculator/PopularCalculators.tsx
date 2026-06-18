import Link from "next/link";
import { calculators } from "@/src/data/calculators";

type PopularCalculatorsProps = {
  currentSlug: string;
};

export default function PopularCalculators({
  currentSlug,
}: PopularCalculatorsProps) {
const filteredCalculators = calculators.filter(
  (calculator) =>
    calculator.isPopular &&
    calculator.slug !== currentSlug
);

const currentIndex = filteredCalculators.findIndex(
  (item) => item.slug === currentSlug
);

const popularCalculators = [
  ...filteredCalculators.slice(currentIndex + 1),
  ...filteredCalculators.slice(0, currentIndex + 1),
].slice(0, 8);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
      <div className="border-b border-slate-200 p-4 dark:border-slate-700">
        <h3 className="font-semibold text-slate-900 dark:text-white">
          Popular Calculators
        </h3>
      </div>

      <div className="divide-y divide-slate-200 dark:divide-slate-700">
        {popularCalculators.map((calculator) => (
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