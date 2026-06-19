"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

type Gender =
  | "male"
  | "female";

export default function WaistToHipRatioCalculator() {
  const [waist, setWaist] =
    useState("");

  const [hip, setHip] =
    useState("");

  const [gender, setGender] =
    useState<Gender>("male");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !submitted ||
      !waist ||
      !hip
    ) {
      return null;
    }

    const waistValue =
      Number(waist);

    const hipValue =
      Number(hip);

    if (
      isNaN(waistValue) ||
      isNaN(hipValue) ||
      waistValue <= 0 ||
      hipValue <= 0
    ) {
      return null;
    }

    const ratio =
      waistValue / hipValue;

    let category = "";
    let risk = "";

    if (gender === "male") {
      if (ratio < 0.9) {
        category =
          "Healthy";
        risk = "Low Risk";
      } else if (
        ratio < 1.0
      ) {
        category =
          "Moderate";
        risk =
          "Moderate Risk";
      } else {
        category =
          "High";
        risk = "High Risk";
      }
    } else {
      if (ratio < 0.8) {
        category =
          "Healthy";
        risk = "Low Risk";
      } else if (
        ratio < 0.85
      ) {
        category =
          "Moderate";
        risk =
          "Moderate Risk";
      } else {
        category =
          "High";
        risk = "High Risk";
      }
    }

    return {
      ratio,
      category,
      risk,
      waistValue,
      hipValue,
    };
  }, [
    waist,
    hip,
    gender,
    submitted,
  ]);

  const results = result
    ? [
        {
          label:
            "Waist-to-Hip Ratio",
          value:
            result.ratio.toFixed(
              2,
            ),
          highlight: true,
        },

        {
          label:
            "Health Category",
          value:
            result.category,
        },

        {
          label:
            "Risk Level",
          value: result.risk,
        },

        {
          label:
            "Waist Measurement",
          value: `${result.waistValue} cm`,
        },

        {
          label:
            "Hip Measurement",
          value: `${result.hipValue} cm`,
        },
      ]
    : [];

  const resetCalculator = () => {
    setWaist("");
    setHip("");
    setGender("male");
    setSubmitted(false);
  };

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Waist-to-Hip Ratio
        Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Calculate your
        Waist-to-Hip Ratio
        (WHR) to assess body
        fat distribution and
        potential health risks.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div>
          <label className="mb-2 block font-medium">
            Gender
          </label>

          <select
            value={gender}
            onChange={(e) =>
              setGender(
                e.target
                  .value as Gender,
              )
            }
            className="w-full rounded-xl border p-3"
          >
            <option value="male">
              Male
            </option>

            <option value="female">
              Female
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Waist (cm)
          </label>

          <input
            type="number"
            min="1"
            value={waist}
            onChange={(e) =>
              setWaist(
                e.target.value,
              )
            }
            placeholder="80"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Hip (cm)
          </label>

          <input
            type="number"
            min="1"
            value={hip}
            onChange={(e) =>
              setHip(
                e.target.value,
              )
            }
            placeholder="100"
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
            Waist-to-Hip Ratio
          </h3>

          <p className="mt-3 text-4xl font-bold text-blue-700">
            {result.ratio.toFixed(
              2,
            )}
          </p>

          <p className="mt-3 text-lg font-medium">
            {
              result.category
            }
          </p>

          <p className="mt-1 text-sm text-slate-500">
            {result.risk}
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Waist-to-Hip Ratio Results"
          results={results}
           calculatorName="Waist-to-Hip Ratio Results"
        />
      )}
    </div>
  );
}