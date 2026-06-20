"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

type ConcreteGrade =
  | "m10"
  | "m15"
  | "m20"
  | "m25";

export default function ConcreteCalculator() {
  const [length, setLength] =
    useState("");

  const [width, setWidth] =
    useState("");

  const [thickness, setThickness] =
    useState("");

  const [grade, setGrade] =
    useState<ConcreteGrade>(
      "m20",
    );

  const [cementCost, setCementCost] =
    useState("450");

  const [sandCost, setSandCost] =
    useState("60");

  const [
    aggregateCost,
    setAggregateCost,
  ] = useState("50");

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
    const t =
      Number(thickness) / 12;

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

    const wetVolume =
      l * w * t;

    const dryVolume =
      wetVolume * 1.54;

    const mixRatios = {
      m10: {
        cement: 1,
        sand: 3,
        aggregate: 6,
      },
      m15: {
        cement: 1,
        sand: 2,
        aggregate: 4,
      },
      m20: {
        cement: 1,
        sand: 1.5,
        aggregate: 3,
      },
      m25: {
        cement: 1,
        sand: 1,
        aggregate: 2,
      },
    };

    const ratio =
      mixRatios[grade];

    const totalParts =
      ratio.cement +
      ratio.sand +
      ratio.aggregate;

    const cementVolume =
      (dryVolume *
        ratio.cement) /
      totalParts;

    const sandVolume =
      (dryVolume *
        ratio.sand) /
      totalParts;

    const aggregateVolume =
      (dryVolume *
        ratio.aggregate) /
      totalParts;

    const cementBags =
      Math.ceil(
        cementVolume / 1.25,
      );

    const cementWeight =
      cementBags * 50;

    const cementTotalCost =
      cementBags *
      Number(cementCost);

    const sandTotalCost =
      sandVolume *
      Number(sandCost);

    const aggregateTotalCost =
      aggregateVolume *
      Number(aggregateCost);

    const totalCost =
      cementTotalCost +
      sandTotalCost +
      aggregateTotalCost;

    return {
      wetVolume,
      dryVolume,
      cementBags,
      cementWeight,
      sandVolume,
      aggregateVolume,
      cementTotalCost,
      sandTotalCost,
      aggregateTotalCost,
      totalCost,
    };
  }, [
    length,
    width,
    thickness,
    grade,
    cementCost,
    sandCost,
    aggregateCost,
    submitted,
  ]);

  const results = result
    ? [
        {
          label:
            "Cement Bags Required",
          value:
            result.cementBags,
          highlight: true,
        },
        {
          label:
            "Concrete Volume",
          value: `${result.wetVolume.toFixed(
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
            "Sand Required",
          value: `${result.sandVolume.toFixed(
            2,
          )} cu ft`,
        },
        {
          label:
            "Aggregate Required",
          value: `${result.aggregateVolume.toFixed(
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
            "Material Cost",
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
                e.target
                  .value as ConcreteGrade,
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
            Cement Cost / Bag (₹)
          </label>

          <input
            type="number"
            value={cementCost}
            onChange={(e) =>
              setCementCost(
                e.target.value,
              )
            }
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Sand Cost / cu ft (₹)
          </label>

          <input
            type="number"
            value={sandCost}
            onChange={(e) =>
              setSandCost(
                e.target.value,
              )
            }
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Aggregate Cost / cu ft
            (₹)
          </label>

          <input
            type="number"
            value={aggregateCost}
            onChange={(e) =>
              setAggregateCost(
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
          Calculate Concrete
        </button>

        <button
          onClick={() => {
            setLength("");
            setWidth("");
            setThickness("");
            setGrade("m20");
            setCementCost("450");
            setSandCost("60");
            setAggregateCost(
              "50",
            );
            setSubmitted(false);
          }}
          className="rounded-xl border px-6 py-3"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-xl font-semibold">
            Concrete Required
          </h3>

          <p className="mt-3 text-4xl font-bold text-green-700">
            {result.wetVolume.toFixed(
              2,
            )}{" "}
            cu ft
          </p>

          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Cement:{" "}
            {result.cementBags} Bags
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Concrete Calculation Results"
          results={results}
          calculatorName="Concrete Calculator"
        />
      )}
    </div>
  );
}