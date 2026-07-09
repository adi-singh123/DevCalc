"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function RatioCalculator() {
  const [firstValue, setFirstValue] =
    useState("");

  const [secondValue, setSecondValue] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const gcd = (
    a: number,
    b: number,
  ): number => {
    return b === 0
      ? Math.abs(a)
      : gcd(b, a % b);
  };

  const result = useMemo(() => {
    if (
      !submitted ||
      !firstValue ||
      !secondValue
    ) {
      return null;
    }

    const a = Number(firstValue);
    const b = Number(secondValue);

    if (
      isNaN(a) ||
      isNaN(b) ||
      b === 0
    ) {
      return null;
    }

    const divisor = gcd(a, b);

    const simplifiedA =
      a / divisor;

    const simplifiedB =
      b / divisor;

    const ratioValue = a / b;

    const total = a + b;

    const percentageA =
      (a / total) * 100;

    const percentageB =
      (b / total) * 100;

    return {
      simplifiedA,
      simplifiedB,
      ratioValue,
      percentageA,
      percentageB,
      total,
    };
  }, [
    firstValue,
    secondValue,
    submitted,
  ]);

  const results = result
    ? [
        {
          label:
            "Simplified Ratio",
          value: `${result.simplifiedA}:${result.simplifiedB}`,
          highlight: true,
        },

        {
          label:
            "Ratio Value",
          value:
            result.ratioValue.toFixed(
              4,
            ),
        },

        {
          label:
            "First Value %",
          value: `${result.percentageA.toFixed(
            2,
          )}%`,
        },

        {
          label:
            "Second Value %",
          value: `${result.percentageB.toFixed(
            2,
          )}%`,
        },

        {
          label: "Total",
          value: result.total,
        },
      ]
    : [];

  const resetCalculator = () => {
    setFirstValue("");
    setSecondValue("");
    setSubmitted(false);
  };

  return (
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Ratio Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Simplify ratios, compare
        values, and calculate
        percentages instantly.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            First Value
          </label>

          <input
            type="number"
            value={firstValue}
            onChange={(e) =>
              setFirstValue(
                e.target.value,
              )
            }
            placeholder="20"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Second Value
          </label>

          <input
            type="number"
            value={secondValue}
            onChange={(e) =>
              setSecondValue(
                e.target.value,
              )
            }
            placeholder="30"
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
          Calculate Ratio
        </button>

        <button
          onClick={
            resetCalculator
          }
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Simplified Ratio
          </h3>

          <p className="mt-3 text-3xl font-bold text-blue-700">
            {result.simplifiedA}:
            {result.simplifiedB}
          </p>

          <p className="mt-2 text-slate-600">
            Ratio Value:{" "}
            {result.ratioValue.toFixed(
              4,
            )}
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Ratio Results"
          results={results}
        />
      )}
    </div>
  );
}