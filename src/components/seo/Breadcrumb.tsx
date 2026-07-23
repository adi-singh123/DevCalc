import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 mt-2 flex items-center gap-1 rounded-xl border border-stone-200 bg-[#faf7f0] px-4 py-3 dark:border-slate-700 dark:bg-slate-900"
    >
      <ol className="flex flex-wrap items-center gap-x-1 gap-y-1 text-sm">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-lg px-2 py-1 font-medium text-stone-600 transition hover:bg-[#e9e2d6] hover:text-[#1f3a5c] dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-400"
          >
            <Home size={15} />
            Home
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-1"
            >
              <ChevronRight
                size={15}
                className="text-stone-400 dark:text-slate-600"
              />

              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="rounded-lg px-2 py-1 font-medium text-stone-600 transition hover:bg-[#e9e2d6] hover:text-[#1f3a5c] dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current="page"
                  className="rounded-lg px-2 py-1 font-semibold text-[#1f3a5c] dark:text-blue-400"
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
