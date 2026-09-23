"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

type Scenario = "confirmed" | "tatkal" | "rac-wl" | "train-cancelled" | "late-train";
type TravelClass = "first-ac" | "second-ac" | "third-ac" | "sleeper" | "second-sitting";
type Timing = "over-48" | "48-to-12" | "12-to-4" | "under-4";

const CLASS_OPTIONS: Record<TravelClass, { label: string; minimum: number; ac: boolean }> = {
  "first-ac": { label: "First AC / Executive Class", minimum: 240, ac: true },
  "second-ac": { label: "AC 2 Tier / First Class", minimum: 200, ac: true },
  "third-ac": { label: "AC 3 Tier / AC Chair Car / AC 3 Economy", minimum: 180, ac: true },
  sleeper: { label: "Sleeper Class", minimum: 120, ac: false },
  "second-sitting": { label: "Second Sitting (2S)", minimum: 60, ac: false },
};

const money = (value: number) =>
  `₹${Math.max(0, value).toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;

export default function IRCTCRefundCalculator() {
  const [scenario, setScenario] = useState<Scenario>("confirmed");
  const [fare, setFare] = useState("4000");
  const [passengers, setPassengers] = useState("2");
  const [travelClass, setTravelClass] = useState<TravelClass>("third-ac");
  const [timing, setTiming] = useState<Timing>("48-to-12");
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (!submitted) return null;
    const paidFare = Number(fare);
    const passengerCount = Number(passengers);
    if (!Number.isFinite(paidFare) || paidFare <= 0 || !Number.isInteger(passengerCount) || passengerCount < 1) return null;

    if (scenario === "train-cancelled") {
      return { refund: paidFare, baseCharge: 0, gst: 0, rate: "Full fare", action: "Automatic refund is normally processed for a fully cancelled train." };
    }
    if (scenario === "late-train") {
      return { refund: paidFare, baseCharge: 0, gst: 0, rate: "Full fare, subject to conditions", action: "File TDR before actual departure; nobody on the PNR must travel." };
    }
    if (scenario === "tatkal") {
      return { refund: 0, baseCharge: paidFare, gst: 0, rate: "No voluntary refund", action: "Confirmed Tatkal tickets normally receive no refund on voluntary cancellation." };
    }
    if (scenario === "rac-wl") {
      const baseCharge = Math.min(paidFare, 60 * passengerCount);
      const gst = CLASS_OPTIONS[travelClass].ac ? baseCharge * 0.05 : 0;
      return {
        refund: Math.max(0, paidFare - baseCharge - gst), baseCharge, gst,
        rate: "₹60 clerkage per passenger",
        action: "Cancel up to 30 minutes before scheduled departure. Fully waitlisted e-tickets after charting are normally auto-cancelled.",
      };
    }

    if (timing === "under-4") {
      return { refund: 0, baseCharge: paidFare, gst: 0, rate: "No ordinary refund", action: "The normal confirmed-ticket cancellation deadline has passed; check whether a valid TDR reason applies." };
    }

    const classData = CLASS_OPTIONS[travelClass];
    const minimum = classData.minimum * passengerCount;
    const percentage = timing === "over-48" ? 0 : timing === "48-to-12" ? 0.25 : 0.5;
    const baseCharge = Math.min(paidFare, percentage === 0 ? minimum : Math.max(paidFare * percentage, minimum));
    const gst = classData.ac ? Math.min(paidFare - baseCharge, baseCharge * 0.05) : 0;
    return {
      refund: Math.max(0, paidFare - baseCharge - gst), baseCharge, gst,
      rate: percentage === 0 ? "Flat class charge" : `${percentage * 100}% of fare, subject to minimum`,
      action: "Cancel the selected passengers online before the applicable deadline and verify the final amount shown by IRCTC.",
    };
  }, [fare, passengers, scenario, timing, travelClass, submitted]);

  const results = result ? [
    { label: "Estimated Refund", value: money(result.refund), highlight: true },
    { label: "Entered Eligible Fare", value: money(Number(fare)) },
    { label: "Base Cancellation Charge", value: money(result.baseCharge) },
    { label: "Estimated GST on Charge", value: money(result.gst) },
    { label: "Rule Applied", value: result.rate },
  ] : [];

  return (
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-6">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Estimate Your IRCTC Refund</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Enter only the fare for passengers being cancelled. This estimate does not promise the amount IRCTC will sanction.</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium">Ticket situation</span>
          <select value={scenario} onChange={(e) => { setScenario(e.target.value as Scenario); setSubmitted(false); }} className="w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-950">
            <option value="confirmed">Regular confirmed ticket</option>
            <option value="tatkal">Confirmed Tatkal ticket</option>
            <option value="rac-wl">RAC or waitlisted ticket</option>
            <option value="train-cancelled">Train fully cancelled by Railways</option>
            <option value="late-train">Train over 3 hours late; nobody travelled</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium">Eligible fare paid (₹)</span>
          <input type="number" min="1" step="0.01" value={fare} onChange={(e) => { setFare(e.target.value); setSubmitted(false); }} className="w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-950" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Passengers being cancelled</span>
          <input type="number" min="1" step="1" value={passengers} onChange={(e) => { setPassengers(e.target.value); setSubmitted(false); }} className="w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-950" />
        </label>

        {(scenario === "confirmed" || scenario === "rac-wl") && (
          <label className="block">
            <span className="mb-2 block text-sm font-medium">Travel class</span>
            <select value={travelClass} onChange={(e) => { setTravelClass(e.target.value as TravelClass); setSubmitted(false); }} className="w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-950">
              {Object.entries(CLASS_OPTIONS).map(([value, item]) => <option key={value} value={value}>{item.label}</option>)}
            </select>
          </label>
        )}

        {scenario === "confirmed" && (
          <label className="block">
            <span className="mb-2 block text-sm font-medium">Cancellation time before departure</span>
            <select value={timing} onChange={(e) => { setTiming(e.target.value as Timing); setSubmitted(false); }} className="w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-950">
              <option value="over-48">More than 48 hours</option>
              <option value="48-to-12">48 to 12 hours</option>
              <option value="12-to-4">12 to 4 hours</option>
              <option value="under-4">Less than 4 hours</option>
            </select>
          </label>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button onClick={() => setSubmitted(true)} className="rounded-xl bg-[#26364a] px-6 py-3 font-semibold text-white transition hover:bg-[#1b2939]">Calculate Refund</button>
        <button onClick={() => { setScenario("confirmed"); setFare("4000"); setPassengers("2"); setTravelClass("third-ac"); setTiming("48-to-12"); setSubmitted(false); }} className="rounded-xl border px-6 py-3 font-semibold dark:border-slate-700">Reset</button>
      </div>

      {submitted && !result && <p className="mt-5 rounded-xl bg-red-50 p-4 text-sm text-red-700">Enter a positive fare and a whole-number passenger count.</p>}
      {result && (
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100">
          <strong>What to do:</strong> {result.action}
        </div>
      )}
      {results.length > 0 && <ResultsSection title="Estimated IRCTC Refund" results={results} calculatorName="IRCTC Ticket Cancellation Refund" />}
      <p className="mt-5 text-xs leading-5 text-slate-500 dark:text-slate-400">Estimate based on published rules reviewed September 2026. Convenience fee, payment charges, insurance, catering, rounding, special trains, mixed PNR status and TDR decisions may change the actual credit.</p>
    </div>
  );
}
