"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

type Goal =
  | "weight-loss"
  | "maintenance"
  | "muscle-gain";

export default function MacroCalculator() {
  const [calories, setCalories] =
    useState("");

  const [goal, setGoal] =
    useState<Goal>(
      "maintenance",
    );

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !submitted ||
      !calories
    ) {
      return null;
    }

    const calorieTarget =
      Number(calories);

    if (
      isNaN(calorieTarget) ||
      calorieTarget <= 0
    ) {
      return null;
    }

    let proteinPercent =
      30;
    let carbPercent = 40;
    let fatPercent = 30;

    switch (goal) {
      case "weight-loss":
        proteinPercent =
          40;
        carbPercent = 30;
        fatPercent = 30;
        break;

      case "maintenance":
        proteinPercent =
          30;
        carbPercent = 40;
        fatPercent = 30;
        break;

      case "muscle-gain":
        proteinPercent =
          30;
        carbPercent = 50;
        fatPercent = 20;
        break;
    }

    const proteinCalories =
      calorieTarget *
      (proteinPercent / 100);

    const carbCalories =
      calorieTarget *
      (carbPercent / 100);

    const fatCalories =
      calorieTarget *
      (fatPercent / 100);

    const protein =
      proteinCalories / 4;

    const carbs =
      carbCalories / 4;

    const fats =
      fatCalories / 9;

    return {
      calorieTarget,
      protein,
      carbs,
      fats,
      proteinPercent,
      carbPercent,
      fatPercent,
    };
  }, [
    calories,
    goal,
    submitted,
  ]);

  const results = result
    ? [
        {
          label:
            "Daily Protein",
          value: `${result.protein.toFixed(
            0,
          )} g`,
          highlight: true,
        },

        {
          label:
            "Daily Carbohydrates",
          value: `${result.carbs.toFixed(
            0,
          )} g`,
          highlight: true,
        },

        {
          label: "Daily Fat",
          value: `${result.fats.toFixed(
            0,
          )} g`,
          highlight: true,
        },

        {
          label:
            "Protein Ratio",
          value: `${result.proteinPercent}%`,
        },

        {
          label:
            "Carbohydrate Ratio",
          value: `${result.carbPercent}%`,
        },

        {
          label:
            "Fat Ratio",
          value: `${result.fatPercent}%`,
        },
      ]
    : [];

  const resetCalculator =
    () => {
      setCalories("");
      setGoal(
        "maintenance",
      );
      setSubmitted(false);
    };

  return (
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
   

      <p className="mt-2 text-slate-600">
        Calculate your daily
        protein,
        carbohydrate, and fat
        requirements based on
        your calorie goal and
        fitness objective.
        Perfect for weight
        loss, maintenance, and
        muscle gain planning.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Daily Calories
          </label>

          <input
            type="number"
            min="1"
            value={calories}
            onChange={(e) =>
              setCalories(
                e.target.value,
              )
            }
            placeholder="2000"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Goal
          </label>

          <select
            value={goal}
            onChange={(e) =>
              setGoal(
                e.target
                  .value as Goal,
              )
            }
            className="w-full rounded-xl border p-3"
          >
            <option value="weight-loss">
              Weight Loss
            </option>

            <option value="maintenance">
              Maintenance
            </option>

            <option value="muscle-gain">
              Muscle Gain
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
          Calculate Macros
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
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6">
          <h3 className="text-center text-xl font-semibold">
            Daily Macro
            Breakdown
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-white p-4 text-center shadow-sm">
              <p className="text-sm text-slate-500">
                Protein
              </p>

              <p className="text-2xl font-bold text-blue-700">
                {result.protein.toFixed(
                  0,
                )}
                g
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 text-center shadow-sm">
              <p className="text-sm text-slate-500">
                Carbs
              </p>

              <p className="text-2xl font-bold text-green-700">
                {result.carbs.toFixed(
                  0,
                )}
                g
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 text-center shadow-sm">
              <p className="text-sm text-slate-500">
                Fat
              </p>

              <p className="text-2xl font-bold text-orange-700">
                {result.fats.toFixed(
                  0,
                )}
                g
              </p>
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-slate-500">
            Based on a daily
            calorie target of{" "}
            {
              result.calorieTarget
            }{" "}
            calories.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Macro Results"
          results={results}
           calculatorName="Macro Results"
        />
      )}
    </div>
  );
}