"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const bmi = useMemo(() => {
    if (!submitted || !weight || !height) {
      return null;
    }

    const weightKg = Number(weight);
    const heightCm = Number(height);

    if (
      Number.isNaN(weightKg) ||
      Number.isNaN(heightCm) ||
      weightKg <= 0 ||
      heightCm <= 0
    ) {
      return null;
    }

    const heightM = heightCm / 100;

    const bmiValue = weightKg / (heightM * heightM);

    let category = "";

    if (bmiValue < 18.5) {
      category = "Underweight";
    } else if (bmiValue < 25) {
      category = "Normal Weight";
    } else if (bmiValue < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    return {
      value: bmiValue,
      category,
    };
  }, [weight, height, submitted]);

  const results = bmi
    ? [
        {
          label: "Body Mass Index",
          value: bmi.value.toFixed(1),
          highlight: true,
        },
        {
          label: "Health Category",
          value: bmi.category,
        },
      ]
    : [];

  const bmiSummary = bmi
    ? `Your BMI is ${bmi.value.toFixed(1)}. You are in the ${
        bmi.category
      } range.`
    : "";

  const categoryStyles = {
    Underweight: "bg-blue-50 text-blue-700",
    "Normal Weight": "bg-green-50 text-green-700",
    Overweight: "bg-orange-50 text-orange-700",
    Obese: "bg-red-50 text-red-700",
  };

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">Calculate Your BMI</h2>

      <p className="mt-2 text-slate-600">
        Calculate your Body Mass Index using your height and weight.
      </p>

      <div className="mt-6">
        <label className="mb-2 block font-medium">Weight (kg)</label>

        <input
          type="number"
          min="1"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="70"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">Height (cm)</label>

        <input
          type="number"
          min="1"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="170"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate BMI
        </button>

        <button
          onClick={() => {
            setWeight("");
            setHeight("");
            setSubmitted(false);
          }}
         className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {bmi && (
        <div
          className={`mt-8 rounded-2xl border p-6 text-center ${
            bmi
              ? categoryStyles[bmi.category as keyof typeof categoryStyles]
              : ""
          }`}
        >
          <h3 className="text-xl font-semibold">{bmiSummary}</h3>

          <p className="mt-2 text-slate-600">
            BMI is a screening tool and should not be considered a medical
            diagnosis.
          </p>
        </div>
      )}
      {bmi && (
        <div className="mt-8 rounded-2xl border bg-white p-6">
          <h3 className="mb-4 text-xl font-semibold">BMI Classification</h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-3 text-left">BMI Range</th>
                  <th className="p-3 text-left">Category</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="p-3">Below 18.5</td>
                  <td className="p-3">Underweight</td>
                </tr>

                <tr className="border-b">
                  <td className="p-3">18.5 – 24.9</td>
                  <td className="p-3">Normal Weight</td>
                </tr>

                <tr className="border-b">
                  <td className="p-3">25.0 – 29.9</td>
                  <td className="p-3">Overweight</td>
                </tr>

                <tr>
                  <td className="p-3">30+</td>
                  <td className="p-3">Obese</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection title="BMI Results" results={results} />
      )}
    </div>
  );
}
