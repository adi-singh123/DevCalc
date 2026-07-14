"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function EvVsPetrolCalculator() {
  const [distance, setDistance] = useState("");

  // Petrol Inputs
  const [petrolMileage, setPetrolMileage] = useState("");
  const [petrolPrice, setPetrolPrice] = useState("");

  // EV Inputs
  const [evEfficiency, setEvEfficiency] = useState("");
  const [electricityTariff, setElectricityTariff] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const comparisonData = useMemo(() => {
    if (!submitted || !distance || !petrolMileage || !petrolPrice || !evEfficiency || !electricityTariff) {
      return null;
    }

    const km = Number(distance);
    const pMileage = Number(petrolMileage);
    const pPrice = Number(petrolPrice);
    const eEff = Number(evEfficiency);
    const eTariff = Number(electricityTariff);

    if (km <= 0 || pMileage <= 0 || pPrice <= 0 || eEff <= 0 || eTariff <= 0) return null;

    // Calculations
    const petrolCostPerKm = pPrice / pMileage;
    const evCostPerKm = eTariff / eEff;

    const annualPetrolCost = petrolCostPerKm * km;
    const annualEvCost = evCostPerKm * km;
    const annualSavings = annualPetrolCost - annualEvCost;

    return {
      petrolCostPerKm,
      evCostPerKm,
      annualSavings,
    };
  }, [distance, petrolMileage, petrolPrice, evEfficiency, electricityTariff, submitted]);

  const results = comparisonData ? [
    { label: "Petrol Cost per KM", value: `₹${comparisonData.petrolCostPerKm.toFixed(2)}` },
    { label: "EV Cost per KM", value: `₹${comparisonData.evCostPerKm.toFixed(2)}`, highlight: true },
    { label: "Annual Savings", value: `₹${comparisonData.annualSavings.toFixed(0)}`, highlight: true },
  ] : [];

  const handleReset = () => {
    setSubmitted(false);
    setDistance("");
    setPetrolMileage("");
    setPetrolPrice("");
    setEvEfficiency("");
    setElectricityTariff("");
  };

  return (
    <div className="mt-8 w-full max-w-full overflow-hidden rounded-3xl border bg-white p-4 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold">EV vs. Petrol Cost Calculator</h2>
      <p className="mt-2 text-slate-600">Compare your annual fuel expenses between a petrol car and an electric vehicle.</p>

      {/* Grid layout for responsiveness */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">

        {/* Petrol Inputs */}
        <div className="rounded-2xl border bg-slate-50 p-4">
          <h3 className="mb-4 font-semibold">Petrol Car</h3>
          <label className="mb-2 block text-sm font-medium">Mileage (km/L)</label>
          <input type="number" value={petrolMileage} onChange={(e) => setPetrolMileage(e.target.value)} className="mb-4 w-full rounded-xl border p-3" placeholder="15" />

          <label className="mb-2 block text-sm font-medium">Petrol Price (₹/L)</label>
          <input type="number" value={petrolPrice} onChange={(e) => setPetrolPrice(e.target.value)} className="w-full rounded-xl border p-3" placeholder="100" />
        </div>

        {/* EV Inputs */}
        <div className="rounded-2xl border bg-blue-50 p-4">
          <h3 className="mb-4 font-semibold">Electric Vehicle</h3>
          <label className="mb-2 block text-sm font-medium">Efficiency (km/kWh)</label>
          <input type="number" value={evEfficiency} onChange={(e) => setEvEfficiency(e.target.value)} className="mb-4 w-full rounded-xl border p-3" placeholder="6" />

          <label className="mb-2 block text-sm font-medium">Electricity Tariff (₹/kWh)</label>
          <input type="number" value={electricityTariff} onChange={(e) => setElectricityTariff(e.target.value)} className="w-full rounded-xl border p-3" placeholder="8" />
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2 block font-medium">Annual Distance (km)</label>
        <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} className="w-full rounded-xl border p-3" placeholder="15000" />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button onClick={() => setSubmitted(true)} className="w-full rounded-xl bg-black px-6 py-3 text-white transition hover:scale-105">Calculate Savings</button>
        <button onClick={handleReset} className="w-full rounded-xl border px-6 py-3 hover:bg-gray-50">Reset</button>
      </div>

      {results.length > 0 && (
        <div className="mt-8">
          <ResultsSection title="Comparison Results" results={results} calculatorName="EV vs Petrol" />
        </div>
      )}
    </div>
  );
}