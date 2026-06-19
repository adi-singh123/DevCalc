"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function BMRCalculator() {
  const [gender, setGender] = useState<"male" | "female">(
    "male",
  );
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (
      !submitted ||
      !age ||
      !weight ||
      !height
    ) {
      return null;
    }

    const ageNum = Number(age);
    const weightNum = Number(weight);
    const heightNum = Number(height);

    if (
      ageNum <= 0 ||
      weightNum <= 0 ||
      heightNum <= 0
    ) {
      return null;
    }

    let bmr = 0;

    if (gender === "male") {
      bmr =
        10 * weightNum +
        6.25 * heightNum -
        5 * ageNum +
        5;
    } else {
      bmr =
        10 * weightNum +
        6.25 * heightNum -
        5 * ageNum -
        161;
    }

    return {
      bmr: Math.round(bmr),
      sedentary: Math.round(bmr * 1.2),
      lightExercise: Math.round(bmr * 1.375),
      moderateExercise: Math.round(bmr * 1.55),
      veryActive: Math.round(bmr * 1.725),
      extraActive: Math.round(bmr * 1.9),
    };
  }, [gender, age, weight, height, submitted]);

  const handleReset = () => {
    setGender("male");
    setAge("");
    setWeight("");
    setHeight("");
    setSubmitted(false);
  };

  const results = result
    ? [
        {
          label: "Basal Metabolic Rate (BMR)",
          value: `${result.bmr} Calories/day`,
          highlight: true,
        },
        {
          label: "Sedentary",
          value: `${result.sedentary} Calories/day`,
        },
        {
          label: "Light Exercise",
          value: `${result.lightExercise} Calories/day`,
        },
        {
          label: "Moderate Exercise",
          value: `${result.moderateExercise} Calories/day`,
        },
        {
          label: "Very Active",
          value: `${result.veryActive} Calories/day`,
        },
        {
          label: "Extra Active",
          value: `${result.extraActive} Calories/day`,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
     

      <p className="mt-2 text-slate-600">
        Calculate your Basal Metabolic Rate (BMR)
        and estimate your daily calorie needs.
      </p>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Gender
        </label>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setGender("male")}
            className={`rounded-xl border px-4 py-3 transition ${
              gender === "male"
                ? "bg-black text-white"
                : "bg-white"
            }`}
          >
            Male
          </button>

          <button
            type="button"
            onClick={() => setGender("female")}
            className={`rounded-xl border px-4 py-3 transition ${
              gender === "female"
                ? "bg-black text-white"
                : "bg-white"
            }`}
          >
            Female
          </button>
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Age (Years)
        </label>

        <input
          type="number"
          min="1"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Weight (kg)
        </label>

        <input
          type="number"
          min="1"
          placeholder="Enter your weight"
          value={weight}
          onChange={(e) =>
            setWeight(e.target.value)
          }
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Height (cm)
        </label>

        <input
          type="number"
          min="1"
          placeholder="Enter your height"
          value={height}
          onChange={(e) =>
            setHeight(e.target.value)
          }
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate BMR
        </button>

        <button
          onClick={handleReset}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6">
          <h3 className="text-center text-2xl font-bold">
            {result.bmr} Calories/Day
          </h3>

          <p className="mt-2 text-center text-slate-600">
            Your estimated Basal Metabolic Rate
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Daily Calorie Needs"
          results={results}
          calculatorName="Daily Calorie Needs"
        />
      )}
    </div>
  );
}