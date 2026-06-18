"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function CalorieCalculator() {
  const [gender, setGender] = useState<"male" | "female">(
    "male",
  );

  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] =
    useState("1.2");

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
    const activityMultiplier =
      Number(activityLevel);

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

    const maintenanceCalories =
      bmr * activityMultiplier;

    const weightLossCalories =
      maintenanceCalories - 500;

    const weightGainCalories =
      maintenanceCalories + 500;

    return {
      bmr: Math.round(bmr),
      maintenanceCalories:
        Math.round(maintenanceCalories),
      weightLossCalories:
        Math.round(weightLossCalories),
      weightGainCalories:
        Math.round(weightGainCalories),
    };
  }, [
    gender,
    age,
    weight,
    height,
    activityLevel,
    submitted,
  ]);

  const handleReset = () => {
    setGender("male");
    setAge("");
    setWeight("");
    setHeight("");
    setActivityLevel("1.2");
    setSubmitted(false);
  };

  const results = result
    ? [
        {
          label: "Maintenance Calories",
          value: `${result.maintenanceCalories} kcal/day`,
          highlight: true,
        },
        {
          label: "BMR",
          value: `${result.bmr} kcal`,
        },
        {
          label: "Weight Loss",
          value: `${result.weightLossCalories} kcal`,
        },
        {
          label: "Weight Gain",
          value: `${result.weightGainCalories} kcal`,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
   

      <p className="mt-2 text-slate-600">
        Estimate your daily calorie needs for
        maintenance, weight loss, or weight gain.
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

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Activity Level
        </label>

        <select
          value={activityLevel}
          onChange={(e) =>
            setActivityLevel(e.target.value)
          }
          className="w-full rounded-xl border p-3"
        >
          <option value="1.2">
            Sedentary (Little or No Exercise)
          </option>

          <option value="1.375">
            Light Exercise (1-3 Days/Week)
          </option>

          <option value="1.55">
            Moderate Exercise (3-5 Days/Week)
          </option>

          <option value="1.725">
            Very Active (6-7 Days/Week)
          </option>

          <option value="1.9">
            Extra Active (Athlete/Physical Job)
          </option>
        </select>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate Calories
        </button>

        <button
          onClick={handleReset}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {results.length > 0 && (
        <ResultsSection
          title="Calorie Results"
          results={results}
        />
      )}
    </div>
  );
}