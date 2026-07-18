"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

/**
 * Chicken Coop Size Calculator
 *
 * Formulas used (standard backyard-poultry sizing guidelines):
 *
 * 1. Coop floor space (sq ft):
 *      coopSqFt = flockSize * coopSqFtPerBird[breedSize][lifestyle] * (1 + bufferPercent / 100)
 *    Base sq ft/bird by breed size & lifestyle:
 *      Bantam:   confined 4  | run-access 2  | free-range 1
 *      Standard: confined 10 | run-access 4  | free-range 3
 *      Large:    confined 13 | run-access 5  | free-range 4
 *
 * 2. Run floor space (sq ft):
 *      runSqFt = flockSize * runSqFtPerBird[breedSize] * (1 + bufferPercent / 100)
 *    Base sq ft/bird: Bantam 4 | Standard 10 | Large 12
 *
 * 3. Roosting bar length (inches):
 *      roostInches = flockSize * roostInchesPerBird[breedSize]
 *    Base inches/bird: Bantam 5 | Standard 9 | Large 11
 *
 * 4. Nesting boxes:
 *      nestingBoxes = ceil(flockSize / 4)
 *    Box size: Bantam 10x10x10in | Standard 12x12x12in | Large 14x14x14in
 *
 * 5. Ventilation opening (sq ft):
 *      ventilationSqFt = coopSqFt / 10
 */

type BreedSize = "bantam" | "standard" | "large";
type Lifestyle = "confined" | "run" | "free-range";

const COOP_SQFT_PER_BIRD: Record<
  BreedSize,
  Record<Lifestyle, number>
> = {
  bantam: { confined: 4, run: 2, "free-range": 1 },
  standard: { confined: 10, run: 4, "free-range": 3 },
  large: { confined: 13, run: 5, "free-range": 4 },
};

const RUN_SQFT_PER_BIRD: Record<BreedSize, number> = {
  bantam: 4,
  standard: 10,
  large: 12,
};

const ROOST_INCHES_PER_BIRD: Record<BreedSize, number> = {
  bantam: 5,
  standard: 9,
  large: 11,
};

const NESTING_BOX_SIZE: Record<BreedSize, string> = {
  bantam: "10 × 10 × 10 in",
  standard: "12 × 12 × 12 in",
  large: "14 × 14 × 14 in",
};

