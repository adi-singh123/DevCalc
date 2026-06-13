"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function FuelCostCalculator() {
  const [fuelType, setFuelType] =
    useState("Petrol");

  const [dailyDistance, setDailyDistance] =
    useState("");

  const [mileage, setMileage] =
    useState("");

  const [fuelPrice, setFuelPrice] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const fuelData = useMemo(() => {
    if (
      !submitted ||
      !dailyDistance ||
      !mileage ||
      !fuelPrice
    ) {
      return null;
    }

    const distance = Number(
      dailyDistance,
    );

    const vehicleMileage =
      Number(mileage);

    const price =
      Number(fuelPrice);

    if (
      Number.isNaN(distance) ||
      Number.isNaN(vehicleMileage) ||
      Number.isNaN(price) ||
      distance <= 0 ||
      vehicleMileage <= 0 ||
      price <= 0
    ) {
      return null;
    }

    const costPerKm =
      price / vehicleMileage;

    const dailyCost =
      distance * costPerKm;

    const monthlyCost =
      dailyCost * 30;

    const yearlyCost =
      dailyCost * 365;

    return {
      costPerKm,
      dailyCost,
      monthlyCost,
      yearlyCost,
    };
  }, [
    dailyDistance,
    mileage,
    fuelPrice,
    submitted,
  ]);

  const results = fuelData
    ? [
        {
          label: "Fuel Type",
          value: fuelType,
        },
        {
          label: "Cost Per KM",
          value: `₹${fuelData.costPerKm.toFixed(
            2,
          )}`,
        },
        {
          label: "Daily Fuel Cost",
          value: `₹${fuelData.dailyCost.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 2,
            },
          )}`,
        },
        {
          label: "Monthly Fuel Cost",
          value: `₹${fuelData.monthlyCost.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 2,
            },
          )}`,
        },
        {
          label: "Yearly Fuel Cost",
          value: `₹${fuelData.yearlyCost.toLocaleString(
            "en-IN",
            {
              maximumFractionDigits: 2,
            },
          )}`,
          highlight: true,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Fuel Cost Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Calculate daily, monthly,
        yearly fuel expenses and
        running cost per kilometre.
      </p>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Fuel Type
        </label>

        <select
          value={fuelType}
          onChange={(e) =>
            setFuelType(
              e.target.value,
            )
          }
          className="w-full rounded-xl border p-3"
        >
          <option>
            Petrol
          </option>
          <option>
            Diesel
          </option>
          <option>
            CNG
          </option>
        </select>
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Daily Distance (km)
        </label>

        <input
          type="number"
          value={
            dailyDistance
          }
          onChange={(e) =>
            setDailyDistance(
              e.target.value,
            )
          }
          placeholder="50"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Mileage (km/L or km/kg)
        </label>

        <input
          type="number"
          value={mileage}
          onChange={(e) =>
            setMileage(
              e.target.value,
            )
          }
          placeholder="20"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Fuel Price (₹)
        </label>

        <input
          type="number"
          value={fuelPrice}
          onChange={(e) =>
            setFuelPrice(
              e.target.value,
            )
          }
          placeholder="100"
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() =>
            setSubmitted(true)
          }
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate Fuel Cost
        </button>

        <button
          onClick={() => {
            setFuelType(
              "Petrol",
            );
            setDailyDistance(
              "",
            );
            setMileage("");
            setFuelPrice("");
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {fuelData && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Fuel Cost Summary
          </h3>

          <p className="mt-2 text-slate-600">
            Estimated yearly fuel
            expense is{" "}
            <strong>
              ₹
              {fuelData.yearlyCost.toLocaleString(
                "en-IN",
                {
                  maximumFractionDigits: 0,
                },
              )}
            </strong>
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Fuel Cost Results"
          results={results}
        />
      )}
    </div>
  );
}