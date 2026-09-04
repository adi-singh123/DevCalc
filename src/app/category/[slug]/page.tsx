import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";
import { calculators } from "@/src/data/calculators";
import { categories } from "@/src/data/categories/Category";
import { CATEGORY_GUIDES } from "@/src/data/categories/categoryGuides";
import Breadcrumb from "@/src/components/seo/Breadcrumb";
import BreadcrumbSchema from "@/src/components/seo/BreadcrumbSchema";
import CalculatorCard from "@/src/components/calculator/CalculatorCard";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const category = categories.find(
    (item) => item.slug === slug,
  );

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} Calculators - Free Online Calculation Tools`,
    description: `Explore free online ${category.name.toLowerCase()} calculators on DevCalc. Verified formulas, step-by-step worked examples, and instant precision results.`,

    keywords: [
      `${category.name.toLowerCase()} calculators`,
      `${category.name.toLowerCase()} tools`,
      `free ${category.name.toLowerCase()} calculators`,
      "online calculators",
      "DevCalc",
    ],

    alternates: {
      canonical: `https://www.devcalc.in/category/${slug}`,
    },

    openGraph: {
      title: `${category.name} Calculators | DevCalc`,
      description: `Explore free online ${category.name.toLowerCase()} calculators on DevCalc with verified formulas and step-by-step guides.`,
      url: `https://www.devcalc.in/category/${slug}`,
      siteName: "DevCalc",
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${category.name} Calculators | DevCalc`,
      description: `Explore free online ${category.name.toLowerCase()} calculators on DevCalc.`,
    },
  };
}

export default async function CategoryPage({
  params,
}: Props) {
  const { slug } = await params;

  const category = categories.find(
    (item) => item.slug === slug,
  );

  if (!category) {
    notFound();
  }

  const categoryCalculators = calculators.filter(
    (calculator) =>
      calculator.category.toLowerCase() ===
      category.name.toLowerCase(),
  );

  const guide = CATEGORY_GUIDES[slug];

  const breadcrumbItems = [
    {
      label: "Categories",
      href: "/calculators",
    },
    {
      label: `${category.name} Calculators`,
    },
  ];

  const breadcrumbSchema = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Calculators",
      url: "/calculators",
    },
    {
      name: `${category.name} Calculators`,
      url: `/category/${slug}`,
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <BreadcrumbSchema items={breadcrumbSchema} />
      <Breadcrumb items={breadcrumbItems} />

      {/* Header */}
      <section className="max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-slate-400">
          Domain Collection
        </span>

        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#26364a] md:text-5xl dark:text-white">
          {category.name} Calculators
        </h1>

        <p className="mt-4 text-lg leading-8 text-stone-600 dark:text-slate-300">
          {guide?.overview ||
            `Explore our verified collection of ${category.name.toLowerCase()} calculators. Engineered for precision, fast client-side computation, and clear step-by-step guidance.`}
        </p>

        <p className="mt-2 text-sm font-semibold text-blue-700 dark:text-blue-400">
          {categoryCalculators.length} calculators available in this domain
        </p>
      </section>

      {/* Sub-groupings / Topical Clusters */}
      {guide && guide.subgroups && guide.subgroups.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Logical Groupings in {category.name}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {guide.subgroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-stone-200 bg-[#faf7f0] p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {group.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {group.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.recommendedSlugs.map((calcSlug) => {
                    const found = calculators.find((c) => c.slug === calcSlug);
                    if (!found) return null;
                    return (
                      <Link
                        key={calcSlug}
                        href={`/${calcSlug}`}
                        className="inline-flex items-center gap-1 rounded-lg border border-stone-300/80 bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-400"
                      >
                        {found.name} <ArrowRight size={12} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Guidance on choosing the right calculator */}
      {guide && guide.selectionAdvice && guide.selectionAdvice.length > 0 && (
        <section className="mt-12 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/70 via-white to-amber-50/30 p-6 sm:p-8 dark:border-blue-900/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            How to Choose the Right Calculator
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Identify your specific scenario to select the appropriate mathematical or statutory model:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {guide.selectionAdvice.map((item) => (
              <div
                key={item.situation}
                className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/80"
              >
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="mt-0.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-slate-400">
                      Scenario
                    </span>
                    <h3 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
                      {item.situation}
                    </h3>
                  </div>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.rationale}
                </p>
                <Link
                  href={`/${item.slug}`}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:underline dark:text-blue-400"
                >
                  Use {item.recommendedTool} <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* All calculators in this category */}
      <section className="mt-14">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            All {category.name} Calculators
          </h2>
          <span className="text-xs text-stone-500 dark:text-slate-400">
            Click any tool to open the interactive calculator
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categoryCalculators.map((calculator) => (
            <CalculatorCard
              key={calculator.slug}
              calculator={calculator}
            />
          ))}
        </div>
      </section>

      {/* Category FAQs */}
      {guide && guide.faqs && guide.faqs.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Frequently Asked Questions about {category.name} Tools
          </h2>

          <div className="space-y-4">
            {guide.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle size={18} className="mt-0.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-base text-slate-900 dark:text-white">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}