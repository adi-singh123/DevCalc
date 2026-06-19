"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

type Gender =
  | "male"
  | "female";

export default function IdealBodyWeightCalculator() {
  const [height, setHeight] =
    useState("");

  const [gender, setGender] =
    useState<Gender>("male");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !submitted ||
      !height
    ) {
      return null;
    }

    const heightCm =
      Number(height);

    if (
      isNaN(heightCm) ||
      heightCm <= 0
    ) {
      return null;
    }

    const heightInches =
      heightCm / 2.54;

    const inchesOverFiveFeet =
      Math.max(
        0,
        heightInches - 60,
      );

    // Devine Formula
    const idealWeight =
      gender === "male"
        ? 50 +
          2.3 *
            inchesOverFiveFeet
        : 45.5 +
          2.3 *
            inchesOverFiveFeet;

    const healthyMin =
      idealWeight * 0.9;

    const healthyMax =
      idealWeight * 1.1;

    return {
      heightCm,
      idealWeight,
      healthyMin,
      healthyMax,
    };
  }, [
    height,
    gender,
    submitted,
  ]);

  const results = result
    ? [
        {
          label:
            "Ideal Body Weight",
          value: `${result.idealWeight.toFixed(
            1,
          )} kg`,
          highlight: true,
        },

        {
          label:
            "Healthy Weight Range",
          value: `${result.healthyMin.toFixed(
            1,
          )} kg - ${result.healthyMax.toFixed(
            1,
          )} kg`,
          highlight: false,
        },

        {
          label: "Height",
          value: `${result.heightCm} cm`,
          highlight: false,
        },

        {
          label: "Gender",
          value:
            gender === "male"
              ? "Male"
              : "Female",
          highlight: false,
        },
      ]
    : [];

  const resetCalculator = () => {
    setHeight("");
    setGender("male");
    setSubmitted(false);
  };

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
  

      <p className="mt-2 text-slate-600">
        Calculate your ideal
        body weight based on
        height and gender using
        the Devine Formula.
        Estimate a healthy
        target weight range for
        fitness, nutrition, and
        weight management.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Height (cm)
          </label>

          <input
            type="number"
            min="1"
            value={height}
            onChange={(e) =>
              setHeight(
                e.target.value,
              )
            }
            placeholder="170"
            className="w-full rounded-xl border p-3"
          />
        </div>

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
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Ideal Body Weight
          </h3>

          <p className="mt-3 text-4xl font-bold text-green-700">
            {result.idealWeight.toFixed(
              1,
            )}{" "}
            kg
          </p>

          <p className="mt-3 text-slate-600">
            Recommended Healthy
            Weight Range
          </p>

          <p className="mt-1 text-lg font-semibold">
            {result.healthyMin.toFixed(
              1,
            )}{" "}
            kg -{" "}
            {result.healthyMax.toFixed(
              1,
            )}{" "}
            kg
          </p>

          <p className="mt-3 text-sm text-slate-500">
            Based on the Devine
            Ideal Body Weight
            Formula.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Ideal Body Weight Results"
          results={results}
           calculatorName="Ideal Body Weight Results"
        />
      )}
    </div>
  );
}