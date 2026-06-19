"use client";

import { useState } from "react";

import ResultsSection from "@/src/components/calculator/ResultsSection";

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] =
    useState("");

  const [rate, setRate] =
    useState("");

  const [time, setTime] =
    useState("");

  const [compoundings, setCompoundings] =
    useState("1");

  const [results, setResults] =
    useState<
      {
        label: string;
        value: string;
        highlight?: boolean;
      }[]
    >([]);

  const calculateCompoundInterest = () => {
    const p = Number(principal);
    const r = Number(rate);
    const t = Number(time);
    const n = Number(compoundings);

    if (
      !p ||
      !r ||
      !t ||
      !n
    ) {
      setResults([]);
      return;
    }

    const maturityAmount =
      p *
      Math.pow(
        1 + r / 100 / n,
        n * t,
      );

    const compoundInterest =
      maturityAmount - p;

    const growthPercentage =
      (compoundInterest / p) *
      100;

    setResults([
      {
        label:
          "Maturity Amount",
        value: `₹${maturityAmount.toFixed(
          2,
        )}`,
        highlight: true,
      },
      {
        label:
          "Principal Amount",
        value: `₹${p.toFixed(
          2,
        )}`,
      },
      {
        label:
          "Compound Interest",
        value: `₹${compoundInterest.toFixed(
          2,
        )}`,
      },
      {
        label:
          "Growth Percentage",
        value: `${growthPercentage.toFixed(
          2,
        )}%`,
      },
      {
        label:
          "Compounding Frequency",
        value: n.toString(),
      },
    ]);
  };

  return (
    <div className="mt-2">
      <div className="rounded-3xl border bg-white p-6 shadow-sm">
      

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">
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
              placeholder="10000"
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Annual Interest
              Rate (%)
            </label>

            <input
              type="number"
              value={rate}
              onChange={(e) =>
                setRate(
                  e.target.value,
                )
              }
              placeholder="10"
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Time (Years)
            </label>

            <input
              type="number"
              value={time}
              onChange={(e) =>
                setTime(
                  e.target.value,
                )
              }
              placeholder="5"
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Compounding
              Frequency
            </label>

            <select
              value={compoundings}
              onChange={(e) =>
                setCompoundings(
                  e.target.value,
                )
              }
              className="w-full rounded-xl border p-3"
            >
              <option value="1">
                Annually
              </option>

              <option value="2">
                Semi-Annually
              </option>

              <option value="4">
                Quarterly
              </option>

              <option value="12">
                Monthly
              </option>

              <option value="365">
                Daily
              </option>
            </select>
          </div>
        </div>

        <button
          onClick={
            calculateCompoundInterest
          }
          className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Calculate
        </button>
      </div>

      {results.length > 0 && (
        <ResultsSection
          title="Compound Interest Results"
          results={results}
           calculatorName="Compound Interest Results"
        />
      )}
    </div>
  );
}