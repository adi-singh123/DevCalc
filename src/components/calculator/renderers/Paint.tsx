"use client";

import { useCallback, useId, useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

// ---- Static config (kept outside component so it doesn't get rebuilt every render) ----

const PAINT_TYPES = {
  distemper: { label: "Distemper", coveragePerLitre: 130, pricePerLitre: 150 },
  emulsion: { label: "Standard Emulsion", coveragePerLitre: 110, pricePerLitre: 280 },
  premium_emulsion: { label: "Premium Emulsion", coveragePerLitre: 100, pricePerLitre: 400 },
  exterior: { label: "Exterior Weatherproof", coveragePerLitre: 105, pricePerLitre: 320 },
} as const;

const COAT_OPTIONS = [
  { value: "1", label: "1 Coat" },
  { value: "2", label: "2 Coats (Recommended)" },
  { value: "3", label: "3 Coats" },
] as const;

// Standard opening sizes used to deduct doors/windows from gross wall area
const DOOR_AREA_SQFT = 21; // ~7ft x 3ft standard door
const WINDOW_AREA_SQFT = 15; // ~5ft x 3ft standard window

const PRIMER_COVERAGE_PER_LITRE = 120;
const PRIMER_PRICE_PER_LITRE = 130;

// Standard can sizes available in the market, largest first, used for the "cans to buy" breakdown
const CAN_SIZES = [20, 10, 4, 1] as const;

type PaintKey = keyof typeof PAINT_TYPES;
type CoatValue = (typeof COAT_OPTIONS)[number]["value"];

const VALID_COAT_VALUES = new Set(COAT_OPTIONS.map((c) => c.value));

/** Type guard so TypeScript can narrow a raw `string` from a <select> into CoatValue. */
function isCoatValue(value: string): value is CoatValue {
  return VALID_COAT_VALUES.has(value as CoatValue);
}

// Sane real-world bounds — tune these to your market if needed
const DIMENSION_MIN = 3; // ft
const DIMENSION_MAX = 200; // ft
const OPENINGS_MAX = 20;
const WASTAGE_MIN = 0;
const WASTAGE_MAX = 25;

const INPUT_CLASS =
  "w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-black/10";
const INPUT_ERROR_CLASS =
  "w-full rounded-xl border border-red-500 p-3 focus:outline-none focus:ring-2 focus:ring-red-200";
const LABEL_CLASS = "mb-2 block font-medium";

function formatINR(value: number) {
  if (!Number.isFinite(value)) return "—";
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

function formatLitres(value: number) {
  if (!Number.isFinite(value)) return "—";
  return `${(Math.round(value * 10) / 10).toLocaleString("en-IN")} L`;
}

/** Clamp a number between min and max, returning null if input isn't a finite number. */
function clampNumber(value: number, min: number, max: number) {
  if (!Number.isFinite(value)) return null;
  return Math.min(Math.max(value, min), max);
}

/** Block non-numeric keys in number inputs (still allows paste/autofill, validated separately). */
function blockInvalidNumberKeys(e: React.KeyboardEvent<HTMLInputElement>) {
  if (["e", "E", "+", "-"].includes(e.key)) {
    e.preventDefault();
  }
}

/** Greedy breakdown of litres needed into standard can sizes, e.g. 27L -> "1x20L + 1x4L + 3x1L" */
function canBreakdown(litres: number): string {
  let remaining = Math.ceil(litres);
  if (remaining <= 0) return "—";

  const parts: string[] = [];
  for (const size of CAN_SIZES) {
    const count = Math.floor(remaining / size);
    if (count > 0) {
      parts.push(`${count} × ${size}L`);
      remaining -= count * size;
    }
  }
  return parts.length > 0 ? parts.join(" + ") : "—";
}

interface FormErrors {
  length?: string;
  width?: string;
  height?: string;
  doors?: string;
  windows?: string;
  wastage?: string;
}

export default function PaintCalculator() {
  // Stable unique ids so every <label htmlFor> / aria-describedby pairing is guaranteed
  // unique even if this component is rendered more than once on the same page.
  const lengthId = useId();
  const lengthErrorId = useId();
  const widthId = useId();
  const widthErrorId = useId();
  const heightId = useId();
  const heightErrorId = useId();
  const doorsId = useId();
  const doorsErrorId = useId();
  const windowsId = useId();
  const windowsErrorId = useId();
  const paintTypeId = useId();
  const coatsId = useId();
  const wastageId = useId();
  const wastageErrorId = useId();
  const ceilingId = useId();
  const primerId = useId();

  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("10");
  const [doors, setDoors] = useState("1");
  const [windows, setWindows] = useState("2");
  const [paintType, setPaintType] = useState<PaintKey>("emulsion");
  const [coats, setCoats] = useState<CoatValue>("2");
  const [wastagePercent, setWastagePercent] = useState("10");

  const [includeCeiling, setIncludeCeiling] = useState(false);
  const [includePrimer, setIncludePrimer] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  // ---- Validation (single source of truth, reused by calculate + the memoized result) ----
  const validate = useCallback((): { ok: boolean; errors: FormErrors } => {
    const next: FormErrors = {};

    const l = Number(length);
    if (length.trim() === "" || Number.isNaN(l)) {
      next.length = "Please enter room length.";
    } else if (l < DIMENSION_MIN || l > DIMENSION_MAX) {
      next.length = `Length must be between ${DIMENSION_MIN} and ${DIMENSION_MAX} ft.`;
    }

    const w = Number(width);
    if (width.trim() === "" || Number.isNaN(w)) {
      next.width = "Please enter room width.";
    } else if (w < DIMENSION_MIN || w > DIMENSION_MAX) {
      next.width = `Width must be between ${DIMENSION_MIN} and ${DIMENSION_MAX} ft.`;
    }

    const h = Number(height);
    if (height.trim() === "" || Number.isNaN(h)) {
      next.height = "Please enter wall height.";
    } else if (h < DIMENSION_MIN || h > DIMENSION_MAX) {
      next.height = `Height must be between ${DIMENSION_MIN} and ${DIMENSION_MAX} ft.`;
    }

    const d = Number(doors);
    if (doors.trim() !== "" && (Number.isNaN(d) || d < 0 || d > OPENINGS_MAX)) {
      next.doors = `Enter a number between 0 and ${OPENINGS_MAX}.`;
    }

    const win = Number(windows);
    if (windows.trim() !== "" && (Number.isNaN(win) || win < 0 || win > OPENINGS_MAX)) {
      next.windows = `Enter a number between 0 and ${OPENINGS_MAX}.`;
    }

    const wastage = Number(wastagePercent);
    if (wastagePercent.trim() !== "") {
      if (Number.isNaN(wastage)) {
        next.wastage = "Enter a valid percentage.";
      } else if (wastage < WASTAGE_MIN || wastage > WASTAGE_MAX) {
        next.wastage = `Must be between ${WASTAGE_MIN} and ${WASTAGE_MAX}%.`;
      }
    }

    return { ok: Object.keys(next).length === 0, errors: next };
  }, [length, width, height, doors, windows, wastagePercent]);

  const result = useMemo(() => {
    if (!submitted) return null;

    const { ok } = validate();
    if (!ok) return null;

    const l = Number(length);
    const w = Number(width);
    const h = Number(height);
    const numDoors = clampNumber(Number(doors) || 0, 0, OPENINGS_MAX) ?? 0;
    const numWindows = clampNumber(Number(windows) || 0, 0, OPENINGS_MAX) ?? 0;
    const numCoats = Number(coats) || 2;

    if (!Number.isFinite(l) || !Number.isFinite(w) || !Number.isFinite(h)) return null;

    const grossWallArea = 2 * (l + w) * h;
    const openingsArea = numDoors * DOOR_AREA_SQFT + numWindows * WINDOW_AREA_SQFT;
    const netWallArea = Math.max(grossWallArea - openingsArea, 0);

    const ceilingArea = includeCeiling ? l * w : 0;
    const totalPaintableArea = netWallArea + ceilingArea;

    const paintConfig = PAINT_TYPES[paintType] ?? PAINT_TYPES.emulsion;
    const wastageMultiplier =
      1 + (clampNumber(Number(wastagePercent), WASTAGE_MIN, WASTAGE_MAX) ?? 0) / 100;

    const baseLitres = (totalPaintableArea / paintConfig.coveragePerLitre) * numCoats;
    const finalLitres = baseLitres * wastageMultiplier;

    const primerLitres = includePrimer
      ? (totalPaintableArea / PRIMER_COVERAGE_PER_LITRE) * wastageMultiplier
      : 0;
    const primerCost = primerLitres * PRIMER_PRICE_PER_LITRE;

    const paintCost = finalLitres * paintConfig.pricePerLitre;
    const totalCost = paintCost + primerCost;

    if (!Number.isFinite(totalCost)) return null;

    return {
      grossWallArea,
      openingsArea,
      netWallArea,
      ceilingArea,
      totalPaintableArea,
      finalLitres,
      primerLitres,
      paintCost,
      primerCost,
      totalCost,
      cans: canBreakdown(finalLitres),
      primerCans: includePrimer ? canBreakdown(primerLitres) : "—",
    };
  }, [
    length,
    width,
    height,
    doors,
    windows,
    paintType,
    coats,
    wastagePercent,
    includeCeiling,
    includePrimer,
    submitted,
    validate,
  ]);

  const results = result
    ? [
        { label: "Total Estimated Cost", value: formatINR(result.totalCost), highlight: true },
        { label: "Paintable Area", value: `${Math.round(result.totalPaintableArea).toLocaleString("en-IN")} sq ft` },
        { label: "Paint Required", value: formatLitres(result.finalLitres) },
        { label: "Cans to Buy", value: result.cans },
        { label: "Paint Cost", value: formatINR(result.paintCost) },
        ...(result.primerLitres
          ? [
              { label: "Primer Required", value: formatLitres(result.primerLitres) },
              { label: "Primer Cans to Buy", value: result.primerCans },
              { label: "Primer Cost", value: formatINR(result.primerCost) },
            ]
          : []),
        ...(result.ceilingArea
          ? [{ label: "Ceiling Area Included", value: `${Math.round(result.ceilingArea).toLocaleString("en-IN")} sq ft` }]
          : []),
        { label: "Openings Deducted", value: `${Math.round(result.openingsArea).toLocaleString("en-IN")} sq ft` },
      ]
    : [];

  function handleCalculate() {
    const { ok, errors: validationErrors } = validate();
    setErrors(validationErrors);
    setSubmitted(ok);
  }

  function handleReset() {
    setLength("");
    setWidth("");
    setHeight("10");
    setDoors("1");
    setWindows("2");
    setPaintType("emulsion");
    setCoats("2");
    setWastagePercent("10");
    setIncludeCeiling(false);
    setIncludePrimer(false);
    setSubmitted(false);
    setErrors({});
  }

  function makeChangeHandler(
    setter: (value: string) => void,
    errorKey: keyof FormErrors,
  ) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      if (errors[errorKey]) setErrors((prev) => ({ ...prev, [errorKey]: undefined }));
    };
  }

  const handleLengthChange = makeChangeHandler(setLength, "length");
  const handleWidthChange = makeChangeHandler(setWidth, "width");
  const handleHeightChange = makeChangeHandler(setHeight, "height");
  const handleDoorsChange = makeChangeHandler(setDoors, "doors");
  const handleWindowsChange = makeChangeHandler(setWindows, "windows");
  const handleWastageChange = makeChangeHandler(setWastagePercent, "wastage");

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    blockInvalidNumberKeys(e);
    if (e.key === "Enter") handleCalculate();
  }

  function handleCoatsChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    setCoats(isCoatValue(value) ? value : "2");
  }

  return (
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor={lengthId} className={LABEL_CLASS}>
            Room Length (ft)
          </label>
          <input
            id={lengthId}
            type="number"
            inputMode="numeric"
            min={DIMENSION_MIN}
            max={DIMENSION_MAX}
            step="0.5"
            value={length}
            onChange={handleLengthChange}
            onKeyDown={handleKeyDown}
            placeholder="12"
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

        <div>
          <label htmlFor={widthId} className={LABEL_CLASS}>
            Room Width (ft)
          </label>
          <input
            id={widthId}
            type="number"
            inputMode="numeric"
            min={DIMENSION_MIN}
            max={DIMENSION_MAX}
            step="0.5"
            value={width}
            onChange={handleWidthChange}
            onKeyDown={handleKeyDown}
            placeholder="10"
            aria-required="true"
            aria-invalid={!!errors.width}
            aria-describedby={errors.width ? widthErrorId : undefined}
            className={errors.width ? INPUT_ERROR_CLASS : INPUT_CLASS}
          />
          {errors.width && (
            <p id={widthErrorId} role="alert" className="mt-1 text-sm text-red-600">
              {errors.width}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={heightId} className={LABEL_CLASS}>
            Wall Height (ft)
          </label>
          <input
            id={heightId}
            type="number"
            inputMode="numeric"
            min={DIMENSION_MIN}
            max={DIMENSION_MAX}
            step="0.5"
            value={height}
            onChange={handleHeightChange}
            onKeyDown={handleKeyDown}
            placeholder="10"
            aria-required="true"
            aria-invalid={!!errors.height}
            aria-describedby={errors.height ? heightErrorId : undefined}
            className={errors.height ? INPUT_ERROR_CLASS : INPUT_CLASS}
          />
          {errors.height && (
            <p id={heightErrorId} role="alert" className="mt-1 text-sm text-red-600">
              {errors.height}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={paintTypeId} className={LABEL_CLASS}>
            Paint Type
          </label>
          <select
            id={paintTypeId}
            value={paintType}
            onChange={(e) => setPaintType(e.target.value as PaintKey)}
            className={INPUT_CLASS}
          >
            {Object.entries(PAINT_TYPES).map(([key, { label }]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={coatsId} className={LABEL_CLASS}>
            Number of Coats
          </label>
          <select id={coatsId} value={coats} onChange={handleCoatsChange} className={INPUT_CLASS}>
            {COAT_OPTIONS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={wastageId} className={LABEL_CLASS}>
            Wastage Buffer (%)
          </label>
          <input
            id={wastageId}
            type="number"
            inputMode="decimal"
            min={WASTAGE_MIN}
            max={WASTAGE_MAX}
            step="1"
            value={wastagePercent}
            onChange={handleWastageChange}
            onKeyDown={handleKeyDown}
            placeholder="10"
            aria-invalid={!!errors.wastage}
            aria-describedby={errors.wastage ? wastageErrorId : undefined}
            className={errors.wastage ? INPUT_ERROR_CLASS : INPUT_CLASS}
          />
          {errors.wastage && (
            <p id={wastageErrorId} role="alert" className="mt-1 text-sm text-red-600">
              {errors.wastage}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={doorsId} className={LABEL_CLASS}>
            Number of Doors
          </label>
          <input
            id={doorsId}
            type="number"
            inputMode="numeric"
            min={0}
            max={OPENINGS_MAX}
            step="1"
            value={doors}
            onChange={handleDoorsChange}
            onKeyDown={handleKeyDown}
            placeholder="1"
            aria-invalid={!!errors.doors}
            aria-describedby={errors.doors ? doorsErrorId : undefined}
            className={errors.doors ? INPUT_ERROR_CLASS : INPUT_CLASS}
          />
          {errors.doors && (
            <p id={doorsErrorId} role="alert" className="mt-1 text-sm text-red-600">
              {errors.doors}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={windowsId} className={LABEL_CLASS}>
            Number of Windows
          </label>
          <input
            id={windowsId}
            type="number"
            inputMode="numeric"
            min={0}
            max={OPENINGS_MAX}
            step="1"
            value={windows}
            onChange={handleWindowsChange}
            onKeyDown={handleKeyDown}
            placeholder="2"
            aria-invalid={!!errors.windows}
            aria-describedby={errors.windows ? windowsErrorId : undefined}
            className={errors.windows ? INPUT_ERROR_CLASS : INPUT_CLASS}
          />
          {errors.windows && (
            <p id={windowsErrorId} role="alert" className="mt-1 text-sm text-red-600">
              {errors.windows}
            </p>
          )}
        </div>
      </div>

      <fieldset className="mt-6 grid gap-3 sm:grid-cols-2">
        <legend className="sr-only">Optional additions</legend>

        <label htmlFor={ceilingId} className="flex items-center gap-3">
          <input
            id={ceilingId}
            type="checkbox"
            checked={includeCeiling}
            onChange={(e) => setIncludeCeiling(e.target.checked)}
          />
          Include Ceiling Area
        </label>

        <label htmlFor={primerId} className="flex items-center gap-3">
          <input
            id={primerId}
            type="checkbox"
            checked={includePrimer}
            onChange={(e) => setIncludePrimer(e.target.checked)}
          />
          Include Primer Coat
        </label>
      </fieldset>

      <div className="mt-6 flex gap-4">
        <button
          type="button"
          onClick={handleCalculate}
          className="rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black/40 focus:ring-offset-2"
        >
          Calculate Paint Needed
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="rounded-xl border px-6 py-3 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-2"
        >
          Reset
        </button>
      </div>

      {result && (
        <div
          role="status"
          aria-live="polite"
          className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center"
        >
          <h3 className="text-xl font-semibold">Paint Required</h3>
          <p className="mt-3 text-4xl font-bold text-blue-700">{formatLitres(result.finalLitres)}</p>
          <p className="mt-1 text-sm text-gray-500">
            Estimated cost: {formatINR(result.totalCost)} for {Math.round(result.totalPaintableArea).toLocaleString("en-IN")} sq ft
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Paint Requirement Breakdown"
          results={results}
          calculatorName="Paint Calculator"
        />
      )}
    </div>
  );
}