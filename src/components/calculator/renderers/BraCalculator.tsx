"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

type Unit = "in" | "cm";
type SizingSystem = "US" | "UK" | "EU" | "IN";

interface FieldErrors {
  band?: string;
  bust?: string;
}

// Cup letter progression by inches of difference between bust and underbust.
// Index 0 = 0" difference (AA), index 1 = 1" (A), etc.
const US_CUP_SEQUENCE = [
  "AA", "A", "B", "C", "D", "DD/E", "DDD/F", "G", "H", "I", "J", "K",
];

// Common UK convention: AA, A, B, C, D, DD, E, F, FF, G, GG, H.
const UK_CUP_SEQUENCE = [
  "AA", "A", "B", "C", "D", "DD", "E", "F", "FF", "G", "GG", "H",
];

// EU cup sizing is numeric, increasing by 1 per inch of difference.
const EU_CUP_START = 1;

// EU band numbers run ~15-16 higher than US/UK band inches (e.g. US 34 ≈ EU 75).
const EU_BAND_OFFSET = 15;

// Realistic human measurement bounds in inches, used to catch typos
// like an accidental extra digit (e.g. "3200" instead of "32").
const BAND_MIN_IN = 20;
const BAND_MAX_IN = 60;
const BUST_MIN_IN = 24;
const BUST_MAX_IN = 70;

const CM_TO_IN = 1 / 2.54;

function toInches(value: number, unit: Unit): number {
  return unit === "cm" ? value * CM_TO_IN : value;
}

// Band size uses the standard "add-on" method: round the underbust
// measurement to the nearest whole number, then add 4 if even or 5 if odd.
function calculateBandSize(underbustIn: number): number {
  const rounded = Math.round(underbustIn);
  const isEven = rounded % 2 === 0;
  return isEven ? rounded + 4 : rounded + 5;
}

function getCupIndex(differenceIn: number): number {
  const rounded = Math.round(differenceIn);
  return Math.max(0, Math.min(rounded, US_CUP_SEQUENCE.length - 1));
}

function calculateSisterSizes(bandSize: number, cupIndex: number): string[] {
  // Sister sizes: one band size up/down with cup adjusted the opposite way
  // keeps roughly the same cup volume.
  const sisters: string[] = [];

  const downBand = bandSize - 2;
  const downCupIndex = cupIndex + 1;
  if (downBand >= 28 && downCupIndex < US_CUP_SEQUENCE.length) {
    sisters.push(`${downBand}${US_CUP_SEQUENCE[downCupIndex]}`);
  }

  const upBand = bandSize + 2;
  const upCupIndex = cupIndex - 1;
  if (upCupIndex >= 0) {
    sisters.push(`${upBand}${US_CUP_SEQUENCE[upCupIndex]}`);
  }

  return sisters;
}

interface SizeResult {
  bandSize: number;
  sizeLabelUS: string;
  sizeLabelUK: string;
  sizeLabelEU: string;
  sizeLabelIN: string;
  sisterSizes: string[];
}

function calculateSize(bandRaw: number, bustRaw: number, unit: Unit): SizeResult {
  const underbustIn = toInches(bandRaw, unit);
  const bustIn = toInches(bustRaw, unit);

  const bandSize = calculateBandSize(underbustIn);
  const differenceIn = bustIn - underbustIn;
  const cupIndex = getCupIndex(differenceIn);

  const cupLetterUS = US_CUP_SEQUENCE[cupIndex];
  const cupLetterUK = UK_CUP_SEQUENCE[cupIndex];
  const cupLetterEU = EU_CUP_START + cupIndex;

  return {
    bandSize,
    sizeLabelUS: `${bandSize}${cupLetterUS}`,
    sizeLabelUK: `${bandSize}${cupLetterUK}`,
    sizeLabelEU: `${bandSize + EU_BAND_OFFSET}${cupLetterEU}`,
    // India follows the same band-number + cup-letter convention as the UK
    // (32B, 34C, 36DD, etc.) rather than a separate numbering system.
    sizeLabelIN: `${bandSize}${cupLetterUK}`,
    sisterSizes: calculateSisterSizes(bandSize, cupIndex),
  };
}

