import { notFound } from "next/navigation";
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
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          {calculator.name}
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          {calculator.description}
        </p>

        <p className="mt-4 leading-7 text-slate-600">
          {getCalculatorIntro(calculator)}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Accurate Results
          </span>

          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
            Free to Use
          </span>

          <span className="rounded-full bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700">
            Instant Calculation
          </span>
        </div>
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="min-w-0">
          <div className="calculator-shell w-full min-w-0 overflow-x-hidden">
            <CalculatorRenderer slug={calculator.slug} />
          </div>
          <CompareCalculatorSection compareWith={calculator.compareWith} />
          <div className="mt-8 space-y-6 lg:hidden">
            
            <CalculatorListByCategory
              title="Try Some Fun Calculators"
              category="Fun"
              currentSlug={calculator.slug}
            />
            <CalculatorListByCategory
              title="Construction Calculators"
              category="Construction"
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
        </div>

        <aside className="hidden lg:block">
          <div className="space-y-6">
            <CalculatorListByCategory
              title="Fun Calculators"
              category="Fun"
              currentSlug={calculator.slug}
            />
            <CalculatorListByCategory
              title="Other Calculators"
              category="Other"
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
