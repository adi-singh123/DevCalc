"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function LumpsumCalculator() {
  const [investment, setInvestment] =
    useState("");

  const [returnRate, setReturnRate] =
    useState("12");

  const [years, setYears] =
    useState("10");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !submitted ||
      !investment ||
      !returnRate ||
      !years
    ) {
      return null;
    }

    const principal =
      Number(investment);

    const rate =
      Number(returnRate) / 100;

    const tenure =
      Number(years);

    const maturityValue =
      principal *
      Math.pow(
        1 + rate,
        tenure,
      );

    const wealthGained =
      maturityValue - principal;

    return {
      maturityValue,
      wealthGained,
      principal,
    };
  }, [
    investment,
    returnRate,
    years,
    submitted,
  ]);

  const results = result
    ? [
        {
          label:
            "Maturity Value",
          value: `₹${result.maturityValue.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 0,
            },
          )}`,
          highlight: true,
        },

        {
          label:
            "Total Investment",
          value: `₹${result.principal.toLocaleString(
            "en-IN",
          )}`,
        },

        {
          label:
            "Wealth Gained",
          value: `₹${result.wealthGained.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 0,
            },
          )}`,
        },
      ]
    : [];

  const resetCalculator = () => {
    setInvestment("");
    setReturnRate("12");
    setYears("10");
    setSubmitted(false);
  };

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
   

      <p className="mt-2 text-slate-600">
        Calculate the future value
        of your one-time investment
        using compound growth.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        <div>
          <label className="mb-2 block font-medium">
            Investment Amount (₹)
          </label>

          <input
            type="number"
            value={investment}
            onChange={(e) =>
              setInvestment(
                e.target.value,
              )
            }
            placeholder="100000"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Expected Return (%)
          </label>

          <input
            type="number"
            step="0.1"
            value={returnRate}
            onChange={(e) =>
              setReturnRate(
                e.target.value,
              )
            }
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Investment Period
            (Years)
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
          Calculate Returns
        </button>

        <button
          onClick={resetCalculator}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Estimated Future Value
          </h3>

          <p className="mt-3 text-3xl font-bold text-green-700">
            ₹
            {result.maturityValue.toLocaleString(
              "en-IN",
              {
                maximumFractionDigits: 0,
              },
            )}
          </p>

          <p className="mt-2 text-slate-600">
            Based on compound annual
            growth over the selected
            investment period.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Lumpsum Investment Results"
          results={results}
        />
      )}
    </div>
  );
}