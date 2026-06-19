"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const emiData = useMemo(() => {
    if (
      !submitted ||
      !loanAmount ||
      !interestRate ||
      !tenure
    ) {
      return null;
    }

    const principal = Number(loanAmount);
    const annualRate = Number(interestRate);
    const years = Number(tenure);

    if (
      principal <= 0 ||
      annualRate <= 0 ||
      years <= 0
    ) {
      return null;
    }

    const monthlyRate =
      annualRate / 12 / 100;

    const totalMonths = years * 12;

    const emi =
      (principal *
        monthlyRate *
        Math.pow(
          1 + monthlyRate,
          totalMonths,
        )) /
      (Math.pow(
        1 + monthlyRate,
        totalMonths,
      ) -
        1);

    const totalPayment =
      emi * totalMonths;

    const totalInterest =
      totalPayment - principal;

    return {
      emi,
      totalInterest,
      totalPayment,
    };
  }, [
    loanAmount,
    interestRate,
    tenure,
    submitted,
  ]);

  const results = emiData
    ? [
        {
          label: "Monthly EMI",
          value: `₹${emiData.emi.toFixed(0)}`,
          highlight: true,
        },
        {
          label: "Total Interest",
          value: `₹${emiData.totalInterest.toFixed(
            0,
          )}`,
        },
        {
          label: "Total Payment",
          value: `₹${emiData.totalPayment.toFixed(
            0,
          )}`,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
     

      <p className="mt-2 text-slate-600">
        Calculate monthly EMI, total
        interest, and total repayment
        amount instantly.
      </p>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Loan Amount (₹)
        </label>

        <input
          type="number"
          value={loanAmount}
          onChange={(e) =>
            setLoanAmount(e.target.value)
          }
          placeholder="1000000"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Interest Rate (%)
        </label>

        <input
          type="number"
          value={interestRate}
          onChange={(e) =>
            setInterestRate(
              e.target.value,
            )
          }
          placeholder="8"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Loan Tenure (Years)
        </label>

        <input
          type="number"
          value={tenure}
          onChange={(e) =>
            setTenure(e.target.value)
          }
          placeholder="20"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() =>
            setSubmitted(true)
          }
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate EMI
        </button>

        <button
          onClick={() => {
            setLoanAmount("");
            setInterestRate("");
            setTenure("");
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {emiData && (
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            EMI Summary
          </h3>

          <p className="mt-3 text-slate-600">
            Monthly EMI: ₹
            {emiData.emi.toFixed(0)}
          </p>

          <p className="mt-2 text-slate-600">
            Total Interest: ₹
            {emiData.totalInterest.toFixed(
              0,
            )}
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="EMI Results"
          results={results}
            calculatorName="EMI Results"
        />
      )}
    </div>
  );
}