"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function SimpleInterestCalculator() {
  const [principal, setPrincipal] =
    useState("");

  const [interestRate, setInterestRate] =
    useState("");

  const [years, setYears] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const interestData = useMemo(() => {
    if (
      !submitted ||
      !principal ||
      !interestRate ||
      !years
    ) {
      return null;
    }

    const principalAmount =
      Number(principal);

    const rate =
      Number(interestRate);

    const tenure =
      Number(years);

    if (
      Number.isNaN(principalAmount) ||
      Number.isNaN(rate) ||
      Number.isNaN(tenure) ||
      principalAmount <= 0 ||
      rate <= 0 ||
      tenure <= 0
    ) {
      return null;
    }

    const simpleInterest =
      (principalAmount *
        rate *
        tenure) /
      100;

    const totalAmount =
      principalAmount +
      simpleInterest;

    return {
      principalAmount,
      simpleInterest,
      totalAmount,
    };
  }, [
    principal,
    interestRate,
    years,
    submitted,
  ]);

  const results = interestData
    ? [
        {
          label:
            "Principal Amount",
          value: `₹${interestData.principalAmount.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 0,
            },
          )}`,
        },
        {
          label:
            "Interest Earned",
          value: `₹${interestData.simpleInterest.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 0,
            },
          )}`,
        },
        {
          label:
            "Total Amount",
          value: `₹${interestData.totalAmount.toLocaleString(
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
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Simple Interest Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Calculate simple interest,
        interest earned, and total
        maturity amount instantly.
      </p>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Principal Amount (₹)
        </label>

        <input
          type="number"
          value={principal}
          onChange={(e) =>
            setPrincipal(
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
          placeholder="8"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Time Period (Years)
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
          Calculate Interest
        </button>

        <button
          onClick={() => {
            setPrincipal("");
            setInterestRate("");
            setYears("");
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {interestData && (
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Interest Summary
          </h3>

          <p className="mt-2 text-slate-600">
            Your total amount after{" "}
            <strong>{years}</strong>{" "}
            years will be{" "}
            <strong>
              ₹
              {interestData.totalAmount.toLocaleString(
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
          title="Simple Interest Results"
          results={results}
        />
      )}
    </div>
  );
}