import type { Metadata } from "next";
import Link from "next/link";
import CalculatorCard from "@/src/components/calculator/CalculatorCard";
import { getCalculatorPage, getPopularCalculators } from "@/src/lib/calculators/repository";
import { siteConfig } from "@/src/config/site";
import StaticPageSeo from "@/src/components/seo/StaticPageSeo";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type Props = { searchParams: Promise<{ page?: string; q?: string }> };

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const page = Math.max(Number.parseInt(params.page ?? "1", 10) || 1, 1);
  const query = params.q?.trim() ?? "";
  const canonical = page > 1 ? `${siteConfig.url}/calculators?page=${page}` : `${siteConfig.url}/calculators`;
  return {
    title: query ? `Search Calculators for ${query}` : `All Calculators${page > 1 ? ` - Page ${page}` : ""}`,
    authors: [{ name: "Aditya Singh" }],
    publisher: "DevCalc",
    alternates: { canonical },
    description: "Browse free online calculators for finance, health, education, utility, math, and everyday calculations. Fast, accurate, mobile-friendly, and easy to use.",
    robots: query ? { index: false, follow: true } : { index: true, follow: true },
  };
}

export default async function CalculatorsPage({ searchParams }: Props) {
  const params = await searchParams;
  const requestedPage = Number.parseInt(params.page ?? "1", 10);
  const query = params.q?.trim() ?? "";
  const [{ calculators, page, total, totalPages }, popularCalculators] = await Promise.all([
    getCalculatorPage({ page: requestedPage, pageSize: 18, query }),
    query || requestedPage > 1 ? Promise.resolve([]) : getPopularCalculators(6),
  ]);

  const pageHref = (targetPage: number) => {
    const search = new URLSearchParams();
    if (query) search.set("q", query);
    if (targetPage > 1) search.set("page", String(targetPage));
    return search.size ? `/calculators?${search}` : "/calculators";
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <StaticPageSeo name="All Calculators" path="/calculators" type="CollectionPage" description="Browse DevCalc calculators by topic, including finance, health, education, vehicle, construction, math, and everyday tools." />

      <section className="text-center">
        <h1 className="text-4xl font-bold md:text-5xl">All Calculators</h1>
        <p className="mx-auto mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
          Explore free online calculators with instant results, documented formulas, FAQs, examples, and step-by-step explanations.
        </p>
        <p className="mt-4 text-sm text-slate-500">{total} calculator{total !== 1 ? "s" : ""} available</p>

        <form action="/calculators" method="get" className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
          <label htmlFor="calculator-search" className="sr-only">Search calculators</label>
          <input id="calculator-search" name="q" type="search" defaultValue={query} placeholder="Search calculators..." className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#1f3a5c] dark:border-slate-600 dark:bg-slate-800 dark:text-white" />
          <button type="submit" className="rounded-xl bg-[#1f3a5c] px-6 py-3 font-semibold text-white hover:bg-[#162a43]">Search</button>
        </form>
      </section>

      {popularCalculators.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-2 text-2xl font-bold">Popular Calculators</h2>
          <p className="mb-6 text-slate-600 dark:text-slate-300">Most frequently used calculators by our users.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularCalculators.map((calculator) => <CalculatorCard key={calculator.slug} calculator={calculator} />)}
          </div>
        </section>
      )}

      <section className="mt-16">
        <h2 className="mb-2 text-2xl font-bold">{query ? "Search Results" : "Browse Calculators"}</h2>
        <p className="mb-6 text-slate-600 dark:text-slate-300">{query ? `Results for “${query}”.` : `Page ${page} of ${totalPages}`}</p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calculator) => (
            <CalculatorCard key={calculator.slug} calculator={calculator} />
          ))}
        </div>

        {calculators.length === 0 && (
          <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center dark:border-slate-700 dark:bg-slate-900">
            <p className="font-semibold">No calculators matched your search.</p>
            <Link href="/calculators" className="mt-3 inline-block text-blue-700 underline dark:text-blue-400">View all calculators</Link>
          </div>
        )}

        {totalPages > 1 && (
          <nav aria-label="Calculator pages" className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {page > 1 && <Link href={pageHref(page - 1)} rel="prev" className="rounded-lg border px-4 py-2 font-semibold hover:bg-stone-100 dark:border-slate-700 dark:hover:bg-slate-800">Previous</Link>}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
              <Link key={pageNumber} href={pageHref(pageNumber)} aria-current={pageNumber === page ? "page" : undefined} className={pageNumber === page ? "rounded-lg bg-[#1f3a5c] px-4 py-2 font-semibold text-white" : "rounded-lg border px-4 py-2 font-semibold hover:bg-stone-100 dark:border-slate-700 dark:hover:bg-slate-800"}>{pageNumber}</Link>
            ))}
            {page < totalPages && <Link href={pageHref(page + 1)} rel="next" className="rounded-lg border px-4 py-2 font-semibold hover:bg-stone-100 dark:border-slate-700 dark:hover:bg-slate-800">Next</Link>}
          </nav>
        )}
      </section>
    </main>
  );
}
