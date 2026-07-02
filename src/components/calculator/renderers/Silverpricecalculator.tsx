"use client";

import { useMemo, useRef, useState } from "react";
import ResultsSection from "../ResultsSection";

const PURITY_OPTIONS = [
  { label: "999 (Fine Silver)", value: "999", factor: 0.999 },
  { label: "925 (Sterling)", value: "925", factor: 0.925 },
  { label: "900 (Coin Silver)", value: "900", factor: 0.9 },
  { label: "800", value: "800", factor: 0.8 },
] as const;

const UNIT_OPTIONS = [
  { label: "Grams (g)", value: "gram", toGrams: 1 },
  { label: "Kilograms (kg)", value: "kilogram", toGrams: 1000 },
  { label: "Tola", value: "tola", toGrams: 11.6638 },
  { label: "Ounce (Troy)", value: "ounce", toGrams: 31.1035 },
] as const;

type PurityValue = (typeof PURITY_OPTIONS)[number]["value"];
type UnitValue = (typeof UNIT_OPTIONS)[number]["value"];

export default function SilverPriceCalculator() {
  // States
  const [silverRate, setSilverRate] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState<UnitValue>("gram");
  const [purity, setPurity] = useState<PurityValue>("925");
  const [rateIsForSelectedPurity, setRateIsForSelectedPurity] =
    useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Refs
  const silverRateRef = useRef<HTMLInputElement>(null);
  const weightRef = useRef<HTMLInputElement>(null);

  const result = useMemo(() => {
    if (!submitted) return null;

    const rate = parseFloat(silverRate);
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
    // Otherwise, treat the entered rate as a 999 (fine silver) base rate
    // and scale it down.
    const effectiveRatePerGram = rateIsForSelectedPurity
      ? rate
      : rate * purityInfo.factor;

    const totalValue = effectiveRatePerGram * weightInGrams;

    const pureSilverGrams = weightInGrams * purityInfo.factor;

    return {
      weightInGrams,
      pureSilverGrams,
      effectiveRatePerGram,
      totalValue,
      purityLabel: purityInfo.label,
      unitLabel: unitInfo.label,
    };
  }, [silverRate, weight, unit, purity, rateIsForSelectedPurity, submitted]);

  const formatINR = (value: number) =>
    `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;

  const results = result
    ? [
        {
          label: "Estimated Silver Value",
          value: formatINR(result.totalValue),
          highlight: true,
        },
        {
          label: "Total Weight (grams)",
          value: `${result.weightInGrams.toFixed(3)} g`,
        },
        {
          label: "Pure Silver Content",
          value: `${result.pureSilverGrams.toFixed(3)} g`,
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
    setSilverRate("");
    setWeight("");
    setUnit("gram");
    setPurity("925");
    setRateIsForSelectedPurity(false);
    setSubmitted(false);
  };

  return (
    <div className="mt-8 w-full max-w-full overflow-hidden rounded-3xl border bg-white p-6 shadow-sm">
      {/* Silver rate + weight/unit — flex-wrap so it reflows based on the
          actual available width (e.g. next to a sidebar), not the viewport */}
      <div className="flex flex-wrap gap-4">
        <div className="min-w-[180px] flex-1 basis-56">
          <label className="mb-2 block font-medium">
            Silver Rate (₹ per gram)
          </label>
          <input
            ref={silverRateRef}
            type="number"
            inputMode="decimal"
            min="0"
            placeholder="e.g. 235"
            value={silverRate}
            onChange={(e) => setSilverRate(e.target.value)}
            className="w-full min-w-0 rounded-xl border p-3"
          />
        </div>

        <div className="min-w-[180px] flex-1 basis-[220px]">
          <label className="mb-2 block font-medium">Weight</label>
          <div className="flex flex-wrap gap-2">
            <input
              ref={weightRef}
              type="number"
              inputMode="decimal"
              min="0"
              placeholder="e.g. 100"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="min-w-0 flex-[2] basis-[90px] rounded-xl border p-3"
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

      {/* Purity — flex-wrap with a min basis per button so it reflows
          cleanly in narrow columns instead of forcing a fixed grid */}
      <div className="mt-4">
        <label className="mb-2 block font-medium">Purity</label>
        <div className="flex flex-wrap gap-3">
          {PURITY_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setPurity(opt.value)}
              className={`min-w-[72px] flex-1 basis-[90px] cursor-pointer rounded-xl border p-3 text-sm transition-all duration-300 ${
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
          Rate entered is already for {purity} (not the 999 base rate)
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
          className="flex-1 basis-[140px] cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate Value
        </button>

        <button
          onClick={handleReset}
          className="flex-1 basis-[100px] cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-slate-50 p-6 text-center">
          <h3 className="text-xl font-semibold overflow-x-autoautoautoautoautoautoautoautoautoautoautoauto">
            Your silver is worth {formatINR(result.totalValue)}
          </h3>

          <p className="mt-2 text-slate-600">
            {weight} {result.unitLabel} of {result.purityLabel} silver,
            valued at {formatINR(result.effectiveRatePerGram)} per gram.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Value Breakdown"
          results={results}
          calculatorName="Silver Price Calculator"
        />
      )}
    </div>
  );
}