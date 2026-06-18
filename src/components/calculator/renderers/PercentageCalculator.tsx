"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function PercentageCalculator() {
  const [mode, setMode] = useState("percentage-of");
  const [percentage, setPercentage] = useState("");
  const [number, setNumber] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (!submitted || !percentage || !number) {
      return null;
    }

    const percent = Number(percentage);
    const value = Number(number);

    if (Number.isNaN(percent) || Number.isNaN(value)) {
      return null;
    }

    if (mode === "percentage-of") {
      return (percent / 100) * value;
    }

    if (mode === "what-percentage") {
      return (percent / value) * 100;
    }

    if (mode === "increase") {
      return ((value - percent) / percent) * 100;
    }

    if (mode === "decrease") {
      return ((percent - value) / percent) * 100;
    }

    return null;
  }, [percentage, number, submitted, mode]);

  const results =
    result !== null
      ? [
          {
            label: mode.includes("percentage") ? "Percentage" : "Result",
            value: `${result.toFixed(2)}${mode !== "percentage-of" ? "%" : ""}`,
            highlight: true,
          },
        ]
      : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
    
      <p className="mt-2 text-slate-600">
        Find what percentage of a number equals instantly.
      </p>
      <div className="mt-6">
        <label className="mb-2 block font-medium">Calculation Type</label>

        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="w-full rounded-xl border p-3"
        >
          <option value="percentage-of">What is X% of Y?</option>

          <option value="what-percentage">X is what % of Y?</option>

          <option value="increase">Percentage Increase</option>

          <option value="decrease">Percentage Decrease</option>
        </select>
      </div>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          {mode === "percentage-of" && "Percentage (%)"}

          {mode === "what-percentage" && "Part Value"}

          {mode === "increase" && "Original Value"}

          {mode === "decrease" && "Original Value"}
        </label>

        <input
          type="number"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
          placeholder="25"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          {mode === "percentage-of" && "Number"}

          {mode === "what-percentage" && "Total Value"}

          {mode === "increase" && "New Value"}

          {mode === "decrease" && "New Value"}
        </label>

        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="100"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate
        </button>

        <button
          onClick={() => {
            setPercentage("");
            setNumber("");
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result !== null && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            {mode === "percentage-of" &&
              `${percentage}% of ${number} is ${result.toFixed(2)}`}

            {mode === "what-percentage" &&
              `${percentage} is ${result.toFixed(2)}% of ${number}`}

            {mode === "increase" &&
              `Percentage increase from ${percentage} to ${number} is ${result.toFixed(2)}%`}

            {mode === "decrease" &&
              `Percentage decrease from ${percentage} to ${number} is ${result.toFixed(2)}%`}
          </h3>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection title="Percentage Results" results={results} />
      )}
    </div>
  );
}
