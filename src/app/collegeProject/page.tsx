import type { Metadata } from "next";
import Link from "next/link";
import InteractiveFaq from "@/src/components/common/InteractiveFaq";
import {
  Code2,
  Clock,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Layers,
  Cpu,
  Database,
  Globe,
  Smartphone,
  BrainCircuit,
  Zap,
  BookOpen,
  FileCode,
  Laptop,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software Builds for Students — Web, AI/ML, Mobile & Cloud",
  description:
    "Custom software development service for students. Web applications, AI/ML models, mobile apps, and cloud systems with a working prototype delivered within 24 hours. Call/WhatsApp: 8081158775.",
  keywords: [
    "custom software builds for students",
    "student software development service",
    "web app development for students",
    "ai ml student software projects",
    "mobile app development student projects",
    "full stack student software builds",
    "custom software prototype in 24 hours",
    "python student software development",
    "react nextjs custom software builds",
    "custom software engineering for students",
  ],
  alternates: {
    canonical: "https://www.devcalc.in/college-project",
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
    title: "Custom Software Builds for Students — Web, AI/ML, Mobile & Cloud",
    description:
      "Custom software development service for students across Web, AI/ML, Mobile, and Cloud. Review a working prototype within 24 hours. Call/WhatsApp: 8081158775.",
    url: "https://www.devcalc.in/college-project",
    siteName: "DevCalc",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "DevCalc Custom Software Builds for Students",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Builds for Students | 24h Prototype",
    description:
      "Get custom-built software across Web, AI/ML, Mobile, and Cloud with a working prototype delivered in 24 hours. Call/WhatsApp: 8081158775.",
    images: ["/logo.png"],
  },
};

const DOMAINS = [
  {
    icon: Globe,
    title: "Full-Stack Web Applications",
    tech: "React, Next.js, MERN Stack, Node.js, Django, FastAPI, Spring Boot, PHP/Laravel",
    desc: "Production-grade web apps with authentication, admin dashboards, analytics panels, payment integrations, and role-based access control.",
  },
  {
    icon: BrainCircuit,
    title: "AI, Machine Learning & Data Science",
    tech: "Python, PyTorch, TensorFlow, OpenCV, Scikit-learn, NLP, LLMs, Computer Vision",
    desc: "Deep learning pipelines, predictive modeling, image classification, recommendation engines, sentiment analysis, and generative AI integrations.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    tech: "Flutter, React Native, Android (Kotlin/Java), Firebase, REST APIs",
    desc: "Cross-platform and native mobile apps with real-time cloud database sync, geolocation, push notifications, and modern responsive UI.",
  },
  {
    icon: Database,
    title: "Database & Enterprise Systems",
    tech: "PostgreSQL, MongoDB, MySQL, Redis, AWS, Firebase, Docker, Microservices",
    desc: "Management portals, inventory systems, scheduling platforms, and scalable backend microservices architectures.",
  },
  {
    icon: Cpu,
    title: "IoT & Smart Hardware Interfacing",
    tech: "ESP32, Raspberry Pi, Arduino + Live Web Dashboards, MQTT, WebSockets",
    desc: "Connected telemetry, sensor data visualization, automated monitoring, and hardware-to-cloud data ingestion dashboards.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Blockchain",
    tech: "Solidity, Ethereum, Web3.js, Cryptography, Network Scanners, Security Tools",
    desc: "Decentralized applications (DApps), automated security scanners, packet analysis utilities, and cryptographic verification tools.",
  },
];

const WHAT_YOU_GET = [
  {
    icon: Code2,
    title: "100% Working, Clean Source Code",
    desc: "Well-structured, modular, and cleanly commented source code adhering to modern industry standards and clean architecture.",
  },
  {
    icon: Laptop,
    title: "Remote Installation & Environment Setup",
    desc: "Full local environment configuration on your machine via AnyDesk or Google Meet, ensuring smooth 1-click execution.",
  },
  {
    icon: FileCode,
    title: "Technical Documentation & Setup Guide",
    desc: "Comprehensive README documentation detailing local installation steps, environment variables, dependencies, and API endpoints.",
  },
  {
    icon: BookOpen,
    title: "1-on-1 Code Walkthrough Session",
    desc: "Live interactive session over Google Meet explaining the software architecture, data flow, and key functions line-by-line.",
  },
  {
    icon: Zap,
    title: "Post-Delivery Revisions & Tweaks",
    desc: "Prompt adjustments if you need UI refinements, database schema updates, or logic modifications after reviewing the software.",
  },
  {
    icon: ShieldCheck,
    title: "Full Code Ownership & Git Repository",
    desc: "Complete, unrestricted ownership of the codebase and repository to learn from, customize, extend, and deploy.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Share Your Software Requirements",
    desc: "Call or WhatsApp us on 8081158775 with your project scope, tech stack preferences, and desired features. If you are starting fresh, we can suggest viable architectural approaches.",
  },
  {
    step: "02",
    title: "Review Working Prototype in 24 Hours",
    desc: "We build and demonstrate a foundational working prototype of your application within 24 hours — zero upfront payment required.",
  },
  {
    step: "03",
    title: "Review Demo & Finalize Scope",
    desc: "Review the working demo video or live screen share, request any UI or logic adjustments, and finalize transparent, student-friendly pricing.",
  },
  {
    step: "04",
    title: "Complete Code Delivery & Setup",
    desc: "Receive the full codebase with documentation, and get live remote setup support to run and test everything on your machine.",
  },
];

