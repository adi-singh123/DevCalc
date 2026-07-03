"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function CondomSizeCalculator() {
  const [girth, setGirth] = useState("");
  const [length, setLength] = useState("");
  const [unit, setUnit] = useState<"mm" | "in">("mm");
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (!submitted || !girth || !length) {
      return null;
    }

    const girthValue = Number(girth);
    const lengthValue = Number(length);

    if (
      Number.isNaN(girthValue) ||
      Number.isNaN(lengthValue) ||
      girthValue <= 0 ||
      lengthValue <= 0
    ) {
      return { error: "Please enter valid positive measurements for girth and length." };
    }

    const girthMm = unit === "in" ? girthValue * 25.4 : girthValue;
    const lengthMm = unit === "in" ? lengthValue * 25.4 : lengthValue;

    const suggestedWidthMm = girthMm / Math.PI;
    const nominalWidths = [30, 32, 34, 36, 38, 40, 42, 44, 46, 48];
    const recommendedWidth = nominalWidths.reduce((closest, width) =>
      Math.abs(width - suggestedWidthMm) < Math.abs(closest - suggestedWidthMm)
        ? width
        : closest,
    nominalWidths[0]);

    const recommendedLength =
      lengthMm <= 170 ? 170 : lengthMm <= 190 ? 190 : 205;

    const formattedGirth = `${Math.round(girthMm)} mm`;
    const formattedLength = `${Math.round(lengthMm)} mm`;

    return {
      suggestedWidth: `${suggestedWidthMm.toFixed(1)} mm`,
      recommendedWidth: `${recommendedWidth} mm`
      ,
      recommendedLength: `${recommendedLength} mm or longer`,
      formattedGirth,
      formattedLength,
      note:
        "Always choose a condom width close to the recommended size and consider trying a nearby size if the fit feels too tight or too loose.",
    };
  }, [girth, length, unit, submitted]);

  const results = result && !("error" in result)
    ? [
        {
          label: "Suggested Condom Width",
          value: result.suggestedWidth,
          highlight: true,
        },
        {
          label: "Recommended Nominal Width",
          value: result.recommendedWidth,
        },
        {
          label: "Recommended Condom Length",
          value: result.recommendedLength,
        },
        {
          label: "Measured Girth",
          value: result.formattedGirth,
        },
        {
          label: "Measured Length",
          value: result.formattedLength,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        Enter your erect penile girth and length to estimate a condom size range. This tool gives a practical fit guideline and should be used as a starting point for selection.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">Girth</label>
          <div className="flex gap-2">
            <input
              type="number"
              min="1"
              step="0.1"
              placeholder="110"
              value={girth}
              onChange={(e) => setGirth(e.target.value)}
              className="w-full rounded-xl border p-3"
            />
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value as "mm" | "in")}
              className="rounded-xl border p-3"
            >
              <option value="mm">mm</option>
              <option value="in">in</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-2 block font-medium">Length</label>
          <input
            type="number"
            min="1"
            step="0.1"
            placeholder="160"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full rounded-xl border p-3"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:shadow-lg"
        >
          Estimate Condom Size
        </button>

        <button
          onClick={() => {
            setGirth("");
            setLength("");
            setUnit("mm");
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && "error" in result && (
        <div className="mt-8 rounded-3xl border border-red-200 bg-red-50 p-5 text-sm text-red-700 dark:border-red-500/20 dark:bg-red-950/10 dark:text-red-200">
          {result.error}
        </div>
      )}

      {result && !("error" in result) && (
        <div className="mt-8 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100 p-8 text-center shadow-sm dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
          <div className="text-6xl">🧷</div>
          <p className="mt-4 text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Condom Fit Estimate
          </p>
          <h3 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
            {result.recommendedWidth}
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            {result.note}
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Condom Size Results"
          results={results}
          calculatorName="Condom Size Calculator"
        />
      )}
    </div>
  );
}
