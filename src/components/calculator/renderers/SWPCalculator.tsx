"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function SWPCalculator() {
  const [corpus, setCorpus] =
    useState("");

  const [withdrawal, setWithdrawal] =
    useState("");

  const [returnRate, setReturnRate] =
    useState("10");

  const [years, setYears] =
    useState("10");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !submitted ||
      !corpus ||
      !withdrawal ||
      !returnRate ||
      !years
    ) {
      return null;
    }

    const initialCorpus =
      Number(corpus);

    const monthlyWithdrawal =
      Number(withdrawal);

    const annualRate =
      Number(returnRate) / 100;

    const monthlyRate =
      annualRate / 12;

    const totalMonths =
      Number(years) * 12;

    let remainingCorpus =
      initialCorpus;

    let totalWithdrawals = 0;

    for (
      let month = 1;
      month <= totalMonths;
      month++
    ) {
      remainingCorpus =
        remainingCorpus *
        (1 + monthlyRate);

      remainingCorpus -=
        monthlyWithdrawal;

      totalWithdrawals +=
        monthlyWithdrawal;

      if (
        remainingCorpus <= 0
      ) {
        remainingCorpus = 0;
        break;
      }
    }

    return {
      remainingCorpus,
      totalWithdrawals,
      corpusDepleted:
        remainingCorpus === 0,
    };
  }, [
    corpus,
    withdrawal,
    returnRate,
    years,
    submitted,
  ]);

  const results = result
    ? [
        {
          label:
            "Remaining Corpus",
          value: `₹${result.remainingCorpus.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 0,
            },
          )}`,
          highlight: true,
        },

        {
          label:
            "Total Withdrawals",
          value: `₹${result.totalWithdrawals.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 0,
            },
          )}`,
        },

        {
          label:
            "Corpus Status",
          value:
            result.corpusDepleted
              ? "Fully Depleted"
              : "Still Growing",
        },
      ]
    : [];

  const resetCalculator = () => {
    setCorpus("");
    setWithdrawal("");
    setReturnRate("10");
    setYears("10");
    setSubmitted(false);
  };

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        SWP Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Calculate monthly
        withdrawals, total income,
        and remaining investment
        corpus using a Systematic
        Withdrawal Plan.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <label className="mb-2 block font-medium">
            Investment Corpus (₹)
          </label>

          <input
            type="number"
            value={corpus}
            onChange={(e) =>
              setCorpus(
                e.target.value,
              )
            }
            placeholder="1000000"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Monthly Withdrawal (₹)
          </label>

          <input
            type="number"
            value={withdrawal}
            onChange={(e) =>
              setWithdrawal(
                e.target.value,
              )
            }
            placeholder="10000"
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
            Duration (Years)
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
          Calculate SWP
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
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Estimated Remaining
            Corpus
          </h3>

          <p className="mt-3 text-3xl font-bold text-green-700">
            ₹
            {result.remainingCorpus.toLocaleString(
              "en-IN",
              {
                maximumFractionDigits: 0,
              },
            )}
          </p>

          <p className="mt-2 text-slate-600">
            Based on monthly
            withdrawals and expected
            annual returns.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="SWP Results"
          results={results}
            calculatorName="SWP Results"

        />
      )}
    </div>
  );
}