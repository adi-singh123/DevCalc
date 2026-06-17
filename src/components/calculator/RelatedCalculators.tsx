import Link from "next/link";
import { calculators } from "@/src/data/calculators";

type Props = {
  currentSlug: string;
};

export default function RelatedCalculators({
  currentSlug,
}: Props) {
  const currentCalculator =
    calculators.find(
      (calculator) =>
        calculator.slug ===
        currentSlug
    );

  if (!currentCalculator) {
    return null;
  }

  const related = calculators
    .filter(
      (calculator) =>
        calculator.slug !==
          currentSlug &&
        calculator.category ===
          currentCalculator.category
    )
    .slice(0, 4);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold">
        Related{" "}
        {
          currentCalculator.category
        }{" "}
        Calculators
      </h2>

      <p className="mt-2 text-slate-600">
        Explore more{" "}
        {currentCalculator.category.toLowerCase()}{" "}
        calculators.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {related.map(
          (calculator) => (
            <Link
              key={
                calculator.slug
              }
              href={`/${calculator.slug}`}
              className="rounded-2xl border p-5 transition hover:shadow-md hover:border-primary"
            >
              <h3 className="font-semibold">
                {
                  calculator.name
                }
              </h3>

              <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                {
                  calculator.description
                }
              </p>
            </Link>
          ),
        )}
      </div>
    </section>
  );
}