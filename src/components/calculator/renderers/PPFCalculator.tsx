"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function PPFCalculator() {
  const [annualInvestment, setAnnualInvestment] =
    useState("");

  const [interestRate, setInterestRate] =
    useState("7.1");

  const [years, setYears] =
    useState("15");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !submitted ||
      !annualInvestment ||
      !interestRate ||
      !years
    ) {
      return null;
    }

    const yearlyDeposit =
      Number(annualInvestment);

    const rate =
      Number(interestRate) / 100;

    const tenure =
      Number(years);

    let balance = 0;

    for (
      let year = 1;
      year <= tenure;
      year++
    ) {
      balance =
        (balance + yearlyDeposit) *
        (1 + rate);
    }

    const totalInvestment =
      yearlyDeposit * tenure;

    const interestEarned =
      balance - totalInvestment;

    return {
      maturityValue: balance,
      totalInvestment,
      interestEarned,
    };
  }, [
    annualInvestment,
    interestRate,
    years,
    submitted,
  ]);

  const results = result
    ? [
        {
          label:
            "Maturity Amount",
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
          value: `₹${result.totalInvestment.toLocaleString(
            "en-IN",
          )}`,
        },

        {
          label:
            "Interest Earned",
          value: `₹${result.interestEarned.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 0,
            },
          )}`,
        },
      ]
    : [];

  const resetCalculator = () => {
    setAnnualInvestment("");
    setInterestRate("7.1");
    setYears("15");
    setSubmitted(false);
  };

  return (
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
    

      <p className="mt-2 text-slate-600">
        Calculate your Public
        Provident Fund maturity
        amount, interest earned,
        and total investment.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        <div>
          <label className="mb-2 block font-medium">
            Annual Investment (₹)
          </label>

          <input
            type="number"
            value={
              annualInvestment
            }
            onChange={(e) =>
              setAnnualInvestment(
                e.target.value,
              )
            }
            placeholder="150000"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Interest Rate (%)
          </label>

          <input
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) =>
              setInterestRate(
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
          className="rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90"
        >
          Calculate PPF
        </button>

        <button
          onClick={resetCalculator}
          className="rounded-xl border px-6 py-3 transition hover:bg-slate-100"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Estimated PPF
            Maturity Value
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
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="PPF Calculation Results"
          results={results}
           calculatorName="PPF Calculation Results"
        />
      )}
    </div>
  );
}