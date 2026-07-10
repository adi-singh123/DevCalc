
"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type Gender = "male" | "female";
type ModuleType =
  | "age"
  | "height"
  | "weight"
  | "bmi"
  | "running"
  | "chest"
  | "pullup"
  | "pushup"
  | "situp"
  | "eligibility"
  | "fitness";
type Status = "pass" | "fail" | "neutral";

interface AgeCategory {
  id: string;
  label: string;
  min: number;
  max: number;
}

interface HeightZone {
  id: string;
  label: string;
  minCm: number;
}

interface HeightRelaxation {
  id: string;
  label: string;
  cm: number;
  kg: number;
}

interface BmiBand {
  max: number;
  label: string;
  status: string;
  tone: "pass" | "fail";
}

interface RunGroup {
  maxSec: number;
  marks: number;
  label: string;
}

interface RunStandard {
  groups: RunGroup[];
  disqualifySec: number;
}

interface AgeBandLimits {
  maxAge: number;
  excellent: number;
  good: number;
  average: number;
}

interface PullupGrade {
  min: number;
  marks: number;
  label: string;
}

interface ResultRow {
  label: string;
  value: string;
  highlight?: boolean;
}

interface CalcOutput {
  status: Status;
  headline: string;
  subtext: string;
  results: ResultRow[];
}

interface FormState {
  gender: Gender;
  dob: string;
  recruitmentYear: string;
  ageCategory: string;
  heightZone: string;
  heightCm: string;
  weightKg: string;
  age: string;
  isHillRegion: "yes" | "no";
  relaxSos: boolean;
  relaxSportsman: boolean;
  runMinutes: string;
  runSeconds: string;
  chestNormal: string;
  chestExpanded: string;
  pushupReps: string;
  situpReps: string;
  pullupReps: string;
}

/* ------------------------------------------------------------------ */
/*  Reference data (Indian Army Agniveer 2026 notification pattern)   */
/*  CAPF/BSF/CRPF/CISF/ITBP push-up & sit-up figures are illustrative */
/* ------------------------------------------------------------------ */

const AGE_CATEGORIES: AgeCategory[] = [
  { id: "agniveer-gd", label: "Agniveer General Duty (GD)", min: 17.5, max: 21 },
  { id: "agniveer-tech", label: "Agniveer Technical", min: 17.5, max: 21 },
  { id: "agniveer-clerk", label: "Agniveer Clerk / Store Keeper Technical", min: 17.5, max: 21 },
  { id: "agniveer-tradesman", label: "Agniveer Tradesman", min: 17.5, max: 21 },
  { id: "capf-constable", label: "CAPF Constable (BSF/CRPF/CISF/ITBP/SSB) — reference", min: 18, max: 23 },
];

const HEIGHT_ZONES: Record<Gender, HeightZone[]> = {
  male: [
    { id: "general-gd", label: "General Duty — Plains & most States", minCm: 170 },
    { id: "general-tech", label: "Technical — Plains & most States", minCm: 170 },
    { id: "general-clerk", label: "Clerk / SKT — Plains & most States", minCm: 162 },
    { id: "tradesman", label: "Tradesman — Plains & most States", minCm: 170 },
    { id: "hill-ne", label: "Himalayan / North-Eastern / Hill regions", minCm: 162 },
    { id: "gorkha", label: "Gorkha, Garhwali & Kumaoni domicile", minCm: 160 },
    { id: "tribal", label: "Scheduled Tribe / notified tribal areas", minCm: 162 },
  ],
  female: [
    { id: "cmp-general", label: "Corps of Military Police (CMP) — most States", minCm: 162 },
    { id: "cmp-relaxed", label: "Corps of Military Police (CMP) — relaxed zones", minCm: 152 },
  ],
};

const HEIGHT_RELAXATIONS: HeightRelaxation[] = [
  { id: "sos", label: "Son/Daughter of Serviceman (SOS/SOEX)", cm: 2, kg: 2 },
  { id: "sportsman", label: "Outstanding Sportsperson (National/State certificate)", cm: 2, kg: 5 },
];

const WEIGHT_STD = {
  minBmi: 18.0,
  maxBmi: 25.0,
  floor: { male: 50, "male-hill": 48, female: 42 } as Record<string, number>,
};

