"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function FDCalculator() {
  const [depositAmount, setDepositAmount] =
    useState("");

  const [interestRate, setInterestRate] =
    useState("");

  const [years, setYears] = useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const fdData = useMemo(() => {
    if (
      !submitted ||
      !depositAmount ||
      !interestRate ||
      !years
    ) {
      return null;
    }

    const principal = Number(
      depositAmount,
    );

    const rate =
      Number(interestRate) / 100;

    const tenure = Number(years);

    if (
      Number.isNaN(principal) ||
      Number.isNaN(rate) ||
      Number.isNaN(tenure) ||
      principal <= 0 ||
      tenure <= 0
    ) {
      return null;
    }

    // Quarterly Compounding
    const n = 4;

    const maturityAmount =
      principal *
      Math.pow(
        1 + rate / n,
        n * tenure,
      );

    const interestEarned =
      maturityAmount -
      principal;

    return {
      principal,
      interestEarned,
      maturityAmount,
    };
  }, [
    depositAmount,
    interestRate,
    years,
    submitted,
  ]);

  const results = fdData
    ? [
        {
          label:
            "Deposit Amount",
          value: `₹${fdData.principal.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 0,
            },
          )}`,
        },
        {
          label:
            "Interest Earned",
          value: `₹${fdData.interestEarned.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 0,
            },
          )}`,
        },
        {
          label:
            "Maturity Amount",
          value: `₹${fdData.maturityAmount.toLocaleString(
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
    

      <p className="mt-2 text-slate-600">
        Calculate Fixed Deposit
        maturity value, interest
        earned, and total returns
        instantly.
      </p>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Deposit Amount (₹)
        </label>

        <input
          type="number"
          value={depositAmount}
          onChange={(e) =>
            setDepositAmount(
              e.target.value,
            )
          }
          placeholder="100000"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Interest Rate (%)
        </label>

        <input
          type="number"
          value={interestRate}
          onChange={(e) =>
            setInterestRate(
              e.target.value,
            )
          }
          placeholder="7"
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
          placeholder="5"
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
          Calculate FD
        </button>

        <button
          onClick={() => {
            setDepositAmount(
              "",
            );
            setInterestRate(
              "",
            );
            setYears("");
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {fdData && (
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            FD Summary
          </h3>

          <p className="mt-2 text-slate-600">
            Your investment may
            grow to{" "}
            <strong>
              ₹
              {fdData.maturityAmount.toLocaleString(
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
          title="FD Results"
          results={results}
          calculatorName="FD Results"

        />
      )}
    </div>
  );
}