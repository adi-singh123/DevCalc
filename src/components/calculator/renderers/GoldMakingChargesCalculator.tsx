"use client";

import { useMemo, useRef, useState } from "react";
import ResultsSection from "../ResultsSection";

const PURITY_OPTIONS = [
  { label: "24K (99.9% Pure)", value: "24K" },
  { label: "22K (91.6% Pure)", value: "22K" },
  { label: "18K (75% Pure)", value: "18K" },
  { label: "14K (58.3% Pure)", value: "14K" },
];

const GST_RATE = 0.03; // 3% GST on gold value + making charges (fixed govt. rate)

export default function GoldMakingChargesCalculator() {
  // States
  const [goldRate, setGoldRate] = useState("");
  const [weight, setWeight] = useState("");
  const [purity, setPurity] = useState("22K");
  const [makingType, setMakingType] = useState<"percentage" | "flat">(
    "percentage",
  );
  const [makingCharge, setMakingCharge] = useState("");
  const [hallmarkCharge, setHallmarkCharge] = useState("45");
  const [includeHallmark, setIncludeHallmark] = useState(true);
  const [includeGST, setIncludeGST] = useState(true);
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
    const making = parseFloat(makingCharge);
    const hallmark = includeHallmark ? parseFloat(hallmarkCharge) || 0 : 0;

    if (
      isNaN(rate) ||
      isNaN(wt) ||
      isNaN(making) ||
      rate <= 0 ||
      wt <= 0 ||
      making < 0
    ) {
      return null;
    }

    const goldValue = rate * wt;

    const makingAmount =
      makingType === "percentage" ? goldValue * (making / 100) : making * wt;

    const subtotal = goldValue + makingAmount + hallmark;

    const gst = includeGST ? subtotal * GST_RATE : 0;

    const total = subtotal + gst;

    return {
      goldValue,
      makingAmount,
      hallmark,
      subtotal,
      gst,
      total,
      goldSharePct: (goldValue / total) * 100,
      makingSharePct: (makingAmount / total) * 100,
    };
  }, [
    goldRate,
    weight,
    makingType,
    makingCharge,
    hallmarkCharge,
    includeHallmark,
    includeGST,
    submitted,
  ]);

  const formatINR = (value: number) =>
    `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;

  const results = result
    ? [
        {
          label: "Final Price",
          value: formatINR(result.total),
          highlight: true,
        },
        {
          label: "Gold Value",
          value: formatINR(result.goldValue),
        },
        {
          label: "Making Charges",
          value: formatINR(result.makingAmount),
        },
        ...(includeHallmark
          ? [
              {
                label: "Hallmarking Fee",
                value: formatINR(result.hallmark),
              },
            ]
          : []),
        {
          label: "Subtotal",
          value: formatINR(result.subtotal),
        },
        ...(includeGST
          ? [
              {
                label: "GST (3%)",
                value: formatINR(result.gst),
              },
            ]
          : []),
        {
          label: "Gold Share of Bill",
          value: `${result.goldSharePct.toFixed(1)}%`,
        },
      ]
    : [];

  const handleReset = () => {
    setGoldRate("");
    setWeight("");
    setPurity("22K");
    setMakingType("percentage");
    setMakingCharge("");
    setHallmarkCharge("45");
    setIncludeHallmark(true);
    setIncludeGST(true);
    setSubmitted(false);
  };

  return (
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
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
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Weight (grams)</label>
          <input
            ref={weightRef}
            type="number"
            inputMode="decimal"
            min="0"
            placeholder="e.g. 10"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full rounded-xl border p-3"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">Purity</label>
        <select
          value={purity}
          onChange={(e) => setPurity(e.target.value)}
          className="w-full cursor-pointer rounded-xl border bg-white p-3"
        >
          {PURITY_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">Making Charge Type</label>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setMakingType("percentage")}
            className={`flex-1 cursor-pointer rounded-xl border p-3 transition-all duration-300 ${
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
            className={`flex-1 cursor-pointer rounded-xl border p-3 transition-all duration-300 ${
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
          placeholder={makingType === "percentage" ? "e.g. 12" : "e.g. 500"}
          value={makingCharge}
          onChange={(e) => setMakingCharge(e.target.value)}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="flex items-center justify-between rounded-xl border p-3">
          <label className="font-medium">Include Hallmarking Fee</label>
          <input
            type="checkbox"
            checked={includeHallmark}
            onChange={(e) => setIncludeHallmark(e.target.checked)}
            className="h-5 w-5 cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-between rounded-xl border p-3">
          <label className="font-medium">Include GST (3%)</label>
          <input
            type="checkbox"
            checked={includeGST}
            onChange={(e) => setIncludeGST(e.target.checked)}
            className="h-5 w-5 cursor-pointer"
          />
        </div>
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
            className="w-full rounded-xl border p-3"
          />
        </div>
      )}

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate Price
        </button>

        <button
          onClick={handleReset}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-yellow-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Final Price: {formatINR(result.total)}
          </h3>

          <p className="mt-2 text-slate-600">
            {purity} gold, {weight}g at {formatINR(parseFloat(goldRate))}/g —
            gold value makes up {result.goldSharePct.toFixed(1)}% of your
            total bill.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Price Breakdown"
          results={results}
          calculatorName="Gold Making Charges Calculator"
        />
      )}
    </div>
  );
}