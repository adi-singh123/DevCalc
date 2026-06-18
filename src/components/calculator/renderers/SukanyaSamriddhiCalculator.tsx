"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function SukanyaSamriddhiCalculator() {
  const [childAge, setChildAge] =
    useState("");

  const [
    annualInvestment,
    setAnnualInvestment,
  ] = useState("");

  const [interestRate, setInterestRate] =
    useState("8.2");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !childAge ||
      !annualInvestment ||
      !interestRate ||
      !submitted
    ) {
      return null;
    }

    const age = Number(childAge);

    const yearlyDeposit = Number(
      annualInvestment
    );

    const rate =
      Number(interestRate) / 100;

    const depositYears = 15;

    const maturityYears = 21;

    let balance = 0;

    for (
      let year = 1;
      year <= maturityYears;
      year++
    ) {
      if (year <= depositYears) {
        balance += yearlyDeposit;
      }

      balance *= 1 + rate;
    }

    const totalInvestment =
      yearlyDeposit * depositYears;

    const interestEarned =
      balance - totalInvestment;

    const maturityAge =
      age + maturityYears;

    return {
      totalInvestment,
      interestEarned,
      maturityAmount: balance,
      maturityAge,
      yearsRemaining:
        maturityYears,
    };
  }, [
    childAge,
    annualInvestment,
    interestRate,
    submitted,
  ]);

  const results = result
    ? [
        {
          label:
            "Maturity Amount",
          value: `₹${Math.round(
            result.maturityAmount
          ).toLocaleString()}`,
          highlight: true,
        },
        {
          label:
            "Total Investment",
          value: `₹${result.totalInvestment.toLocaleString()}`,
        },
        {
          label:
            "Interest Earned",
          value: `₹${Math.round(
            result.interestEarned
          ).toLocaleString()}`,
        },
        {
          label:
            "Maturity Age",
          value: `${result.maturityAge} Years`,
        },
        {
          label:
            "Years Remaining",
          value:
            result.yearsRemaining,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="text-2xl font-bold">
        Sukanya Samriddhi
        Calculator
      </h2>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Girl Child Age
        </label>

        <input
          type="number"
          min="0"
          max="10"
          value={childAge}
          onChange={(e) =>
            setChildAge(
              e.target.value
            )
          }
          placeholder="e.g. 5"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Annual Investment (₹)
        </label>

        <input
          type="number"
          min="250"
          max="150000"
          value={
            annualInvestment
          }
          onChange={(e) =>
            setAnnualInvestment(
              e.target.value
            )
          }
          placeholder="e.g. 150000"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Interest Rate (%)
        </label>

        <input
          type="number"
          step="0.1"
          value={interestRate}
          onChange={(e) =>
            setInterestRate(
              e.target.value
            )
          }
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
          Calculate
        </button>

        <button
          onClick={() => {
            setChildAge("");
            setAnnualInvestment(
              ""
            );
            setInterestRate("8.2");
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center dark:bg-green-900/20">
          <h3 className="text-xl font-semibold">
            Estimated Maturity
            Value
          </h3>

          <p className="mt-2 text-3xl font-bold text-green-600">
            ₹
            {Math.round(
              result.maturityAmount
            ).toLocaleString()}
          </p>

          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Total investment of ₹
            {result.totalInvestment.toLocaleString()}
            may grow to the above
            amount at maturity.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="SSY Results"
          results={results}
        />
      )}
    </div>
  );
}