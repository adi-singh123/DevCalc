"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function DateCalculator() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const dateDifference = useMemo(() => {
    if (!submitted || !startDate || !endDate) {
      return null;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    const diff = Math.abs(
      end.getTime() - start.getTime()
    );

    const days = Math.floor(
      diff / (1000 * 60 * 60 * 24)
    );

    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30.44);
    const years = Math.floor(days / 365.25);

    const hours = Math.floor(
      diff / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
      diff / (1000 * 60)
    );

    return {
      years,
      months,
      weeks,
      days,
      hours,
      minutes,
    };
  }, [startDate, endDate, submitted]);

  const results = dateDifference
    ? [
        {
          label: "Days",
          value: dateDifference.days,
          highlight: true,
        },
        {
          label: "Weeks",
          value: dateDifference.weeks,
        },
        {
          label: "Months",
          value: dateDifference.months,
        },
        {
          label: "Years",
          value: dateDifference.years,
        },
        {
          label: "Hours",
          value: dateDifference.hours,
        },
        {
          label: "Minutes",
          value: dateDifference.minutes,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-2xl border bg-white p-4 shadow-sm sm:p-6 lg:p-8">
      <p className="text-sm text-slate-600 sm:text-base">
        Calculate the exact difference between two dates.
      </p>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium sm:text-base">
          Start Date
        </label>

        <input
          type="date"
          value={startDate}
          onChange={(e) =>
            setStartDate(e.target.value)
          }
          className="w-full rounded-xl border border-slate-300 p-3 text-sm outline-none transition focus:border-black sm:text-base"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-sm font-medium sm:text-base">
          End Date
        </label>

        <input
          type="date"
          value={endDate}
          onChange={(e) =>
            setEndDate(e.target.value)
          }
          className="w-full rounded-xl border border-slate-300 p-3 text-sm outline-none transition focus:border-black sm:text-base"
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={() => setSubmitted(true)}
          className="w-full cursor-pointer rounded-xl bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg sm:w-auto sm:text-base"
        >
          Calculate Difference
        </button>

        <button
          onClick={() => {
            setStartDate("");
            setEndDate("");
            setSubmitted(false);
          }}
          className="w-full cursor-pointer rounded-xl border px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-[1.02] hover:bg-gray-100 hover:shadow-lg sm:w-auto sm:text-base"
        >
          Reset
        </button>
      </div>

      {dateDifference && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-4 text-center sm:p-6">
          <h3 className="text-lg font-semibold sm:text-xl">
            Difference Between Dates
          </h3>

          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Total Difference:
            <span className="ml-1 font-semibold">
              {dateDifference.days} Days
            </span>
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Date Difference Results"
          results={results}
          calculatorName="Date Difference Results"
        />
      )}
    </div>
  );
}