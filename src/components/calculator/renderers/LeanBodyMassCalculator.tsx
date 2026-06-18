"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

type Gender =
  | "male"
  | "female";

export default function LeanBodyMassCalculator() {
  const [gender, setGender] =
    useState<Gender>("male");

  const [height, setHeight] =
    useState("");

  const [weight, setWeight] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !submitted ||
      !height ||
      !weight
    ) {
      return null;
    }

    const heightCm =
      Number(height);

    const weightKg =
      Number(weight);

    if (
      isNaN(heightCm) ||
      isNaN(weightKg) ||
      heightCm <= 0 ||
      weightKg <= 0
    ) {
      return null;
    }

    let leanBodyMass = 0;

    // Boer Formula
    if (gender === "male") {
      leanBodyMass =
        0.407 * weightKg +
        0.267 * heightCm -
        19.2;
    } else {
      leanBodyMass =
        0.252 * weightKg +
        0.473 * heightCm -
        48.3;
    }

    const bodyFatMass =
      weightKg -
      leanBodyMass;

    const bodyFatPercent =
      (bodyFatMass /
        weightKg) *
      100;

    return {
      leanBodyMass,
      bodyFatMass,
      bodyFatPercent,
      weightKg,
      heightCm,
    };
  }, [
    gender,
    height,
    weight,
    submitted,
  ]);

  const results = result
    ? [
        {
          label:
            "Lean Body Mass",
          value: `${result.leanBodyMass.toFixed(
            1,
          )} kg`,
          highlight: true,
        },

        {
          label:
            "Fat-Free Body Weight",
          value: `${result.leanBodyMass.toFixed(
            1,
          )} kg`,
          highlight: false,
        },

        {
          label:
            "Estimated Fat Mass",
          value: `${result.bodyFatMass.toFixed(
            1,
          )} kg`,
          highlight: false,
        },

        {
          label:
            "Estimated Body Fat %",
          value: `${result.bodyFatPercent.toFixed(
            1,
          )}%`,
          highlight: false,
        },
      ]
    : [];

  const resetCalculator = () => {
    setGender("male");
    setHeight("");
    setWeight("");
    setSubmitted(false);
  };

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
   

      <p className="mt-2 text-slate-600">
        Calculate your lean
        body mass (LBM), fat
        free body weight, and
        estimated body fat mass
        using your height,
        weight, and gender.
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
            placeholder="175"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Weight (kg)
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
            placeholder="75"
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
        <div className="mt-8 rounded-2xl border bg-green-50 p-6">
          <h3 className="text-center text-xl font-semibold">
            Lean Body Mass
            Results
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-white p-4 text-center shadow-sm">
              <p className="text-sm text-slate-500">
                Lean Body Mass
              </p>

              <p className="text-2xl font-bold text-green-700">
                {result.leanBodyMass.toFixed(
                  1,
                )}
                kg
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 text-center shadow-sm">
              <p className="text-sm text-slate-500">
                Fat Mass
              </p>

              <p className="text-2xl font-bold text-red-700">
                {result.bodyFatMass.toFixed(
                  1,
                )}
                kg
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 text-center shadow-sm">
              <p className="text-sm text-slate-500">
                Body Fat %
              </p>

              <p className="text-2xl font-bold text-blue-700">
                {result.bodyFatPercent.toFixed(
                  1,
                )}
                %
              </p>
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-slate-500">
            Calculated using
            the Boer Formula for
            estimating lean body
            mass.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Lean Body Mass Results"
          results={results}
        />
      )}
    </div>
  );
}