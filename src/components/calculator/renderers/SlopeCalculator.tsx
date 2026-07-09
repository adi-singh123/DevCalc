"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function SlopeCalculator() {
  const [x1, setX1] =
    useState("");

  const [y1, setY1] =
    useState("");

  const [x2, setX2] =
    useState("");

  const [y2, setY2] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (!submitted) {
      return null;
    }

    const pointX1 = Number(x1);
    const pointY1 = Number(y1);
    const pointX2 = Number(x2);
    const pointY2 = Number(y2);

    if (
      [pointX1, pointY1, pointX2, pointY2].some(
        isNaN,
      )
    ) {
      return null;
    }

    const rise =
      pointY2 - pointY1;

    const run =
      pointX2 - pointX1;

    if (run === 0) {
      return {
        rise,
        run,
        slope:
          "Undefined",
        lineType:
          "Vertical Line",
      };
    }

    const slope =
      rise / run;

    let lineType =
      "Horizontal Line";

    if (slope > 0) {
      lineType =
        "Positive Slope";
    } else if (slope < 0) {
      lineType =
        "Negative Slope";
    } else {
      lineType =
        "Horizontal Line";
    }

    return {
      rise,
      run,
      slope,
      lineType,
    };
  }, [
    x1,
    y1,
    x2,
    y2,
    submitted,
  ]);

  const results = result
    ? [
        {
          label: "Slope",
          value:
            result.slope,
          highlight: true,
        },

        {
          label: "Rise (ΔY)",
          value:
            result.rise,
        },

        {
          label: "Run (ΔX)",
          value:
            result.run,
        },

        {
          label:
            "Line Type",
          value:
            result.lineType,
        },
      ]
    : [];

  const resetCalculator = () => {
    setX1("");
    setY1("");
    setX2("");
    setY2("");
    setSubmitted(false);
  };

  return (
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Slope Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Calculate the slope
        between two points
        instantly. Find rise,
        run, line direction,
        and understand the
        steepness of a line
        using the slope
        formula.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="mb-4 font-semibold">
            Point A
          </h3>

          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              value={x1}
              onChange={(e) =>
                setX1(
                  e.target.value,
                )
              }
              placeholder="X₁"
              className="w-full rounded-xl border p-3"
            />

            <input
              type="number"
              value={y1}
              onChange={(e) =>
                setY1(
                  e.target.value,
                )
              }
              placeholder="Y₁"
              className="w-full rounded-xl border p-3"
            />
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold">
            Point B
          </h3>

          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              value={x2}
              onChange={(e) =>
                setX2(
                  e.target.value,
                )
              }
              placeholder="X₂"
              className="w-full rounded-xl border p-3"
            />

            <input
              type="number"
              value={y2}
              onChange={(e) =>
                setY2(
                  e.target.value,
                )
              }
              placeholder="Y₂"
              className="w-full rounded-xl border p-3"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() =>
            setSubmitted(true)
          }
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate Slope
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
            Slope Result
          </h3>

          <p className="mt-3 text-4xl font-bold text-green-700">
            {result.slope}
          </p>

          <p className="mt-2 text-slate-600">
            {result.lineType}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Between ({x1},{" "}
            {y1}) and ({x2},{" "}
            {y2})
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Slope Results"
          results={results}
        />
      )}
    </div>
  );
}