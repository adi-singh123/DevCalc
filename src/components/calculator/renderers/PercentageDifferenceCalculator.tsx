"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function PercentageDifferenceCalculator() {
  const [firstValue, setFirstValue] =
    useState("");

  const [secondValue, setSecondValue] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !submitted ||
      !firstValue ||
      !secondValue
    ) {
      return null;
    }

    const first = Number(firstValue);

    const second = Number(secondValue);

    if (
      isNaN(first) ||
      isNaN(second)
    ) {
      return null;
    }

    const difference =
      Math.abs(first - second);

    const average =
      (first + second) / 2;

    const percentageDifference =
      average === 0
        ? 0
        : (difference /
            average) *
          100;

    const percentageChange =
      first === 0
        ? 0
        : ((second - first) /
            first) *
          100;

    const changeType =
      second > first
        ? "Increase"
        : second < first
          ? "Decrease"
          : "No Change";

    return {
      difference,
      average,
      percentageDifference,
      percentageChange,
      changeType,
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
            "Percentage Difference",
          value: `${result.percentageDifference.toFixed(
            2,
          )}%`,
          highlight: true,
        },

        {
          label:
            "Absolute Difference",
          value:
            result.difference.toFixed(
              2,
            ),
        },

        {
          label: "Average",
          value:
            result.average.toFixed(
              2,
            ),
        },

        {
          label:
            "Percentage Change",
          value: `${result.percentageChange.toFixed(
            2,
          )}%`,
        },

        {
          label:
            "Change Type",
          value:
            result.changeType,
        },
      ]
    : [];

  const resetCalculator = () => {
    setFirstValue("");
    setSecondValue("");
    setSubmitted(false);
  };

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
    

      <p className="mt-2 text-slate-600">
        Compare two values and
        calculate percentage
        difference, percentage
        change, increase, or
        decrease instantly.
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
            placeholder="100"
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
            placeholder="120"
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
          onClick={resetCalculator}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Percentage Difference
          </h3>

          <p className="mt-3 text-3xl font-bold text-blue-700">
            {result.percentageDifference.toFixed(
              2,
            )}
            %
          </p>

          <p className="mt-2 text-slate-600">
            {result.changeType}
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Percentage Difference Results"
          results={results}
        />
      )}
    </div>
  );
}