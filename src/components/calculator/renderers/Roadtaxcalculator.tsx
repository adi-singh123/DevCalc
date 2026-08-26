"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";
import {
  ROAD_TAX_SLABS,
  calculateRoadTax,
  type FuelType,
  type VehicleType,
type StateTaxConfig,
} from "@/src/data/calculators/vehical/Roadtaxslabs";

export default function RoadTaxCalculator({
  defaultStateCode,
}: {
  defaultStateCode?: string;
} = {}) {
  const [stateCode, setStateCode] = useState(
    defaultStateCode || ROAD_TAX_SLABS[0]?.stateCode || "DL",
  );

  const [vehicleType, setVehicleType] =
    useState<VehicleType>("car");

  const [fuelType, setFuelType] =
    useState<FuelType>("petrol");

  const [exShowroomPrice, setExShowroomPrice] =
    useState("");

  const [isFinanced, setIsFinanced] =
    useState(false);

  const [submitted, setSubmitted] = useState(false);

  const roadTaxData = useMemo(() => {
    if (!submitted || !exShowroomPrice) {
      return null;
    }

    const price = Number(exShowroomPrice);

    if (Number.isNaN(price) || price <= 0) {
      return null;
    }

    try {
      return calculateRoadTax({
        stateCode,
        vehicleType,
        fuelType,
        exShowroomPrice: price,
        isFinanced,
      });
    } catch {
      return null;
    }
  }, [
    stateCode,
    vehicleType,
    fuelType,
    exShowroomPrice,
    isFinanced,
    submitted,
  ]);

  // Bikes only support petrol/ev in the underlying slab model
  const availableFuelTypes: { value: FuelType; label: string }[] =
    vehicleType === "bike"
      ? [
          { value: "petrol", label: "Petrol" },
          { value: "ev", label: "Electric Vehicle (EV)" },
        ]
      : [
          { value: "petrol", label: "Petrol" },
          { value: "diesel", label: "Diesel" },
          { value: "cng", label: "CNG" },
          { value: "ev", label: "Electric Vehicle (EV)" },
        ];

  const priceLabel =
    stateCode &&
    ROAD_TAX_SLABS.find((s) => s.stateCode === stateCode)?.usesPreGstBase
      ? "Ex-Showroom Price (₹) — this state taxes pre-GST value"
      : "Ex-Showroom Price (₹)";

  const results = roadTaxData
    ? [
        {
          label: "Applicable Tax Rate",
          value: `${roadTaxData.ratePercent}%`,
          highlight: true,
        },
        {
          label: "Road Tax Amount",
          value: `₹${roadTaxData.roadTax.toLocaleString("en-IN")}`,
        },
        {
          label: "Fixed RTO Charges",
          value: `₹${roadTaxData.fixedCharges.total.toLocaleString(
            "en-IN",
          )}`,
        },
        {
          label: "Total RTO Addition",
          value: `₹${roadTaxData.totalRtoAddition.toLocaleString(
            "en-IN",
          )}`,
        },
      ]
    : [];

  return (
    <div className="mt-8 w-full max-w-full overflow-hidden rounded-3xl border bg-white p-4 shadow-sm sm:p-6">
      <p className="mt-2 text-slate-600">
        Calculate road tax, RTO registration charges, and total on-road
        addition for cars and bikes across Indian states — petrol, diesel,
        CNG, and EV.
      </p>

      {/* State */}
      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Select State / UT
        </label>

        <select
          value={stateCode}
          onChange={(e) => setStateCode(e.target.value)}
          className="w-full rounded-xl border p-3"
        >
      {ROAD_TAX_SLABS.map((state: StateTaxConfig) => (
  <option key={state.stateCode} value={state.stateCode}>
    {state.stateName}
  </option>
))}
        </select>
      </div>

      {/* Vehicle Type */}
      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Vehicle Type
        </label>

        <select
          value={vehicleType}
          onChange={(e) => {
            const newType = e.target.value as VehicleType;
            setVehicleType(newType);
            // Reset fuel type if current selection isn't valid for bikes
            if (
              newType === "bike" &&
              fuelType !== "petrol" &&
              fuelType !== "ev"
            ) {
              setFuelType("petrol");
            }
          }}
          className="w-full rounded-xl border p-3"
        >
          <option value="car">Car</option>
          <option value="bike">Bike / Two-Wheeler</option>
        </select>
      </div>

      {/* Fuel Type */}
      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Fuel Type
        </label>

        <select
          value={fuelType}
          onChange={(e) =>
            setFuelType(e.target.value as FuelType)
          }
          className="w-full rounded-xl border p-3"
        >
          {availableFuelTypes.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Ex-Showroom Price */}
      <div className="mt-4">
        <label className="mb-2 block font-medium">
          {priceLabel}
        </label>

        <input
          type="number"
          value={exShowroomPrice}
          onChange={(e) => setExShowroomPrice(e.target.value)}
          placeholder="1200000"
          className="w-full rounded-xl border p-3"
        />
      </div>

      {/* Financed checkbox */}
      <div className="mt-4 flex items-center gap-2">
        <input
          id="financed"
          type="checkbox"
          checked={isFinanced}
          onChange={(e) => setIsFinanced(e.target.checked)}
          className="h-4 w-4 rounded border"
        />
        <label htmlFor="financed" className="font-medium">
          Vehicle is being financed (adds hypothecation charge)
        </label>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button
          onClick={() => setSubmitted(true)}
          className="w-full cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg sm:w-auto"
        >
          Calculate Road Tax
        </button>

        <button
          onClick={() => {
            setStateCode(ROAD_TAX_SLABS[0]?.stateCode || "DL");
            setVehicleType("car");
            setFuelType("petrol");
            setExShowroomPrice("");
            setIsFinanced(false);
            setSubmitted(false);
          }}
          className="w-full cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg sm:w-auto"
        >
          Reset
        </button>
      </div>

      {/* Summary */}
      {roadTaxData && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Road Tax Summary — {roadTaxData.stateName}
          </h3>

          <p className="mt-3 text-slate-600">
            Your total RTO addition to on-road price is
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-700">
            ₹{roadTaxData.totalRtoAddition.toLocaleString("en-IN")}
          </p>

          {roadTaxData.notes.length > 0 && (
            <div className="mt-4 space-y-1 text-left">
              {roadTaxData.notes.map((note: string, i:number) => (
                <p key={i} className="text-sm text-slate-500">
                  ⓘ {note}
                </p>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <ResultsSection
          title="Road Tax Results"
          results={results}
          calculatorName="Road Tax Results"
        />
      )}

      {/* Disclaimer — always visible, not just after calculation */}
      <p className="mt-6 text-xs text-slate-400">
        Estimates are based on standard 2026 state RTO slabs and may vary
        due to state-specific cesses or recent policy changes. Always
        verify the final amount with your local RTO before making a
        purchase decision.
      </p>
    </div>
  );
}