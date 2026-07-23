import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCalcIcon } from "./categoryMeta";

type Props = {
  calculator: {
    slug: string;
    name: string;
    description: string;
    category: string;
  };
};

export default function CalculatorCard({ calculator }: Props) {
  const Icon = getCalcIcon(calculator.slug, calculator.category);

  return (
    <Link
      href={`/${calculator.slug}`}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-stone-200
        bg-[#faf7f0]
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#1f3a5c]/50
        hover:shadow-md
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* Classic top accent bar — reveals on hover */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[#1f3a5c] transition-transform duration-300 group-hover:scale-x-100"
      />

      {/* Icon + category label */}
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1f3a5c]/15 bg-white text-[#1f3a5c] shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-blue-400">
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-stone-500 dark:text-slate-400">
          {calculator.category}
        </span>
      </div>

      <h3 className="mt-5 font-serif text-xl font-semibold tracking-tight text-[#26364a] dark:text-white">
        {calculator.name}
      </h3>

      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-stone-600 dark:text-slate-400">
        {calculator.description}
      </p>

      {/* Divider + CTA */}
      <div className="mt-5 border-t border-stone-200 pt-4 dark:border-slate-800">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1f3a5c] dark:text-blue-400">
          Calculate Now
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
