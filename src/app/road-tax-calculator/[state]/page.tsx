import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ROAD_TAX_STATES,
  getRoadTaxStateBySlug,
} from "@/src/data/states/road-tax-states";
import RoadTaxCalculator from "@/src/components/calculator/renderers/Roadtaxcalculator";
import InteractiveFaq from "@/src/components/common/InteractiveFaq";
import StateSelectorSection from "@/src/components/calculator/StateSelectorSection";
import Breadcrumbs from "@/src/components/seo/Breadcrumb";
import {
  Calendar,
  Car,
  CheckCircle2,
  ExternalLink,
  Fuel,
  Info,
  MapPin,
  ShieldAlert,
  Zap,
} from "lucide-react";

export async function generateStaticParams() {
  return ROAD_TAX_STATES.map((state) => ({
    state: state.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = getRoadTaxStateBySlug(stateSlug);

  if (!state) {
    return {};
  }

  const url = `https://www.devcalc.in/road-tax-calculator/${state.slug}`;

  return {
    title: state.metaTitle.replace(/\s*\|\s*DevCalc\s*$/i, ""),
    description: state.metaDescription,
    keywords: [
      `${state.stateName} road tax calculator`,
      `road tax in ${state.stateName} 2026`,
      `${state.stateName} rto registration charges`,
      `car road tax ${state.stateName}`,
      `bike road tax ${state.stateName}`,
      `${state.stateName} ev road tax exemption`,
      `on road price calculator ${state.stateName}`,
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
          alt: `${state.stateName} Road Tax Calculator`,
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

export default async function RoadTaxStatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: stateSlug } = await params;
  const state = getRoadTaxStateBySlug(stateSlug);

  if (!state) {
    notFound();
  }

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
        name: "Road Tax Calculator",
        item: "https://www.devcalc.in/road-tax-calculator",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: `${state.stateName} Road Tax`,
        item: `https://www.devcalc.in/road-tax-calculator/${state.slug}`,
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
            { label: "Road Tax Calculator", href: "/road-tax-calculator" },
            { label: `${state.stateName} Road Tax` },
          ]}
        />

        {/* Page Header */}
        <div className="mt-6 border-b border-stone-200 pb-8 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-950 dark:text-blue-300">
              <MapPin className="h-3.5 w-3.5" />
              <span>{state.stateName} ({state.stateCode}) RTO Slabs</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
              <Calendar className="h-3.5 w-3.5" />
              <span>Rates Verified: {state.lastVerifiedDate}</span>
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            {state.stateName} Road Tax Calculator (2026)
          </h1>

          <p className="mt-3 max-w-4xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Calculate exact motor vehicle road tax, RTO registration charges, and total on-road price addition for cars and two-wheelers in {state.stateName}.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="mt-8">
          <RoadTaxCalculator defaultStateCode={state.stateCode} />
        </div>

        {/* State Rate Quick Summary Cards */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {state.stateName} Motor Vehicle Tax Slabs (2026)
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Petrol Cars</p>
              <p className="mt-2 text-lg font-bold text-blue-600 dark:text-blue-400">{state.petrolCarRate}</p>
              <p className="mt-1 text-xs text-slate-500">15-year Lifetime Tax (LTT)</p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Diesel Cars</p>
              <p className="mt-2 text-lg font-bold text-amber-600 dark:text-amber-400">{state.dieselCarRate}</p>
              <p className="mt-1 text-xs text-slate-500">Calculated on ex-showroom invoice</p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Electric Vehicles (EV)</p>
              <p className="mt-2 text-sm font-bold text-emerald-600 dark:text-emerald-400">{state.evStatus}</p>
              <p className="mt-1 text-xs text-slate-500">Under state clean mobility policy</p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Official Transport Portal</p>
              <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white line-clamp-2">{state.sourceNote}</p>
              <a
                href={state.sourcePortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline dark:text-blue-400"
              >
                <span>Official Transport Site</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </section>

        {/* State-Specific Content & Local Insights */}
        <section className="mt-12 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Understanding Motor Vehicle Taxation in {state.stateName}
          </h2>

          <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {state.uniqueIntro.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#faf7f0] p-6 dark:bg-slate-950/60">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Tax Calculation &amp; Slab Mechanics
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {state.rateExplanation}
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-[#faf7f0] p-6 dark:bg-slate-950/60">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              RTO Registration Procedure &amp; Vahan System
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {state.rtoProcessGuide}
            </p>
          </div>

          {/* Key State Notes */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Key RTO Guidelines for {state.stateName} Vehicle Owners
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
              {state.stateName} Vehicle FAQs
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Frequently Asked Questions About {state.stateName} Road Tax
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Clear answers on slabs, diesel surcharges, EV exemptions, and RTO registration.
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
                Rates shown are indicative and sourced from public references, last reviewed on {state.lastVerifiedDate}. Always verify current rates with {state.stateName}&apos;s official {state.sourceNote} before making a vehicle purchase decision.
              </p>
            </div>
          </div>
        </section>

        {/* Cross-linking & State Selector Hub */}
        <div className="mt-12">
          <StateSelectorSection
            type="road-tax"
            currentStateSlug={state.slug}
            title={`Compare ${state.stateName} with Other State Road Tax Slabs`}
            subtitle="Explore how motor vehicle tax and RTO registration fees differ across other Indian states."
          />
        </div>

        {/* Link back to Hub & Related Calculators */}
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:bg-slate-900">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">
              Planning Other Vehicle Expenses?
            </h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              Calculate your monthly fuel budget or check EV vs Petrol cost savings.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/road-tax-calculator"
              className="rounded-xl bg-[#1f3a5c] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[#162a43] dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              All India Road Tax Hub
            </Link>
            <Link
              href="/fuel-cost-calculator"
              className="rounded-xl border border-stone-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Fuel Cost Calculator
            </Link>
            <Link
              href="/ev-vs-petrol-cost-calculator"
              className="rounded-xl border border-stone-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              EV vs Petrol Calculator
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
