"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

// Standard crop-wise nutrient recommendations in kg/hectare (N - P2O5 - K2O)
// These are typical general-purpose values used across Indian agri-extension
// guides. Actual requirement varies with soil test values, variety and
// season, so a "Custom" option is provided for manual entry.
const CROP_DATA = {
  Wheat: { n: 120, p: 60, k: 40 },
  Rice: { n: 120, p: 60, k: 60 },
  Maize: { n: 120, p: 60, k: 40 },
  Cotton: { n: 80, p: 40, k: 40 },
  Sugarcane: { n: 250, p: 100, k: 100 },
  Potato: { n: 150, p: 100, k: 100 },
  Soybean: { n: 20, p: 40, k: 20 },
  Groundnut: { n: 20, p: 40, k: 40 },
  Mustard: { n: 80, p: 40, k: 40 },
  "Chickpea (Gram)": { n: 20, p: 40, k: 20 },
  "Custom (Enter Manually)": null,
} as const;

// % nutrient content of each fertilizer source
const N_SOURCES = {
  Urea: { n: 46 },
  "Ammonium Sulphate": { n: 21 },
  CAN: { n: 26 },
} as const;

const P_SOURCES = {
  DAP: { p: 46, n: 18 }, // DAP also supplies nitrogen
  SSP: { p: 16, n: 0 },
  TSP: { p: 46, n: 0 },
} as const;

const K_SOURCES = {
  MOP: { k: 60 },
  SOP: { k: 50 },
} as const;

type CropType = keyof typeof CROP_DATA;
type NSourceType = keyof typeof N_SOURCES;
type PSourceType = keyof typeof P_SOURCES;
type KSourceType = keyof typeof K_SOURCES;

const ACRE_PER_HECTARE = 2.47105;

