"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function AverageCalculator() {
  const [numbers, setNumbers] = useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const averageData = useMemo(() => {
    if (!submitted || !numbers.trim())
      return null;

    const values = numbers
      .split(/[,\s]+/)
      .map((num) => Number(num.trim()))
      .filter((num) => !isNaN(num));

    if (values.length === 0) return null;

    const sum = values.reduce(
      (acc, curr) => acc + curr,
      0,
    );

    const average =
      sum / values.length;

    const min = Math.min(...values);

    const max = Math.max(...values);

    return {
      average,
      sum,
      count: values.length,
      min,
      max,
    };
  }, [numbers, submitted]);

  const results = averageData
    ? [
        {
          label: "Average",
          value:
            averageData.average.toFixed(
              2,
            ),
          highlight: true,
        },
        {
          label: "Sum",
          value:
            averageData.sum.toFixed(2),
        },
        {
          label: "Count",
          value: averageData.count,
        },
        {
          label: "Minimum",
          value:
            averageData.min.toFixed(2),
        },
        {
          label: "Maximum",
          value:
            averageData.max.toFixed(2),
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
     

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Enter Numbers
        </label>

        <textarea
          value={numbers}
          onChange={(e) =>
            setNumbers(
              e.target.value,
            )
          }
          rows={5}
          placeholder="10, 20, 30, 40"
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
          Calculate Average
        </button>

        <button
          onClick={() => {
            setNumbers("");
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {averageData && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Average Value:{" "}
            {averageData.average.toFixed(
              2,
            )}
          </h3>

          <p className="mt-2 text-slate-600">
            Calculated from{" "}
            {averageData.count} entered
            numbers.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Average Results"
          results={results}
        />
      )}
    </div>
  );
}