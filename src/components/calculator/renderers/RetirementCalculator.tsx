"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] =
    useState("");

  const [retirementAge, setRetirementAge] =
    useState("60");

  const [monthlyExpenses, setMonthlyExpenses] =
    useState("");

  const [inflationRate, setInflationRate] =
    useState("6");

  const [retirementYears, setRetirementYears] =
    useState("25");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !submitted ||
      !currentAge ||
      !retirementAge ||
      !monthlyExpenses ||
      !inflationRate ||
      !retirementYears
    ) {
      return null;
    }

    const age = Number(currentAge);

    const retireAge = Number(retirementAge);

    const expenses =
      Number(monthlyExpenses);

    const inflation =
      Number(inflationRate) / 100;

    const postRetirementYears =
      Number(retirementYears);

    const yearsToRetirement =
      retireAge - age;

    if (yearsToRetirement <= 0) {
      return null;
    }

    const futureMonthlyExpenses =
      expenses *
      Math.pow(
        1 + inflation,
        yearsToRetirement,
      );

    const annualExpenses =
      futureMonthlyExpenses * 12;

    const requiredCorpus =
      annualExpenses *
      postRetirementYears;

    return {
      yearsToRetirement,
      futureMonthlyExpenses,
      annualExpenses,
      requiredCorpus,
    };
  }, [
    currentAge,
    retirementAge,
    monthlyExpenses,
    inflationRate,
    retirementYears,
    submitted,
  ]);

  const results = result
    ? [
        {
          label:
            "Required Retirement Corpus",
          value: `₹${result.requiredCorpus.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 0,
            },
          )}`,
          highlight: true,
        },

        {
          label:
            "Future Monthly Expenses",
          value: `₹${result.futureMonthlyExpenses.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 0,
            },
          )}`,
        },

        {
          label:
            "Future Annual Expenses",
          value: `₹${result.annualExpenses.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 0,
            },
          )}`,
        },

        {
          label:
            "Years Until Retirement",
          value:
            result.yearsToRetirement,
        },
      ]
    : [];

  const resetCalculator = () => {
    setCurrentAge("");
    setRetirementAge("60");
    setMonthlyExpenses("");
    setInflationRate("6");
    setRetirementYears("25");
    setSubmitted(false);
  };

  return (
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Retirement Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Estimate your retirement corpus,
        future expenses, and savings
        requirements based on inflation
        and retirement goals.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="mb-2 block font-medium">
            Current Age
          </label>

          <input
            type="number"
            value={currentAge}
            onChange={(e) =>
              setCurrentAge(
                e.target.value,
              )
            }
            placeholder="30"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Retirement Age
          </label>

          <input
            type="number"
            value={retirementAge}
            onChange={(e) =>
              setRetirementAge(
                e.target.value,
              )
            }
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Current Monthly Expenses (₹)
          </label>

          <input
            type="number"
            value={monthlyExpenses}
            onChange={(e) =>
              setMonthlyExpenses(
                e.target.value,
              )
            }
            placeholder="50000"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Inflation Rate (%)
          </label>

          <input
            type="number"
            step="0.1"
            value={inflationRate}
            onChange={(e) =>
              setInflationRate(
                e.target.value,
              )
            }
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Retirement Duration (Years)
          </label>

          <input
            type="number"
            value={retirementYears}
            onChange={(e) =>
              setRetirementYears(
                e.target.value,
              )
            }
            className="w-full rounded-xl border p-3"
          />
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() =>
            setSubmitted(true)
          }
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate Retirement
        </button>

        <button
          onClick={resetCalculator}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Estimated Retirement Corpus
          </h3>

          <p className="mt-3 text-3xl font-bold text-blue-700">
            ₹
            {result.requiredCorpus.toLocaleString(
              "en-IN",
              {
                maximumFractionDigits: 0,
              },
            )}
          </p>

          <p className="mt-2 text-slate-600">
            Amount estimated to support
            your future lifestyle after
            retirement.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Retirement Planning Results"
          results={results}
        />
      )}
    </div>
  );
}