const FAQS = [
  {
    q: "How does the 24-Hour Prototype work?",
    a: "Once you share your software requirements with us on WhatsApp or phone (8081158775), we immediately begin developing a foundational prototype. Within 24 hours, we share a recorded video demo or host a live Google Meet screen share of the working application. This lets you inspect the architecture, user interface, and features firsthand before making any payment commitment.",
  },
  {
    q: "What software domains and tech stacks do you build with?",
    a: "We build across all modern development stacks: Full-Stack Web (React, Next.js, Node.js, Express, Django, FastAPI, Spring Boot, PHP/Laravel), Artificial Intelligence & Machine Learning (Computer Vision, NLP, PyTorch, TensorFlow, OpenCV, Generative AI), Mobile Apps (Flutter, React Native, Android), IoT Dashboards (ESP32, Raspberry Pi, Arduino with WebSockets/MQTT), Blockchain DApps (Solidity, Web3), and Cloud Databases (PostgreSQL, MongoDB, MySQL, Firebase).",
  },
  {
    q: "What does the delivered code package include?",
    a: "Every build includes the complete, clean source code repository, database schema files (with seed data), environment configuration templates (.env.example), and an exhaustive README guide detailing prerequisites, installation commands, and architecture diagrams.",
  },
  {
    q: "Will you help install and configure the software on my laptop?",
    a: "Yes, absolutely. We provide live remote assistance via AnyDesk or Google Meet to configure all required runtimes (Node.js, Python, database servers, Docker, VS Code) and environment variables directly on your system, testing the entire application end-to-end.",
  },
  {
    q: "Can you explain how the code works during a live call?",
    a: "Yes. We host a dedicated 1-on-1 code walkthrough on Google Meet where we explain the directory structure, data flow, API route handlers, and algorithm implementation step-by-step in clear, accessible language so you fully understand the application.",
  },
  {
    q: "What if I need modifications or extra features after delivery?",
    a: "We provide comprehensive post-delivery revision support. If you need UI adjustments, additional API endpoints, altered validation rules, or database tweaks after testing, we implement them promptly.",
  },
  {
    q: "Is the source code original, modular, and well-commented?",
    a: "Yes. Every application is built with clean, modular, and heavily commented code tailored to your exact specifications. We avoid bloated, hardcoded templates and follow industry best practices for separation of concerns.",
  },
  {
    q: "What are your pricing and payment terms?",
    a: "Our pricing is transparent, student-friendly, and based on project complexity and scope. You pay nothing upfront — payment is only discussed after you review and approve the working 24-hour prototype demonstration.",
  },
  {
    q: "Do I get full ownership of the source code?",
    a: "Yes. You receive 100% complete, unrestricted ownership of the source code and repository to learn from, modify, expand, or deploy on cloud platforms.",
  },
  {
    q: "How fast can you build a project if I have a tight timeline?",
    a: "For urgent timelines, we provide fast-track development within 24 to 48 hours for standard applications, including live demonstration and environment setup. Contact us on 8081158775 to verify current availability.",
  },
];

