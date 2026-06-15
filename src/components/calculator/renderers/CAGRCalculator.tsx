"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function CAGRCalculator() {
  const [beginningValue, setBeginningValue] =
    useState("");

  const [endingValue, setEndingValue] =
    useState("");

  const [years, setYears] = useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !submitted ||
      !beginningValue ||
      !endingValue ||
      !years
    ) {
      return null;
    }

    const beginning =
      Number(beginningValue);

    const ending = Number(endingValue);

    const period = Number(years);

    if (
      beginning <= 0 ||
      ending <= 0 ||
      period <= 0
    ) {
      return null;
    }

    const cagr =
      (Math.pow(
        ending / beginning,
        1 / period,
      ) -
        1) *
      100;

    const absoluteReturn =
      ((ending - beginning) /
        beginning) *
      100;

    const profit =
      ending - beginning;

    return {
      cagr: cagr.toFixed(2),
      absoluteReturn:
        absoluteReturn.toFixed(2),
      profit: profit.toFixed(2),
      beginning: beginning.toFixed(2),
      ending: ending.toFixed(2),
    };
  }, [
    beginningValue,
    endingValue,
    years,
    submitted,
  ]);

  const results = result
    ? [
        {
          label:
            "Compound Annual Growth Rate",
          value: `${result.cagr}%`,
          highlight: true,
        },
        {
          label: "Absolute Return",
          value: `${result.absoluteReturn}%`,
        },
        {
          label: "Profit",
          value: `₹${result.profit}`,
        },
        {
          label: "Beginning Value",
          value: `₹${result.beginning}`,
        },
        {
          label: "Ending Value",
          value: `₹${result.ending}`,
        },
      ]
    : [];

  const handleReset = () => {
    setBeginningValue("");
    setEndingValue("");
    setYears("");
    setSubmitted(false);
  };

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        CAGR Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Calculate Compound Annual Growth Rate
        (CAGR), absolute returns, and profit
        from your investment.
      </p>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Beginning Value (₹)
        </label>

        <input
          type="number"
          min="1"
          value={beginningValue}
          onChange={(e) =>
            setBeginningValue(
              e.target.value,
            )
          }
          placeholder="Enter initial investment"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Ending Value (₹)
        </label>

        <input
          type="number"
          min="1"
          value={endingValue}
          onChange={(e) =>
            setEndingValue(
              e.target.value,
            )
          }
          placeholder="Enter final value"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Time Period (Years)
        </label>

        <input
          type="number"
          min="1"
          step="0.1"
          value={years}
          onChange={(e) =>
            setYears(e.target.value)
          }
          placeholder="Enter number of years"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate CAGR
        </button>

        <button
          onClick={handleReset}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <ResultsSection
          title="CAGR Results"
          results={results}
        />
      )}
    </div>
  );
}