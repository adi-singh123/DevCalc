"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function BusinessDaysCalculator() {
  const [startDate, setStartDate] =
    useState("");

  const [endDate, setEndDate] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !startDate ||
      !endDate ||
      !submitted
    ) {
      return null;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (end < start) {
      return null;
    }

    let businessDays = 0;
    let weekendDays = 0;

    const current = new Date(start);

    while (current <= end) {
      const day =
        current.getDay();

      if (
        day === 0 ||
        day === 6
      ) {
        weekendDays++;
      } else {
        businessDays++;
      }

      current.setDate(
        current.getDate() + 1,
      );
    }

    const totalDays =
      businessDays +
      weekendDays;

    const totalWeeks =
      (
        totalDays / 7
      ).toFixed(1);

    return {
      totalDays,
      businessDays,
      weekendDays,
      totalWeeks,
    };
  }, [
    startDate,
    endDate,
    submitted,
  ]);

  const results = result
    ? [
        {
          label:
            "Business Days",
          value:
            result.businessDays,
          highlight: true,
        },
        {
          label:
            "Weekend Days",
          value:
            result.weekendDays,
        },
        {
          label:
            "Total Days",
          value:
            result.totalDays,
        },
        {
          label:
            "Total Weeks",
          value:
            result.totalWeeks,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
    

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Start Date
        </label>

        <input
          type="date"
          value={startDate}
          onChange={(e) =>
            setStartDate(
              e.target.value,
            )
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
            setEndDate(
              e.target.value,
            )
          }
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
          Calculate
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

      {result && (
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Business Days Summary
          </h3>

          <p className="mt-2 text-3xl font-bold text-green-600">
            {
              result.businessDays
            }{" "}
            Business Days
          </p>

          <p className="mt-3 text-slate-600">
            Between the selected
            dates there are{" "}
            <strong>
              {
                result.weekendDays
              }
            </strong>{" "}
            weekend days.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Business Day Results"
          results={results}
        />
      )}
    </div>
  );
}