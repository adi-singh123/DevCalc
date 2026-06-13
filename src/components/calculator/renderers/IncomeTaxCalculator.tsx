"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function IncomeTaxCalculator() {
  const [annualIncome, setAnnualIncome] =
    useState("");

  const [taxRegime, setTaxRegime] =
    useState("new");

  const [submitted, setSubmitted] =
    useState(false);

  const taxData = useMemo(() => {
    if (
      !submitted ||
      !annualIncome
    ) {
      return null;
    }

    const income =
      Number(annualIncome);

    if (
      Number.isNaN(income) ||
      income <= 0
    ) {
      return null;
    }

    let tax = 0;

    if (taxRegime === "new") {
      if (income <= 400000) {
        tax = 0;
      } else if (
        income <= 800000
      ) {
        tax =
          (income -
            400000) *
          0.05;
      } else if (
        income <= 1200000
      ) {
        tax =
          20000 +
          (income -
            800000) *
            0.1;
      } else if (
        income <= 1600000
      ) {
        tax =
          60000 +
          (income -
            1200000) *
            0.15;
      } else if (
        income <= 2000000
      ) {
        tax =
          120000 +
          (income -
            1600000) *
            0.2;
      } else if (
        income <= 2400000
      ) {
        tax =
          200000 +
          (income -
            2000000) *
            0.25;
      } else {
        tax =
          300000 +
          (income -
            2400000) *
            0.3;
      }
    } else {
      if (income <= 250000) {
        tax = 0;
      } else if (
        income <= 500000
      ) {
        tax =
          (income -
            250000) *
          0.05;
      } else if (
        income <= 1000000
      ) {
        tax =
          12500 +
          (income -
            500000) *
            0.2;
      } else {
        tax =
          112500 +
          (income -
            1000000) *
            0.3;
      }
    }

    const cess =
      tax * 0.04;

    const totalTax =
      tax + cess;

    const effectiveTaxRate =
      (totalTax /
        income) *
      100;

    return {
      income,
      tax,
      cess,
      totalTax,
      effectiveTaxRate,
    };
  }, [
    annualIncome,
    taxRegime,
    submitted,
  ]);

  const results = taxData
    ? [
        {
          label:
            "Annual Income",
          value: `₹${taxData.income.toLocaleString(
            "en-IN",
          )}`,
        },
        {
          label:
            "Income Tax",
          value: `₹${taxData.tax.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 0,
            },
          )}`,
        },
        {
          label:
            "Health & Education Cess",
          value: `₹${taxData.cess.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 0,
            },
          )}`,
        },
        {
          label:
            "Total Tax Liability",
          value: `₹${taxData.totalTax.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 0,
            },
          )}`,
          highlight: true,
        },
        {
          label:
            "Effective Tax Rate",
          value: `${taxData.effectiveTaxRate.toFixed(
            2,
          )}%`,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Income Tax Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Calculate your
        estimated income tax
        liability under the
        Indian tax regime.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Annual Income (₹)
          </label>

          <input
            type="number"
            value={
              annualIncome
            }
            onChange={(e) =>
              setAnnualIncome(
                e.target
                  .value,
              )
            }
            placeholder="1200000"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Tax Regime
          </label>

          <select
            value={taxRegime}
            onChange={(e) =>
              setTaxRegime(
                e.target
                  .value,
              )
            }
            className="w-full rounded-xl border p-3"
          >
            <option value="new">
              New Tax Regime
            </option>

            <option value="old">
              Old Tax Regime
            </option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() =>
            setSubmitted(
              true,
            )
          }
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate Tax
        </button>

        <button
          onClick={() => {
            setAnnualIncome(
              "",
            );
            setTaxRegime(
              "new",
            );
            setSubmitted(
              false,
            );
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {taxData && (
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Tax Summary
          </h3>

          <p className="mt-2 text-slate-600">
            Estimated tax
            liability:
            <strong>
              {" "}
              ₹
              {taxData.totalTax.toLocaleString(
                "en-IN",
                {
                  maximumFractionDigits: 0,
                },
              )}
            </strong>
          </p>

          <p className="mt-1 text-slate-600">
            Effective tax rate:
            <strong>
              {" "}
              {taxData.effectiveTaxRate.toFixed(
                2,
              )}
              %
            </strong>
          </p>
        </div>
      )}

      {results.length >
        0 && (
        <ResultsSection
          title="Income Tax Results"
          results={
            results
          }
        />
      )}
    </div>
  );
}