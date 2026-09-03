import type { Metadata } from "next";
import CalculatorCard from "@/src/components/calculator/CalculatorCard";
import CalculatorSearch from "@/src/components/calculator/CalculatorSearch";
import { calculators } from "@/src/data/calculators";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  title: "All Calculators - Free Online Calculator Collection",
  authors: [
    {
      name: "Aditya Singh",
    },
  ],


  publisher: "DevCalc",
alternates: {
  canonical: `${siteConfig.url}/calculators`,
},
  description:
    "Browse free online calculators for finance, health, education, utility, math, and everyday calculations. Fast, accurate, mobile-friendly, and easy to use.",
};

export default function CalculatorsPage() {
  const popularCalculators = calculators.filter(
    (calculator) => calculator.isPopular,
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold md:text-5xl">All Calculators</h1>

        <p className="mx-auto mt-4 max-w-3xl text-slate-600">
          Explore free online calculators for health, finance, education, math,
          utility, and everyday calculations. Get instant results with detailed
          formulas, FAQs, examples, and step-by-step explanations.
        </p>

        <p className="mt-4 text-sm text-slate-500">
          {calculators.length} calculators available
        </p>

        <div className="mx-auto mt-8 max-w-2xl">
          <CalculatorSearch />
        </div>
      </section>

      {/* Popular Calculators */}
      {popularCalculators.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-2 text-2xl font-bold">Popular Calculators</h2>

          <p className="mb-6 text-slate-600">
            Most frequently used calculators by our users.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularCalculators.map((calculator) => (
              <CalculatorCard key={calculator.slug} calculator={calculator} />
            ))}
          </div>
        </section>
      )}

      {/* All Calculators */}
      <section className="mt-16">
        <h2 className="mb-2 text-2xl font-bold">Browse Calculators</h2>

        <p className="mb-6 text-slate-600">
          Explore all available calculators across different categories.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calculator) => (
            <CalculatorCard key={calculator.slug} calculator={calculator} />
          ))}
        </div>
      </section>
    </main>
  );
}
