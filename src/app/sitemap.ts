import { MetadataRoute } from "next";
import { readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { calculators } from "@/src/data/calculators";
import { categories } from "@/src/data/categories/Category";
import { blogs } from "@/src/data/blogs/blog";
import { STAMP_DUTY_STATES } from "@/src/data/states/stamp-duty-states";
import { ROAD_TAX_STATES } from "@/src/data/states/road-tax-states";
import { siteConfig } from "@/src/config/site";

const APP_DIRECTORY = join(process.cwd(), "src", "app");

const STATIC_ROUTE_SETTINGS: Record<
  string,
  Pick<MetadataRoute.Sitemap[number], "changeFrequency" | "priority">
> = {
  "/": { changeFrequency: "weekly", priority: 1 },
  "/calculators": { changeFrequency: "weekly", priority: 0.9 },
  "/blog": { changeFrequency: "weekly", priority: 0.8 },
  "/website-x-ray": { changeFrequency: "weekly", priority: 0.9 },
  "/want-automation": { changeFrequency: "weekly", priority: 0.8 },
  "/tug-of-war-calculator": { changeFrequency: "weekly", priority: 0.8 },
  "/college-project": { changeFrequency: "weekly", priority: 0.6 },
  "/about": { changeFrequency: "weekly", priority: 0.5 },
  "/contact": { changeFrequency: "weekly", priority: 0.5 },
  "/advertise": { changeFrequency: "weekly", priority: 0.5 },
  "/privacy-policy": { changeFrequency: "weekly", priority: 0.3 },
  "/terms": { changeFrequency: "weekly", priority: 0.3 },
};

function getStaticAppRoutes(directory = APP_DIRECTORY): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      return getStaticAppRoutes(entryPath);
    }

    if (entry.name !== "page.tsx" && entry.name !== "page.ts") {
      return [];
    }

    const segments = relative(APP_DIRECTORY, directory)
      .split(sep)
      .filter(Boolean)
      .filter((segment) => !/^\(.+\)$/.test(segment));

    // Parameterized routes are generated below from their canonical data sources.
    if (segments.some((segment) => segment.includes("[") || segment.startsWith("@"))) {
      return [];
    }

    const route = segments.length ? `/${segments.join("/")}` : "/";
    return [route];
  });
}

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
    changeFrequency: "weekly" as const,
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

  const staticUrls = getStaticAppRoutes()
    .sort()
    .map((route) => {
      const settings = STATIC_ROUTE_SETTINGS[route] ?? {
        changeFrequency: "weekly" as const,
        priority: 0.5,
      };

      return {
        url: route === "/" ? baseUrl : `${baseUrl}${route}`,
        ...settings,
      };
    });

  return [
    ...staticUrls,
    ...categoryUrls,
    ...calculatorUrls,
    ...stampDutyStateUrls,
    ...roadTaxStateUrls,
    ...blogUrls,
  ];
}
