import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { calculators } from "@/src/data/calculators";

// SEO-optimized category copy map to dynamically populate descriptions based on context
const CATEGORY_SEO_DESCRIPTIONS: Record<string, string> = {
  "Finance": "Simplify your financial planning with accurate tools for calculating loan EMIs, mutual fund compound interest, wealth accumulation, and annual tax returns under latest regimes.",
  "Vehicle": "Optimize your real-world transit economics. Instantly calculate car or bike mileage, trip fuel expenses, alternative CNG parameters, and daily vehicle running costs.",
  "Developer Tools": "Accelerate your programming workflow. Validate or minify raw JSON syntax logs, generate secure random UUID v4 strings, and encode percent-escaped URLs safely.",
  "Utility": "Track day-to-day timeline milestones cleanly. Compute precise durations between dates, track exact chronological age indexes, and run personal record calculations.",
  "Math": "Solve advanced linear algebra grids and equation systems effortlessly. Run matrices additions, dot-product multiplications, matrix inversions, and scalar determinants.",
  "Health": "Monitor your vital body composition and biometric baselines. Calculate exact BMI scores, track healthy prenatal gestational weight gain curves, and map peak ovulation windows.",
  "Construction": "Plan structural raw material logistics with industrial precision. Calculate total brick counts, mortar volumes, concrete mixing frameworks, and structural masonry budgets.",
};

export default function CalculatorCategories() {
  const categories = [
    ...new Set(
      calculators.map(
        (calculator) => calculator.category,
      ),
    ),
  ];

  return (
    <section className="mt-16 space-y-20">
      {categories.map((category) => {
        const categoryCalculators = calculators.filter(
          (calculator) => calculator.category === category,
        );

        if (categoryCalculators.length === 0) {
          return null;
        }

        // Pull customized SEO description or fall back to an optimized default structure if a new category is added later
        const seoDescription = 
          CATEGORY_SEO_DESCRIPTIONS[category] || 
          `Access free, high-precision ${category.toLowerCase()} calculation tools engineered to streamline your daily workflows, computations, and analytical planning rules.`;

        return (
          <div key={category}>
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                  {category} Calculators
                  <span className="ml-2 text-lg font-medium text-slate-500">
                    ({categoryCalculators.length})
                  </span>
                </h2>

                <p className="mt-2 max-w-3xl text-sm  text-slate-600 dark:text-slate-400">
                  {seoDescription}
                </p>
              </div>
            </div>

            {/* Cards */}
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categoryCalculators
                .slice(0, 6)
                .map((calculator) => (
                  <Link
                    key={calculator.slug}
                    href={`/${calculator.slug}`}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-3xl
                      border
                      border-slate-200
                      bg-white
                      p-6
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-blue-500
                      hover:shadow-xl
                      dark:border-slate-700
                      dark:bg-slate-900
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-blue-500/0
                        to-indigo-500/0
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                        group-hover:from-blue-500/5
                        group-hover:to-indigo-500/10
                      "
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between">
                        <span
                          className="
                            rounded-full
                            bg-blue-50
                            px-3
                            py-1
                            text-xs
                            font-semibold
                            text-blue-600
                            dark:bg-blue-500/10
                            dark:text-blue-400
                          "
                        >
                          {calculator.category}
                        </span>

                        <ArrowUpRight
                          size={18}
                          className="
                            text-slate-400
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                            group-hover:-translate-y-1
                            group-hover:text-blue-500
                          "
                        />
                      </div>

                      <h3
                        className="
                          mt-4
                          text-xl
                          font-bold
                          text-slate-900
                          dark:text-white
                        "
                      >
                        {calculator.name}
                      </h3>

                      <p
                        className="
                          mt-3
                          line-clamp-3
                          text-sm
                          leading-6
                          text-slate-600
                          dark:text-slate-400
                        "
                      >
                        {calculator.description}
                      </p>

                      <div
                        className="
                          mt-5
                          flex
                          items-center
                          gap-2
                          text-sm
                          font-semibold
                          text-blue-600
                          dark:text-blue-400
                        "
                      >
                        Open Calculator
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>

            {/* Show View All below cards too */}
            {categoryCalculators.length > 6 && (
              <div className="mt-8 text-center">
                <Link
                  href={`/category/${category.toLowerCase()}`}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-6
                    py-3
                    font-semibold
                    text-white
                    transition-all
                    hover:bg-blue-700
                  "
                >
                  View All {categoryCalculators.length} {category} Calculators
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}