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
  const title = seo.title.replace(/\s*\|\s*DevCalc\s*$/i, "");

  return {
    title,

    description: seo.description,

    keywords: seo.keywords,

    authors: [
      {
        name: "DevCalc",
      },
    ],

    creator: "DevCalc",

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
      images: [
        {
          url: `/logo.png`,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`logo.png`],
    },
  };
}
