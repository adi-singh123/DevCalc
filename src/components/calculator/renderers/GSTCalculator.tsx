"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function GSTCalculator() {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState("18");
  const [submitted, setSubmitted] = useState(false);

  const gstData = useMemo(() => {
    if (!submitted || !amount) {
      return null;
    }

    const originalAmount = Number(amount);
    const rate = Number(gstRate);

    if (
      Number.isNaN(originalAmount) ||
      originalAmount <= 0
    ) {
      return null;
    }

    const gstAmount =
      (originalAmount * rate) / 100;

    const totalAmount =
      originalAmount + gstAmount;

    const cgst = gstAmount / 2;
    const sgst = gstAmount / 2;

    return {
      gstAmount,
      totalAmount,
      cgst,
      sgst,
    };
  }, [amount, gstRate, submitted]);

  const results = gstData
    ? [
        {
          label: "Total Amount",
          value: `₹${gstData.totalAmount.toFixed(2)}`,
          highlight: true,
        },
        {
          label: "GST Amount",
          value: `₹${gstData.gstAmount.toFixed(2)}`,
        },
        {
          label: "CGST",
          value: `₹${gstData.cgst.toFixed(2)}`,
        },
        {
          label: "SGST",
          value: `₹${gstData.sgst.toFixed(2)}`,
        },
      ]
    : [];

  return (
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
    

      <p className="mt-2 text-slate-600">
        Calculate GST amount, CGST, SGST,
        and total payable amount instantly.
      </p>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Amount (₹)
        </label>

        <input
          type="number"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
          placeholder="1000"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          GST Rate
        </label>

        <select
          value={gstRate}
          onChange={(e) =>
            setGstRate(e.target.value)
          }
          className="w-full rounded-xl border p-3"
        >
          <option value="5">5%</option>
          <option value="12">12%</option>
          <option value="18">18%</option>
          <option value="28">28%</option>
        </select>
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate GST
        </button>

        <button
          onClick={() => {
            setAmount("");
            setGstRate("18");
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {gstData && (
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            GST Calculation Summary
          </h3>

          <p className="mt-3 text-slate-600">
            GST Amount: ₹
            {gstData.gstAmount.toFixed(2)}
          </p>

          <p className="mt-2 text-slate-600">
            Total Amount: ₹
            {gstData.totalAmount.toFixed(2)}
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="GST Results"
          results={results}
            calculatorName="GST Results"
        />
      )}
    </div>
  );
}