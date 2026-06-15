import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://www.devcalc.in",
  ),

  title: {
    default: "DevCalc Blog",
    template: "%s | DevCalc",
  },

  description:
    "Learn finance, health, education, vehicle and utility calculations with detailed guides, formulas, examples and practical tutorials.",

  keywords: [
    "calculator blog",
    "finance guides",
    "health guides",
    "percentage calculation",
    "gst calculation",
    "cgpa calculation",
    "mileage calculation",
    "devcalc",
  ],

  alternates: {
    canonical:
      "https://www.devcalc.in/blog",
  },

  openGraph: {
    siteName: "DevCalc",

    type: "website",

    title: "DevCalc Blog",

    description:
      "Learn finance, health, education, vehicle and utility calculations through detailed guides and examples.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}