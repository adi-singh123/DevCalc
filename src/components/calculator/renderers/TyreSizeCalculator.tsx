"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

type Size = { width: number; aspect: number; rim: number };
const dimensions = ({ width, aspect, rim }: Size) => { const sidewall = width * aspect / 100; const diameter = rim * 25.4 + sidewall * 2; return { sidewall, diameter, circumference: Math.PI * diameter }; };

export default function TyreSizeCalculator() {
  const [oldSize, setOldSize] = useState<Size>({ width: 195, aspect: 65, rim: 15 });
  const [newSize, setNewSize] = useState<Size>({ width: 205, aspect: 60, rim: 16 });
  const result = useMemo(() => { const oldD = dimensions(oldSize); const newD = dimensions(newSize); const difference = oldD.diameter > 0 ? (newD.diameter - oldD.diameter) / oldD.diameter * 100 : 0; return { oldD, newD, difference, clearance: (newD.diameter - oldD.diameter) / 2, actualSpeed: oldD.diameter > 0 ? 100 * newD.diameter / oldD.diameter : 0 }; }, [oldSize, newSize]);
  const group = (title: string, size: Size, setter: (size: Size) => void) => <fieldset className="rounded-2xl border p-5 dark:border-slate-700"><legend className="px-2 text-lg font-semibold">{title}</legend><div className="grid gap-4 sm:grid-cols-3">{([['width','Width (mm)'],['aspect','Aspect ratio (%)'],['rim','Rim (inches)']] as const).map(([key,label]) => <label key={key}><span className="mb-2 block text-sm font-medium">{label}</span><input type="number" min={key === 'rim' ? 8 : 20} max={key === 'rim' ? 30 : key === 'aspect' ? 95 : 500} value={size[key]} onChange={(e) => setter({ ...size, [key]: Number(e.target.value) })} className="w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-950" /></label>)}</div></fieldset>;
  const status = Math.abs(result.difference) <= 3 ? "Within ±3% comparison band" : "Outside ±3% comparison band";
  return <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"><div className="grid gap-6 lg:grid-cols-2">{group("Original tyre", oldSize, setOldSize)}{group("New tyre", newSize, setNewSize)}</div>
    <ResultsSection title="Tyre size comparison" calculatorName="Tyre Size Calculator" results={[{ label: status, value: `${result.difference >= 0 ? "+" : ""}${result.difference.toFixed(2)}%`, highlight: true }, { label: "Original diameter", value: `${result.oldD.diameter.toFixed(1)} mm` }, { label: "New diameter", value: `${result.newD.diameter.toFixed(1)} mm` }, { label: "Ground-clearance change", value: `${result.clearance >= 0 ? "+" : ""}${result.clearance.toFixed(1)} mm` }, { label: "Actual speed at indicated 100", value: `${result.actualSpeed.toFixed(1)} km/h` }, { label: "Original sidewall", value: `${result.oldD.sidewall.toFixed(1)} mm` }, { label: "New sidewall", value: `${result.newD.sidewall.toFixed(1)} mm` }, { label: "New revolutions per km", value: `${Math.round(1000000 / result.newD.circumference)}` }]} />
    <p className="mt-6 text-sm text-slate-500">The ±3% band is only a preliminary geometry check, not fitment approval. Confirm approved size, rim width and offset, clearance, load index, speed rating, and pressure with the manufacturer or a qualified tyre professional.</p>
  </div>;
}
