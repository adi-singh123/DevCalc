import Link from "next/link";
import { CalculatorIcon } from "./categoryMeta";

type Props = {
  calculator: {
    slug: string;
    name: string;
    description: string;
    category: string;
  };
};

export default function CalculatorCard({ calculator }: Props) {
  return (
    <Link
      href={`/${calculator.slug}`}
      prefetch
      aria-label={`Open ${calculator.name}`}
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
          <CalculatorIcon
            slug={calculator.slug}
            category={calculator.category}
            size={22}
            strokeWidth={1.75}
          />
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

    </Link>
  );
}
