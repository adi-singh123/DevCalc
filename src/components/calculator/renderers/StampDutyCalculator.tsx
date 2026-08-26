"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export type StateKey = "maharashtra" | "karnataka" | "delhi" | "uttar-pradesh" | "tamil-nadu";
export type BuyerGender = "male" | "female" | "joint";
export type MaharashtraTier = "mumbai" | "pune_thane" | "council" | "gram_panchayat";

function formatINR(value: number) {
  if (!Number.isFinite(value)) return "—";
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

export default function StampDutyCalculator({
  defaultStateKey = "maharashtra",
}: {
  defaultStateKey?: string;
}) {
  const [stateKey, setStateKey] = useState<StateKey>(
    (defaultStateKey as StateKey) || "maharashtra"
  );
  const [agreementValue, setAgreementValue] = useState<string>("7500000"); // ₹75 Lakh default
  const [circleRateValue, setCircleRateValue] = useState<string>("7000000"); // ₹70 Lakh default
  const [buyerGender, setBuyerGender] = useState<BuyerGender>("male");
  const [mhTier, setMhTier] = useState<MaharashtraTier>("mumbai");
  const [includeDelhiMcdDuty, setIncludeDelhiMcdDuty] = useState<boolean>(true);

  const calculation = useMemo(() => {
    const agreement = Math.max(0, Number(agreementValue) || 0);
    const circle = Math.max(0, Number(circleRateValue) || 0);
    const taxableValue = Math.max(agreement, circle);

    if (taxableValue <= 0) {
      return null;
    }

    let stampDutyRate = 0;
    let registrationRate = 1;
    let registrationFee = 0;
    let registrationCap: number | null = null;
    let fixedExtraFee = 0;
    let rateDetails = "";

    if (stateKey === "maharashtra") {
      // Local body tiers
      if (mhTier === "mumbai") {
        stampDutyRate = buyerGender === "female" ? 5 : 6; // 5% base + 1% metro cess
        rateDetails = buyerGender === "female" ? "5% (4% base + 1% Metro Cess)" : "6% (5% base + 1% Metro Cess)";
      } else if (mhTier === "pune_thane") {
        stampDutyRate = buyerGender === "female" ? 6 : 7; // 5% base + 1% cess + 1% LBT
        rateDetails = buyerGender === "female" ? "6% (Pune/Thane/Nagpur Corp)" : "7% (Pune/Thane/Nagpur Corp)";
      } else if (mhTier === "council") {
        stampDutyRate = buyerGender === "female" ? 3 : 4;
        rateDetails = buyerGender === "female" ? "3% (Municipal Council)" : "4% (Municipal Council)";
      } else {
        stampDutyRate = buyerGender === "female" ? 2 : 3;
        rateDetails = buyerGender === "female" ? "2% (Gram Panchayat)" : "3% (Gram Panchayat)";
      }

      registrationRate = 1;
      registrationCap = 30000;
      const rawReg = (taxableValue * registrationRate) / 100;
      registrationFee = taxableValue > 3000000 ? 30000 : rawReg;
    } else if (stateKey === "karnataka") {
      // Slabs: <20L (2%), 20L-45L (3%), >45L (5.6% inclusive of cess)
      // Registration: 2% effective 31 Aug 2025
      if (taxableValue <= 2000000) {
        stampDutyRate = 2;
        rateDetails = "2% (Affordable slab under ₹20 Lakhs)";
      } else if (taxableValue <= 4500000) {
        stampDutyRate = 3;
        rateDetails = "3% (Mid slab ₹20L – ₹45 Lakhs)";
      } else {
        stampDutyRate = 5.6; // 5% base + 10% cess on duty
        rateDetails = "5.6% (5% base + 10% cess on duty above ₹45L)";
      }
      registrationRate = 2; // Doubled in Aug 2025
      registrationFee = (taxableValue * registrationRate) / 100;
    } else if (stateKey === "delhi") {
      // Male 6%, Female 4%, Joint 5% (+ 1% MCD Transfer duty if applicable above 25L)
      let baseRate = buyerGender === "female" ? 4 : buyerGender === "joint" ? 5 : 6;
      if (includeDelhiMcdDuty && taxableValue > 2500000) {
        baseRate += 1;
        rateDetails = `${baseRate}% (${baseRate - 1}% Base + 1% MCD Transfer Duty > ₹25L)`;
      } else {
        rateDetails = `${baseRate}% Base Stamp Duty`;
      }
      stampDutyRate = baseRate;
      registrationRate = 1;
      fixedExtraFee = 100; // ₹100 pasting fee
      registrationFee = (taxableValue * registrationRate) / 100 + fixedExtraFee;
    } else if (stateKey === "uttar-pradesh") {
      // Male 7%, Female 6%, Joint 6.5%
      stampDutyRate = buyerGender === "female" ? 6 : buyerGender === "joint" ? 6.5 : 7;
      rateDetails = buyerGender === "female" ? "6% (Sole Female Owner)" : buyerGender === "joint" ? "6.5% (Joint Male + Female)" : "7% (Standard Male)";
      registrationRate = 1;
      registrationFee = (taxableValue * registrationRate) / 100;
    } else if (stateKey === "tamil-nadu") {
      // Stamp duty: 7% flat.
      // Registration: 4% standard; 3% for female <= 10L under G.O. 77
      stampDutyRate = 7;
      if (buyerGender === "female" && taxableValue <= 1000000) {
        registrationRate = 3;
        rateDetails = "7% Stamp Duty + 3% Registration (G.O. 77 for female ≤ ₹10L)";
      } else {
        registrationRate = 4;
        rateDetails = "7% Stamp Duty + 4% Registration Fee (11% Total)";
      }
      registrationFee = (taxableValue * registrationRate) / 100;
    }

    const stampDutyAmount = (taxableValue * stampDutyRate) / 100;
    const totalStatutory = stampDutyAmount + registrationFee;
    const effectiveTotalPercent = ((totalStatutory / taxableValue) * 100).toFixed(2);

    return {
      taxableValue,
      isCircleRateHigher: circle > agreement,
      stampDutyRate,
      rateDetails,
      stampDutyAmount,
      registrationRate,
      registrationFee,
      registrationCap,
      fixedExtraFee,
      totalStatutory,
      effectiveTotalPercent,
    };
  }, [stateKey, agreementValue, circleRateValue, buyerGender, mhTier, includeDelhiMcdDuty]);

  const results = calculation
    ? [
        {
          label: "Total Statutory Cost (Stamp Duty + Registration)",
          value: formatINR(calculation.totalStatutory),
          highlight: true,
        },
        {
          label: "Taxable Valuation Base",
          value: formatINR(calculation.taxableValue),
        },
        {
          label: `Stamp Duty Amount (${calculation.stampDutyRate}%)`,
          value: formatINR(calculation.stampDutyAmount),
        },
        {
          label: `Registration Fee (${calculation.registrationRate}%${
            calculation.registrationCap && calculation.taxableValue > 3000000 ? " — capped at ₹30k" : ""
          })`,
          value: formatINR(calculation.registrationFee),
        },
        {
          label: "Effective Government Rate",
          value: `${calculation.effectiveTotalPercent}% of Property Value`,
        },
      ]
    : [];

  return (
    <div className="mt-8 w-full max-w-full overflow-hidden rounded-3xl border border-stone-200 bg-white p-4 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Verified State Stamp Duty &amp; Registration Calculator
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Calculate state-specific stamp duty, local body surcharges, registration fee caps, and gender concessions across Indian states.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {/* State Selection */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            State / Region
          </label>
          <select
            value={stateKey}
            onChange={(e) => setStateKey(e.target.value as StateKey)}
            className="w-full rounded-xl border border-stone-200 bg-white p-3 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            <option value="maharashtra">Maharashtra (Mumbai, Pune, Thane)</option>
            <option value="karnataka">Karnataka (Bangalore BBMP)</option>
            <option value="delhi">Delhi (NCT)</option>
            <option value="uttar-pradesh">Uttar Pradesh (Noida, Lucknow, Ghaziabad)</option>
            <option value="tamil-nadu">Tamil Nadu (Chennai, Coimbatore)</option>
          </select>
        </div>

        {/* Ownership Gender */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Owner Gender (Concession Check)
          </label>
          <select
            value={buyerGender}
            onChange={(e) => setBuyerGender(e.target.value as BuyerGender)}
            className="w-full rounded-xl border border-stone-200 bg-white p-3 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          >
            <option value="male">Male (Standard Rate)</option>
            <option value="female">Female (Sole Owner Concession)</option>
            <option value="joint">Joint (Male + Female)</option>
          </select>
        </div>

        {/* Maharashtra Specific Local Body Tier */}
        {stateKey === "maharashtra" && (
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
              Maharashtra Local Body Classification
            </label>
            <select
              value={mhTier}
              onChange={(e) => setMhTier(e.target.value as MaharashtraTier)}
              className="w-full rounded-xl border border-stone-200 bg-white p-3 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              <option value="mumbai">Mumbai (MCGM) — 6% Male / 5% Female (5% base + 1% Metro Cess)</option>
              <option value="pune_thane">Pune / Thane / Nagpur (Corp + LBT) — 7% Male / 6% Female</option>
              <option value="council">Municipal Council — 4% Male / 3% Female</option>
              <option value="gram_panchayat">Gram Panchayat (Rural) — 3% Male / 2% Female</option>
            </select>
          </div>
        )}

        {/* Delhi Specific MCD Transfer Duty Check */}
        {stateKey === "delhi" && (
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={includeDelhiMcdDuty}
                onChange={(e) => setIncludeDelhiMcdDuty(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-blue-600"
              />
              <span>
                Include 1% MCD Transfer Duty (Applies in municipal corporation areas for properties &gt; ₹25 Lakhs)
              </span>
            </label>
          </div>
        )}

        {/* Agreement Value */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Agreement / Consideration Value (₹)
          </label>
          <input
            type="number"
            value={agreementValue}
            onChange={(e) => setAgreementValue(e.target.value)}
            placeholder="e.g. 7500000"
            className="w-full rounded-xl border border-stone-200 bg-white p-3 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>

        {/* Circle Rate Value */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
            Circle Rate / Guidance / Ready Reckoner Value (₹)
          </label>
          <input
            type="number"
            value={circleRateValue}
            onChange={(e) => setCircleRateValue(e.target.value)}
            placeholder="e.g. 7000000"
            className="w-full rounded-xl border border-stone-200 bg-white p-3 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
          <p className="mt-1 text-xs text-slate-500">
            Duty is charged on whichever is higher: Agreement Value or Circle Rate.
          </p>
        </div>
      </div>

      {/* State specific note */}
      {calculation && (
        <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/70 p-3.5 text-xs text-blue-800 dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-300">
          <strong>💡 Applied Rate Breakdown:</strong> {calculation.rateDetails}
          {stateKey === "maharashtra" && " | Registration capped at ₹30,000 for properties above ₹30L."}
          {stateKey === "karnataka" && " | Registration fee is 2% (revised Aug 2025). No gender rebate."}
          {stateKey === "delhi" && " | Registration fee is 1% + ₹100 pasting fee."}
          {stateKey === "uttar-pradesh" && " | Blood-relative gift deeds are flat ₹5,000 + ₹1,000."}
          {stateKey === "tamil-nadu" && " | Standard total is 11% (7% Duty + 4% Registration)."}
        </div>
      )}

      {/* Results */}
      {calculation && (
        <div className="mt-6">
          <ResultsSection
            title="Stamp Duty & Registration Results"
            calculatorName="Stamp Duty Calculator"
            results={results}
          />
        </div>
      )}
    </div>
  );
}