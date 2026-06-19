"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function ProbabilityCalculator() {
  const [
    favorableOutcomes,
    setFavorableOutcomes,
  ] = useState("");

  const [
    totalOutcomes,
    setTotalOutcomes,
  ] = useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !submitted ||
      !favorableOutcomes ||
      !totalOutcomes
    ) {
      return null;
    }

    const favorable = Number(
      favorableOutcomes,
    );

    const total =
      Number(totalOutcomes);

    if (
      isNaN(favorable) ||
      isNaN(total) ||
      total <= 0 ||
      favorable > total
    ) {
      return null;
    }

    const probability =
      favorable / total;

    const percentage =
      probability * 100;

    const oddsFor = `${favorable}:${total - favorable}`;

    const oddsAgainst = `${
      total - favorable
    }:${favorable}`;

    return {
      probability,
      percentage,
      oddsFor,
      oddsAgainst,
    };
  }, [
    favorableOutcomes,
    totalOutcomes,
    submitted,
  ]);

  const results = result
    ? [
        {
          label: "Probability",
          value:
            result.probability.toFixed(
              4,
            ),
          highlight: true,
        },

        {
          label:
            "Percentage Chance",
          value: `${result.percentage.toFixed(
            2,
          )}%`,
        },

        {
          label: "Odds For",
          value: result.oddsFor,
        },

        {
          label:
            "Odds Against",
          value:
            result.oddsAgainst,
        },
      ]
    : [];

  const resetCalculator = () => {
    setFavorableOutcomes("");
    setTotalOutcomes("");
    setSubmitted(false);
  };

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Probability Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Calculate probability,
        percentage chance, and
        odds for any event using
        the standard probability
        formula.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Favorable Outcomes
          </label>

          <input
            type="number"
            value={
              favorableOutcomes
            }
            onChange={(e) =>
              setFavorableOutcomes(
                e.target.value,
              )
            }
            placeholder="2"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Total Outcomes
          </label>

          <input
            type="number"
            value={totalOutcomes}
            onChange={(e) =>
              setTotalOutcomes(
                e.target.value,
              )
            }
            placeholder="6"
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
          Calculate Probability
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
            Probability Result
          </h3>

          <p className="mt-3 text-3xl font-bold text-green-700">
            {result.percentage.toFixed(
              2,
            )}
            %
          </p>

          <p className="mt-2 text-slate-600">
            Probability ={" "}
            {result.probability.toFixed(
              4,
            )}
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Probability Results"
          results={results}
           calculatorName="Probability Results"
        />
      )}
    </div>
  );
}