export default function CollegeProjectPage() {
  const phoneNumber = "8081158775";
  const whatsappUrl = `https://wa.me/918081158775?text=${encodeURIComponent(
    "Hi Aditya, I am looking for custom software development for my project. Can you help me with details and a 24-hour prototype?"
  )}`;

  // JSON-LD Structured Data for Google Rich Snippets
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DevCalc Custom Software Development for Students",
    description:
      "Custom software development service for students across Web, AI/ML, Mobile Apps, and Cloud with 24-hour prototype delivery, clean source code, and remote environment setup.",
    url: "https://www.devcalc.in/college-project",
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Custom Student Software Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Full-Stack Web Application Build",
            description:
              "End-to-end full stack web application with modern frontend, backend API, database, and setup support.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI / Machine Learning Software Development",
            description:
              "Custom machine learning models, computer vision pipelines, and predictive algorithms with clean code and walkthrough.",
          },
        },
      ],
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
        name: "Software Builds for Students",
        item: "https://www.devcalc.in/college-project",
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
              Software Builds for Students
            </span>
          </nav>
        </div>

        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden border-b border-stone-200 bg-gradient-to-b from-[#f3ece0] to-[#faf7f0] px-4 py-12 sm:px-6 lg:px-8 lg:py-20 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur dark:border-blue-900/50 dark:bg-blue-950/50 dark:text-blue-300">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>24-Hour Working Prototype · Web, AI/ML, Mobile &amp; Cloud Software</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-slate-900 dark:text-white">
              Custom Software Builds for Students —{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                Web, AI/ML, Mobile &amp; Cloud
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Need custom software built for your project or technical portfolio? We build production-ready applications in Web, AI/ML, Mobile Apps, and Cloud backends.{" "}
              <strong className="font-semibold text-slate-900 dark:text-white">
                Review a working prototype within 24 hours before finalizing scope and payment.
              </strong>
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

            {/* Trust Badges */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-2xl border border-stone-200 bg-white/80 p-4 text-center shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
                <Clock className="mx-auto h-6 w-6 text-blue-600 dark:text-blue-400" />
                <p className="mt-2 text-sm font-bold text-slate-900 dark:text-white">24h Prototype</p>
                <p className="text-xs text-slate-500">See demo before you pay</p>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white/80 p-4 text-center shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
                <Code2 className="mx-auto h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                <p className="mt-2 text-sm font-bold text-slate-900 dark:text-white">Clean Source Code</p>
                <p className="text-xs text-slate-500">Modular &amp; well-commented</p>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white/80 p-4 text-center shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
                <Laptop className="mx-auto h-6 w-6 text-amber-600 dark:text-amber-400" />
                <p className="mt-2 text-sm font-bold text-slate-900 dark:text-white">Setup &amp; Installation</p>
                <p className="text-xs text-slate-500">Remote config via AnyDesk</p>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white/80 p-4 text-center shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
                <Zap className="mx-auto h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <p className="mt-2 text-sm font-bold text-slate-900 dark:text-white">Feature Revisions</p>
                <p className="text-xs text-slate-500">Post-delivery adjustments</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4-Step Process ── */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
              How It Works
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              From Idea to Working Software in 4 Steps
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
              A straightforward, transparent development process focused on delivering reliable, functional code.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div
                key={s.step}
                className="relative rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <span className="text-3xl font-black text-blue-600/30 dark:text-blue-400/30">
                  {s.step}
                </span>
                <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Project Domains Covered ── */}
        <section className="border-t border-stone-200 bg-[#f4eee2] px-4 py-16 sm:px-6 lg:px-8 dark:border-slate-800 dark:bg-slate-900/50">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <span className="rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300">
                Technology Stack
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Software Domains &amp; Technologies We Build
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
                Modern, battle-tested technologies built to industry standards.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {DOMAINS.map((d) => {
                const IconComponent = d.icon;
                return (
                  <div
                    key={d.title}
                    className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                      {d.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-blue-600 dark:text-blue-400">
                      {d.tech}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {d.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── What You Receive ── */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center">
            <span className="rounded-full bg-amber-100 px-3.5 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-900/50 dark:text-amber-300">
              Core Deliverables
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              What You Receive with Every Build
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
              Everything needed to run, understand, and extend your software.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHAT_YOU_GET.map((w) => {
              const IconComp = w.icon;
              return (
                <div
                  key={w.title}
                  className="flex gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {w.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {w.desc}
                    </p>
                  </div>
                </div>
              );
            })}
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
                Answers to common questions about our custom software development service for students.
              </p>
            </div>

            <InteractiveFaq faqs={FAQS} />
          </div>
        </section>

        {/* ── Plainly Worded Service Disclaimer ── */}
        <div className="mx-auto max-w-4xl px-4 py-8 text-center">
          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            This is a custom software development service. The code is yours to learn from, extend, and reuse — we recommend fully understanding any code before presenting it as your own academic work.
          </p>
        </div>

        {/* ── Bottom Call To Action ── */}
        <section className="px-4 pb-16 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-900 to-indigo-950 p-8 text-center text-white shadow-xl sm:p-12 dark:border-slate-800">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Get Your 24-Hour Software Prototype Today
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-blue-100 leading-relaxed">
              Reach out directly on WhatsApp or phone to discuss your technical requirements and review your working prototype within 24 hours.
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
              Available 7 days a week · Direct Developer Interaction · Fast Turnaround
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
