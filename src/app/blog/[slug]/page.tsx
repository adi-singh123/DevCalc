import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import ArticleSchema from "@/src/components/seo/ArticleSchema";
import { blogs } from "@/src/data/blogs/blog";
import { calculators } from "@/src/data/calculators";
import BreadcrumbSchema from "@/src/components/seo/BreadcrumbSchema";
import Breadcrumb from "@/src/components/seo/Breadcrumb";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.seoTitle,

    description: blog.seoDescription,

    keywords: [blog.title, blog.category, "DevCalc Blog"],

    alternates: {
      canonical: `https://www.devcalc.in/blog/${blog.slug}`,
    },

    openGraph: {
      title: blog.seoTitle,

      description: blog.seoDescription,

      url: `https://www.devcalc.in/blog/${blog.slug}`,

      siteName: "DevCalc",

      type: "article",
    },
  };
}

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogs
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 4);

  const popularCalculators = calculators.slice(0, 8);

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: blog.faqs.map((faq) => ({
      "@type": "Question",

      name: faq.question,

      acceptedAnswer: {
        "@type": "Answer",

        text: faq.answer,
      },
    })),
  };

  const categoryRelatedBlogs = blogs
    .filter(
      (item) => item.category === blog.category && item.slug !== blog.slug,
    )
    .slice(0, 4);

  return (
    <>
      <ArticleSchema
        title={blog.title}
        description={blog.seoDescription}
        slug={blog.slug}
        image={blog.image}
        publishedDate={blog.publishedDate}
        author={blog.author}
      />

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
          {
            name: blog.category,
            url: `/category/${blog.category.toLowerCase()}`,
          },
          {
            name: blog.title,
            url: `/blog/${blog.slug}`,
          },
        ]}
      />

      <Breadcrumb
        items={[
          {
            label: "Blog",
            href: "/blog",
          },
          {
            label: blog.category,
            href: `/category/${blog.category.toLowerCase()}`,
          },
          {
            label: blog.title,
          },
        ]}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Main Content */}
          <article className="lg:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-slate-400">
              {blog.category}
            </span>

            <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#26364a] md:text-5xl dark:text-white">
              {blog.title}
            </h1>

            <p className="mt-5 text-xl leading-8 text-stone-600 dark:text-slate-300">
              {blog.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-4 border-b border-stone-200 pb-6 text-sm text-stone-500 dark:border-slate-700 dark:text-slate-400">
              <span>{blog.author}</span>

              <span>{blog.publishedDate}</span>

              <span>{blog.readingTime}</span>
            </div>

            {/* TOC */}
            <section className="mt-10 rounded-2xl border border-stone-200 bg-[#faf7f0] p-6 dark:border-slate-700 dark:bg-slate-900">
              <h2 className="mb-4 font-serif text-xl font-semibold text-[#26364a] dark:text-white">
                Table of Contents
              </h2>

              <ul className="space-y-2">
                {blog.content.map((section) => (
                  <li key={section.heading}>
                    <a
                      href={`#${section.heading
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="text-[#1f3a5c] hover:underline dark:text-blue-400"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Content */}
            <div className="mt-12 space-y-12">
              {blog.content.map((section, index) => (
                <section
                  key={index}
                  id={section.heading.toLowerCase().replace(/\s+/g, "-")}
                >
                  <h2 className="mb-5 font-serif text-3xl font-semibold tracking-tight text-[#26364a] dark:text-white">
                    {section.heading}
                  </h2>

                  <div className="space-y-5">
                    {section.paragraphs.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="leading-8 text-stone-700 dark:text-slate-300"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.points && (
                      <ul className="space-y-3 rounded-2xl border border-stone-200 bg-[#faf7f0] p-5 dark:border-slate-700 dark:bg-slate-900">
                        {section.points.map((point, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="font-bold text-[#1f3a5c] dark:text-blue-400">
                              ✓
                            </span>

                            <span className="text-stone-700 dark:text-slate-300">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.table && (
                      <div className="overflow-x-auto rounded-2xl border border-stone-200 dark:border-slate-700">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-[#1f3a5c] text-white">
                              {section.table.headers.map((header) => (
                                <th
                                  key={header}
                                  className="px-4 py-3 text-left"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>

                          <tbody>
                            {section.table.rows.map((row, rowIndex) => (
                              <tr
                                key={rowIndex}
                                className="border-t border-stone-200 dark:border-slate-700"
                              >
                                {row.map((cell, cellIndex) => (
                                  <td
                                    key={cellIndex}
                                    className="px-4 py-3 text-stone-700 dark:text-slate-300"
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </section>
              ))}
            </div>

            {/* FAQs */}
            <section className="mt-16">
              <h2 className="mb-6 font-serif text-3xl font-semibold text-[#26364a] dark:text-white">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {blog.faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-xl border border-stone-200 bg-[#faf7f0] p-5 dark:border-slate-700 dark:bg-slate-900"
                  >
                    <h3 className="font-semibold text-[#26364a] dark:text-white">
                      {faq.question}
                    </h3>

                    <p className="mt-2 leading-7 text-stone-600 dark:text-slate-400">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Blogs */}
            <section className="mt-16">
              <h2 className="mb-6 font-serif text-3xl font-semibold text-[#26364a] dark:text-white">
                Related Articles
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {relatedBlogs.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="group rounded-xl border border-stone-200 bg-[#faf7f0] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#1f3a5c]/50 hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
                  >
                    <h3 className="font-serif text-lg font-semibold text-[#26364a] transition-colors group-hover:text-[#1f3a5c] dark:text-white dark:group-hover:text-blue-400">
                      {item.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm text-stone-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-24 space-y-6">
              <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-700 dark:bg-slate-900">
                <div className="border-b border-stone-200 bg-[#faf7f0] p-4 font-serif text-lg font-semibold text-[#26364a] dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                  Related Articles
                </div>

                <div className="divide-y divide-stone-100 dark:divide-slate-700">
                  {categoryRelatedBlogs.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/blog/${item.slug}`}
                      className="block p-4 text-sm font-medium text-stone-700 transition-colors hover:bg-[#faf7f0] hover:text-[#1f3a5c] dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-700 dark:bg-slate-900">
                <div className="border-b border-stone-200 bg-[#faf7f0] p-4 font-serif text-lg font-semibold text-[#26364a] dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                  Popular Calculators
                </div>

                <div className="divide-y divide-stone-100 dark:divide-slate-700">
                  {popularCalculators.map((calculator) => (
                    <Link
                      key={calculator.slug}
                      href={`/${calculator.slug}`}
                      className="block p-4 text-sm font-medium text-stone-700 transition-colors hover:bg-[#faf7f0] hover:text-[#1f3a5c] dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                    >
                      {calculator.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
