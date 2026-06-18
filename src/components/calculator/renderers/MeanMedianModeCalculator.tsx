"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function MeanMedianModeCalculator() {
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

    const sorted = [...values].sort(
      (a, b) => a - b,
    );

    const sum = values.reduce(
      (acc, curr) => acc + curr,
      0,
    );

    const mean =
      sum / values.length;

    let median = 0;

    if (
      sorted.length % 2 === 0
    ) {
      median =
        (sorted[
          sorted.length / 2 - 1
        ] +
          sorted[
            sorted.length / 2
          ]) /
        2;
    } else {
      median =
        sorted[
          Math.floor(
            sorted.length / 2,
          )
        ];
    }

    const frequency =
      new Map<
        number,
        number
      >();

    let maxFrequency = 0;

    sorted.forEach((num) => {
      const count =
        (frequency.get(num) ??
          0) + 1;

      frequency.set(
        num,
        count,
      );

      if (
        count >
        maxFrequency
      ) {
        maxFrequency = count;
      }
    });

    const modes = Array.from(
      frequency.entries(),
    )
      .filter(
        ([, count]) =>
          count ===
            maxFrequency &&
          maxFrequency > 1,
      )
      .map(([num]) => num);

    return {
      mean,
      median,
      mode:
        modes.length > 0
          ? modes.join(", ")
          : "No Mode",
      count: values.length,
      minimum:
        sorted[0],
      maximum:
        sorted[
          sorted.length - 1
        ],
      range:
        sorted[
          sorted.length - 1
        ] - sorted[0],
      sum,
    };
  }, [numbers, submitted]);

  const results = result
    ? [
        {
          label: "Mean",
          value:
            result.mean.toFixed(
              2,
            ),
          highlight: true,
        },
        {
          label: "Median",
          value:
            result.median,
        },
        {
          label: "Mode",
          value:
            result.mode,
        },
        {
          label: "Count",
          value:
            result.count,
        },
        {
          label: "Sum",
          value:
            result.sum,
        },
        {
          label: "Minimum",
          value:
            result.minimum,
        },
        {
          label: "Maximum",
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
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">

      <p className="mt-2 text-slate-600">
        Enter numbers separated
        by commas to calculate
        mean, median, mode,
        range, minimum, and
        maximum values.
      </p>

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
          placeholder="10, 15, 20, 20, 25"
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
            Statistics Summary
          </h3>

          <p className="mt-3 text-3xl font-bold text-blue-700">
            Mean:{" "}
            {result.mean.toFixed(
              2,
            )}
          </p>

          <p className="mt-2 text-slate-600">
            Median:{" "}
            {result.median} •
            Mode: {result.mode}
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Statistical Results"
          results={results}
        />
      )}
    </div>
  );
}