const BMI_BANDS: BmiBand[] = [
  { max: 17.99, label: "Underweight", status: "Below the accepted recruitment band.", tone: "fail" },
  { max: 19.99, label: "Fit — Lower Healthy Range", status: "Within the accepted recruitment band.", tone: "pass" },
  { max: 22.99, label: "Fit — Ideal Range", status: "Ideal recruitment range.", tone: "pass" },
  { max: 24.99, label: "Fit — Upper Healthy Range", status: "Within the accepted recruitment band.", tone: "pass" },
  { max: Infinity, label: "Above Recruitment Band", status: "Likely held for medical reassessment.", tone: "fail" },
];

const RUN_STD: Record<Gender, RunStandard> = {
  male: {
    groups: [
      { maxSec: 330, marks: 60, label: "Group I — Excellent" },
      { maxSec: 345, marks: 48, label: "Group II — Good" },
    ],
    disqualifySec: 345,
  },
  female: {
    groups: [
      { maxSec: 450, marks: 60, label: "Group I — Excellent (CMP)" },
      { maxSec: 480, marks: 48, label: "Group II — Good (CMP)" },
    ],
    disqualifySec: 480,
  },
};

const CHEST_STD = {
  minUnexpanded: { general: 77, "hill-ne": 76, gorkha: 76 } as Record<string, number>,
  minExpansion: 5,
};

const PUSHUP_BANDS: AgeBandLimits[] = [
  { maxAge: 22, excellent: 40, good: 30, average: 20 },
  { maxAge: 27, excellent: 35, good: 26, average: 18 },
  { maxAge: 99, excellent: 28, good: 20, average: 14 },
];

const SITUP_BANDS: AgeBandLimits[] = [
  { maxAge: 22, excellent: 45, good: 35, average: 25 },
  { maxAge: 27, excellent: 40, good: 30, average: 22 },
  { maxAge: 99, excellent: 32, good: 24, average: 16 },
];

const PULLUP_GRADES: PullupGrade[] = [
  { min: 10, marks: 40, label: "Excellent" },
  { min: 9, marks: 33, label: "Very Good" },
  { min: 8, marks: 27, label: "Good" },
  { min: 7, marks: 21, label: "Fair" },
  { min: 6, marks: 16, label: "Qualifying" },
  { min: 0, marks: 0, label: "Not Qualified" },
];

/* ------------------------------------------------------------------ */
/*  Small helpers                                                      */
/* ------------------------------------------------------------------ */

