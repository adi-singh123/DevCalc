/**
 * src/lib/website-xray/detectors/third-party.ts
 * Classifies third-party scripts, analytics, pixels, chat widgets, and fonts.
 */

import { ThirdPartyService } from "../types";

interface Rule {
  name: string;
  category: ThirdPartyService["category"];
  domains: string[];
  patterns: RegExp[];
}

const THIRD_PARTY_RULES: Rule[] = [
  {
    name: "Google Analytics 4 / Tag Manager",
    category: "Analytics",
    domains: ["googletagmanager.com", "google-analytics.com"],
    patterns: [/googletagmanager\.com\/gtag/i, /google-analytics\.com\/analytics\.js/i, /googletagmanager\.com\/gtm\.js/i],
  },
  {
    name: "Google AdSense",
    category: "Advertising",
    domains: ["pagead2.googlesyndication.com", "doubleclick.net"],
    patterns: [/pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle/i, /adsbygoogle\.js/i],
  },
  {
    name: "Meta Pixel (Facebook)",
    category: "Advertising",
    domains: ["connect.facebook.net"],
    patterns: [/connect\.facebook\.net\/[a-z_]+\/fbevents\.js/i, /facebook\.com\/tr/i],
  },
  {
    name: "Google Fonts",
    category: "Fonts",
    domains: ["fonts.googleapis.com", "fonts.gstatic.com"],
    patterns: [/fonts\.googleapis\.com/i, /fonts\.gstatic\.com/i],
  },
  {
    name: "Stripe Payments",
    category: "Payments",
    domains: ["js.stripe.com"],
    patterns: [/js\.stripe\.com\/v[23]/i],
  },
  {
    name: "Sentry Error Tracking",
    category: "Error Monitoring",
    domains: ["browser.sentry-cdn.com", "sentry.io"],
    patterns: [/sentry-cdn\.com/i, /sentry\.io/i],
  },
  {
    name: "Hotjar Heatmaps",
    category: "Analytics",
    domains: ["static.hotjar.com"],
    patterns: [/static\.hotjar\.com\/c\/hotjar/i],
  },
  {
    name: "Intercom Chat",
    category: "Customer Support & Chat",
    domains: ["widget.intercom.io", "js.intercomcdn.com"],
    patterns: [/widget\.intercom\.io/i, /intercomcdn\.com/i],
  },
  {
    name: "Crisp Chat",
    category: "Customer Support & Chat",
    domains: ["client.crisp.chat"],
    patterns: [/client\.crisp\.chat\/l\.js/i],
  },
  {
    name: "PostHog Product Analytics",
    category: "Analytics",
    domains: ["app.posthog.com", "us.i.posthog.com", "eu.i.posthog.com"],
    patterns: [/posthog\.com/i, /array\.js/i],
  },
];

export function detectThirdPartyServices(html: string): ThirdPartyService[] {
  const services: ThirdPartyService[] = [];

  for (const rule of THIRD_PARTY_RULES) {
    const matched = rule.patterns.some((pattern) => pattern.test(html));
    if (matched) {
      services.push({
        name: rule.name,
        category: rule.category,
        domains: rule.domains,
        confidence: 95,
        confidenceLevel: "likely",
        evidence: [`Detected script inclusion or asset domain reference for ${rule.domains[0]}`],
      });
    }
  }

  return services;
}

