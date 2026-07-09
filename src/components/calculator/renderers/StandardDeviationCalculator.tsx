"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function StandardDeviationCalculator() {
  const [numbers, setNumbers] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (!submitted || !numbers.trim()) {
      return null;
    }

    const values = numbers
      .split(",")
      .map((num) =>
        Number(num.trim()),
      )
      .filter(
        (num) => !isNaN(num),
      );

    if (values.length === 0) {
      return null;
    }

    const count = values.length;

    const sum = values.reduce(
      (acc, curr) => acc + curr,
      0,
    );

    const mean = sum / count;

    const variance =
      values.reduce(
        (acc, value) =>
          acc +
          Math.pow(
            value - mean,
            2,
          ),
        0,
      ) / count;

    const standardDeviation =
      Math.sqrt(variance);

    const minimum =
      Math.min(...values);

    const maximum =
      Math.max(...values);

    const range =
      maximum - minimum;

    return {
      count,
      sum,
      mean,
      variance,
      standardDeviation,
      minimum,
      maximum,
      range,
    };
  }, [numbers, submitted]);

  const results = result
    ? [
        {
          label:
            "Standard Deviation",
          value:
            result.standardDeviation.toFixed(
              4,
            ),
          highlight: true,
        },

        {
          label: "Variance",
          value:
            result.variance.toFixed(
              4,
            ),
        },

        {
          label: "Mean",
          value:
            result.mean.toFixed(
              4,
            ),
        },

        {
          label: "Count",
          value:
            result.count,
        },

        {
          label: "Sum",
          value:
            result.sum.toFixed(
              2,
            ),
        },

        {
          label:
            "Minimum",
          value:
            result.minimum,
        },

        {
          label:
            "Maximum",
          value:
            result.maximum,
        },

        {
          label: "Range",
          value:
            result.range,
        },
      ]
    : [];

  const resetCalculator = () => {
    setNumbers("");
    setSubmitted(false);
  };

  return (
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Standard Deviation Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Calculate standard
        deviation, variance,
        mean, range, and other
        statistical measures
        from a dataset.
      </p>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Enter Numbers
          (Comma Separated)
        </label>

        <textarea
          value={numbers}
          onChange={(e) =>
            setNumbers(
              e.target.value,
            )
          }
          placeholder="10, 20, 30, 40, 50"
          rows={4}
          className="w-full rounded-xl border p-4"
        />
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
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Standard Deviation
          </h3>

          <p className="mt-3 text-3xl font-bold text-blue-700">
            {result.standardDeviation.toFixed(
              4,
            )}
          </p>

          <p className="mt-2 text-slate-600">
            Variance:{" "}
            {result.variance.toFixed(
              4,
            )}
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Statistical Results"
          results={results}
          calculatorName="Statistical Results"
        />
      )}
    </div>
  );
}