"use client";

import { useCallback, useId, useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

// ---- Static config (kept outside component so it doesn't get rebuilt every render) ----

const CONSTRUCTION_STATUS = {
  under_construction: { label: "Under-Construction", gstApplicable: true },
  ready_to_move: { label: "Ready-to-Move (with Occupancy Certificate)", gstApplicable: false },
  resale: { label: "Resale Flat", gstApplicable: false },
} as const;

const STATES = {
  maharashtra: {
    label: "Maharashtra (Mumbai / Pune)",
    stampDutyRate: 6,
    registrationRate: 1,
    registrationCap: null as number | null,
    isMetro: true,
    womenConcession: 1,
  },
  karnataka: {
    label: "Karnataka (Bengaluru)",
    stampDutyRate: 5.6,
    registrationRate: 1,
    registrationCap: 30000,
    isMetro: true,
    womenConcession: 0,
  },
  delhi_ncr: {
    label: "Delhi NCR",
    stampDutyRate: 6,
    registrationRate: 1,
    registrationCap: null,
    isMetro: true,
    womenConcession: 2,
  },
  telangana: {
    label: "Telangana (Hyderabad)",
    stampDutyRate: 6,
    registrationRate: 0.5,
    registrationCap: null,
    isMetro: true,
    womenConcession: 0,
  },
  tamil_nadu: {
    label: "Tamil Nadu (Chennai)",
    stampDutyRate: 7,
    registrationRate: 4,
    registrationCap: null,
    isMetro: true,
    womenConcession: 0,
  },
  west_bengal: {
    label: "West Bengal (Kolkata)",
    stampDutyRate: 6,
    registrationRate: 1,
    registrationCap: null,
    isMetro: true,
    womenConcession: 1,
  },
  uttar_pradesh: {
    label: "Uttar Pradesh",
    stampDutyRate: 7,
    registrationRate: 1,
    registrationCap: null,
    isMetro: false,
    womenConcession: 1,
  },
  gujarat: {
    label: "Gujarat",
    stampDutyRate: 4.9,
    registrationRate: 1,
    registrationCap: null,
    isMetro: false,
    womenConcession: 0,
  },
  rajasthan: {
    label: "Rajasthan",
    stampDutyRate: 6,
    registrationRate: 1,
    registrationCap: null,
    isMetro: false,
    womenConcession: 1,
  },
  haryana: {
    label: "Haryana (Gurugram / Faridabad)",
    stampDutyRate: 7,
    registrationRate: 0.5,
    registrationCap: 15000,
    isMetro: true,
    womenConcession: 2,
  },
  other: {
    label: "Other State (Average Estimate)",
    stampDutyRate: 6,
    registrationRate: 1,
    registrationCap: null,
    isMetro: false,
    womenConcession: 1,
  },
} as const;

type StatusKey = keyof typeof CONSTRUCTION_STATUS;
type StateKey = keyof typeof STATES;

// GST rules
const GST_RATE_AFFORDABLE = 1;
const GST_RATE_STANDARD = 5;
const AFFORDABLE_PRICE_CAP = 4500000; // ₹45 lakh
const AFFORDABLE_CARPET_METRO = 60; // sqm
const AFFORDABLE_CARPET_NON_METRO = 90; // sqm

const LOAN_PROCESSING_RATE = 0.5; // %

// Sane real-world bounds
const PRICE_MIN = 100000; // ₹1 lakh
const PRICE_MAX = 1000000000; // ₹100 crore
const AREA_MIN = 10; // sqm
const AREA_MAX = 1000; // sqm
const BROKERAGE_MIN = 0;
const BROKERAGE_MAX = 5;

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

/** Parse an optional numeric field: empty string -> 0, otherwise the number (or NaN). */
function parseOptionalNumber(value: string) {
  if (value.trim() === "") return 0;
  return Number(value);
}

/** Block non-numeric keys in number inputs (still allows paste/autofill, validated separately). */
function blockInvalidNumberKeys(e: React.KeyboardEvent<HTMLInputElement>) {
  if (["e", "E", "+", "-"].includes(e.key)) {
    e.preventDefault();
  }
}

interface FormErrors {
  basePrice?: string;
  carpetArea?: string;
  circleRate?: string;
  brokerPercent?: string;
  loanAmount?: string;
  legalAmount?: string;
  builderExtras?: string;
}

export default function FlatBuyCalculator() {
  // Stable unique ids so every <label htmlFor> / aria-describedby pairing is guaranteed
  // unique even if this component is rendered more than once on the same page.
  const basePriceId = useId();
  const basePriceErrorId = useId();
  const carpetAreaId = useId();
  const carpetAreaErrorId = useId();
  const statusId = useId();
  const stateId = useId();
  const circleRateId = useId();
  const circleRateErrorId = useId();
  const womanNameId = useId();
  const brokerToggleId = useId();
  const brokerPercentId = useId();
  const brokerPercentErrorId = useId();
  const loanToggleId = useId();
  const loanAmountId = useId();
  const loanAmountErrorId = useId();
  const legalToggleId = useId();
  const legalAmountId = useId();
  const extrasToggleId = useId();
  const plcId = useId();
  const parkingId = useId();
  const clubId = useId();
  const corpusId = useId();

  const [basePrice, setBasePrice] = useState("");
  const [carpetArea, setCarpetArea] = useState("");
  const [constructionStatus, setConstructionStatus] = useState<StatusKey>("under_construction");
  const [stateKey, setStateKey] = useState<StateKey>("maharashtra");
  const [circleRate, setCircleRate] = useState("");
  const [registeredInWomanName, setRegisteredInWomanName] = useState(false);

  const [usedBroker, setUsedBroker] = useState(false);
  const [brokerPercent, setBrokerPercent] = useState("1");

  const [includeLoan, setIncludeLoan] = useState(false);
  const [loanAmount, setLoanAmount] = useState("");

  const [includeLegalFees, setIncludeLegalFees] = useState(true);
  const [legalAmount, setLegalAmount] = useState("25000");

  const [includeBuilderExtras, setIncludeBuilderExtras] = useState(false);
  const [plc, setPlc] = useState("");
  const [parking, setParking] = useState("");
  const [club, setClub] = useState("");
  const [corpus, setCorpus] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  // ---- Validation (single source of truth, reused by calculate + the memoized result) ----
  const validate = useCallback((): { ok: boolean; errors: FormErrors } => {
    const next: FormErrors = {};

    const price = Number(basePrice);
    if (basePrice.trim() === "" || Number.isNaN(price)) {
      next.basePrice = "Please enter the flat's base price.";
    } else if (price <= 0) {
      next.basePrice = "Base price must be greater than 0.";
    } else if (price < PRICE_MIN) {
      next.basePrice = `Price seems too low. Minimum is ${formatINR(PRICE_MIN)}.`;
    } else if (price > PRICE_MAX) {
      next.basePrice = `Price seems too high. Maximum supported is ${formatINR(PRICE_MAX)}.`;
    }

    const area = Number(carpetArea);
    if (carpetArea.trim() === "" || Number.isNaN(area)) {
      next.carpetArea = "Please enter the carpet area.";
    } else if (area <= 0) {
      next.carpetArea = "Carpet area must be greater than 0.";
    } else if (area < AREA_MIN) {
      next.carpetArea = `Area seems too small. Minimum is ${AREA_MIN} sq m.`;
    } else if (area > AREA_MAX) {
      next.carpetArea = `Area seems too large. Maximum supported is ${AREA_MAX} sq m.`;
    }

    if (circleRate.trim() !== "") {
      const c = Number(circleRate);
      if (Number.isNaN(c) || c < 0) {
        next.circleRate = "Enter a valid amount.";
      }
    }

    if (usedBroker) {
      const b = Number(brokerPercent);
      if (brokerPercent.trim() === "" || Number.isNaN(b)) {
        next.brokerPercent = "Enter a valid percentage.";
      } else if (b < BROKERAGE_MIN || b > BROKERAGE_MAX) {
        next.brokerPercent = `Must be between ${BROKERAGE_MIN} and ${BROKERAGE_MAX}%.`;
      }
    }

    if (includeLoan) {
      const l = Number(loanAmount);
      if (loanAmount.trim() === "" || Number.isNaN(l)) {
        next.loanAmount = "Please enter a loan amount.";
      } else if (l <= 0) {
        next.loanAmount = "Loan amount must be greater than 0.";
      }
    }

    if (includeLegalFees) {
      const lf = Number(legalAmount);
      if (legalAmount.trim() === "" || Number.isNaN(lf) || lf < 0) {
        next.legalAmount = "Enter a valid amount.";
      }
    }

    if (includeBuilderExtras) {
      const vals = [plc, parking, club, corpus];
      const anyInvalid = vals.some((v) => {
        if (v.trim() === "") return false;
        const n = Number(v);
        return Number.isNaN(n) || n < 0;
      });
      if (anyInvalid) {
        next.builderExtras = "Enter valid amounts for builder extras.";
      }
    }

    return { ok: Object.keys(next).length === 0, errors: next };
  }, [
    basePrice,
    carpetArea,
    circleRate,
    usedBroker,
    brokerPercent,
    includeLoan,
    loanAmount,
    includeLegalFees,
    legalAmount,
    includeBuilderExtras,
    plc,
    parking,
    club,
    corpus,
  ]);

  const result = useMemo(() => {
    if (!submitted) return null;

    const { ok } = validate();
    if (!ok) return null;

    const price = Number(basePrice);
    const areaSqm = Number(carpetArea);
    if (!Number.isFinite(price) || price <= 0) return null;

    const status = CONSTRUCTION_STATUS[constructionStatus] ?? CONSTRUCTION_STATUS.under_construction;
    const state = STATES[stateKey] ?? STATES.maharashtra;

    // ---- GST (only on under-construction flats) ----
    const affordableCarpetLimit = state.isMetro ? AFFORDABLE_CARPET_METRO : AFFORDABLE_CARPET_NON_METRO;
    const isAffordableHousing = areaSqm <= affordableCarpetLimit && price <= AFFORDABLE_PRICE_CAP;
    const gstRate = isAffordableHousing ? GST_RATE_AFFORDABLE : GST_RATE_STANDARD;
    const gstAmount = status.gstApplicable ? price * (gstRate / 100) : 0;

    // ---- Stamp duty & registration (basis = higher of base price or circle rate) ----
    const circleRateValue = clampNumber(Number(circleRate) || 0, 0, PRICE_MAX) ?? 0;
    const stampBasis = Math.max(price, circleRateValue);

    const womenDiscount = registeredInWomanName ? state.womenConcession : 0;
    const effectiveStampRate = Math.max(0, state.stampDutyRate - womenDiscount);
    const stampDuty = stampBasis * (effectiveStampRate / 100);

    const registrationRaw = stampBasis * (state.registrationRate / 100);
    const registration =
      state.registrationCap !== null ? Math.min(registrationRaw, state.registrationCap) : registrationRaw;

    // ---- Brokerage ----
    const brokerRate = usedBroker
      ? (clampNumber(Number(brokerPercent), BROKERAGE_MIN, BROKERAGE_MAX) ?? 0) / 100
      : 0;
    const brokerageAmount = price * brokerRate;

    // ---- Home loan processing fee ----
    const loanAmountNum = includeLoan ? clampNumber(Number(loanAmount), 0, price * 2) ?? 0 : 0;
    const loanProcessingFee = includeLoan ? loanAmountNum * (LOAN_PROCESSING_RATE / 100) : 0;

    // ---- Legal fees ----
    const legalFeesAmount = includeLegalFees ? parseOptionalNumber(legalAmount) : 0;

    // ---- Builder-side extras ----
    const plcAmount = includeBuilderExtras ? parseOptionalNumber(plc) : 0;
    const parkingAmount = includeBuilderExtras ? parseOptionalNumber(parking) : 0;
    const clubAmount = includeBuilderExtras ? parseOptionalNumber(club) : 0;
    const corpusAmount = includeBuilderExtras ? parseOptionalNumber(corpus) : 0;
    const builderExtrasTotal = plcAmount + parkingAmount + clubAmount + corpusAmount;

    const totalAdditionalCost =
      gstAmount +
      stampDuty +
      registration +
      brokerageAmount +
      loanProcessingFee +
      legalFeesAmount +
      builderExtrasTotal;

    const totalCost = price + totalAdditionalCost;
    if (!Number.isFinite(totalCost)) return null;

    const cashRequired = Math.max(0, totalCost - loanAmountNum);
    const extraCostPercent = (totalAdditionalCost / price) * 100;

    return {
      basePrice: price,
      gstAmount,
      gstRate,
      gstApplicable: status.gstApplicable,
      isAffordableHousing,
      stampDuty,
      registration,
      brokerageAmount,
      loanProcessingFee,
      legalFeesAmount,
      plcAmount,
      parkingAmount,
      clubAmount,
      corpusAmount,
      builderExtrasTotal,
      totalAdditionalCost,
      totalCost,
      cashRequired,
      extraCostPercent,
    };
  }, [
    basePrice,
    carpetArea,
    constructionStatus,
    stateKey,
    circleRate,
    registeredInWomanName,
    usedBroker,
    brokerPercent,
    includeLoan,
    loanAmount,
    includeLegalFees,
    legalAmount,
    includeBuilderExtras,
    plc,
    parking,
    club,
    corpus,
    submitted,
    validate,
  ]);

  const results = result
    ? [
        { label: "Total Cost of Flat", value: formatINR(result.totalCost), highlight: true },
        { label: "Base Price", value: formatINR(result.basePrice) },
        ...(result.gstApplicable
          ? [
              {
                label: `GST @ ${result.gstRate}%${result.isAffordableHousing ? " (Affordable Housing)" : ""}`,
                value: formatINR(result.gstAmount),
              },
            ]
          : [{ label: "GST", value: "Not applicable (Ready-to-move / Resale)" }]),
        { label: "Stamp Duty", value: formatINR(result.stampDuty) },
        { label: "Registration Charges", value: formatINR(result.registration) },
        ...(result.brokerageAmount ? [{ label: "Brokerage", value: formatINR(result.brokerageAmount) }] : []),
        ...(result.legalFeesAmount ? [{ label: "Legal Fees", value: formatINR(result.legalFeesAmount) }] : []),
        ...(result.loanProcessingFee
          ? [{ label: "Home Loan Processing Fee", value: formatINR(result.loanProcessingFee) }]
          : []),
        ...(result.plcAmount ? [{ label: "Preferential Location Charge", value: formatINR(result.plcAmount) }] : []),
        ...(result.parkingAmount ? [{ label: "Car Parking Charge", value: formatINR(result.parkingAmount) }] : []),
        ...(result.clubAmount ? [{ label: "Club / Amenity Fee", value: formatINR(result.clubAmount) }] : []),
        ...(result.corpusAmount ? [{ label: "Corpus / Maintenance Deposit", value: formatINR(result.corpusAmount) }] : []),
        { label: "Total Additional Cost", value: formatINR(result.totalAdditionalCost) },
        { label: "Extra Cost Over Base Price", value: `${result.extraCostPercent.toFixed(1)}%` },
        { label: "Cash Required (After Loan)", value: formatINR(result.cashRequired) },
      ]
    : [];

  function handleCalculate() {
    const { ok, errors: validationErrors } = validate();
    setErrors(validationErrors);
    setSubmitted(ok);
  }

  function handleReset() {
    setBasePrice("");
    setCarpetArea("");
    setConstructionStatus("under_construction");
    setStateKey("maharashtra");
    setCircleRate("");
    setRegisteredInWomanName(false);
    setUsedBroker(false);
    setBrokerPercent("1");
    setIncludeLoan(false);
    setLoanAmount("");
    setIncludeLegalFees(true);
    setLegalAmount("25000");
    setIncludeBuilderExtras(false);
    setPlc("");
    setParking("");
    setClub("");
    setCorpus("");
    setSubmitted(false);
    setErrors({});
  }

  function handleBasePriceChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBasePrice(e.target.value);
    if (errors.basePrice) setErrors((prev) => ({ ...prev, basePrice: undefined }));
  }

  function handleCarpetAreaChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCarpetArea(e.target.value);
    if (errors.carpetArea) setErrors((prev) => ({ ...prev, carpetArea: undefined }));
  }

  function handleCircleRateChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCircleRate(e.target.value);
    if (errors.circleRate) setErrors((prev) => ({ ...prev, circleRate: undefined }));
  }

  function handleBrokerPercentChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBrokerPercent(e.target.value);
    if (errors.brokerPercent) setErrors((prev) => ({ ...prev, brokerPercent: undefined }));
  }

  function handleLoanAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLoanAmount(e.target.value);
    if (errors.loanAmount) setErrors((prev) => ({ ...prev, loanAmount: undefined }));
  }

  function handleLegalAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLegalAmount(e.target.value);
    if (errors.legalAmount) setErrors((prev) => ({ ...prev, legalAmount: undefined }));
  }

  function handleBuilderExtraChange(setter: (v: string) => void) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      if (errors.builderExtras) setErrors((prev) => ({ ...prev, builderExtras: undefined }));
    };
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    blockInvalidNumberKeys(e);
    if (e.key === "Enter") handleCalculate();
  }

  return (
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor={basePriceId} className={LABEL_CLASS}>
            Flat Base Price (₹)
          </label>
          <input
            id={basePriceId}
            type="number"
            inputMode="numeric"
            min={PRICE_MIN}
            max={PRICE_MAX}
            step="1000"
            value={basePrice}
            onChange={handleBasePriceChange}
            onKeyDown={handleKeyDown}
            placeholder="7500000"
            aria-required="true"
            aria-invalid={!!errors.basePrice}
            aria-describedby={errors.basePrice ? basePriceErrorId : undefined}
            className={errors.basePrice ? INPUT_ERROR_CLASS : INPUT_CLASS}
          />
          {errors.basePrice && (
            <p id={basePriceErrorId} role="alert" className="mt-1 text-sm text-red-600">
              {errors.basePrice}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={carpetAreaId} className={LABEL_CLASS}>
            Carpet Area (sq m)
          </label>
          <input
            id={carpetAreaId}
            type="number"
            inputMode="numeric"
            min={AREA_MIN}
            max={AREA_MAX}
            step="1"
            value={carpetArea}
            onChange={handleCarpetAreaChange}
            onKeyDown={handleKeyDown}
            placeholder="65"
            aria-required="true"
            aria-invalid={!!errors.carpetArea}
            aria-describedby={errors.carpetArea ? carpetAreaErrorId : undefined}
            className={errors.carpetArea ? INPUT_ERROR_CLASS : INPUT_CLASS}
          />
          {errors.carpetArea && (
            <p id={carpetAreaErrorId} role="alert" className="mt-1 text-sm text-red-600">
              {errors.carpetArea}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={statusId} className={LABEL_CLASS}>
            Construction Status
          </label>
          <select
            id={statusId}
            value={constructionStatus}
            onChange={(e) => setConstructionStatus(e.target.value as StatusKey)}
            className={INPUT_CLASS}
          >
            {Object.entries(CONSTRUCTION_STATUS).map(([key, { label }]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={stateId} className={LABEL_CLASS}>
            State / City
          </label>
          <select
            id={stateId}
            value={stateKey}
            onChange={(e) => setStateKey(e.target.value as StateKey)}
            className={INPUT_CLASS}
          >
            {Object.entries(STATES).map(([key, { label }]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={circleRateId} className={LABEL_CLASS}>
            Govt. Circle Rate Value (₹, optional)
          </label>
          <input
            id={circleRateId}
            type="number"
            inputMode="numeric"
            min={0}
            step="1000"
            value={circleRate}
            onChange={handleCircleRateChange}
            onKeyDown={handleKeyDown}
            placeholder="Leave blank to use base price"
            aria-invalid={!!errors.circleRate}
            aria-describedby={errors.circleRate ? circleRateErrorId : undefined}
            className={errors.circleRate ? INPUT_ERROR_CLASS : INPUT_CLASS}
          />
          {errors.circleRate && (
            <p id={circleRateErrorId} role="alert" className="mt-1 text-sm text-red-600">
              {errors.circleRate}
            </p>
          )}
          <p className="mt-1 text-sm text-gray-400">
            Stamp duty uses whichever is higher: base price or circle rate.
          </p>
        </div>

        <div className="flex items-end">
          <label htmlFor={womanNameId} className="flex items-center gap-3">
            <input
              id={womanNameId}
              type="checkbox"
              checked={registeredInWomanName}
              onChange={(e) => setRegisteredInWomanName(e.target.checked)}
            />
            Registered in a woman&apos;s name (stamp duty concession)
          </label>
        </div>
      </div>

      <fieldset className="mt-6 grid gap-4 md:grid-cols-2">
        <legend className="sr-only">Brokerage</legend>

        <div>
          <label htmlFor={brokerToggleId} className="flex items-center gap-3">
            <input
              id={brokerToggleId}
              type="checkbox"
              checked={usedBroker}
              onChange={(e) => setUsedBroker(e.target.checked)}
            />
            Used a Real Estate Broker
          </label>
        </div>

        {usedBroker && (
          <div>
            <label htmlFor={brokerPercentId} className={LABEL_CLASS}>
              Brokerage (%)
            </label>
            <input
              id={brokerPercentId}
              type="number"
              inputMode="decimal"
              min={BROKERAGE_MIN}
              max={BROKERAGE_MAX}
              step="0.1"
              value={brokerPercent}
              onChange={handleBrokerPercentChange}
              onKeyDown={handleKeyDown}
              placeholder="1"
              aria-invalid={!!errors.brokerPercent}
              aria-describedby={errors.brokerPercent ? brokerPercentErrorId : undefined}
              className={errors.brokerPercent ? INPUT_ERROR_CLASS : INPUT_CLASS}
            />
            {errors.brokerPercent && (
              <p id={brokerPercentErrorId} role="alert" className="mt-1 text-sm text-red-600">
                {errors.brokerPercent}
              </p>
            )}
          </div>
        )}
      </fieldset>

      <fieldset className="mt-6 grid gap-4 md:grid-cols-2">
        <legend className="sr-only">Home loan</legend>

        <div>
          <label htmlFor={loanToggleId} className="flex items-center gap-3">
            <input
              id={loanToggleId}
              type="checkbox"
              checked={includeLoan}
              onChange={(e) => setIncludeLoan(e.target.checked)}
            />
            Financing with a Home Loan
          </label>
        </div>

        {includeLoan && (
          <div>
            <label htmlFor={loanAmountId} className={LABEL_CLASS}>
              Loan Amount (₹)
            </label>
            <input
              id={loanAmountId}
              type="number"
              inputMode="numeric"
              min={0}
              step="1000"
              value={loanAmount}
              onChange={handleLoanAmountChange}
              onKeyDown={handleKeyDown}
              placeholder="6000000"
              aria-invalid={!!errors.loanAmount}
              aria-describedby={errors.loanAmount ? loanAmountErrorId : undefined}
              className={errors.loanAmount ? INPUT_ERROR_CLASS : INPUT_CLASS}
            />
            {errors.loanAmount && (
              <p id={loanAmountErrorId} role="alert" className="mt-1 text-sm text-red-600">
                {errors.loanAmount}
              </p>
            )}
            <p className="mt-1 text-sm text-gray-400">
              Processing fee estimated at {LOAN_PROCESSING_RATE}% of the loan amount.
            </p>
          </div>
        )}
      </fieldset>

      <fieldset className="mt-6 grid gap-4 md:grid-cols-2">
        <legend className="sr-only">Legal fees</legend>

        <div>
          <label htmlFor={legalToggleId} className="flex items-center gap-3">
            <input
              id={legalToggleId}
              type="checkbox"
              checked={includeLegalFees}
              onChange={(e) => setIncludeLegalFees(e.target.checked)}
            />
            Include Legal Fees
          </label>
        </div>

        {includeLegalFees && (
          <div>
            <label htmlFor={legalAmountId} className={LABEL_CLASS}>
              Legal Fees (₹)
            </label>
            <input
              id={legalAmountId}
              type="number"
              inputMode="numeric"
              min={0}
              step="1000"
              value={legalAmount}
              onChange={handleLegalAmountChange}
              onKeyDown={handleKeyDown}
              placeholder="25000"
              className={INPUT_CLASS}
            />
          </div>
        )}
      </fieldset>

      <fieldset className="mt-6">
        <legend className="sr-only">Builder-side extras</legend>

        <label htmlFor={extrasToggleId} className="flex items-center gap-3">
          <input
            id={extrasToggleId}
            type="checkbox"
            checked={includeBuilderExtras}
            onChange={(e) => setIncludeBuilderExtras(e.target.checked)}
          />
          Include Builder-Side Extra Charges
        </label>

        {includeBuilderExtras && (
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor={plcId} className={LABEL_CLASS}>
                Preferential Location Charge (₹)
              </label>
              <input
                id={plcId}
                type="number"
                inputMode="numeric"
                min={0}
                step="1000"
                value={plc}
                onChange={handleBuilderExtraChange(setPlc)}
                onKeyDown={handleKeyDown}
                placeholder="0"
                className={INPUT_CLASS}
              />
            </div>

            <div>
              <label htmlFor={parkingId} className={LABEL_CLASS}>
                Car Parking Charge (₹)
              </label>
              <input
                id={parkingId}
                type="number"
                inputMode="numeric"
                min={0}
                step="1000"
                value={parking}
                onChange={handleBuilderExtraChange(setParking)}
                onKeyDown={handleKeyDown}
                placeholder="0"
                className={INPUT_CLASS}
              />
            </div>

            <div>
              <label htmlFor={clubId} className={LABEL_CLASS}>
                Club Membership / Amenity Fee (₹)
              </label>
              <input
                id={clubId}
                type="number"
                inputMode="numeric"
                min={0}
                step="1000"
                value={club}
                onChange={handleBuilderExtraChange(setClub)}
                onKeyDown={handleKeyDown}
                placeholder="0"
                className={INPUT_CLASS}
              />
            </div>

            <div>
              <label htmlFor={corpusId} className={LABEL_CLASS}>
                Corpus / Maintenance Deposit (₹)
              </label>
              <input
                id={corpusId}
                type="number"
                inputMode="numeric"
                min={0}
                step="1000"
                value={corpus}
                onChange={handleBuilderExtraChange(setCorpus)}
                onKeyDown={handleKeyDown}
                placeholder="0"
                className={INPUT_CLASS}
              />
            </div>
          </div>
        )}

        {errors.builderExtras && (
          <p role="alert" className="mt-2 text-sm text-red-600">
            {errors.builderExtras}
          </p>
        )}
      </fieldset>

      <div className="mt-6 flex gap-4">
        <button
          type="button"
          onClick={handleCalculate}
          className="rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black/40 focus:ring-offset-2"
        >
          Calculate Total Cost
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
          <h3 className="text-xl font-semibold">True Total Cost of Buying This Flat</h3>
          <p className="mt-3 text-4xl font-bold text-blue-700">{formatINR(result.totalCost)}</p>
          <p className="mt-1 text-sm text-gray-500">
            that&apos;s {result.extraCostPercent.toFixed(1)}% over the ₹
            {result.basePrice.toLocaleString("en-IN")} base price
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Flat Purchase Cost Breakdown"
          results={results}
          calculatorName="Flat Buy Calculator"
        />
      )}
    </div>
  );
}