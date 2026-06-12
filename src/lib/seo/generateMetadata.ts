import type { Metadata } from "next";
import { siteConfig } from "@/src/config/site";

type SeoInput = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
};

export function generateCalculatorMetadata(
  seo: SeoInput,
): Metadata {
  const url = `${siteConfig.url}/${seo.slug}`;

  return {
    title: seo.title,

    description: seo.description,

    keywords: seo.keywords,

    authors: [
      {
        name: "Aditya Singh",
      },
    ],

    creator: "Aditya Singh",

    publisher: "DevCalc",

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}