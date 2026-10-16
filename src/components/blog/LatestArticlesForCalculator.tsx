import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";

import { getPublishedBlogSummaries } from "@/src/lib/blogs/repository";
import type { BlogSummary } from "@/src/types/blog";

type Props = {
  calculatorSlug: string;
  calculatorCategory: string;
  limit?: number;
};

function formatDate(value: string): string {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(date);
}

export default async function LatestArticlesForCalculator({
  calculatorSlug,
  calculatorCategory,
  limit = 3,
}: Props) {
  let blogs: BlogSummary[];
  try {
    blogs = await getPublishedBlogSummaries();
  } catch (error) {
    console.error("Could not load latest calculator articles", error);
    return null;
  }

  const normalizedCategory = calculatorCategory.trim().toLowerCase();
  const ranked = [...blogs].sort((left, right) => {
      const leftRelated = left.relatedCalculatorSlugs?.includes(calculatorSlug) ? 2 : 0;
      const rightRelated = right.relatedCalculatorSlugs?.includes(calculatorSlug) ? 2 : 0;
      const leftCategory = left.category.trim().toLowerCase() === normalizedCategory ? 1 : 0;
      const rightCategory = right.category.trim().toLowerCase() === normalizedCategory ? 1 : 0;
      const relevanceDifference = rightRelated + rightCategory - (leftRelated + leftCategory);
      if (relevanceDifference !== 0) return relevanceDifference;
      return Date.parse(right.publishedDate) - Date.parse(left.publishedDate);
  });
  const articles = ranked.slice(0, limit);

  if (articles.length === 0) return null;

  return (
      <section aria-labelledby="latest-articles-heading" className="mt-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
              Learn more
            </p>
            <h2 id="latest-articles-heading" className="mt-2 font-serif text-2xl font-semibold text-[#26364a] dark:text-white sm:text-3xl">
              Latest helpful articles
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-600 dark:text-slate-400">
              Recent guides and verified updates selected for this calculator.
            </p>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200">
            View all articles <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className="group relative flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-800">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
                {article.category}
              </p>
              <h3 className="mt-3 text-base font-bold leading-6 text-slate-900 group-hover:text-blue-800 dark:text-white dark:group-hover:text-blue-300">
                <Link href={`/blog/${article.slug}`} className="after:absolute after:inset-0">
                  {article.title}
                </Link>
              </h3>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-stone-600 dark:text-slate-400">
                {article.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-5 text-xs text-stone-500 dark:text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" />
                  <time dateTime={article.publishedDate}>{formatDate(article.publishedDate)}</time>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 className="h-3.5 w-3.5" /> {article.readingTime}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
  );
}
