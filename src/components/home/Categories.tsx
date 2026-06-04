import { categories } from "@/src/data/category/Category";

export default function CalculatorCategories() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold">
            Calculator Categories
          </h2>

          <p className="mt-2 text-slate-600">
            Browse calculators by category
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <div
              key={category.slug}
              className="rounded-xl border bg-white p-6 text-center"
            >
              <h3 className="font-semibold">
                {category.name}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {category.count} Calculators
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}