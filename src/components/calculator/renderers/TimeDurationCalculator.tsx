"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function TimeDurationCalculator() {
  const [startDateTime, setStartDateTime] =
    useState("");

  const [endDateTime, setEndDateTime] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !startDateTime ||
      !endDateTime ||
      !submitted
    ) {
      return null;
    }

    const start = new Date(startDateTime);
    const end = new Date(endDateTime);

    if (end <= start) {
      return null;
    }

    const diff =
      end.getTime() - start.getTime();

    const totalSeconds = Math.floor(
      diff / 1000,
    );

    const totalMinutes = Math.floor(
      diff / (1000 * 60),
    );

    const totalHours =
      diff / (1000 * 60 * 60);

    const totalDays =
      diff / (1000 * 60 * 60 * 24);

    let remainingSeconds =
      totalSeconds;

    const days = Math.floor(
      remainingSeconds / 86400,
    );

    remainingSeconds %= 86400;

    const hours = Math.floor(
      remainingSeconds / 3600,
    );

    remainingSeconds %= 3600;

    const minutes = Math.floor(
      remainingSeconds / 60,
    );

    const seconds =
      remainingSeconds % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
      totalDays,
      totalHours,
      totalMinutes,
      totalSeconds,
    };
  }, [
    startDateTime,
    endDateTime,
    submitted,
  ]);

  const results = result
    ? [
        {
          label: "Days",
          value: result.days,
          highlight: true,
        },
        {
          label: "Hours",
          value: result.hours,
        },
        {
          label: "Minutes",
          value: result.minutes,
        },
        {
          label: "Seconds",
          value: result.seconds,
        },
        {
          label: "Total Days",
          value:
            result.totalDays.toFixed(
              2,
            ),
        },
        {
          label: "Total Hours",
          value:
            result.totalHours.toFixed(
              2,
            ),
        },
        {
          label: "Total Minutes",
          value:
            result.totalMinutes.toLocaleString(),
        },
        {
          label: "Total Seconds",
          value:
            result.totalSeconds.toLocaleString(),
        },
      ]
    : [];

  return (
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Time Duration Calculator
      </h2>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Start Date & Time
        </label>

        <input
          type="datetime-local"
          value={startDateTime}
          onChange={(e) =>
            setStartDateTime(
              e.target.value,
            )
          }
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          End Date & Time
        </label>

        <input
          type="datetime-local"
          value={endDateTime}
          onChange={(e) =>
            setEndDateTime(
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
          Calculate Duration
        </button>

        <button
          onClick={() => {
            setStartDateTime("");
            setEndDateTime("");
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Duration Between Dates
          </h3>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {result.days} Days{" "}
            {result.hours} Hours{" "}
            {result.minutes} Minutes
          </p>

          <p className="mt-3 text-slate-600">
            Total Duration:{" "}
            {result.totalHours.toFixed(
              2,
            )}{" "}
            Hours
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Duration Results"
          results={results}
        />
      )}
    </div>
  );
}