import Link from "next/link";
import { categories } from "@/src/data/categories/Category";
import { calculators } from "@/src/data/calculators";
import { getCategoryIcon } from "@/src/components/calculator/categoryMeta";

export default function CalculatorCategories() {
  return (
    <section className="bg-[#f1ece3] py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-semibold text-[#26364a] md:text-4xl dark:text-white">
            Calculator Categories
          </h2>

          <p className="mt-3 text-stone-600 dark:text-slate-400">
            Browse calculators by category and find the right tool for your
            needs.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => {
            const calculatorCount = calculators.filter(
              (calculator) =>
                calculator.category.toLowerCase() ===
                category.name.toLowerCase(),
            ).length;

            const Icon = getCategoryIcon(category.slug);

            return (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="
                  group
                  relative
                  flex
                  flex-col
                  items-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-stone-200
                  bg-[#faf7f0]
                  p-6
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#1f3a5c]/50
                  hover:shadow-md
                  dark:border-slate-700
                  dark:bg-slate-900
                "
              >
                {/* Classic top accent bar — reveals on hover */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[#1f3a5c] transition-transform duration-300 group-hover:scale-x-100"
                />

                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#1f3a5c]/15 bg-white text-[#1f3a5c] shadow-sm transition-transform duration-300 group-hover:scale-105 dark:border-slate-700 dark:bg-slate-800 dark:text-blue-400">
                  <Icon size={26} strokeWidth={1.75} />
                </div>

                <h3 className="font-serif text-lg font-semibold text-[#26364a] transition-colors group-hover:text-[#1f3a5c] dark:text-white dark:group-hover:text-blue-400">
                  {category.name}
                </h3>

                <p className="mt-1 text-sm text-stone-500 dark:text-slate-400">
                  {calculatorCount} Calculator
                  {calculatorCount !== 1 ? "s" : ""}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#1f3a5c] dark:text-blue-400">
                  View Calculators →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
