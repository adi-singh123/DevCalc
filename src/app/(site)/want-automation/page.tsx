import type { Metadata } from "next";
import Link from "next/link";
import InteractiveFaq from "@/src/components/common/InteractiveFaq";
import {
  Bot,
  Terminal,
  PhoneCall,
  MessageSquare,
  Sparkles,
  FileSpreadsheet,
  Globe,
  ShieldCheck,
  Zap,
  Clock,
  Code2,
  Workflow,
  Check,
  IndianRupee,
  Server,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website, Automation & Custom Software Development",
  description:
    "Production-ready websites, browser automation and custom business software in India. Transparent code-only pricing, SEO foundations and source-code delivery.",
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
    "website development services India",
    "custom software development India",
    "business website developer",
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
    title: "Website, Automation & Custom Software Development | DevCalc",
    description:
      "Get production-ready website code, workflow automation or custom business software with transparent starting prices and source-code delivery.",
    url: "https://www.devcalc.in/want-automation",
    siteName: "DevCalc",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "DevCalc website, automation and software development services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website, Automation & Software Development | DevCalc",
    description:
      "Production-ready websites, automation and custom software with clear code-only pricing.",
    images: ["/logo.png"],
  },
};

const AUTOMATION_TYPES = [
  {
    icon: Globe,
    title: "Business, Portfolio & Service Websites",
    tools: "Next.js, React, TypeScript, Tailwind CSS, CMS",
    desc: "Responsive websites for companies, professionals, agencies, restaurants, schools, clinics and local services, with clear navigation, enquiry forms, editable content and search-friendly HTML.",
  },
  {
    icon: IndianRupee,
    title: "E-commerce & Online Stores",
    tools: "Product catalogue, cart, checkout, payment gateway, order management",
    desc: "Custom storefronts for physical or digital products, including categories, search, cart, approved payment integration, order tracking and an admin workflow matched to your business.",
  },
  {
    icon: Code2,
    title: "Web Apps, Portals & Marketplaces",
    tools: "Next.js, Node.js, APIs, Turso, PostgreSQL, role-based access",
    desc: "Customer portals, booking systems, dashboards, directories, marketplaces, subscription products and internal tools built around your actual workflow and user roles.",
  },
  {
    icon: Globe,
    title: "Web Scraping & Data Extraction",
    tools: "Python, BeautifulSoup4, Scrapy, Selenium, Playwright, Puppeteer",
    desc: "Extract permitted structured data from public pages and authorized business systems using rate limits, documented APIs, and site-compliant collection workflows.",
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
    title: "Reliable, Responsible Automation",
    desc: "Automatic retries, rate limiting, audit logs, and documented API integrations keep authorized workflows reliable without bypassing access controls.",
  },
  {
    icon: Code2,
    title: "1-Click Execution Setup",
    desc: "Delivered as a simple single-click executable (.exe), desktop shortcut, or scheduled background task with zero setup headaches.",
  },
];

