"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function BSACalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (!height || !weight || !submitted) {
      return null;
    }

    const h = Number(height);
    const w = Number(weight);

    if (h <= 0 || w <= 0) {
      return null;
    }

    const bsa = Math.sqrt((h * w) / 3600);

    let category = "Average";

    if (bsa < 1.5) {
      category = "Below Average";
    } else if (bsa > 2.0) {
      category = "Above Average";
    }

    return {
      bsa,
      category,
    };
  }, [height, weight, submitted]);

  const results = result
    ? [
        {
          label: "Body Surface Area",
          value: `${result.bsa.toFixed(2)} m²`,
          highlight: true,
        },
        {
          label: "Category",
          value: result.category,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Body Surface Area Calculator
      </h2>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Height (cm)
        </label>

        <input
          type="number"
          placeholder="e.g. 170"
          value={height}
          onChange={(e) =>
            setHeight(e.target.value)
          }
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Weight (kg)
        </label>

        <input
          type="number"
          placeholder="e.g. 70"
          value={weight}
          onChange={(e) =>
            setWeight(e.target.value)
          }
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate BSA
        </button>

        <button
          onClick={() => {
            setHeight("");
            setWeight("");
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Your Body Surface Area
          </h3>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result.bsa.toFixed(2)} m²
          </p>

          <p className="mt-3 text-slate-600">
            Category: {result.category}
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="BSA Results"
          results={results}
        />
      )}
    </div>
  );
}