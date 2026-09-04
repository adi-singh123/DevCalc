/**
 * src/lib/website-xray/detectors/technology.ts
 * Multi-layer technology scanner (Frameworks, CMS, CSS, Libraries, Runtimes).
 */

import { TechnologyDetection } from "../types";

export function detectTechnologies(html: string, headers: Headers, headerMap: Record<string, string>): TechnologyDetection[] {
  const detections: TechnologyDetection[] = [];
  const lowerHtml = html.toLowerCase();
  const serverHeader = (headers.get("server") || "").toLowerCase();
  const poweredBy = (headers.get("x-powered-by") || "").toLowerCase();

  const add = (tech: TechnologyDetection) => {
    const existing = detections.find((d) => d.name.toLowerCase() === tech.name.toLowerCase());
    if (existing) {
      existing.confidence = Math.max(existing.confidence, tech.confidence);
      existing.evidence = Array.from(new Set([...existing.evidence, ...tech.evidence]));
      existing.detectedFrom = Array.from(new Set([...existing.detectedFrom, ...tech.detectedFrom]));
      if (!existing.version && tech.version) existing.version = tech.version;
    } else {
      detections.push(tech);
    }
  };

  // Next.js
  if (lowerHtml.includes("__next_data__") || lowerHtml.includes("/_next/") || headers.get("x-nextjs-matched-path") || headers.get("x-nextjs-page")) {
    const evidence: string[] = [];
    if (lowerHtml.includes("__next_data__")) evidence.push("Found __NEXT_DATA__ script tag in DOM");
    if (lowerHtml.includes("/_next/")) evidence.push("Found /_next/ static asset path");
    if (headers.get("x-nextjs-matched-path")) evidence.push("Observed x-nextjs-matched-path header");
    add({
      name: "Next.js",
      category: "Framework",
      confidence: 100,
      confidenceLevel: "confirmed",
      evidence,
      detectedFrom: ["html", "scripts", "headers"],
    });
    add({
      name: "React",
      category: "Library",
      confidence: 100,
      confidenceLevel: "confirmed",
      evidence: ["Inherited from Next.js runtime architecture"],
      detectedFrom: ["scripts"],
    });
  }

  // React standalone
  if (lowerHtml.includes("react-dom") || lowerHtml.includes("data-reactroot") || lowerHtml.includes("__reactfiber")) {
    add({
      name: "React",
      category: "Library",
      confidence: 95,
      confidenceLevel: "confirmed",
      evidence: ["Found React DOM root markers or react-dom references in HTML"],
      detectedFrom: ["html", "scripts"],
    });
  }

  // Vue.js & Nuxt
  if (lowerHtml.includes("__nuxt__") || lowerHtml.includes("/_nuxt/") || headers.get("x-nuxt-cache")) {
    add({
      name: "Nuxt.js",
      category: "Framework",
      confidence: 100,
      confidenceLevel: "confirmed",
      evidence: ["Found __NUXT__ state object or /_nuxt/ asset paths"],
      detectedFrom: ["html", "scripts"],
    });
    add({
      name: "Vue.js",
      category: "Framework",
      confidence: 100,
      confidenceLevel: "confirmed",
      evidence: ["Inherited from Nuxt.js framework architecture"],
      detectedFrom: ["scripts"],
    });
  } else if (lowerHtml.includes("data-v-") || lowerHtml.includes("vue.global") || lowerHtml.includes("vue.runtime")) {
    add({
      name: "Vue.js",
      category: "Framework",
      confidence: 90,
      confidenceLevel: "likely",
      evidence: ["Found Vue scoped component markers (data-v-*) or vue runtime scripts"],
      detectedFrom: ["html", "scripts"],
    });
  }

  // Svelte & SvelteKit
  if (lowerHtml.includes("__sveltekit") || lowerHtml.includes("/_app/immutable/") || lowerHtml.includes("svelte-")) {
    add({
      name: "Svelte / SvelteKit",
      category: "Framework",
      confidence: 95,
      confidenceLevel: "confirmed",
      evidence: ["Found Svelte scoped CSS classes (svelte-*) or SvelteKit client bundle"],
      detectedFrom: ["html", "styles", "scripts"],
    });
  }

  // Angular
  if (lowerHtml.includes("ng-version") || lowerHtml.includes("ng-app") || lowerHtml.includes("ng-controller")) {
    const match = html.match(/ng-version=["']([^"']+)["']/i);
    add({
      name: "Angular",
      category: "Framework",
      confidence: 100,
      confidenceLevel: "confirmed",
      version: match ? match[1] : undefined,
      evidence: [match ? `Found ng-version="${match[1]}" in HTML root` : "Found Angular DOM directive attributes"],
      detectedFrom: ["html"],
    });
  }

  // Remix
  if (lowerHtml.includes("window.__remixcontext") || lowerHtml.includes("__remix_manifest")) {
    add({
      name: "Remix",
      category: "Framework",
      confidence: 100,
      confidenceLevel: "confirmed",
      evidence: ["Found window.__remixContext state in document HTML"],
      detectedFrom: ["html", "scripts"],
    });
  }

  // Astro
  if (lowerHtml.includes("astro-island") || lowerHtml.includes("data-astro-cid")) {
    add({
      name: "Astro",
      category: "Framework",
      confidence: 100,
      confidenceLevel: "confirmed",
      evidence: ["Found <astro-island> component tags or data-astro-cid attributes"],
      detectedFrom: ["html"],
    });
  }

  // Gatsby
  if (lowerHtml.includes("___gatsby") || lowerHtml.includes('id="___gatsby"')) {
    add({
      name: "Gatsby",
      category: "Framework",
      confidence: 100,
      confidenceLevel: "confirmed",
      evidence: ["Found Gatsby root mount point id=___gatsby"],
      detectedFrom: ["html"],
    });
  }

  // WordPress
  if (lowerHtml.includes("/wp-content/") || lowerHtml.includes("/wp-includes/") || lowerHtml.includes("wp-json")) {
    add({
      name: "WordPress",
      category: "CMS",
      confidence: 100,
      confidenceLevel: "confirmed",
      evidence: ["Found WordPress file paths (/wp-content/ or /wp-includes/)"],
      detectedFrom: ["html", "assets"],
    });
  }

  // Shopify
  if (lowerHtml.includes("cdn.shopify.com") || lowerHtml.includes("shopify.theme") || lowerHtml.includes("myshopify.com")) {
    add({
      name: "Shopify",
      category: "E-Commerce",
      confidence: 100,
      confidenceLevel: "confirmed",
      evidence: ["Found Shopify CDN asset links and Shopify JS runtime globals"],
      detectedFrom: ["html", "scripts"],
    });
  }

  // Webflow
  if (lowerHtml.includes("webflow.com") || lowerHtml.includes("data-wf-page") || lowerHtml.includes("data-wf-site")) {
    add({
      name: "Webflow",
      category: "CMS",
      confidence: 100,
      confidenceLevel: "confirmed",
      evidence: ["Found Webflow site/page markers (data-wf-site, data-wf-page)"],
      detectedFrom: ["html"],
    });
  }

  // Tailwind CSS
  if (lowerHtml.includes("tailwindcss") || lowerHtml.includes("tailwind") || /class=["'][^"']*(?:flex|grid|hidden|relative|absolute|px-|py-|text-|bg-|rounded-)[^"']*(?:flex|grid|hidden|relative|absolute|px-|py-|text-|bg-|rounded-)[^"']*(?:flex|grid|hidden|relative|absolute|px-|py-|text-|bg-|rounded-)/.test(html)) {
    add({
      name: "Tailwind CSS",
      category: "CSS Framework",
      confidence: 90,
      confidenceLevel: "likely",
      evidence: ["Detected atomic utility class composition matching Tailwind CSS patterns"],
      detectedFrom: ["html", "styles"],
    });
  }

  // Bootstrap
  if (lowerHtml.includes("bootstrap.min.css") || lowerHtml.includes("bootstrap.bundle") || lowerHtml.includes("data-bs-toggle") || lowerHtml.includes("data-bs-target")) {
    add({
      name: "Bootstrap",
      category: "CSS Framework",
      confidence: 95,
      confidenceLevel: "confirmed",
      evidence: ["Found Bootstrap CSS/JS CDN bundle or data-bs-* attributes"],
      detectedFrom: ["html", "styles", "scripts"],
    });
  }

  // jQuery
  if (lowerHtml.includes("jquery.min.js") || lowerHtml.includes("jquery/") || lowerHtml.includes("jquery.js")) {
    add({
      name: "jQuery",
      category: "Library",
      confidence: 90,
      confidenceLevel: "likely",
      evidence: ["Found jQuery library script tag inclusion in HTML document"],
      detectedFrom: ["scripts"],
    });
  }

  // Backend / Runtimes from headers
  if (poweredBy.includes("express")) {
    add({
      name: "Express.js",
      category: "Backend / Runtime",
      confidence: 100,
      confidenceLevel: "confirmed",
      evidence: ["X-Powered-By header: Express"],
      detectedFrom: ["headers"],
    });
  } else if (poweredBy.includes("asp.net") || poweredBy.includes("aspnet")) {
    add({
      name: "ASP.NET",
      category: "Backend / Runtime",
      confidence: 100,
      confidenceLevel: "confirmed",
      evidence: [`X-Powered-By header: ${poweredBy}`],
      detectedFrom: ["headers"],
    });
  } else if (poweredBy.includes("php")) {
    add({
      name: "PHP",
      category: "Backend / Runtime",
      confidence: 100,
      confidenceLevel: "confirmed",
      evidence: [`X-Powered-By header: ${poweredBy}`],
      detectedFrom: ["headers"],
    });
  }

  return detections;
}

