"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function PetAgeCalculator() {
  const [species, setSpecies] = useState<"dog" | "cat">("dog"); const [age, setAge] = useState(5); const [size, setSize] = useState<"small" | "medium" | "large">("medium");
  const result = useMemo(() => {
    const safeAge = Math.min(30, Math.max(0, age)); const human = safeAge <= 1 ? safeAge * 15 : safeAge <= 2 ? 15 + (safeAge - 1) * 9 : 24 + (safeAge - 2) * (species === "cat" ? 4 : size === "small" ? 4 : size === "medium" ? 5 : 6);
    const seniorStart = species === "cat" || size === "small" ? 11 : size === "medium" ? 10 : 8;
    const stage = safeAge < 1 ? (species === "cat" ? "Kitten" : "Puppy") : safeAge < 3 ? "Young adult" : safeAge < 7 ? "Adult" : safeAge < seniorStart ? "Mature adult" : "Senior";
    return { human, months: Math.round(safeAge * 12), stage, nextBirthday: Math.max(0, Math.ceil(safeAge) - safeAge) * 12 };
  }, [species, age, size]);
  return <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"><div className="grid gap-5 sm:grid-cols-3"><label><span className="mb-2 block font-medium">Pet</span><select value={species} onChange={(e) => setSpecies(e.target.value as "dog" | "cat")} className="w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-950"><option value="dog">Dog</option><option value="cat">Cat</option></select></label><label><span className="mb-2 block font-medium">Age in years</span><input type="number" min="0" max="30" step="0.1" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full rounded-xl border p-3 dark:border-slate-700 dark:bg-slate-950" /></label><label><span className="mb-2 block font-medium">Dog adult size</span><select value={size} disabled={species === "cat"} onChange={(e) => setSize(e.target.value as "small" | "medium" | "large")} className="w-full rounded-xl border p-3 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-950"><option value="small">Small (under ~10 kg)</option><option value="medium">Medium (~10–25 kg)</option><option value="large">Large (over ~25 kg)</option></select></label></div>
    <ResultsSection title="Pet age estimate" calculatorName="Pet Age Calculator" results={[{ label: "Approximate human-equivalent age", value: `${result.human.toFixed(1)} years`, highlight: true }, { label: "Life stage", value: result.stage }, { label: "Pet age in months", value: result.months }, { label: "Approx. months to next birthday", value: result.nextBirthday < 0.05 ? 0 : result.nextBirthday.toFixed(1) }]} />
    <p className="mt-6 text-sm text-slate-500">This is a general educational analogy, not a health assessment. Breed, genetics, weight, and medical history matter; ask a veterinarian about your pet&apos;s actual care needs.</p>
  </div>;
}