export default function ChickenCoopCalculator() {
  const [flockSize, setFlockSize] = useState("6");
  const [breedSize, setBreedSize] =
    useState<BreedSize>("standard");
  const [lifestyle, setLifestyle] =
    useState<Lifestyle>("run");
  const [bufferPercent, setBufferPercent] =
    useState("0");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const parsePositive = (
    value: string,
    label: string,
    opts?: { min?: number; max?: number },
  ): number | string => {
    const num = Number(value);

    if (value.trim() === "" || Number.isNaN(num)) {
      return `${label} must be a valid number.`;
    }

    if (num <= 0) {
      return `${label} must be greater than 0.`;
    }

    if (opts?.min !== undefined && num < opts.min) {
      return `${label} seems too low. Please check the value.`;
    }

    if (opts?.max !== undefined && num > opts.max) {
      return `${label} seems too high. Please check the value.`;
    }

    return num;
  };

  const handleCalculate = () => {
    const checks: Array<
      [string, string, { min?: number; max?: number }?]
    > = [
      [flockSize, "Number of chickens", { min: 1, max: 5000 }],
    ];

    for (const [value, label, opts] of checks) {
      const result = parsePositive(value, label, opts);

      if (typeof result === "string") {
        setError(result);
        setSubmitted(false);
        return;
      }
    }

    const bufferNum = Number(bufferPercent);

    if (
      bufferPercent.trim() !== "" &&
      (Number.isNaN(bufferNum) || bufferNum < 0 || bufferNum > 200)
    ) {
      setError(
        "Extra buffer (%) must be a number between 0 and 200.",
      );
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);
  };

  const handleReset = () => {
    setFlockSize("6");
    setBreedSize("standard");
    setLifestyle("run");
    setBufferPercent("0");
    setSubmitted(false);
    setError("");
  };

  const coopData = useMemo(() => {
    if (!submitted || error) {
      return null;
    }

    const chickens = Number(flockSize);
    const buffer = Number(bufferPercent) || 0;

    if (!chickens) {
      return null;
    }

    const bufferMultiplier = 1 + buffer / 100;

    // 1. Coop floor space
    const coopSqFt =
      chickens *
      COOP_SQFT_PER_BIRD[breedSize][lifestyle] *
      bufferMultiplier;

    // 2. Run floor space
    const runSqFt =
      chickens * RUN_SQFT_PER_BIRD[breedSize] * bufferMultiplier;

    // 3. Roosting bar length (inches -> also show feet)
    const roostInches =
      chickens * ROOST_INCHES_PER_BIRD[breedSize];
    const roostFeet = roostInches / 12;

    // 4. Nesting boxes
    const nestingBoxes = Math.ceil(chickens / 4);

    // 5. Ventilation opening
    const ventilationSqFt = coopSqFt / 10;

    return {
      coopSqFt: Math.round(coopSqFt * 10) / 10,
      runSqFt: Math.round(runSqFt * 10) / 10,
      roostInches: Math.round(roostInches),
      roostFeet: Math.round(roostFeet * 10) / 10,
      nestingBoxes,
      nestingBoxSize: NESTING_BOX_SIZE[breedSize],
      ventilationSqFt: Math.round(ventilationSqFt * 10) / 10,
    };
  }, [
    flockSize,
    breedSize,
    lifestyle,
    bufferPercent,
    submitted,
    error,
  ]);

  const results = coopData
    ? [
        {
          label: "Coop Floor Space",
          value: `${coopData.coopSqFt} sq ft`,
          highlight: true,
        },
        {
          label: "Run Floor Space",
          value: `${coopData.runSqFt} sq ft`,
        },
        {
          label: "Roosting Bar Length",
          value: `${coopData.roostInches} in (${coopData.roostFeet} ft)`,
        },
        {
          label: "Nesting Boxes Needed",
          value: `${coopData.nestingBoxes} box${
            coopData.nestingBoxes === 1 ? "" : "es"
          } (${coopData.nestingBoxSize})`,
        },
        {
          label: "Min. Ventilation Opening",
          value: `${coopData.ventilationSqFt} sq ft`,
        },
      ]
    : [];

  return (
    <div className="mt-8 w-full max-w-full overflow-hidden rounded-3xl border bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Number of Chickens
          </label>

          <input
            type="number"
            inputMode="numeric"
            value={flockSize}
            onChange={(e) => {
              setFlockSize(e.target.value);
              if (error) setError("");
            }}
            placeholder="e.g. 6"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Breed Size
          </label>

          <select
            value={breedSize}
            onChange={(e) =>
              setBreedSize(e.target.value as BreedSize)
            }
            className="w-full rounded-xl border p-3"
          >
            <option value="bantam">
              Bantam (Silkies, Sebrights…)
            </option>
            <option value="standard">
              Standard (Leghorns, RIRs…)
            </option>
            <option value="large">
              Large / Giant (Brahmas, Jersey Giants…)
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Chickens Lifestyle
          </label>

          <select
            value={lifestyle}
            onChange={(e) =>
              setLifestyle(e.target.value as Lifestyle)
            }
            className="w-full rounded-xl border p-3"
          >
            <option value="confined">
              Mostly confined to coop
            </option>
            <option value="run">
              Daily access to a run
            </option>
            <option value="free-range">
              Free-ranges most of the day
            </option>
          </select>

          <p className="mt-1 text-xs text-slate-500">
            How much time your chickens spend inside the coop
            each day.
          </p>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Extra Buffer (%)
          </label>

          <input
            type="number"
            inputMode="numeric"
            value={bufferPercent}
            onChange={(e) => {
              setBufferPercent(e.target.value);
              if (error) setError("");
            }}
            placeholder="e.g. 20"
            className="w-full rounded-xl border p-3"
          />

          <p className="mt-1 text-xs text-slate-500">
            Optional. Add 20–50% for cold climates, future
            flock growth, or extra comfort margin.
          </p>
        </div>
      </div>

      {error && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600 dark:border-red-900 dark:bg-red-950 dark:text-red-400">
          {error}
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={handleCalculate}
          className="w-full cursor-pointer rounded-xl bg-amber-600 px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-amber-700 hover:shadow-lg sm:w-auto"
        >
          Calculate Coop Size
        </button>

        <button
          onClick={handleReset}
          className="w-full cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg sm:w-auto"
        >
          Reset
        </button>
      </div>

      {coopData && (
        <div className="mt-8 rounded-3xl border border-amber-100 bg-gradient-to-r from-amber-50 to-orange-50 p-8 text-center dark:border-slate-700 dark:from-slate-800 dark:to-slate-900">
          <div className="text-6xl">🐔</div>

          <h3 className="mt-4 text-5xl font-bold text-amber-600">
            {coopData.coopSqFt} sq ft
          </h3>

          <p className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
            Recommended Coop Floor Space
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Pair that with a {coopData.runSqFt} sq ft run,{" "}
            {coopData.roostInches} in of roosting bar, and{" "}
            {coopData.nestingBoxes} nesting box
            {coopData.nestingBoxes === 1 ? "" : "es"} at{" "}
            {coopData.nestingBoxSize} each.
          </p>

          <p className="mt-6 text-sm text-slate-500">
            Minimum guidelines — build in extra room whenever
            budget and yard space allow.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Chicken Coop Calculator Results"
          results={results}
          calculatorName="Chicken Coop Calculator"
        />
      )}
    </div>
  );
}