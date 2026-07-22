import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About DevCalc – Free Calculators Built by Aditya Singh",
  keywords: [
  "About DevCalc",
  "DevCalc platform",
  "Online calculator platform",
  "Free online calculators",
  "Developer tools",
  "Interview preparation platform",
  "Developer interview questions",
  "Educational tools",
  "Student tools",
  "Engineering tools",
  "Programming tools",
  "Productivity tools",
  "Calculator website",
  "Web development resources",
  "Tech learning platform",
  "Software developer resources",
  "Free learning platform",
  "Developer resources",
  "About us",
],
  description:
    "DevCalc is built by Aditya Singh, a Full Stack Developer from India. Learn the story behind 100+ free calculators for finance, health, education, and everyday use — no sign-up, no cost, ever.",
  alternates: {
    canonical: "https://www.devcalc.in/about",
  },
  authors: [{ name: "Devcalc" }],
  creator: "Davcalc",
  publisher: "DevCalc",
};

// ── Category data ─────────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    icon: "💰",
    title: "Finance Calculators",
    desc: "Plan loans, investments, and taxes — EMI, SIP, FD, GST, PPF, NPS, HRA, Income Tax, and more.",
    href: "/category/finance",
  },
  {
    icon: "🩺",
    title: "Health Calculators",
    desc: "Track your body — BMI, BMR, Calorie, Body Fat, Water Intake, Protein, Heart Rate, and more.",
    href: "/category/health",
  },
  {
    icon: "🎓",
    title: "Education Tools",
    desc: "Built for students — GPA, CGPA, Attendance, Marks Required, Study Hours, and Exam Countdown.",
    href: "/category/education",
  },
  {
    icon: "🚗",
    title: "Vehicle Calculators",
    desc: "Know your real running cost — Mileage and Fuel Cost calculators for petrol, diesel, and CNG.",
    href: "/category/vehicle",
  },
  {
    icon: "🧮",
    title: "Math Calculators",
    desc: "From simple percentages to matrices, fractions, probability, and quadratic equations.",
    href: "/category/math",
  },
  {
    icon: "🛠️",
    title: "Developer Tools",
    desc: "Everyday dev utilities — JSON Formatter, UUID Generator, Base64, URL Encoder, JWT Decoder.",
    href: "/category/developer-tools",
  },
  {
    icon: "🏗️",
    title: "Construction Calculators",
    desc: "Estimate material quantities and costs — Bricks, Cement, Concrete, and House Construction Cost.",
    href: "/category/construction",
  },
  {
    icon: "⚡",
    title: "Utility Calculators",
    desc: "Handy everyday tools — Age, Date, Unit Converter, Password Generator, QR Code, and more.",
    href: "/category/utility",
  },
];

// ── Why DevCalc ───────────────────────────────────────────────────────────────
const WHY = [
  {
    icon: "✅",
    title: "Accurate Results",
    desc: "Every calculator uses standard, verified formulas — the same ones used by banks, hospitals, and institutions.",
  },
  {
    icon: "📱",
    title: "Works on Any Device",
    desc: "Designed mobile-first. Whether you're on a phone, tablet, or desktop — it just works.",
  },
  {
    icon: "🔒",
    title: "No Sign-up Required",
    desc: "No account, no email, no tracking. Open a calculator, get your answer, and you're done.",
  },
  {
    icon: "🆓",
    title: "Always Free",
    desc: "No subscriptions, no paywalls, no hidden costs. Every calculator on DevCalc is free — forever.",
  },
  {
    icon: "⚡",
    title: "Instant Results",
    desc: "Results appear as you type. No page reloads, no waiting — just fast, clean calculations.",
  },
  {
    icon: "🇮🇳",
    title: "Built for India",
    desc: "Calculators for GST, EMI, SIP, PPF, NPS, SSY, and income tax are tailored for Indian users.",
  },
];

// ── Tech stack ────────────────────────────────────────────────────────────────
const TECH = [
  "Next.js", "React", "TypeScript", "Tailwind CSS",
  "Node.js", "Express", "MySQL",
];