const PRICING = [
  {
    name: "Starter Website",
    price: "₹4,999",
    note: "starting price",
    description: "For a professional local-business, portfolio or service website.",
    delivery: "Usually 7-12 business days",
    features: [
      "Up to 5 responsive pages",
      "Contact and WhatsApp actions",
      "On-page SEO foundations",
      "Performance and mobile checks",
      "Production-ready source code",
    ],
  },
  {
    name: "Business Website",
    price: "₹9,999",
    note: "starting price",
    description: "For a focused business website with editable content and standard integrations.",
    delivery: "Usually 2-4 weeks",
    featured: true,
    features: [
      "Up to 10 tailored pages",
      "Basic CMS or database-backed content",
      "Forms and approved API integration",
      "Technical SEO and structured data",
      "Deployment assistance and handover",
    ],
  },
  {
    name: "Workflow Automation",
    price: "₹4,999",
    note: "starting price",
    description: "For one clearly defined browser, spreadsheet, reporting or API workflow.",
    delivery: "Usually 5-12 business days",
    features: [
      "One scoped automated workflow",
      "Retries, logs and error handling",
      "CSV, Excel, JSON or database output",
      "Run guide or one-click launcher",
      "Authorized systems and public data only",
    ],
  },
  {
    name: "E-commerce Website",
    price: "₹14,999",
    note: "starting price",
    description: "For a basic online store with catalogue, cart and one payment integration.",
    delivery: "Usually 3-6 weeks",
    features: [
      "Responsive product catalogue",
      "Search, cart and checkout flow",
      "One approved payment gateway",
      "Basic order-management workflow",
      "Technical SEO and analytics setup",
    ],
  },
  {
    name: "Custom Software / Web App",
    price: "₹24,999",
    note: "starting price",
    description: "For a focused first version of a dashboard, portal, internal tool or SaaS MVP.",
    delivery: "Usually 4-10+ weeks",
    features: [
      "Responsive frontend and backend",
      "Database and role-based access",
      "Core API integrations",
      "Testing and deployment documentation",
      "Source code and technical handover",
    ],
  },
];

const FAQS = [
  {
    q: "What kinds of websites can you develop?",
    a: "We can build business and service websites, portfolios, blogs, landing pages, restaurant and clinic sites, school websites, e-commerce stores, booking systems, directories, customer portals, dashboards, marketplaces and focused SaaS or custom web-application MVPs. The final scope depends on the required pages, user roles, data and integrations.",
  },
  {
    q: "What types of automation tasks and web scraping can you build?",
    a: "We can automate virtually any manual or repetitive computer workflow: e-commerce product price monitoring, real estate lead generation, job directory scrapers, automated PDF/invoice generation, portal logins and automated form filling, bulk email/WhatsApp dispatching, Excel to database syncing, and automated regression testing suites.",
  },
  {
    q: "Which automation tools, languages, and frameworks do you use?",
    a: "We build custom scripts using Playwright, Selenium WebDriver, Puppeteer, BeautifulSoup4 (bs4), Scrapy, Python, Node.js, TypeScript, Pandas, Docker, and Chrome DevTools Protocol. We select the fastest, most reliable engine for your specific target site.",
  },
  {
    q: "Can you automate websites with logins or protected areas?",
    a: "Yes, when you own the system or have explicit permission to automate it. We use official APIs, customer-provided test accounts, documented authentication, sensible rate limits, and human approval for CAPTCHA or other access-control steps. We do not bypass security controls or automate unauthorized access.",
  },
  {
    q: "How will I run the automation script if I don't have coding experience?",
    a: "We package the solution into a standalone 1-click executable (.exe for Windows or .sh script for Mac/Linux) or a lightweight Docker container. You simply double-click the file to execute the job, or we can configure Windows Task Scheduler / Cron to run it automatically on your schedule.",
  },
  {
    q: "Can you deploy the automation to run 24/7 in the cloud?",
    a: "Yes. We can configure deployment to a suitable cloud or VPS account with scheduled jobs and notifications. Cloud hosting, messaging-provider fees and other third-party charges are paid separately by the client.",
  },
  {
    q: "Why should I choose custom code over Zapier, Make, or other no-code tools?",
    a: "Custom code can be a better fit when a workflow needs specific logic, ownership or fewer platform limits. It can still have operating costs for servers, APIs, proxies, email, messaging or maintenance, so we explain those separately before work begins.",
  },
  {
    q: "What is the typical turnaround time for an automation project?",
    a: "A small, clearly defined automation normally takes 5-12 business days. Integrations, dashboards, large data pipelines and workflows requiring extensive testing take longer. The written proposal confirms the schedule after requirements are reviewed.",
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
    a: "Project information is handled confidentially and an NDA can be agreed before sensitive access is shared. Clients should provide least-privilege test credentials and rotate them after handover.",
  },
  {
    q: "Are domain registration and hosting included in these prices?",
    a: "No. The displayed prices cover agreed design and production-ready development code only. You purchase and own the domain, hosting, cloud account, email service and any paid third-party subscriptions. We can recommend suitable options and assist with deployment.",
  },
  {
    q: "Are the displayed prices fixed quotations?",
    a: "They are starting prices for clearly defined standard scopes. The final fixed quotation depends on pages, user roles, integrations, data migration, content, security requirements and delivery schedule. Work starts only after you approve the scope, price and milestones.",
  },
  {
    q: "Will I receive the complete source code?",
    a: "Yes. After final payment, you receive the source code created for the agreed project, setup instructions and relevant technical documentation. Licensed third-party packages, external services and client-owned assets remain subject to their own terms.",
  },
  {
    q: "Does a website package include SEO?",
    a: "Website packages include technical and on-page SEO foundations such as semantic HTML, one clear H1, metadata, canonical URLs, sitemap support, robots directives, structured data where appropriate, mobile usability and performance checks. Search rankings and traffic cannot be guaranteed.",
  },
  {
    q: "Who provides the website text, logo, images and legal policies?",
    a: "The client normally provides approved business facts, branding, images and legal text. We can structure and edit supplied content, but professional copywriting, photography, logo design and legal drafting are separate services unless included in the written proposal.",
  },
  {
    q: "How do payments and project milestones work?",
    a: "A typical fixed-scope project uses an advance to reserve development time, a review milestone and final payment before source-code handover or production launch. The exact percentage, deliverables and acceptance criteria are written in the proposal.",
  },
  {
    q: "How many revisions are included?",
    a: "Standard packages include two reasonable revision rounds within the approved scope. New pages, features, integrations or redesigns requested after approval are estimated separately before implementation.",
  },
  {
    q: "What support is included after delivery?",
    a: "A short defect-support period for the agreed features is included in the project proposal. New features, third-party changes, content updates and ongoing monitoring can be covered by a separate maintenance plan.",
  },
  {
    q: "Can you improve or repair an existing website or software project?",
    a: "Yes, after a code and infrastructure review. We first identify the framework, deployment setup, security risks and technical debt, then provide a scoped quotation. Access to the repository and a safe test environment may be required.",
  },
  {
    q: "Can you guarantee Google rankings, uninterrupted automation or permanent compatibility?",
    a: "No responsible provider can guarantee rankings or permanent compatibility with changing websites and third-party APIs. We build sound SEO foundations, monitoring, retries and maintainable code, then explain ongoing risks and maintenance options clearly.",
  },
];

