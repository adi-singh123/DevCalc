import { MetadataRoute } from "next";
import { calculators } from "@/src/data/calculators";
import { categories } from "@/src/data/categories/Category";
import { blogs } from "@/src/data/blogs/blog";
import { interviewTopics } from "@/src/data/interview";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.devcalc.in";

  const calculatorUrls = calculators.map((calculator) => ({
    url: `${baseUrl}/${calculator.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const interviewBaseUrls = interviewTopics.flatMap((topic) => {
    const stages = ["beginner", "intermediate", "advanced", "mnc"];
    return [
      { url: `${baseUrl}/interview-questions/${topic.slug}`, priority: 0.7 },
      ...stages.map((stage) => ({
        url: `${baseUrl}/interview-questions/${topic.slug}/${stage}`,
        priority: 0.6,
      })),
    ];
  });

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
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
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
    {
      url: `${baseUrl}/interview-questions`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },

    ...categoryUrls,
    ...calculatorUrls,
    ...blogUrls,
    ...interviewBaseUrls.map((item) => ({
      ...item,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
    })),
  ];
}
