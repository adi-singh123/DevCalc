"use client";

import { useState } from "react";
import ResultsSection from "../ResultsSection";

type Unit = "feet" | "metres";
const inputClass = "w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-white";
const labelClass = "mb-2 block font-medium";
const format = (value: number, digits = 0) => value.toLocaleString("en-IN", { maximumFractionDigits: digits });
const money = (value: number) => `₹${Math.round(value).toLocaleString("en-IN")}`;

export default function AacBlockCalculator() {
  const [unit, setUnit] = useState<Unit>("feet");
  const [wallLength, setWallLength] = useState("30");
  const [wallHeight, setWallHeight] = useState("10");
  const [openings, setOpenings] = useState("40");
  const [blockLength, setBlockLength] = useState("600");
  const [blockHeight, setBlockHeight] = useState("200");
  const [thickness, setThickness] = useState("150");
  const [wastage, setWastage] = useState("5");
  const [coverage, setCoverage] = useState("8");
  const [blockRate, setBlockRate] = useState("0");
  const [bagRate, setBagRate] = useState("0");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const numbers = [wallLength, wallHeight, blockLength, blockHeight, thickness, coverage].map(Number);
  const optional = [openings, wastage, blockRate, bagRate].map(Number);
  const factor = unit === "feet" ? 0.3048 : 1;
  const grossArea = Number(wallLength) * factor * Number(wallHeight) * factor;
  const openingArea = Number(openings) * factor * factor;
  const valid = numbers.every((n) => Number.isFinite(n) && n > 0) && optional.every((n) => Number.isFinite(n) && n >= 0) && openingArea < grossArea && Number(wastage) <= 30;

  const result = submitted && valid ? (() => {
    const netArea = grossArea - openingArea;
    const faceArea = Number(blockLength) / 1000 * (Number(blockHeight) / 1000);
    const baseBlocks = netArea / faceArea;
    const blocks = Math.ceil(baseBlocks * (1 + Number(wastage) / 100));
    const plannedArea = netArea * (1 + Number(wastage) / 100);
    const bags = Math.ceil(plannedArea / Number(coverage));
    const wallVolume = netArea * Number(thickness) / 1000;
    return { netArea, baseBlocks, blocks, bags, wallVolume, cost: blocks * Number(blockRate) + bags * Number(bagRate) };
  })() : null;

  function calculate() {
    if (!valid) { setError("Enter positive wall and block dimensions. Openings must be smaller than the wall, and wastage must be 0–30%."); setSubmitted(false); return; }
    setError(""); setSubmitted(true);
  }
  function reset() { setUnit("feet"); setWallLength("30"); setWallHeight("10"); setOpenings("40"); setBlockLength("600"); setBlockHeight("200"); setThickness("150"); setWastage("5"); setCoverage("8"); setBlockRate("0"); setBagRate("0"); setSubmitted(false); setError(""); }
  const update = (setter: (v: string) => void) => (event: React.ChangeEvent<HTMLInputElement>) => { setter(event.target.value); setSubmitted(false); };
  const results = result ? [
    { label: "Whole AAC Blocks to Order", value: `${format(result.blocks)} blocks`, highlight: true },
    { label: "Blocks Before Wastage", value: format(result.baseBlocks, 1) },
    { label: "Net Wall Area", value: `${format(result.netArea, 2)} m²` },
    { label: "Wall Volume", value: `${format(result.wallVolume, 2)} m³` },
    { label: "Adhesive Bags", value: `${format(result.bags)} bags` },
    ...(result.cost > 0 ? [{ label: "Estimated Material Cost", value: money(result.cost) }] : []),
  ] : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
      <h2 className="text-2xl font-bold">AAC Wall Details</h2><p className="mt-2 text-slate-600 dark:text-slate-300">Enter the combined length of similar walls and deduct the total door and window area.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div><label className={labelClass}>Wall Unit</label><select value={unit} onChange={(e) => { setUnit(e.target.value as Unit); setSubmitted(false); }} className={inputClass}><option value="feet">Feet / square feet</option><option value="metres">Metres / square metres</option></select></div>
        <div><label className={labelClass}>Total Wall Length ({unit === "feet" ? "ft" : "m"})</label><input type="number" min="0.1" step="0.1" value={wallLength} onChange={update(setWallLength)} className={inputClass} /></div>
        <div><label className={labelClass}>Wall Height ({unit === "feet" ? "ft" : "m"})</label><input type="number" min="0.1" step="0.1" value={wallHeight} onChange={update(setWallHeight)} className={inputClass} /></div>
        <div><label className={labelClass}>Doors & Windows ({unit === "feet" ? "sq ft" : "m²"})</label><input type="number" min="0" step="0.1" value={openings} onChange={update(setOpenings)} className={inputClass} /></div>
        <div><label className={labelClass}>Block Length (mm)</label><input type="number" min="100" value={blockLength} onChange={update(setBlockLength)} className={inputClass} /></div>
        <div><label className={labelClass}>Block Height (mm)</label><input type="number" min="100" value={blockHeight} onChange={update(setBlockHeight)} className={inputClass} /></div>
        <div><label className={labelClass}>Wall / Block Thickness (mm)</label><input type="number" min="50" value={thickness} onChange={update(setThickness)} className={inputClass} /></div>
        <div><label className={labelClass}>Cutting & Breakage (%)</label><input type="number" min="0" max="30" value={wastage} onChange={update(setWastage)} className={inputClass} /></div>
        <div><label className={labelClass}>Verified Adhesive Coverage (m²/bag)</label><input type="number" min="0.1" step="0.1" value={coverage} onChange={update(setCoverage)} className={inputClass} /></div>
        <div><label className={labelClass}>Price per Block (₹, optional)</label><input type="number" min="0" step="0.01" value={blockRate} onChange={update(setBlockRate)} className={inputClass} /></div>
        <div><label className={labelClass}>Price per Adhesive Bag (₹, optional)</label><input type="number" min="0" step="0.01" value={bagRate} onChange={update(setBagRate)} className={inputClass} /></div>
      </div>
      {error && <p role="alert" className="mt-4 text-sm text-red-600">{error}</p>}
      <div className="mt-6 flex flex-wrap gap-3"><button type="button" onClick={calculate} className="rounded-xl bg-black px-6 py-3 font-medium text-white hover:bg-slate-800">Calculate AAC Blocks</button><button type="button" onClick={reset} className="rounded-xl border px-6 py-3 font-medium hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-900">Reset</button></div>
      {results.length > 0 && <ResultsSection title="AAC Block Quantity" results={results} calculatorName="AAC Block Calculator" />}
      <p className="mt-6 text-xs text-slate-500">Confirm actual block dimensions, package quantities, adhesive coverage and project specifications with the supplier and designer before ordering.</p>
    </div>
  );
}
