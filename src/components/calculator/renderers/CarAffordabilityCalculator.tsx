"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

const money = (value: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);

export default function CarAffordabilityCalculator() {
  const [income, setIncome] = useState(100000);
  const [existingEmis, setExistingEmis] = useState(0);
  const [downPayment, setDownPayment] = useState(300000);
  const [emiShare, setEmiShare] = useState(20);
  const [rate, setRate] = useState(9);
  const [years, setYears] = useState(5);
  const [runningCost, setRunningCost] = useState(10000);

  const result = useMemo(() => {
    const months = Math.max(1, Math.round(years * 12));
    const monthlyRate = Math.max(0, rate) / 1200;
    const carEmi = Math.max(0, income * Math.min(Math.max(emiShare, 0), 100) / 100 - existingEmis);
    const factor = monthlyRate === 0 ? months : ((1 + monthlyRate) ** months - 1) / (monthlyRate * (1 + monthlyRate) ** months);
    const loan = carEmi * factor;
    const totalInterest = Math.max(0, carEmi * months - loan);
    const monthlyOutflow = carEmi + Math.max(0, runningCost);
    return { carEmi, loan, totalInterest, monthlyOutflow, budget: loan + Math.max(0, downPayment), incomeShare: income > 0 ? monthlyOutflow / income * 100 : 0 };
  }, [income, existingEmis, downPayment, emiShare, rate, years, runningCost]);

  const field = (label: string, value: number, setter: (value: number) => void, suffix = "₹") => (
    <label className="block"><span className="mb-2 block font-medium">{label}</span><div className="flex rounded-xl border bg-white dark:border-slate-700 dark:bg-slate-950"><span className="p-3 text-slate-500">{suffix}</span><input type="number" min="0" value={value} onChange={(e) => setter(Math.max(0, Number(e.target.value)))} className="min-w-0 flex-1 rounded-xl bg-transparent p-3 outline-none" /></div></label>
  );

  return <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
    <div className="grid gap-5 sm:grid-cols-2">{field("Monthly take-home income", income, setIncome)}{field("Existing monthly EMIs", existingEmis, setExistingEmis)}{field("Available down payment", downPayment, setDownPayment)}{field("Maximum EMI share", emiShare, setEmiShare, "%")}{field("Annual loan interest", rate, setRate, "%")}{field("Loan tenure", years, setYears, "Years")}{field("Monthly running-cost allowance", runningCost, setRunningCost)}</div>
    {result.carEmi <= 0 && <p className="mt-5 rounded-xl bg-amber-50 p-4 text-sm text-amber-800 dark:bg-amber-950/40 dark:text-amber-200">Existing EMIs already use the selected EMI allowance. Increase income or the limit, reduce debt, or plan a cash purchase.</p>}
    <ResultsSection title="Estimated affordable car budget" calculatorName="Car Affordability Calculator" results={[
      { label: "Maximum on-road budget", value: money(result.budget), highlight: true },
      { label: "Available car EMI", value: money(result.carEmi) }, { label: "Estimated loan amount", value: money(result.loan) },
      { label: "Total loan interest", value: money(result.totalInterest) }, { label: "Monthly ownership outflow", value: money(result.monthlyOutflow) },
      { label: "Outflow share of income", value: `${result.incomeShare.toFixed(1)}%` },
    ]} />
    <p className="mt-6 text-sm text-slate-500">Planning estimate only. It is not loan approval or financial advice; verify lender terms, on-road charges, insurance, and actual ownership costs.</p>
  </div>;
}
