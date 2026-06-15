import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { blogs } from "@/src/data/blogs/how-to-calculates-gat";
import { calculators } from "@/src/data/calculators";
import Breadcrumb from "@/src/components/seo/Breadcrumb"
export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogs
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 4);

  const popularCalculators = calculators.slice(0, 5);

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      {/* Breadcrumb */}
 <Breadcrumb
  category="Blog"
  currentPage={blog.title}
/>

      <div className="grid gap-10 lg:grid-cols-4">
        {/* Main Content */}
        <article className="lg:col-span-3">
          <h1 className="text-4xl font-bold leading-tight">{blog.title}</h1>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
            <span>{blog.author}</span>

            <span>{blog.publishedDate}</span>

            <span>5 min read</span>
          </div>
          <div className="mt-8 flex items-center gap-5 rounded-3xl border bg-gradient-to-r from-blue-50 to-cyan-50 p-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600 text-4xl text-white">
              {blog.icon}
            </div>

            <div>
              <p className="text-sm font-medium text-blue-600">Finance Guide</p>

              <h2 className="text-2xl font-bold">GST Calculation Guide</h2>

              <p className="mt-1 text-slate-600">
                Learn GST formulas, examples, and tax calculations.
              </p>
            </div>
          </div>

          <div className="mt-10 max-w-4xl space-y-12">
            {blog.content.map((section, index) => (
              <div key={index}>
                <h2 className="mb-6 border-b pb-2 text-3xl font-bold text-slate-900">
                  {section.heading}
                </h2>

                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="leading-8 text-slate-700"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Calculator CTA */}
          <div className="mt-10 rounded-2xl border bg-blue-50 p-6">
            <h3 className="text-xl font-bold">Try DevCalc</h3>

            <p className="mt-2 text-slate-600">
              Use our free online calculators for instant results.
            </p>

            <Link
              href="/calculators"
              className="mt-4 inline-block rounded-xl bg-blue-600 px-6 py-3 text-white"
            >
              Browse Calculators
            </Link>
          </div>

          {/* Related Blogs */}
          <section className="mt-14">
            <h2 className="mb-6 text-2xl font-bold">Related Articles</h2>

            <div className="grid gap-6 md:grid-cols-2">
              {relatedBlogs.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="rounded-2xl border p-5 transition hover:shadow-lg"
                >
                  <h3 className="font-semibold">{article.title}</h3>

                  <p className="mt-2 text-sm text-slate-600">
                    {article.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Popular Calculators */}
          <div className="rounded-2xl border p-5">
            <h3 className="mb-4 font-bold">Popular Calculators</h3>

            <div className="space-y-3">
              {popularCalculators.map((calculator) => (
                <Link
                  key={calculator.slug}
                  href={`/${calculator.slug}`}
                  className="block text-sm text-slate-700 hover:text-blue-600"
                >
                  {calculator.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Latest Articles */}
          <div className="rounded-2xl border p-5">
            <h3 className="mb-4 font-bold">Latest Articles</h3>

            <div className="space-y-4">
              {blogs.slice(0, 5).map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="block text-sm hover:text-blue-600"
                >
                  {article.title}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
