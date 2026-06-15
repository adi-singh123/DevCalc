import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";

import { blogs } from "@/src/data/blogs/blog";
import { calculators } from "@/src/data/calculators";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug,
  );

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.seoTitle,

    description:
      blog.seoDescription,

    keywords: [
      blog.title,
      blog.category,
      "DevCalc Blog",
    ],

    alternates: {
      canonical: `https://www.devcalc.in/blog/${blog.slug}`,
    },

    openGraph: {
      title: blog.seoTitle,

      description:
        blog.seoDescription,

      url: `https://www.devcalc.in/blog/${blog.slug}`,

      siteName: "DevCalc",

      type: "article",
    },
  };
}

export default async function BlogDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug,
  );

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogs
    .filter(
      (item) =>
        item.slug !== blog.slug,
    )
    .slice(0, 4);

  const popularCalculators =
    calculators.slice(0, 8);

  const articleSchema = {
    "@context":
      "https://schema.org",

    "@type":
      "Article",

    headline:
      blog.title,

    description:
      blog.description,

    author: {
      "@type":
        "Person",

      name:
        blog.author,
    },

    publisher: {
      "@type":
        "Organization",

      name:
        "DevCalc",
    },

    mainEntityOfPage: {
      "@type":
        "WebPage",

      "@id": `https://www.devcalc.in/blog/${blog.slug}`,
    },

    url: `https://www.devcalc.in/blog/${blog.slug}`,

    datePublished:
      blog.publishedDate,

    dateModified:
      blog.publishedDate,
  };

  const faqSchema = {
    "@context":
      "https://schema.org",

    "@type":
      "FAQPage",

    mainEntity:
      blog.faqs.map(
        (faq) => ({
          "@type":
            "Question",

          name:
            faq.question,

          acceptedAnswer:
            {
              "@type":
                "Answer",

              text:
                faq.answer,
            },
        }),
      ),
  };

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              articleSchema,
            ),
        }}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              faqSchema,
            ),
        }}
      />

      <main className="mx-auto max-w-7xl px-4 py-10">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-slate-500">
          <Link
            href="/"
            className="hover:text-blue-600"
          >
            Home
          </Link>

          <span className="mx-2">
            /
          </span>

          <Link
            href="/blog"
            className="hover:text-blue-600"
          >
            Blog
          </Link>

          <span className="mx-2">
            /
          </span>

          <span>{blog.title}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-4">
          {/* Main Content */}
          <article className="lg:col-span-3">
            <h1 className="text-4xl font-bold md:text-5xl">
              {blog.title}
            </h1>

            <p className="mt-5 text-xl text-slate-600">
              {blog.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-500">
              <span>
                {blog.author}
              </span>

              <span>
                {blog.publishedDate}
              </span>

              <span>
                {blog.readingTime}
              </span>
            </div>

            {/* TOC */}
            <section className="mt-10 rounded-2xl border bg-slate-50 p-6">
              <h2 className="mb-4 text-xl font-bold">
                Table of Contents
              </h2>

              <ul className="space-y-2">
                {blog.content.map(
                  (section) => (
                    <li
                      key={
                        section.heading
                      }
                    >
                      <a
                        href={`#${section.heading
                          .toLowerCase()
                          .replace(
                            /\s+/g,
                            "-",
                          )}`}
                        className="text-blue-600 hover:underline"
                      >
                        {
                          section.heading
                        }
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </section>

            {/* Content */}
            <div className="mt-12 space-y-12">
              {blog.content.map(
                (
                  section,
                  index,
                ) => (
                  <section
                    key={index}
                    id={section.heading
                      .toLowerCase()
                      .replace(
                        /\s+/g,
                        "-",
                      )}
                  >
                    <h2 className="mb-5 text-3xl font-bold">
                      {
                        section.heading
                      }
                    </h2>

                    <div className="space-y-5">
                      {section.paragraphs.map(
                        (
                          paragraph,
                          idx,
                        ) => (
                          <p
                            key={idx}
                            className="leading-8 text-slate-700"
                          >
                            {
                              paragraph
                            }
                          </p>
                        ),
                      )}
                    </div>
                  </section>
                ),
              )}
            </div>

            {/* FAQs */}
            <section className="mt-16">
              <h2 className="mb-6 text-3xl font-bold">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {blog.faqs.map(
                  (faq) => (
                    <div
                      key={
                        faq.question
                      }
                      className="rounded-xl border p-5"
                    >
                      <h3 className="font-semibold">
                        {
                          faq.question
                        }
                      </h3>

                      <p className="mt-2 text-slate-600">
                        {
                          faq.answer
                        }
                      </p>
                    </div>
                  ),
                )}
              </div>
            </section>

            {/* Related Blogs */}
            <section className="mt-16">
              <h2 className="mb-6 text-3xl font-bold">
                Related Articles
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {relatedBlogs.map(
                  (item) => (
                    <Link
                      key={
                        item.slug
                      }
                      href={`/blog/${item.slug}`}
                      className="rounded-xl border p-5 transition hover:shadow-md"
                    >
                      <h3 className="font-semibold">
                        {
                          item.title
                        }
                      </h3>

                      <p className="mt-2 text-sm text-slate-600">
                        {
                          item.description
                        }
                      </p>
                    </Link>
                  ),
                )}
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border">
                <div className="border-b p-4 font-semibold">
                  Latest Articles
                </div>

                <div className="divide-y">
                  {blogs
                    .slice(0, 5)
                    .map((item) => (
                      <Link
                        key={
                          item.slug
                        }
                        href={`/blog/${item.slug}`}
                        className="block p-4 hover:bg-slate-50"
                      >
                        {
                          item.title
                        }
                      </Link>
                    ))}
                </div>
              </div>

              <div className="rounded-2xl border">
                <div className="border-b p-4 font-semibold">
                  Popular Calculators
                </div>

                <div className="divide-y">
                  {popularCalculators.map(
                    (
                      calculator,
                    ) => (
                      <Link
                        key={
                          calculator.slug
                        }
                        href={`/${calculator.slug}`}
                        className="block p-4 hover:bg-slate-50"
                      >
                        {
                          calculator.name
                        }
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}