"use client";

import { useCallback, useId, useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

// ---- Static config (kept outside component so it doesn't get rebuilt every render) ----

const QUALITY_RATES = {
  basic: { label: "Basic", rate: 1600 },
  standard: { label: "Standard", rate: 2200 },
  premium: { label: "Premium", rate: 3000 },
  luxury: { label: "Luxury", rate: 4500 },
} as const;

const CITY_MULTIPLIERS = {
  tier1: { label: "Tier 1 City (Metro)", multiplier: 1.15 },
  tier2: { label: "Tier 2 City", multiplier: 1.0 },
  tier3: { label: "Tier 3 City / Town", multiplier: 0.9 },
  rural: { label: "Rural / Village", multiplier: 0.8 },
} as const;

const FLOOR_OPTIONS = [
  { value: "1", label: "Ground Floor Only" },
  { value: "2", label: "G+1 (2 Floors)" },
  { value: "3", label: "G+2 (3 Floors)" },
  { value: "4", label: "G+3 (4 Floors)" },
  { value: "5", label: "G+4 (5 Floors)" },
] as const;

const PLOT_TYPES = {
  individual: { label: "Individual Plot", costMultiplier: 1 },
  corner: { label: "Corner Plot", costMultiplier: 1.05 },
  apartment_renovation: { label: "Apartment Renovation", costMultiplier: 0.6 },
} as const;

type QualityKey = keyof typeof QUALITY_RATES;
type CityKey = keyof typeof CITY_MULTIPLIERS;
type PlotKey = keyof typeof PLOT_TYPES;
type FloorValue = (typeof FLOOR_OPTIONS)[number]["value"];

const VALID_FLOOR_VALUES = new Set(FLOOR_OPTIONS.map((f) => f.value));

/** Type guard so TypeScript can narrow a raw `string` from a <select> into FloorValue. */
function isFloorValue(value: string): value is FloorValue {
  return VALID_FLOOR_VALUES.has(value as FloorValue);
}

// Sane real-world bounds — tune these to your market if needed
const AREA_MIN = 50; // sq ft
const AREA_MAX = 50000; // sq ft
const CONTINGENCY_MIN = 0;
const CONTINGENCY_MAX = 25;

const INPUT_CLASS =
  "w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-black/10";
const INPUT_ERROR_CLASS =
  "w-full rounded-xl border border-red-500 p-3 focus:outline-none focus:ring-2 focus:ring-red-200";
const LABEL_CLASS = "mb-2 block font-medium";

function formatINR(value: number) {
  if (!Number.isFinite(value)) return "—";
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
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

interface FormErrors {
  area?: string;
  contingency?: string;
}

export default function HouseConstructionCostCalculator() {
  // Stable unique ids so every <label htmlFor> / aria-describedby pairing is guaranteed
  // unique even if this component is rendered more than once on the same page.
  const areaId = useId();
  const areaErrorId = useId();
  const qualityId = useId();
  const cityId = useId();
  const floorsId = useId();
  const plotTypeId = useId();
  const contingencyId = useId();
  const contingencyErrorId = useId();
  const interiorId = useId();
  const boundaryId = useId();
  const demolitionId = useId();
  const architectId = useId();

  const [area, setArea] = useState("");
  const [quality, setQuality] = useState<QualityKey>("standard");
  const [cityType, setCityType] = useState<CityKey>("tier2");
  const [floors, setFloors] = useState<FloorValue>("1");
  const [plotType, setPlotType] = useState<PlotKey>("individual");

  const [interior, setInterior] = useState(false);
  const [boundaryWall, setBoundaryWall] = useState(false);
  const [demolition, setDemolition] = useState(false);
  const [includeArchitectFees, setIncludeArchitectFees] = useState(false);
  const [contingencyPercent, setContingencyPercent] = useState("5");

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  // ---- Validation (single source of truth, reused by calculate + the memoized result) ----
  const validate = useCallback((): { ok: boolean; errors: FormErrors } => {
    const next: FormErrors = {};

    const sqFt = Number(area);
    if (area.trim() === "" || Number.isNaN(sqFt)) {
      next.area = "Please enter a construction area.";
    } else if (sqFt <= 0) {
      next.area = "Area must be greater than 0.";
    } else if (sqFt < AREA_MIN) {
      next.area = `Area seems too small. Minimum is ${AREA_MIN} sq ft.`;
    } else if (sqFt > AREA_MAX) {
      next.area = `Area seems too large. Maximum supported is ${AREA_MAX.toLocaleString("en-IN")} sq ft.`;
    }

    if (contingencyPercent.trim() !== "") {
      const c = Number(contingencyPercent);
      if (Number.isNaN(c)) {
        next.contingency = "Enter a valid percentage.";
      } else if (c < CONTINGENCY_MIN || c > CONTINGENCY_MAX) {
        next.contingency = `Must be between ${CONTINGENCY_MIN} and ${CONTINGENCY_MAX}%.`;
      }
    }

    return { ok: Object.keys(next).length === 0, errors: next };
  }, [area, contingencyPercent]);

  const result = useMemo(() => {
    if (!submitted) return null;

    const { ok } = validate();
    if (!ok) return null;

    const sqFt = Number(area);
    const numFloors = Number(floors) || 1;
    const totalBuiltUpArea = sqFt * numFloors;
    if (!Number.isFinite(totalBuiltUpArea) || totalBuiltUpArea <= 0) return null;

    const baseRate = QUALITY_RATES[quality]?.rate ?? QUALITY_RATES.standard.rate;
    const cityMultiplier = CITY_MULTIPLIERS[cityType]?.multiplier ?? 1;
    const plotMultiplier = PLOT_TYPES[plotType]?.costMultiplier ?? 1;

    // Core structural + finishing cost, scales with built-up area across all floors
    const coreConstructionCost =
      totalBuiltUpArea * baseRate * cityMultiplier * plotMultiplier;

    // Boundary wall scales with plot footprint (one floor), not total built-up area,
    // and isn't applicable to apartment renovations.
    const isApartment = plotType === "apartment_renovation";

    const interiorCost = interior ? coreConstructionCost * 0.15 : 0;
    const boundaryCost = boundaryWall && !isApartment ? sqFt * 350 : 0;
    const demolitionCost = demolition ? sqFt * 120 : 0;
    const architectFees = includeArchitectFees ? coreConstructionCost * 0.03 : 0;

    const subtotal =
      coreConstructionCost +
      interiorCost +
      boundaryCost +
      demolitionCost +
      architectFees;

    const contingencyRate =
      (clampNumber(Number(contingencyPercent), CONTINGENCY_MIN, CONTINGENCY_MAX) ?? 0) / 100;
    const contingencyCost = subtotal * contingencyRate;

    const totalCost = subtotal + contingencyCost;

    if (!Number.isFinite(totalCost)) return null;

    return {
      totalCost,
      materialCost: coreConstructionCost * 0.55,
      labourCost: coreConstructionCost * 0.3,
      finishingCost: coreConstructionCost * 0.15,
      interiorCost,
      boundaryCost,
      demolitionCost,
      architectFees,
      contingencyCost,
      effectiveRatePerSqFt: totalCost / totalBuiltUpArea,
      totalBuiltUpArea,
    };
  }, [
    area,
    quality,
    cityType,
    floors,
    plotType,
    interior,
    boundaryWall,
    demolition,
    includeArchitectFees,
    contingencyPercent,
    submitted,
    validate,
  ]);

  const results = result
    ? [
        { label: "Total Construction Cost", value: formatINR(result.totalCost), highlight: true },
        { label: "Total Built-up Area", value: `${result.totalBuiltUpArea.toLocaleString("en-IN")} sq ft` },
        { label: "Material Cost", value: formatINR(result.materialCost) },
        { label: "Labour Cost", value: formatINR(result.labourCost) },
        { label: "Finishing Cost", value: formatINR(result.finishingCost) },
        ...(result.interiorCost ? [{ label: "Interior Work", value: formatINR(result.interiorCost) }] : []),
        ...(result.boundaryCost ? [{ label: "Boundary Wall", value: formatINR(result.boundaryCost) }] : []),
        ...(result.demolitionCost ? [{ label: "Demolition", value: formatINR(result.demolitionCost) }] : []),
        ...(result.architectFees ? [{ label: "Architect / Design Fees", value: formatINR(result.architectFees) }] : []),
        { label: "Contingency Buffer", value: formatINR(result.contingencyCost) },
        { label: "Effective Cost / Sq Ft", value: `₹${Math.round(result.effectiveRatePerSqFt).toLocaleString("en-IN")}` },
      ]
    : [];

  function handleCalculate() {
    const { ok, errors: validationErrors } = validate();
    setErrors(validationErrors);
    setSubmitted(ok);
  }

  function handleReset() {
    setArea("");
    setQuality("standard");
    setCityType("tier2");
    setFloors("1");
    setPlotType("individual");
    setInterior(false);
    setBoundaryWall(false);
    setDemolition(false);
    setIncludeArchitectFees(false);
    setContingencyPercent("5");
    setSubmitted(false);
    setErrors({});
  }

  function handleAreaChange(e: React.ChangeEvent<HTMLInputElement>) {
    setArea(e.target.value);
    if (errors.area) setErrors((prev) => ({ ...prev, area: undefined }));
  }

  function handleContingencyChange(e: React.ChangeEvent<HTMLInputElement>) {
    setContingencyPercent(e.target.value);
    if (errors.contingency) setErrors((prev) => ({ ...prev, contingency: undefined }));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    blockInvalidNumberKeys(e);
    if (e.key === "Enter") handleCalculate();
  }

  function handleFloorsChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    setFloors(isFloorValue(value) ? value : "1");
  }

  return (
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor={areaId} className={LABEL_CLASS}>
            Construction Area per Floor (sq ft)
          </label>
          <input
            id={areaId}
            type="number"
            inputMode="numeric"
            min={AREA_MIN}
            max={AREA_MAX}
            step="1"
            value={area}
            onChange={handleAreaChange}
            onKeyDown={handleKeyDown}
            placeholder="1000"
            aria-required="true"
            aria-invalid={!!errors.area}
            aria-describedby={errors.area ? areaErrorId : undefined}
            className={errors.area ? INPUT_ERROR_CLASS : INPUT_CLASS}
          />
          {errors.area && (
            <p id={areaErrorId} role="alert" className="mt-1 text-sm text-red-600">
              {errors.area}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={qualityId} className={LABEL_CLASS}>
            Construction Quality
          </label>
          <select
            id={qualityId}
            value={quality}
            onChange={(e) => setQuality(e.target.value as QualityKey)}
            className={INPUT_CLASS}
          >
            {Object.entries(QUALITY_RATES).map(([key, { label }]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={cityId} className={LABEL_CLASS}>
            City Type
          </label>
          <select
            id={cityId}
            value={cityType}
            onChange={(e) => setCityType(e.target.value as CityKey)}
            className={INPUT_CLASS}
          >
            {Object.entries(CITY_MULTIPLIERS).map(([key, { label }]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={floorsId} className={LABEL_CLASS}>
            Floors
          </label>
          <select id={floorsId} value={floors} onChange={handleFloorsChange} className={INPUT_CLASS}>
            {FLOOR_OPTIONS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={plotTypeId} className={LABEL_CLASS}>
            Plot Type
          </label>
          <select
            id={plotTypeId}
            value={plotType}
            onChange={(e) => setPlotType(e.target.value as PlotKey)}
            className={INPUT_CLASS}
          >
            {Object.entries(PLOT_TYPES).map(([key, { label }]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={contingencyId} className={LABEL_CLASS}>
            Contingency Buffer (%)
          </label>
          <input
            id={contingencyId}
            type="number"
            inputMode="decimal"
            min={CONTINGENCY_MIN}
            max={CONTINGENCY_MAX}
            step="0.5"
            value={contingencyPercent}
            onChange={handleContingencyChange}
            onKeyDown={handleKeyDown}
            placeholder="5"
            aria-invalid={!!errors.contingency}
            aria-describedby={errors.contingency ? contingencyErrorId : undefined}
            className={errors.contingency ? INPUT_ERROR_CLASS : INPUT_CLASS}
          />
          {errors.contingency && (
            <p id={contingencyErrorId} role="alert" className="mt-1 text-sm text-red-600">
              {errors.contingency}
            </p>
          )}
        </div>
      </div>

      <fieldset className="mt-6 grid gap-3 sm:grid-cols-2">
        <legend className="sr-only">Optional additions</legend>

        <label htmlFor={interiorId} className="flex items-center gap-3">
          <input
            id={interiorId}
            type="checkbox"
            checked={interior}
            onChange={(e) => setInterior(e.target.checked)}
          />
          Include Interior Work
        </label>

        <label htmlFor={boundaryId} className="flex items-center gap-3">
          <input
            id={boundaryId}
            type="checkbox"
            checked={boundaryWall}
            onChange={(e) => setBoundaryWall(e.target.checked)}
            disabled={plotType === "apartment_renovation"}
            aria-describedby={plotType === "apartment_renovation" ? `${boundaryId}-hint` : undefined}
          />
          Include Boundary Wall
          {plotType === "apartment_renovation" && (
            <span id={`${boundaryId}-hint`} className="text-sm text-gray-400">
              (not applicable to apartments)
            </span>
          )}
        </label>

        <label htmlFor={demolitionId} className="flex items-center gap-3">
          <input
            id={demolitionId}
            type="checkbox"
            checked={demolition}
            onChange={(e) => setDemolition(e.target.checked)}
          />
          Include Demolition (existing structure)
        </label>

        <label htmlFor={architectId} className="flex items-center gap-3">
          <input
            id={architectId}
            type="checkbox"
            checked={includeArchitectFees}
            onChange={(e) => setIncludeArchitectFees(e.target.checked)}
          />
          Include Architect / Design Fees
        </label>
      </fieldset>

      <div className="mt-6 flex gap-4">
        <button
          type="button"
          onClick={handleCalculate}
          className="rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black/40 focus:ring-offset-2"
        >
          Calculate Cost
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
          <h3 className="text-xl font-semibold">Estimated Construction Cost</h3>
          <p className="mt-3 text-4xl font-bold text-blue-700">{formatINR(result.totalCost)}</p>
          <p className="mt-1 text-sm text-gray-500">
            for {result.totalBuiltUpArea.toLocaleString("en-IN")} sq ft total built-up area
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Construction Cost Breakdown"
          results={results}
          calculatorName="House Construction Cost Calculator"
        />
      )}
    </div>
  );
}