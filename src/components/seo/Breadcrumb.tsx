import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbProps = {
  category: string;
  currentPage: string;
};

export default function Breadcrumb({
  category,
  currentPage,
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className="mb-8 rounded-xl bg-blue-50 px-4 py-3"
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        <li>
          <Link
            href="/"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            Home
          </Link>
        </li>

        <li>
          <ChevronRight size={14} className="text-slate-400" />
        </li>

        <li>
          <Link
            href="/blog"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            {category}
          </Link>
        </li>

        <li>
          <ChevronRight size={14} className="text-slate-400" />
        </li>

        <li>
          <span className="font-semibold text-blue-700">
            {currentPage}
          </span>
        </li>
      </ol>
    </nav>
  );
}