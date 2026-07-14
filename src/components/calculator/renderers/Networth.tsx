"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function NetWorthCalculator() {
  // Asset Inputs
  const [savings, setSavings] = useState("");
  const [fixedDeposits, setFixedDeposits] = useState("");
  const [investments, setInvestments] = useState(""); // Mutual Funds / Stocks
  const [retirementFunds, setRetirementFunds] = useState(""); // EPF / PPF / NPS
  const [realEstate, setRealEstate] = useState("");
  const [gold, setGold] = useState("");
  const [vehicles, setVehicles] = useState("");
  const [otherAssets, setOtherAssets] = useState("");

  // Liability Inputs
  const [homeLoan, setHomeLoan] = useState("");
  const [carLoan, setCarLoan] = useState("");
  const [personalLoan, setPersonalLoan] = useState("");
  const [creditCardDues, setCreditCardDues] = useState("");
  const [otherLiabilities, setOtherLiabilities] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const num = (v: string) => (v ? Math.max(0, Number(v)) || 0 : 0);

  const netWorthData = useMemo(() => {
    if (!submitted) return null;

    const totalAssets =
      num(savings) +
      num(fixedDeposits) +
      num(investments) +
      num(retirementFunds) +
      num(realEstate) +
      num(gold) +
      num(vehicles) +
      num(otherAssets);

    const totalLiabilities =
      num(homeLoan) +
      num(carLoan) +
      num(personalLoan) +
      num(creditCardDues) +
      num(otherLiabilities);

    if (totalAssets === 0 && totalLiabilities === 0) return null;

    const netWorth = totalAssets - totalLiabilities;
    const investableNetWorth = netWorth - num(realEstate) - num(vehicles);
    const liabilityRatio = totalAssets > 0 ? (totalLiabilities / totalAssets) * 100 : 0;

    return {
      totalAssets,
      totalLiabilities,
      netWorth,
      investableNetWorth,
      liabilityRatio,
    };
  }, [
    savings,
    fixedDeposits,
    investments,
    retirementFunds,
    realEstate,
    gold,
    vehicles,
    otherAssets,
    homeLoan,
    carLoan,
    personalLoan,
    creditCardDues,
    otherLiabilities,
    submitted,
  ]);

  const formatCurrency = (value: number) =>
    `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;

  const results = netWorthData
    ? [
        { label: "Total Assets", value: formatCurrency(netWorthData.totalAssets) },
        { label: "Total Liabilities", value: formatCurrency(netWorthData.totalLiabilities) },
        {
          label: "Net Worth",
          value: formatCurrency(netWorthData.netWorth),
          highlight: true,
        },
        {
          label: "Investable Net Worth",
          value: formatCurrency(netWorthData.investableNetWorth),
          highlight: true,
        },
        {
          label: "Liabilities as % of Assets",
          value: `${netWorthData.liabilityRatio.toFixed(1)}%`,
        },
      ]
    : [];

  const handleReset = () => {
    setSubmitted(false);
    setSavings("");
    setFixedDeposits("");
    setInvestments("");
    setRetirementFunds("");
    setRealEstate("");
    setGold("");
    setVehicles("");
    setOtherAssets("");
    setHomeLoan("");
    setCarLoan("");
    setPersonalLoan("");
    setCreditCardDues("");
    setOtherLiabilities("");
  };

  const inputClass =
    "w-full rounded-xl border p-3 focus:border-black focus:outline-none focus:ring-1 focus:ring-black";
  const labelClass = "mb-2 block text-sm font-medium";

  return (
    <div className="mt-8 w-full max-w-full overflow-hidden rounded-3xl border bg-white p-4 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold">Net Worth Calculator</h2>
      <p className="mt-2 text-slate-600">
        Add up everything you own and subtract everything you owe to see your real net worth.
      </p>

      {/* Responsive grid: stacks on mobile, side-by-side from md up */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Assets */}
        <div className="rounded-2xl border bg-emerald-50 p-4">
          <h3 className="mb-4 font-semibold">Assets (What You Own)</h3>

          <label className={labelClass}>Savings / Cash (₹)</label>
          <input
            type="number"
            min="0"
            value={savings}
            onChange={(e) => setSavings(e.target.value)}
            className={`${inputClass} mb-4`}
            placeholder="e.g. 200000"
          />

          <label className={labelClass}>Fixed Deposits (₹)</label>
          <input
            type="number"
            min="0"
            value={fixedDeposits}
            onChange={(e) => setFixedDeposits(e.target.value)}
            className={`${inputClass} mb-4`}
            placeholder="e.g. 300000"
          />

          <label className={labelClass}>Mutual Funds / Stocks (₹)</label>
          <input
            type="number"
            min="0"
            value={investments}
            onChange={(e) => setInvestments(e.target.value)}
            className={`${inputClass} mb-4`}
            placeholder="e.g. 500000"
          />

          <label className={labelClass}>EPF / PPF / NPS (₹)</label>
          <input
            type="number"
            min="0"
            value={retirementFunds}
            onChange={(e) => setRetirementFunds(e.target.value)}
            className={`${inputClass} mb-4`}
            placeholder="e.g. 400000"
          />

          <label className={labelClass}>Real Estate — Current Market Value (₹)</label>
          <input
            type="number"
            min="0"
            value={realEstate}
            onChange={(e) => setRealEstate(e.target.value)}
            className={`${inputClass} mb-4`}
            placeholder="e.g. 4500000"
          />

          <label className={labelClass}>Gold (₹, current value)</label>
          <input
            type="number"
            min="0"
            value={gold}
            onChange={(e) => setGold(e.target.value)}
            className={`${inputClass} mb-4`}
            placeholder="e.g. 150000"
          />

          <label className={labelClass}>Vehicles — Resale Value (₹)</label>
          <input
            type="number"
            min="0"
            value={vehicles}
            onChange={(e) => setVehicles(e.target.value)}
            className={`${inputClass} mb-4`}
            placeholder="e.g. 300000"
          />

          <label className={labelClass}>Other Assets (₹)</label>
          <input
            type="number"
            min="0"
            value={otherAssets}
            onChange={(e) => setOtherAssets(e.target.value)}
            className={inputClass}
            placeholder="e.g. 50000"
          />
        </div>

        {/* Liabilities */}
        <div className="rounded-2xl border bg-rose-50 p-4">
          <h3 className="mb-4 font-semibold">Liabilities (What You Owe)</h3>

          <label className={labelClass}>Home Loan Outstanding (₹)</label>
          <input
            type="number"
            min="0"
            value={homeLoan}
            onChange={(e) => setHomeLoan(e.target.value)}
            className={`${inputClass} mb-4`}
            placeholder="e.g. 2200000"
          />

          <label className={labelClass}>Car Loan Outstanding (₹)</label>
          <input
            type="number"
            min="0"
            value={carLoan}
            onChange={(e) => setCarLoan(e.target.value)}
            className={`${inputClass} mb-4`}
            placeholder="e.g. 150000"
          />

          <label className={labelClass}>Personal / Education Loan (₹)</label>
          <input
            type="number"
            min="0"
            value={personalLoan}
            onChange={(e) => setPersonalLoan(e.target.value)}
            className={`${inputClass} mb-4`}
            placeholder="e.g. 100000"
          />

          <label className={labelClass}>Credit Card Dues (₹)</label>
          <input
            type="number"
            min="0"
            value={creditCardDues}
            onChange={(e) => setCreditCardDues(e.target.value)}
            className={`${inputClass} mb-4`}
            placeholder="e.g. 30000"
          />

          <label className={labelClass}>Other Liabilities (₹)</label>
          <input
            type="number"
            min="0"
            value={otherLiabilities}
            onChange={(e) => setOtherLiabilities(e.target.value)}
            className={inputClass}
            placeholder="e.g. 20000"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={() => setSubmitted(true)}
          className="w-full rounded-xl bg-black px-6 py-3 text-white transition hover:scale-105"
        >
          Calculate Net Worth
        </button>
        <button
          onClick={handleReset}
          className="w-full rounded-xl border px-6 py-3 hover:bg-gray-50"
        >
          Reset
        </button>
      </div>

      {results.length > 0 && (
        <div className="mt-8">
          <ResultsSection title="Net Worth Summary" results={results} calculatorName="Net Worth" />
          <p className="mt-4 text-sm text-slate-500">
            Investable net worth excludes real estate and vehicles, since these are not typically
            liquidated for day-to-day expenses.
          </p>
        </div>
      )}
    </div>
  );
}