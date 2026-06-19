"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function PregnancyWeightGainCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [week, setWeek] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (
      !weight ||
      !height ||
      !week ||
      !submitted
    ) {
      return null;
    }

    const w = Number(weight);
    const h = Number(height) / 100;
    const pregnancyWeek = Number(week);

    if (
      w <= 0 ||
      h <= 0 ||
      pregnancyWeek <= 0
    ) {
      return null;
    }

    const bmi = w / (h * h);

    let category = "";
    let minGain = 0;
    let maxGain = 0;

    if (bmi < 18.5) {
      category = "Underweight";
      minGain = 12.5;
      maxGain = 18;
    } else if (bmi < 25) {
      category = "Normal Weight";
      minGain = 11.5;
      maxGain = 16;
    } else if (bmi < 30) {
      category = "Overweight";
      minGain = 7;
      maxGain = 11.5;
    } else {
      category = "Obese";
      minGain = 5;
      maxGain = 9;
    }

    const averageGain =
      (minGain + maxGain) / 2;

    const progress =
      Math.min(pregnancyWeek, 40) / 40;

    const expectedGain =
      averageGain * progress;

    let trimester =
      "First Trimester";

    if (pregnancyWeek >= 13) {
      trimester =
        "Second Trimester";
    }

    if (pregnancyWeek >= 28) {
      trimester =
        "Third Trimester";
    }

    return {
      bmi,
      category,
      trimester,
      minGain,
      maxGain,
      expectedGain,
    };
  }, [
    weight,
    height,
    week,
    submitted,
  ]);

  const results = result
    ? [
        {
          label: "Pre-Pregnancy BMI",
          value:
            result.bmi.toFixed(1),
          highlight: true,
        },
        {
          label: "BMI Category",
          value:
            result.category,
        },
        {
          label: "Trimester",
          value:
            result.trimester,
        },
        {
          label: "Recommended Gain",
          value: `${result.minGain} - ${result.maxGain} kg`,
        },
        {
          label:
            "Expected Gain So Far",
          value: `${result.expectedGain.toFixed(
            1,
          )} kg`,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
   

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Pre-Pregnancy Weight
          (kg)
        </label>

        <input
          type="number"
          placeholder="e.g. 60"
          value={weight}
          onChange={(e) =>
            setWeight(
              e.target.value,
            )
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
          placeholder="e.g. 165"
          value={height}
          onChange={(e) =>
            setHeight(
              e.target.value,
            )
          }
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Current Pregnancy Week
        </label>

        <input
          type="number"
          min="1"
          max="40"
          placeholder="e.g. 20"
          value={week}
          onChange={(e) =>
            setWeek(
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
          Calculate
        </button>

        <button
          onClick={() => {
            setWeight("");
            setHeight("");
            setWeek("");
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
            Recommended Weight Gain
          </h3>

          <p className="mt-2 text-3xl font-bold text-pink-600">
            {result.minGain} -{" "}
            {result.maxGain} kg
          </p>

          <p className="mt-3 text-slate-600">
            Based on your BMI of{" "}
            <strong>
              {result.bmi.toFixed(
                1,
              )}
            </strong>{" "}
            (
            {
              result.category
            }
            ).
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Pregnancy Weight Results"
          results={results}
          calculatorName="Pregnancy Weight Results"

        />
      )}
    </div>
  );
}