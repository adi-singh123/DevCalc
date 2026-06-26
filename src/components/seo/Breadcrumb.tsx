import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({
  items,
}: BreadcrumbProps) {

  return (
    <>


      <nav
        aria-label="Breadcrumb"
        className="
          mb-8
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          px-5
          py-4
          mt-2
          dark:border-slate-700
          dark:bg-slate-900
        "
      >
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          <li>
            <Link
              href="/"
              className="
                flex
                items-center
                gap-2
                font-medium
                text-slate-600
                transition
                hover:text-blue-600
                dark:text-slate-400
                dark:hover:text-blue-400
              "
            >
              <Home size={15} />
              Home
            </Link>
          </li>

          {items.map(
            (
              item,
              index,
            ) => (
              <li
                key={`${item.label}-${index}`}
                className="flex items-center gap-2"
              >
                <ChevronRight
                  size={15}
                  className="text-slate-400"
                />

                {item.href &&
                index !==
                  items.length -
                    1 ? (
                  <Link
                    href={
                      item.href
                    }
                    className="
                      font-medium
                      text-slate-600
                      transition
                      hover:text-blue-600
                      dark:text-slate-400
                      dark:hover:text-blue-400
                    "
                  >
                    {
                      item.label
                    }
                  </Link>
                ) : (
                  <span
                    className="
                      rounded-full
                      bg-blue-100
                      px-3
                      py-1
                      font-semibold
                      text-blue-700
                      dark:bg-blue-500/10
                      dark:text-blue-400
                    "
                  >
                    {
                      item.label
                    }
                  </span>
                )}
              </li>
            ),
          )}
        </ol>
      </nav>
    </>
  );
}