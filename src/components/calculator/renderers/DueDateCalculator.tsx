"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function DueDateCalculator() {
  const [lmpDate, setLmpDate] = useState("");

  const [cycleLength, setCycleLength] =
    useState(28);

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (!lmpDate || !submitted) return null;

    const lmp = new Date(lmpDate);

    const dueDate = new Date(lmp);

    dueDate.setDate(
      dueDate.getDate() +
        280 +
        (cycleLength - 28),
    );

    const conceptionDate = new Date(lmp);

    conceptionDate.setDate(
      conceptionDate.getDate() + 14,
    );

    const today = new Date();

    const pregnancyDays = Math.floor(
      (today.getTime() - lmp.getTime()) /
        (1000 * 60 * 60 * 24),
    );

    const pregnancyWeeks = Math.max(
      0,
      Math.floor(pregnancyDays / 7),
    );

    const pregnancyExtraDays =
      pregnancyDays % 7;

    const daysRemaining = Math.max(
      0,
      Math.ceil(
        (dueDate.getTime() -
          today.getTime()) /
          (1000 * 60 * 60 * 24),
      ),
    );

    let trimester = "First Trimester";

    if (pregnancyWeeks >= 13) {
      trimester = "Second Trimester";
    }

    if (pregnancyWeeks >= 28) {
      trimester = "Third Trimester";
    }

    return {
      dueDate,
      conceptionDate,
      pregnancyWeeks,
      pregnancyExtraDays,
      trimester,
      daysRemaining,
    };
  }, [lmpDate, cycleLength, submitted]);

  const results = result
    ? [
        {
          label: "Due Date",
          value:
            result.dueDate.toLocaleDateString(),
          highlight: true,
        },
        {
          label: "Pregnancy Week",
          value: `${result.pregnancyWeeks} Weeks`,
        },
        {
          label: "Extra Days",
          value:
            result.pregnancyExtraDays,
        },
        {
          label: "Trimester",
          value: result.trimester,
        },
        {
          label: "Days Remaining",
          value:
            result.daysRemaining,
        },
        {
          label: "Estimated Conception",
          value:
            result.conceptionDate.toLocaleDateString(),
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
     

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          First Day of Last Period (LMP)
        </label>

        <input
          type="date"
          value={lmpDate}
          onChange={(e) =>
            setLmpDate(e.target.value)
          }
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Cycle Length (Days)
        </label>

        <input
          type="number"
          min="21"
          max="40"
          value={cycleLength}
          onChange={(e) =>
            setCycleLength(
              Number(e.target.value),
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
          Calculate Due Date
        </button>

        <button
          onClick={() => {
            setLmpDate("");
            setCycleLength(28);
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-pink-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Estimated Due Date
          </h3>

          <p className="mt-2 text-3xl font-bold text-pink-600">
            {result.dueDate.toLocaleDateString()}
          </p>

          <p className="mt-3 text-slate-600">
            You are currently{" "}
            {result.pregnancyWeeks} weeks and{" "}
            {result.pregnancyExtraDays} days
            pregnant.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Pregnancy Details"
          results={results}
           calculatorName="Pregnancy Details"
        />
      )}
    </div>
  );
}