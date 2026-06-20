"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function BrickCalculator() {
  const [length, setLength] =
    useState("");

  const [height, setHeight] =
    useState("");

  const [thickness, setThickness] =
    useState("9");

  const [brickType, setBrickType] =
    useState("standard");

  const [wastage, setWastage] =
    useState("5");

  const [brickCost, setBrickCost] =
    useState("8");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !submitted ||
      !length ||
      !height
    ) {
      return null;
    }

    const wallLength =
      Number(length);

    const wallHeight =
      Number(height);

    const wallThickness =
      Number(thickness) / 12;

    const waste =
      Number(wastage);

    const costPerBrick =
      Number(brickCost);

    if (
      wallLength <= 0 ||
      wallHeight <= 0
    ) {
      return null;
    }

    const wallVolume =
      wallLength *
      wallHeight *
      wallThickness;

    let brickVolume = 0.069;

    switch (brickType) {
      case "standard":
        brickVolume = 0.069;
        break;

      case "flyash":
        brickVolume = 0.072;
        break;

      case "aac":
        brickVolume = 0.45;
        break;

      default:
        brickVolume = 0.069;
    }

    const rawBricks =
      wallVolume / brickVolume;

    const totalBricks =
      Math.ceil(
        rawBricks *
          (1 +
            waste / 100),
      );

    const mortarVolume =
      wallVolume * 0.25;

    const totalCost =
      totalBricks *
      costPerBrick;

    return {
      wallVolume,
      totalBricks,
      mortarVolume,
      totalCost,
    };
  }, [
    length,
    height,
    thickness,
    brickType,
    wastage,
    brickCost,
    submitted,
  ]);

  const results = result
    ? [
        {
          label:
            "Bricks Required",
          value:
            result.totalBricks.toLocaleString(
              "en-IN",
            ),
          highlight: true,
        },

        {
          label:
            "Wall Volume",
          value: `${result.wallVolume.toFixed(
            2,
          )} cu ft`,
        },

        {
          label:
            "Mortar Volume",
          value: `${result.mortarVolume.toFixed(
            2,
          )} cu ft`,
        },

        {
          label:
            "Estimated Brick Cost",
          value: `₹${Math.round(
            result.totalCost,
          ).toLocaleString(
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
            Wall Length (ft)
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
            Wall Height (ft)
          </label>

          <input
            type="number"
            value={height}
            onChange={(e) =>
              setHeight(
                e.target.value,
              )
            }
            placeholder="10"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Wall Thickness
          </label>

          <select
            value={thickness}
            onChange={(e) =>
              setThickness(
                e.target.value,
              )
            }
            className="w-full rounded-xl border p-3"
          >
            <option value="4.5">
              4.5 Inch Wall
            </option>

            <option value="9">
              9 Inch Wall
            </option>

            <option value="13.5">
              13.5 Inch Wall
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Brick Type
          </label>

          <select
            value={brickType}
            onChange={(e) =>
              setBrickType(
                e.target.value,
              )
            }
            className="w-full rounded-xl border p-3"
          >
            <option value="standard">
              Red Clay Brick
            </option>

            <option value="flyash">
              Fly Ash Brick
            </option>

            <option value="aac">
              AAC Block
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Wastage (%)
          </label>

          <input
            type="number"
            value={wastage}
            onChange={(e) =>
              setWastage(
                e.target.value,
              )
            }
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Brick Cost (₹)
          </label>

          <input
            type="number"
            value={brickCost}
            onChange={(e) =>
              setBrickCost(
                e.target.value,
              )
            }
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
          Calculate Bricks
        </button>

        <button
          onClick={() => {
            setLength("");
            setHeight("");
            setThickness("9");
            setBrickType(
              "standard",
            );
            setWastage("5");
            setBrickCost("8");
            setSubmitted(false);
          }}
          className="rounded-xl border px-6 py-3"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-orange-50 p-6 text-center dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-xl font-semibold">
            Estimated Bricks Required
          </h3>

          <p className="mt-3 text-4xl font-bold text-orange-600">
            {result.totalBricks.toLocaleString(
              "en-IN",
            )}
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Brick Calculation Results"
          results={results}
          calculatorName="Brick Calculator"
        />
      )}
    </div>
  );
}