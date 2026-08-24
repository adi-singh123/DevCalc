import type { Metadata } from "next";
import Link from "next/link";
import InteractiveFaq from "@/src/components/common/InteractiveFaq";
import {
  Code2,
  Clock,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  FileText,
  Video,
  CheckCircle2,
  Layers,
  Cpu,
  Database,
  Globe,
  Smartphone,
  BrainCircuit,
  HelpCircle,
  Zap,
  BookOpen,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "College Software Projects for B.Tech, BCA, MCA & CS/IT Students | DevCalc",
  description:
    "Need a custom software college project for B.Tech, BCA, MCA, or IT? Get a working prototype within 24 hours before payment discussions. Full source code, documentation, PPT, and viva prep. Call/WhatsApp: 8081158775.",
  keywords: [
    "college software projects",
    "btech final year projects",
    "bca major project",
    "mca capstone project",
    "cs it college projects",
    "full stack college project",
    "ai ml final year project",
    "python college project",
    "react nextjs college project",
    "student project prototype in 24 hours",
    "college project source code and report",
  ],
  alternates: {
    canonical: "https://www.devcalc.in/collegeProject",
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
    title: "College Software Projects for B.Tech, BCA, MCA & CS/IT | 24-Hour Prototype",
    description:
      "Get custom B.Tech, BCA, MCA software projects with a working prototype delivered within 24 hours. Full code, report, PPT & viva prep. Call/WhatsApp: 8081158775.",
    url: "https://www.devcalc.in/collegeProject",
    siteName: "DevCalc",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "DevCalc College Software Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "College Software Projects for B.Tech, BCA, MCA | 24h Prototype",
    description:
      "Get a working software project prototype within 24 hours before payment. Full code, report, PPT & viva prep. Call/WhatsApp: 8081158775.",
    images: ["/logo.png"],
  },
};

const DOMAINS = [
  {
    icon: Globe,
    title: "Full-Stack Web Applications",
    tech: "React, Next.js, MERN Stack, Node.js, Django, FastAPI, Spring Boot, PHP/Laravel",
    desc: "Production-grade web apps with authentication, admin panels, analytics dashboards, payment gateways, and role-based access control.",
  },
  {
    icon: BrainCircuit,
    title: "AI, Machine Learning & Data Science",
    tech: "Python, PyTorch, TensorFlow, OpenCV, Scikit-learn, NLP, LLMs, Computer Vision",
    desc: "Deep learning models, predictive algorithms, healthcare diagnostics, recommendation engines, sentiment analysis, and generative AI apps.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    tech: "Flutter, React Native, Android (Java/Kotlin), Firebase, REST APIs",
    desc: "Cross-platform and native mobile apps with real-time cloud sync, geolocation, push notifications, offline databases, and modern UI.",
  },
  {
    icon: Database,
    title: "Database & Enterprise Systems",
    tech: "PostgreSQL, MongoDB, MySQL, Redis, AWS, Firebase, Docker, Microservices",
    desc: "Hospital ERPs, college management portals, inventory trackers, and high-concurrency cloud-backed microservices architectures.",
  },
  {
    icon: Cpu,
    title: "IoT & Smart Hardware Interfacing",
    tech: "ESP32, Raspberry Pi, Arduino + Live Web Dashboards, MQTT, WebSockets",
    desc: "Smart home automation, environmental telemetry, RFID attendance, and biometric systems with real-time live sensor feeds.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Blockchain",
    tech: "Solidity, Ethereum, Web3.js, Cryptography, Steganography, Network Scanners",
    desc: "Decentralized applications (DApps), secure electronic voting systems, intrusion detection, packet sniffers, and phishing analyzers.",
  },
];

