import { notFound } from "next/navigation";
import { calculators } from "@/src/data/calculators";
import type { Metadata } from "next";
import { generateCalculatorMetadata } from "@/src/lib/seo/generateMetadata";
import Breadcrumbs from "@/src/components/seo/Breadcrumb";
import CalculatorRenderer from "@/src/components/calculator/CalculatorRenderer";
import StepsSection from "@/src/components/calculator/StepsSection";
import FormulaSection from "@/src/components/calculator/FormulaSection";
import FAQSection from "@/src/components/calculator/FAQSection";
import RelatedCalculators from "@/src/components/calculator/RelatedCalculators";
import FAQSchema from "@/src/components/seo/FAQSchema";
import SEOContent from "@/src/components/home/SEOContent";
import PopularCalculators from "@/src/components/calculator/PopularCalculators";
import CompareCalculatorSection from "@/src/components/calculator/CompareCalculatorSection";
import CalculatorSchema from "@/src/components/seo/CalculatorSchema";
import BreadcrumbSchema from "@/src/components/seo/BreadcrumbSchema";


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

  const calculator = calculators.find(
    (item) => item.slug === slug
  );

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


export default async function CalculatorPage({
  params,
}: Props) {
  const { slug } = await params;

  const calculator = calculators.find(
    (item) => item.slug === slug
  );

  if (!calculator) {
    notFound();
  }

return (
  <main className="mx-auto max-w-7xl px-4 py-12">
<FAQSchema faqs={calculator.faqs} />
<CalculatorSchema
  calculator={calculator}
/>
<BreadcrumbSchema
  category={calculator.category}
  name={calculator.name}
  slug={calculator.slug}
/>

    <Breadcrumbs
      category={calculator.category}
      currentPage={calculator.name}
    />

<div className="max-w-4xl">
  <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
    {calculator.name}
  </h1>

  <p className="mt-6 text-lg leading-8 text-slate-600">
    {calculator.description}
  </p>

 <p className="mt-4 leading-7 text-slate-600">
  Use our free online {calculator.name.toLowerCase()} to get
  accurate results instantly. The calculator is designed to
  be fast, easy to use, mobile-friendly, and suitable for
  everyday calculations.
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
  <div>
    <CalculatorRenderer slug={calculator.slug} />
    <CompareCalculatorSection
  compareWith={
    calculator.compareWith
  }
/>

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

    <SEOContent
      content={calculator.seoContent}
    />
  </div>

  <aside className="hidden lg:block">
    <div className="sticky top-24 space-y-6">
      <PopularCalculators
        currentSlug={calculator.slug}
      />

    </div>
  </aside>
</div>

<RelatedCalculators
  currentSlug={calculator.slug}
/>
  </main>
);
}