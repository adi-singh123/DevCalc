"use client";

import { useCallback, useId, useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

// ---- Static config (kept outside component so it doesn't get rebuilt every render) ----

const BAR_SHAPES = {
  straight: { label: "Straight Bar" },
  rect_stirrup: { label: "Rectangular Stirrup / Ring" },
  circular_ring: { label: "Circular Ring / Spiral Ring" },
  l_bend: { label: "L-Bend / Cranked Bar" },
} as const;

const STANDARD_DIAMETERS = [6, 8, 10, 12, 16, 20, 25, 28, 32, 36, 40] as const;

const BEND_ANGLES = {
  "45": { label: "45° (Slab Crank Bar)" },
  "90": { label: "90° (L-Bend)" },
  "135": { label: "135° (Standard Hook Bend)" },
} as const;

/** Standard bend deduction, in multiples of bar diameter (d), per IS 2502. */
const BEND_DEDUCTION_MULTIPLIER: Record<keyof typeof BEND_ANGLES, number> = {
  "45": 1,
  "90": 2,
  "135": 3,
};

type ShapeKey = keyof typeof BAR_SHAPES;
type BendAngleKey = keyof typeof BEND_ANGLES;

// Sane real-world bounds (mm unless noted) — tune to your market if needed
const SEGMENT_LEN_MIN = 50;
const SEGMENT_LEN_MAX = 12000; // ~standard 12m bar stock
const DIM_MIN = 100;
const DIM_MAX = 3000; // beam / column cross-section
const RING_DIA_MIN = 100;
const RING_DIA_MAX = 3000; // column diameter
const COVER_MIN = 10;
const COVER_MAX = 75;
const HOOK_MULT_MIN = 4;
const HOOK_MULT_MAX = 15;
const PIECES_MIN = 1;
const PIECES_MAX = 100000;
const RATE_MIN = 0;
const RATE_MAX = 500; // ₹ per kg

const INPUT_CLASS =
  "w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-black/10";
const INPUT_ERROR_CLASS =
  "w-full rounded-xl border border-red-500 p-3 focus:outline-none focus:ring-2 focus:ring-red-200";
const LABEL_CLASS = "mb-2 block font-medium";
const HINT_CLASS = "mt-1 text-sm text-gray-400";

function formatINR(value: number) {
  if (!Number.isFinite(value)) return "—";
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

function formatNumber(value: number, decimals = 0) {
  if (!Number.isFinite(value)) return "—";
  return value.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
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
  length?: string;
  width?: string;
  depth?: string;
  ringDiameter?: string;
  cover?: string;
  hookMultiplier?: string;
  length1?: string;
  length2?: string;
  pieces?: string;
  rate?: string;
}

export default function RebarCuttingLengthCalculator() {
  // Stable unique ids so every <label htmlFor> / aria-describedby pairing is guaranteed
  // unique even if this component is rendered more than once on the same page.
  const shapeId = useId();
  const diameterId = useId();
  const lengthId = useId();
  const lengthErrorId = useId();
  const widthId = useId();
  const widthErrorId = useId();
  const depthId = useId();
  const depthErrorId = useId();
  const ringDiameterId = useId();
  const ringDiameterErrorId = useId();
  const coverId = useId();
  const coverErrorId = useId();
  const hookMultiplierId = useId();
  const hookMultiplierErrorId = useId();
  const length1Id = useId();
  const length1ErrorId = useId();
  const length2Id = useId();
  const length2ErrorId = useId();
  const bendAngleId = useId();
  const piecesId = useId();
  const piecesErrorId = useId();
  const rateId = useId();
  const rateErrorId = useId();

  const [shape, setShape] = useState<ShapeKey>("rect_stirrup");
  const [diameter, setDiameter] = useState<string>("8");

  const [length, setLength] = useState(""); // straight bar
  const [width, setWidth] = useState(""); // stirrup: beam/column width
  const [depth, setDepth] = useState(""); // stirrup: beam/column depth
  const [ringDiameter, setRingDiameter] = useState(""); // circular ring: column diameter
  const [cover, setCover] = useState("25");
  const [hookMultiplier, setHookMultiplier] = useState("9");
  const [length1, setLength1] = useState(""); // l-bend segment 1
  const [length2, setLength2] = useState(""); // l-bend segment 2
  const [bendAngle, setBendAngle] = useState<BendAngleKey>("45");

  const [pieces, setPieces] = useState("1");
  const [ratePerKg, setRatePerKg] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  // ---- Validation (single source of truth, reused by calculate + the memoized result) ----
  const validate = useCallback((): { ok: boolean; errors: FormErrors } => {
    const next: FormErrors = {};
    const d = Number(diameter);

    if (shape === "straight") {
      const v = Number(length);
      if (length.trim() === "" || Number.isNaN(v)) {
        next.length = "Please enter a bar length.";
      } else if (v < SEGMENT_LEN_MIN || v > SEGMENT_LEN_MAX) {
        next.length = `Length must be between ${SEGMENT_LEN_MIN} and ${SEGMENT_LEN_MAX.toLocaleString("en-IN")} mm.`;
      }
    }

    if (shape === "rect_stirrup" || shape === "circular_ring") {
      const c = Number(cover);
      if (cover.trim() === "" || Number.isNaN(c)) {
        next.cover = "Please enter a clear cover.";
      } else if (c < COVER_MIN || c > COVER_MAX) {
        next.cover = `Cover must be between ${COVER_MIN} and ${COVER_MAX} mm.`;
      }

      const hm = Number(hookMultiplier);
      if (hookMultiplier.trim() === "" || Number.isNaN(hm)) {
        next.hookMultiplier = "Please enter a hook length multiplier.";
      } else if (hm < HOOK_MULT_MIN || hm > HOOK_MULT_MAX) {
        next.hookMultiplier = `Typically between ${HOOK_MULT_MIN}d and ${HOOK_MULT_MAX}d.`;
      }
    }

    if (shape === "rect_stirrup") {
      const w = Number(width);
      const de = Number(depth);
      const c = Number(cover) || 0;

      if (width.trim() === "" || Number.isNaN(w)) {
        next.width = "Please enter the width.";
      } else if (w < DIM_MIN || w > DIM_MAX) {
        next.width = `Width must be between ${DIM_MIN} and ${DIM_MAX.toLocaleString("en-IN")} mm.`;
      } else if (!next.cover && w - 2 * c - d <= 50) {
        next.width = "Cover/diameter too large for this width — increase width or reduce cover.";
      }

      if (depth.trim() === "" || Number.isNaN(de)) {
        next.depth = "Please enter the depth.";
      } else if (de < DIM_MIN || de > DIM_MAX) {
        next.depth = `Depth must be between ${DIM_MIN} and ${DIM_MAX.toLocaleString("en-IN")} mm.`;
      } else if (!next.cover && de - 2 * c - d <= 50) {
        next.depth = "Cover/diameter too large for this depth — increase depth or reduce cover.";
      }
    }

    if (shape === "circular_ring") {
      const rd = Number(ringDiameter);
      const c = Number(cover) || 0;

      if (ringDiameter.trim() === "" || Number.isNaN(rd)) {
        next.ringDiameter = "Please enter the column diameter.";
      } else if (rd < RING_DIA_MIN || rd > RING_DIA_MAX) {
        next.ringDiameter = `Diameter must be between ${RING_DIA_MIN} and ${RING_DIA_MAX.toLocaleString("en-IN")} mm.`;
      } else if (!next.cover && rd - 2 * c - d <= 50) {
        next.ringDiameter = "Cover/diameter too large for this column size.";
      }
    }

    if (shape === "l_bend") {
      const v1 = Number(length1);
      const v2 = Number(length2);

      if (length1.trim() === "" || Number.isNaN(v1)) {
        next.length1 = "Please enter the first segment length.";
      } else if (v1 < SEGMENT_LEN_MIN || v1 > SEGMENT_LEN_MAX) {
        next.length1 = `Must be between ${SEGMENT_LEN_MIN} and ${SEGMENT_LEN_MAX.toLocaleString("en-IN")} mm.`;
      }

      if (length2.trim() === "" || Number.isNaN(v2)) {
        next.length2 = "Please enter the second segment length.";
      } else if (v2 < SEGMENT_LEN_MIN || v2 > SEGMENT_LEN_MAX) {
        next.length2 = `Must be between ${SEGMENT_LEN_MIN} and ${SEGMENT_LEN_MAX.toLocaleString("en-IN")} mm.`;
      }
    }

    const p = Number(pieces);
    if (pieces.trim() === "" || Number.isNaN(p)) {
      next.pieces = "Please enter the number of pieces.";
    } else if (!Number.isInteger(p) || p < PIECES_MIN || p > PIECES_MAX) {
      next.pieces = `Must be a whole number between ${PIECES_MIN} and ${PIECES_MAX.toLocaleString("en-IN")}.`;
    }

    if (ratePerKg.trim() !== "") {
      const r = Number(ratePerKg);
      if (Number.isNaN(r)) {
        next.rate = "Enter a valid rate.";
      } else if (r < RATE_MIN || r > RATE_MAX) {
        next.rate = `Must be between ₹${RATE_MIN} and ₹${RATE_MAX} per kg.`;
      }
    }

    return { ok: Object.keys(next).length === 0, errors: next };
  }, [
    shape,
    diameter,
    length,
    width,
    depth,
    ringDiameter,
    cover,
    hookMultiplier,
    length1,
    length2,
    pieces,
    ratePerKg,
  ]);

  const result = useMemo(() => {
    if (!submitted) return null;

    const { ok } = validate();
    if (!ok) return null;

    const d = Number(diameter);
    let cuttingLengthMM = 0;
    let hookAllowanceMM = 0;
    let bendDeductionMM = 0;

    if (shape === "straight") {
      cuttingLengthMM = Number(length);
    } else if (shape === "rect_stirrup") {
      const c = Number(cover);
      const hm = Number(hookMultiplier);
      const A = Number(width) - 2 * c - d; // centerline width
      const B = Number(depth) - 2 * c - d; // centerline depth
      hookAllowanceMM = 2 * hm * d; // 2 hooks
      // 4 x 90° corner bends + 2 x 135° hook bends
      bendDeductionMM =
        4 * BEND_DEDUCTION_MULTIPLIER["90"] * d + 2 * BEND_DEDUCTION_MULTIPLIER["135"] * d;
      cuttingLengthMM = 2 * (A + B) + hookAllowanceMM - bendDeductionMM;
    } else if (shape === "circular_ring") {
      const c = Number(cover);
      const hm = Number(hookMultiplier);
      const centerlineDia = Number(ringDiameter) - 2 * c - d;
      hookAllowanceMM = 2 * hm * d; // 2 hooks
      bendDeductionMM = 2 * BEND_DEDUCTION_MULTIPLIER["135"] * d; // only the 2 hook bends
      cuttingLengthMM = Math.PI * centerlineDia + hookAllowanceMM - bendDeductionMM;
    } else if (shape === "l_bend") {
      bendDeductionMM = BEND_DEDUCTION_MULTIPLIER[bendAngle] * d;
      cuttingLengthMM = Number(length1) + Number(length2) - bendDeductionMM;
    }

    if (!Number.isFinite(cuttingLengthMM) || cuttingLengthMM <= 0) return null;

    const piecesN = clampNumber(Number(pieces), PIECES_MIN, PIECES_MAX) ?? 1;
    const rateN = ratePerKg.trim() === "" ? 0 : Number(ratePerKg);

    const cuttingLengthM = cuttingLengthMM / 1000;
    // Standard unit weight of steel bar: W (kg/m) = d² / 162, d in mm (IS 1786)
    const weightPerPieceKg = (d * d * cuttingLengthM) / 162;
    const totalLengthM = cuttingLengthM * piecesN;
    const totalWeightKg = weightPerPieceKg * piecesN;
    const totalCost = rateN > 0 ? totalWeightKg * rateN : 0;

    return {
      cuttingLengthMM,
      cuttingLengthM,
      hookAllowanceMM,
      bendDeductionMM,
      weightPerPieceKg,
      totalLengthM,
      totalWeightKg,
      totalCost,
      piecesN,
      rateN,
      diameterMM: d,
    };
  }, [
    shape,
    diameter,
    length,
    width,
    depth,
    ringDiameter,
    cover,
    hookMultiplier,
    length1,
    length2,
    bendAngle,
    pieces,
    ratePerKg,
    submitted,
    validate,
  ]);

  const results = result
    ? [
        {
          label: "Cutting Length per Piece",
          value: `${formatNumber(result.cuttingLengthMM)} mm (${formatNumber(result.cuttingLengthM, 2)} m)`,
          highlight: true,
        },
        { label: "Bar Diameter", value: `${result.diameterMM} mm` },
        { label: "Number of Pieces", value: formatNumber(result.piecesN) },
        { label: "Total Length (all pieces)", value: `${formatNumber(result.totalLengthM, 2)} m` },
        { label: "Weight per Piece", value: `${formatNumber(result.weightPerPieceKg, 3)} kg` },
        { label: "Total Steel Weight", value: `${formatNumber(result.totalWeightKg, 2)} kg` },
        ...(result.hookAllowanceMM
          ? [{ label: "Hook Allowance Applied", value: `${formatNumber(result.hookAllowanceMM)} mm` }]
          : []),
        ...(result.bendDeductionMM
          ? [{ label: "Bend Deduction Applied", value: `${formatNumber(result.bendDeductionMM)} mm` }]
          : []),
        ...(result.rateN > 0
          ? [
              { label: "Rate Used", value: `${formatINR(result.rateN)} / kg` },
              { label: "Total Steel Cost", value: formatINR(result.totalCost), highlight: true },
            ]
          : []),
      ]
    : [];

  function handleCalculate() {
    const { ok, errors: validationErrors } = validate();
    setErrors(validationErrors);
    setSubmitted(ok);
  }

  function handleReset() {
    setShape("rect_stirrup");
    setDiameter("8");
    setLength("");
    setWidth("");
    setDepth("");
    setRingDiameter("");
    setCover("25");
    setHookMultiplier("9");
    setLength1("");
    setLength2("");
    setBendAngle("45");
    setPieces("1");
    setRatePerKg("");
    setSubmitted(false);
    setErrors({});
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    blockInvalidNumberKeys(e);
    if (e.key === "Enter") handleCalculate();
  }

  /** Generic change handler for numeric text fields: updates value, clears its own error. */
  function fieldHandler(setter: (v: string) => void, errorKey: keyof FormErrors) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      if (errors[errorKey]) setErrors((prev) => ({ ...prev, [errorKey]: undefined }));
    };
  }

  const handleLengthChange = fieldHandler(setLength, "length");
  const handleWidthChange = fieldHandler(setWidth, "width");
  const handleDepthChange = fieldHandler(setDepth, "depth");
  const handleRingDiameterChange = fieldHandler(setRingDiameter, "ringDiameter");
  const handleCoverChange = fieldHandler(setCover, "cover");
  const handleHookMultiplierChange = fieldHandler(setHookMultiplier, "hookMultiplier");
  const handleLength1Change = fieldHandler(setLength1, "length1");
  const handleLength2Change = fieldHandler(setLength2, "length2");
  const handlePiecesChange = fieldHandler(setPieces, "pieces");
  const handleRateChange = fieldHandler(setRatePerKg, "rate");

  const headline =
    result && result.rateN > 0
      ? { label: "Estimated Total Steel Cost", value: formatINR(result.totalCost) }
      : result
      ? { label: "Total Steel Weight", value: `${formatNumber(result.totalWeightKg, 2)} kg` }
      : null;

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor={shapeId} className={LABEL_CLASS}>
            Bar Shape
          </label>
          <select
            id={shapeId}
            value={shape}
            onChange={(e) => {
              setShape(e.target.value as ShapeKey);
              setSubmitted(false);
            }}
            className={INPUT_CLASS}
          >
            {Object.entries(BAR_SHAPES).map(([key, { label }]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={diameterId} className={LABEL_CLASS}>
            Bar Diameter (mm)
          </label>
          <select
            id={diameterId}
            value={diameter}
            onChange={(e) => setDiameter(e.target.value)}
            className={INPUT_CLASS}
          >
            {STANDARD_DIAMETERS.map((dia) => (
              <option key={dia} value={dia}>
                {dia} mm
              </option>
            ))}
          </select>
        </div>

        {shape === "straight" && (
          <div>
            <label htmlFor={lengthId} className={LABEL_CLASS}>
              Bar Length (mm)
            </label>
            <input
              id={lengthId}
              type="number"
              inputMode="numeric"
              min={SEGMENT_LEN_MIN}
              max={SEGMENT_LEN_MAX}
              step="1"
              value={length}
              onChange={handleLengthChange}
              onKeyDown={handleKeyDown}
              placeholder="3000"
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
        )}

        {shape === "rect_stirrup" && (
          <>
            <div>
              <label htmlFor={widthId} className={LABEL_CLASS}>
                Beam / Column Width (mm)
              </label>
              <input
                id={widthId}
                type="number"
                inputMode="numeric"
                min={DIM_MIN}
                max={DIM_MAX}
                step="1"
                value={width}
                onChange={handleWidthChange}
                onKeyDown={handleKeyDown}
                placeholder="300"
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
              <label htmlFor={depthId} className={LABEL_CLASS}>
                Beam / Column Depth (mm)
              </label>
              <input
                id={depthId}
                type="number"
                inputMode="numeric"
                min={DIM_MIN}
                max={DIM_MAX}
                step="1"
                value={depth}
                onChange={handleDepthChange}
                onKeyDown={handleKeyDown}
                placeholder="450"
                aria-required="true"
                aria-invalid={!!errors.depth}
                aria-describedby={errors.depth ? depthErrorId : undefined}
                className={errors.depth ? INPUT_ERROR_CLASS : INPUT_CLASS}
              />
              {errors.depth && (
                <p id={depthErrorId} role="alert" className="mt-1 text-sm text-red-600">
                  {errors.depth}
                </p>
              )}
            </div>
          </>
        )}

        {shape === "circular_ring" && (
          <div>
            <label htmlFor={ringDiameterId} className={LABEL_CLASS}>
              Column Diameter (mm)
            </label>
            <input
              id={ringDiameterId}
              type="number"
              inputMode="numeric"
              min={RING_DIA_MIN}
              max={RING_DIA_MAX}
              step="1"
              value={ringDiameter}
              onChange={handleRingDiameterChange}
              onKeyDown={handleKeyDown}
              placeholder="450"
              aria-required="true"
              aria-invalid={!!errors.ringDiameter}
              aria-describedby={errors.ringDiameter ? ringDiameterErrorId : undefined}
              className={errors.ringDiameter ? INPUT_ERROR_CLASS : INPUT_CLASS}
            />
            {errors.ringDiameter && (
              <p id={ringDiameterErrorId} role="alert" className="mt-1 text-sm text-red-600">
                {errors.ringDiameter}
              </p>
            )}
          </div>
        )}

        {(shape === "rect_stirrup" || shape === "circular_ring") && (
          <>
            <div>
              <label htmlFor={coverId} className={LABEL_CLASS}>
                Clear Cover (mm)
              </label>
              <input
                id={coverId}
                type="number"
                inputMode="numeric"
                min={COVER_MIN}
                max={COVER_MAX}
                step="1"
                value={cover}
                onChange={handleCoverChange}
                onKeyDown={handleKeyDown}
                placeholder="25"
                aria-invalid={!!errors.cover}
                aria-describedby={errors.cover ? coverErrorId : undefined}
                className={errors.cover ? INPUT_ERROR_CLASS : INPUT_CLASS}
              />
              {errors.cover && (
                <p id={coverErrorId} role="alert" className="mt-1 text-sm text-red-600">
                  {errors.cover}
                </p>
              )}
            </div>

            <div>
              <label htmlFor={hookMultiplierId} className={LABEL_CLASS}>
                Hook Length Multiplier (× d)
              </label>
              <input
                id={hookMultiplierId}
                type="number"
                inputMode="numeric"
                min={HOOK_MULT_MIN}
                max={HOOK_MULT_MAX}
                step="1"
                value={hookMultiplier}
                onChange={handleHookMultiplierChange}
                onKeyDown={handleKeyDown}
                placeholder="9"
                aria-invalid={!!errors.hookMultiplier}
                aria-describedby={
                  errors.hookMultiplier ? hookMultiplierErrorId : `${hookMultiplierId}-hint`
                }
                className={errors.hookMultiplier ? INPUT_ERROR_CLASS : INPUT_CLASS}
              />
              {errors.hookMultiplier ? (
                <p id={hookMultiplierErrorId} role="alert" className="mt-1 text-sm text-red-600">
                  {errors.hookMultiplier}
                </p>
              ) : (
                <p id={`${hookMultiplierId}-hint`} className={HINT_CLASS}>
                  Standard 135° hook is typically 9d–10d per SP:34 — adjust for your local code.
                </p>
              )}
            </div>
          </>
        )}

        {shape === "l_bend" && (
          <>
            <div>
              <label htmlFor={length1Id} className={LABEL_CLASS}>
                Segment 1 Length (mm)
              </label>
              <input
                id={length1Id}
                type="number"
                inputMode="numeric"
                min={SEGMENT_LEN_MIN}
                max={SEGMENT_LEN_MAX}
                step="1"
                value={length1}
                onChange={handleLength1Change}
                onKeyDown={handleKeyDown}
                placeholder="1500"
                aria-required="true"
                aria-invalid={!!errors.length1}
                aria-describedby={errors.length1 ? length1ErrorId : undefined}
                className={errors.length1 ? INPUT_ERROR_CLASS : INPUT_CLASS}
              />
              {errors.length1 && (
                <p id={length1ErrorId} role="alert" className="mt-1 text-sm text-red-600">
                  {errors.length1}
                </p>
              )}
            </div>

            <div>
              <label htmlFor={length2Id} className={LABEL_CLASS}>
                Segment 2 Length (mm)
              </label>
              <input
                id={length2Id}
                type="number"
                inputMode="numeric"
                min={SEGMENT_LEN_MIN}
                max={SEGMENT_LEN_MAX}
                step="1"
                value={length2}
                onChange={handleLength2Change}
                onKeyDown={handleKeyDown}
                placeholder="1000"
                aria-required="true"
                aria-invalid={!!errors.length2}
                aria-describedby={errors.length2 ? length2ErrorId : undefined}
                className={errors.length2 ? INPUT_ERROR_CLASS : INPUT_CLASS}
              />
              {errors.length2 && (
                <p id={length2ErrorId} role="alert" className="mt-1 text-sm text-red-600">
                  {errors.length2}
                </p>
              )}
            </div>

            <div>
              <label htmlFor={bendAngleId} className={LABEL_CLASS}>
                Bend Angle
              </label>
              <select
                id={bendAngleId}
                value={bendAngle}
                onChange={(e) => setBendAngle(e.target.value as BendAngleKey)}
                className={INPUT_CLASS}
              >
                {Object.entries(BEND_ANGLES).map(([key, { label }]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        <div>
          <label htmlFor={piecesId} className={LABEL_CLASS}>
            Number of Pieces
          </label>
          <input
            id={piecesId}
            type="number"
            inputMode="numeric"
            min={PIECES_MIN}
            max={PIECES_MAX}
            step="1"
            value={pieces}
            onChange={handlePiecesChange}
            onKeyDown={handleKeyDown}
            placeholder="1"
            aria-required="true"
            aria-invalid={!!errors.pieces}
            aria-describedby={errors.pieces ? piecesErrorId : undefined}
            className={errors.pieces ? INPUT_ERROR_CLASS : INPUT_CLASS}
          />
          {errors.pieces && (
            <p id={piecesErrorId} role="alert" className="mt-1 text-sm text-red-600">
              {errors.pieces}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={rateId} className={LABEL_CLASS}>
            Rate per kg (₹) — optional
          </label>
          <input
            id={rateId}
            type="number"
            inputMode="decimal"
            min={RATE_MIN}
            max={RATE_MAX}
            step="0.5"
            value={ratePerKg}
            onChange={handleRateChange}
            onKeyDown={handleKeyDown}
            placeholder="65"
            aria-invalid={!!errors.rate}
            aria-describedby={errors.rate ? rateErrorId : undefined}
            className={errors.rate ? INPUT_ERROR_CLASS : INPUT_CLASS}
          />
          {errors.rate && (
            <p id={rateErrorId} role="alert" className="mt-1 text-sm text-red-600">
              {errors.rate}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          type="button"
          onClick={handleCalculate}
          className="rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black/40 focus:ring-offset-2"
        >
          Calculate Cutting Length
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="rounded-xl border px-6 py-3 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-2"
        >
          Reset
        </button>
      </div>

      {result && headline && (
        <div
          role="status"
          aria-live="polite"
          className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center"
        >
          <h3 className="text-xl font-semibold">{headline.label}</h3>
          <p className="mt-3 text-4xl font-bold text-blue-700">{headline.value}</p>
          <p className="mt-1 text-sm text-gray-500">
            {formatNumber(result.cuttingLengthMM)} mm cutting length × {formatNumber(result.piecesN)} piece
            {result.piecesN > 1 ? "s" : ""}
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Rebar Cutting Length Breakdown"
          results={results}
          calculatorName="Rebar Cutting Length Calculator"
        />
      )}
    </div>
  );
}