"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function DateCalculator() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const dateDifference = useMemo(() => {
    if (
      !submitted ||
      !startDate ||
      !endDate
    ) {
      return null;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    const diff =
      Math.abs(end.getTime() - start.getTime());

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
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Date Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Calculate the exact difference between two dates.
      </p>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Start Date
        </label>

        <input
          type="date"
          value={startDate}
          onChange={(e) =>
            setStartDate(e.target.value)
          }
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          End Date
        </label>

        <input
          type="date"
          value={endDate}
          onChange={(e) =>
            setEndDate(e.target.value)
          }
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate Difference
        </button>

        <button
          onClick={() => {
            setStartDate("");
            setEndDate("");
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {dateDifference && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Difference Between Dates
          </h3>

          <p className="mt-2 text-slate-600">
            Total Difference:{" "}
            {dateDifference.days} Days
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Date Difference Results"
          results={results}
        />
      )}
    </div>
  );
}