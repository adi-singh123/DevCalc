"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function OvulationCalculator() {
  const [lmpDate, setLmpDate] = useState("");

  const [cycleLength, setCycleLength] =
    useState(28);

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (!lmpDate || !submitted) return null;

    const lmp = new Date(lmpDate);

    const nextPeriod = new Date(lmp);

    nextPeriod.setDate(
      nextPeriod.getDate() + cycleLength,
    );

    const ovulationDate = new Date(nextPeriod);

    ovulationDate.setDate(
      ovulationDate.getDate() - 14,
    );

    const fertileStart = new Date(
      ovulationDate,
    );

    fertileStart.setDate(
      fertileStart.getDate() - 5,
    );

    const fertileEnd = new Date(
      ovulationDate,
    );

    fertileEnd.setDate(
      fertileEnd.getDate() + 1,
    );

    const bestDaysStart = new Date(
      ovulationDate,
    );

    bestDaysStart.setDate(
      bestDaysStart.getDate() - 2,
    );

    return {
      ovulationDate,
      fertileStart,
      fertileEnd,
      bestDaysStart,
      nextPeriod,
    };
  }, [lmpDate, cycleLength, submitted]);

  const results = result
    ? [
        {
          label: "Ovulation Date",
          value:
            result.ovulationDate.toLocaleDateString(),
          highlight: true,
        },
        {
          label: "Fertile Window Start",
          value:
            result.fertileStart.toLocaleDateString(),
        },
        {
          label: "Fertile Window End",
          value:
            result.fertileEnd.toLocaleDateString(),
        },
        {
          label: "Best Days to Conceive",
          value: `${result.bestDaysStart.toLocaleDateString()} - ${result.ovulationDate.toLocaleDateString()}`,
        },
        {
          label: "Next Period Date",
          value:
            result.nextPeriod.toLocaleDateString(),
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Ovulation Calculator
      </h2>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          First Day of Last Period
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
          Average Cycle Length (Days)
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
          Calculate
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
            Estimated Ovulation Date
          </h3>

          <p className="mt-2 text-3xl font-bold text-pink-600">
            {result.ovulationDate.toLocaleDateString()}
          </p>

          <p className="mt-3 text-slate-600">
            Your most fertile period is between{" "}
            <strong>
              {result.fertileStart.toLocaleDateString()}
            </strong>{" "}
            and{" "}
            <strong>
              {result.fertileEnd.toLocaleDateString()}
            </strong>
            .
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Ovulation Results"
          results={results}
        />
      )}
    </div>
  );
}