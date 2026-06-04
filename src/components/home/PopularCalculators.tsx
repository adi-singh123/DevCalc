import Link from "next/link";
import { popularCalculators } from "@/src/data/calculators/popular";

export default function PopularCalculators() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold text-blue-600">
          ⭐ Most Used
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Popular Calculators
        </h2>

        <p className="mt-2 text-slate-600">
          Jump straight to the most-used tools
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {popularCalculators.map((calculator) => (
          <Link
            key={calculator.slug}
            href={`/${calculator.slug}`}
            className="rounded-xl border p-5 transition hover:shadow-md"
          >
            <h3 className="font-semibold">
              {calculator.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}