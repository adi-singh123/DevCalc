"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function DistanceCalculator() {
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

    const deltaX =
      pointX2 - pointX1;

    const deltaY =
      pointY2 - pointY1;

    const distance =
      Math.sqrt(
        deltaX ** 2 +
          deltaY ** 2,
      );

    return {
      deltaX,
      deltaY,
      distance,
      squaredDistance:
        deltaX ** 2 +
        deltaY ** 2,
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
          label: "Distance",
          value:
            result.distance.toFixed(
              4,
            ),
          highlight: true,
        },

        {
          label: "ΔX",
          value:
            result.deltaX,
        },

        {
          label: "ΔY",
          value:
            result.deltaY,
        },

        {
          label:
            "Squared Distance",
          value:
            result.squaredDistance,
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
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
    

      <p className="mt-2 text-slate-600">
        Calculate the distance
        between two points using
        the coordinate distance
        formula. Perfect for
        geometry, algebra, and
        coordinate plane
        calculations.
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
          Calculate Distance
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
            Distance Between
            Points
          </h3>

          <p className="mt-3 text-4xl font-bold text-green-700">
            {result.distance.toFixed(
              4,
            )}
          </p>

          <p className="mt-2 text-slate-600">
            Between ({x1}, {y1})
            and ({x2}, {y2})
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Distance Results"
          results={results}
        />
      )}
    </div>
  );
}