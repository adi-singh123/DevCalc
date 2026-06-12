import { MetadataRoute } from "next";
import { calculators } from "@/src/data/calculators";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://devcalc.in";

  const calculatorUrls = calculators.map(
    (calculator) => ({
      url: `${baseUrl}/${calculator.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }),
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: `${baseUrl}/calculators`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },

    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },

    ...calculatorUrls,
  ];
}