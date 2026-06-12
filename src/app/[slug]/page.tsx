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
import { ageFaqs } from "@/src/data/faqs/age";
import FAQSchema from "@/src/components/seo/FAQSchema";
import { ageSteps } from "@/src/data/content/age";
import ResultsSection from "@/src/components/calculator/ResultsSection";  
import { ageFormula } from "@/src/data/formulas/age";

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

const demoResults = [
  {
    label: "Current Age",
    value: "25 Years",
    highlight: true,
  },
  {
    label: "Months",
    value: 300,
  },
  {
    label: "Days",
    value: 9125,
  },
  {
    label: "Hours",
    value: 219000,
  },
  {
    label: "Minutes",
    value: 13140000,
  },
  {
    label: "Seconds",
    value: 788400000,
  },
];




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
<FAQSchema faqs={ageFaqs} />

    <Breadcrumbs
      category={calculator.category}
      currentPage={calculator.name}
    />

    <h1 className="text-3xl font-bold md:text-5xl">
      {calculator.name}
    </h1>

    <p className="mt-4 text-slate-600">
      {calculator.description}
    </p>

    <CalculatorRenderer />
    <ResultsSection
  title="Calculation Results"
  results={demoResults}
/>

    <StepsSection
  title="How the Age Calculator Works"
  steps={ageSteps}
/>

    <FormulaSection
  title={ageFormula.title}
  formula={ageFormula.formula}
  explanation={ageFormula.explanation}
  example={ageFormula.example}
/>

    <FAQSection faqs={ageFaqs} />

<RelatedCalculators
  currentSlug={calculator.slug}
/>
  </main>
);
}