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
  title: "Website X-Ray — Technology Stack, CMS, API & Hosting Detector",
  description:
    "Free online Website X-Ray scanner. Discover frontend frameworks, CMS, CDN, DNS records, public APIs, SSL certificates, passive security headers, and SEO metrics instantly.",
  keywords: [
    "website xray",
    "website tech stack detector",
    "cms detector",
    "what technology is this site using",
    "framework detector",
    "dns lookup tool",
    "security headers checker",
    "api discovery tool",
    "devcalc website xray",
  ],
  alternates: {
    canonical: "https://www.devcalc.in/website-x-ray",
  },
  openGraph: {
    title: "Website X-Ray — Technology Stack, CMS, API & Hosting Detector | DevCalc",
    description:
      "Deep technical intelligence tool to scan observable frontend frameworks, infrastructure, APIs, and passive security headers on any public website.",
    url: "https://www.devcalc.in/website-x-ray",
    siteName: "DevCalc",
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    q: "How does Website X-Ray detect frameworks and technologies?",
    a: "Website X-Ray performs non-invasive, passive DOM inspection, script AST signature analysis, and HTTP header auditing. It inspects HTML root attributes (e.g. data-reactroot, __NEXT_DATA__, __NUXT__, ng-version), script bundle patterns, atomic CSS class styles (e.g. Tailwind), and response headers to identify technologies with deterministic confidence scores.",
  },
  {
    q: "Does Website X-Ray perform active security penetration testing?",
    a: "No. Website X-Ray is strictly a passive, non-intrusive inspector. It checks observable public HTTP headers (like HSTS, Content-Security-Policy, X-Frame-Options) and TLS certificate metadata. It never injects payloads, runs exploits, or stresses target infrastructure.",
  },
  {
    q: "How does the DevCalc X-Ray Score get calculated?",
    a: "The score (0-100 and grade A+ to F) is a deterministic weighted composite of four key pillars: Security Posture (30%), Modern Tech Architecture (25%), SEO & Meta Readiness (25%), and Response Latency/TTFB (20%).",
  },
  {
    q: "Are private IPs and localhost addresses supported?",
    a: "No. To protect infrastructure integrity, Website X-Ray enforces strict SSRF defense filters that reject loopback addresses (127.0.0.1, ::1), RFC 1918 private subnets (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16), and cloud metadata endpoints (169.254.169.254).",
  },
  {
    q: "Why are some API headers marked [REDACTED]?",
    a: "For user and server privacy, any observed authorization tokens, Bearer keys, sensitive cookies, or password fields in discovered endpoints are automatically sanitized and redacted before presentation.",
  },
];

export default function WebsiteXRayPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Website X-Ray",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        description:
          "Analyze website tech stacks, frameworks, CMS, DNS records, SSL certificates, APIs, and security headers.",
        url: "https://www.devcalc.in/website-x-ray",
        author: {
          "@type": "Organization",
          name: "DevCalc",
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
    ],
  };

  return (
    <main className="min-h-screen bg-[#faf7f0] dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            Inspect the complete anatomy of any website. Instantly detect frontend frameworks, CMS, CDN routing, TLS certificate health, observable API endpoints, and passive security headers.
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
                Identifies Next.js, React, Vue, Svelte, Angular, Astro, Tailwind CSS, Bootstrap, WordPress, Shopify, Express, and runtime libraries with explicit confidence ratings and DOM evidence trails.
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
                Traces authoritative nameservers, IPv4/IPv6 addresses, cloud hosts (Vercel, AWS, GCP, Netlify), and edge CDNs (Cloudflare, CloudFront, Fastly) with TTFB latency measurements.
              </p>
            </div>
          </div>

          {/* Technical Guide Section */}
          <div className="bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800/90 rounded-2xl p-7 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-[#26364a] dark:text-white">
              Understanding Web Architecture Detection
            </h2>
            <div className="space-y-3.5 text-xs sm:text-sm text-stone-600 dark:text-slate-300 leading-relaxed">
              <p>
                Modern web applications are distributed across multiple layers—from DNS edge routing and Content Delivery Networks (CDNs) to frontend Single Page Application (SPA) client hydrators and backend microservices.
              </p>
              <p>
                <strong>How Detection Works:</strong> When you input a URL into Website X-Ray, the engine initiates a multi-stage passive scan. First, DNS lookups resolve authoritative nameservers and routing endpoints. Concurrently, a secure HTTP client establishes a TLS socket, recording cipher negotiation and certificate validity. The engine then parses response headers (such as <code className="text-indigo-700 dark:text-indigo-300 bg-stone-100 dark:bg-slate-950 px-1.5 py-0.5 rounded font-mono text-xs border border-stone-200 dark:border-slate-800">cf-ray</code>, <code className="text-indigo-700 dark:text-indigo-300 bg-stone-100 dark:bg-slate-950 px-1.5 py-0.5 rounded font-mono text-xs border border-stone-200 dark:border-slate-800">x-vercel-id</code>, and security policies) and inspects DOM bundle signatures to construct a detailed architectural profile.
              </p>
              <p>
                <strong>Security and Privacy Assurance:</strong> All scans conducted via Website X-Ray are strictly passive and read-only. Authentication headers and user cookies are automatically redacted to ensure absolute security for audited domains.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800/90 rounded-2xl p-7 sm:p-8 space-y-6 shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 dark:bg-indigo-950 dark:border-indigo-500/40 dark:text-indigo-400">
                <HelpCircle className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#26364a] dark:text-white">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-3.5">
              {FAQ_ITEMS.map((item, idx) => (
                <div key={idx} className="bg-stone-50 dark:bg-slate-950/70 border border-stone-200 dark:border-slate-800/90 rounded-xl p-5 space-y-2">
                  <h3 className="text-sm sm:text-base font-semibold text-[#26364a] dark:text-slate-100">{item.q}</h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-400 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
