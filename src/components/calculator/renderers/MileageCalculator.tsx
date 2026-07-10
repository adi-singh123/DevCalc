"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function MileageCalculator() {
  const [vehicleType, setVehicleType] =
    useState("petrol");

  const [distance, setDistance] = useState("");
  const [fuelUsed, setFuelUsed] = useState("");
  const [fuelPrice, setFuelPrice] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const mileageData = useMemo(() => {
    if (
      !submitted ||
      !distance ||
      !fuelUsed
    ) {
      return null;
    }

    const km = Number(distance);
    const consumed = Number(fuelUsed);
    const price = Number(fuelPrice || 0);

    if (
      Number.isNaN(km) ||
      Number.isNaN(consumed) ||
      km <= 0 ||
      consumed <= 0
    ) {
      return null;
    }

    const mileage = km / consumed;

    const totalCost =
      price > 0 ? consumed * price : 0;

    const costPerKm =
      totalCost > 0 ? totalCost / km : 0;

    const costPer100Km =
      totalCost > 0 ? costPerKm * 100 : 0;

    return {
      mileage,
      totalCost,
      costPerKm,
      costPer100Km,
    };
  }, [
    distance,
    fuelUsed,
    fuelPrice,
    submitted,
  ]);

  const mileageUnit =
    vehicleType === "ev"
      ? "km/kWh"
      : vehicleType === "cng"
        ? "km/kg"
        : "km/L";

  const consumptionLabel =
    vehicleType === "ev"
      ? "Electricity Consumed (kWh)"
      : vehicleType === "cng"
        ? "CNG Consumed (kg)"
        : "Fuel Consumed (L)";

  const priceLabel =
    vehicleType === "ev"
      ? "Electricity Cost per kWh (₹)"
      : vehicleType === "cng"
        ? "CNG Price per kg (₹)"
        : "Fuel Price per Litre (₹)";

  const results = mileageData
    ? [
        {
          label: `Efficiency (${mileageUnit})`,
          value:
            mileageData.mileage.toFixed(2),
          highlight: true,
        },
        {
          label: "Total Cost",
          value:
            fuelPrice !== ""
              ? `₹${mileageData.totalCost.toFixed(
                  2,
                )}`
              : "-",
        },
        {
          label: "Cost per KM",
          value:
            fuelPrice !== ""
              ? `₹${mileageData.costPerKm.toFixed(
                  2,
                )}`
              : "-",
        },
        {
          label: "Cost per 100 KM",
          value:
            fuelPrice !== ""
              ? `₹${mileageData.costPer100Km.toFixed(
                  2,
                )}`
              : "-",
        },
      ]
    : [];

  return (
    <div className="mt-8 w-full max-w-full overflow-hidden rounded-3xl border bg-white p-4 shadow-sm sm:p-6">
   
      <p className="mt-2 text-slate-600">
        Calculate mileage, fuel efficiency,
        electricity efficiency, and running
        costs for Petrol, Diesel, CNG, and
        Electric Vehicles.
      </p>

      {/* Vehicle Type */}
      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Vehicle Type
        </label>

        <select
          value={vehicleType}
          onChange={(e) =>
            setVehicleType(
              e.target.value,
            )
          }
          className="w-full rounded-xl border p-3"
        >
          <option value="petrol">
            Petrol
          </option>

          <option value="diesel">
            Diesel
          </option>

          <option value="cng">
            CNG
          </option>

          <option value="ev">
            Electric Vehicle (EV)
          </option>
        </select>
      </div>

      {/* Distance */}
      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Distance Travelled (km)
        </label>

        <input
          type="number"
          value={distance}
          onChange={(e) =>
            setDistance(e.target.value)
          }
          placeholder="500"
          className="w-full rounded-xl border p-3"
        />
      </div>

      {/* Consumption */}
      <div className="mt-4">
        <label className="mb-2 block font-medium">
          {consumptionLabel}
        </label>

        <input
          type="number"
          value={fuelUsed}
          onChange={(e) =>
            setFuelUsed(e.target.value)
          }
          placeholder={
            vehicleType === "ev"
              ? "75"
              : "25"
          }
          className="w-full rounded-xl border p-3"
        />
      </div>

      {/* Price */}
      <div className="mt-4">
        <label className="mb-2 block font-medium">
          {priceLabel}
        </label>

        <input
          type="number"
          value={fuelPrice}
          onChange={(e) =>
            setFuelPrice(e.target.value)
          }
          placeholder={
            vehicleType === "ev"
              ? "8"
              : "100"
          }
          className="w-full rounded-xl border p-3"
        />
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button
          onClick={() =>
            setSubmitted(true)
          }
          className="w-full cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg sm:w-auto"
        >
          Calculate Mileage
        </button>

        <button
          onClick={() => {
            setVehicleType("petrol");
            setDistance("");
            setFuelUsed("");
            setFuelPrice("");
            setSubmitted(false);
          }}
          className="w-full cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg sm:w-auto"
        >
          Reset
        </button>
      </div>

      {/* Summary */}
      {mileageData && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Mileage Summary
          </h3>

          <p className="mt-3 text-slate-600">
            Your vehicle efficiency is
          </p>

          <p className="mt-2 text-3xl font-bold text-blue-700">
            {mileageData.mileage.toFixed(2)}{" "}
            {mileageUnit}
          </p>
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <ResultsSection
          title="Mileage Results"
          results={results}
          calculatorName="Mileage Results"

        />
      )}
    </div>
  );
}