import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import ArticleSchema from "@/src/components/seo/ArticleSchema";
import { blogs } from "@/src/data/blogs/blog";
import { calculators } from "@/src/data/calculators";
import BreadcrumbSchema from "@/src/components/seo/BreadcrumbSchema";
import Breadcrumb from "@/src/components/seo/Breadcrumb";
import AuthorBio from "@/src/components/common/AuthorBio";
import { getCategorySlug } from "@/src/data/categories/Category";
import ResponsiveContentAd from "@/src/components/ads/ResponsiveContentAd";
import SidebarThirdPartyAd from "@/src/components/ads/SidebarThirdPartyAd";
import { formatBlogDate } from "@/src/utils/formatBlogDate";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

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
    keywords: blog.keywords ?? [blog.title, blog.category, "DevCalc Blog"],
    alternates: {
      canonical: `https://www.devcalc.in/blog/${blog.slug}`,
    },
    openGraph: {
      title: blog.seoTitle,
      description: blog.seoDescription,
      url: `https://www.devcalc.in/blog/${blog.slug}`,
      siteName: "DevCalc",
      type: "article",
      publishedTime: blog.publishedDate,
      modifiedTime: blog.lastVerified ?? blog.publishedDate,
      ...(blog.image
        ? { images: [{ url: blog.image, alt: blog.imageAlt ?? blog.title }] }
        : {}),
    },
    twitter: {
      card: blog.image ? "summary_large_image" : "summary",
      title: blog.seoTitle,
      description: blog.seoDescription,
      ...(blog.image ? { images: [blog.image] } : {}),
    },
  };
}

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const sameCategoryBlogs = blogs.filter(
    (item) => item.slug !== blog.slug && item.category === blog.category,
  );
  const fallbackBlogs = blogs.filter(
    (item) => item.slug !== blog.slug && item.category !== blog.category,
  );
  const relatedBlogs = [...sameCategoryBlogs, ...fallbackBlogs].slice(0, 4);

  const selectedCalculators = (blog.relatedCalculatorSlugs ?? [])
    .map((calculatorSlug) =>
      calculators.find((calculator) => calculator.slug === calculatorSlug),
    )
    .filter((calculator): calculator is (typeof calculators)[number] => Boolean(calculator));

  const categoryCalculators = calculators.filter(
    (calculator) => calculator.category === blog.category,
  );

  const relatedCalculators = [...selectedCalculators, ...categoryCalculators]
    .filter(
      (calculator, index, items) =>
        items.findIndex((item) => item.slug === calculator.slug) === index,
    )
    .slice(0, 8);

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
        modifiedDate={blog.lastVerified}
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
            url: `/category/${getCategorySlug(blog.category)}`,
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
            href: `/category/${getCategorySlug(blog.category)}`,
          },
          {
            label: blog.title,
          },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4">
      </div>

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

            <div className="mt-6 rounded-xl border border-stone-200 bg-[#faf7f0] px-5 py-4 text-sm text-stone-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <span>By {blog.author}</span>
                <time dateTime={blog.publishedDate} className="font-semibold text-[#26364a] dark:text-white">
                  Published {formatBlogDate(blog.publishedDate)}
                </time>
                <span>{blog.readingTime}</span>
                {blog.lastVerified && (
                  <time dateTime={blog.lastVerified}>
                    Last verified {formatBlogDate(blog.lastVerified)}
                  </time>
                )}
              </div>
            </div>

            {blog.image && (
              <figure className="mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-[#faf7f0] dark:border-slate-700 dark:bg-slate-900">
                <Image
                  src={blog.image}
                  alt={blog.imageAlt ?? blog.title}
                  width={1200}
                  height={630}
                  priority
                  className="h-auto w-full object-cover"
                />
              </figure>
            )}

            {blog.effectiveDate && (
              <section className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
                <p><strong>Effective date:</strong> {blog.effectiveDate}</p>
              </section>
            )}

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

            {selectedCalculators.length > 0 && (
              <section className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/30">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">
                  Free interactive tools
                </p>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-[#26364a] dark:text-white">
                  Calculate with your own numbers
                </h2>
                <p className="mt-2 text-stone-600 dark:text-slate-300">
                  Use the calculators related to this guide to compare scenarios instead of relying only on the examples.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {selectedCalculators.map((calculator) => (
                    <Link
                      key={calculator.slug}
                      href={`/${calculator.slug}`}
                      className="rounded-full bg-[#1f3a5c] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#162a43]"
                    >
                      {calculator.name}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <ResponsiveContentAd priority />

            {/* Content */}
            <div className="mt-12 space-y-12">
              {blog.content.map((section, index) => (
                <Fragment key={section.heading}>
                  <section
                    id={section.heading.toLowerCase().replace(/\s+/g, "-")}
                    className="scroll-mt-24"
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

                    {section.image && (
                      <figure className="overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-700 dark:bg-slate-900">
                        <Image
                          src={section.image.src}
                          alt={section.image.alt}
                          width={870}
                          height={318}
                          className="h-auto w-full object-contain"
                        />
                        {section.image.caption && (
                          <figcaption className="border-t border-stone-200 px-4 py-3 text-sm leading-6 text-stone-600 dark:border-slate-700 dark:text-slate-400">
                            {section.image.caption}
                          </figcaption>
                        )}
                      </figure>
                    )}

                    {section.code && (
                      <figure className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-950">
                        {section.code.caption && (
                          <figcaption className="border-b border-slate-700 px-4 py-3 text-sm text-slate-300">
                            {section.code.caption}
                          </figcaption>
                        )}
                        <pre className="overflow-x-auto p-5 text-sm leading-6 text-slate-100">
                          <code data-language={section.code.language}>
                            {section.code.content}
                          </code>
                        </pre>
                      </figure>
                    )}
                  </div>
                  </section>
                  {index === 2 && blog.content.length > 4 && (
                    <ResponsiveContentAd />
                  )}
                </Fragment>
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

            {blog.sources && blog.sources.length > 0 && (
              <section className="mt-16 rounded-2xl border border-stone-200 bg-[#faf7f0] p-6 dark:border-slate-700 dark:bg-slate-900">
                <h2 className="font-serif text-3xl font-semibold text-[#26364a] dark:text-white">
                  Official sources
                </h2>
                <p className="mt-3 leading-7 text-stone-600 dark:text-slate-400">
                  Check these primary sources for the latest wording, eligibility rules, dates and exceptions.
                </p>
                <ul className="mt-5 space-y-4">
                  {blog.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#1f3a5c] underline-offset-4 hover:underline dark:text-blue-400"
                      >
                        {source.title}
                      </a>
                      <p className="text-sm text-stone-500 dark:text-slate-400">
                        {source.publisher}{source.publishedDate ? ` · ${source.publishedDate}` : ""}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

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

            <AuthorBio updated={blog.publishedDate} />
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

              <SidebarThirdPartyAd />

              <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-700 dark:bg-slate-900">
                <div className="border-b border-stone-200 bg-[#faf7f0] p-4 font-serif text-lg font-semibold text-[#26364a] dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                  Related Calculators
                </div>

                <div className="divide-y divide-stone-100 dark:divide-slate-700">
                  {relatedCalculators.map((calculator) => (
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

              <SidebarThirdPartyAd />
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
