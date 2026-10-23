"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

const unitBytes = { KiB: 1024, MiB: 1024 ** 2, GiB: 1024 ** 3, TiB: 1024 ** 4 } as const;

function formatBytes(bytes: number) {
  const units = ["B", "KiB", "MiB", "GiB", "TiB", "PiB"];
  let value = bytes;
  let index = 0;
  while (value >= 1024 && index < units.length - 1) { value /= 1024; index += 1; }
  return `${value.toLocaleString(undefined, { maximumFractionDigits: 2 })} ${units[index]}`;
}

export default function StorageCapacityCalculator() {
  const [itemCount, setItemCount] = useState("");
  const [averageSize, setAverageSize] = useState("");
  const [sizeUnit, setSizeUnit] = useState<keyof typeof unitBytes>("MiB");
  const [copies, setCopies] = useState("1");
  const [reserve, setReserve] = useState("20");
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (!submitted) return null;
    const count = Number(itemCount); const size = Number(averageSize); const copyCount = Number(copies); const reservePercent = Number(reserve);
    if (![count, size, copyCount, reservePercent].every(Number.isFinite) || count <= 0 || size <= 0 || !Number.isInteger(copyCount) || copyCount < 1 || reservePercent < 0 || reservePercent > 500) return null;
    const logical = count * size * unitBytes[sizeUnit];
    const replicated = logical * copyCount;
    return { logical, replicated, provisioned: replicated * (1 + reservePercent / 100) };
  }, [averageSize, copies, itemCount, reserve, sizeUnit, submitted]);

  const results = result ? [
    { label: "Logical data size", value: formatBytes(result.logical) },
    { label: "Size after copies", value: formatBytes(result.replicated) },
    { label: "Capacity to provision", value: formatBytes(result.provisioned), highlight: true },
  ] : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-6">
      <p className="text-slate-600 dark:text-slate-300">Estimate logical data size, replicated storage, and reserved capacity using binary storage units.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="font-medium">Number of files or records<input type="number" min="1" inputMode="numeric" value={itemCount} onChange={(event) => setItemCount(event.target.value)} placeholder="100000" className="mt-2 w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-950" /></label>
        <label className="font-medium">Average size per item<div className="mt-2 flex gap-2"><input type="number" min="0" inputMode="decimal" value={averageSize} onChange={(event) => setAverageSize(event.target.value)} placeholder="2.5" className="min-w-0 flex-1 rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-950" /><select value={sizeUnit} onChange={(event) => setSizeUnit(event.target.value as keyof typeof unitBytes)} className="rounded-xl border bg-white p-3 dark:border-slate-700 dark:bg-slate-950"><option>KiB</option><option>MiB</option><option>GiB</option><option>TiB</option></select></div></label>
        <label className="font-medium">Stored copies<input type="number" min="1" step="1" inputMode="numeric" value={copies} onChange={(event) => setCopies(event.target.value)} className="mt-2 w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-950" /></label>
        <label className="font-medium">Capacity reserve (%)<input type="number" min="0" max="500" inputMode="decimal" value={reserve} onChange={(event) => setReserve(event.target.value)} className="mt-2 w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-950" /></label>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row"><button onClick={() => setSubmitted(true)} className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white hover:bg-violet-700">Calculate Storage</button><button onClick={() => { setItemCount(""); setAverageSize(""); setSizeUnit("MiB"); setCopies("1"); setReserve("20"); setSubmitted(false); }} className="rounded-xl border px-6 py-3 dark:border-slate-700">Reset</button></div>
      {submitted && !result && <p className="mt-4 text-sm text-red-600">Enter positive sizes, a whole-number copy count, and a reserve from 0% to 500%.</p>}
      {results.length > 0 && <ResultsSection title="Storage Capacity Estimate" results={results} calculatorName="Storage Capacity Calculator" />}
    </div>
  );
}
