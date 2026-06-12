import Link from "next/link";
import { calculators } from "@/src/data/calculators";

export default function PopularCalculators() {
  const popular = calculators.filter(
    (calculator) => calculator.isPopular
  );

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold">
        Popular Calculators
      </h2>

      <p className="mt-2 text-slate-600">
        Most frequently used calculators.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {popular.map((calculator) => (
          <Link
            key={calculator.slug}
            href={`/${calculator.slug}`}
            className="rounded-2xl border p-5 transition hover:shadow-md"
          >
            <h3 className="font-semibold">
              {calculator.name}
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              {calculator.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}