function validateInputs(band: string, bust: string, unit: Unit): FieldErrors {
  const errors: FieldErrors = {};

  const bandNum = parseFloat(band);
  const bustNum = parseFloat(bust);

  if (band.trim() === "") {
    errors.band = "Enter your underbust (rib cage) measurement.";
  } else if (Number.isNaN(bandNum) || bandNum <= 0) {
    errors.band = "Enter a valid positive number.";
  } else {
    const bandIn = toInches(bandNum, unit);
    if (bandIn < BAND_MIN_IN || bandIn > BAND_MAX_IN) {
      errors.band =
        unit === "cm"
          ? `Enter a realistic value between ${Math.round(BAND_MIN_IN / CM_TO_IN)} and ${Math.round(BAND_MAX_IN / CM_TO_IN)} cm.`
          : `Enter a realistic value between ${BAND_MIN_IN} and ${BAND_MAX_IN} in.`;
    }
  }

  if (bust.trim() === "") {
    errors.bust = "Enter your bust (fullest point) measurement.";
  } else if (Number.isNaN(bustNum) || bustNum <= 0) {
    errors.bust = "Enter a valid positive number.";
  } else {
    const bustIn = toInches(bustNum, unit);
    if (bustIn < BUST_MIN_IN || bustIn > BUST_MAX_IN) {
      errors.bust =
        unit === "cm"
          ? `Enter a realistic value between ${Math.round(BUST_MIN_IN / CM_TO_IN)} and ${Math.round(BUST_MAX_IN / CM_TO_IN)} cm.`
          : `Enter a realistic value between ${BUST_MIN_IN} and ${BUST_MAX_IN} in.`;
    }
  }

  if (
    !errors.band &&
    !errors.bust &&
    bandNum > 0 &&
    bustNum > 0 &&
    toInches(bustNum, unit) < toInches(bandNum, unit)
  ) {
    errors.bust =
      "Bust measurement is usually equal to or larger than the underbust — double-check your numbers.";
  }

  return errors;
}

