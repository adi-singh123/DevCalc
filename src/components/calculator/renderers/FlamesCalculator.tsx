"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

const labels = ["Friends", "Love", "Affection", "Marriage", "Enemies", "Siblings"];

export default function FlamesCalculator() {
  const [first, setFirst] = useState(""); const [second, setSecond] = useState(""); const [submitted, setSubmitted] = useState(false);
  const result = useMemo(() => {
    if (!submitted) return null;
    const a = first.toLowerCase().replace(/[^a-z]/g, "").split(""); const b = second.toLowerCase().replace(/[^a-z]/g, "").split("");
    if (!a.length || !b.length) return null;
    const remaining = [...b]; let unmatched = 0;
    for (const char of a) { const index = remaining.indexOf(char); if (index >= 0) remaining.splice(index, 1); else unmatched++; }
    const count = unmatched + remaining.length; const step = count || 6; const choices = [...labels]; let index = 0;
    while (choices.length > 1) { index = (index + step - 1) % choices.length; choices.splice(index, 1); }
    return { label: choices[0], count };
  }, [first, second, submitted]);
  const messages: Record<string,string> = { Friends: "A playful friendship result.", Love: "The classic game lands on Love.", Affection: "A warm Affection result.", Marriage: "The game points to Marriage.", Enemies: "A dramatic game result—do not take it seriously!", Siblings: "A sibling-like bond in the FLAMES game." };
  return <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"><div className="grid gap-5 sm:grid-cols-2"><label><span className="mb-2 block font-medium">First name</span><input value={first} onChange={(e) => { setFirst(e.target.value); setSubmitted(false); }} placeholder="Enter first name" className="w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-950" /></label><label><span className="mb-2 block font-medium">Second name</span><input value={second} onChange={(e) => { setSecond(e.target.value); setSubmitted(false); }} placeholder="Enter second name" className="w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-950" /></label></div><div className="mt-6 flex gap-3"><button onClick={() => setSubmitted(true)} className="rounded-xl bg-pink-600 px-6 py-3 font-medium text-white hover:bg-pink-700">Play FLAMES</button><button onClick={() => { setFirst(""); setSecond(""); setSubmitted(false); }} className="rounded-xl border px-6 py-3 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">Reset</button></div>
    {submitted && !result && <p className="mt-4 text-sm text-red-600">Enter letters in both name fields.</p>}
    {result && <><div className="mt-8 rounded-3xl bg-gradient-to-r from-pink-50 to-violet-50 p-8 text-center dark:from-slate-800 dark:to-slate-950"><p className="text-sm uppercase tracking-wide text-slate-500">Your FLAMES result</p><h3 className="mt-2 text-5xl font-bold text-pink-600">{result.label}</h3><p className="mt-3 text-slate-600 dark:text-slate-300">{messages[result.label]}</p></div><ResultsSection title="FLAMES game details" calculatorName="FLAMES Calculator" results={[{ label: "Final FLAMES result", value: result.label, highlight: true }, { label: "Unmatched letters", value: result.count }]} /></>}
    <p className="mt-6 text-sm text-slate-500">For entertainment only. This name game cannot measure feelings, compatibility, or the future of a relationship.</p>
  </div>;
}
