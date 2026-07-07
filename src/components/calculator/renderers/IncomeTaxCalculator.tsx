"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

type Slab = { limit: number; rate: number };

// FY 2025-26 (AY 2026-27) slabs, per Union Budget 2025 (unchanged for FY 2026-27)
const NEW_REGIME_SLABS: Slab[] = [
  { limit: 400000, rate: 0 },
  { limit: 800000, rate: 0.05 },
  { limit: 1200000, rate: 0.1 },
  { limit: 1600000, rate: 0.15 },
  { limit: 2000000, rate: 0.2 },
  { limit: 2400000, rate: 0.25 },
  { limit: Infinity, rate: 0.3 },
];

const OLD_REGIME_SLABS: Slab[] = [
  { limit: 250000, rate: 0 },
  { limit: 500000, rate: 0.05 },
  { limit: 1000000, rate: 0.2 },
  { limit: Infinity, rate: 0.3 },
];

// Section 87A rebate: tax liability is reduced to zero if taxable income
// is at or below these thresholds (the rebate cap exactly covers the tax
// due at the threshold, so a full write-off is equivalent to "cap" rebate logic)
const NEW_REGIME_REBATE_INCOME_LIMIT = 1200000;
const OLD_REGIME_REBATE_INCOME_LIMIT = 500000;

const CESS_RATE = 0.04;

function calculateSlabTax(income: number, slabs: Slab[]) {
  let tax = 0;
  let previousLimit = 0;

  for (const slab of slabs) {
    if (income <= previousLimit) break;

    const taxableInThisSlab = Math.min(income, slab.limit) - previousLimit;
    tax += taxableInThisSlab * slab.rate;
    previousLimit = slab.limit;
  }

  return tax;
}

export default function IncomeTaxCalculator() {
  const [annualIncome, setAnnualIncome] = useState("");
  const [taxRegime, setTaxRegime] = useState<"new" | "old">("new");
  const [submitted, setSubmitted] = useState(false);

  const taxData = useMemo(() => {
    if (!submitted || !annualIncome) return null;

    const income = Number(annualIncome);
    if (!Number.isFinite(income) || income <= 0) return null;

    const slabs = taxRegime === "new" ? NEW_REGIME_SLABS : OLD_REGIME_SLABS;
    let tax = calculateSlabTax(income, slabs);

    const rebateLimit =
      taxRegime === "new"
        ? NEW_REGIME_REBATE_INCOME_LIMIT
        : OLD_REGIME_REBATE_INCOME_LIMIT;

    // Section 87A rebate: full tax liability is waived below the threshold
    if (income <= rebateLimit) {
      tax = 0;
    }

    const cess = tax * CESS_RATE;
    const totalTax = tax + cess;
    const effectiveTaxRate = (totalTax / income) * 100;

    return { income, tax, cess, totalTax, effectiveTaxRate };
  }, [annualIncome, taxRegime, submitted]);

  const results = taxData
    ? [
        {
          label: "Annual Income",
          value: `₹${taxData.income.toLocaleString("en-IN")}`,
        },
        {
          label: "Income Tax",
          value: `₹${taxData.tax.toLocaleString("en-IN", {
            maximumFractionDigits: 0,
          })}`,
        },
        {
          label: "Health & Education Cess",
          value: `₹${taxData.cess.toLocaleString("en-IN", {
            maximumFractionDigits: 0,
          })}`,
        },
        {
          label: "Total Tax Liability",
          value: `₹${taxData.totalTax.toLocaleString("en-IN", {
            maximumFractionDigits: 0,
          })}`,
          highlight: true,
        },
        {
          label: "Effective Tax Rate",
          value: `${taxData.effectiveTaxRate.toFixed(2)}%`,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold">Income Tax Calculator</h2>

      <p className="mt-2 text-slate-600">
        Calculate your estimated income tax liability under the Indian tax
        regime for FY 2025-26 (AY 2026-27).
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">Annual Income (₹)</label>

          <input
            type="number"
            min={0}
            step="1000"
            inputMode="numeric"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(e.target.value)}
            placeholder="1200000"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Tax Regime</label>

          <select
            value={taxRegime}
            onChange={(e) => setTaxRegime(e.target.value as "new" | "old")}
            className="w-full rounded-xl border p-3"
          >
            <option value="new">New Tax Regime</option>
            <option value="old">Old Tax Regime</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate Tax
        </button>

        <button
          onClick={() => {
            setAnnualIncome("");
            setTaxRegime("new");
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {taxData && (
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center">
          <h3 className="text-xl font-semibold">Tax Summary</h3>

          <p className="mt-2 text-slate-600">
            Estimated tax liability:{" "}
            <strong>
              ₹
              {taxData.totalTax.toLocaleString("en-IN", {
                maximumFractionDigits: 0,
              })}
            </strong>
          </p>

          <p className="mt-1 text-slate-600">
            Effective tax rate:{" "}
            <strong>{taxData.effectiveTaxRate.toFixed(2)}%</strong>
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Income Tax Results"
          results={results}
          calculatorName="Income Tax Results"
        />
      )}

      <p className="mt-6 text-xs text-slate-400">
        This is an estimate for individuals below 60 years of age. It
        includes the Section 87A rebate but does not account for surcharge
        (applicable above ₹50 lakh income), marginal relief near the rebate
        threshold, or deductions under the old regime. Consult a tax advisor
        for exact filing figures.
      </p>
    </div>
  );
}