import type { Metadata } from "next";
import { siteConfig } from "@/src/config/site";

type SeoInput = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
};

export function generateCalculatorMetadata(
  seo: SeoInput
): Metadata {
  const url = `${siteConfig.url}/${seo.slug}`;

  return {
    title: seo.title,

    description: seo.description,

    keywords: seo.keywords,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}