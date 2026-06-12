import Link from "next/link";

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
      className="mb-6 text-sm text-slate-600"
    >
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>/</li>

        <li>{category}</li>

        <li>/</li>

        <li className="font-medium text-slate-900">
          {currentPage}
        </li>
      </ol>
    </nav>
  );
}