"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "very-active";

export default function WaterIntakeCalculator() {
  const [weight, setWeight] =
    useState("");

  const [activityLevel, setActivityLevel] =
    useState<ActivityLevel>(
      "moderate",
    );

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !submitted ||
      !weight
    ) {
      return null;
    }

    const weightKg =
      Number(weight);

    if (
      isNaN(weightKg) ||
      weightKg <= 0
    ) {
      return null;
    }

    let multiplier =
      0.033;

    switch (
      activityLevel
    ) {
      case "light":
        multiplier =
          0.035;
        break;

      case "moderate":
        multiplier =
          0.038;
        break;

      case "active":
        multiplier =
          0.042;
        break;

      case "very-active":
        multiplier =
          0.045;
        break;

      default:
        multiplier =
          0.033;
    }

    const liters =
      weightKg *
      multiplier;

    const milliliters =
      liters * 1000;

    const glasses =
      liters * 4;

    return {
      liters,
      milliliters,
      glasses,
      weightKg,
    };
  }, [
    weight,
    activityLevel,
    submitted,
  ]);

  const results = result
    ? [
        {
          label:
            "Daily Water Intake",
          value: `${result.liters.toFixed(
            2,
          )} L`,
          highlight: true,
        },

        {
          label:
            "Water Intake (mL)",
          value: `${Math.round(
            result.milliliters,
          )} mL`,
          highlight: false,
        },

        {
          label:
            "Approximate Glasses",
          value: `${Math.round(
            result.glasses,
          )} Glasses`,
          highlight: false,
        },

        {
          label: "Weight",
          value: `${result.weightKg} kg`,
          highlight: false,
        },
      ]
    : [];

  const resetCalculator = () => {
    setWeight("");
    setActivityLevel(
      "moderate",
    );
    setSubmitted(false);
  };

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Water Intake Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Calculate your
        recommended daily water
        intake based on body
        weight and activity
        level. Stay hydrated
        and support overall
        health with personalized
        hydration goals.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Body Weight (kg)
          </label>

          <input
            type="number"
            min="1"
            value={weight}
            onChange={(e) =>
              setWeight(
                e.target.value,
              )
            }
            placeholder="70"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Activity Level
          </label>

          <select
            value={
              activityLevel
            }
            onChange={(e) =>
              setActivityLevel(
                e.target
                  .value as ActivityLevel,
              )
            }
            className="w-full rounded-xl border p-3"
          >
            <option value="sedentary">
              Sedentary
            </option>

            <option value="light">
              Lightly Active
            </option>

            <option value="moderate">
              Moderately Active
            </option>

            <option value="active">
              Active
            </option>

            <option value="very-active">
              Very Active
            </option>
          </select>
        </div>
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
          onClick={
            resetCalculator
          }
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Daily Water Intake
          </h3>

          <p className="mt-3 text-4xl font-bold text-blue-700">
            {result.liters.toFixed(
              2,
            )}{" "}
            L
          </p>

          <p className="mt-2 text-slate-600">
            Approximately{" "}
            {Math.round(
              result.glasses,
            )}{" "}
            glasses of water per
            day
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Based on your weight
            and activity level.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Water Intake Results"
          results={results}
           calculatorName="Water Intake Results"
        />
      )}
    </div>
  );
}