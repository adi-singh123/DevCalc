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
      heightCm < 120 ||
      heightCm > 250
    ) {
      return null;
    }

    const heightInches =
      heightCm / 2.54;

    const inchesFromFiveFeet = heightInches - 60;

    const devine = gender === "male"
      ? 50 + 2.3 * inchesFromFiveFeet
      : 45.5 + 2.3 * inchesFromFiveFeet;
    const hamwi = gender === "male"
      ? 48 + 2.7 * inchesFromFiveFeet
      : 45.5 + 2.2 * inchesFromFiveFeet;
    const robinson = gender === "male"
      ? 52 + 1.9 * inchesFromFiveFeet
      : 49 + 1.7 * inchesFromFiveFeet;
    const miller = gender === "male"
      ? 56.2 + 1.41 * inchesFromFiveFeet
      : 53.1 + 1.36 * inchesFromFiveFeet;
    const average = (devine + hamwi + robinson + miller) / 4;

    return {
      heightCm,
      devine,
      hamwi,
      robinson,
      miller,
      average,
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
            "Average Reference",
          value: `${result.average.toFixed(
            1,
          )} kg`,
          highlight: true,
        },
        {
          label: "Devine Formula",
          value: `${result.devine.toFixed(1)} kg`,
        },
        {
          label: "Hamwi Formula",
          value: `${result.hamwi.toFixed(1)} kg`,
        },
        {
          label: "Robinson Formula",
          value: `${result.robinson.toFixed(1)} kg`,
        },
        {
          label: "Miller Formula",
          value: `${result.miller.toFixed(1)} kg`,
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
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
  

      <p className="mt-2 text-slate-600">
        Compare height-based reference estimates from the
        Devine, Hamwi, Robinson, and Miller formulas.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Height (cm)
          </label>

          <input
            type="number"
            min="120"
            max="250"
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
            {result.average.toFixed(
              1,
            )}{" "}
            kg
          </p>

          <p className="mt-3 text-slate-600">
            Average of four formula estimates
          </p>

          <p className="mt-3 text-sm text-slate-500">
            These height-based references are not a diagnosis
            or a personalized healthy-weight prescription.
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