// ── Stats ─────────────────────────────────────────────────────────────────────
const STATS = [
  { number: "80+",  label: "Free Calculators"   },
  { number: "8",    label: "Categories"          },
  { number: "100%", label: "Free Forever"        },
  { number: "0",    label: "Sign-ups Required"   },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">

      {/* ── Hero ── */}
      <section className="text-center">
        <span className="inline-block rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
          Our Story
        </span>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          About DevCalc
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
          DevCalc is a free calculator platform built to give everyone — students,
          professionals, and everyday users — instant, accurate answers without
          needing a spreadsheet or a finance degree.
        </p>

        {/* Stats row */}
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <p className="text-2xl font-bold text-blue-600">{s.number}</p>
              <p className="mt-0.5 text-xs text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
          Our Mission
        </span>

        <h2 className="mt-4 text-2xl font-bold">
          Calculations should be simple — for everyone.
        </h2>

        <p className="mt-4 leading-8 text-slate-600">
          Too many people avoid making financial or health decisions because the
          math feels overwhelming. DevCalc exists to remove that barrier. Whether
          you&apos;re a student checking your CGPA, a first-time home buyer calculating
          an EMI, or someone curious about their BMI — you should be able to get a
          clear answer in seconds, for free, without signing up for anything.
        </p>
      </section>

      {/* ── What We Offer ── */}
      <section className="mt-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold">What You&apos;ll Find on DevCalc</h2>
          <p className="mt-2 text-slate-500">
            100+ calculators across 8 categories — and growing every month.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="mt-3 font-semibold text-slate-800 group-hover:text-blue-600">
                {cat.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Why DevCalc ── */}
      <section className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Why People Use DevCalc</h2>
          <p className="mt-2 text-slate-500">
            Fast, honest, and built with the user in mind.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span className="text-2xl">{item.icon}</span>
              <h3 className="mt-3 font-semibold text-slate-800">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
          Founder Story
        </span>

        <h2 className="mt-4 text-2xl font-bold">
          Hi, I&apos;m Aditya Singh 👋
        </h2>

        <div className="mt-6 space-y-5 leading-8 text-slate-600">
          <p>
            I&apos;m a{" "}
            <strong className="text-slate-800">Full Stack Developer</strong>{" "}
            from Jaunpur, Uttar Pradesh, India — and DevCalc is something I built
            because I kept running into the same problem: whenever I needed a
            quick financial or health calculation, I&apos;d either find a cluttered
            website full of ads, or a tool that required sign-up just to show me
            a number.
          </p>

          <p>
            So I built DevCalc — clean, fast, free, and focused entirely on
            giving you the answer you came for. No distractions, no accounts, no
            cost.
          </p>

          <p>
            I work with{" "}
            <strong className="text-slate-800">
              React, Next.js, TypeScript, Node.js, Express, and MySQL
            </strong>
            . Every calculator on this platform is built and maintained by me,
            with careful attention to formula accuracy and mobile usability.
          </p>

          <p>
            DevCalc is still growing — new calculators, blog guides, and
            comparison tools are added regularly. If there&apos;s a calculator you
            wish existed here, I genuinely want to hear about it.
          </p>
        </div>

        {/* Tech stack pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {TECH.map((t) => (
            <span
              key={t}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Founder stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { value: "80+",      label: "Calculators built"         },
            { value: "8",        label: "Categories covered"        },
            { value: "Made in India 🇮🇳", label: "Jaunpur, UP" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <p className="font-bold text-slate-800">{s.value}</p>
              <p className="mt-0.5 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="mt-16 rounded-3xl border border-blue-100 bg-blue-50 p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-800">
          Got a suggestion or found a bug?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          Every piece of feedback helps make DevCalc better. Whether it&apos;s a
          calculator request, a wrong result, or just a great work — I read
          every message personally.
        </p>

        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-95"
          >
            Send a Message →
          </Link>

          <a
            href="mailto:devcalc35052@gmail.com"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            ✉️ devcalc35052@gmail.com
          </a>
        </div>

        {/* Address for local SEO */}
        <p className="mt-6 text-xs text-slate-400">
          DevCalc · 76, Pali, Gothawan, Jaunpur, Uttar Pradesh, India — 222162
        </p>
      </section>

    </main>
  );
}