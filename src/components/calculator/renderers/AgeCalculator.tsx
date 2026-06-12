"use client";

import { useMemo, useRef, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");

  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().split("T")[0],
  );

  const [submitted, setSubmitted] = useState(false);

const birthDateRef = useRef<HTMLInputElement>(null);
const currentDateRef = useRef<HTMLInputElement>(null);

  const age = useMemo(() => {
    if (!birthDate || !submitted) return null;

    const birth = new Date(birthDate);
    const today = new Date(currentDate);

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;

      const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);

      days += previousMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const diff = today.getTime() - birth.getTime();

    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalHours = Math.floor(diff / (1000 * 60 * 60));
    const totalMinutes = Math.floor(diff / (1000 * 60));
    const totalSeconds = Math.floor(diff / 1000);

    return {
      years,
      months,
      days,
      weeks: totalWeeks,
      hours: totalHours,
      minutes: totalMinutes,
      seconds: totalSeconds,
    };
  }, [birthDate, currentDate, submitted]);

  const results = age
    ? [
        {
          label: "Current Age",
          value: `${age.years} Years`,
          highlight: true,
        },
        {
          label: "Months",
          value: age.months,
        },
        {
          label: "Weeks",
          value: age.weeks,
        },
        {
          label: "Remaining Days",
          value: age.days,
        },
        {
          label: "Hours",
          value: age.hours,
        },
        {
          label: "Minutes",
          value: age.minutes,
        },
        {
          label: "Seconds",
          value: age.seconds,
        },
      ]
    : [];

  const ageSummary = age
    ? `${age.years} years, ${age.months} months and ${age.days} days`
    : "";

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">Calculate Your Age</h2>

      <div className="mt-6">
        <label className="mb-2 block font-medium">Date of Birth</label>

        <input
          ref={birthDateRef}
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          onClick={() => birthDateRef.current?.showPicker?.()}
          className="w-full cursor-pointer rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">Current Date</label>

        <input
          ref={currentDateRef}
          type="date"
          value={currentDate}
          onChange={(e) => setCurrentDate(e.target.value)}
          onClick={() => currentDateRef.current?.showPicker?.()}
          className="w-full cursor-pointer rounded-xl border p-3"
        />
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate Age
        </button>

        <button
          onClick={() => {
            setBirthDate("");
            setCurrentDate(new Date().toISOString().split("T")[0]);
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {age && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center">
          <h3 className="text-xl font-semibold">You are {ageSummary} old</h3>

          <p className="mt-2 text-slate-600">
            Calculated from your date of birth to the selected current date.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection title="Age Results" results={results} />
      )}
    </div>
  );
}
