import type { Metadata } from "next";
import CalculatorCard from "@/src/components/calculator/CalculatorCard";
import CalculatorSearch from "@/src/components/calculator/CalculatorSearch";
import { calculators } from "@/src/data/calculators";

export const metadata: Metadata = {
  title: "Free Online Calculators - Math, Fitness, Finance, Science",
  description:
    "Use our free online calculators to solve finance, health, math, fitness, and everyday calculations instantly. Each calculator includes accurate results, step-by-step guides, formulas, FAQs, and useful insights..",
};

export default function CalculatorsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold md:text-5xl">
          All Calculators
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Browse our collection of free online calculators.
        </p>

        <div className="mx-auto mt-8 max-w-2xl">
          <CalculatorSearch />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">
          Browse Calculators
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calculator) => (
            <CalculatorCard
              key={calculator.slug}
              calculator={calculator}
            />
          ))}
        </div>
      </section>
    </main>
  );
}