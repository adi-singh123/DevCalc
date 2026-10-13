import type { Metadata } from "next";
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
  return (
    <div
      className="contents"
      data-database-page={page.slug}
      data-last-updated={page.updatedAt}
      dangerouslySetInnerHTML={{ __html: page.bodyHtml }}
    />
  );
}
