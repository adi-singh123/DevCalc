import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  calculator: {
    slug: string;
    name: string;
    description: string;
    category: string;
  };
};

export default function CalculatorCard({
  calculator,
}: Props) {
  return (
    <Link
      href={`/${calculator.slug}`}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500
        hover:shadow-xl
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* Gradient Hover Effect */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-blue-500/0
          to-indigo-500/0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          group-hover:from-blue-500/5
          group-hover:to-indigo-500/10
        "
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <span
            className="
              rounded-full
              bg-blue-50
              px-3
              py-1
              text-xs
              font-semibold
              text-blue-600
              dark:bg-blue-500/10
              dark:text-blue-400
            "
          >
            {calculator.category}
          </span>

          <ArrowUpRight
            size={18}
            className="
              text-slate-400
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
              group-hover:text-blue-500
            "
          />
        </div>

        <h3
          className="
            mt-4
            line-clamp-2
            text-xl
            font-bold
            text-slate-900
            dark:text-white
          "
        >
          {calculator.name}
        </h3>

        <p
          className="
            mt-3
            line-clamp-3
            text-sm
            leading-6
            text-slate-600
            dark:text-slate-400
          "
        >
          {calculator.description}
        </p>

        <div
          className="
            mt-5
            flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-blue-600
            dark:text-blue-400
          "
        >
          Open Calculator
          <ArrowUpRight size={16} />
        </div>
      </div>
    </Link>
  );
}