const WHAT_YOU_GET = [
  {
    icon: Code2,
    title: "100% Working, Clean Source Code",
    desc: "Well-commented, modular, and plagiarism-free source code adhering to industry standards and clean architecture.",
  },
  {
    icon: FileText,
    title: "Complete Project Report & Synopsis",
    desc: "IEEE-format 40-80+ page project report including SRS, System Architecture, UML Diagrams, DFDs, ERDs, and testing test-cases.",
  },
  {
    icon: Layers,
    title: "Professional Presentation Deck (PPT)",
    desc: "Custom-designed 15-20 slide presentation ready for initial review, progress checks, and final project defense.",
  },
  {
    icon: Video,
    title: "1-on-1 Viva & Defense Coaching",
    desc: "Live walkthrough sessions over Google Meet / Zoom explaining every function, API, and database query in plain language.",
  },
  {
    icon: Zap,
    title: "Remote Installation & Setup Support",
    desc: "Full local environment configuration on your laptop via AnyDesk or Google Meet, ensuring 1-click execution.",
  },
  {
    icon: ShieldCheck,
    title: "Free Guide Feedback & Revisions",
    desc: "Immediate modifications if your college guide or professor asks for additional validations, UI tweaks, or new features.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Share Your Project Requirements",
    desc: "Call or WhatsApp us on 8081158775 with your project title, college guidelines, or problem statement. If you need inspiration, we can suggest trending, high-scoring project ideas.",
  },
  {
    step: "02",
    title: "Get a Working Prototype in 24 Hours",
    desc: "We build and demonstrate a live working prototype/demo of your project within 24 hours — zero upfront payment required.",
  },
  {
    step: "03",
    title: "Review Demo & Finalize Scope",
    desc: "Review the prototype video or live demo, request any UI/feature tweaks, and only then discuss fair, student-friendly pricing based on your scope.",
  },
  {
    step: "04",
    title: "Full Code, Report & Viva Preparation",
    desc: "Receive the complete source code, documentation, PPT, and attend a personal 1-on-1 code walkthrough to ace your viva examiner.",
  },
];

const FAQS = [
  {
    q: "How does the 24-Hour Prototype Guarantee work?",
    a: "Once you share your project requirements with us on WhatsApp or call (8081158775), we immediately begin developing a foundational prototype/demo. Within 24 hours, we show you a video recording or live demonstration of the working prototype on Google Meet. This allows you to verify our technical capability, UI design, and project direction before you make any payment.",
  },
  {
    q: "What software domains and project types can you develop?",
    a: "We develop projects across all modern tech stacks: Full-Stack Web Development (MERN, Next.js, React, Node.js, Django, FastAPI, Spring Boot, PHP/Laravel), Artificial Intelligence & Machine Learning (Computer Vision, NLP, PyTorch, TensorFlow, OpenCV, Generative AI), Mobile Apps (Flutter, React Native, Android), IoT & Embedded Systems (ESP32, Raspberry Pi, Arduino with cloud dashboards), Blockchain DApps, and Cybersecurity tools.",
  },
  {
    q: "Which academic courses, degrees, and colleges do you support?",
    a: "We develop minor, major, semester, and final-year capstone projects for B.Tech / B.E. (Computer Science, Information Technology, AI & DS, ECE), BCA, MCA, B.Sc Computer Science / IT, M.Tech, and Polytechnic / Diploma engineering students across all major Indian universities (AKTU, VTU, JNTU, Mumbai University, Pune University, IPU, Anna University, etc.).",
  },
  {
    q: "Do I receive complete project documentation, synopsis, and PPT for submission?",
    a: "Yes! Every project includes a complete IEEE-format Project Report (40 to 80+ pages), Project Synopsis, Software Requirement Specification (SRS), System Architecture diagrams, UML Diagrams (Class, Use Case, Sequence, Activity), Data Flow Diagrams (DFD Level 0/1/2), Entity-Relationship (ER) Diagrams, Database Schemas, Test Cases, and a customized 15–20 slide PowerPoint Presentation (PPT).",
  },
  {
    q: "How will I understand the code for my final year Viva and Project Defense?",
    a: "We conduct dedicated 1-on-1 online sessions (via Google Meet or Zoom) where we explain the architecture, data flow, algorithms, and key source code functions line-by-line in simple, conversational language. We also provide a Viva Cheat Sheet covering top 30+ potential examiner questions and answers so you can defend your project with absolute confidence.",
  },
  {
    q: "Will you help install and run the project on my laptop?",
    a: "Yes, 100%. We connect remotely via AnyDesk or Google Meet to configure all dependencies (Node.js, Python, MySQL/PostgreSQL, MongoDB, Docker, VS Code, environment variables) on your machine. We test the entire project live in front of you so that it runs with a single command on your submission day.",
  },
  {
    q: "What if my college guide or professor suggests modifications or extra features?",
    a: "We provide comprehensive post-delivery revision support. If your faculty guide requests adjustments to the database schema, additional validation rules, UI theme modifications, or specific reports, we implement them promptly without any hassle.",
  },
  {
    q: "Is the source code plagiarism-free and original?",
    a: "Every project is written with clean, modular, and well-commented code customized to your specific problem statement. We never recycle duplicate templates. You receive 100% full ownership of the source code and GitHub repository.",
  },
  {
    q: "What are the pricing and payment terms?",
    a: "Our pricing is transparent, student-friendly, and tailored to project complexity and timeline. You pay nothing upfront — you only pay after seeing the working 24-hour prototype demo. We also support milestone-based payments (demo approval -> final code -> viva coaching).",
  },
  {
    q: "How fast can you deliver if my project submission deadline is very close?",
    a: "For urgent submissions, we offer express delivery within 24 to 48 hours, including working code, database dump, quick synopsis, and installation guide. Call or WhatsApp 8081158775 immediately to check express availability.",
  },
];

