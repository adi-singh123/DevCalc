import Link from "next/link";
import { calculators } from "@/src/data/calculators";

type Props = {
  compareWith?: string[];
};

export default function CompareCalculatorTable({
  compareWith = [],
}: Props) {
  const items = calculators.filter(
    (calculator) =>
      compareWith.includes(
        calculator.slug
      )
  );

  if (!items.length) return null;

  return (
    <section className="mt-12 rounded-3xl border bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
      <h2 className="text-2xl font-bold">
        Compare Similar Calculators
      </h2>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">
                Calculator
              </th>

              <th className="p-4 text-left">
                Description
              </th>

              <th className="p-4 text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {items.map(
              (calculator) => (
                <tr
                  key={
                    calculator.slug
                  }
                  className="border-b"
                >
                  <td className="p-4 font-medium">
                    {
                      calculator.name
                    }
                  </td>

                  <td className="p-4 text-sm text-slate-600">
                    {
                      calculator.description
                    }
                  </td>

                  <td className="p-4 text-center">
                    <Link
                      href={`/${calculator.slug}`}
                      className="
                        inline-flex
                        rounded-lg
                        bg-blue-600
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-white
                        hover:bg-blue-700
                      "
                    >
                      View 
                    </Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}