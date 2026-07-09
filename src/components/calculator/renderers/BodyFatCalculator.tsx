"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function BodyFatCalculator() {
  const [gender, setGender] = useState<"male" | "female">(
    "male",
  );

  const [height, setHeight] = useState("");
  const [neck, setNeck] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (
      !submitted ||
      !height ||
      !neck ||
      !waist
    ) {
      return null;
    }

    const heightNum = Number(height);
    const neckNum = Number(neck);
    const waistNum = Number(waist);

    if (
      heightNum <= 0 ||
      neckNum <= 0 ||
      waistNum <= 0
    ) {
      return null;
    }

    let bodyFat = 0;

    try {
      if (gender === "male") {
        if (waistNum <= neckNum) {
          return null;
        }

        bodyFat =
          86.01 *
            Math.log10(waistNum - neckNum) -
          70.041 * Math.log10(heightNum) +
          36.76;
      } else {
        const hipNum = Number(hip);

        if (
          !hip ||
          hipNum <= 0 ||
          waistNum + hipNum <= neckNum
        ) {
          return null;
        }

        bodyFat =
          163.205 *
            Math.log10(
              waistNum + hipNum - neckNum,
            ) -
          97.684 * Math.log10(heightNum) -
          78.387;
      }
    } catch {
      return null;
    }

    bodyFat = Number(bodyFat.toFixed(1));

    let category = "";

    if (gender === "male") {
      if (bodyFat < 6) {
        category = "Essential Fat";
      } else if (bodyFat < 14) {
        category = "Athlete";
      } else if (bodyFat < 18) {
        category = "Fitness";
      } else if (bodyFat < 25) {
        category = "Average";
      } else {
        category = "Obese";
      }
    } else {
      if (bodyFat < 14) {
        category = "Essential Fat";
      } else if (bodyFat < 21) {
        category = "Athlete";
      } else if (bodyFat < 25) {
        category = "Fitness";
      } else if (bodyFat < 32) {
        category = "Average";
      } else {
        category = "Obese";
      }
    }

    return {
      bodyFat,
      category,
    };
  }, [
    gender,
    height,
    neck,
    waist,
    hip,
    submitted,
  ]);

  const handleReset = () => {
    setGender("male");
    setHeight("");
    setNeck("");
    setWaist("");
    setHip("");
    setSubmitted(false);
  };

  const results = result
    ? [
        {
          label: "Body Fat Percentage",
          value: `${result.bodyFat}%`,
          highlight: true,
        },
        {
          label: "Body Fat Category",
          value: result.category,
        },
      ]
    : [];

  return (
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
   

      <p className="mt-2 text-slate-600">
        Estimate your body fat percentage using
        the U.S. Navy Method.
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
          Height (cm)
        </label>

        <input
          type="number"
          min="1"
          value={height}
          onChange={(e) =>
            setHeight(e.target.value)
          }
          placeholder="Enter height"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Neck Circumference (cm)
        </label>

        <input
          type="number"
          min="1"
          value={neck}
          onChange={(e) =>
            setNeck(e.target.value)
          }
          placeholder="Enter neck measurement"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Waist Circumference (cm)
        </label>

        <input
          type="number"
          min="1"
          value={waist}
          onChange={(e) =>
            setWaist(e.target.value)
          }
          placeholder="Enter waist measurement"
          className="w-full rounded-xl border p-3"
        />
      </div>

      {gender === "female" && (
        <div className="mt-4">
          <label className="mb-2 block font-medium">
            Hip Circumference (cm)
          </label>

          <input
            type="number"
            min="1"
            value={hip}
            onChange={(e) =>
              setHip(e.target.value)
            }
            placeholder="Enter hip measurement"
            className="w-full rounded-xl border p-3"
          />
        </div>
      )}

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate Body Fat
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
          title="Body Fat Results"
          results={results}
            calculatorName="Body Fat Results"
        />
      )}
    </div>
  );
}