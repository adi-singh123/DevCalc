import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  STAMP_DUTY_STATES,
  getStampDutyStateBySlug,
} from "@/src/data/states/stamp-duty-states";
import StampDutyCalculator from "@/src/components/calculator/renderers/StampDutyCalculator";
import InteractiveFaq from "@/src/components/common/InteractiveFaq";
import StateSelectorSection from "@/src/components/calculator/StateSelectorSection";
import Breadcrumbs from "@/src/components/seo/Breadcrumb";
import {
  Building2,
  Calendar,
  CheckCircle2,
  ExternalLink,
  FileText,
  Info,
  MapPin,
  Percent,
  ShieldAlert,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export async function generateStaticParams() {
  return STAMP_DUTY_STATES.map((state) => ({
    state: state.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = getStampDutyStateBySlug(stateSlug);

  if (!state) {
    return {};
  }

  const url = `https://www.devcalc.in/stamp-duty-calculator/${state.slug}`;

  return {
    title: state.metaTitle,
    description: state.metaDescription,
    keywords: [
      `${state.stateName} stamp duty calculator`,
      `stamp duty in ${state.stateName} 2026`,
      `property registration charges in ${state.stateName}`,
      `${state.stateName} circle rate stamp duty`,
      `${state.stateName} female stamp duty concession`,
      `${state.stateName} ready reckoner stamp duty`,
      `house registration fee ${state.stateName}`,
    ],
    alternates: {
      canonical: url,
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
      title: state.metaTitle,
      description: state.metaDescription,
      url,
      siteName: "DevCalc",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/logo.png",
          width: 1200,
          height: 630,
          alt: `${state.stateName} Stamp Duty Calculator`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: state.metaTitle,
      description: state.metaDescription,
      images: ["/logo.png"],
    },
  };
}

export default async function StampDutyStatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: stateSlug } = await params;
  const state = getStampDutyStateBySlug(stateSlug);

  if (!state) {
    notFound();
  }

  // Related states
  const relatedStates = STAMP_DUTY_STATES.filter((s) =>
    state.relatedStateSlugs.includes(s.slug)
  );

  // Structured Data (JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: state.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
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
        name: "Calculators",
        item: "https://www.devcalc.in/calculators",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Stamp Duty Calculator",
        item: "https://www.devcalc.in/stamp-duty-calculator",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: `${state.stateName} Stamp Duty`,
        item: `https://www.devcalc.in/stamp-duty-calculator/${state.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: "Calculators", href: "/calculators" },
            { label: "Stamp Duty Calculator", href: "/stamp-duty-calculator" },
            { label: `${state.stateName} Stamp Duty` },
          ]}
        />

        {/* Page Header */}
        <div className="mt-6 border-b border-stone-200 pb-8 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-950 dark:text-blue-300">
              <MapPin className="h-3.5 w-3.5" />
              <span>{state.stateName} ({state.stateCode}) Property Tax</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              <Calendar className="h-3.5 w-3.5" />
              <span>Rates Verified: {state.lastVerifiedDate}</span>
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            {state.stateName} Stamp Duty Calculator (2026)
          </h1>

          <p className="mt-3 max-w-4xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Calculate accurate property stamp duty and registration fees for buying a flat, house, or plot in {state.stateName}. Accounts for local circle rates, gender concessions, and statutory caps.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="mt-8">
          <StampDutyCalculator defaultStateKey={state.slug} />
        </div>

        {/* State Rate Quick Summary Cards */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {state.stateName} Stamp Duty &amp; Registration Rate Schedule (2026)
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Male Buyer (Standard)</p>
              <p className="mt-2 text-xl font-extrabold text-blue-600 dark:text-blue-400">{state.stampDutyMale}</p>
              <p className="mt-1 text-xs text-slate-500">Applicable on higher of agreement or circle rate</p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Female Buyer (Concession)</p>
              <p className="mt-2 text-xl font-extrabold text-emerald-600 dark:text-emerald-400">{state.stampDutyFemale}</p>
              <p className="mt-1 text-xs text-slate-500">{state.womenConcession}</p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Registration Charges</p>
              <p className="mt-2 text-lg font-bold text-slate-900 dark:text-white">{state.registrationCharge}</p>
              <p className="mt-1 text-xs text-slate-500">Paid to Sub-Registrar of Assurances</p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Official Source Portal</p>
              <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white line-clamp-2">{state.sourceNote}</p>
              <a
                href={state.sourcePortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline dark:text-blue-400"
              >
                <span>Visit Official Portal</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </section>

        {/* State-Specific Content & Local Insights */}
        <section className="mt-12 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Understanding Stamp Duty &amp; Registration in {state.stateName}
          </h2>

          <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {state.uniqueIntro.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#faf7f0] p-6 dark:bg-slate-950/60">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Rate Breakdown &amp; Calculation Mechanics
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {state.rateExplanation}
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-[#faf7f0] p-6 dark:bg-slate-950/60">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Circle Rate &amp; Valuation Rules
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {state.circleRateGuide}
            </p>
          </div>

          {/* Key State Notes */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Key Statutory Notes for {state.stateName} Buyers
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {state.specialNotes.map((note, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* State-Specific FAQs */}
        <section className="mt-12">
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
              {state.stateName} Property FAQs
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Frequently Asked Questions About {state.stateName} Stamp Duty
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Real legal and tax questions answered for property buyers in {state.stateName}.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <InteractiveFaq
              faqs={state.faqs.map((f) => ({ q: f.question, a: f.answer }))}
            />
          </div>
        </section>

        {/* Official Statutory Disclaimer */}
        <section className="mt-12 rounded-2xl border border-amber-200 bg-amber-50/80 p-5 text-sm text-amber-900 shadow-sm dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-200">
          <div className="flex items-start gap-3">
            <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
            <div>
              <p className="font-semibold">Official Disclaimer &amp; Rate Notice</p>
              <p className="mt-1 text-xs sm:text-sm leading-relaxed">
                Rates shown are indicative and sourced from public references, last reviewed on {state.lastVerifiedDate}. Always verify current rates with {state.stateName}&apos;s official {state.sourceNote} before making a transaction decision.
              </p>
            </div>
          </div>
        </section>

        {/* Cross-linking & State Selector Hub */}
        <div className="mt-12">
          <StateSelectorSection
            type="stamp-duty"
            currentStateSlug={state.slug}
            title={`Compare ${state.stateName} with Other State Stamp Duty Rates`}
            subtitle="Explore how stamp duty and registration costs differ in other major property markets across India."
          />
        </div>

        {/* Link back to Hub & Related States */}
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:bg-slate-900">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">
              Looking for All-India Property Calculations?
            </h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Check our main Stamp Duty Hub Calculator or Flat Buying Total Cost Calculator.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/stamp-duty-calculator"
              className="rounded-xl bg-[#1f3a5c] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#162a43] dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              All India Stamp Duty Hub
            </Link>
            <Link
              href="/flat-buy-calculator"
              className="rounded-xl border border-stone-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Flat Buying Cost Calculator
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}