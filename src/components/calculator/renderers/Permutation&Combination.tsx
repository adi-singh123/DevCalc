"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function PermutationCombinationCalculator() {
  const [n, setN] =
    useState("");

  const [r, setR] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const factorial = (
    num: number,
  ): number => {
    if (num <= 1) return 1;

    let result = 1;

    for (
      let i = 2;
      i <= num;
      i++
    ) {
      result *= i;
    }

    return result;
  };

  const result = useMemo(() => {
    if (
      !submitted ||
      !n ||
      !r
    ) {
      return null;
    }

    const total =
      Number(n);

    const selected =
      Number(r);

    if (
      isNaN(total) ||
      isNaN(selected) ||
      total < 0 ||
      selected < 0 ||
      selected > total
    ) {
      return null;
    }

    const nFactorial =
      factorial(total);

    const rFactorial =
      factorial(selected);

    const nMinusRFactorial =
      factorial(
        total - selected,
      );

    const permutation =
      nFactorial /
      nMinusRFactorial;

    const combination =
      nFactorial /
      (rFactorial *
        nMinusRFactorial);

    return {
      permutation,
      combination,
      nFactorial,
      rFactorial,
      nMinusRFactorial,
    };
  }, [n, r, submitted]);

  const results = result
    ? [
        {
          label:
            "Permutation (nPr)",
          value:
            result.permutation.toLocaleString(),
          highlight: true,
        },

        {
          label:
            "Combination (nCr)",
          value:
            result.combination.toLocaleString(),
        },

        {
          label: "n!",
          value:
            result.nFactorial.toLocaleString(),
        },

        {
          label: "r!",
          value:
            result.rFactorial.toLocaleString(),
        },

        {
          label:
            "(n-r)!",
          value:
            result.nMinusRFactorial.toLocaleString(),
        },
      ]
    : [];

  const resetCalculator = () => {
    setN("");
    setR("");
    setSubmitted(false);
  };

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Permutation &
        Combination Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Calculate nPr, nCr,
        factorial values, and
        solve probability and
        combinatorics problems
        instantly.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Total Items (n)
          </label>

          <input
            type="number"
            value={n}
            onChange={(e) =>
              setN(
                e.target.value,
              )
            }
            placeholder="5"
            min="0"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Selected Items (r)
          </label>

          <input
            type="number"
            value={r}
            onChange={(e) =>
              setR(
                e.target.value,
              )
            }
            placeholder="2"
            min="0"
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
          Calculate
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
        <div className="mt-8 rounded-2xl border bg-indigo-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Calculation Results
          </h3>

          <p className="mt-3 text-3xl font-bold text-indigo-700">
            nPr ={" "}
            {result.permutation.toLocaleString()}
          </p>

          <p className="mt-2 text-2xl font-semibold text-indigo-600">
            nCr ={" "}
            {result.combination.toLocaleString()}
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Permutation & Combination Results"
          results={results}
        />
      )}
    </div>
  );
}