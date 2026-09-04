"use client";

import { useMemo, useRef, useState } from "react";
import { AlertCircle, Calendar, RefreshCw } from "lucide-react";
import ResultsSection from "../ResultsSection";

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [currentDate, setCurrentDate] = useState(
    () => new Date().toISOString().split("T")[0],
  );
  const [submitted, setSubmitted] = useState(false);

  const birthDateRef = useRef<HTMLInputElement>(null);
  const currentDateRef = useRef<HTMLInputElement>(null);

  const calculation = useMemo(() => {
    if (!birthDate || !currentDate || !submitted) return null;

    const [bY, bM, bD] = birthDate.split("-").map(Number);
    const [tY, tM, tD] = currentDate.split("-").map(Number);

    if (!bY || !bM || !bD || !tY || !tM || !tD) {
      return { error: "Please enter valid dates." };
    }

    const birth = new Date(bY, bM - 1, bD);
    const target = new Date(tY, tM - 1, tD);

    if (target.getTime() < birth.getTime()) {
      return {
        error:
          "Date of birth cannot be later than the target calculation date. Please choose a birth date that occurs on or before the calculation date.",
      };
    }

    let years = tY - bY;
    let months = tM - bM;
    let days = tD - bD;

    if (days < 0) {
      months--;
      // Number of days in the month preceding the target month
      const prevMonthLastDay = new Date(tY, tM - 1, 0).getDate();
      days += prevMonthLastDay;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // Total units calculation
    const diffTime = target.getTime() - birth.getTime();
    const totalDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalHours = totalDays * 24;
    const totalMinutes = totalHours * 60;
    const totalSeconds = totalMinutes * 60;

    // Next birthday countdown
    let nextBdayYear = tY;
    const thisYearBday = new Date(nextBdayYear, bM - 1, bD);
    if (thisYearBday.getTime() < target.getTime()) {
      nextBdayYear++;
    }
    const nextBday = new Date(nextBdayYear, bM - 1, bD);
    const daysToNextBday = Math.round(
      (nextBday.getTime() - target.getTime()) / (1000 * 60 * 60 * 24),
    );

    return {
      years,
      months,
      days,
      weeks: totalWeeks,
      totalDays,
      hours: totalHours,
      minutes: totalMinutes,
      seconds: totalSeconds,
      daysToNextBday,
    };
  }, [birthDate, currentDate, submitted]);

  const hasError = Boolean(calculation && "error" in calculation && calculation.error);
  const age = calculation && !("error" in calculation) ? calculation : null;

  const results = age
    ? [
        {
          label: "Exact Age",
          value: `${age.years} Years, ${age.months} Months, ${age.days} Days`,
          highlight: true,
        },
        {
          label: "Total Months",
          value: `${age.years * 12 + age.months} Months, ${age.days} Days`,
        },
        {
          label: "Total Weeks",
          value: `${age.weeks.toLocaleString()} Weeks`,
        },
        {
          label: "Total Days",
          value: `${age.totalDays.toLocaleString()} Days`,
        },
        {
          label: "Total Hours",
          value: `${age.hours.toLocaleString()} Hours`,
        },
        {
          label: "Total Minutes",
          value: `${age.minutes.toLocaleString()} Minutes`,
        },
        {
          label: "Total Seconds",
          value: `${age.seconds.toLocaleString()} Seconds`,
        },
        {
          label: "Next Birthday In",
          value:
            age.daysToNextBday === 0
              ? "🎉 Today is your Birthday!"
              : `${age.daysToNextBday} Days`,
          highlight: true,
        },
      ]
    : [];

  return (
    <div className="mt-8 w-full max-w-full overflow-hidden rounded-3xl border border-stone-200 bg-white p-4 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200">
            Date of Birth
          </label>
          <div className="relative">
            <input
              ref={birthDateRef}
              type="date"
              max={currentDate || undefined}
              value={birthDate}
              onChange={(e) => {
                setBirthDate(e.target.value);
                setSubmitted(false);
              }}
              onClick={() => birthDateRef.current?.showPicker?.()}
              className="w-full cursor-pointer rounded-xl border border-stone-300 bg-stone-50/50 p-3 text-sm font-medium text-slate-900 transition focus:border-blue-600 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200">
            Age as of Date (Target Date)
          </label>
          <div className="relative">
            <input
              ref={currentDateRef}
              type="date"
              value={currentDate}
              onChange={(e) => {
                setCurrentDate(e.target.value);
                setSubmitted(false);
              }}
              onClick={() => currentDateRef.current?.showPicker?.()}
              className="w-full cursor-pointer rounded-xl border border-stone-300 bg-stone-50/50 p-3 text-sm font-medium text-slate-900 transition focus:border-blue-600 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1f3a5c] px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-[#162a43] dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <Calendar size={17} /> Calculate Age
        </button>

        <button
          type="button"
          onClick={() => {
            setBirthDate("");
            setCurrentDate(new Date().toISOString().split("T")[0]);
            setSubmitted(false);
          }}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-stone-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-stone-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          <RefreshCw size={16} /> Reset
        </button>
      </div>

      {hasError && (
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-300">
          <AlertCircle size={20} className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-400" />
          <p className="text-sm leading-relaxed">
            {"error" in calculation! && calculation.error}
          </p>
        </div>
      )}

      {age && (
        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50/80 p-6 text-center dark:border-blue-900/50 dark:bg-slate-800/80">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            Calculated Age Summary
          </span>
          <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            {age.years} Years, {age.months} Months, {age.days} Days
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Exact chronological lifespan calculated to the selected target date.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Detailed Time Breakdown"
          results={results}
          calculatorName="Age Calculator"
        />
      )}
    </div>
  );
}