export default function CollegeProjectPage() {
  const phoneNumber = "8081158775";
  const whatsappUrl = `https://wa.me/918081158775?text=${encodeURIComponent(
    "Hi Aditya, I am looking for a college software project. Can you help me with details and a 24-hour prototype?"
  )}`;

  // JSON-LD Structured Data for Google Rich Snippets
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DevCalc College Software Project Development",
    description:
      "Custom software project development for engineering and IT students (B.Tech, BCA, MCA) with 24-hour prototype delivery, complete IEEE documentation, PPT, and viva preparation.",
    url: "https://www.devcalc.in/collegeProject",
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
      name: "College Software Project Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "B.Tech Final Year Software Project",
            description:
              "End-to-end full stack web, AI/ML, or mobile project with IEEE report and viva coaching.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "BCA / MCA Major Capstone Project",
            description:
              "Custom software application with database, UI dashboard, documentation, and setup support.",
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
        name: "College Projects",
        item: "https://www.devcalc.in/collegeProject",
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
              College Projects
            </span>
          </nav>
        </div>

        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden border-b border-stone-200 bg-gradient-to-b from-[#f3ece0] to-[#faf7f0] px-4 py-12 sm:px-6 lg:px-8 lg:py-20 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur dark:border-blue-900/50 dark:bg-blue-950/50 dark:text-blue-300">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span>24-Hour Prototype Guarantee · B.Tech, BCA, MCA &amp; CS/IT Students</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-slate-900 dark:text-white">
              Custom College Software Projects with a{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                24-Hour Prototype
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Stuck on your Minor, Major, or Final Year College Project? Get a custom-built, fully functional software project in Web, AI/ML, Mobile App, or Cloud.{" "}
              <strong className="font-semibold text-slate-900 dark:text-white">
                We deliver a working prototype within 24 hours before you make any payment.
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
                <p className="mt-2 text-sm font-bold text-slate-900 dark:text-white">100% Working Code</p>
                <p className="text-xs text-slate-500">Clean &amp; well-commented</p>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white/80 p-4 text-center shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
                <FileText className="mx-auto h-6 w-6 text-amber-600 dark:text-amber-400" />
                <p className="mt-2 text-sm font-bold text-slate-900 dark:text-white">Report &amp; PPT</p>
                <p className="text-xs text-slate-500">Complete IEEE format</p>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white/80 p-4 text-center shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
                <GraduationCap className="mx-auto h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <p className="mt-2 text-sm font-bold text-slate-900 dark:text-white">Viva Preparation</p>
                <p className="text-xs text-slate-500">1-on-1 code explanation</p>
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
              From Idea to Submission in 4 Simple Steps
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
              A transparent, risk-free process designed to give you peace of mind and top academic grades.
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
                Whatever stack your curriculum requires, we have hands-on expertise building production-ready code.
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
              Complete Package
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Everything You Need for a 100% Submission
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
              We do not just hand over code — we give you an end-to-end academic package so you score the highest grade.
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
                Detailed answers to common questions asked by B.Tech, BCA, MCA &amp; IT engineering students.
              </p>
            </div>

            <InteractiveFaq faqs={FAQS} />
          </div>
        </section>

        {/* ── Bottom Call To Action ── */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-900 to-indigo-950 p-8 text-center text-white shadow-xl sm:p-12 dark:border-slate-800">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Get Your 24-Hour College Project Prototype Today
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-blue-100 leading-relaxed">
              Don&apos;t risk late submissions or low grades. Reach out directly on WhatsApp or phone to discuss your project topic and review your working prototype within 24 hours.
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
              Available 7 days a week · Direct Developer Interaction · 100% Student Confidentiality
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
