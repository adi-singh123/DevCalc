"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/src/components/seo/Breadcrumb";
import BreadcrumbSchema from "@/src/components/seo/BreadcrumbSchema";
import BlogCard from "@/src/components/blog/BlogCard";
import { blogs } from "@/src/data/blogs/blog";

const categories = [
  "All",
  "Finance",
  "Health",
  "Education",
  "Vehicle",
  "Utility",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [searchTerm, setSearchTerm] =
    useState("");

  const featuredBlog = blogs[0];

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All"
          ? true
          : blog.category === selectedCategory;

      const matchesSearch =
        blog.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        blog.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      return (
        matchesCategory &&
        matchesSearch
      );
    });
  }, [selectedCategory, searchTerm]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
        <BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Blog",
        url: "/blog",
      },
    ]}
  />

  <Breadcrumb
    items={[
      {
        label: "Blog",
      },
    ]}
  />
      {/* Hero */}
      <section className="mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-[#1f3a5c] to-[#2b4a6f] px-8 py-16 text-white">
        <div className="max-w-4xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
            DevCalc Journal
          </span>

          <h1 className="mt-3 font-serif text-4xl font-semibold md:text-6xl">
            The DevCalc Blog
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Learn formulas, percentage calculations, GST, finance, health
            metrics, education concepts, vehicle calculations, and everyday
            mathematics through simple step-by-step guides, examples, and
            practical explanations.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Finance", "Health", "Education", "Vehicle", "Utility"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="mb-10">
        <input
          type="text"
          placeholder="Search guides, formulas, tutorials..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-2xl border border-stone-200 bg-white p-4 shadow-sm transition focus:border-[#1f3a5c] focus:outline-none dark:border-slate-700 dark:bg-slate-900"
        />
      </section>

      {/* Featured Blog */}
      {featuredBlog && (
        <section className="mb-14">
          <h2 className="mb-6 font-serif text-2xl font-semibold text-[#26364a] dark:text-white">
            Featured Article
          </h2>

          <Link
            href={`/blog/${featuredBlog.slug}`}
            className="group relative block overflow-hidden rounded-2xl border border-stone-200 bg-[#faf7f0] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1f3a5c]/50 hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
          >
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[#1f3a5c] transition-transform duration-300 group-hover:scale-x-100"
            />

            <span className="inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-[#1f3a5c] dark:border-slate-700 dark:bg-slate-800 dark:text-blue-400">
              {featuredBlog.category}
            </span>

            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-[#26364a] transition-colors group-hover:text-[#1f3a5c] dark:text-white dark:group-hover:text-blue-400">
              {featuredBlog.title}
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-stone-600 dark:text-slate-400">
              {featuredBlog.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-stone-500 dark:text-slate-400">
              <span>{featuredBlog.author}</span>
              <span>{featuredBlog.readingTime}</span>
            </div>
          </Link>
        </section>
      )}

      {/* Categories */}
      <section className="mb-10">
        <div className="flex flex-wrap gap-3">
          {categories.map(
            (category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(
                    category,
                  )
                }
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-[#1f3a5c] text-white shadow-sm"
                    : "border border-stone-200 bg-white text-stone-600 hover:bg-[#faf7f0] hover:text-[#1f3a5c] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                }`}
              >
                {category}
              </button>
            ),
          )}
        </div>
      </section>

      {/* Articles */}
      <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-serif text-2xl font-semibold text-[#26364a] dark:text-white">
            Latest Articles
          </h2>

          <span className="text-sm text-stone-500 dark:text-slate-400">
            {filteredBlogs.length} Articles
          </span>
        </div>

        {filteredBlogs.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-stone-300 py-16 text-center dark:border-slate-700">
            <h3 className="font-serif text-lg font-semibold text-[#26364a] dark:text-white">
              No Articles Found
            </h3>

            <p className="mt-2 text-stone-500 dark:text-slate-400">
              Try another category or search keyword.
            </p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="mt-16 rounded-3xl border border-stone-200 bg-[#f1ece3] p-8 text-center dark:border-slate-700 dark:bg-slate-900">
        <h2 className="font-serif text-3xl font-semibold text-[#26364a] dark:text-white">
          Need a Calculator?
        </h2>

        <p className="mt-3 text-stone-600 dark:text-slate-400">
          Explore hundreds of free online calculators for finance, health,
          education, taxes, investments, vehicle expenses, and more.
        </p>

        <Link
          href="/calculators"
          className="mt-6 inline-block rounded-full bg-[#1f3a5c] px-6 py-3 font-semibold text-white transition hover:bg-[#162a43]"
        >
          Browse Calculators
        </Link>
      </section>
    </main>
  );
}