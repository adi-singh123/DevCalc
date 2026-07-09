"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] =
    useState("");

  const [returnRate, setReturnRate] =
    useState("");

  const [years, setYears] = useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const sipData = useMemo(() => {
    if (
      !submitted ||
      !monthlyInvestment ||
      !returnRate ||
      !years
    ) {
      return null;
    }

    const investment = Number(
      monthlyInvestment,
    );

    const annualReturn =
      Number(returnRate);

    const tenure = Number(years);

    if (
      Number.isNaN(investment) ||
      Number.isNaN(annualReturn) ||
      Number.isNaN(tenure) ||
      investment <= 0 ||
      annualReturn <= 0 ||
      tenure <= 0
    ) {
      return null;
    }

    const monthlyRate =
      annualReturn / 12 / 100;

    const totalMonths =
      tenure * 12;

    const maturityValue =
      investment *
      (((Math.pow(
        1 + monthlyRate,
        totalMonths,
      ) -
        1) /
        monthlyRate) *
        (1 + monthlyRate));

    const investedAmount =
      investment * totalMonths;

    const estimatedReturns =
      maturityValue -
      investedAmount;

    return {
      investedAmount,
      estimatedReturns,
      maturityValue,
    };
  }, [
    monthlyInvestment,
    returnRate,
    years,
    submitted,
  ]);

  const results = sipData
    ? [
        {
          label:
            "Invested Amount",
          value: `₹${sipData.investedAmount.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 0,
            },
          )}`,
        },
        {
          label:
            "Estimated Returns",
          value: `₹${sipData.estimatedReturns.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 0,
            },
          )}`,
        },
        {
          label:
            "Total Value",
          value: `₹${sipData.maturityValue.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 0,
            },
          )}`,
          highlight: true,
        },
      ]
    : [];

  return (
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        SIP Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Calculate SIP returns,
        invested amount, and
        future value instantly.
      </p>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Monthly Investment (₹)
        </label>

        <input
          type="number"
          value={
            monthlyInvestment
          }
          onChange={(e) =>
            setMonthlyInvestment(
              e.target.value,
            )
          }
          placeholder="5000"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Expected Return (%)
        </label>

        <input
          type="number"
          value={returnRate}
          onChange={(e) =>
            setReturnRate(
              e.target.value,
            )
          }
          placeholder="12"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
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
          placeholder="10"
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
          Calculate SIP
        </button>

        <button
          onClick={() => {
            setMonthlyInvestment(
              "",
            );
            setReturnRate("");
            setYears("");
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {sipData && (
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            SIP Summary
          </h3>

          <p className="mt-2 text-slate-600">
            Your investment may
            grow to{" "}
            <strong>
              ₹
              {sipData.maturityValue.toLocaleString(
                "en-IN",
                {
                  maximumFractionDigits: 0,
                },
              )}
            </strong>
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="SIP Results"
          results={results}
            calculatorName="SIP Results"

        />
      )}
    </div>
  );
}