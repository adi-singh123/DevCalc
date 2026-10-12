import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";

import ResponsiveContentAd from "@/src/components/ads/ResponsiveContentAd";
import BlogCard from "@/src/components/blog/BlogCard";
import Breadcrumb from "@/src/components/seo/Breadcrumb";
import BreadcrumbSchema from "@/src/components/seo/BreadcrumbSchema";
import { getPublishedBlogs } from "@/src/lib/blogs/repository";
import { formatBlogDate } from "@/src/utils/formatBlogDate";

export const metadata: Metadata = {
  title: "DevCalc Blog: Calculators, Finance, Health and Government Guides",
  description: "Read practical DevCalc guides about calculators, finance, health, education, vehicles, utility tools and verified Indian government updates.",
  alternates: { canonical: "https://www.devcalc.in/blog" },
};

export const revalidate = 60;

type Props = {
  searchParams: Promise<{ category?: string; q?: string }>;
};

const preferredCategories = ["Finance", "Health", "Education", "Vehicle", "Utility"];

export default async function BlogPage({ searchParams }: Props) {
  const [blogs, parameters] = await Promise.all([getPublishedBlogs(), searchParams]);
  const requestedCategory = parameters.category?.trim() || "All";
  const searchTerm = parameters.q?.trim() || "";
  const normalizedSearch = searchTerm.toLowerCase();
  const availableCategories = Array.from(new Set(blogs.map((blog) => blog.category))).sort();
  const categories = [
    "All",
    ...preferredCategories.filter((category) => availableCategories.includes(category)),
    ...availableCategories.filter((category) => !preferredCategories.includes(category)),
  ];
  const selectedCategory = categories.includes(requestedCategory) ? requestedCategory : "All";
  const featuredBlog = blogs[0];
  const filteredBlogs = blogs.filter((blog) =>
    (selectedCategory === "All" || blog.category === selectedCategory) &&
    (!normalizedSearch || `${blog.title} ${blog.description}`.toLowerCase().includes(normalizedSearch)),
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }]} />
      <Breadcrumb items={[{ label: "Blog" }]} />

      <section className="mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-[#1f3a5c] to-[#2b4a6f] px-8 py-16 text-white">
        <div className="max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">DevCalc Journal</span>
          <h1 className="mt-3 font-serif text-4xl font-semibold md:text-6xl">The DevCalc Blog</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">Learn formulas, finance, health metrics, education concepts, vehicle calculations and current public updates through clear guides, examples and practical explanations.</p>
          <div className="mt-8 flex flex-wrap gap-3">{preferredCategories.map((tag) => <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">{tag}</span>)}</div>
        </div>
      </section>

      <form action="/blog" method="get" className="mb-10 flex flex-col gap-3 sm:flex-row">
        {selectedCategory !== "All" && <input type="hidden" name="category" value={selectedCategory} />}
        <label htmlFor="blog-search" className="sr-only">Search articles</label>
        <input id="blog-search" name="q" type="search" defaultValue={searchTerm} placeholder="Search guides, formulas, tutorials..." className="min-w-0 flex-1 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm transition focus:border-[#1f3a5c] focus:outline-none dark:border-slate-700 dark:bg-slate-900" />
        <button type="submit" className="rounded-2xl bg-[#1f3a5c] px-6 py-3 font-semibold text-white transition hover:bg-[#162a43]">Search</button>
      </form>

      {featuredBlog && (
        <section className="mb-14">
          <h2 className="mb-6 font-serif text-2xl font-semibold text-[#26364a] dark:text-white">Featured Article</h2>
          <Link href={`/blog/${featuredBlog.slug}`} className="group relative block overflow-hidden rounded-2xl border border-stone-200 bg-[#faf7f0] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1f3a5c]/50 hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
            <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[#1f3a5c] transition-transform duration-300 group-hover:scale-x-100" />
            <span className="inline-flex rounded-full border border-stone-200 bg-white px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-[#1f3a5c] dark:border-slate-700 dark:bg-slate-800 dark:text-blue-400">{featuredBlog.category}</span>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#26364a] group-hover:text-[#1f3a5c] dark:text-white">{featuredBlog.title}</h2>
            <p className="mt-4 max-w-3xl leading-7 text-stone-600 dark:text-slate-400">{featuredBlog.description}</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-stone-500 dark:text-slate-400"><time dateTime={featuredBlog.publishedDate}>Published {formatBlogDate(featuredBlog.publishedDate)}</time><span>By {featuredBlog.author}</span><span>{featuredBlog.readingTime}</span></div>
          </Link>
        </section>
      )}

      <ResponsiveContentAd priority />

      <nav aria-label="Blog categories" className="mb-10 flex flex-wrap gap-3">
        {categories.map((category) => {
          const query = new URLSearchParams();
          if (category !== "All") query.set("category", category);
          if (searchTerm) query.set("q", searchTerm);
          const href = query.size ? `/blog?${query.toString()}` : "/blog";
          return <Link key={category} href={href} aria-current={selectedCategory === category ? "page" : undefined} className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${selectedCategory === category ? "bg-[#1f3a5c] text-white shadow-sm" : "border border-stone-200 bg-white text-stone-600 hover:bg-[#faf7f0] hover:text-[#1f3a5c] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"}`}>{category}</Link>;
        })}
      </nav>

      <section>
        <div className="mb-8 flex items-center justify-between"><h2 className="font-serif text-2xl font-semibold text-[#26364a] dark:text-white">Latest Articles</h2><span className="text-sm text-stone-500 dark:text-slate-400">{filteredBlogs.length} Articles</span></div>
        {filteredBlogs.length ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filteredBlogs.map((blog, index) => <Fragment key={blog.slug}><BlogCard blog={blog} />{(index + 1) % 6 === 0 && index < filteredBlogs.length - 1 && <div className="md:col-span-2 lg:col-span-3"><ResponsiveContentAd /></div>}</Fragment>)}</div> : <div className="rounded-2xl border border-dashed border-stone-300 py-16 text-center dark:border-slate-700"><h3 className="font-serif text-lg font-semibold text-[#26364a] dark:text-white">No Articles Found</h3><p className="mt-2 text-stone-500 dark:text-slate-400">Try another category or search keyword.</p></div>}
      </section>

      <section className="mt-16 rounded-3xl border border-stone-200 bg-[#f1ece3] p-8 text-center dark:border-slate-700 dark:bg-slate-900"><h2 className="font-serif text-3xl font-semibold text-[#26364a] dark:text-white">Need a Calculator?</h2><p className="mt-3 text-stone-600 dark:text-slate-400">Explore hundreds of free online calculators for finance, health, education, taxes, investments, vehicle expenses and more.</p><Link href="/calculators" className="mt-6 inline-block rounded-full bg-[#1f3a5c] px-6 py-3 font-semibold text-white transition hover:bg-[#162a43]">Browse Calculators</Link></section>
    </main>
  );
}
