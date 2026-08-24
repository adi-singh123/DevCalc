import type { Metadata } from "next";
import Link from "next/link";
import InteractiveFaq from "@/src/components/common/InteractiveFaq";
import {
  Bot,
  Terminal,
  Cpu,
  Layers,
  PhoneCall,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  FileSpreadsheet,
  Globe,
  Database,
  ShieldCheck,
  Zap,
  Clock,
  Code2,
  Workflow,
  HelpCircle,
  BarChart3,
  Search,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Automation & Web Scraping Services | DevCalc",
  description:
    "Automate any repetitive workflow, web scraping, or testing task with custom Selenium, Playwright, Puppeteer, and Python scripts. Fast 24-48h delivery for businesses & students. Call/WhatsApp: 8081158775.",
  keywords: [
    "custom automation services",
    "web scraping services",
    "selenium automation developer",
    "playwright automation script",
    "puppeteer bot development",
    "beautifulsoup python scraping",
    "excel google sheets automation",
    "data extraction services",
    "qa automated testing",
    "whatsapp bot automation",
    "browser automation developer india",
  ],
  alternates: {
    canonical: "https://www.devcalc.in/want-automation",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Custom Automation & Web Scraping Services | Playwright & Selenium",
    description:
      "Automate repetitive tasks, web scraping, and QA testing with custom Python & Playwright scripts. 24-48h turnaround. Call/WhatsApp: 8081158775.",
    url: "https://www.devcalc.in/want-automation",
    siteName: "DevCalc",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "DevCalc Automation & Web Scraping Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Automation & Web Scraping Services | DevCalc",
    description:
      "Automate any repetitive workflow with custom Playwright, Selenium & Python scripts. Call/WhatsApp: 8081158775.",
    images: ["/logo.png"],
  },
};

const AUTOMATION_TYPES = [
  {
    icon: Globe,
    title: "Web Scraping & Data Extraction",
    tools: "Python, BeautifulSoup4, Scrapy, Selenium, Playwright, Puppeteer",
    desc: "Extract large-scale structured data from e-commerce sites, real estate portals, job boards, business directories, and social platforms with anti-bot bypass & proxy rotation.",
  },
  {
    icon: Bot,
    title: "Browser Automation & Web Bots",
    tools: "Selenium, Playwright, Puppeteer, Chrome DevTools Protocol",
    desc: "Automate repetitive browser tasks like automatic form submissions, multi-step portal logins, ticket booking, web-based reporting, and automated downloads.",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel, Google Sheets & PDF Automation",
    tools: "Pandas, OpenPyXL, Google Sheets API, ReportLab, PDFPlumber",
    desc: "Transform messy spreadsheets, automate invoice & report generation, merge thousands of PDFs, and synchronize data between databases and Google Sheets.",
  },
  {
    icon: Workflow,
    title: "API & Backend Workflow Automation",
    tools: "FastAPI, Express.js, Webhooks, Cron Jobs, Serverless Lambda, Docker",
    desc: "Connect disparate software, sync CRM databases, trigger automated email/SMS alerts, and automate payment reconciliation pipelines without human intervention.",
  },
  {
    icon: MessageSquare,
    title: "Chatbots & Social Messaging Bots",
    tools: "WhatsApp Cloud API, Telegram Bot API, Twilio, Discord Bots",
    desc: "Build automated customer response systems, order status notifications, daily summary broadcasts, and interactive survey bots.",
  },
  {
    icon: Terminal,
    title: "QA & Automated End-to-End Testing",
    tools: "Playwright, Cypress, Selenium Grid, GitHub Actions CI/CD",
    desc: "Robust automated test suites for web applications verifying UI stability, regression testing, and API health across multiple browsers.",
  },
];

const TOOLS = [
  { name: "Playwright", category: "Fast Modern Browser Automation" },
  { name: "Selenium WebDriver", category: "Cross-Browser & Legacy Support" },
  { name: "Puppeteer", category: "Headless Chrome & PDF Gen" },
  { name: "BeautifulSoup4 (bs4)", category: "Fast HTML/XML Parsing" },
  { name: "Scrapy", category: "High-Throughput Scraping Framework" },
  { name: "Python / Pandas", category: "Data Wrangling & Analytics" },
  { name: "Node.js / TypeScript", category: "Event-Driven Automation" },
  { name: "Docker & Cloud Crons", category: "24/7 Unattended Scheduling" },
];

