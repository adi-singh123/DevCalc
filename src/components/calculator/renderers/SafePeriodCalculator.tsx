"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function SafePeriodCalculator() {
  const [startDate, setStartDate] = useState("");
  const [cycleLength, setCycleLength] = useState("28");
  const [submitted, setSubmitted] = useState(false);

  const safePeriodData = useMemo(() => {
    if (!submitted || !startDate) {
      return null;
    }

    const cycleDays = Number(cycleLength);
    if (Number.isNaN(cycleDays) || cycleDays < 21 || cycleDays > 40) {
      return {
        error:
          "Please enter a realistic cycle length between 21 and 40 days.",
      };
    }

    const periodStart = new Date(startDate);
    if (Number.isNaN(periodStart.getTime())) {
      return {
        error: "Please choose a valid date for your last period start.",
      };
    }

    const nextPeriod = new Date(periodStart);
    nextPeriod.setDate(nextPeriod.getDate() + cycleDays);

    const ovulationDay = cycleDays - 14;
    const ovulationDate = new Date(periodStart);
    ovulationDate.setDate(periodStart.getDate() + ovulationDay);
    const fertileStart = new Date(periodStart);
    fertileStart.setDate(periodStart.getDate() + Math.max(ovulationDay - 5, 0));
    const fertileEnd = new Date(periodStart);
    fertileEnd.setDate(periodStart.getDate() + Math.min(ovulationDay + 1, cycleDays - 1));

    const formatDate = (date: Date) =>
      date.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
      });

    const fertileWindow = `${formatDate(fertileStart)} — ${formatDate(fertileEnd)}`;
    const nextPeriodDate = nextPeriod.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    return {
      fertileWindow,
      ovulationDate: formatDate(ovulationDate),
      nextPeriodDate,
    };
  }, [startDate, cycleLength, submitted]);

  const results = safePeriodData && !("error" in safePeriodData)
    ? [
        {
          label: "Estimated Fertile Window",
          value: safePeriodData.fertileWindow,
          highlight: true,
        },
        {
          label: "Estimated Ovulation",
          value: safePeriodData.ovulationDate,
        },
        {
          label: "Next Period Due",
          value: safePeriodData.nextPeriodDate,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mt-4">
        <label className="mb-2 block font-medium">Last Period Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full cursor-pointer rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">Average Cycle Length</label>
        <input
          type="number"
          min="21"
          max="40"
          value={cycleLength}
          onChange={(e) => setCycleLength(e.target.value)}
          placeholder="28"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="cursor-pointer rounded-xl bg-green-600 px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-green-700 hover:shadow-lg"
        >
          Estimate Fertile Window
        </button>

        <button
          onClick={() => {
            setStartDate("");
            setCycleLength("28");
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {safePeriodData && "error" in safePeriodData && (
        <div className="mt-8 rounded-3xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">
          {safePeriodData.error}
        </div>
      )}

      {safePeriodData && !("error" in safePeriodData) && (
        <div className="mt-8 rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-slate-50 p-8 text-center dark:border-slate-700 dark:from-slate-800 dark:to-slate-900">
          <p className="mt-4 text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Estimated Fertile Window
          </p>
          <h3 className="mt-3 text-4xl font-bold text-emerald-700 dark:text-emerald-300">
            {safePeriodData.fertileWindow}
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            There are no guaranteed “safe days.” This calendar-only estimate can be wrong when ovulation shifts and must not be used as the sole method to prevent pregnancy.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Cycle Timing Estimate"
          results={results}
          calculatorName="Safe Period Calculator"
        />
      )}
      <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
        <strong>Important:</strong> A date calculation cannot confirm ovulation or prevent pregnancy. If avoiding pregnancy, use reliable contraception and seek advice from a qualified healthcare professional. Condoms also help protect against sexually transmitted infections.
      </div>
    </div>
  );
}
