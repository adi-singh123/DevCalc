"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function NPSCalculator() {
  const [currentAge, setCurrentAge] =
    useState("");

  const [retirementAge, setRetirementAge] =
    useState("60");

  const [
    monthlyContribution,
    setMonthlyContribution,
  ] = useState("");

  const [expectedReturn, setExpectedReturn] =
    useState("10");

  const [
    annuityPercentage,
    setAnnuityPercentage,
  ] = useState("40");

  const [annuityReturn, setAnnuityReturn] =
    useState("6");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !currentAge ||
      !retirementAge ||
      !monthlyContribution ||
      !expectedReturn ||
      !annuityPercentage ||
      !annuityReturn ||
      !submitted
    ) {
      return null;
    }

    const age =
      Number(currentAge);

    const retirement =
      Number(retirementAge);

    const contribution =
      Number(
        monthlyContribution
      );

    const annualReturn =
      Number(expectedReturn) /
      100;

    const annuityRate =
      Number(annuityReturn) /
      100;

    const annuityPercent =
      Number(
        annuityPercentage
      ) / 100;

    const years =
      retirement - age;

    if (years <= 0) {
      return null;
    }

    const months =
      years * 12;

    const monthlyRate =
      annualReturn / 12;

    const corpus =
      contribution *
      ((Math.pow(
        1 + monthlyRate,
        months
      ) -
        1) /
        monthlyRate) *
      (1 + monthlyRate);

    const totalInvestment =
      contribution * months;

    const wealthGenerated =
      corpus -
      totalInvestment;

    const annuityAmount =
      corpus *
      annuityPercent;

    const lumpSum =
      corpus -
      annuityAmount;

    const annualPension =
      annuityAmount *
      annuityRate;

    const monthlyPension =
      annualPension / 12;

    return {
      totalInvestment,
      wealthGenerated,
      corpus,
      annuityAmount,
      lumpSum,
      monthlyPension,
    };
  }, [
    currentAge,
    retirementAge,
    monthlyContribution,
    expectedReturn,
    annuityPercentage,
    annuityReturn,
    submitted,
  ]);

  const results = result
    ? [
        {
          label:
            "Retirement Corpus",
          value: `₹${Math.round(
            result.corpus
          ).toLocaleString()}`,
          highlight: true,
        },
        {
          label:
            "Total Investment",
          value: `₹${Math.round(
            result.totalInvestment
          ).toLocaleString()}`,
        },
        {
          label:
            "Wealth Generated",
          value: `₹${Math.round(
            result.wealthGenerated
          ).toLocaleString()}`,
        },
        {
          label:
            "Annuity Amount",
          value: `₹${Math.round(
            result.annuityAmount
          ).toLocaleString()}`,
        },
        {
          label:
            "Lump Sum Withdrawal",
          value: `₹${Math.round(
            result.lumpSum
          ).toLocaleString()}`,
        },
        {
          label:
            "Monthly Pension",
          value: `₹${Math.round(
            result.monthlyPension
          ).toLocaleString()}`,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
    

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Current Age
          </label>

          <input
            type="number"
            value={currentAge}
            onChange={(e) =>
              setCurrentAge(
                e.target.value
              )
            }
            placeholder="30"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Retirement Age
          </label>

          <input
            type="number"
            value={retirementAge}
            onChange={(e) =>
              setRetirementAge(
                e.target.value
              )
            }
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Monthly Contribution
            (₹)
          </label>

          <input
            type="number"
            value={
              monthlyContribution
            }
            onChange={(e) =>
              setMonthlyContribution(
                e.target.value
              )
            }
            placeholder="5000"
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
            value={
              expectedReturn
            }
            onChange={(e) =>
              setExpectedReturn(
                e.target.value
              )
            }
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Annuity Percentage
            (%)
          </label>

          <input
            type="number"
            value={
              annuityPercentage
            }
            onChange={(e) =>
              setAnnuityPercentage(
                e.target.value
              )
            }
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Annuity Return (%)
          </label>

          <input
            type="number"
            step="0.1"
            value={
              annuityReturn
            }
            onChange={(e) =>
              setAnnuityReturn(
                e.target.value
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
          Calculate NPS
        </button>

        <button
          onClick={() => {
            setCurrentAge("");
            setRetirementAge(
              "60"
            );
            setMonthlyContribution(
              ""
            );
            setExpectedReturn(
              "10"
            );
            setAnnuityPercentage(
              "40"
            );
            setAnnuityReturn(
              "6"
            );
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
            Estimated Retirement
            Corpus
          </h3>

          <p className="mt-2 text-3xl font-bold text-green-600">
            ₹
            {Math.round(
              result.corpus
            ).toLocaleString()}
          </p>

          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Estimated monthly
            pension:
            <strong>
              {" "}
              ₹
              {Math.round(
                result.monthlyPension
              ).toLocaleString()}
            </strong>
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="NPS Results"
          results={results}
        />
      )}
    </div>
  );
}