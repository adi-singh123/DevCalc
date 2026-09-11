import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpenText,
  Calculator,
  Check,
  Handshake,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Advertise With DevCalc | Sponsorships & Partnerships",
  description:
    "Explore transparent advertising, sponsorship, and content partnership opportunities across DevCalc calculators and educational guides.",
  alternates: {
    canonical: "https://www.devcalc.in/advertise",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Advertise With DevCalc",
    description:
      "Connect your brand with people using practical calculators and educational tools across finance, construction, education, vehicles, health, and technology.",
    url: "https://www.devcalc.in/advertise",
    siteName: "DevCalc",
    locale: "en_IN",
    type: "website",
  },
};

const opportunities = [
  {
    icon: Calculator,
    title: "Calculator sponsorship",
    description:
      "Support a relevant calculator page with a clearly disclosed placement that stays separate from the tool and its results.",
  },
  {
    icon: BookOpenText,
    title: "Sponsored educational content",
    description:
      "Collaborate on useful, fact-checked guidance for readers. Sponsorship never guarantees a favourable opinion or ranking claim.",
  },
  {
    icon: BarChart3,
    title: "Display campaigns",
    description:
      "Run a clearly labelled banner on mutually agreed pages, subject to relevance, availability, and our advertising standards.",
  },
  {
    icon: Handshake,
    title: "Custom partnerships",
    description:
      "Discuss a calculator integration, co-created resource, or longer campaign designed around a genuine user need.",
  },
];

const audiences = [
  "Personal finance and tax planning",
  "Home building and construction",
  "Students and education",
  "Vehicle ownership and running costs",
  "Health and fitness calculations",
  "Developers and technical utilities",
];

const standards = [
  "Every paid placement is clearly identified as an advertisement or sponsorship.",
  "Calculator results and formulas remain editorially independent.",
  "Paid links are appropriately qualified for search engines.",
  "Claims must be accurate, supportable, and relevant to the intended audience.",
  "Final creative, destination pages, and placement are reviewed before publication.",
  "We do not promise clicks, conversions, rankings, or guaranteed campaign outcomes.",
];

const restricted = [
  "Illegal, counterfeit, deceptive, or malware-related products",
  "Adult content, unlicensed gambling, or misleading dating offers",
  "Get-rich-quick schemes and unverifiable financial claims",
  "Unsafe health claims or products presented as guaranteed treatments",
  "Ads designed to imitate navigation, calculator inputs, or result buttons",
  "Campaigns that conflict with applicable publisher or platform policies",
];