export default function WantAutomationPage() {
  const phoneNumber = "8081158775";
  const whatsappUrl = `https://wa.me/918081158775?text=${encodeURIComponent(
    "Hi Aditya, I need help with a website, automation or custom software project. Please share pricing after reviewing my requirements."
  )}`;

  // JSON-LD Structured Data for Google Rich Snippets
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DevCalc Website, Automation and Custom Software Development",
    description:
      "Production-ready website development, authorized workflow automation and custom business software with source-code delivery in India.",
    url: "https://www.devcalc.in/want-automation",
    telephone: "+918081158775",
    priceRange: "₹4,999-₹24,999+",
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Development services",
      itemListElement: PRICING.map((plan) => ({
        "@type": "Offer",
        priceCurrency: "INR",
        price: plan.price.replace(/[^0-9]/g, ""),
        description: `${plan.name}: ${plan.description} Domain, hosting and paid third-party services are excluded.`,
        itemOffered: { "@type": "Service", name: plan.name },
      })),
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
        name: "Development Services",
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
              Development Services
            </span>
          </nav>
        </div>

        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden border-b border-stone-200 bg-gradient-to-b from-[#f3ece0] to-[#faf7f0] px-4 py-12 sm:px-6 lg:px-8 lg:py-20 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur dark:border-blue-900/50 dark:bg-blue-950/50 dark:text-blue-300">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>Websites · E-commerce · Automation · Custom Software</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-slate-900 dark:text-white">
              Build Your Website, Automation or{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                Custom Software
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Get maintainable, production-ready code for business websites, e-commerce stores, web applications and authorized workflow automation. We design, develop, test and document solutions using{" "}
              <strong className="font-semibold text-slate-900 dark:text-white">
                Next.js, React, Node.js, Python and Playwright
              </strong>{" "}
              for businesses, startups and independent professionals.
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
                "Next.js",
                "React",
                "E-commerce",
                "Payment APIs",
                "Selenium",
                "Playwright",
                "Puppeteer",
                "BeautifulSoup4",
                "Python Automation",
                "Scrapy",
                "Excel/Sheets API",
                "Authorized API Access",
                "Automated QA",
              ].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-stone-200 bg-white/80 px-3.5 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Automation Categories ── */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
              What We Build
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Websites, E-commerce, Automation and Software
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
              From a polished business website to a database-backed platform, we define the scope and deliver maintainable production code.
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

        <section id="pricing" className="border-y border-stone-200 bg-white px-4 py-16 sm:px-6 lg:px-8 dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
                <IndianRupee className="h-3.5 w-3.5" /> Transparent starting prices
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Production-ready development packages
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
                These are realistic starting prices for a clearly defined scope—not misleading fixed prices for every project. Your written quotation will list the exact features, milestones, delivery time and total development cost.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {PRICING.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative flex h-full flex-col rounded-2xl border p-6 shadow-sm ${plan.featured ? "border-blue-500 bg-blue-50/50 ring-2 ring-blue-100 dark:bg-blue-950/20 dark:ring-blue-950" : "border-stone-200 bg-[#faf7f0] dark:border-slate-800 dark:bg-slate-900"}`}
                >
                  {plan.featured && (
                    <span className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">Popular</span>
                  )}
                  <h3 className="pr-20 text-xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="text-3xl font-extrabold text-[#1f3a5c] dark:text-blue-300">{plan.price}</span>
                    <span className="pb-1 text-xs text-slate-500">{plan.note}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{plan.description}</p>
                  <p className="mt-3 text-sm font-semibold text-blue-700 dark:text-blue-300">{plan.delivery}</p>
                  <ul className="mt-5 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-6 rounded-xl bg-[#1f3a5c] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#162a43] dark:bg-blue-600 dark:hover:bg-blue-500">
                    Discuss this package
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-4 rounded-2xl border border-amber-300 bg-amber-50 p-6 md:grid-cols-[auto_1fr] dark:border-amber-900 dark:bg-amber-950/30">
              <Server className="h-7 w-7 text-amber-700 dark:text-amber-400" />
              <div>
                <h3 className="font-bold text-amber-950 dark:text-amber-100">Domain, server and paid services are not included</h3>
                <p className="mt-2 text-sm leading-relaxed text-amber-900/80 dark:text-amber-200/80">
                  Package prices cover the agreed production-ready code. You must purchase and own the domain, hosting or cloud account, business email, payment-gateway account and any paid API, plugin, messaging, storage or third-party subscription. We can recommend options and help configure deployment.
                </p>
              </div>
            </div>

            <p className="mt-6 text-center text-sm font-medium text-slate-700 dark:text-slate-300">
              Need a detailed quotation, a custom feature or a project discount? Contact the team with your requirements for exact pricing.
            </p>
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
                We select a maintainable stack based on your users, workflow, integrations, deployment needs and approved access constraints.
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
              Ready to Build Your Digital Product?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-blue-100 leading-relaxed">
              Tell us whether you need a website, e-commerce store, automation, portal or custom software. We will review the scope and provide an exact quotation, timeline and delivery plan.
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
              Production-ready code · Clear project scope · Documentation · Domain and hosting purchased separately
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
