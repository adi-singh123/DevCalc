"use client";

import { useState } from "react";
import ResultsSection from "../ResultsSection";

const inputClass = "w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-white";
const labelClass = "mb-2 block font-medium";
const money = (value: number) => `₹${Math.round(value).toLocaleString("en-IN")}`;

function schedule(principal: number, monthlyRate: number, emi: number, monthlyExtra = 0) {
  let balance = principal;
  let interest = 0;
  let months = 0;
  while (balance > 0.01 && months < 1200) {
    const monthInterest = balance * monthlyRate;
    interest += monthInterest;
    balance = Math.max(0, balance + monthInterest - emi - monthlyExtra);
    months += 1;
  }
  return { interest, months, repaid: balance <= 0.01 };
}

function duration(months: number) {
  const years = Math.floor(months / 12);
  const remainder = months % 12;
  return `${years ? `${years} yr${years === 1 ? "" : "s"}` : ""}${years && remainder ? " " : ""}${remainder ? `${remainder} mo` : ""}` || "0 mo";
}

export default function HomeLoanPrepaymentCalculator() {
  const [principal, setPrincipal] = useState("4000000");
  const [rate, setRate] = useState("8.5");
  const [years, setYears] = useState("15");
  const [lumpSum, setLumpSum] = useState("200000");
  const [monthlyExtra, setMonthlyExtra] = useState("5000");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const p = Number(principal); const annualRate = Number(rate); const months = Math.round(Number(years) * 12); const lump = Number(lumpSum); const extra = Number(monthlyExtra);
  const valid = [p, annualRate, Number(years)].every((n) => Number.isFinite(n) && n > 0) && [lump, extra].every((n) => Number.isFinite(n) && n >= 0) && lump < p && annualRate <= 40 && months > 0 && months <= 600;

  const result = submitted && valid ? (() => {
    const monthlyRate = annualRate / 1200;
    const emi = monthlyRate === 0 ? p / months : p * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    const baseline = schedule(p, monthlyRate, emi);
    const faster = schedule(p - lump, monthlyRate, emi, extra);
    return { emi, baseline, faster, interestSaved: baseline.interest - faster.interest, monthsSaved: baseline.months - faster.months };
  })() : null;

  function calculate() {
    if (!valid) { setError("Enter valid positive loan details. Tenure must be up to 50 years and the lump sum must be below the outstanding principal."); setSubmitted(false); return; }
    setError(""); setSubmitted(true);
  }
  function reset() { setPrincipal("4000000"); setRate("8.5"); setYears("15"); setLumpSum("200000"); setMonthlyExtra("5000"); setSubmitted(false); setError(""); }
  const update = (setter: (v: string) => void) => (event: React.ChangeEvent<HTMLInputElement>) => { setter(event.target.value); setSubmitted(false); };
  const results = result ? [
    { label: "Estimated Interest Saved", value: money(result.interestSaved), highlight: true },
    { label: "Regular EMI", value: money(result.emi) },
    { label: "Original Remaining Tenure", value: duration(result.baseline.months) },
    { label: "New Estimated Tenure", value: duration(result.faster.months) },
    { label: "Tenure Reduced By", value: duration(result.monthsSaved) },
    { label: "Interest Without Prepayment", value: money(result.baseline.interest) },
    { label: "Interest After Prepayment", value: money(result.faster.interest) },
  ] : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
      <h2 className="text-2xl font-bold">Current Loan and Prepayment</h2><p className="mt-2 text-slate-600 dark:text-slate-300">Use the principal outstanding today and the remaining tenure, not the original sanction details.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div><label className={labelClass}>Outstanding Principal (₹)</label><input type="number" min="1" value={principal} onChange={update(setPrincipal)} className={inputClass} /></div>
        <div><label className={labelClass}>Current Interest Rate (% p.a.)</label><input type="number" min="0.01" max="40" step="0.01" value={rate} onChange={update(setRate)} className={inputClass} /></div>
        <div><label className={labelClass}>Remaining Tenure (years)</label><input type="number" min="0.1" max="50" step="0.1" value={years} onChange={update(setYears)} className={inputClass} /></div>
        <div><label className={labelClass}>Immediate Lump-Sum Prepayment (₹)</label><input type="number" min="0" value={lumpSum} onChange={update(setLumpSum)} className={inputClass} /></div>
        <div><label className={labelClass}>Extra Payment Every Month (₹)</label><input type="number" min="0" value={monthlyExtra} onChange={update(setMonthlyExtra)} className={inputClass} /><p className="mt-1 text-xs text-slate-500">Set either prepayment field to zero if it does not apply.</p></div>
      </div>
      {error && <p role="alert" className="mt-4 text-sm text-red-600">{error}</p>}
      <div className="mt-6 flex flex-wrap gap-3"><button type="button" onClick={calculate} className="rounded-xl bg-black px-6 py-3 font-medium text-white hover:bg-slate-800">Calculate Savings</button><button type="button" onClick={reset} className="rounded-xl border px-6 py-3 font-medium hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-900">Reset</button></div>
      {results.length > 0 && <ResultsSection title="Prepayment Comparison" results={results} calculatorName="Home Loan Prepayment Calculator" />}
      <p className="mt-6 text-xs text-slate-500">Estimate only. It assumes a constant rate, unchanged regular EMI, and immediate/recurring payments applied to principal. Confirm charges and the revised schedule with your lender.</p>
    </div>
  );
}