export default function FertilizerCalculator() {
  const [cropType, setCropType] = useState<CropType>("Wheat");

  const [customN, setCustomN] = useState("");
  const [customP, setCustomP] = useState("");
  const [customK, setCustomK] = useState("");

  const [area, setArea] = useState("");
  const [areaUnit, setAreaUnit] = useState("Acre");

  const [nSource, setNSource] = useState<NSourceType>("Urea");
  const [pSource, setPSource] = useState<PSourceType>("DAP");
  const [kSource, setKSource] = useState<KSourceType>("MOP");

  const [nPrice, setNPrice] = useState("");
  const [pPrice, setPPrice] = useState("");
  const [kPrice, setKPrice] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const isCustomCrop = cropType === "Custom (Enter Manually)";

  const fertilizerData = useMemo(() => {
    if (!submitted || !area) {
      return null;
    }

    const areaValue = Number(area);

    if (Number.isNaN(areaValue) || areaValue <= 0) {
      return null;
    }

    // Resolve per-hectare N, P2O5, K2O recommendation
    let nPerHa: number;
    let pPerHa: number;
    let kPerHa: number;

    if (isCustomCrop) {
      nPerHa = Number(customN);
      pPerHa = Number(customP);
      kPerHa = Number(customK);

      if (
        Number.isNaN(nPerHa) ||
        Number.isNaN(pPerHa) ||
        Number.isNaN(kPerHa) ||
        nPerHa < 0 ||
        pPerHa < 0 ||
        kPerHa < 0
      ) {
        return null;
      }
    } else {
      const crop = CROP_DATA[cropType];
      if (!crop) return null;
      nPerHa = crop.n;
      pPerHa = crop.p;
      kPerHa = crop.k;
    }

    // Convert area to hectares for calculation
    const areaInHectare =
      areaUnit === "Acre" ? areaValue / ACRE_PER_HECTARE : areaValue;

    // Total nutrient requirement for the whole field (kg)
    const totalN = nPerHa * areaInHectare;
    const totalP = pPerHa * areaInHectare;
    const totalK = kPerHa * areaInHectare;

    // --- Step 1: Phosphorus source quantity (also may supply some N) ---
    const pSourceInfo = P_SOURCES[pSource];
    const pFertQty = totalP / (pSourceInfo.p / 100);
    const nFromPFert = pFertQty * (pSourceInfo.n / 100);

    // --- Step 2: Remaining nitrogen to be met by the N source ---
    const remainingN = Math.max(totalN - nFromPFert, 0);
    const nSourceInfo = N_SOURCES[nSource];
    const nFertQty = remainingN / (nSourceInfo.n / 100);

    // --- Step 3: Potassium source quantity ---
    const kSourceInfo = K_SOURCES[kSource];
    const kFertQty = totalK / (kSourceInfo.k / 100);

    const totalFertilizerQty = nFertQty + pFertQty + kFertQty;

    // --- Optional cost calculation ---
    const nCost = nPrice ? nFertQty * Number(nPrice) : null;
    const pCost = pPrice ? pFertQty * Number(pPrice) : null;
    const kCost = kPrice ? kFertQty * Number(kPrice) : null;

    const hasCost = nCost !== null || pCost !== null || kCost !== null;
    const totalCost = hasCost
      ? (nCost || 0) + (pCost || 0) + (kCost || 0)
      : null;

    return {
      areaInHectare,
      totalN,
      totalP,
      totalK,
      nFromPFert,
      remainingN,
      nFertQty,
      pFertQty,
      kFertQty,
      totalFertilizerQty,
      nCost,
      pCost,
      kCost,
      totalCost,
    };
  }, [
    submitted,
    area,
    areaUnit,
    cropType,
    isCustomCrop,
    customN,
    customP,
    customK,
    nSource,
    pSource,
    kSource,
    nPrice,
    pPrice,
    kPrice,
  ]);

  const fmt = (value: number, digits = 2) =>
    value.toLocaleString("en-IN", {
      maximumFractionDigits: digits,
    });

  const results = fertilizerData
    ? [
        {
          label: "Crop",
          value: isCustomCrop ? "Custom" : cropType,
        },
        {
          label: "Field Area",
          value: `${area} ${areaUnit} (${fmt(
            fertilizerData.areaInHectare,
          )} ha)`,
        },
        {
          label: "Total Nitrogen (N) Required",
          value: `${fmt(fertilizerData.totalN)} kg`,
        },
        {
          label: "Total Phosphorus (P₂O₅) Required",
          value: `${fmt(fertilizerData.totalP)} kg`,
        },
        {
          label: "Total Potassium (K₂O) Required",
          value: `${fmt(fertilizerData.totalK)} kg`,
        },
        {
          label: `${pSource} Required (covers P₂O₅)`,
          value: `${fmt(fertilizerData.pFertQty)} kg`,
        },
        {
          label: `Nitrogen already supplied by ${pSource}`,
          value: `${fmt(fertilizerData.nFromPFert)} kg`,
        },
        {
          label: `${nSource} Required (covers remaining N)`,
          value: `${fmt(fertilizerData.nFertQty)} kg`,
        },
        {
          label: `${kSource} Required (covers K₂O)`,
          value: `${fmt(fertilizerData.kFertQty)} kg`,
        },
        {
          label: "Total Fertilizer Quantity",
          value: `${fmt(fertilizerData.totalFertilizerQty)} kg`,
          highlight: fertilizerData.totalCost === null,
        },
        ...(fertilizerData.totalCost !== null
          ? [
              {
                label: "Estimated Total Cost",
                value: `₹${fmt(fertilizerData.totalCost, 0)}`,
                highlight: true,
              },
            ]
          : []),
      ]
    : [];

  const handleReset = () => {
    setCropType("Wheat");
    setCustomN("");
    setCustomP("");
    setCustomK("");
    setArea("");
    setAreaUnit("Acre");
    setNSource("Urea");
    setPSource("DAP");
    setKSource("MOP");
    setNPrice("");
    setPPrice("");
    setKPrice("");
    setSubmitted(false);
  };

  return (
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold">
        Fertilizer Requirement Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Calculate the exact quantity of Urea, DAP/SSP, and MOP/SOP needed for
        your field, along with total cost, based on standard crop nutrient
        recommendations.
      </p>

      <div className="mt-6">
        <label className="mb-2 block font-medium">Crop Type</label>

        <select
          value={cropType}
          onChange={(e) => setCropType(e.target.value as CropType)}
          className="w-full rounded-xl border p-3"
        >
          {Object.keys(CROP_DATA).map((crop) => (
            <option key={crop}>{crop}</option>
          ))}
        </select>
      </div>

      {isCustomCrop && (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-2 block font-medium">
              N Required (kg/ha)
            </label>
            <input
              type="number"
              value={customN}
              onChange={(e) => setCustomN(e.target.value)}
              placeholder="120"
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              P₂O₅ Required (kg/ha)
            </label>
            <input
              type="number"
              value={customP}
              onChange={(e) => setCustomP(e.target.value)}
              placeholder="60"
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              K₂O Required (kg/ha)
            </label>
            <input
              type="number"
              value={customK}
              onChange={(e) => setCustomK(e.target.value)}
              placeholder="40"
              className="w-full rounded-xl border p-3"
            />
          </div>
        </div>
      )}

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">Field Area</label>
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="5"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Area Unit</label>
          <select
            value={areaUnit}
            onChange={(e) => setAreaUnit(e.target.value)}
            className="w-full rounded-xl border p-3"
          >
            <option>Acre</option>
            <option>Hectare</option>
          </select>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-2 block font-medium">Nitrogen Source</label>
          <select
            value={nSource}
            onChange={(e) => setNSource(e.target.value as NSourceType)}
            className="w-full rounded-xl border p-3"
          >
            {Object.keys(N_SOURCES).map((source) => (
              <option key={source}>{source}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">Phosphorus Source</label>
          <select
            value={pSource}
            onChange={(e) => setPSource(e.target.value as PSourceType)}
            className="w-full rounded-xl border p-3"
          >
            {Object.keys(P_SOURCES).map((source) => (
              <option key={source}>{source}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">Potassium Source</label>
          <select
            value={kSource}
            onChange={(e) => setKSource(e.target.value as KSourceType)}
            className="w-full rounded-xl border p-3"
          >
            {Object.keys(K_SOURCES).map((source) => (
              <option key={source}>{source}</option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-6 text-sm font-medium text-slate-500">
        Fertilizer Prices (₹/kg) — optional, for cost estimate
      </p>

      <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label className="mb-2 block font-medium">{nSource} Price</label>
          <input
            type="number"
            value={nPrice}
            onChange={(e) => setNPrice(e.target.value)}
            placeholder="6"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">{pSource} Price</label>
          <input
            type="number"
            value={pPrice}
            onChange={(e) => setPPrice(e.target.value)}
            placeholder="27"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">{kSource} Price</label>
          <input
            type="number"
            value={kPrice}
            onChange={(e) => setKPrice(e.target.value)}
            placeholder="17"
            className="w-full rounded-xl border p-3"
          />
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate Fertilizer Requirement
        </button>

        <button
          onClick={handleReset}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {fertilizerData && (
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center">
          <h3 className="text-xl font-semibold">Fertilizer Summary</h3>

          <p className="mt-2 text-slate-600">
            You will need approximately{" "}
            <strong>{fmt(fertilizerData.nFertQty)} kg {nSource}</strong>,{" "}
            <strong>{fmt(fertilizerData.pFertQty)} kg {pSource}</strong>, and{" "}
            <strong>{fmt(fertilizerData.kFertQty)} kg {kSource}</strong>
            {fertilizerData.totalCost !== null && (
              <>
                {" "}at an estimated cost of{" "}
                <strong>₹{fmt(fertilizerData.totalCost, 0)}</strong>
              </>
            )}
            .
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Fertilizer Requirement Results"
          results={results}
          calculatorName="Fertilizer Requirement Results"
        />
      )}

      <p className="mt-6 text-xs text-slate-400">
        Note: Recommendations are general-purpose averages. For best
        accuracy, calibrate the nutrient values against a soil test report
        for your specific field.
      </p>
    </div>
  );
}