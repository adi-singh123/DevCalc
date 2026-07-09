"use client";

import { useMemo, useRef, useState } from "react";
import ResultsSection from "../ResultsSection";

const PURITY_OPTIONS = [
  { label: "24K (99.9% Pure)", value: "24K", factor: 0.999 },
  { label: "22K (91.6% Pure)", value: "22K", factor: 0.916 },
  { label: "18K (75% Pure)", value: "18K", factor: 0.75 },
  { label: "14K (58.3% Pure)", value: "14K", factor: 0.583 },
] as const;

type PurityValue = (typeof PURITY_OPTIONS)[number]["value"];

const GST_ON_GOLD_RATE = 0.03; // 3% GST on gold value — same across every purity
const GST_ON_MAKING_RATE = 0.05; // 5% GST on making charges, when itemised separately

export default function GoldGstCalculator() {
  // States
  const [goldRate, setGoldRate] = useState("");
  const [rateIsForSelectedPurity, setRateIsForSelectedPurity] =
    useState(false);
  const [weight, setWeight] = useState("");
  const [purity, setPurity] = useState<PurityValue>("22K");
  const [makingType, setMakingType] = useState<"percentage" | "flat">(
    "percentage",
  );
  const [makingCharge, setMakingCharge] = useState("");
  const [hallmarkCharge, setHallmarkCharge] = useState("45");
  const [includeHallmark, setIncludeHallmark] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  // Refs
  const goldRateRef = useRef<HTMLInputElement>(null);
  const weightRef = useRef<HTMLInputElement>(null);
  const makingChargeRef = useRef<HTMLInputElement>(null);
  const hallmarkChargeRef = useRef<HTMLInputElement>(null);

  const result = useMemo(() => {
    if (!submitted) return null;

    const rate = parseFloat(goldRate);
    const wt = parseFloat(weight);
    const making = parseFloat(makingCharge) || 0;
    const hallmark = includeHallmark ? parseFloat(hallmarkCharge) || 0 : 0;

    if (isNaN(rate) || isNaN(wt) || rate <= 0 || wt <= 0 || making < 0) {
      return null;
    }

    const purityInfo = PURITY_OPTIONS.find((p) => p.value === purity);
    if (!purityInfo) return null;

    // If the entered rate is already the rate for the selected purity,
    // don't apply the purity factor again — use it as-is.
    const effectiveRatePerGram = rateIsForSelectedPurity
      ? rate
      : rate * purityInfo.factor;

    const goldValue = effectiveRatePerGram * wt;

    const makingAmount =
      makingType === "percentage" ? goldValue * (making / 100) : making * wt;

    const gstOnGold = goldValue * GST_ON_GOLD_RATE;
    const gstOnMaking = makingAmount * GST_ON_MAKING_RATE;
    const totalGst = gstOnGold + gstOnMaking;

    const total = goldValue + makingAmount + hallmark + totalGst;

    return {
      goldValue,
      makingAmount,
      hallmark,
      gstOnGold,
      gstOnMaking,
      totalGst,
      total,
      purityLabel: purityInfo.label,
    };
  }, [
    goldRate,
    rateIsForSelectedPurity,
    weight,
    purity,
    makingType,
    makingCharge,
    hallmarkCharge,
    includeHallmark,
    submitted,
  ]);

  const formatINR = (value: number) =>
    `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;

  const results = result
    ? [
        {
          label: "Final Price (incl. GST)",
          value: formatINR(result.total),
          highlight: true,
        },
        {
          label: "Gold Value",
          value: formatINR(result.goldValue),
        },
        {
          label: "GST on Gold (3%)",
          value: formatINR(result.gstOnGold),
        },
        {
          label: "Making Charges",
          value: formatINR(result.makingAmount),
        },
        {
          label: "GST on Making Charges (5%)",
          value: formatINR(result.gstOnMaking),
        },
        {
          label: "Total GST",
          value: formatINR(result.totalGst),
        },
        ...(includeHallmark
          ? [
              {
                label: "Hallmarking Fee",
                value: formatINR(result.hallmark),
              },
            ]
          : []),
      ]
    : [];

  const handleReset = () => {
    setGoldRate("");
    setRateIsForSelectedPurity(false);
    setWeight("");
    setPurity("22K");
    setMakingType("percentage");
    setMakingCharge("");
    setHallmarkCharge("45");
    setIncludeHallmark(true);
    setSubmitted(false);
  };

  return (
    <div className="mt-8 w-full max-w-full overflow-hidden rounded-3xl border bg-white p-4 shadow-sm sm:p-6">
      {/* Purity — flex-wrap with a min basis per button, reflows based on
          actual available width rather than viewport breakpoints */}
      <div>
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

      <div className="mt-4 flex flex-wrap gap-4">
        <div className="min-w-0 flex-1 basis-56">
          <label className="mb-2 block font-medium">
            Gold Rate (₹ per gram)
          </label>
          <input
            ref={goldRateRef}
            type="number"
            inputMode="decimal"
            min="0"
            placeholder="e.g. 13000"
            value={goldRate}
            onChange={(e) => setGoldRate(e.target.value)}
            className="w-full min-w-0 rounded-xl border p-3"
          />
        </div>

        <div className="min-w-0 flex-1 basis-56">
          <label className="mb-2 block font-medium">Weight (grams)</label>
          <input
            ref={weightRef}
            type="number"
            inputMode="decimal"
            min="0"
            placeholder="e.g. 20"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full min-w-0 rounded-xl border p-3"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border p-3">
        <label className="min-w-0 flex-1 overflow-x-auto pr-2 font-medium">
          Rate entered is already for {purity} (not the 24K base rate)
        </label>
        <input
          type="checkbox"
          checked={rateIsForSelectedPurity}
          onChange={(e) => setRateIsForSelectedPurity(e.target.checked)}
          className="h-5 w-5 shrink-0 cursor-pointer"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">Making Charge Type</label>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setMakingType("percentage")}
            className={`flex-1 basis-[140px] cursor-pointer rounded-xl border p-3 transition-all duration-300 ${
              makingType === "percentage"
                ? "border-black bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            Percentage (%)
          </button>

          <button
            type="button"
            onClick={() => setMakingType("flat")}
            className={`flex-1 basis-[140px] cursor-pointer rounded-xl border p-3 transition-all duration-300 ${
              makingType === "flat"
                ? "border-black bg-black text-white"
                : "hover:bg-gray-100"
            }`}
          >
            Flat (₹/gram)
          </button>
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Making Charge {makingType === "percentage" ? "(%)" : "(₹ per gram)"}
        </label>
        <input
          ref={makingChargeRef}
          type="number"
          inputMode="decimal"
          min="0"
          placeholder={makingType === "percentage" ? "e.g. 12" : "e.g. 800"}
          value={makingCharge}
          onChange={(e) => setMakingCharge(e.target.value)}
          className="w-full min-w-0 rounded-xl border p-3"
        />
        <p className="mt-1 text-sm text-slate-500">
          Making charges are taxed separately at 5% GST — not the 3% rate
          applied to gold value.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border p-3">
        <label className="min-w-0 flex-1 font-medium">
          Include Hallmarking Fee
        </label>
        <input
          type="checkbox"
          checked={includeHallmark}
          onChange={(e) => setIncludeHallmark(e.target.checked)}
          className="h-5 w-5 shrink-0 cursor-pointer"
        />
      </div>

      {includeHallmark && (
        <div className="mt-4">
          <label className="mb-2 block font-medium">
            Hallmarking Fee (₹ per piece)
          </label>
          <input
            ref={hallmarkChargeRef}
            type="number"
            inputMode="decimal"
            min="0"
            placeholder="e.g. 45"
            value={hallmarkCharge}
            onChange={(e) => setHallmarkCharge(e.target.value)}
            className="w-full min-w-0 rounded-xl border p-3"
          />
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="flex-1 basis-[140px] cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate GST
        </button>

        <button
          onClick={handleReset}
          className="flex-1 basis-[100px] cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-yellow-50 p-6 text-center">
          <h3 className="text-xl font-semibold overflow-x-autoauto">
            Total GST: {formatINR(result.totalGst)}
          </h3>

          <p className="mt-2 text-slate-600">
            {result.purityLabel} — 3% on gold value (
            {formatINR(result.gstOnGold)}) + 5% on making charges (
            {formatINR(result.gstOnMaking)}). Final price:{" "}
            {formatINR(result.total)}.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="GST Breakdown"
          results={results}
          calculatorName="Gold GST Calculator"
        />
      )}
    </div>
  );
}