"use client";

import { useCallback, useId, useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

// ---- Static config (kept outside component so it doesn't get rebuilt every render) ----

const ROOM_UNITS = {
  ft: { label: "Feet (ft)", toFeet: 1 },
  m: { label: "Metres (m)", toFeet: 3.28084 },
} as const;

const TILE_PRESETS = {
  "300x300": { label: "300 x 300 mm", lengthMm: 300, widthMm: 300, tilesPerBox: 14 },
  "400x400": { label: "400 x 400 mm", lengthMm: 400, widthMm: 400, tilesPerBox: 9 },
  "600x600": { label: "600 x 600 mm", lengthMm: 600, widthMm: 600, tilesPerBox: 4 },
  "800x800": { label: "800 x 800 mm", lengthMm: 800, widthMm: 800, tilesPerBox: 2 },
  "1200x600": { label: "1200 x 600 mm", lengthMm: 1200, widthMm: 600, tilesPerBox: 2 },
  custom: { label: "Custom Size", lengthMm: 0, widthMm: 0, tilesPerBox: 0 },
} as const;

const LAYOUT_WASTAGE = {
  grid_simple: { label: "Simple Grid — Rectangular Room", wastage: 7 },
  grid_complex: { label: "Grid — Room with Corners / Fixtures", wastage: 9 },
  diagonal: { label: "Diagonal (45°) Layout", wastage: 12 },
  herringbone: { label: "Herringbone / Complex Pattern", wastage: 18 },
} as const;

const JOINT_WIDTHS = {
  "2": { label: "2 mm (Tight / Modern)", groutFactor: 0.35 },
  "3": { label: "3 mm", groutFactor: 0.5 },
  "4": { label: "4 mm (Standard)", groutFactor: 0.65 },
  "5": { label: "5 mm", groutFactor: 0.85 },
  "6": { label: "6 mm+ (Rustic / Traditional)", groutFactor: 1.05 },
} as const;

type RoomUnitKey = keyof typeof ROOM_UNITS;
type TileSizeKey = keyof typeof TILE_PRESETS;
type LayoutKey = keyof typeof LAYOUT_WASTAGE;
type JointKey = keyof typeof JOINT_WIDTHS;
type PriceMode = "perBox" | "perSqFt";

function isTileSizeKey(v: string): v is TileSizeKey {
  return Object.prototype.hasOwnProperty.call(TILE_PRESETS, v);
}
function isLayoutKey(v: string): v is LayoutKey {
  return Object.prototype.hasOwnProperty.call(LAYOUT_WASTAGE, v);
}
function isJointKey(v: string): v is JointKey {
  return Object.prototype.hasOwnProperty.call(JOINT_WIDTHS, v);
}
function isRoomUnitKey(v: string): v is RoomUnitKey {
  return Object.prototype.hasOwnProperty.call(ROOM_UNITS, v);
}

// Sane real-world bounds — tune these to your market if needed
const DIMENSION_MIN = 0.5; // per section, in chosen unit
const DIMENSION_MAX = 500;
const WASTAGE_MIN = 0;
const WASTAGE_MAX = 30;
const TILES_PER_BOX_MIN = 1;
const TILES_PER_BOX_MAX = 200;
const TILE_SIDE_MM_MIN = 50;
const TILE_SIDE_MM_MAX = 2000;

const MM_TO_FT = 1 / 304.8;
const SQFT_TO_SQM = 1 / 10.7639;

const INPUT_CLASS =
  "w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-black/10";
const INPUT_ERROR_CLASS =
  "w-full rounded-xl border border-red-500 p-3 focus:outline-none focus:ring-2 focus:ring-red-200";
const LABEL_CLASS = "mb-2 block font-medium";

function formatINR(value: number) {
  if (!Number.isFinite(value)) return "—";
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

function formatNumber(value: number, decimals = 2) {
  if (!Number.isFinite(value)) return "—";
  return value.toLocaleString("en-IN", { maximumFractionDigits: decimals });
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

let sectionIdCounter = 0;
function makeSectionId() {
  sectionIdCounter += 1;
  return `tile-section-${sectionIdCounter}`;
}

interface RoomSection {
  id: string;
  length: string;
  width: string;
}

interface FormErrors {
  sections?: string;
  tileSize?: string;
  tilesPerBox?: string;
  wastage?: string;
  price?: string;
}

export default function TileCalculator() {
  // Stable unique ids so every <label htmlFor> / aria-describedby pairing is guaranteed
  // unique even if this component is rendered more than once on the same page.
  const roomUnitId = useId();
  const sectionsErrorId = useId();
  const tileSizeId = useId();
  const customLengthId = useId();
  const customWidthId = useId();
  const tileSizeErrorId = useId();
  const tilesPerBoxOverrideId = useId();
  const tilesPerBoxErrorId = useId();
  const layoutId = useId();
  const customWastageId = useId();
  const wastageErrorId = useId();
  const jointWidthId = useId();
  const substrateId = useId();
  const priceModeId = useId();
  const priceId = useId();
  const priceErrorId = useId();

  const [roomUnit, setRoomUnit] = useState<RoomUnitKey>("ft");
  const [sections, setSections] = useState<RoomSection[]>([
    { id: makeSectionId(), length: "", width: "" },
  ]);

  const [tileSizeKey, setTileSizeKey] = useState<TileSizeKey>("600x600");
  const [customTileLength, setCustomTileLength] = useState("");
  const [customTileWidth, setCustomTileWidth] = useState("");
  const [useCustomTilesPerBox, setUseCustomTilesPerBox] = useState(false);
  const [tilesPerBoxOverride, setTilesPerBoxOverride] = useState("");

  const [layoutKey, setLayoutKey] = useState<LayoutKey>("grid_simple");
  const [useCustomWastage, setUseCustomWastage] = useState(false);
  const [customWastage, setCustomWastage] = useState("7");

  const [jointWidthKey, setJointWidthKey] = useState<JointKey>("4");
  const [substrateUneven, setSubstrateUneven] = useState(false);

  const [priceMode, setPriceMode] = useState<PriceMode>("perBox");
  const [price, setPrice] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  // ---- Section row handlers ----
  const handleSectionChange = useCallback(
    (id: string, field: "length" | "width", value: string) => {
      setSections((prev) =>
        prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
      );
      setErrors((prev) => (prev.sections ? { ...prev, sections: undefined } : prev));
    },
    []
  );

  const handleAddSection = useCallback(() => {
    setSections((prev) => [...prev, { id: makeSectionId(), length: "", width: "" }]);
  }, []);

  const handleRemoveSection = useCallback((id: string) => {
    setSections((prev) => (prev.length > 1 ? prev.filter((s) => s.id !== id) : prev));
  }, []);

  // ---- Validation (single source of truth, reused by calculate + the memoized result) ----
  const validate = useCallback((): { ok: boolean; errors: FormErrors } => {
    const next: FormErrors = {};

    let anySectionFilled = false;
    let anySectionInvalid = false;
    for (const s of sections) {
      const lengthTrim = s.length.trim();
      const widthTrim = s.width.trim();
      if (lengthTrim === "" && widthTrim === "") continue; // allow blank extra rows

      const l = Number(lengthTrim);
      const w = Number(widthTrim);
      anySectionFilled = true;

      if (
        lengthTrim === "" ||
        widthTrim === "" ||
        Number.isNaN(l) ||
        Number.isNaN(w) ||
        l < DIMENSION_MIN ||
        w < DIMENSION_MIN ||
        l > DIMENSION_MAX ||
        w > DIMENSION_MAX
      ) {
        anySectionInvalid = true;
      }
    }
    if (!anySectionFilled) {
      next.sections = "Enter the length and width for at least one room section.";
    } else if (anySectionInvalid) {
      next.sections = `Each section's length and width must be between ${DIMENSION_MIN} and ${DIMENSION_MAX} ${ROOM_UNITS[roomUnit].label.toLowerCase()}.`;
    }

    if (tileSizeKey === "custom") {
      const l = Number(customTileLength);
      const w = Number(customTileWidth);
      if (
        customTileLength.trim() === "" ||
        customTileWidth.trim() === "" ||
        Number.isNaN(l) ||
        Number.isNaN(w) ||
        l < TILE_SIDE_MM_MIN ||
        w < TILE_SIDE_MM_MIN ||
        l > TILE_SIDE_MM_MAX ||
        w > TILE_SIDE_MM_MAX
      ) {
        next.tileSize = `Enter a valid tile length and width in mm (${TILE_SIDE_MM_MIN}-${TILE_SIDE_MM_MAX}).`;
      }
    }

    if (tileSizeKey === "custom" || useCustomTilesPerBox) {
      const t = Number(tilesPerBoxOverride);
      if (
        tilesPerBoxOverride.trim() === "" ||
        Number.isNaN(t) ||
        t < TILES_PER_BOX_MIN ||
        t > TILES_PER_BOX_MAX
      ) {
        next.tilesPerBox = `Enter tiles per box (${TILES_PER_BOX_MIN}-${TILES_PER_BOX_MAX}).`;
      }
    }

    if (useCustomWastage) {
      const w = Number(customWastage);
      if (
        customWastage.trim() === "" ||
        Number.isNaN(w) ||
        w < WASTAGE_MIN ||
        w > WASTAGE_MAX
      ) {
        next.wastage = `Wastage must be between ${WASTAGE_MIN} and ${WASTAGE_MAX}%.`;
      }
    }

    if (price.trim() !== "") {
      const p = Number(price);
      if (Number.isNaN(p) || p <= 0) {
        next.price = "Enter a valid positive price, or leave blank to skip cost.";
      }
    }

    return { ok: Object.keys(next).length === 0, errors: next };
  }, [
    sections,
    roomUnit,
    tileSizeKey,
    customTileLength,
    customTileWidth,
    useCustomTilesPerBox,
    tilesPerBoxOverride,
    useCustomWastage,
    customWastage,
    price,
  ]);

  const result = useMemo(() => {
    if (!submitted) return null;

    const { ok } = validate();
    if (!ok) return null;

    const unitToFeet = ROOM_UNITS[roomUnit].toFeet;

    let totalAreaSqFt = 0;
    for (const s of sections) {
      const l = Number(s.length);
      const w = Number(s.width);
      if (!l || !w) continue;
      totalAreaSqFt += l * unitToFeet * (w * unitToFeet);
    }
    if (!Number.isFinite(totalAreaSqFt) || totalAreaSqFt <= 0) return null;

    const preset = TILE_PRESETS[tileSizeKey];
    const tileLengthMm = tileSizeKey === "custom" ? Number(customTileLength) : preset.lengthMm;
    const tileWidthMm = tileSizeKey === "custom" ? Number(customTileWidth) : preset.widthMm;
    const tileAreaSqFt = tileLengthMm * MM_TO_FT * (tileWidthMm * MM_TO_FT);
    if (!Number.isFinite(tileAreaSqFt) || tileAreaSqFt <= 0) return null;

    const tilesPerBox =
      tileSizeKey === "custom" || useCustomTilesPerBox
        ? Number(tilesPerBoxOverride)
        : preset.tilesPerBox;
    if (!tilesPerBox || tilesPerBox <= 0) return null;

    const wastagePercent = useCustomWastage
      ? clampNumber(Number(customWastage), WASTAGE_MIN, WASTAGE_MAX) ?? 0
      : LAYOUT_WASTAGE[layoutKey].wastage;

    // Core formula: Tiles Required = (Area ÷ Tile Area) × (1 + Wastage%)
    const theoreticalTiles = totalAreaSqFt / tileAreaSqFt;
    const tilesWithWastage = theoreticalTiles * (1 + wastagePercent / 100);
    const boxesRequired = Math.ceil(tilesWithWastage / tilesPerBox);
    const tilesToBuy = boxesRequired * tilesPerBox;
    const coverageSqFt = tilesToBuy * tileAreaSqFt;
    const leftoverTiles = tilesToBuy - tilesWithWastage;

    // Grout: smaller tiles + wider joints need proportionally more grout per sq m
    const totalAreaSqM = totalAreaSqFt * SQFT_TO_SQM;
    const jointFactor = JOINT_WIDTHS[jointWidthKey].groutFactor;
    const tileSizeGroutMultiplier =
      tileAreaSqFt <= 1.1 ? 1.4 : tileAreaSqFt <= 2 ? 1.2 : tileAreaSqFt <= 4.2 ? 1.0 : 0.8;
    const groutKg = totalAreaSqM * jointFactor * tileSizeGroutMultiplier * 1.1; // +10% mixing/spillage buffer

    // Adhesive: larger tiles need a bigger trowel notch; uneven substrate needs a thicker bed
    const adhesiveBaseKgPerSqm = tileAreaSqFt <= 1.1 ? 3 : tileAreaSqFt <= 4.2 ? 4 : 5;
    const adhesiveMultiplier = substrateUneven ? 1.5 : 1;
    const adhesiveKg = totalAreaSqM * adhesiveBaseKgPerSqm * adhesiveMultiplier * 1.1; // +10% buffer

    let totalCost: number | null = null;
    if (price.trim() !== "") {
      const p = Number(price);
      totalCost = priceMode === "perBox" ? boxesRequired * p : coverageSqFt * p;
    }

    if (
      !Number.isFinite(theoreticalTiles) ||
      !Number.isFinite(boxesRequired) ||
      !Number.isFinite(coverageSqFt) ||
      !Number.isFinite(groutKg) ||
      !Number.isFinite(adhesiveKg)
    ) {
      return null;
    }

    return {
      totalAreaSqFt,
      tileAreaSqFt,
      wastagePercent,
      theoreticalTiles,
      tilesWithWastage,
      tilesPerBox,
      boxesRequired,
      tilesToBuy,
      coverageSqFt,
      leftoverTiles,
      groutKg,
      adhesiveKg,
      totalCost,
    };
  }, [
    submitted,
    validate,
    sections,
    roomUnit,
    tileSizeKey,
    customTileLength,
    customTileWidth,
    useCustomTilesPerBox,
    tilesPerBoxOverride,
    useCustomWastage,
    customWastage,
    layoutKey,
    jointWidthKey,
    substrateUneven,
    priceMode,
    price,
  ]);

  const results = result
    ? [
        { label: "Total Room Area", value: `${formatNumber(result.totalAreaSqFt)} sq ft`, highlight: true },
        { label: "Tiles Required (incl. wastage)", value: `${Math.ceil(result.tilesWithWastage)} tiles` },
        { label: "Boxes to Buy", value: `${result.boxesRequired} boxes (${result.tilesPerBox}/box)` },
        { label: "Total Tiles in Boxes Bought", value: `${result.tilesToBuy} tiles` },
        { label: "Coverage from Boxes Bought", value: `${formatNumber(result.coverageSqFt)} sq ft` },
        { label: "Spare Tiles After Install", value: `${formatNumber(result.leftoverTiles, 1)} tiles` },
        { label: "Wastage Applied", value: `${result.wastagePercent}%` },
        { label: "Estimated Grout Needed", value: `${formatNumber(result.groutKg, 1)} kg` },
        { label: "Estimated Adhesive Needed", value: `${formatNumber(result.adhesiveKg, 1)} kg` },
        ...(result.totalCost !== null
          ? [{ label: "Estimated Tile Cost", value: formatINR(result.totalCost) }]
          : []),
      ]
    : [];

  function handleCalculate() {
    const { ok, errors: validationErrors } = validate();
    setErrors(validationErrors);
    setSubmitted(ok);
  }

  function handleReset() {
    setRoomUnit("ft");
    setSections([{ id: makeSectionId(), length: "", width: "" }]);
    setTileSizeKey("600x600");
    setCustomTileLength("");
    setCustomTileWidth("");
    setUseCustomTilesPerBox(false);
    setTilesPerBoxOverride("");
    setLayoutKey("grid_simple");
    setUseCustomWastage(false);
    setCustomWastage("7");
    setJointWidthKey("4");
    setSubstrateUneven(false);
    setPriceMode("perBox");
    setPrice("");
    setSubmitted(false);
    setErrors({});
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    blockInvalidNumberKeys(e);
    if (e.key === "Enter") handleCalculate();
  }

  function handleTileSizeChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    setTileSizeKey(isTileSizeKey(value) ? value : "600x600");
    if (errors.tileSize || errors.tilesPerBox) {
      setErrors((prev) => ({ ...prev, tileSize: undefined, tilesPerBox: undefined }));
    }
  }

  function handlePriceChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPrice(e.target.value);
    if (errors.price) setErrors((prev) => ({ ...prev, price: undefined }));
  }

  function handleCustomWastageChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCustomWastage(e.target.value);
    if (errors.wastage) setErrors((prev) => ({ ...prev, wastage: undefined }));
  }

  function handleTilesPerBoxOverrideChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTilesPerBoxOverride(e.target.value);
    if (errors.tilesPerBox) setErrors((prev) => ({ ...prev, tilesPerBox: undefined }));
  }

  const isCustomTileSize = tileSizeKey === "custom";

  return (
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      {/* ---- Room area (multi-section for irregular rooms) ---- */}
      <div className="mb-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <label htmlFor={roomUnitId} className={LABEL_CLASS + " mb-0"}>
            Room Dimensions
          </label>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Unit</span>
            <select
              id={roomUnitId}
              value={roomUnit}
              onChange={(e) =>
                setRoomUnit(isRoomUnitKey(e.target.value) ? e.target.value : "ft")
              }
              className="rounded-lg border p-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
            >
              {Object.entries(ROOM_UNITS).map(([key, { label }]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="mb-3 text-sm text-gray-500">
          For an irregular room, split it into rectangular sections and add each one below.
        </p>

        <div className="space-y-3">
          {sections.map((s, i) => (
            <div
              key={s.id}
              className="grid grid-cols-1 gap-3 rounded-xl border p-3 sm:grid-cols-[1fr_1fr_auto] sm:items-end"
            >
              <div>
                <label htmlFor={`${s.id}-length`} className="mb-1 block text-sm font-medium">
                  Section {i + 1} — Length ({ROOM_UNITS[roomUnit].label})
                </label>
                <input
                  id={`${s.id}-length`}
                  type="number"
                  inputMode="decimal"
                  min={DIMENSION_MIN}
                  max={DIMENSION_MAX}
                  step="0.1"
                  value={s.length}
                  onChange={(e) => handleSectionChange(s.id, "length", e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="10"
                  aria-invalid={!!errors.sections}
                  aria-describedby={errors.sections ? sectionsErrorId : undefined}
                  className={errors.sections ? INPUT_ERROR_CLASS : INPUT_CLASS}
                />
              </div>

              <div>
                <label htmlFor={`${s.id}-width`} className="mb-1 block text-sm font-medium">
                  Section {i + 1} — Width ({ROOM_UNITS[roomUnit].label})
                </label>
                <input
                  id={`${s.id}-width`}
                  type="number"
                  inputMode="decimal"
                  min={DIMENSION_MIN}
                  max={DIMENSION_MAX}
                  step="0.1"
                  value={s.width}
                  onChange={(e) => handleSectionChange(s.id, "width", e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="12"
                  aria-invalid={!!errors.sections}
                  aria-describedby={errors.sections ? sectionsErrorId : undefined}
                  className={errors.sections ? INPUT_ERROR_CLASS : INPUT_CLASS}
                />
              </div>

              <button
                type="button"
                onClick={() => handleRemoveSection(s.id)}
                disabled={sections.length === 1}
                className="h-fit rounded-xl border px-4 py-3 text-sm transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label={`Remove section ${i + 1}`}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {errors.sections && (
          <p id={sectionsErrorId} role="alert" className="mt-2 text-sm text-red-600">
            {errors.sections}
          </p>
        )}

        <button
          type="button"
          onClick={handleAddSection}
          className="mt-3 rounded-xl border px-4 py-2 text-sm transition hover:bg-gray-50"
        >
          + Add Another Section
        </button>
      </div>

      {/* ---- Tile size, layout/wastage, joint width ---- */}
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor={tileSizeId} className={LABEL_CLASS}>
            Tile Size
          </label>
          <select
            id={tileSizeId}
            value={tileSizeKey}
            onChange={handleTileSizeChange}
            className={INPUT_CLASS}
          >
            {Object.entries(TILE_PRESETS).map(([key, { label }]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={layoutId} className={LABEL_CLASS}>
            Layout Pattern
          </label>
          <select
            id={layoutId}
            value={layoutKey}
            onChange={(e) =>
              setLayoutKey(isLayoutKey(e.target.value) ? e.target.value : "grid_simple")
            }
            disabled={useCustomWastage}
            className={INPUT_CLASS + (useCustomWastage ? " opacity-50" : "")}
          >
            {Object.entries(LAYOUT_WASTAGE).map(([key, { label, wastage }]) => (
              <option key={key} value={key}>
                {label} (~{wastage}% wastage)
              </option>
            ))}
          </select>
        </div>

        {isCustomTileSize && (
          <>
            <div>
              <label htmlFor={customLengthId} className={LABEL_CLASS}>
                Custom Tile Length (mm)
              </label>
              <input
                id={customLengthId}
                type="number"
                inputMode="numeric"
                min={TILE_SIDE_MM_MIN}
                max={TILE_SIDE_MM_MAX}
                step="1"
                value={customTileLength}
                onChange={(e) => {
                  setCustomTileLength(e.target.value);
                  if (errors.tileSize) setErrors((p) => ({ ...p, tileSize: undefined }));
                }}
                onKeyDown={handleKeyDown}
                placeholder="600"
                aria-invalid={!!errors.tileSize}
                aria-describedby={errors.tileSize ? tileSizeErrorId : undefined}
                className={errors.tileSize ? INPUT_ERROR_CLASS : INPUT_CLASS}
              />
            </div>

            <div>
              <label htmlFor={customWidthId} className={LABEL_CLASS}>
                Custom Tile Width (mm)
              </label>
              <input
                id={customWidthId}
                type="number"
                inputMode="numeric"
                min={TILE_SIDE_MM_MIN}
                max={TILE_SIDE_MM_MAX}
                step="1"
                value={customTileWidth}
                onChange={(e) => {
                  setCustomTileWidth(e.target.value);
                  if (errors.tileSize) setErrors((p) => ({ ...p, tileSize: undefined }));
                }}
                onKeyDown={handleKeyDown}
                placeholder="600"
                aria-invalid={!!errors.tileSize}
                aria-describedby={errors.tileSize ? tileSizeErrorId : undefined}
                className={errors.tileSize ? INPUT_ERROR_CLASS : INPUT_CLASS}
              />
            </div>
            {errors.tileSize && (
              <p id={tileSizeErrorId} role="alert" className="text-sm text-red-600 md:col-span-2">
                {errors.tileSize}
              </p>
            )}
          </>
        )}

        <div>
          <label htmlFor={jointWidthId} className={LABEL_CLASS}>
            Grout Joint Width
          </label>
          <select
            id={jointWidthId}
            value={jointWidthKey}
            onChange={(e) =>
              setJointWidthKey(isJointKey(e.target.value) ? e.target.value : "4")
            }
            className={INPUT_CLASS}
          >
            {Object.entries(JOINT_WIDTHS).map(([key, { label }]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={priceModeId} className={LABEL_CLASS}>
            Price Basis (optional, for cost estimate)
          </label>
          <div className="flex gap-2">
            <select
              id={priceModeId}
              value={priceMode}
              onChange={(e) => setPriceMode(e.target.value as PriceMode)}
              className={INPUT_CLASS + " w-auto"}
            >
              <option value="perBox">Per Box (₹)</option>
              <option value="perSqFt">Per Sq Ft (₹)</option>
            </select>
            <input
              id={priceId}
              type="number"
              inputMode="decimal"
              min={0}
              step="0.01"
              value={price}
              onChange={handlePriceChange}
              onKeyDown={handleKeyDown}
              placeholder={priceMode === "perBox" ? "e.g. 1200" : "e.g. 65"}
              aria-invalid={!!errors.price}
              aria-describedby={errors.price ? priceErrorId : undefined}
              className={errors.price ? INPUT_ERROR_CLASS : INPUT_CLASS}
            />
          </div>
          {errors.price && (
            <p id={priceErrorId} role="alert" className="mt-1 text-sm text-red-600">
              {errors.price}
            </p>
          )}
        </div>
      </div>

      {/* ---- Overrides & extra options ---- */}
      <fieldset className="mt-6 grid gap-4 sm:grid-cols-2">
        <legend className="sr-only">Advanced overrides and site conditions</legend>

        <div>
          <label htmlFor={tilesPerBoxOverrideId} className="flex items-center gap-3">
            <input
              id={`${tilesPerBoxOverrideId}-toggle`}
              type="checkbox"
              checked={useCustomTilesPerBox}
              onChange={(e) => {
                setUseCustomTilesPerBox(e.target.checked);
                if (errors.tilesPerBox) setErrors((p) => ({ ...p, tilesPerBox: undefined }));
              }}
              disabled={isCustomTileSize}
            />
            Override tiles per box
            {isCustomTileSize && (
              <span className="text-sm text-gray-400">(required for custom size)</span>
            )}
          </label>
          {(useCustomTilesPerBox || isCustomTileSize) && (
            <>
              <input
                id={tilesPerBoxOverrideId}
                type="number"
                inputMode="numeric"
                min={TILES_PER_BOX_MIN}
                max={TILES_PER_BOX_MAX}
                step="1"
                value={tilesPerBoxOverride}
                onChange={handleTilesPerBoxOverrideChange}
                onKeyDown={handleKeyDown}
                placeholder="4"
                aria-invalid={!!errors.tilesPerBox}
                aria-describedby={errors.tilesPerBox ? tilesPerBoxErrorId : undefined}
                className={(errors.tilesPerBox ? INPUT_ERROR_CLASS : INPUT_CLASS) + " mt-2"}
              />
              {errors.tilesPerBox && (
                <p id={tilesPerBoxErrorId} role="alert" className="mt-1 text-sm text-red-600">
                  {errors.tilesPerBox}
                </p>
              )}
            </>
          )}
        </div>

        <div>
          <label htmlFor={customWastageId} className="flex items-center gap-3">
            <input
              id={`${customWastageId}-toggle`}
              type="checkbox"
              checked={useCustomWastage}
              onChange={(e) => {
                setUseCustomWastage(e.target.checked);
                if (errors.wastage) setErrors((p) => ({ ...p, wastage: undefined }));
              }}
            />
            Override wastage %
          </label>
          {useCustomWastage && (
            <>
              <input
                id={customWastageId}
                type="number"
                inputMode="decimal"
                min={WASTAGE_MIN}
                max={WASTAGE_MAX}
                step="0.5"
                value={customWastage}
                onChange={handleCustomWastageChange}
                onKeyDown={handleKeyDown}
                placeholder="7"
                aria-invalid={!!errors.wastage}
                aria-describedby={errors.wastage ? wastageErrorId : undefined}
                className={(errors.wastage ? INPUT_ERROR_CLASS : INPUT_CLASS) + " mt-2"}
              />
              {errors.wastage && (
                <p id={wastageErrorId} role="alert" className="mt-1 text-sm text-red-600">
                  {errors.wastage}
                </p>
              )}
            </>
          )}
        </div>

        <label htmlFor={substrateId} className="flex items-center gap-3 sm:col-span-2">
          <input
            id={substrateId}
            type="checkbox"
            checked={substrateUneven}
            onChange={(e) => setSubstrateUneven(e.target.checked)}
          />
          Substrate is uneven (needs a thicker adhesive bed)
        </label>
      </fieldset>

      <div className="mt-6 flex gap-4">
        <button
          type="button"
          onClick={handleCalculate}
          className="rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black/40 focus:ring-offset-2"
        >
          Calculate Tiles
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
          <h3 className="text-xl font-semibold">Boxes You Need to Buy</h3>
          <p className="mt-3 text-4xl font-bold text-blue-700">{result.boxesRequired} boxes</p>
          <p className="mt-1 text-sm text-gray-500">
            covering {formatNumber(result.coverageSqFt)} sq ft for a {formatNumber(result.totalAreaSqFt)} sq ft room
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Tile Quantity Breakdown"
          results={results}
          calculatorName="Tile Calculator"
        />
      )}

      <p className="mt-6 text-xs text-gray-400">
        Estimates only — always confirm the exact tiles-per-box figure and coverage printed on
        your chosen product before purchasing, and cross-check with your supplier or contractor.
      </p>
    </div>
  );
}