export default function AdvertisePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="text-sm text-stone-500 dark:text-slate-400">
        <Link href="/" className="transition hover:text-blue-700 dark:hover:text-blue-400">
          Home
        </Link>
        <span className="mx-2" aria-hidden="true">/</span>
        <span aria-current="page">Advertise</span>
      </nav>

      <section className="relative mt-6 overflow-hidden rounded-[2rem] border border-stone-200 bg-[#1f3a5c] px-6 py-14 text-white shadow-xl sm:px-10 lg:px-16 lg:py-20 dark:border-slate-700">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="relative max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
            <Sparkles size={16} aria-hidden="true" /> Brand partnerships
          </span>
          <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Reach people while they are making real decisions.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            DevCalc helps people work through finance, construction, education,
            vehicle, health, and technical questions. We welcome relevant brands
            that value useful content, clear disclosure, and a respectful user experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#partnership-enquiry"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-[#1f3a5c] transition hover:bg-blue-50"
            >
              Start a conversation <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href="mailto:devcalc35052@gmail.com?subject=Advertising%20enquiry%20for%20DevCalc"
              className="inline-flex items-center rounded-xl border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Email us directly
            </a>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-400">
            Partnership options
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#26364a] dark:text-white sm:text-4xl">
            Thoughtful placements, built around relevance
          </h2>
          <p className="mt-4 leading-7 text-stone-600 dark:text-slate-300">
            Availability and pricing depend on the campaign scope. We review the
            brand, destination, claims, and proposed placement before accepting any work.
          </p>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {opportunities.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <span className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl bg-[#eee7da] p-7 sm:p-9 dark:bg-slate-900">
          <span className="inline-flex rounded-xl bg-white p-3 text-[#1f3a5c] shadow-sm dark:bg-slate-800 dark:text-blue-300">
            <BadgeCheck size={24} aria-hidden="true" />
          </span>
          <h2 className="mt-5 font-serif text-3xl font-semibold text-[#26364a] dark:text-white">
            Who you can reach
          </h2>
          <p className="mt-3 leading-7 text-stone-600 dark:text-slate-300">
            DevCalc serves intent-led visitors who arrive with a specific question
            and want a practical answer. Relevant campaign categories include:
          </p>
          <ul className="mt-6 space-y-3">
            {audiences.map((audience) => (
              <li key={audience} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200">
                <Check className="mt-0.5 shrink-0 text-emerald-700 dark:text-emerald-400" size={18} aria-hidden="true" />
                {audience}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white p-7 sm:p-9 dark:border-slate-700 dark:bg-slate-900">
          <span className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
            <ShieldCheck size={24} aria-hidden="true" />
          </span>
          <h2 className="mt-5 font-serif text-3xl font-semibold text-[#26364a] dark:text-white">
            Our advertising standards
          </h2>
          <ul className="mt-6 space-y-4">
            {standards.map((standard) => (
              <li key={standard} className="flex items-start gap-3 text-sm leading-6 text-stone-600 dark:text-slate-300">
                <Check className="mt-0.5 shrink-0 text-blue-700 dark:text-blue-400" size={18} aria-hidden="true" />
                {standard}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-20 rounded-3xl border border-amber-200 bg-amber-50/70 p-7 sm:p-9 dark:border-amber-900/50 dark:bg-amber-950/20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Campaigns we do not accept</h2>
        <p className="mt-3 max-w-3xl leading-7 text-stone-600 dark:text-slate-300">
          We may decline any proposal at our discretion. In particular, the following
          categories or tactics are not suitable for DevCalc:
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {restricted.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl bg-white/80 p-4 text-sm leading-6 text-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="partnership-enquiry" className="mt-20 scroll-mt-24">
        <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-lg sm:p-10 dark:border-slate-700 dark:bg-slate-900">
          <span className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            <Mail size={24} aria-hidden="true" />
          </span>
          <span className="mt-6 block text-sm font-bold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-400">
            Partnership enquiry
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#26364a] dark:text-white sm:text-4xl">
            Email your advertising proposal
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-600 dark:text-slate-300">
            Include your brand name, website, campaign objective, preferred calculator
            or category, proposed dates, creative format, and indicative budget. We will
            review the details and reply with availability and suitable options.
          </p>
          <a
            href="mailto:devcalc35052@gmail.com?subject=Advertising%20enquiry%20for%20DevCalc"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#1f3a5c] px-6 py-3.5 font-bold text-white transition hover:bg-[#294d77]"
          >
            Email devcalc35052@gmail.com <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-semibold text-[#26364a] dark:text-white">
          A partnership should help the reader, too.
        </h2>
        <p className="mt-4 leading-7 text-stone-600 dark:text-slate-300">
          We keep advertisements distinguishable from editorial content and calculator
          controls. Read our policies before submitting a proposal.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-semibold">
          <Link href="/privacy-policy" className="text-blue-700 hover:underline dark:text-blue-400">Privacy Policy</Link>
          <Link href="/terms" className="text-blue-700 hover:underline dark:text-blue-400">Terms of Use</Link>
          <Link href="/contact" className="text-blue-700 hover:underline dark:text-blue-400">General Contact</Link>
        </div>
      </section>
    </main>
  );
}