const WHY_US = [
  {
    icon: Zap,
    title: "Custom Code over Bloated No-Code Tools",
    desc: "No recurring Zapier/Make subscription limits. You own 100% of the clean, lightweight scripts running directly on your machine or server.",
  },
  {
    icon: Clock,
    title: "Fast 24-48 Hour Turnaround",
    desc: "Most scraping scripts and browser automation workflows are delivered and ready to run within 1 to 2 business days.",
  },
  {
    icon: ShieldCheck,
    title: "Built-in Anti-Bot & Error Resilience",
    desc: "Automatic retry mechanics, CAPTCHA integration, user-agent randomization, and robust error logging to ensure continuous reliability.",
  },
  {
    icon: Code2,
    title: "1-Click Execution Setup",
    desc: "Delivered as a simple single-click executable (.exe), desktop shortcut, or scheduled background task with zero setup headaches.",
  },
];

const FAQS = [
  {
    q: "What types of automation tasks and web scraping can you build?",
    a: "We can automate virtually any manual or repetitive computer workflow: e-commerce product price monitoring, real estate lead generation, job directory scrapers, automated PDF/invoice generation, portal logins and automated form filling, bulk email/WhatsApp dispatching, Excel to database syncing, and automated regression testing suites.",
  },
  {
    q: "Which automation tools, languages, and frameworks do you use?",
    a: "We build custom scripts using Playwright, Selenium WebDriver, Puppeteer, BeautifulSoup4 (bs4), Scrapy, Python, Node.js, TypeScript, Pandas, Docker, and Chrome DevTools Protocol. We select the fastest, most reliable engine for your specific target site.",
  },
  {
    q: "Can you handle complex websites with logins, Cloudflare, or CAPTCHA?",
    a: "Yes! We implement stealth browser headers, browser fingerprint masking, rotating residential/datacenter proxies, persistent session cookies/local storage, and third-party CAPTCHA solver integrations to bypass anti-bot shields reliably.",
  },
  {
    q: "How will I run the automation script if I don't have coding experience?",
    a: "We package the solution into a standalone 1-click executable (.exe for Windows or .sh script for Mac/Linux) or a lightweight Docker container. You simply double-click the file to execute the job, or we can configure Windows Task Scheduler / Cron to run it automatically on your schedule.",
  },
  {
    q: "Can you deploy the automation to run 24/7 in the cloud?",
    a: "Absolutely. We can deploy your script to cloud platforms such as AWS Lambda, Google Cloud Functions, Render, or a low-cost VPS with scheduled crons and automated notifications (Email, WhatsApp, Telegram, or Slack) upon task completion.",
  },
  {
    q: "Why should I choose custom code over Zapier, Make, or other no-code tools?",
    a: "No-code platforms charge high recurring monthly subscriptions, impose harsh task limits, and run into paywalls for complex multi-step workflows. With our custom code, you pay once, own the script 100% forever, execute unlimited tasks at 10x faster speed, and pay zero monthly fees.",
  },
  {
    q: "What is the typical turnaround time for an automation project?",
    a: "Standard web scraping and browser automation tasks are typically completed and delivered within 24 to 48 hours. Enterprise-scale data extraction pipelines and complex bots usually take 3 to 5 business days.",
  },
  {
    q: "What output formats can you export extracted data into?",
    a: "We can output clean, structured data into Excel (.xlsx), CSV, JSON, Google Sheets (live sync via API), PostgreSQL, MySQL, MongoDB, or directly push records to your CRM via REST APIs.",
  },
  {
    q: "Do you provide maintenance if the target website updates its layout?",
    a: "Yes! Websites occasionally modify their HTML structure or CSS class names. We offer post-delivery support and quick maintenance updates to keep your scripts running smoothly.",
  },
  {
    q: "Is my business data and scraping workflow kept confidential?",
    a: "Yes, 100%. We adhere to strict client confidentiality standards and are happy to sign a Non-Disclosure Agreement (NDA) for sensitive business workflows and proprietary data extraction tasks.",
  },
];

