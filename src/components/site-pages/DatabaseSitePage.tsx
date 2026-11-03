import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublishedSitePage } from "@/src/lib/site-pages/repository";

const SITE_URL = "https://www.devcalc.in";

export async function getDatabaseSitePageMetadata(slug: string): Promise<Metadata> {
  const page = await getPublishedSitePage(slug);
  if (!page) return { title: "Page Not Found | DevCalc", robots: { index: false, follow: false } };
  return {
    title: page.seoTitle,
    description: page.seoDescription,
    keywords: page.keywords,
    alternates: { canonical: `${SITE_URL}${page.canonicalPath}` },
    authors: [{ name: "Aditya Singh" }],
    creator: "Aditya Singh",
    publisher: "DevCalc",
    openGraph: {
      type: "website",
      url: `${SITE_URL}${page.canonicalPath}`,
      title: page.seoTitle,
      description: page.seoDescription,
      siteName: "DevCalc",
    },
  };
}

export default async function DatabaseSitePage({ slug }: { slug: string }) {
  const page = await getPublishedSitePage(slug);
  if (!page) notFound();
  const legacy = /<\s*(main|script|nav|svg)\b/i.test(page.bodyHtml);
  if (!legacy) {
    const url = `${SITE_URL}${page.canonicalPath}`;
    const pageSchema = { "@context": "https://schema.org", "@type": "WebPage", "@id": `${url}#webpage`, url, name: page.name, description: page.seoDescription, inLanguage: "en-IN", isPartOf: { "@id": `${SITE_URL}/#website` }, publisher: { "@id": `${SITE_URL}/#organization` } };
    const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: page.name, item: url }] };
    return <main className="mx-auto max-w-5xl px-4 py-12" data-database-page={page.slug} data-last-updated={page.updatedAt}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-600 dark:text-slate-300"><ol className="flex items-center gap-2"><li><Link href="/" className="underline">Home</Link></li><li aria-hidden="true">/</li><li aria-current="page">{page.name}</li></ol></nav>
      <article className="rounded-2xl border border-slate-200 bg-white p-6 leading-7 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 sm:p-10">
        <h1 className="mb-7 text-3xl font-bold text-slate-900 dark:text-white">{page.name}</h1>
        <div className="[&_h2]:mb-4 [&_h2]:mt-9 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mb-3 [&_h3]:mt-7 [&_h3]:text-xl [&_h3]:font-semibold [&_p]:mb-4 [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_a]:underline [&_img]:h-auto [&_img]:max-w-full [&_table]:my-6 [&_table]:block [&_table]:max-w-full [&_table]:overflow-x-auto [&_th]:border [&_th]:p-2 [&_td]:border [&_td]:p-2" dangerouslySetInnerHTML={{ __html: page.bodyHtml }} />
      </article>
    </main>;
  }
  return (
    <div
      className="contents"
      data-database-page={page.slug}
      data-last-updated={page.updatedAt}
      dangerouslySetInnerHTML={{ __html: page.bodyHtml }}
    />
  );
}
