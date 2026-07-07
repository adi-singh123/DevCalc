import Link from "next/link";
import { calculators } from "@/src/data/calculators";

type Props = {
  compareWith?: string[];
};

export default function CompareCalculatorTable({ compareWith = [] }: Props) {
  const items = calculators.filter((calculator) =>
    compareWith.includes(calculator.slug)
  );

  if (!items.length) return null;

  return (
    <section className="mt-12 rounded-3xl border bg-white p-4 sm:p-6 dark:border-slate-700 dark:bg-slate-900">
      <h2 className="text-xl sm:text-2xl font-bold">
        Compare Similar Calculators
      </h2>

      {/* Mobile: stacked cards */}
      <div className="mt-6 space-y-4 md:hidden">
        {items.map((calculator) => (
          <div
            key={calculator.slug}
            className="rounded-2xl border p-4 dark:border-slate-700"
          >
            <h3 className="font-semibold text-base text-slate-900 dark:text-slate-100">
              {calculator.name}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {calculator.description}
            </p>

            <Link
              href={`/${calculator.slug}`}
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              View
            </Link>
          </div>
        ))}
      </div>

      {/* Desktop: table */}
      <div className="mt-6 hidden overflow-x-auto md:block">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">Calculator</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {items.map((calculator) => (
              <tr key={calculator.slug} className="border-b">
                <td className="p-4 font-medium">{calculator.name}</td>

                <td className="p-4 text-sm text-slate-600 dark:text-slate-400">
                  {calculator.description}
                </td>

                <td className="p-4 text-center">
                  <Link
                    href={`/${calculator.slug}`}
                    className="inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}