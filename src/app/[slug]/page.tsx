import { notFound } from "next/navigation";
import { CheckCircle2, BadgeCheck, Zap } from "lucide-react";
import { calculators } from "@/src/data/calculators";
import type { Metadata } from "next";
import { generateCalculatorMetadata } from "@/src/lib/seo/generateMetadata";
import Breadcrumbs from "@/src/components/seo/Breadcrumb";
import CalculatorRenderer from "@/src/components/calculator/CalculatorRenderer";
import StepsSection from "@/src/components/calculator/StepsSection";
import FormulaSection from "@/src/components/calculator/FormulaSection";
import FAQSection from "@/src/components/calculator/FAQSection";
import FAQSchema from "@/src/components/seo/FAQSchema";
import SEOContent from "@/src/components/home/SEOContent";
import CompareCalculatorSection from "@/src/components/calculator/CompareCalculatorSection";
import CalculatorSchema from "@/src/components/seo/CalculatorSchema";
import BreadcrumbSchema from "@/src/components/seo/BreadcrumbSchema";
import { getCalculatorIntro } from "@/src/lib/seo/generation";
import CalculatorListByCategory from "@/src/components/calculator/Calculatorlistbycategory";
import AuthorBio from "@/src/components/common/AuthorBio";
import StateSelectorSection from "@/src/components/calculator/StateSelectorSection";

// Category-appropriate YMYL disclaimer for ad-bearing content.
function getDisclaimer(category: string): string | undefined {
  const key = category.toLowerCase();
  if (key === "finance") {
    return "This calculator and its guidance are for general educational purposes only and do not constitute financial, investment, or tax advice. Verify figures with a qualified professional before making financial decisions.";
  }
  if (key === "health") {
    return "This calculator is for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Consult a qualified healthcare provider for health decisions.";
  }
  return undefined;
}

export async function generateStaticParams() {
  return calculators.map((calculator) => ({
    slug: calculator.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const calculator = calculators.find((item) => item.slug === slug);

  if (!calculator) {
    return {};
  }

  return generateCalculatorMetadata({
    slug: calculator.slug,
    title: calculator.seo.title,
    description: calculator.seo.description,
    keywords: calculator.seo.keywords,
  });
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CalculatorPage({ params }: Props) {
  const { slug } = await params;

  const calculator = calculators.find((item) => item.slug === slug);

  if (!calculator) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <FAQSchema faqs={calculator.faqs} />
      <CalculatorSchema calculator={calculator} />
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "/",
          },
          {
            name: "Calculators",
            url: "/calculators",
          },
          {
            name: calculator.category,
            url: `/category/${calculator.category.toLowerCase()}`,
          },
          {
            name: calculator.name,
            url: `/${calculator.slug}`,
          },
        ]}
      />

      <Breadcrumbs
        items={[
          {
            label: "Calculators",
            href: "/calculators",
          },
          {
            label: calculator.category,
            href: `/category/${calculator.category.toLowerCase()}`,
          },
          {
            label: calculator.name,
          },
        ]}
      />

      <div className="max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-slate-400">
          {calculator.category} Calculator
        </span>

        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-[#26364a] md:text-5xl dark:text-white">
          {calculator.name}
        </h1>

        <p className="mt-5 text-lg leading-8 text-stone-600 dark:text-slate-300">
          {calculator.description}
        </p>

        <p className="mt-4 leading-7 text-stone-600 dark:text-slate-400">
          {getCalculatorIntro(calculator)}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            { icon: CheckCircle2, label: "Accurate Results" },
            { icon: BadgeCheck, label: "Free to Use" },
            { icon: Zap, label: "Instant Calculation" },
          ].map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-[#faf7f0] px-4 py-2 text-sm font-medium text-[#1f3a5c] dark:border-slate-700 dark:bg-slate-900 dark:text-blue-400"
            >
              <Icon size={16} strokeWidth={1.75} />
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="min-w-0">
          <div className="calculator-shell w-full min-w-0 overflow-x-hidden">
            <CalculatorRenderer slug={calculator.slug} />
          </div>
          <CompareCalculatorSection compareWith={calculator.compareWith} />

          {calculator.slug === "road-tax-calculator" && (
            <StateSelectorSection
              type="road-tax"
              title="Select Your State for Exact RTO Road Tax Slabs"
              subtitle="Get exact 2026 motor vehicle tax brackets, diesel surcharges, EV policy exemptions, and local RTO registration guidelines."
            />
          )}

          {calculator.slug === "stamp-duty-calculator" && (
            <StateSelectorSection
              type="stamp-duty"
              title="Select Your State for Exact Stamp Duty & Circle Rates"
              subtitle="Get exact 2026 stamp duty percentages, Ready Reckoner / Guideline values, women buyer concessions, and registration fee caps."
            />
          )}
          <div className="mt-8 space-y-6 lg:hidden">
            
           <CalculatorListByCategory
              title="Construction Calculators"
              category="Construction"
              currentSlug={calculator.slug}
            />
            <CalculatorListByCategory
              title="Other Calculators"
              category="Other"
              currentSlug={calculator.slug}
             />
          </div>

          <StepsSection
            title={`How the ${calculator.name} Works`}
            steps={calculator.steps}
          />

          <FormulaSection
            title={calculator.formula.title}
            formula={calculator.formula.formula}
            explanation={calculator.formula.explanation}
            example={calculator.formula.example}
            useCases={calculator.formula.useCases}
          />

          <FAQSection faqs={calculator.faqs} />

          <SEOContent content={calculator.seoContent} />

          <AuthorBio disclaimer={getDisclaimer(calculator.category)} category={calculator.category} />
        </div>

        <aside className="hidden lg:block">
          <div className="space-y-6">
            <CalculatorListByCategory
              title="Other Calculators"
              category="Other"
              currentSlug={calculator.slug}
            />
            <CalculatorListByCategory
              title="Fun Calculators"
              category="Fun"
              currentSlug={calculator.slug}
            />
            <CalculatorListByCategory
              title="Health Calculators"
              category="Health"
              currentSlug={calculator.slug}
            />
            <CalculatorListByCategory
              title="Vehicle Calculators"
              category="Vehicle"
              currentSlug={calculator.slug}
            />
            <CalculatorListByCategory
              title="Finance Calculators"
              category="Finance"
              currentSlug={calculator.slug}
            />
            <CalculatorListByCategory
              title="Construction Calculators"
              category="Construction"
              currentSlug={calculator.slug}
            />
          </div>
        </aside>
      </div>
    </main>
  );
}
