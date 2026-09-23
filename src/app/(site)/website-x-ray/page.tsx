import React, { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { WebsiteXRayClient } from "./WebsiteXRayClient";
import {
  ShieldCheck,
  Server,
  Code2,
  ChevronRight,
  HelpCircle,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website X-Ray: Tech Stack, Security and SEO Scanner",
  description:
    "Scan a public website for technology signals, CMS, CDN, DNS, TLS, observable APIs, security headers, metadata and on-page SEO checks.",
  keywords: [
    "website xray",
    "website tech stack detector",
    "cms detector",
    "what technology is this site using",
    "framework detector",
    "dns lookup tool",
    "security headers checker",
    "website seo checker",
    "http header checker",
    "api discovery tool",
    "devcalc website xray",
  ],
  alternates: {
    canonical: "https://www.devcalc.in/website-x-ray",
  },
  openGraph: {
    title: "Website X-Ray: Tech Stack, Security and SEO Scanner",
    description:
      "Inspect public technology signals, infrastructure, observable APIs, security headers and on-page SEO metadata.",
    url: "https://www.devcalc.in/website-x-ray",
    siteName: "DevCalc",
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "DevCalc Website X-Ray" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website X-Ray: Tech Stack, Security and SEO Scanner",
    description: "Inspect public website technology, infrastructure, security-header and SEO signals.",
    images: ["/logo.png"],
  },
};

const FAQ_ITEMS = [
  {
    q: "How does Website X-Ray detect frameworks and technologies?",
    a: "Website X-Ray uses passive HTML, public script-path, bundle-string, and HTTP-header signatures. It reports confidence and evidence for each match because hidden server-side technology and deliberately removed headers cannot be confirmed from a public response.",
  },
  {
    q: "Does Website X-Ray perform active security penetration testing?",
    a: "No. Website X-Ray is strictly a passive, non-intrusive inspector. It checks observable public HTTP headers (like HSTS, Content-Security-Policy, X-Frame-Options) and TLS certificate metadata. It never injects payloads, runs exploits, or stresses target infrastructure.",
  },
  {
    q: "How does the DevCalc X-Ray Score get calculated?",
    a: "The indicative score combines security headers (30%), detected technology signals (25%), on-page SEO signals (25%), and response timing (20%). It is a comparison aid, not proof of security, search ranking, code quality, or production readiness.",
  },
  {
    q: "Are private IPs and localhost addresses supported?",
    a: "No. To protect infrastructure integrity, Website X-Ray enforces strict SSRF defense filters that reject loopback addresses (127.0.0.1, ::1), RFC 1918 private subnets (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16), and cloud metadata endpoints (169.254.169.254).",
  },
  {
    q: "Why are some API headers marked [REDACTED]?",
    a: "To prevent unintentional credential or authorization token leakages in public scans, known sensitive header values (including Authorization, Cookie, Set-Cookie, and custom token keys) are masked before client serialization.",
  },
];

export default function WebsiteXRayPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "DevCalc Website X-Ray",
        url: "https://www.devcalc.in/website-x-ray",
        description:
          "Deep technical intelligence tool to scan observable frontend frameworks, infrastructure, APIs, and passive security headers on any public website.",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "All",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.devcalc.in/" },
          { "@type": "ListItem", position: 2, name: "Website X-Ray", item: "https://www.devcalc.in/website-x-ray" },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#faf7f0] dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <div className="max-w-6xl mx-auto space-y-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-stone-500 dark:text-slate-400">
          <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400 dark:text-slate-600" />
          <Link href="/calculators" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Developer Tools
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400 dark:text-slate-600" />
          <span className="text-[#26364a] dark:text-slate-200 font-semibold">Website X-Ray</span>
        </nav>


        {/* Hero Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold shadow-xs dark:bg-indigo-950/80 dark:border-indigo-500/30 dark:text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Full-Stack Web Architecture Inspector</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#26364a] dark:text-white tracking-tight leading-tight">
            Website <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 dark:from-indigo-400 dark:via-purple-400 dark:to-emerald-400 bg-clip-text text-transparent">X-Ray</span>
          </h1>

          <p className="text-sm sm:text-base text-stone-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Inspect public signals from any reachable website: frontend frameworks, CMS, CDN and DNS, TLS certificate details, observable API requests, security headers, and on-page SEO metadata.
          </p>
        </div>

        {/* Interactive Client Application */}
        <Suspense
          fallback={
            <div className="w-full h-48 bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-2xl animate-pulse flex items-center justify-center text-stone-400 dark:text-slate-500 font-medium text-sm">
              Loading Website X-Ray Engine...
            </div>
          }
        >
          <WebsiteXRayClient />
        </Suspense>

        {/* Educational Content & Architecture Guide */}
        <div className="space-y-10 pt-6 border-t border-stone-200 dark:border-slate-800/80 text-stone-700 dark:text-slate-300">
          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900/60 border border-stone-200 dark:border-slate-800/90 rounded-2xl p-6 space-y-3 shadow-xs hover:border-stone-300 dark:hover:border-slate-700/80 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 dark:bg-indigo-950/80 dark:border-indigo-500/30 dark:text-indigo-400">
                <Code2 className="w-4 h-4" />
              </div>
              <h2 className="text-base font-bold text-[#26364a] dark:text-white">Full-Stack Tech Fingerprinting</h2>
              <p className="text-xs text-stone-600 dark:text-slate-400 leading-relaxed">
                Looks for public HTML, asset-path, bundle and response-header signatures for common frameworks, CMS platforms and libraries. Every match includes confidence and supporting evidence.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900/60 border border-stone-200 dark:border-slate-800/90 rounded-2xl p-6 space-y-3 shadow-xs hover:border-stone-300 dark:hover:border-slate-700/80 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 dark:bg-emerald-950/80 dark:border-emerald-500/30 dark:text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h2 className="text-base font-bold text-[#26364a] dark:text-white">Passive Security & HSTS Audit</h2>
              <p className="text-xs text-stone-600 dark:text-slate-400 leading-relaxed">
                Evaluates transport-layer HTTPS enforcement, Strict-Transport-Security, Content-Security-Policy (CSP), Clickjacking defenses (XFO), MIME sniff guards (XCTO), and certificate expiration.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900/60 border border-stone-200 dark:border-slate-800/90 rounded-2xl p-6 space-y-3 shadow-xs hover:border-stone-300 dark:hover:border-slate-700/80 transition-colors">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 dark:bg-blue-950/80 dark:border-blue-500/30 dark:text-blue-400">
                <Server className="w-4 h-4" />
              </div>
              <h2 className="text-base font-bold text-[#26364a] dark:text-white">Edge CDN & DNS Infrastructure</h2>
              <p className="text-xs text-stone-600 dark:text-slate-400 leading-relaxed">
                Resolves public DNS records and checks response headers for hosting and CDN signatures. Timing reflects this scanner&apos;s network location and is not a Core Web Vitals measurement.
              </p>
            </div>
          </div>

          {/* Technical Guide Section */}
          <div className="bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800/90 rounded-2xl p-7 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-[#26364a] dark:text-white">
              How the Website Technology Scanner Works
            </h2>
            <div className="space-y-3.5 text-xs sm:text-sm text-stone-600 dark:text-slate-300 leading-relaxed">
              <p>
                The scan fetches the requested public page, follows a limited redirect chain, validates every destination against SSRF protections, reads response headers, resolves DNS, inspects the TLS certificate, and checks first-party script bundles within size and count limits.
              </p>
              <p>
                A short browser observation records fetch and XHR requests made during initial page load. Static analysis can also find API-shaped URLs referenced in public code; these inferred endpoints are labelled separately from requests observed on the network.
              </p>
              <p>
                Results are evidence-based but not exhaustive. Consent screens, bot protection, authentication, regional routing, client interactions, hidden backend services and removed headers can all limit what a passive public scan can detect.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800/90 rounded-2xl p-7 sm:p-8 space-y-5 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-[#26364a] dark:text-white">What the SEO and Security Results Mean</h2>
            <div className="grid gap-5 md:grid-cols-2 text-xs sm:text-sm text-stone-600 dark:text-slate-300 leading-relaxed">
              <div>
                <h3 className="font-bold text-[#26364a] dark:text-white mb-2">On-page SEO checks</h3>
                <p>The report checks the returned HTML for a title, meta description, canonical link, one primary H1, robots directives, Open Graph, Twitter Card, JSON-LD, viewport, favicon and document language. These checks improve technical readiness but do not predict rankings or replace content, link and crawl analysis.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#26364a] dark:text-white mb-2">Passive security checks</h3>
                <p>The report evaluates HTTPS, TLS certificate status and public response headers such as HSTS, CSP, X-Content-Type-Options, frame protections, Referrer-Policy and Permissions-Policy. A high score is not a penetration test or vulnerability guarantee.</p>
              </div>
            </div>
          </div>

          {/* Interactive FAQ Section */}
          <div className="bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800/90 rounded-2xl p-7 sm:p-8 space-y-6 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 dark:bg-amber-950/80 dark:border-amber-500/30 dark:text-amber-400">
                <HelpCircle className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#26364a] dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FAQ_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-stone-200/80 dark:border-slate-800 bg-stone-50/50 dark:bg-slate-950/50 space-y-1.5"
                >
                  <h3 className="text-xs sm:text-sm font-bold text-[#26364a] dark:text-slate-200">
                    {item.q}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-slate-400 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
