"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "athlete";

export default function ProteinIntakeCalculator() {
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

    let proteinFactor =
      1.4;

    switch (
      activityLevel
    ) {
      case "sedentary":
        proteinFactor =
          0.8;
        break;

      case "light":
        proteinFactor =
          1.2;
        break;

      case "moderate":
        proteinFactor =
          1.6;
        break;

      case "active":
        proteinFactor =
          2.0;
        break;

      case "athlete":
        proteinFactor =
          2.2;
        break;
    }

    const protein =
      weightKg *
      proteinFactor;

    return {
      weightKg,
      protein,
      proteinFactor,
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
            "Daily Protein Requirement",
          value: `${result.protein.toFixed(
            0,
          )} g`,
          highlight: true,
        },

        {
          label:
            "Body Weight",
          value: `${result.weightKg} kg`,
          highlight: false,
        },

        {
          label:
            "Protein Factor",
          value: `${result.proteinFactor} g/kg`,
          highlight: false,
        },

        {
          label:
            "Activity Level",
          value:
            activityLevel ===
            "sedentary"
              ? "Sedentary"
              : activityLevel ===
                  "light"
                ? "Lightly Active"
                : activityLevel ===
                    "moderate"
                  ? "Moderately Active"
                  : activityLevel ===
                      "active"
                    ? "Active"
                    : "Athlete",
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
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Protein Intake
        Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Calculate your daily
        protein needs based on
        body weight and
        activity level. Find
        the ideal protein
        intake for muscle gain,
        weight loss, fitness,
        and overall health.
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

            <option value="athlete">
              Athlete
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
          Calculate Protein
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
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Recommended Daily
            Protein Intake
          </h3>

          <p className="mt-3 text-4xl font-bold text-green-700">
            {result.protein.toFixed(
              0,
            )}{" "}
            g
          </p>

          <p className="mt-3 text-slate-600">
            Based on your body
            weight and activity
            level.
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Protein Factor:{" "}
            {
              result.proteinFactor
            }
            g per kg of body
            weight
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Protein Intake Results"
          results={results}
        />
      )}
    </div>
  );
}