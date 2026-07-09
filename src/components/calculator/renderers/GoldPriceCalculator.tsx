"use client";

import { useMemo, useRef, useState } from "react";
import ResultsSection from "../ResultsSection";

const PURITY_OPTIONS = [
  { label: "24K (99.9% Pure)", value: "24K", factor: 0.999 },
  { label: "22K (91.6% Pure)", value: "22K", factor: 0.916 },
  { label: "18K (75% Pure)", value: "18K", factor: 0.75 },
  { label: "14K (58.3% Pure)", value: "14K", factor: 0.583 },
] as const;

const UNIT_OPTIONS = [
  { label: "Grams (g)", value: "gram", toGrams: 1 },
  { label: "Kilograms (kg)", value: "kilogram", toGrams: 1000 },
  { label: "Tola", value: "tola", toGrams: 11.6638 },
  { label: "Ounce (Troy)", value: "ounce", toGrams: 31.1035 },
] as const;

type PurityValue = (typeof PURITY_OPTIONS)[number]["value"];
type UnitValue = (typeof UNIT_OPTIONS)[number]["value"];

export default function GoldPriceCalculator() {
  // States
  const [goldRate, setGoldRate] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState<UnitValue>("gram");
  const [purity, setPurity] = useState<PurityValue>("22K");
  const [rateIsForSelectedPurity, setRateIsForSelectedPurity] =
    useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Refs
  const goldRateRef = useRef<HTMLInputElement>(null);
  const weightRef = useRef<HTMLInputElement>(null);

  const result = useMemo(() => {
    if (!submitted) return null;

    const rate = parseFloat(goldRate);
    const wt = parseFloat(weight);

    if (isNaN(rate) || isNaN(wt) || rate <= 0 || wt <= 0) {
      return null;
    }

    const unitInfo = UNIT_OPTIONS.find((u) => u.value === unit);
    const purityInfo = PURITY_OPTIONS.find((p) => p.value === purity);

    if (!unitInfo || !purityInfo) return null;

    const weightInGrams = wt * unitInfo.toGrams;

    // If the entered rate is already the rate for the selected purity,
    // don't apply the purity factor again — use it as-is.
    // Otherwise, treat the entered rate as a 24K base rate and scale it down.
    const effectiveRatePerGram = rateIsForSelectedPurity
      ? rate
      : rate * purityInfo.factor;

    const totalValue = effectiveRatePerGram * weightInGrams;

    const pureGoldGrams = weightInGrams * purityInfo.factor;

    return {
      weightInGrams,
      pureGoldGrams,
      effectiveRatePerGram,
      totalValue,
      purityLabel: purityInfo.label,
      unitLabel: unitInfo.label,
    };
  }, [goldRate, weight, unit, purity, rateIsForSelectedPurity, submitted]);

  const formatINR = (value: number) =>
    `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;

  const results = result
    ? [
        {
          label: "Estimated Gold Value",
          value: formatINR(result.totalValue),
          highlight: true,
        },
        {
          label: "Total Weight (grams)",
          value: `${result.weightInGrams.toFixed(3)} g`,
        },
        {
          label: "Pure Gold Content",
          value: `${result.pureGoldGrams.toFixed(3)} g`,
        },
        {
          label: "Rate Applied (per gram)",
          value: formatINR(result.effectiveRatePerGram),
        },
        {
          label: "Purity",
          value: result.purityLabel,
        },
      ]
    : [];

  const handleReset = () => {
    setGoldRate("");
    setWeight("");
    setUnit("gram");
    setPurity("22K");
    setRateIsForSelectedPurity(false);
    setSubmitted(false);
  };

  return (
    <div className="mt-8 w-full max-w-full overflow-hidden rounded-3xl border bg-white p-4 shadow-sm sm:p-6">
      {/* Gold rate + weight/unit — flex-wrap instead of a fixed grid,
          so it reflows based on actual available width, not viewport size */}
      <div className="flex flex-wrap gap-4">
        <div className="min-w-0 flex-1 basis-56">
          <label className="mb-2 block font-medium">
            Gold Rate (₹ per gram)
          </label>
          <input
            ref={goldRateRef}
            type="number"
            inputMode="decimal"
            min="0"
            placeholder="e.g. 14200"
            value={goldRate}
            onChange={(e) => setGoldRate(e.target.value)}
            className="w-full min-w-0 rounded-xl border p-3"
          />
        </div>

        <div className="min-w-0 flex-1 basis-[220px]">
          <label className="mb-2 block font-medium">Weight</label>
          <div className="flex flex-wrap gap-2">
            <input
              ref={weightRef}
              type="number"
              inputMode="decimal"
              min="0"
              placeholder="e.g. 10"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="min-w-0 flex-2 basis-[90px] rounded-xl border p-3"
            />

            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value as UnitValue)}
              className="min-w-0 flex-1 basis-[110px] cursor-pointer rounded-xl border bg-white p-3"
            >
              {UNIT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Purity — flex-wrap with a min basis per button instead of a
          breakpoint-gated grid, so it drops to 2 or 3 per row cleanly
          whenever the column is narrow (e.g. next to a sidebar) */}
      <div className="mt-4">
        <label className="mb-2 block font-medium">Purity</label>
        <div className="flex flex-wrap gap-3">
          {PURITY_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setPurity(opt.value)}
              className={`min-w-0 flex-1 basis-[72px] cursor-pointer rounded-xl border p-3 text-sm transition-all duration-300 ${
                purity === opt.value
                  ? "border-black bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {opt.value}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border p-3">
        <label className="min-w-0 flex-1 overflow-x-autoautoauto pr-2 font-medium">
          Rate entered is already for {purity} (not the 24K base rate)
        </label>
        <input
          type="checkbox"
          checked={rateIsForSelectedPurity}
          onChange={(e) => setRateIsForSelectedPurity(e.target.checked)}
          className="h-5 w-5 shrink-0 cursor-pointer"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="flex-1 basis-35 cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate Value
        </button>

        <button
          onClick={handleReset}
          className="flex-1 basis-25 cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-yellow-50 p-6 text-center">
          <h3 className="text-xl font-semibold overflow-x-autoautoautoautoautoauto">
            Your gold is worth {formatINR(result.totalValue)}
          </h3>

          <p className="mt-2 text-slate-600">
            {weight} {result.unitLabel} of {result.purityLabel} gold, valued
            at {formatINR(result.effectiveRatePerGram)} per gram.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Value Breakdown"
          results={results}
          calculatorName="Gold Price Calculator"
        />
      )}
    </div>
  );
}