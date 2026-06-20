"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function CementCalculator() {
  const [length, setLength] =
    useState("");

  const [width, setWidth] =
    useState("");

  const [thickness, setThickness] =
    useState("");

  const [grade, setGrade] =
    useState("m20");

  const [cementCost, setCementCost] =
    useState("450");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !submitted ||
      !length ||
      !width ||
      !thickness
    ) {
      return null;
    }

    const l = Number(length);
    const w = Number(width);
    const t = Number(thickness);

    if (
      Number.isNaN(l) ||
      Number.isNaN(w) ||
      Number.isNaN(t) ||
      l <= 0 ||
      w <= 0 ||
      t <= 0
    ) {
      return null;
    }

    const volume =
      l * w * (t / 12);

    const dryVolume =
      volume * 1.54;

    const cementFactors = {
      m10: 4.4,
      m15: 5.5,
      m20: 6.4,
      m25: 7.2,
    };

    const factor =
      cementFactors[
        grade as keyof typeof cementFactors
      ];

    const bagsRequired =
      Math.ceil(
        (dryVolume * factor) /
          35,
      );

    const cementWeight =
      bagsRequired * 50;

    const totalCost =
      bagsRequired *
      Number(cementCost);

    return {
      volume,
      dryVolume,
      bagsRequired,
      cementWeight,
      totalCost,
    };
  }, [
    length,
    width,
    thickness,
    grade,
    cementCost,
    submitted,
  ]);

  const results = result
    ? [
        {
          label:
            "Cement Bags Required",
          value:
            result.bagsRequired,
          highlight: true,
        },

        {
          label:
            "Concrete Volume",
          value: `${result.volume.toFixed(
            2,
          )} cu ft`,
        },

        {
          label:
            "Dry Volume",
          value: `${result.dryVolume.toFixed(
            2,
          )} cu ft`,
        },

        {
          label:
            "Cement Weight",
          value: `${result.cementWeight.toLocaleString(
            "en-IN",
          )} kg`,
        },

        {
          label:
            "Estimated Cost",
          value: `₹${result.totalCost.toLocaleString(
            "en-IN",
          )}`,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Length (ft)
          </label>

          <input
            type="number"
            value={length}
            onChange={(e) =>
              setLength(
                e.target.value,
              )
            }
            placeholder="20"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Width (ft)
          </label>

          <input
            type="number"
            value={width}
            onChange={(e) =>
              setWidth(
                e.target.value,
              )
            }
            placeholder="15"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Thickness (inch)
          </label>

          <input
            type="number"
            value={thickness}
            onChange={(e) =>
              setThickness(
                e.target.value,
              )
            }
            placeholder="6"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Concrete Grade
          </label>

          <select
            value={grade}
            onChange={(e) =>
              setGrade(
                e.target.value,
              )
            }
            className="w-full rounded-xl border p-3"
          >
            <option value="m10">
              M10
            </option>

            <option value="m15">
              M15
            </option>

            <option value="m20">
              M20
            </option>

            <option value="m25">
              M25
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Cement Cost per Bag (₹)
          </label>

          <input
            type="number"
            value={cementCost}
            onChange={(e) =>
              setCementCost(
                e.target.value,
              )
            }
            placeholder="450"
            className="w-full rounded-xl border p-3"
          />
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() =>
            setSubmitted(true)
          }
          className="rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90"
        >
          Calculate Cement
        </button>

        <button
          onClick={() => {
            setLength("");
            setWidth("");
            setThickness("");
            setGrade("m20");
            setCementCost("450");
            setSubmitted(false);
          }}
          className="rounded-xl border px-6 py-3"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-xl font-semibold">
            Cement Required
          </h3>

          <p className="mt-3 text-4xl font-bold text-blue-700">
            {
              result.bagsRequired
            }{" "}
            Bags
          </p>

          <p className="mt-2 text-slate-600">
            Total Weight:{" "}
            {
              result.cementWeight
            }{" "}
            kg
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Cement Calculation Results"
          results={results}
          calculatorName="Cement Calculator"
        />
      )}
    </div>
  );
}