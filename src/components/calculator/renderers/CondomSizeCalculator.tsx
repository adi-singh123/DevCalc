"use client";

import { useId, useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

type Unit = "mm" | "in";

// Real commercial nominal widths (flat-lay width, in mm) — this is the number
// printed on condom packaging, and it equals roughly circumference / 2.
const NOMINAL_WIDTHS_MM = [49, 52, 53, 54, 56, 57, 60, 64, 69];

// Practical human-range bounds, used only to catch likely typos (e.g. a stray
// extra digit) — not a judgment on anyone's measurements.
const GIRTH_RANGE_MM = { min: 70, max: 160 };
const LENGTH_RANGE_MM = { min: 70, max: 230 };

const INPUT_CLASS =
  "w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-black/10";
const INPUT_ERROR_CLASS =
  "w-full rounded-xl border border-red-500 p-3 focus:outline-none focus:ring-2 focus:ring-red-200";

function toMm(value: number, unit: Unit): number {
  return unit === "in" ? value * 25.4 : value;
}

function nearest(value: number, options: number[]): number {
  return options.reduce((closest, option) =>
    Math.abs(option - value) < Math.abs(closest - value) ? option : closest,
  options[0]);
}

function lengthCategory(lengthMm: number): string {
  if (lengthMm <= 180) return "Regular (up to ~180 mm)";
  if (lengthMm <= 200) return "Long (~180-200 mm)";
  return "Extra Long (200 mm+)";
}

interface FormErrors {
  girth?: string;
  length?: string;
}

export default function CondomSizeCalculator() {
  const girthId = useId();
  const girthErrorId = useId();
  const lengthId = useId();
  const lengthErrorId = useId();

  const [girth, setGirth] = useState("");
  const [length, setLength] = useState("");
  const [unit, setUnit] = useState<Unit>("mm");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): { ok: boolean; errors: FormErrors } {
    const next: FormErrors = {};
    const girthValue = Number(girth);
    const lengthValue = Number(length);

    if (!girth) {
      next.girth = "Please enter a girth measurement.";
    } else if (Number.isNaN(girthValue) || girthValue <= 0) {
      next.girth = "Enter a valid positive number.";
    } else {
      const girthMm = toMm(girthValue, unit);
      if (girthMm < GIRTH_RANGE_MM.min || girthMm > GIRTH_RANGE_MM.max) {
        next.girth = `Double-check this value — typical range is ${
          unit === "mm"
            ? `${GIRTH_RANGE_MM.min}-${GIRTH_RANGE_MM.max} mm`
            : `${(GIRTH_RANGE_MM.min / 25.4).toFixed(1)}-${(GIRTH_RANGE_MM.max / 25.4).toFixed(1)} in`
        }.`;
      }
    }

    if (!length) {
      next.length = "Please enter a length measurement.";
    } else if (Number.isNaN(lengthValue) || lengthValue <= 0) {
      next.length = "Enter a valid positive number.";
    } else {
      const lengthMm = toMm(lengthValue, unit);
      if (lengthMm < LENGTH_RANGE_MM.min || lengthMm > LENGTH_RANGE_MM.max) {
        next.length = `Double-check this value — typical range is ${
          unit === "mm"
            ? `${LENGTH_RANGE_MM.min}-${LENGTH_RANGE_MM.max} mm`
            : `${(LENGTH_RANGE_MM.min / 25.4).toFixed(1)}-${(LENGTH_RANGE_MM.max / 25.4).toFixed(1)} in`
        }.`;
      }
    }

    return { ok: Object.keys(next).length === 0, errors: next };
  }

  const result = useMemo(() => {
    if (!submitted) return null;

    const girthValue = Number(girth);
    const lengthValue = Number(length);
    if (Number.isNaN(girthValue) || Number.isNaN(lengthValue) || girthValue <= 0 || lengthValue <= 0) {
      return null;
    }

    const girthMm = toMm(girthValue, unit);
    const lengthMm = toMm(lengthValue, unit);

    // Nominal width = circumference / 2 (the number printed on packaging),
    // NOT circumference / π (that would be diameter, a different measurement).
    const nominalWidthMm = girthMm / 2;
    const recommendedWidth = nearest(nominalWidthMm, NOMINAL_WIDTHS_MM);
    const category = lengthCategory(lengthMm);

    return {
      nominalWidthMm,
      recommendedWidth,
      category,
      girthMm,
      lengthMm,
    };
  }, [girth, length, unit, submitted]);

  const results = result
    ? [
        {
          label: "Recommended Nominal Width",
          value: `${result.recommendedWidth} mm`,
          highlight: true,
        },
        { label: "Calculated Nominal Width", value: `${result.nominalWidthMm.toFixed(1)} mm` },
        { label: "Length Category", value: result.category },
        { label: "Measured Girth", value: `${Math.round(result.girthMm)} mm` },
        { label: "Measured Length", value: `${Math.round(result.lengthMm)} mm` },
      ]
    : [];

  function handleCalculate() {
    const { ok, errors: validationErrors } = validate();
    setErrors(validationErrors);
    setSubmitted(ok);
  }

  function handleReset() {
    setGirth("");
    setLength("");
    setUnit("mm");
    setSubmitted(false);
    setErrors({});
  }

  function handleGirthChange(e: React.ChangeEvent<HTMLInputElement>) {
    setGirth(e.target.value);
    if (errors.girth) setErrors((prev) => ({ ...prev, girth: undefined }));
  }

  function handleLengthChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLength(e.target.value);
    if (errors.length) setErrors((prev) => ({ ...prev, length: undefined }));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleCalculate();
  }

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        Enter erect girth (circumference) and length to get a nominal-width recommendation
        based on standard condom sizing. This is a starting point — brands vary slightly, and
        comfort is the best final guide.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor={girthId} className="mb-2 block font-medium">
            Girth (circumference)
          </label>
          <div className="flex gap-2">
            <input
              id={girthId}
              type="number"
              min="1"
              step="0.1"
              placeholder="110"
              value={girth}
              onChange={handleGirthChange}
              onKeyDown={handleKeyDown}
              aria-required="true"
              aria-invalid={!!errors.girth}
              aria-describedby={errors.girth ? girthErrorId : undefined}
              className={errors.girth ? INPUT_ERROR_CLASS : INPUT_CLASS}
            />
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value as Unit)}
              className="rounded-xl border p-3"
              aria-label="Unit"
            >
              <option value="mm">mm</option>
              <option value="in">in</option>
            </select>
          </div>
          {errors.girth && (
            <p id={girthErrorId} role="alert" className="mt-1 text-sm text-red-600">
              {errors.girth}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={lengthId} className="mb-2 block font-medium">
            Length
          </label>
          <input
            id={lengthId}
            type="number"
            min="1"
            step="0.1"
            placeholder="160"
            value={length}
            onChange={handleLengthChange}
            onKeyDown={handleKeyDown}
            aria-required="true"
            aria-invalid={!!errors.length}
            aria-describedby={errors.length ? lengthErrorId : undefined}
            className={errors.length ? INPUT_ERROR_CLASS : INPUT_CLASS}
          />
          {errors.length && (
            <p id={lengthErrorId} role="alert" className="mt-1 text-sm text-red-600">
              {errors.length}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <button
          type="button"
          onClick={handleCalculate}
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:shadow-lg"
        >
          Estimate Condom Size
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <div
          role="status"
          aria-live="polite"
          className="mt-8 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100 p-8 text-center shadow-sm dark:border-slate-700 dark:from-slate-900 dark:to-slate-800"
        >
          <p className="mt-1 text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Recommended Nominal Width
          </p>
          <h3 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
            {result.recommendedWidth} mm
          </h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{result.category}</p>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Try a size nearby if this feels too tight or too loose — fit varies by brand and material.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Condom Size Results"
          results={results}
          calculatorName="Condom Size Calculator"
        />
      )}
    </div>
  );
}