"use client";

import { useMemo, useState } from "react";
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

const INPUT_CLASS =
  "w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-black/10";
const LABEL_CLASS = "mb-2 block font-medium";

function formatINR(value: number) {
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

export default function HouseConstructionCostCalculator() {
  const [area, setArea] = useState("");
  const [quality, setQuality] = useState<QualityKey>("standard");
  const [cityType, setCityType] = useState<CityKey>("tier2");
  const [floors, setFloors] = useState("1");
  const [plotType, setPlotType] = useState<PlotKey>("individual");

  const [interior, setInterior] = useState(false);
  const [boundaryWall, setBoundaryWall] = useState(false);
  const [demolition, setDemolition] = useState(false);
  const [includeArchitectFees, setIncludeArchitectFees] = useState(false);
  const [contingencyPercent, setContingencyPercent] = useState("5");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const result = useMemo(() => {
    if (!submitted) return null;

    const sqFt = Number(area);
    if (!area || Number.isNaN(sqFt) || sqFt <= 0) return null;

    const numFloors = Number(floors) || 1;
    const totalBuiltUpArea = sqFt * numFloors;

    const baseRate = QUALITY_RATES[quality]?.rate ?? QUALITY_RATES.standard.rate;
    const cityMultiplier = CITY_MULTIPLIERS[cityType]?.multiplier ?? 1;
    const plotMultiplier = PLOT_TYPES[plotType]?.costMultiplier ?? 1;

    // Core structural + finishing cost, scales with built-up area across all floors
    const coreConstructionCost =
      totalBuiltUpArea * baseRate * cityMultiplier * plotMultiplier;

    const interiorCost = interior ? coreConstructionCost * 0.15 : 0;
    const boundaryCost = boundaryWall ? sqFt * 350 : 0; // boundary scales with plot footprint, not built-up area
    const demolitionCost = demolition ? sqFt * 120 : 0;
    const architectFees = includeArchitectFees ? coreConstructionCost * 0.03 : 0;

    const subtotal =
      coreConstructionCost +
      interiorCost +
      boundaryCost +
      demolitionCost +
      architectFees;

    const contingencyRate = Math.min(Math.max(Number(contingencyPercent) || 0, 0), 25) / 100;
    const contingencyCost = subtotal * contingencyRate;

    const totalCost = subtotal + contingencyCost;

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
        { label: "Effective Cost / Sq Ft", value: `₹${Math.round(result.effectiveRatePerSqFt)}` },
      ]
    : [];

  function handleCalculate() {
    const sqFt = Number(area);
    if (!area || Number.isNaN(sqFt) || sqFt <= 0) {
      setError("Please enter a valid construction area greater than 0.");
      setSubmitted(false);
      return;
    }
    setError("");
    setSubmitted(true);
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
    setError("");
  }

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={LABEL_CLASS}>Construction Area per Floor (sq ft)</label>
          <input
            type="number"
            min="1"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="1000"
            className={INPUT_CLASS}
          />
        </div>

        <div>
          <label className={LABEL_CLASS}>Construction Quality</label>
          <select
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
          <label className={LABEL_CLASS}>City Type</label>
          <select
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
          <label className={LABEL_CLASS}>Floors</label>
          <select
            value={floors}
            onChange={(e) => setFloors(e.target.value)}
            className={INPUT_CLASS}
          >
            {FLOOR_OPTIONS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={LABEL_CLASS}>Plot Type</label>
          <select
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
          <label className={LABEL_CLASS}>Contingency Buffer (%)</label>
          <input
            type="number"
            min="0"
            max="25"
            value={contingencyPercent}
            onChange={(e) => setContingencyPercent(e.target.value)}
            placeholder="5"
            className={INPUT_CLASS}
          />
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={interior}
            onChange={(e) => setInterior(e.target.checked)}
          />
          Include Interior Work
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={boundaryWall}
            onChange={(e) => setBoundaryWall(e.target.checked)}
          />
          Include Boundary Wall
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={demolition}
            onChange={(e) => setDemolition(e.target.checked)}
          />
          Include Demolition (existing structure)
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={includeArchitectFees}
            onChange={(e) => setIncludeArchitectFees(e.target.checked)}
          />
          Include Architect / Design Fees
        </label>
      </div>

      {error && (
        <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-600">
          {error}
        </p>
      )}

      <div className="mt-6 flex gap-4">
        <button
          onClick={handleCalculate}
          className="rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800"
        >
          Calculate Cost
        </button>

        <button
          onClick={handleReset}
          className="rounded-xl border px-6 py-3 transition hover:bg-gray-50"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center">
          <h3 className="text-xl font-semibold">Estimated Construction Cost</h3>
          <p className="mt-3 text-4xl font-bold text-blue-700">
            {formatINR(result.totalCost)}
          </p>
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