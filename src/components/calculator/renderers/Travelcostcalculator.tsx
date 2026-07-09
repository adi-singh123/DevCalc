"use client";

import { useMemo, useRef, useState } from "react";
import ResultsSection from "../ResultsSection";

const FUEL_OPTIONS = [
  { label: "Petrol (₹106/litre)", value: "petrol", defaultPrice: 106, defaultMileage: 16, unit: "litre" },
  { label: "Diesel (₹93/litre)", value: "diesel", defaultPrice: 93, defaultMileage: 15, unit: "litre" },
  { label: "CNG (₹76/kg)", value: "cng", defaultPrice: 76, defaultMileage: 25, unit: "kg" },
] as const;

const TRIP_TYPE_OPTIONS = [
  { label: "One-way", value: "oneway", multiplier: 1 },
  { label: "Round Trip", value: "roundtrip", multiplier: 2 },
] as const;

const HOTEL_TIER_OPTIONS = [
  { label: "Budget (₹1,500/night)", value: "budget", rate: 1500 },
  { label: "Mid-range (₹3,200/night)", value: "midrange", rate: 3200 },
  { label: "Luxury (₹7,000/night)", value: "luxury", rate: 7000 },
] as const;

type FuelValue = (typeof FUEL_OPTIONS)[number]["value"];
type TripTypeValue = (typeof TRIP_TYPE_OPTIONS)[number]["value"];
type HotelTierValue = (typeof HOTEL_TIER_OPTIONS)[number]["value"];

const TOLL_RATE_PER_KM = 1.2; // ₹ per km, one-way, rough NHAI reference