export default function WantAutomationPage() {
  const phoneNumber = "8081158775";
  const whatsappUrl = `https://wa.me/918081158775?text=${encodeURIComponent(
    "Hi Aditya, I am looking for custom automation / web scraping services. Can we discuss my requirements?"
  )}`;

  // JSON-LD Structured Data for Google Rich Snippets
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DevCalc Custom Automation & Web Scraping Services",
    description:
      "Custom browser automation, web scraping, and workflow automation services using Playwright, Selenium, BeautifulSoup, and Python.",
    url: "https://www.devcalc.in/want-automation",
    telephone: "+918081158775",
    priceRange: "₹₹",
    image: "https://www.devcalc.in/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "76, Pali, Gothawan",
      addressLocality: "Jaunpur",
      addressRegion: "Uttar Pradesh",
      postalCode: "222162",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.7464",
      longitude: "82.6837",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "23:00",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.devcalc.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Automation Services",
        item: "https://www.devcalc.in/want-automation",
      },
    ],
  };

  return (
    <>
      {/* Structured Data Scripts for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-[#faf7f0] dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        {/* ── Breadcrumb Navigation ── */}
        <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex text-sm text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-800 dark:text-slate-200 font-medium">
              Automation &amp; Scraping
            </span>
          </nav>
        </div>

        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden border-b border-stone-200 bg-gradient-to-b from-[#f3ece0] to-[#faf7f0] px-4 py-12 sm:px-6 lg:px-8 lg:py-20 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur dark:border-blue-900/50 dark:bg-blue-950/50 dark:text-blue-300">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>Custom Automation · Web Scraping · Selenium · Playwright · Python</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-slate-900 dark:text-white">
              Automate Any Repetitive Task with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                Custom Scripts
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Stop wasting manual hours on repetitive browser clicks, copy-pasting, data entry, and manual scraping. We build rock-solid, automated scripts using{" "}
              <strong className="font-semibold text-slate-900 dark:text-white">
                Playwright, Selenium, BeautifulSoup, and Python
              </strong>{" "}
              for businesses, startups, and students.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-7 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-emerald-700 active:scale-95 sm:w-auto dark:bg-emerald-600 dark:hover:bg-emerald-500"
              >
                <MessageSquare className="h-5 w-5" />
                <span>WhatsApp: {phoneNumber}</span>
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#1f3a5c] px-7 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-[#162a43] active:scale-95 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-500"
              >
                <PhoneCall className="h-5 w-5" />
                <span>Call Us: {phoneNumber}</span>
              </a>
            </div>

            {/* Tech stack badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
              {[
                "Selenium",
                "Playwright",
                "Puppeteer",
                "BeautifulSoup4",
                "Python Automation",
                "Scrapy",
                "Excel/Sheets API",
                "Cloudflare Bypass",
                "Automated QA",
              ].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-stone-200 bg-white/80 px-3.5 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                >
                  ⚡ {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Automation Categories ── */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
              What We Automate
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Custom Automation Services Tailored to Your Needs
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
              From single-task desktop scripts to scalable enterprise scrapers, we handle every automation layer.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AUTOMATION_TYPES.map((a) => {
              const IconComp = a.icon;
              return (
                <div
                  key={a.title}
                  className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-blue-600 dark:text-blue-400">
                    {a.tools}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {a.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Why Choose Custom Automation ── */}
        <section className="border-t border-stone-200 bg-[#f4eee2] px-4 py-16 sm:px-6 lg:px-8 dark:border-slate-800 dark:bg-slate-900/50">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
                Why Custom Scripts
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Why Custom Code Beats Generic No-Code Platforms
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
                Save thousands on monthly subscription fees while getting faster execution and zero task limits.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {WHY_US.map((w) => {
                const IconComp = w.icon;
                return (
                  <div
                    key={w.title}
                    className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-bold text-slate-900 dark:text-white">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {w.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Tools & Technologies Breakdown ── */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center">
            <span className="rounded-full bg-amber-100 px-3.5 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-900/50 dark:text-amber-300">
              Tech Stack
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Core Automation Engines We Use
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
              We pick the exact tool that guarantees maximum speed and zero detection.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TOOLS.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="font-bold text-slate-900 dark:text-white">{t.name}</p>
                <p className="mt-1 text-xs text-slate-500">{t.category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Interactive FAQs Section ── */}
        <section className="border-t border-stone-200 bg-[#f4eee2] px-4 py-16 sm:px-6 lg:px-8 dark:border-slate-800 dark:bg-slate-900/50">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                Got Questions?
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Detailed answers to common questions about our custom automation &amp; web scraping solutions.
              </p>
            </div>

            <InteractiveFaq faqs={FAQS} />
          </div>
        </section>

        {/* ── Bottom Call To Action ── */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-900 to-indigo-950 p-8 text-center text-white shadow-xl sm:p-12 dark:border-slate-800">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Have a Workflow You Want to Automate?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-blue-100 leading-relaxed">
              Tell us about your manual task. We will provide a custom automation solution that runs seamlessly and saves you hours every week.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-8 py-3.5 font-bold text-white shadow-lg transition hover:bg-emerald-600 active:scale-95 sm:w-auto"
              >
                <MessageSquare className="h-5 w-5" />
                <span>WhatsApp Us: {phoneNumber}</span>
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 font-bold text-slate-900 shadow-lg transition hover:bg-slate-100 active:scale-95 sm:w-auto"
              >
                <PhoneCall className="h-5 w-5 text-blue-600" />
                <span>Call: {phoneNumber}</span>
              </a>
            </div>

            <p className="mt-6 text-xs text-blue-200">
              Fast turnaround · Custom tailored code · Full execution documentation · 100% Confidential
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