function diffYMD(from: Date, to: Date): { years: number; months: number; days: number } {
  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let days = to.getDate() - from.getDate();
  if (days < 0) {
    months -= 1;
    days += new Date(to.getFullYear(), to.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return { years, months, days };
}

function decimalYears(from: Date, to: Date): number {
  return (to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
}

function round(n: number, d: number = 1): number {
  const f = 10 ** d;
  return Math.round(n * f) / f;
}

function secLabel(totalSec: number): string {
  const m = Math.floor(totalSec / 60);
  const s = Math.round(totalSec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function num(v: string | number | undefined | null): number | null {
  if (v === "" || v === undefined || v === null) return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function bmiOf(heightCm: number, weightKg: number): number {
  const h = heightCm / 100;
  return round(weightKg / (h * h), 1);
}

function bmiBandOf(bmi: number): BmiBand {
  return BMI_BANDS.find((b) => bmi <= b.max) ?? BMI_BANDS[BMI_BANDS.length - 1];
}

function pushupGradeOf(reps: number, age: number): string {
  const band = PUSHUP_BANDS.find((b) => age <= b.maxAge) ?? PUSHUP_BANDS[PUSHUP_BANDS.length - 1];
  if (reps >= band.excellent) return "Excellent";
  if (reps >= band.good) return "Good";
  if (reps >= band.average) return "Average";
  return "Needs Improvement";
}

function situpGradeOf(reps: number, age: number): string {
  const band = SITUP_BANDS.find((b) => age <= b.maxAge) ?? SITUP_BANDS[SITUP_BANDS.length - 1];
  if (reps >= band.excellent) return "Excellent";
  if (reps >= band.good) return "Good";
  if (reps >= band.average) return "Average";
  return "Needs Improvement";
}

function pullupGradeOf(reps: number): PullupGrade {
  return PULLUP_GRADES.find((g) => reps >= g.min) ?? PULLUP_GRADES[PULLUP_GRADES.length - 1];
}

function runGroupOf(totalSec: number, gender: Gender): { label: string; marks: number; qualified: boolean } {
  const std = gender === "female" ? RUN_STD.female : RUN_STD.male;
  const matched = std.groups.find((g) => totalSec <= g.maxSec);
  const qualified = totalSec <= std.disqualifySec;
  return {
    label: matched ? matched.label : "Not Qualified",
    marks: matched ? matched.marks : 0,
    qualified,
  };
}

/* ------------------------------------------------------------------ */
/*  Reusable field components (kept local so the file stays standalone)*/
/* ------------------------------------------------------------------ */

interface FieldProps {
  label: string;
  children: React.ReactNode;
}

function Field({ label, children }: FieldProps) {
  return (
    <div className="mt-4">
      <label className="mb-2 block font-medium">{label}</label>
      {children}
    </div>
  );
}

interface NumberInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function NumberInput({ value, onChange, placeholder }: NumberInputProps) {
  return (
    <input
      type="number"
      inputMode="decimal"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl border p-3"
    />
  );
}

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
}

function Select({ value, onChange, options }: SelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border p-3"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

const MODULES: { value: ModuleType; label: string }[] = [
  { value: "age", label: "Age Eligibility" },
  { value: "height", label: "Height Eligibility" },
  { value: "weight", label: "Weight Calculator" },
  { value: "bmi", label: "BMI Calculator" },
  { value: "running", label: "1.6 km Running Time" },
  { value: "chest", label: "Chest Measurement" },
  { value: "pullup", label: "Pull-up Score" },
  { value: "pushup", label: "Push-up Grade (CAPF pattern)" },
  { value: "situp", label: "Sit-up Grade (CAPF pattern)" },
  { value: "eligibility", label: "Overall Eligibility Checker" },
  { value: "fitness", label: "Army Fitness Score" },
];

const DEFAULT_FORM: FormState = {
  gender: "male",
  dob: "",
  recruitmentYear: String(new Date().getFullYear()),
  ageCategory: "agniveer-gd",
  heightZone: "general-gd",
  heightCm: "",
  weightKg: "",
  age: "",
  isHillRegion: "no",
  relaxSos: false,
  relaxSportsman: false,
  runMinutes: "",
  runSeconds: "",
  chestNormal: "",
  chestExpanded: "",
  pushupReps: "",
  situpReps: "",
  pullupReps: "",
};

export default function ArmyCalculator() {
  const [moduleType, setModuleType] = useState<ModuleType>("age");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>(DEFAULT_FORM);

  function update<K extends keyof FormState>(key: K) {
    return (value: FormState[K]) => setForm((f) => ({ ...f, [key]: value }));
  }

  const zoneOptions = useMemo<SelectOption[]>(
    () => HEIGHT_ZONES[form.gender].map((z) => ({ value: z.id, label: z.label })),
    [form.gender]
  );

  /* ---------------------------------------------------------------- */
  /*  Calculation engine                                               */
  /* ---------------------------------------------------------------- */

  const data: CalcOutput | null = useMemo(() => {
    if (!submitted) return null;

    /* ---------------- AGE ---------------- */
    if (moduleType === "age") {
      if (!form.dob) return null;
      const dob = new Date(form.dob);
      const year = num(form.recruitmentYear);
      if (!year || Number.isNaN(dob.getTime())) return null;

      const category = AGE_CATEGORIES.find((c) => c.id === form.ageCategory) ?? AGE_CATEGORIES[0];
      const refDate = new Date(year, 7, 1); // 1 August
      const { years, months, days } = diffYMD(dob, refDate);
      const totalYears = decimalYears(dob, refDate);
      const eligible = totalYears >= category.min && totalYears <= category.max;

      return {
        status: eligible ? "pass" : "fail",
        headline: eligible ? "Eligible on Age" : "Not Eligible on Age",
        subtext: `As of 1 Aug ${year}, your age will be ${years} yrs ${months} mo ${days} days — required band for ${category.label} is ${category.min}–${category.max} years.`,
        results: [
          { label: "Age (Y/M/D)", value: `${years}y ${months}m ${days}d`, highlight: true },
          { label: "Category", value: category.label },
          { label: "Required Band", value: `${category.min} – ${category.max} yrs` },
          { label: "Verdict", value: eligible ? "Eligible" : "Not Eligible" },
        ],
      };
    }

    /* ---------------- HEIGHT ---------------- */
    if (moduleType === "height") {
      const heightCm = num(form.heightCm);
      if (heightCm === null) return null;

      const zone = HEIGHT_ZONES[form.gender].find((z) => z.id === form.heightZone) ?? HEIGHT_ZONES[form.gender][0];

      let relaxCm = 0;
      if (form.relaxSos) relaxCm += HEIGHT_RELAXATIONS[0].cm;
      if (form.relaxSportsman) relaxCm += HEIGHT_RELAXATIONS[1].cm;

      const requiredCm = Math.max(zone.minCm - relaxCm, 0);
      const eligible = heightCm >= requiredCm;
      const shortBy = eligible ? 0 : round(requiredCm - heightCm, 1);

      return {
        status: eligible ? "pass" : "fail",
        headline: eligible ? "Height Eligible" : "Height Not Eligible",
        subtext: eligible
          ? `Your height meets the ${requiredCm} cm requirement for ${zone.label}.`
          : `You are ${shortBy} cm short of the ${requiredCm} cm requirement for ${zone.label}.`,
        results: [
          { label: "Your Height", value: `${heightCm} cm`, highlight: true },
          { label: "Required (after relaxation)", value: `${requiredCm} cm` },
          { label: "Zone", value: zone.label },
          { label: "Short By", value: eligible ? "0 cm" : `${shortBy} cm` },
        ],
      };
    }

    /* ---------------- WEIGHT ---------------- */
    if (moduleType === "weight") {
      const heightCm = num(form.heightCm);
      const weightKg = num(form.weightKg);
      const age = num(form.age);
      if (heightCm === null || weightKg === null || age === null) return null;

      const tolerance = age <= 18 ? 1.5 : 1.0;
      const h = heightCm / 100;
      const floorKey = form.isHillRegion === "yes" ? "male-hill" : form.gender;
      const minKg = round(Math.max(WEIGHT_STD.minBmi * h * h - tolerance, WEIGHT_STD.floor[floorKey]), 1);
      const maxKg = round(WEIGHT_STD.maxBmi * h * h + tolerance, 1);

      const eligible = weightKg >= minKg && weightKg <= maxKg;
      const diff = eligible ? 0 : round(weightKg < minKg ? minKg - weightKg : weightKg - maxKg, 1);

      return {
        status: eligible ? "pass" : "fail",
        headline: eligible ? "Weight In Range" : "Weight Out of Range",
        subtext: eligible
          ? `Your weight falls within the ${minKg}–${maxKg} kg proportionate range for your height.`
          : `You are ${diff} kg ${weightKg < minKg ? "below" : "above"} the ${minKg}–${maxKg} kg proportionate range.`,
        results: [
          { label: "Your Weight", value: `${weightKg} kg`, highlight: true },
          { label: "Ideal Range", value: `${minKg} – ${maxKg} kg` },
          { label: "Difference", value: eligible ? "In Range" : `${diff} kg` },
        ],
      };
    }

    /* ---------------- BMI ---------------- */
    if (moduleType === "bmi") {
      const heightCm = num(form.heightCm);
      const weightKg = num(form.weightKg);
      if (heightCm === null || weightKg === null) return null;

      const bmi = bmiOf(heightCm, weightKg);
      const band = bmiBandOf(bmi);

      return {
        status: band.tone,
        headline: `BMI ${bmi} — ${band.label}`,
        subtext: band.status,
        results: [
          { label: "BMI", value: `${bmi}`, highlight: true },
          { label: "Category", value: band.label },
          { label: "Army Status", value: band.status },
        ],
      };
    }

    /* ---------------- RUNNING ---------------- */
    if (moduleType === "running") {
      const mins = num(form.runMinutes);
      const secs = num(form.runSeconds);
      if (mins === null || secs === null) return null;

      const totalSec = mins * 60 + secs;
      const pace = round(totalSec / 60 / 1.6, 2);
      const speed = round(1.6 / (totalSec / 3600), 2);
      const group = runGroupOf(totalSec, form.gender);
      const best = RUN_STD[form.gender].groups[0];
      const toImprove = Math.max(0, totalSec - best.maxSec);

      return {
        status: group.qualified ? "pass" : "fail",
        headline: `${group.label} — ${group.marks}/60 Marks`,
        subtext: group.qualified
          ? `Your 1.6 km time of ${secLabel(totalSec)} places you in ${group.label}.`
          : `Your time of ${secLabel(totalSec)} does not meet the qualifying cut-off.`,
        results: [
          { label: "Time", value: secLabel(totalSec), highlight: true },
          { label: "Pace", value: `${pace} min/km` },
          { label: "Speed", value: `${speed} km/h` },
          { label: "PFT Marks", value: `${group.marks} / 60` },
          { label: "To Reach Group I", value: toImprove > 0 ? `${toImprove}s faster needed` : "Already Group I" },
        ],
      };
    }

    /* ---------------- CHEST ---------------- */
    if (moduleType === "chest") {
      const normal = num(form.chestNormal);
      const expanded = num(form.chestExpanded);
      if (normal === null || expanded === null) return null;

      const expansion = round(expanded - normal, 1);
      const minUnexpanded = CHEST_STD.minUnexpanded.general;
      const eligible = normal >= minUnexpanded && expansion >= CHEST_STD.minExpansion;

      return {
        status: eligible ? "pass" : "fail",
        headline: eligible ? "Chest Eligible" : "Chest Not Eligible",
        subtext: eligible
          ? `Your expansion of ${expansion} cm meets the ${CHEST_STD.minExpansion} cm minimum.`
          : `Normal chest ${normal} cm (min ${minUnexpanded} cm) with ${expansion} cm expansion (min ${CHEST_STD.minExpansion} cm).`,
        results: [
          { label: "Normal Chest", value: `${normal} cm` },
          { label: "Expanded Chest", value: `${expanded} cm` },
          { label: "Expansion", value: `${expansion} cm`, highlight: true },
          { label: "Verdict", value: eligible ? "Eligible" : "Not Eligible" },
        ],
      };
    }

    /* ---------------- PULL-UP ---------------- */
    if (moduleType === "pullup") {
      const reps = num(form.pullupReps);
      if (reps === null) return null;
      const grade = pullupGradeOf(reps);
      const qualified = reps >= 6;

      return {
        status: qualified ? "pass" : "fail",
        headline: `${grade.label} — ${grade.marks}/40 Marks`,
        subtext: qualified
          ? `${reps} pull-ups earns ${grade.marks} marks out of 40.`
          : `Minimum 6 pull-ups are required to qualify; you recorded ${reps}.`,
        results: [
          { label: "Pull-ups", value: `${reps}`, highlight: true },
          { label: "Marks", value: `${grade.marks} / 40` },
          { label: "Grade", value: grade.label },
        ],
      };
    }

    /* ---------------- PUSH-UP ---------------- */
    if (moduleType === "pushup") {
      const reps = num(form.pushupReps);
      const age = num(form.age);
      if (reps === null || age === null) return null;
      const grade = pushupGradeOf(reps, age);

      return {
        status: grade === "Needs Improvement" ? "fail" : "pass",
        headline: `${grade} — ${reps} Push-ups`,
        subtext: `Based on a CAPF-pattern age-graded benchmark for age ${age}.`,
        results: [
          { label: "Push-ups", value: `${reps}`, highlight: true },
          { label: "Age", value: `${age} yrs` },
          { label: "Grade", value: grade },
        ],
      };
    }

    /* ---------------- SIT-UP ---------------- */
    if (moduleType === "situp") {
      const reps = num(form.situpReps);
      const age = num(form.age);
      if (reps === null || age === null) return null;
      const grade = situpGradeOf(reps, age);

      return {
        status: grade === "Needs Improvement" ? "fail" : "pass",
        headline: `${grade} — ${reps} Sit-ups`,
        subtext: `Based on a CAPF-pattern age-graded benchmark for age ${age}.`,
        results: [
          { label: "Sit-ups", value: `${reps}`, highlight: true },
          { label: "Age", value: `${age} yrs` },
          { label: "Grade", value: grade },
        ],
      };
    }

    /* ---------------- OVERALL ELIGIBILITY ---------------- */
    if (moduleType === "eligibility") {
      const dob = form.dob ? new Date(form.dob) : null;
      const year = num(form.recruitmentYear);
      const heightCm = num(form.heightCm);
      const weightKg = num(form.weightKg);
      const mins = num(form.runMinutes);
      const secs = num(form.runSeconds);
      if (!dob || !year || heightCm === null || weightKg === null || mins === null || secs === null)
        return null;

      const category = AGE_CATEGORIES.find((c) => c.id === form.ageCategory) ?? AGE_CATEGORIES[0];
      const refDate = new Date(year, 7, 1);
      const totalYears = decimalYears(dob, refDate);
      const ageEligible = totalYears >= category.min && totalYears <= category.max;

      const zone = HEIGHT_ZONES[form.gender].find((z) => z.id === form.heightZone) ?? HEIGHT_ZONES[form.gender][0];
      const heightEligible = heightCm >= zone.minCm;

      const bmi = bmiOf(heightCm, weightKg);
      const bmiEligible = bmi >= WEIGHT_STD.minBmi && bmi <= WEIGHT_STD.maxBmi;

      const totalSec = mins * 60 + secs;
      const group = runGroupOf(totalSec, form.gender);

      const checks: { label: string; passed: boolean }[] = [
        { label: "Age", passed: ageEligible },
        { label: "Height", passed: heightEligible },
        { label: "BMI", passed: bmiEligible },
        { label: "1.6 km Run", passed: group.qualified },
      ];
      const passed = checks.filter((c) => c.passed);
      const failed = checks.filter((c) => !c.passed);
      const overallEligible = failed.length === 0;
      const score = Math.round((passed.length / checks.length) * 100);

      return {
        status: overallEligible ? "pass" : "fail",
        headline: overallEligible ? "Overall Eligible" : "Overall Not Eligible",
        subtext: overallEligible
          ? "All checked requirements are met."
          : `Not eligible on: ${failed.map((f) => f.label).join(", ")}.`,
        results: [
          { label: "Eligibility Score", value: `${score}%`, highlight: true },
          { label: "Passed", value: passed.map((p) => p.label).join(", ") || "None" },
          { label: "Failed", value: failed.map((f) => f.label).join(", ") || "None" },
          { label: "BMI", value: `${bmi}` },
          { label: "Run Marks", value: `${group.marks} / 60` },
        ],
      };
    }

    /* ---------------- FITNESS SCORE ---------------- */
    if (moduleType === "fitness") {
      const heightCm = num(form.heightCm);
      const weightKg = num(form.weightKg);
      const mins = num(form.runMinutes);
      const secs = num(form.runSeconds);
      const pullupReps = num(form.pullupReps) ?? 0;
      const pushupReps = num(form.pushupReps) ?? 0;
      const situpReps = num(form.situpReps) ?? 0;
      if (heightCm === null || weightKg === null || mins === null || secs === null) return null;

      const bmi = bmiOf(heightCm, weightKg);
      const totalSec = mins * 60 + secs;
      const group = runGroupOf(totalSec, form.gender);
      const pullup = pullupGradeOf(pullupReps);

      const runScore = (group.marks / 60) * 100;
      const pullupScore = (pullup.marks / 40) * 100;
      const bmiScore = Math.max(0, Math.min(100, 100 - Math.abs(bmi - 21.5) * 14));
      const pushupScore = Math.max(0, Math.min(100, (pushupReps / 40) * 100));
      const situpScore = Math.max(0, Math.min(100, (situpReps / 45) * 100));

      const weights = { run: 0.35, pullup: 0.25, bmi: 0.15, pushup: 0.1, situp: 0.1, compliance: 0.05 };
      const zone = HEIGHT_ZONES[form.gender].find((z) => z.id === form.heightZone) ?? HEIGHT_ZONES[form.gender][0];
      const complianceScore = (heightCm >= zone.minCm ? 50 : 0) + (bmi >= 18 && bmi <= 25 ? 50 : 0);

      const total = round(
        runScore * weights.run +
          pullupScore * weights.pullup +
          bmiScore * weights.bmi +
          pushupScore * weights.pushup +
          situpScore * weights.situp +
          complianceScore * weights.compliance,
        1
      );

      const grade =
        total >= 85 ? "Excellent" : total >= 70 ? "Good" : total >= 50 ? "Average" : "Needs Improvement";

      return {
        status: total >= 50 ? "pass" : "fail",
        headline: `${grade} — Score ${total}/100`,
        subtext: "Composite self-assessment score, weighted across run, pull-ups, BMI, push-ups and sit-ups.",
        results: [
          { label: "Fitness Score", value: `${total} / 100`, highlight: true },
          { label: "Grade", value: grade },
          { label: "Run Marks", value: `${group.marks} / 60` },
          { label: "Pull-up Marks", value: `${pullup.marks} / 40` },
          { label: "BMI", value: `${bmi}` },
        ],
      };
    }

    return null;
  }, [submitted, moduleType, form]);

  const results = data?.results ?? [];

  const resetAll = () => {
    setModuleType("age");
    setSubmitted(false);
    setForm(DEFAULT_FORM);
  };

  const summaryTone =
    data?.status === "pass"
      ? "bg-green-50 text-green-700"
      : data?.status === "fail"
      ? "bg-red-50 text-red-700"
      : "bg-blue-50 text-blue-700";

  return (
    <div className="mt-8 w-full max-w-full overflow-hidden rounded-3xl border bg-white p-4 shadow-sm sm:p-6">
      <h2 className="text-xl font-semibold sm:text-2xl">
        Indian Army Physical &amp; Eligibility Calculator
      </h2>
      <p className="mt-2 text-slate-600">
        Check Age, Height, Weight, BMI, 1.6 km Running, Chest, Pull-ups,
        Push-ups, Sit-ups, overall Eligibility, and a combined Fitness Score —
        all for Agniveer &amp; CAPF recruitment standards, in one place.
      </p>

      {/* Module selector */}
      <Field label="Choose Calculator">
        <Select
          value={moduleType}
          onChange={(v) => {
            setModuleType(v as ModuleType);
            setSubmitted(false);
          }}
          options={MODULES}
        />
      </Field>

      {/* Gender — used by most modules */}
      {(["height", "weight", "running", "eligibility", "fitness"] as ModuleType[]).includes(moduleType) && (
        <Field label="Gender">
          <Select
            value={form.gender}
            onChange={(v) => {
              const g = v as Gender;
              update("gender")(g);
              update("heightZone")(HEIGHT_ZONES[g][0].id);
            }}
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
          />
        </Field>
      )}

      {/* AGE fields */}
      {(moduleType === "age" || moduleType === "eligibility") && (
        <>
          <Field label="Date of Birth">
            <input
              type="date"
              value={form.dob}
              onChange={(e) => update("dob")(e.target.value)}
              className="w-full rounded-xl border p-3"
            />
          </Field>
          <Field label="Recruitment Year">
            <NumberInput value={form.recruitmentYear} onChange={update("recruitmentYear")} placeholder="2026" />
          </Field>
          <Field label="Category">
            <Select
              value={form.ageCategory}
              onChange={update("ageCategory")}
              options={AGE_CATEGORIES.map((c) => ({ value: c.id, label: c.label }))}
            />
          </Field>
        </>
      )}

      {/* HEIGHT fields */}
      {(moduleType === "height" || moduleType === "eligibility" || moduleType === "fitness") && (
        <>
          <Field label="Recruitment Zone / Category">
            <Select value={form.heightZone} onChange={update("heightZone")} options={zoneOptions} />
          </Field>
          <Field label="Height (cm)">
            <NumberInput value={form.heightCm} onChange={update("heightCm")} placeholder="170" />
          </Field>
        </>
      )}

      {moduleType === "height" && (
        <Field label="Relaxation (optional)">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {HEIGHT_RELAXATIONS.map((r, i) => (
              <label key={r.id} className="flex items-center gap-2 rounded-xl border p-3 text-sm">
                <input
                  type="checkbox"
                  checked={i === 0 ? form.relaxSos : form.relaxSportsman}
                  onChange={(e) => update(i === 0 ? "relaxSos" : "relaxSportsman")(e.target.checked)}
                />
                {r.label} (+{r.cm} cm)
              </label>
            ))}
          </div>
        </Field>
      )}

      {/* WEIGHT / BMI fields */}
      {(moduleType === "weight" || moduleType === "bmi" || moduleType === "eligibility" || moduleType === "fitness") && (
        <>
          {moduleType === "bmi" && (
            <Field label="Height (cm)">
              <NumberInput value={form.heightCm} onChange={update("heightCm")} placeholder="170" />
            </Field>
          )}
          <Field label="Weight (kg)">
            <NumberInput value={form.weightKg} onChange={update("weightKg")} placeholder="62" />
          </Field>
        </>
      )}

      {moduleType === "weight" && (
        <Field label="Region">
          <Select
            value={form.isHillRegion}
            onChange={(v) => update("isHillRegion")(v as "yes" | "no")}
            options={[
              { value: "no", label: "Plains / General Zone" },
              { value: "yes", label: "Himalayan / Hill Zone" },
            ]}
          />
        </Field>
      )}

      {/* AGE (plain number) — for Weight, Push-up, Sit-up */}
      {(["weight", "pushup", "situp"] as ModuleType[]).includes(moduleType) && (
        <Field label="Your Age (years)">
          <NumberInput value={form.age} onChange={update("age")} placeholder="19" />
        </Field>
      )}

      {/* RUNNING fields */}
      {(moduleType === "running" || moduleType === "eligibility" || moduleType === "fitness") && (
        <Field label="1.6 km Run Time (min : sec)">
          <div className="grid grid-cols-2 gap-3">
            <NumberInput value={form.runMinutes} onChange={update("runMinutes")} placeholder="5" />
            <NumberInput value={form.runSeconds} onChange={update("runSeconds")} placeholder="30" />
          </div>
        </Field>
      )}

      {/* CHEST fields */}
      {moduleType === "chest" && (
        <>
          <Field label="Normal Chest (cm)">
            <NumberInput value={form.chestNormal} onChange={update("chestNormal")} placeholder="78" />
          </Field>
          <Field label="Expanded Chest (cm)">
            <NumberInput value={form.chestExpanded} onChange={update("chestExpanded")} placeholder="84" />
          </Field>
        </>
      )}

      {/* PULL-UP fields */}
      {(moduleType === "pullup" || moduleType === "fitness") && (
        <Field label="Pull-ups (reps)">
          <NumberInput value={form.pullupReps} onChange={update("pullupReps")} placeholder="8" />
        </Field>
      )}

      {/* PUSH-UP fields */}
      {(moduleType === "pushup" || moduleType === "fitness") && (
        <Field label="Push-ups (reps)">
          <NumberInput value={form.pushupReps} onChange={update("pushupReps")} placeholder="30" />
        </Field>
      )}

      {/* SIT-UP fields */}
      {(moduleType === "situp" || moduleType === "fitness") && (
        <Field label="Sit-ups in 1 minute (reps)">
          <NumberInput value={form.situpReps} onChange={update("situpReps")} placeholder="35" />
        </Field>
      )}

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button
          onClick={() => setSubmitted(true)}
          className="w-full cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg sm:w-auto"
        >
          Calculate
        </button>

        <button
          onClick={resetAll}
          className="w-full cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg sm:w-auto"
        >
          Reset
        </button>
      </div>

      {/* Summary */}
      {data && (
        <div className={`mt-8 rounded-2xl border p-6 text-center ${summaryTone}`}>
          <h3 className="text-xl font-semibold">{data.headline}</h3>
          <p className="mt-3 text-sm sm:text-base">{data.subtext}</p>
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <ResultsSection
          title="Calculator Results"
          results={results}
          calculatorName="Army Physical & Eligibility Results"
        />
      )}

      <p className="mt-6 text-xs text-slate-500">
        Estimates only. Standards vary by recruitment zone and notification —
        always verify against joinindianarmy.nic.in before applying.
      </p>
    </div>
  );
}
