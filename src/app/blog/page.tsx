"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/src/components/seo/Breadcrumb";
import BreadcrumbSchema from "@/src/components/seo/BreadcrumbSchema";
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
      <section className="mb-12 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-16 text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold md:text-6xl">
            DevCalc Blog
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Learn formulas, percentage
            calculations, GST, finance,
            health metrics, education
            concepts, vehicle calculations,
            and everyday mathematics through
            simple step-by-step guides,
            examples, and practical
            explanations.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
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
              Vehicle
            </span>

            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
              Utility
            </span>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="mb-10">
        <input
          type="text"
          placeholder="Search guides, formulas, tutorials..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(
              e.target.value,
            )
          }
          className="w-full rounded-2xl border bg-white p-4 shadow-sm focus:border-blue-500 focus:outline-none"
        />
      </section>

      {/* Featured Blog */}
      {featuredBlog && (
        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold">
            Featured Article
          </h2>

          <Link
            href={`/blog/${featuredBlog.slug}`}
            className="block overflow-hidden rounded-3xl border bg-white p-8 shadow-sm transition hover:shadow-lg"
          >
            <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              {featuredBlog.category}
            </span>

            <h2 className="mt-4 text-3xl font-bold">
              {featuredBlog.title}
            </h2>

            <p className="mt-4 max-w-3xl text-slate-600">
              {
                featuredBlog.description
              }
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-500">
              <span>
                {
                  featuredBlog.author
                }
              </span>

              <span>
                {
                  featuredBlog.readingTime
                }
              </span>
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
                  selectedCategory ===
                  category
                    ? "bg-blue-600 text-white shadow-md"
                    : "border bg-white hover:bg-slate-50"
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
          <h2 className="text-2xl font-bold">
            Latest Articles
          </h2>

          <span className="text-sm text-slate-500">
            {filteredBlogs.length} Articles
          </span>
        </div>

        {filteredBlogs.length >
        0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map(
              (blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
                  className="group rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                    {blog.category}
                  </span>

                  <h3 className="mt-4 text-xl font-bold transition-colors group-hover:text-blue-600">
                    {blog.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                    {
                      blog.description
                    }
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t pt-4 text-xs text-slate-500">
                    <span>
                      {blog.author}
                    </span>

                    <span>
                      {
                        blog.readingTime
                      }
                    </span>
                  </div>
                </Link>
              ),
            )}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed py-16 text-center">
            <h3 className="text-lg font-semibold">
              No Articles Found
            </h3>

            <p className="mt-2 text-slate-500">
              Try another category or
              search keyword.
            </p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="mt-16 rounded-3xl border bg-slate-50 p-8 text-center">
        <h2 className="text-3xl font-bold">
          Need a Calculator?
        </h2>

        <p className="mt-3 text-slate-600">
          Explore hundreds of free online
          calculators for finance, health,
          education, taxes, investments,
          vehicle expenses, and more.
        </p>

        <Link
          href="/calculators"
          className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Browse Calculators
        </Link>
      </section>
    </main>
  );
}