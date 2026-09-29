"use client";

import { useId, useState } from "react";
import ResultsSection from "../ResultsSection";

type Unit = "feet" | "metres";

const INPUT_CLASS =
  "w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-white";

function format(value: number, digits = 1) {
  return value.toLocaleString("en-IN", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

export default function StaircaseCalculator() {
  const unitId = useId();
  const heightId = useId();
  const runId = useId();
  const riserId = useId();

  const [unit, setUnit] = useState<Unit>("feet");
  const [floorHeight, setFloorHeight] = useState("10");
  const [availableRun, setAvailableRun] = useState("15");
  const [preferredRiser, setPreferredRiser] = useState("170");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const lengthToMM = unit === "feet" ? 304.8 : 1000;
  const heightMM = Number(floorHeight) * lengthToMM;
  const runMM = Number(availableRun) * lengthToMM;
  const targetRiserMM = Number(preferredRiser);

  const isValid =
    Number.isFinite(heightMM) &&
    Number.isFinite(runMM) &&
    Number.isFinite(targetRiserMM) &&
    heightMM >= 1500 &&
    heightMM <= 12000 &&
    runMM >= 1000 &&
    runMM <= 30000 &&
    targetRiserMM >= 120 &&
    targetRiserMM <= 220;

  const result = submitted && isValid
    ? (() => {
        const risers = Math.max(2, Math.round(heightMM / targetRiserMM));
        const treads = risers - 1;
        const actualRiser = heightMM / risers;
        const tread = runMM / treads;
        const stringer = Math.hypot(heightMM, runMM);
        const angle = (Math.atan2(heightMM, runMM) * 180) / Math.PI;
        const comfortValue = 2 * actualRiser + tread;
        const comfort =
          actualRiser >= 150 &&
          actualRiser <= 190 &&
          tread >= 250 &&
          comfortValue >= 550 &&
          comfortValue <= 700;

        return {
          risers,
          treads,
          actualRiser,
          tread,
          stringer,
          angle,
          comfortValue,
          comfort,
        };
      })()
    : null;

  function calculate() {
    if (!isValid) {
      setError(
        "Enter a floor height from 1.5–12 m, an available run from 1–30 m, and a preferred riser from 120–220 mm.",
      );
      setSubmitted(false);
      return;
    }
    setError("");
    setSubmitted(true);
  }

  function reset() {
    setUnit("feet");
    setFloorHeight("10");
    setAvailableRun("15");
    setPreferredRiser("170");
    setSubmitted(false);
    setError("");
  }

  const displayLength = (millimetres: number) =>
    unit === "feet"
      ? `${format(millimetres / 304.8, 2)} ft`
      : `${format(millimetres / 1000, 2)} m`;

  const results = result
    ? [
        { label: "Number of Risers", value: result.risers, highlight: true },
        { label: "Number of Treads", value: result.treads },
        { label: "Actual Riser Height", value: `${format(result.actualRiser)} mm` },
        { label: "Tread Depth", value: `${format(result.tread)} mm` },
        { label: "Total Stair Run", value: displayLength(runMM) },
        { label: "Sloping/Stringer Length", value: displayLength(result.stringer) },
        { label: "Stair Angle", value: `${format(result.angle)}°` },
        { label: "2R + T Comfort Value", value: `${format(result.comfortValue)} mm` },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        Staircase Dimensions
      </h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Enter the floor height and horizontal space available for one straight flight.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={unitId} className="mb-2 block font-medium">
            Measurement Unit
          </label>
          <select
            id={unitId}
            value={unit}
            onChange={(event) => {
              setUnit(event.target.value as Unit);
              setSubmitted(false);
            }}
            className={INPUT_CLASS}
          >
            <option value="feet">Feet</option>
            <option value="metres">Metres</option>
          </select>
        </div>

        <div>
          <label htmlFor={riserId} className="mb-2 block font-medium">
            Preferred Riser Height (mm)
          </label>
          <input
            id={riserId}
            type="number"
            inputMode="decimal"
            min="120"
            max="220"
            value={preferredRiser}
            onChange={(event) => {
              setPreferredRiser(event.target.value);
              setSubmitted(false);
            }}
            className={INPUT_CLASS}
          />
          <p className="mt-1 text-xs text-slate-500">A 150–175 mm starting range is common for residential planning.</p>
        </div>

        <div>
          <label htmlFor={heightId} className="mb-2 block font-medium">
            Floor-to-Floor Height ({unit === "feet" ? "ft" : "m"})
          </label>
          <input
            id={heightId}
            type="number"
            inputMode="decimal"
            min={unit === "feet" ? "5" : "1.5"}
            step="0.01"
            value={floorHeight}
            onChange={(event) => {
              setFloorHeight(event.target.value);
              setSubmitted(false);
            }}
            className={INPUT_CLASS}
          />
        </div>

        <div>
          <label htmlFor={runId} className="mb-2 block font-medium">
            Available Horizontal Run ({unit === "feet" ? "ft" : "m"})
          </label>
          <input
            id={runId}
            type="number"
            inputMode="decimal"
            min={unit === "feet" ? "3.3" : "1"}
            step="0.01"
            value={availableRun}
            onChange={(event) => {
              setAvailableRun(event.target.value);
              setSubmitted(false);
            }}
            className={INPUT_CLASS}
          />
        </div>
      </div>

      {error && <p role="alert" className="mt-4 text-sm text-red-600">{error}</p>}

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={calculate} className="rounded-xl bg-black px-6 py-3 font-medium text-white hover:bg-slate-800">
          Calculate Staircase
        </button>
        <button type="button" onClick={reset} className="rounded-xl border px-6 py-3 font-medium hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-900">
          Reset
        </button>
      </div>

      {result && (
        <div className={`mt-6 rounded-2xl border p-4 ${result.comfort ? "border-emerald-200 bg-emerald-50 text-emerald-900" : "border-amber-200 bg-amber-50 text-amber-950"}`}>
          <p className="font-semibold">
            {result.comfort
              ? "The calculated proportions fall within the general residential planning checks used by this tool."
              : "The calculated proportions fall outside one or more general comfort checks; adjust the available run or target riser."}
          </p>
          <p className="mt-1 text-sm">
            This is a planning estimate, not a structural, accessibility, fire-safety, or local-code approval.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Staircase Calculation Results"
          results={results}
          calculatorName="Staircase Calculator"
        />
      )}
    </div>
  );
}