const formatINR = (value: number) =>
  `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;

export default function TravelCostCalculator() {
  const [distance, setDistance] = useState("500");
  const [tripType, setTripType] = useState<TripTypeValue>("roundtrip");
  const [fuelType, setFuelType] = useState<FuelValue>("petrol");
  const [mileage, setMileage] = useState("16");
  const [fuelPrice, setFuelPrice] = useState("106");
  const [travelers, setTravelers] = useState("4");
  const [days, setDays] = useState("3");
  const [hotelTier, setHotelTier] = useState<HotelTierValue>("midrange");
  const [foodPerDay, setFoodPerDay] = useState("800");
  const [submitted, setSubmitted] = useState(false);

  const distanceRef = useRef<HTMLInputElement>(null);
  const mileageRef = useRef<HTMLInputElement>(null);
  const fuelPriceRef = useRef<HTMLInputElement>(null);
  const travelersRef = useRef<HTMLInputElement>(null);
  const daysRef = useRef<HTMLInputElement>(null);
  const foodRef = useRef<HTMLInputElement>(null);

  const result = useMemo(() => {
    if (!submitted) return null;

    const distanceVal = parseFloat(distance);
    const mileageVal = parseFloat(mileage);
    const fuelPriceVal = parseFloat(fuelPrice);
    const travelersVal = parseFloat(travelers);
    const daysVal = parseFloat(days);
    const foodVal = parseFloat(foodPerDay);

    if (
      [distanceVal, mileageVal, fuelPriceVal, travelersVal, daysVal, foodVal].some(
        (v) => isNaN(v) || v <= 0
      )
    ) {
      return null;
    }

    const tripData = TRIP_TYPE_OPTIONS.find((t) => t.value === tripType);
    const hotelData = HOTEL_TIER_OPTIONS.find((h) => h.value === hotelTier);
    if (!tripData || !hotelData) return null;

    const totalDistance = distanceVal * tripData.multiplier;
    const fuelCost = (totalDistance / mileageVal) * fuelPriceVal;
    const tollCost = totalDistance * TOLL_RATE_PER_KM;

    // Hotel cost: nights = days - 1, minimum 1 night if multi-day; shared rooms assumed (2 travelers/room)
    const nights = Math.max(daysVal - 1, 0);
    const roomsNeeded = Math.ceil(travelersVal / 2);
    const accommodationCost = nights * roomsNeeded * hotelData.rate;

    const foodCost = travelersVal * daysVal * foodVal;

    const subtotalBeforeMisc = fuelCost + tollCost + accommodationCost + foodCost;
    const miscBuffer = subtotalBeforeMisc * 0.05;
    const total = subtotalBeforeMisc + miscBuffer;
    const perTraveler = total / travelersVal;

    return {
      fuelCost,
      tollCost,
      accommodationCost,
      foodCost,
      miscBuffer,
      total,
      perTraveler,
    };
  }, [distance, tripType, mileage, fuelPrice, travelers, days, hotelTier, foodPerDay, submitted]);

  const results = result
    ? [
        { label: "Fuel Cost", value: formatINR(result.fuelCost) },
        { label: "Toll Estimate", value: formatINR(result.tollCost) },
        { label: "Accommodation", value: formatINR(result.accommodationCost) },
        { label: "Food", value: formatINR(result.foodCost) },
        { label: "Misc Buffer (5%)", value: formatINR(result.miscBuffer) },
        { label: "Cost Per Traveler", value: formatINR(result.perTraveler) },
      ]
    : [];

  const handleFuelTypeChange = (value: FuelValue) => {
    setFuelType(value);
    const fuelData = FUEL_OPTIONS.find((f) => f.value === value);
    if (fuelData) {
      setMileage(String(fuelData.defaultMileage));
      setFuelPrice(String(fuelData.defaultPrice));
    }
  };

  const handleReset = () => {
    setDistance("500");
    setTripType("roundtrip");
    setFuelType("petrol");
    setMileage("16");
    setFuelPrice("106");
    setTravelers("4");
    setDays("3");
    setHotelTier("midrange");
    setFoodPerDay("800");
    setSubmitted(false);
  };

  return (
    <div className="mt-8 w-full max-w-full overflow-hidden rounded-3xl border bg-white p-4 shadow-sm sm:p-6">
      <h2 className="mb-4 overflow-x-auto text-xl font-semibold">Travel Cost Calculator</h2>

      <div className="flex flex-wrap gap-4">
        <div className="flex-1 basis-[200px] min-w-0">
          <label className="mb-1 block text-sm font-medium text-gray-700">Distance (km, one-way)</label>
          <input
            ref={distanceRef}
            type="number"
            min="1"
            className="w-full min-w-0 rounded-xl border px-3 py-2"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>

        <div className="flex-1 basis-[180px] min-w-0">
          <label className="mb-1 block text-sm font-medium text-gray-700">Trip Type</label>
          <select
            className="w-full min-w-0 rounded-xl border px-3 py-2"
            value={tripType}
            onChange={(e) => setTripType(e.target.value as TripTypeValue)}
          >
            {TRIP_TYPE_OPTIONS.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 basis-[200px] min-w-0">
          <label className="mb-1 block text-sm font-medium text-gray-700">Fuel Type</label>
          <select
            className="w-full min-w-0 rounded-xl border px-3 py-2"
            value={fuelType}
            onChange={(e) => handleFuelTypeChange(e.target.value as FuelValue)}
          >
            {FUEL_OPTIONS.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 basis-[180px] min-w-0">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Mileage (km/{FUEL_OPTIONS.find((f) => f.value === fuelType)?.unit})
          </label>
          <input
            ref={mileageRef}
            type="number"
            min="1"
            className="w-full min-w-0 rounded-xl border px-3 py-2"
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
          />
        </div>

        <div className="flex-1 basis-[180px] min-w-0">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Fuel Price (₹/{FUEL_OPTIONS.find((f) => f.value === fuelType)?.unit})
          </label>
          <input
            ref={fuelPriceRef}
            type="number"
            min="1"
            className="w-full min-w-0 rounded-xl border px-3 py-2"
            value={fuelPrice}
            onChange={(e) => setFuelPrice(e.target.value)}
          />
        </div>

        <div className="flex-1 basis-[160px] min-w-0">
          <label className="mb-1 block text-sm font-medium text-gray-700">Travelers</label>
          <input
            ref={travelersRef}
            type="number"
            min="1"
            className="w-full min-w-0 rounded-xl border px-3 py-2"
            value={travelers}
            onChange={(e) => setTravelers(e.target.value)}
          />
        </div>

        <div className="flex-1 basis-[160px] min-w-0">
          <label className="mb-1 block text-sm font-medium text-gray-700">Days</label>
          <input
            ref={daysRef}
            type="number"
            min="1"
            className="w-full min-w-0 rounded-xl border px-3 py-2"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
        </div>

        <div className="flex-1 basis-56 min-w-0">
          <label className="mb-1 block text-sm font-medium text-gray-700">Hotel Tier</label>
          <select
            className="w-full min-w-0 rounded-xl border px-3 py-2"
            value={hotelTier}
            onChange={(e) => setHotelTier(e.target.value as HotelTierValue)}
          >
            {HOTEL_TIER_OPTIONS.map((h) => (
              <option key={h.value} value={h.value}>
                {h.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 basis-[200px] min-w-0">
          <label className="mb-1 block text-sm font-medium text-gray-700">Food Per Person/Day (₹)</label>
          <input
            ref={foodRef}
            type="number"
            min="1"
            className="w-full min-w-0 rounded-xl border px-3 py-2"
            value={foodPerDay}
            onChange={(e) => setFoodPerDay(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={() => setSubmitted(true)}
          className="flex-1 basis-[140px] min-w-0 rounded-xl bg-teal-600 px-4 py-2 font-medium text-white hover:bg-teal-700"
        >
          Calculate
        </button>
        <button
          onClick={handleReset}
          className="flex-1 basis-[140px] min-w-0 rounded-xl border px-4 py-2 font-medium text-gray-700 hover:bg-gray-50"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-6 overflow-hidden rounded-2xl bg-teal-50 p-5">
          <p className="overflow-x-autoautoautoautoautoautoautoautoauto text-sm text-gray-600">Estimated Total Trip Cost</p>
          <p className="overflow-x-autoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoauto text-3xl font-bold text-teal-700">{formatINR(result.total)}</p>
          <p className="mt-1 overflow-x-autoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoauto text-sm text-gray-600">
            {formatINR(result.perTraveler)} per traveler
          </p>
        </div>
      )}

      {result && (
        <ResultsSection
          title="Trip Cost Breakdown"
          results={results}
          calculatorName="Travel Cost Calculator"
        />
      )}
    </div>
  );
}