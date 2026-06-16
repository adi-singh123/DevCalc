"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

type Mode =
  | "wake-up"
  | "bedtime";

export default function SleepCycleCalculator() {
  const [mode, setMode] =
    useState<Mode>(
      "wake-up",
    );

  const [time, setTime] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !submitted ||
      !time
    ) {
      return null;
    }

    const [
      hours,
      minutes,
    ] = time
      .split(":")
      .map(Number);

    const baseTime =
      new Date();

    baseTime.setHours(
      hours,
      minutes,
      0,
      0,
    );

    const sleepOnset =
      15; // minutes

    const recommendations: string[] =
      [];

    if (
      mode === "wake-up"
    ) {
      for (
        let cycles = 6;
        cycles >= 4;
        cycles--
      ) {
        const bedtime =
          new Date(
            baseTime.getTime() -
              (cycles *
                90 +
                sleepOnset) *
                60000,
          );

        recommendations.push(
          bedtime.toLocaleTimeString(
            [],
            {
              hour: "2-digit",
              minute:
                "2-digit",
            },
          ),
        );
      }
    } else {
      for (
        let cycles = 4;
        cycles <= 6;
        cycles++
      ) {
        const wakeTime =
          new Date(
            baseTime.getTime() +
              (cycles *
                90 +
                sleepOnset) *
                60000,
          );

        recommendations.push(
          wakeTime.toLocaleTimeString(
            [],
            {
              hour: "2-digit",
              minute:
                "2-digit",
            },
          ),
        );
      }
    }

    return {
      recommendations,
    };
  }, [
    mode,
    time,
    submitted,
  ]);

  const results = result
    ? result.recommendations.map(
        (
          recommendation,
          index,
        ) => ({
          label:
            mode ===
            "wake-up"
              ? `Recommended Bedtime ${
                  index + 1
                }`
              : `Recommended Wake-Up Time ${
                  index + 1
                }`,
          value:
            recommendation,
          highlight:
            index === 0,
        }),
      )
    : [];

  const resetCalculator = () => {
    setMode("wake-up");
    setTime("");
    setSubmitted(false);
  };

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Sleep Cycle
        Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Find the best time to
        sleep or wake up based
        on natural 90-minute
        sleep cycles. Improve
        sleep quality and wake
        up feeling refreshed.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Calculation Type
          </label>

          <select
            value={mode}
            onChange={(e) =>
              setMode(
                e.target
                  .value as Mode,
              )
            }
            className="w-full rounded-xl border p-3"
          >
            <option value="wake-up">
              I Want To Wake Up At
            </option>

            <option value="bedtime">
              I Want To Sleep At
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Time
          </label>

          <input
            type="time"
            value={time}
            onChange={(e) =>
              setTime(
                e.target.value,
              )
            }
            className="w-full rounded-xl border p-3"
          />
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() =>
            setSubmitted(true)
          }
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate Sleep
          Cycles
        </button>

        <button
          onClick={
            resetCalculator
          }
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-indigo-50 p-6">
          <h3 className="text-center text-xl font-semibold">
            Sleep Schedule
            Recommendations
          </h3>

          <div className="mt-6 grid gap-3">
            {result.recommendations.map(
              (
                recommendation,
                index,
              ) => (
                <div
                  key={
                    recommendation
                  }
                  className="rounded-xl bg-white p-4 text-center shadow-sm"
                >
                  <p className="text-sm text-slate-500">
                    {mode ===
                    "wake-up"
                      ? `Bedtime Option ${
                          index +
                          1
                        }`
                      : `Wake-Up Option ${
                          index +
                          1
                        }`}
                  </p>

                  <p className="text-2xl font-bold text-indigo-700">
                    {
                      recommendation
                    }
                  </p>
                </div>
              ),
            )}
          </div>

          <p className="mt-4 text-center text-sm text-slate-500">
            Recommendations
            include an average
            15-minute time to
            fall asleep and
            complete 90-minute
            sleep cycles.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Sleep Cycle Results"
          results={results}
        />
      )}
    </div>
  );
}