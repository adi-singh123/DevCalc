"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function PrimeNumberCalculator() {
  const [number, setNumber] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (!submitted || !number) {
      return null;
    }

    const num = Number(number);

    if (
      isNaN(num) ||
      num < 1 ||
      !Number.isInteger(num)
    ) {
      return null;
    }

    const factors: number[] = [];

    for (
      let i = 1;
      i <= Math.sqrt(num);
      i++
    ) {
      if (num % i === 0) {
        factors.push(i);

        if (i !== num / i) {
          factors.push(num / i);
        }
      }
    }

    factors.sort(
      (a, b) => a - b,
    );

    const isPrime =
      num > 1 &&
      factors.length === 2;

    return {
      number: num,
      isPrime,
      factors,
      factorCount:
        factors.length,
      type:
        num % 2 === 0
          ? "Even"
          : "Odd",
    };
  }, [number, submitted]);

  const results = result
    ? [
        {
          label: "Status",
          value: result.isPrime
            ? "Prime Number"
            : "Composite Number",
          highlight: true,
        },

        {
          label: "Factors",
          value:
            result.factors.join(
              ", ",
            ),
        },

        {
          label:
            "Number of Factors",
          value:
            result.factorCount,
        },

        {
          label: "Type",
          value: result.type,
        },
      ]
    : [];

  const resetCalculator = () => {
    setNumber("");
    setSubmitted(false);
  };

  return (
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Prime Number Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Check whether a
        number is prime or
        composite. Find all
        factors, count
        divisors, and analyze
        number properties
        instantly.
      </p>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Enter Number
        </label>

        <input
          type="number"
          min="1"
          step="1"
          value={number}
          onChange={(e) =>
            setNumber(
              e.target.value,
            )
          }
          placeholder="17"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() =>
            setSubmitted(true)
          }
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Check Number
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
        <div
          className={`mt-8 rounded-2xl border p-6 text-center ${
            result.isPrime
              ? "bg-green-50"
              : "bg-blue-50"
          }`}
        >
          <h3 className="text-xl font-semibold">
            {result.number}
          </h3>

          <p
            className={`mt-3 text-3xl font-bold ${
              result.isPrime
                ? "text-green-700"
                : "text-blue-700"
            }`}
          >
            {result.isPrime
              ? "Prime Number"
              : "Composite Number"}
          </p>

          <p className="mt-3 text-slate-600">
            Factors:{" "}
            {result.factors.join(
              ", ",
            )}
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Prime Number Results"
          results={results}
        />
      )}
    </div>
  );
}