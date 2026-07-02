"use client";

import { useMemo, useRef, useState } from "react";
import ResultsSection from "../ResultsSection";

const PARTY_TYPE_OPTIONS = [
  { label: "Kids' Birthday", value: "kids", returnGiftCost: 250, cakeBase: 1000 },
  { label: "Adult Birthday", value: "adult", returnGiftCost: 0, cakeBase: 1500 },
  { label: "Anniversary", value: "anniversary", returnGiftCost: 0, cakeBase: 1800 },
  { label: "General Get-together", value: "general", returnGiftCost: 0, cakeBase: 1200 },
] as const;

const VENUE_OPTIONS = [
  { label: "Home / Terrace", value: "home", baseCost: 3000, multiplier: 1 },
  { label: "Community Hall", value: "community", baseCost: 15000, multiplier: 1 },
  { label: "Banquet Hall", value: "banquet", baseCost: 45000, multiplier: 1 },
  { label: "Premium Venue", value: "premium", baseCost: 90000, multiplier: 1 },
] as const;

const CATERING_OPTIONS = [
  { label: "Basic ", value: "basic", rate: 350 },
  { label: "Standard ", value: "standard", rate: 700 },
  { label: "Premium", value: "premium", rate: 1300 },
] as const;

type PartyTypeValue = (typeof PARTY_TYPE_OPTIONS)[number]["value"];
type VenueValue = (typeof VENUE_OPTIONS)[number]["value"];
type CateringValue = (typeof CATERING_OPTIONS)[number]["value"];

const formatINR = (value: number) =>
  `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;

export default function PartyBudgetCalculator() {
  const [partyType, setPartyType] = useState<PartyTypeValue>("kids");
  const [guests, setGuests] = useState("40");
  const [venue, setVenue] = useState<VenueValue>("banquet");
  const [catering, setCatering] = useState<CateringValue>("standard");
  const [entertainmentBudget, setEntertainmentBudget] = useState("5000");
  const [submitted, setSubmitted] = useState(false);

  const guestsRef = useRef<HTMLInputElement>(null);
  const entertainmentRef = useRef<HTMLInputElement>(null);

  const result = useMemo(() => {
    if (!submitted) return null;

    const guestCount = parseFloat(guests);
    const entertainment = parseFloat(entertainmentBudget);

    if (isNaN(guestCount) || isNaN(entertainment) || guestCount <= 0 || entertainment < 0) {
      return null;
    }

    const partyData = PARTY_TYPE_OPTIONS.find((p) => p.value === partyType);
    const venueData = VENUE_OPTIONS.find((v) => v.value === venue);
    const cateringData = CATERING_OPTIONS.find((c) => c.value === catering);
    if (!partyData || !venueData || !cateringData) return null;

    // Mild volume discount on catering above 75 guests
    const effectiveCateringRate =
      guestCount > 75 ? cateringData.rate * 0.9 : cateringData.rate;

    const venueCost = venueData.baseCost;
    const cateringCost = guestCount * effectiveCateringRate;
    const decorationCost = venueData.baseCost * 0.25;
    const cakeCost = partyData.cakeBase + guestCount * 15;
    const returnGiftsCost = guestCount * partyData.returnGiftCost;

    const total =
      venueCost + cateringCost + decorationCost + cakeCost + entertainment + returnGiftsCost;
    const perGuest = total / guestCount;

    return {
      venueCost,
      cateringCost,
      decorationCost,
      cakeCost,
      entertainment,
      returnGiftsCost,
      total,
      perGuest,
    };
  }, [partyType, guests, venue, catering, entertainmentBudget, submitted]);

  const results = result
    ? [
        { label: "Venue", value: formatINR(result.venueCost) },
        { label: "Catering", value: formatINR(result.cateringCost) },
        { label: "Decoration", value: formatINR(result.decorationCost) },
        { label: "Cake", value: formatINR(result.cakeCost) },
        { label: "Entertainment", value: formatINR(result.entertainment) },
        { label: "Return Gifts", value: formatINR(result.returnGiftsCost) },
        { label: "Cost Per Guest", value: formatINR(result.perGuest) },
      ]
    : [];

  const handleReset = () => {
    setPartyType("kids");
    setGuests("40");
    setVenue("banquet");
    setCatering("standard");
    setEntertainmentBudget("5000");
    setSubmitted(false);
  };

  return (
    <div className="mt-8 w-full max-w-full overflow-hidden rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold overflow-x-autoautoauto">Party Budget Calculator</h2>

      <div className="flex flex-wrap gap-4">
       <div className="flex-[2_1_260px] min-w-[200px]">
          <label className="mb-1 block text-sm font-medium text-gray-700">Party Type</label>
          <select
            className="w-full min-w-0 rounded-xl border px-3 py-2 pr-8"
            value={partyType}
            onChange={(e) => setPartyType(e.target.value as PartyTypeValue)}
          >
            {PARTY_TYPE_OPTIONS.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 basis-[180px] min-w-[140px]">
          <label className="mb-1 block text-sm font-medium text-gray-700">Number of Guests</label>
          <input
            ref={guestsRef}
            type="number"
            min="1"
            className="w-full min-w-0 rounded-xl border px-3 py-2"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>

        <div className="flex-1 basis-56 min-w-[160px]">
          <label className="mb-1 block text-sm font-medium text-gray-700">Venue Type</label>
          <select
            className="w-full min-w-0 rounded-xl border px-3 py-2"
            value={venue}
            onChange={(e) => setVenue(e.target.value as VenueValue)}
          >
            {VENUE_OPTIONS.map((v) => (
              <option key={v.value} value={v.value}>
                {v.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 basis-56 min-w-[160px]">
          <label className="mb-1 block text-sm font-medium text-gray-700">Catering Tier</label>
          <select
            className="w-full min-w-0 rounded-xl border px-3 py-2"
            value={catering}
            onChange={(e) => setCatering(e.target.value as CateringValue)}
          >
            {CATERING_OPTIONS.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-[2_1_260px] min-w-[200px]">
          <label className="mb-1 block text-sm font-medium text-gray-700">Entertainment Budget (₹)</label>
          <input
            ref={entertainmentRef}
            type="number"
            min="0"
            className="w-full min-w-0 rounded-xl border px-3 py-2"
            value={entertainmentBudget}
            onChange={(e) => setEntertainmentBudget(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={() => setSubmitted(true)}
          className="flex-1 basis-[140px] min-w-[100px] rounded-xl bg-amber-600 px-4 py-2 font-medium text-white hover:bg-amber-700"
        >
          Calculate
        </button>
        <button
          onClick={handleReset}
          className="flex-1 basis-[140px] min-w-[100px] rounded-xl border px-4 py-2 font-medium text-gray-700 hover:bg-gray-50"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-6 overflow-hidden rounded-2xl bg-amber-50 p-5">
          <p className="overflow-x-autoautoautoautoautoautoautoautoauto text-sm text-gray-600">Estimated Total Party Cost</p>
          <p className="overflow-x-autoautoautoautoautoautoautoautoautoautoautoauto text-3xl font-bold text-amber-700">{formatINR(result.total)}</p>
          <p className="mt-1 overflow-x-autoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoautoauto text-sm text-gray-600">
            {formatINR(result.perGuest)} per guest
          </p>
        </div>
      )}

      {result && (
        <ResultsSection
          title="Budget Breakdown"
          results={results}
          calculatorName="Party Budget Calculator"
        />
      )}
    </div>
  );
}