"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function InflationCalculator() {
  const [currentValue, setCurrentValue] =
    useState("");

  const [inflationRate, setInflationRate] =
    useState("6");

  const [years, setYears] =
    useState("10");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !submitted ||
      !currentValue ||
      !inflationRate ||
      !years
    ) {
      return null;
    }

    const presentValue =
      Number(currentValue);

    const rate =
      Number(inflationRate) / 100;

    const period =
      Number(years);

    const futureValue =
      presentValue *
      Math.pow(1 + rate, period);

    const increaseAmount =
      futureValue - presentValue;

    const purchasingPower =
      presentValue /
      Math.pow(1 + rate, period);

    return {
      futureValue,
      increaseAmount,
      purchasingPower,
    };
  }, [
    currentValue,
    inflationRate,
    years,
    submitted,
  ]);

  const results = result
    ? [
        {
          label: "Future Value",
          value: `₹${result.futureValue.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 0,
            },
          )}`,
          highlight: true,
        },

        {
          label: "Increase Due To Inflation",
          value: `₹${result.increaseAmount.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 0,
            },
          )}`,
        },

        {
          label: "Future Purchasing Power",
          value: `₹${result.purchasingPower.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 0,
            },
          )}`,
        },
      ]
    : [];

  const resetCalculator = () => {
    setCurrentValue("");
    setInflationRate("6");
    setYears("10");
    setSubmitted(false);
  };

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
    

      <p className="mt-2 text-slate-600">
        Estimate the future value of
        money, inflation-adjusted costs,
        and purchasing power over time.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        <div>
          <label className="mb-2 block font-medium">
            Current Amount (₹)
          </label>

          <input
            type="number"
            value={currentValue}
            onChange={(e) =>
              setCurrentValue(
                e.target.value,
              )
            }
            placeholder="100000"
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
            Number of Years
          </label>

          <input
            type="number"
            value={years}
            onChange={(e) =>
              setYears(
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
          Calculate Inflation
        </button>

        <button
          onClick={resetCalculator}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-orange-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Inflation Adjusted Value
          </h3>

          <p className="mt-3 text-3xl font-bold text-orange-700">
            ₹
            {result.futureValue.toLocaleString(
              "en-IN",
              {
                maximumFractionDigits: 0,
              },
            )}
          </p>

          <p className="mt-2 text-slate-600">
            This is the estimated future
            cost after inflation.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Inflation Calculation Results"
          results={results}
        />
      )}
    </div>
  );
}