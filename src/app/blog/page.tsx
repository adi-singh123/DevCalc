"use client";

import { useState } from "react";
import Link from "next/link";

import BlogCard from "@/src/components/blog/BlogCard";
import { blogs } from "@/src/data/blogs/how-to-calculates-gat";

const categories = [
  "All",
  "Finance",
  "Health",
  "Education",
  "Utility",
  "Vehicle",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [searchTerm, setSearchTerm] = useState("");

  const featuredBlog = blogs[0];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All"
        ? true
        : blog.category === selectedCategory;

    const matchesSearch =
      blog.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      blog.description
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      {/* Hero Section */}
      <section className="mb-12 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-16 text-white">
        <h1 className="text-4xl font-bold md:text-5xl">
          DevCalc Blog
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-blue-100">
          Learn finance, tax, investing, health,
          education, and everyday calculations with
          simple guides, examples, and expert tips.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            Finance
          </span>

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            Health
          </span>

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            Education
          </span>

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            Utility
          </span>
        </div>
      </section>

      {/* Search Bar */}
      <div className="mb-12">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="w-full rounded-2xl border border-slate-300 bg-white p-4 shadow-sm focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Featured Article */}
      {featuredBlog && (
        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold">
            Featured Article
          </h2>

          <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
            <BlogCard blog={featuredBlog} />
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="mb-10">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category)
              }
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "border border-slate-300 bg-white hover:bg-slate-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Latest Articles
          </h2>

          <span className="text-sm text-slate-500">
            {filteredBlogs.length} Articles
          </span>
        </div>

        {filteredBlogs.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.slug}
                blog={blog}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed py-12 text-center">
            <h3 className="text-lg font-semibold">
              No articles found
            </h3>

            <p className="mt-2 text-slate-500">
              Try another category or search
              keyword.
            </p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="mt-16 rounded-3xl border bg-slate-50 p-8 text-center">
        <h2 className="text-3xl font-bold">
          Need a Calculator?
        </h2>

        <p className="mt-3 text-slate-600">
          Explore our collection of free online
          calculators for finance, health,
          education, taxes, and more.
        </p>

        <Link
          href="/calculators"
          className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Browse Calculators
        </Link>
      </section>
    </div>
  );
}