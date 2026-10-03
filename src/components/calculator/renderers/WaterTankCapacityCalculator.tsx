"use client";

import { useId, useState } from "react";
import ResultsSection from "../ResultsSection";

type Shape = "rectangular" | "cylindrical";
type Unit = "feet" | "metres";

const inputClass = "w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-white";
const labelClass = "mb-2 block font-medium";
const format = (value: number, digits = 0) => value.toLocaleString("en-IN", { maximumFractionDigits: digits });

export default function WaterTankCapacityCalculator() {
  const shapeId = useId();
  const unitId = useId();
  const [shape, setShape] = useState<Shape>("rectangular");
  const [unit, setUnit] = useState<Unit>("feet");
  const [length, setLength] = useState("6");
  const [width, setWidth] = useState("4");
  const [height, setHeight] = useState("4");
  const [diameter, setDiameter] = useState("5");
  const [fill, setFill] = useState("90");
  const [people, setPeople] = useState("4");
  const [dailyUse, setDailyUse] = useState("135");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const factor = unit === "feet" ? 0.3048 : 1;
  const values = [height, fill, people, dailyUse, ...(shape === "rectangular" ? [length, width] : [diameter])].map(Number);
  const valid = values.every(Number.isFinite) && values.every((value) => value > 0) && Number(fill) <= 100 && Number(people) <= 100 && Number(dailyUse) <= 1000;

  const result = submitted && valid ? (() => {
    const heightM = Number(height) * factor;
    const cubicMetres = shape === "rectangular"
      ? Number(length) * factor * Number(width) * factor * heightM
      : Math.PI * Math.pow((Number(diameter) * factor) / 2, 2) * heightM;
    const grossLitres = cubicMetres * 1000;
    const usableLitres = grossLitres * Number(fill) / 100;
    return { cubicMetres, grossLitres, usableLitres, days: usableLitres / (Number(people) * Number(dailyUse)) };
  })() : null;

  function calculate() {
    if (!valid) {
      setError("Enter positive dimensions and usage values. Fill level must not exceed 100%.");
      setSubmitted(false);
      return;
    }
    setError("");
    setSubmitted(true);
  }

  function reset() {
    setShape("rectangular"); setUnit("feet"); setLength("6"); setWidth("4"); setHeight("4"); setDiameter("5"); setFill("90"); setPeople("4"); setDailyUse("135"); setSubmitted(false); setError("");
  }

  const results = result ? [
    { label: "Usable Water Capacity", value: `${format(result.usableLitres)} litres`, highlight: true },
    { label: "Gross Tank Capacity", value: `${format(result.grossLitres)} litres` },
    { label: "Volume", value: `${format(result.cubicMetres, 3)} m³` },
    { label: "US Gallons", value: `${format(result.usableLitres / 3.78541)} gal` },
    { label: "Estimated Household Supply", value: `${format(result.days, 1)} days` },
  ] : [];

  const field = (label: string, value: string, setter: (value: string) => void) => (
    <div><label className={labelClass}>{label} ({unit === "feet" ? "ft" : "m"})</label><input type="number" min="0.01" step="0.01" inputMode="decimal" value={value} onChange={(event) => { setter(event.target.value); setSubmitted(false); }} className={inputClass} /></div>
  );

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
      <h2 className="text-2xl font-bold">Tank Dimensions</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Use clear internal dimensions, not the outside size of the tank.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div><label htmlFor={shapeId} className={labelClass}>Tank Shape</label><select id={shapeId} value={shape} onChange={(event) => { setShape(event.target.value as Shape); setSubmitted(false); }} className={inputClass}><option value="rectangular">Rectangular / Square</option><option value="cylindrical">Vertical Cylinder</option></select></div>
        <div><label htmlFor={unitId} className={labelClass}>Dimension Unit</label><select id={unitId} value={unit} onChange={(event) => { setUnit(event.target.value as Unit); setSubmitted(false); }} className={inputClass}><option value="feet">Feet</option><option value="metres">Metres</option></select></div>
        {shape === "rectangular" ? <>{field("Internal Length", length, setLength)}{field("Internal Width", width, setWidth)}</> : field("Internal Diameter", diameter, setDiameter)}
        {field("Internal Height", height, setHeight)}
        <div><label className={labelClass}>Usable Fill Level (%)</label><input type="number" min="1" max="100" value={fill} onChange={(event) => { setFill(event.target.value); setSubmitted(false); }} className={inputClass} /></div>
        <div><label className={labelClass}>Household Members</label><input type="number" min="1" max="100" value={people} onChange={(event) => { setPeople(event.target.value); setSubmitted(false); }} className={inputClass} /></div>
        <div><label className={labelClass}>Daily Use per Person (litres)</label><input type="number" min="1" max="1000" value={dailyUse} onChange={(event) => { setDailyUse(event.target.value); setSubmitted(false); }} className={inputClass} /></div>
      </div>
      {error && <p role="alert" className="mt-4 text-sm text-red-600">{error}</p>}
      <div className="mt-6 flex flex-wrap gap-3"><button type="button" onClick={calculate} className="rounded-xl bg-black px-6 py-3 font-medium text-white hover:bg-slate-800">Calculate Capacity</button><button type="button" onClick={reset} className="rounded-xl border px-6 py-3 font-medium hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-900">Reset</button></div>
      {results.length > 0 && <ResultsSection title="Water Tank Capacity" results={results} calculatorName="Water Tank Capacity Calculator" />}
      <p className="mt-6 text-xs text-slate-500">Volume and duration are planning estimates. Confirm structural, plumbing, waterproofing, and local requirements separately.</p>
    </div>
  );
}
