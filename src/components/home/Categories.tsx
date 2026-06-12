import Link from "next/link";
import { categories } from "@/src/data/categories/Category";
import { calculators } from "@/src/data/calculators";

const categoryIcons = {
  finance: "💰",
  health: "🏥",
  vehicle: "🚗",
  utility: "🛠️",
  education: "🎓",
  math: "📊",
};

export default function CalculatorCategories() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Calculator Categories
          </h2>

          <p className="mt-3 text-slate-600">
            Browse calculators by category and find the right
            tool for your needs.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => {
            const calculatorCount = calculators.filter(
              (calculator) =>
                calculator.category.toLowerCase() ===
                category.name.toLowerCase(),
            ).length;

            return (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="
                  group
                  rounded-2xl
                  border
                  bg-white
                  p-6
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <div className="mb-4 text-4xl">
                  {
                    categoryIcons[
                      category.slug as keyof typeof categoryIcons
                    ]
                  }
                </div>

                <h3 className="font-semibold text-slate-900 transition-colors group-hover:text-blue-600">
                  {category.name}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {calculatorCount} Calculator
                  {calculatorCount !== 1 ? "s" : ""}
                </p>

                <p className="mt-4 text-sm font-medium text-blue-600">
                  View Calculators →
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}