export default function BraSizeCalculator() {
  const [band, setBand] = useState("");
  const [bust, setBust] = useState("");
  const [unit, setUnit] = useState<Unit>("in");
  const [system, setSystem] = useState<SizingSystem>("IN");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (!submitted) return null;

    const currentErrors = validateInputs(band, bust, unit);
    if (currentErrors.band || currentErrors.bust) return null;

    const bandNum = parseFloat(band);
    const bustNum = parseFloat(bust);
    return calculateSize(bandNum, bustNum, unit);
  }, [band, bust, unit, submitted]);

  function handleCalculate() {
    const validationErrors = validateInputs(band, bust, unit);
    setErrors(validationErrors);
    setSubmitted(true);
  }

  function handleReset() {
    setBand("");
    setBust("");
    setUnit("in");
    setSystem("US");
    setErrors({});
    setSubmitted(false);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      handleCalculate();
    }
  }

  function handleUnitChange(newUnit: Unit) {
    setUnit(newUnit);
    setSubmitted(false);
    setErrors({});
  }

  const displayLabel =
    result &&
    (system === "US"
      ? result.sizeLabelUS
      : system === "UK"
      ? result.sizeLabelUK
      : system === "IN"
      ? result.sizeLabelIN
      : result.sizeLabelEU);

  const results = result
    ? [
        {
          label: "Your Size",
          value: displayLabel as string,
          highlight: true,
        },
        {
          label: "US Size",
          value: result.sizeLabelUS,
        },
        {
          label: "UK Size",
          value: result.sizeLabelUK,
        },
        {
          label: "EU Size",
          value: result.sizeLabelEU,
        },
        ...(result.sisterSizes.length > 0
          ? [
              {
                label: "Sister Sizes",
                value: result.sisterSizes.join(", "),
              },
            ]
          : []),
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Bra Size Calculator</h2>

        <div className="flex overflow-hidden rounded-xl border text-sm">
          <button
            type="button"
            onClick={() => handleUnitChange("in")}
            aria-pressed={unit === "in"}
            className={`px-3 py-1.5 ${
              unit === "in" ? "bg-black text-white" : "bg-white text-slate-700"
            }`}
          >
            in
          </button>
          <button
            type="button"
            onClick={() => handleUnitChange("cm")}
            aria-pressed={unit === "cm"}
            className={`px-3 py-1.5 ${
              unit === "cm" ? "bg-black text-white" : "bg-white text-slate-700"
            }`}
          >
            cm
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="band-measurement" className="mb-2 block font-medium">
            Underbust (band) — {unit}
          </label>
          <input
            id="band-measurement"
            type="number"
            inputMode="decimal"
            min={0}
            step="0.1"
            value={band}
            onChange={(e) => {
              setBand(e.target.value);
              setSubmitted(false);
            }}
            onKeyDown={handleKeyDown}
            aria-invalid={!!errors.band}
            aria-describedby={errors.band ? "band-error" : "band-hint"}
            placeholder={unit === "in" ? "e.g. 32" : "e.g. 81"}
            className={`w-full rounded-xl border p-3 focus:outline-none focus:ring-2 ${
              errors.band ? "border-red-500 focus:ring-red-300" : "focus:ring-slate-400"
            }`}
          />
          <p id="band-hint" className="mt-1 text-xs text-slate-500">
            Measure snugly around your rib cage, directly under the bust, tape kept level.
          </p>
          {errors.band && (
            <p id="band-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.band}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="bust-measurement" className="mb-2 block font-medium">
            Bust (fullest point) — {unit}
          </label>
          <input
            id="bust-measurement"
            type="number"
            inputMode="decimal"
            min={0}
            step="0.1"
            value={bust}
            onChange={(e) => {
              setBust(e.target.value);
              setSubmitted(false);
            }}
            onKeyDown={handleKeyDown}
            aria-invalid={!!errors.bust}
            aria-describedby={errors.bust ? "bust-error" : "bust-hint"}
            placeholder={unit === "in" ? "e.g. 36" : "e.g. 91"}
            className={`w-full rounded-xl border p-3 focus:outline-none focus:ring-2 ${
              errors.bust ? "border-red-500 focus:ring-red-300" : "focus:ring-slate-400"
            }`}
          />
          <p id="bust-hint" className="mt-1 text-xs text-slate-500">
            Measure around the fullest part of your bust, tape parallel to the floor.
          </p>
          {errors.bust && (
            <p id="bust-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.bust}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="sizing-system" className="mb-2 block font-medium">
            Sizing system
          </label>
          <select
            id="sizing-system"
            value={system}
            onChange={(e) => setSystem(e.target.value as SizingSystem)}
            className="w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            <option value="US">US</option>
            <option value="UK">UK</option>
            <option value="EU">EU</option>
          </select>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          type="button"
          onClick={handleCalculate}
          className="rounded-xl bg-black px-6 py-3 text-white transition hover:opacity-90"
        >
          Calculate My Size
        </button>

        <button type="button" onClick={handleReset} className="rounded-xl border px-6 py-3">
          Reset
        </button>
      </div>

      {submitted && (errors.band || errors.bust) && (
        <p role="alert" className="mt-4 text-sm text-red-600">
          Please fix the highlighted field{errors.band && errors.bust ? "s" : ""} above.
        </p>
      )}

      {result && displayLabel && (
        <div className="mt-8 rounded-2xl border bg-orange-50 p-6 text-center dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-xl font-semibold">Your Estimated Bra Size</h3>
          <p className="mt-3 text-4xl font-bold text-orange-600">{displayLabel}</p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Bra Size Calculation Results"
          results={results}
          calculatorName="Bra Size Calculator"
        />
      )}

      {result && (
        <p className="mt-4 text-xs text-slate-400">
          This is an estimate based on standard sizing formulas. Fit varies by brand and style —
          use this as a starting point, not a guarantee, and try before you buy where possible.
        </p>
      )}
    </div>
  );
}