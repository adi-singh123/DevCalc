"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function HCFCalculator() {
  const [numbers, setNumbers] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const gcd = (
    a: number,
    b: number,
  ): number => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }

    return Math.abs(a);
  };

  const result = useMemo(() => {
    if (!submitted || !numbers) {
      return null;
    }

    const values = numbers
      .split(",")
      .map((num) =>
        Number(num.trim()),
      )
      .filter(
        (num) =>
          !isNaN(num) && num > 0,
      );

    if (values.length < 2) {
      return null;
    }

    let calculatedHCF =
      values[0];

    for (
      let i = 1;
      i < values.length;
      i++
    ) {
      calculatedHCF = gcd(
        calculatedHCF,
        values[i],
      );
    }

    return {
      numbers: values,
      hcf: calculatedHCF,
      count: values.length,
      largest:
        Math.max(...values),
      smallest:
        Math.min(...values),
    };
  }, [numbers, submitted]);

  const results = result
    ? [
        {
          label:
            "Highest Common Factor",
          value: result.hcf,
          highlight: true,
        },

        {
          label:
            "Numbers Entered",
          value:
            result.numbers.join(
              ", ",
            ),
        },

        {
          label:
            "Count of Numbers",
          value: result.count,
        },

        {
          label:
            "Largest Number",
          value: result.largest,
        },

        {
          label:
            "Smallest Number",
          value:
            result.smallest,
        },
      ]
    : [];

  const resetCalculator = () => {
    setNumbers("");
    setSubmitted(false);
  };

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        HCF Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Calculate the Highest
        Common Factor (HCF) or
        Greatest Common Divisor
        (GCD) of two or more
        numbers instantly.
      </p>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Enter Numbers
        </label>

        <input
          type="text"
          value={numbers}
          onChange={(e) =>
            setNumbers(
              e.target.value,
            )
          }
          placeholder="24, 36, 48"
          className="w-full rounded-xl border p-3"
        />

        <p className="mt-2 text-sm text-slate-500">
          Example: 24, 36, 48
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() =>
            setSubmitted(true)
          }
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate HCF
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
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Highest Common Factor
          </h3>

          <p className="mt-3 text-4xl font-bold text-green-700">
            {result.hcf}
          </p>

          <p className="mt-3 text-slate-600">
            HCF of{" "}
            {result.numbers.join(
              ", ",
            )}
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="HCF Results"
          results={results}
        />
      )}
    </div>
  );
}