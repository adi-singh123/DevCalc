import { MetadataRoute } from "next";
import { calculators } from "@/src/data/calculators";
import { categories } from "@/src/data/categories/Category";
import { blogs } from "@/src/data/blogs/blog";
import { interviewTopics } from "@/src/data/interview";
import { STAMP_DUTY_STATES } from "@/src/data/states/stamp-duty-states";
import { ROAD_TAX_STATES } from "@/src/data/states/road-tax-states";
import { siteConfig } from "@/src/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const calculatorUrls = calculators.map((calculator) => ({
    url: `${baseUrl}/${calculator.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/category/${category.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog.publishedDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const stampDutyStateUrls = STAMP_DUTY_STATES.map((state) => ({
    url: `${baseUrl}/stamp-duty-calculator/${state.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const roadTaxStateUrls = ROAD_TAX_STATES.map((state) => ({
    url: `${baseUrl}/road-tax-calculator/${state.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const interviewBaseUrls = interviewTopics.flatMap((topic) => {
    const stages = ["beginner", "intermediate", "advanced", "mnc"];
    return [
      {
        url: `${baseUrl}/interview-questions/${topic.slug}`,
        lastModified: topic.lastUpdated,
        priority: 0.7,
      },
      ...stages.map((stage) => ({
        url: `${baseUrl}/interview-questions/${topic.slug}/${stage}`,
        lastModified: topic.lastUpdated,
        priority: 0.6,
      })),
    ];
  });

  return [
    {
      url: baseUrl,
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: `${baseUrl}/calculators`,
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/blog`,
      changeFrequency: "daily",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/want-automation`,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/tug-of-war-calculator`,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/website-x-ray`,
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: "monthly",
      priority: 0.3,
    },

    {
      url: `${baseUrl}/terms`,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/college-project`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/interview-questions`,
      changeFrequency: "daily",
      priority: 0.8,
    },

    ...categoryUrls,
    ...calculatorUrls,
    ...stampDutyStateUrls,
    ...roadTaxStateUrls,
    ...blogUrls,
    ...interviewBaseUrls.map((item) => ({
      ...item,
      changeFrequency: "weekly" as const,
    })),
  ];
}
