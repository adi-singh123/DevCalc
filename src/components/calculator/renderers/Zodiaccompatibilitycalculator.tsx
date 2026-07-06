"use client";

import { useCallback, useId, useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

// ---- Static config (kept outside component so it doesn't get rebuilt every render) ----

type Element = "Fire" | "Earth" | "Air" | "Water";
type Modality = "Cardinal" | "Fixed" | "Mutable";

interface ZodiacSign {
  key: string;
  label: string; // English name
  hindiLabel: string; // Hindi name (राशि)
  emoji: string;
  element: Element;
  modality: Modality;
  startMonth: number; // 1-12
  startDay: number;
  endMonth: number;
  endDay: number;
}

const ZODIAC_SIGNS: ZodiacSign[] = [
  { key: "aries", label: "Aries", hindiLabel: "मेष", emoji: "♈", element: "Fire", modality: "Cardinal", startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 },
  { key: "taurus", label: "Taurus", hindiLabel: "वृषभ", emoji: "♉", element: "Earth", modality: "Fixed", startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 },
  { key: "gemini", label: "Gemini", hindiLabel: "मिथुन", emoji: "♊", element: "Air", modality: "Mutable", startMonth: 5, startDay: 21, endMonth: 6, endDay: 20 },
  { key: "cancer", label: "Cancer", hindiLabel: "कर्क", emoji: "♋", element: "Water", modality: "Cardinal", startMonth: 6, startDay: 21, endMonth: 7, endDay: 22 },
  { key: "leo", label: "Leo", hindiLabel: "सिंह", emoji: "♌", element: "Fire", modality: "Fixed", startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 },
  { key: "virgo", label: "Virgo", hindiLabel: "कन्या", emoji: "♍", element: "Earth", modality: "Mutable", startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 },
  { key: "libra", label: "Libra", hindiLabel: "तुला", emoji: "♎", element: "Air", modality: "Cardinal", startMonth: 9, startDay: 23, endMonth: 10, endDay: 22 },
  { key: "scorpio", label: "Scorpio", hindiLabel: "वृश्चिक", emoji: "♏", element: "Water", modality: "Fixed", startMonth: 10, startDay: 23, endMonth: 11, endDay: 21 },
  { key: "sagittarius", label: "Sagittarius", hindiLabel: "धनु", emoji: "♐", element: "Fire", modality: "Mutable", startMonth: 11, startDay: 22, endMonth: 12, endDay: 21 },
  { key: "capricorn", label: "Capricorn", hindiLabel: "मकर", emoji: "♑", element: "Earth", modality: "Cardinal", startMonth: 12, startDay: 22, endMonth: 1, endDay: 19 },
  { key: "aquarius", label: "Aquarius", hindiLabel: "कुंभ", emoji: "♒", element: "Air", modality: "Fixed", startMonth: 1, startDay: 20, endMonth: 2, endDay: 18 },
  { key: "pisces", label: "Pisces", hindiLabel: "मीन", emoji: "♓", element: "Water", modality: "Mutable", startMonth: 2, startDay: 19, endMonth: 3, endDay: 20 },
];

const ELEMENT_SCORE: Record<"same" | "complementary" | "neutral" | "opposing", number> = {
  same: 50,
  complementary: 55,
  neutral: 35,
  opposing: 25,
};

const MODALITY_SCORE: Record<"same" | "cardinal-mutable" | "cardinal-fixed" | "fixed-mutable", number> = {
  same: 15,
  "cardinal-mutable": 22,
  "cardinal-fixed": 18,
  "fixed-mutable": 20,
};

const COMPLEMENTARY_PAIRS = new Set(["Fire-Air", "Air-Fire", "Earth-Water", "Water-Earth"]);
const OPPOSING_PAIRS = new Set(["Fire-Water", "Water-Fire", "Earth-Air", "Air-Earth"]);

const MIN_YEAR = 1900;

const INPUT_CLASS =
  "w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-black/10";
const INPUT_ERROR_CLASS =
  "w-full rounded-xl border border-red-500 p-3 focus:outline-none focus:ring-2 focus:ring-red-200";
const LABEL_CLASS = "mb-2 block font-medium";

// ---- Helpers ----

function getZodiacSign(dateStr: string): ZodiacSign | null {
  if (!dateStr) return null;
  const d = new Date(dateStr + "T00:00:00");
  if (Number.isNaN(d.getTime())) return null;

  const month = d.getMonth() + 1;
  const day = d.getDate();

  return (
    ZODIAC_SIGNS.find((s) => {
      if (s.startMonth === s.endMonth) {
        return month === s.startMonth && day >= s.startDay && day <= s.endDay;
      }
      // Sign spans across a month boundary (e.g. Dec 22 - Jan 19)
      if (s.startMonth > s.endMonth) {
        return (
          (month === s.startMonth && day >= s.startDay) ||
          (month === s.endMonth && day <= s.endDay)
        );
      }
      return (
        (month === s.startMonth && day >= s.startDay) ||
        (month === s.endMonth && day <= s.endDay) ||
        (month > s.startMonth && month < s.endMonth)
      );
    }) ?? null
  );
}

function elementRelation(e1: Element, e2: Element): "same" | "complementary" | "neutral" | "opposing" {
  if (e1 === e2) return "same";
  const key = `${e1}-${e2}`;
  if (COMPLEMENTARY_PAIRS.has(key)) return "complementary";
  if (OPPOSING_PAIRS.has(key)) return "opposing";
  return "neutral";
}

function modalityRelation(m1: Modality, m2: Modality): "same" | "cardinal-mutable" | "cardinal-fixed" | "fixed-mutable" {
  if (m1 === m2) return "same";
  const key = [m1, m2].sort().join("-");
  if (key === "Cardinal-Mutable") return "cardinal-mutable";
  if (key === "Cardinal-Fixed") return "cardinal-fixed";
  return "fixed-mutable";
}

/** Deterministic, order-independent bonus (0-17) derived from the sorted pair of sign keys. */
function pairBonus(signA: string, signB: string): number {
  const sorted = [signA, signB].sort().join("-");
  let hash = 0;
  for (let i = 0; i < sorted.length; i++) {
    hash = (hash * 31 + sorted.charCodeAt(i)) >>> 0;
  }
  return hash % 18;
}

function getTier(score: number): { label: string; emoji: string } {
  if (score <= 54) return { label: "Needs Extra Effort", emoji: "🌪️" };
  if (score <= 69) return { label: "Interesting Dynamic", emoji: "🤔" };
  if (score <= 82) return { label: "Solid Connection", emoji: "💫" };
  if (score <= 90) return { label: "Strong Star Match", emoji: "🔥" };
  return { label: "Written In The Stars", emoji: "❤️" };
}

function isValidHistoricalDate(dateStr: string): boolean {
  const d = new Date(dateStr + "T00:00:00");
  if (Number.isNaN(d.getTime())) return false;
  const year = d.getFullYear();
  const now = new Date();
  return year >= MIN_YEAR && d.getTime() <= now.getTime();
}

interface FormErrors {
  date1?: string;
  date2?: string;
}

export default function ZodiacCompatibilityCalculator() {
  const date1Id = useId();
  const date1ErrorId = useId();
  const date2Id = useId();
  const date2ErrorId = useId();

  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = useCallback((): { ok: boolean; errors: FormErrors } => {
    const next: FormErrors = {};

    if (!date1) {
      next.date1 = "Please enter your birth date.";
    } else if (!isValidHistoricalDate(date1)) {
      next.date1 = `Enter a valid date between ${MIN_YEAR} and today.`;
    }

    if (!date2) {
      next.date2 = "Please enter their birth date.";
    } else if (!isValidHistoricalDate(date2)) {
      next.date2 = `Enter a valid date between ${MIN_YEAR} and today.`;
    }

    return { ok: Object.keys(next).length === 0, errors: next };
  }, [date1, date2]);

  const result = useMemo(() => {
    if (!submitted) return null;

    const { ok } = validate();
    if (!ok) return null;

    const sign1 = getZodiacSign(date1);
    const sign2 = getZodiacSign(date2);
    if (!sign1 || !sign2) return null;

    const elRelation = elementRelation(sign1.element, sign2.element);
    const modRelation = modalityRelation(sign1.modality, sign2.modality);

    const elementScore = ELEMENT_SCORE[elRelation];
    const modalityScore = MODALITY_SCORE[modRelation];
    const bonus = pairBonus(sign1.key, sign2.key);

    const totalScore = elementScore + modalityScore + bonus;
    const tier = getTier(totalScore);

    return {
      sign1,
      sign2,
      elRelation,
      modRelation,
      elementScore,
      modalityScore,
      bonus,
      totalScore,
      tier,
    };
  }, [date1, date2, submitted, validate]);

  const results = result
    ? [
        {
          label: "Zodiac Match",
          value: `${result.sign1.emoji} ${result.sign1.label} (${result.sign1.hindiLabel}) + ${result.sign2.emoji} ${result.sign2.label} (${result.sign2.hindiLabel})`,
          highlight: true,
        },
        { label: "Compatibility Score", value: `${result.totalScore}%` },
        { label: "Compatibility Level", value: `${result.tier.emoji} ${result.tier.label}` },
        {
          label: "Element Match",
          value: `${result.sign1.element} + ${result.sign2.element} (${result.elRelation})`,
        },
        {
          label: "Modality Match",
          value: `${result.sign1.modality} + ${result.sign2.modality}`,
        },
        { label: "Element Score", value: `${result.elementScore}/55` },
        { label: "Modality Score", value: `${result.modalityScore}/25` },
        { label: "Sign-Pair Bonus", value: `${result.bonus}/17` },
      ]
    : [];

  function handleCalculate() {
    const { ok, errors: validationErrors } = validate();
    setErrors(validationErrors);
    setSubmitted(ok);
  }

  function handleReset() {
    setDate1("");
    setDate2("");
    setSubmitted(false);
    setErrors({});
  }

  function handleDate1Change(e: React.ChangeEvent<HTMLInputElement>) {
    setDate1(e.target.value);
    if (errors.date1) setErrors((prev) => ({ ...prev, date1: undefined }));
  }

  function handleDate2Change(e: React.ChangeEvent<HTMLInputElement>) {
    setDate2(e.target.value);
    if (errors.date2) setErrors((prev) => ({ ...prev, date2: undefined }));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleCalculate();
  }

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor={date1Id} className={LABEL_CLASS}>
            Your Birth Date
          </label>
          <input
            id={date1Id}
            type="date"
            value={date1}
            onChange={handleDate1Change}
            onKeyDown={handleKeyDown}
            aria-required="true"
            aria-invalid={!!errors.date1}
            aria-describedby={errors.date1 ? date1ErrorId : undefined}
            className={errors.date1 ? INPUT_ERROR_CLASS : INPUT_CLASS}
          />
          {errors.date1 && (
            <p id={date1ErrorId} role="alert" className="mt-1 text-sm text-red-600">
              {errors.date1}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={date2Id} className={LABEL_CLASS}>
            Partner&apos;s / Crush&apos;s Birth Date
          </label>
          <input
            id={date2Id}
            type="date"
            value={date2}
            onChange={handleDate2Change}
            onKeyDown={handleKeyDown}
            aria-required="true"
            aria-invalid={!!errors.date2}
            aria-describedby={errors.date2 ? date2ErrorId : undefined}
            className={errors.date2 ? INPUT_ERROR_CLASS : INPUT_CLASS}
          />
          {errors.date2 && (
            <p id={date2ErrorId} role="alert" className="mt-1 text-sm text-red-600">
              {errors.date2}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          type="button"
          onClick={handleCalculate}
          className="rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black/40 focus:ring-offset-2"
        >
          Calculate Compatibility
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="rounded-xl border px-6 py-3 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-2"
        >
          Reset
        </button>
      </div>

      {result && (
        <div
          role="status"
          aria-live="polite"
          className="mt-8 rounded-2xl border bg-pink-50 p-6 text-center"
        >
          <h3 className="text-xl font-semibold">
            {result.sign1.emoji} {result.sign1.label} ({result.sign1.hindiLabel}) + {result.sign2.emoji} {result.sign2.label} ({result.sign2.hindiLabel})
          </h3>
          <p className="mt-3 text-4xl font-bold text-pink-600">{result.totalScore}%</p>
          <p className="mt-1 text-sm text-gray-500">
            {result.tier.emoji} {result.tier.label}
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Zodiac Compatibility Breakdown"
          results={results}
          calculatorName="Zodiac Compatibility Calculator"
        />
      )}
    </div>
  );
}