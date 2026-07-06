"use client";

import { useCallback, useId, useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

// =====================================================================================
// KUNDLI MILAN (Ashtakoot Guna Milan) — traditional 36-point Vedic matching system
// Kootas: Varna(1) + Vashya(2) + Tara(3) + Yoni(4) + Graha Maitri(5) + Gana(6)
//         + Bhakoot(7) + Nadi(8) = 36 total
// =====================================================================================

type Gana = "Deva" | "Manushya" | "Rakshasa";
type Nadi = "Aadi" | "Madhya" | "Antya";
type Yoni =
  | "Horse" | "Elephant" | "Sheep" | "Serpent" | "Dog" | "Cat" | "Rat"
  | "Cow" | "Buffalo" | "Tiger" | "Deer" | "Monkey" | "Mongoose" | "Lion";
type Varna = "Brahmin" | "Kshatriya" | "Vaishya" | "Shudra";
type VashyaGroup = "Chatushpada" | "Manav" | "Jalachar" | "Vanachar" | "Keeta";
type Planet = "Sun" | "Moon" | "Mars" | "Mercury" | "Jupiter" | "Venus" | "Saturn";

interface Nakshatra {
  key: string;
  label: string;
  hindiLabel: string;
  gana: Gana;
  yoni: Yoni;
  nadi: Nadi;
}

interface Rashi {
  key: string;
  label: string;
  hindiLabel: string;
  lord: Planet;
  varna: Varna;
  vashya: VashyaGroup;
}

// ---- 27 Nakshatras (birth stars), in order ----
const NAKSHATRAS: Nakshatra[] = [
  { key: "ashwini", label: "Ashwini", hindiLabel: "अश्विनी", gana: "Deva", yoni: "Horse", nadi: "Aadi" },
  { key: "bharani", label: "Bharani", hindiLabel: "भरणी", gana: "Manushya", yoni: "Elephant", nadi: "Madhya" },
  { key: "krittika", label: "Krittika", hindiLabel: "कृत्तिका", gana: "Rakshasa", yoni: "Sheep", nadi: "Antya" },
  { key: "rohini", label: "Rohini", hindiLabel: "रोहिणी", gana: "Manushya", yoni: "Serpent", nadi: "Madhya" },
  { key: "mrigashira", label: "Mrigashira", hindiLabel: "मृगशिरा", gana: "Deva", yoni: "Serpent", nadi: "Antya" },
  { key: "ardra", label: "Ardra", hindiLabel: "आर्द्रा", gana: "Manushya", yoni: "Dog", nadi: "Aadi" },
  { key: "punarvasu", label: "Punarvasu", hindiLabel: "पुनर्वसु", gana: "Deva", yoni: "Cat", nadi: "Madhya" },
  { key: "pushya", label: "Pushya", hindiLabel: "पुष्य", gana: "Deva", yoni: "Sheep", nadi: "Antya" },
  { key: "ashlesha", label: "Ashlesha", hindiLabel: "आश्लेषा", gana: "Rakshasa", yoni: "Cat", nadi: "Aadi" },
  { key: "magha", label: "Magha", hindiLabel: "मघा", gana: "Rakshasa", yoni: "Rat", nadi: "Madhya" },
  { key: "purva_phalguni", label: "Purva Phalguni", hindiLabel: "पूर्व फाल्गुनी", gana: "Manushya", yoni: "Rat", nadi: "Antya" },
  { key: "uttara_phalguni", label: "Uttara Phalguni", hindiLabel: "उत्तर फाल्गुनी", gana: "Manushya", yoni: "Cow", nadi: "Aadi" },
  { key: "hasta", label: "Hasta", hindiLabel: "हस्त", gana: "Deva", yoni: "Buffalo", nadi: "Madhya" },
  { key: "chitra", label: "Chitra", hindiLabel: "चित्रा", gana: "Rakshasa", yoni: "Tiger", nadi: "Antya" },
  { key: "swati", label: "Swati", hindiLabel: "स्वाती", gana: "Deva", yoni: "Buffalo", nadi: "Aadi" },
  { key: "vishakha", label: "Vishakha", hindiLabel: "विशाखा", gana: "Rakshasa", yoni: "Tiger", nadi: "Madhya" },
  { key: "anuradha", label: "Anuradha", hindiLabel: "अनुराधा", gana: "Deva", yoni: "Deer", nadi: "Antya" },
  { key: "jyeshtha", label: "Jyeshtha", hindiLabel: "ज्येष्ठा", gana: "Rakshasa", yoni: "Deer", nadi: "Aadi" },
  { key: "mula", label: "Mula", hindiLabel: "मूल", gana: "Rakshasa", yoni: "Dog", nadi: "Madhya" },
  { key: "purva_ashadha", label: "Purva Ashadha", hindiLabel: "पूर्वाषाढ़ा", gana: "Manushya", yoni: "Monkey", nadi: "Antya" },
  { key: "uttara_ashadha", label: "Uttara Ashadha", hindiLabel: "उत्तराषाढ़ा", gana: "Manushya", yoni: "Mongoose", nadi: "Aadi" },
  { key: "shravana", label: "Shravana", hindiLabel: "श्रवण", gana: "Deva", yoni: "Monkey", nadi: "Madhya" },
  { key: "dhanishta", label: "Dhanishta", hindiLabel: "धनिष्ठा", gana: "Rakshasa", yoni: "Lion", nadi: "Antya" },
  { key: "shatabhisha", label: "Shatabhisha", hindiLabel: "शतभिषा", gana: "Rakshasa", yoni: "Horse", nadi: "Aadi" },
  { key: "purva_bhadrapada", label: "Purva Bhadrapada", hindiLabel: "पूर्व भाद्रपद", gana: "Manushya", yoni: "Lion", nadi: "Madhya" },
  { key: "uttara_bhadrapada", label: "Uttara Bhadrapada", hindiLabel: "उत्तर भाद्रपद", gana: "Manushya", yoni: "Cow", nadi: "Antya" },
  { key: "revati", label: "Revati", hindiLabel: "रेवती", gana: "Deva", yoni: "Elephant", nadi: "Aadi" },
];

// ---- 12 Rashis (Moon signs) ----
const RASHIS: Rashi[] = [
  { key: "aries", label: "Aries", hindiLabel: "मेष", lord: "Mars", varna: "Kshatriya", vashya: "Chatushpada" },
  { key: "taurus", label: "Taurus", hindiLabel: "वृषभ", lord: "Venus", varna: "Vaishya", vashya: "Chatushpada" },
  { key: "gemini", label: "Gemini", hindiLabel: "मिथुन", lord: "Mercury", varna: "Shudra", vashya: "Manav" },
  { key: "cancer", label: "Cancer", hindiLabel: "कर्क", lord: "Moon", varna: "Brahmin", vashya: "Jalachar" },
  { key: "leo", label: "Leo", hindiLabel: "सिंह", lord: "Sun", varna: "Kshatriya", vashya: "Vanachar" },
  { key: "virgo", label: "Virgo", hindiLabel: "कन्या", lord: "Mercury", varna: "Vaishya", vashya: "Manav" },
  { key: "libra", label: "Libra", hindiLabel: "तुला", lord: "Venus", varna: "Shudra", vashya: "Manav" },
  { key: "scorpio", label: "Scorpio", hindiLabel: "वृश्चिक", lord: "Mars", varna: "Brahmin", vashya: "Keeta" },
  { key: "sagittarius", label: "Sagittarius", hindiLabel: "धनु", lord: "Jupiter", varna: "Kshatriya", vashya: "Manav" },
  { key: "capricorn", label: "Capricorn", hindiLabel: "मकर", lord: "Saturn", varna: "Vaishya", vashya: "Chatushpada" },
  { key: "aquarius", label: "Aquarius", hindiLabel: "कुंभ", lord: "Saturn", varna: "Shudra", vashya: "Manav" },
  { key: "pisces", label: "Pisces", hindiLabel: "मीन", lord: "Jupiter", varna: "Brahmin", vashya: "Jalachar" },
];

const VARNA_RANK: Record<Varna, number> = { Brahmin: 4, Kshatriya: 3, Vaishya: 2, Shudra: 1 };

const VASHYA_TABLE: Record<string, number> = {
  "Chatushpada-Chatushpada": 2, "Manav-Manav": 2, "Jalachar-Jalachar": 2,
  "Vanachar-Vanachar": 2, "Keeta-Keeta": 2,
  "Chatushpada-Manav": 1, "Chatushpada-Jalachar": 1, "Chatushpada-Vanachar": 0, "Chatushpada-Keeta": 0,
  "Manav-Jalachar": 1, "Manav-Vanachar": 1, "Manav-Keeta": 0,
  "Jalachar-Vanachar": 0, "Jalachar-Keeta": 0,
  "Vanachar-Keeta": 0,
};

const PLANET_RELATIONS: Record<Planet, { friends: Planet[]; enemies: Planet[] }> = {
  Sun: { friends: ["Moon", "Mars", "Jupiter"], enemies: ["Venus", "Saturn"] },
  Moon: { friends: ["Sun", "Mercury"], enemies: [] },
  Mars: { friends: ["Sun", "Moon", "Jupiter"], enemies: ["Mercury"] },
  Mercury: { friends: ["Sun", "Venus"], enemies: ["Moon"] },
  Jupiter: { friends: ["Sun", "Moon", "Mars"], enemies: ["Mercury", "Venus"] },
  Venus: { friends: ["Mercury", "Saturn"], enemies: ["Sun", "Moon"] },
  Saturn: { friends: ["Mercury", "Venus"], enemies: ["Sun", "Moon", "Mars"] },
};

// Boy-row / Girl-column Gana Koota table (classical values, out of 6)
const GANA_TABLE: Record<Gana, Record<Gana, number>> = {
  Deva: { Deva: 6, Manushya: 6, Rakshasa: 1 },
  Manushya: { Deva: 5, Manushya: 6, Rakshasa: 0 },
  Rakshasa: { Deva: 1, Manushya: 0, Rakshasa: 6 },
};

// Classical bitter-enemy Yoni pairs (Vaira yoni) — score 0
const YONI_ENEMIES = new Set([
  "Serpent-Mongoose", "Mongoose-Serpent",
  "Cow-Tiger", "Tiger-Cow",
  "Elephant-Lion", "Lion-Elephant",
  "Deer-Dog", "Dog-Deer",
  "Rat-Cat", "Cat-Rat",
  "Monkey-Sheep", "Sheep-Monkey",
  "Horse-Buffalo", "Buffalo-Horse",
]);

const MIN_YEAR = 1900;
void MIN_YEAR; // reserved for potential future birth-detail entry

const SELECT_CLASS =
  "w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-black/10 bg-white";
const SELECT_ERROR_CLASS =
  "w-full rounded-xl border border-red-500 p-3 focus:outline-none focus:ring-2 focus:ring-red-200 bg-white";
const LABEL_CLASS = "mb-2 block font-medium";

// ---- Koota scoring functions ----

function varnaScore(boyRashi: Rashi, girlRashi: Rashi): number {
  return VARNA_RANK[girlRashi.varna] >= VARNA_RANK[boyRashi.varna] ? 1 : 0;
}

function vashyaScore(boyRashi: Rashi, girlRashi: Rashi): number {
  const key = `${boyRashi.vashya}-${girlRashi.vashya}`;
  const revKey = `${girlRashi.vashya}-${boyRashi.vashya}`;
  return VASHYA_TABLE[key] ?? VASHYA_TABLE[revKey] ?? 0;
}

/** Tara is counted in both directions (mod 9); positions 3, 5, 7 are inauspicious. */
function taraScore(boyNak: Nakshatra, girlNak: Nakshatra): number {
  const i1 = NAKSHATRAS.findIndex((n) => n.key === boyNak.key);
  const i2 = NAKSHATRAS.findIndex((n) => n.key === girlNak.key);

  const countForward = (((i2 - i1 + 27) % 27) % 9) + 1;
  const countBackward = (((i1 - i2 + 27) % 27) % 9) + 1;

  const goodPosition = (n: number) => ![3, 5, 7].includes(n);

  let score = 0;
  score += goodPosition(countForward) ? 1.5 : 0;
  score += goodPosition(countBackward) ? 1.5 : 0;
  return score;
}

function yoniScore(boyNak: Nakshatra, girlNak: Nakshatra): number {
  if (boyNak.yoni === girlNak.yoni) return 4;
  const key = `${boyNak.yoni}-${girlNak.yoni}`;
  if (YONI_ENEMIES.has(key)) return 0;
  return 2; // neutral default (simplified — full classical matrix has finer 1/3 gradations)
}

function grahaMaitriScore(boyRashi: Rashi, girlRashi: Rashi): number {
  const p1 = boyRashi.lord;
  const p2 = girlRashi.lord;
  if (p1 === p2) return 5;

  const r1 = PLANET_RELATIONS[p1];
  const r2 = PLANET_RELATIONS[p2];
  const rel1 = r1.friends.includes(p2) ? "friend" : r1.enemies.includes(p2) ? "enemy" : "neutral";
  const rel2 = r2.friends.includes(p1) ? "friend" : r2.enemies.includes(p1) ? "enemy" : "neutral";

  if (rel1 === "friend" && rel2 === "friend") return 5;
  if ((rel1 === "friend" && rel2 === "neutral") || (rel1 === "neutral" && rel2 === "friend")) return 4;
  if (rel1 === "neutral" && rel2 === "neutral") return 3;
  if ((rel1 === "neutral" && rel2 === "enemy") || (rel1 === "enemy" && rel2 === "neutral")) return 1;
  if (rel1 === "enemy" && rel2 === "enemy") return 0;
  return 2; // mixed friend/enemy fallback
}

function ganaScore(boyNak: Nakshatra, girlNak: Nakshatra): number {
  return GANA_TABLE[boyNak.gana][girlNak.gana];
}

/** Bhakoot dosha occurs at rashi-distance 6/8, 2/12, or 5/9 (counted inclusively). */
function bhakootScore(boyRashi: Rashi, girlRashi: Rashi): number {
  const i1 = RASHIS.findIndex((r) => r.key === boyRashi.key);
  const i2 = RASHIS.findIndex((r) => r.key === girlRashi.key);
  const distance = ((i2 - i1 + 12) % 12) + 1;
  const doshaDistances = [2, 5, 6, 8, 9, 12];
  return doshaDistances.includes(distance) ? 0 : 7;
}

function nadiScore(boyNak: Nakshatra, girlNak: Nakshatra): number {
  return boyNak.nadi === girlNak.nadi ? 0 : 8;
}

function getTier(score: number): { label: string; emoji: string } {
  if (score < 18) return { label: "Not Recommended", emoji: "⚠️" };
  if (score < 25) return { label: "Average Match", emoji: "🤔" };
  if (score < 33) return { label: "Good Match", emoji: "💫" };
  return { label: "Excellent Match", emoji: "❤️" };
}

interface FormErrors {
  boyNakshatra?: string;
  boyRashi?: string;
  girlNakshatra?: string;
  girlRashi?: string;
}

export default function KundliMilanCalculator() {
  const boyNakId = useId();
  const boyRashiId = useId();
  const girlNakId = useId();
  const girlRashiId = useId();

  const [boyNakshatra, setBoyNakshatra] = useState("");
  const [boyRashi, setBoyRashi] = useState("");
  const [girlNakshatra, setGirlNakshatra] = useState("");
  const [girlRashi, setGirlRashi] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = useCallback((): { ok: boolean; errors: FormErrors } => {
    const next: FormErrors = {};
    if (!boyNakshatra) next.boyNakshatra = "Please select the boy's nakshatra.";
    if (!boyRashi) next.boyRashi = "Please select the boy's rashi.";
    if (!girlNakshatra) next.girlNakshatra = "Please select the girl's nakshatra.";
    if (!girlRashi) next.girlRashi = "Please select the girl's rashi.";
    return { ok: Object.keys(next).length === 0, errors: next };
  }, [boyNakshatra, boyRashi, girlNakshatra, girlRashi]);

  const result = useMemo(() => {
    if (!submitted) return null;
    const { ok } = validate();
    if (!ok) return null;

    const bNak = NAKSHATRAS.find((n) => n.key === boyNakshatra);
    const gNak = NAKSHATRAS.find((n) => n.key === girlNakshatra);
    const bRashi = RASHIS.find((r) => r.key === boyRashi);
    const gRashi = RASHIS.find((r) => r.key === girlRashi);
    if (!bNak || !gNak || !bRashi || !gRashi) return null;

    const varna = varnaScore(bRashi, gRashi);
    const vashya = vashyaScore(bRashi, gRashi);
    const tara = taraScore(bNak, gNak);
    const yoni = yoniScore(bNak, gNak);
    const grahaMaitri = grahaMaitriScore(bRashi, gRashi);
    const gana = ganaScore(bNak, gNak);
    const bhakoot = bhakootScore(bRashi, gRashi);
    const nadi = nadiScore(bNak, gNak);

    const total = varna + vashya + tara + yoni + grahaMaitri + gana + bhakoot + nadi;
    const tier = getTier(total);

    return {
      bNak, gNak, bRashi, gRashi,
      varna, vashya, tara, yoni, grahaMaitri, gana, bhakoot, nadi,
      total, tier,
      nadiDosha: nadi === 0,
      bhakootDosha: bhakoot === 0,
    };
  }, [boyNakshatra, boyRashi, girlNakshatra, girlRashi, submitted, validate]);

  const results = result
    ? [
        {
          label: "Match",
          value: `${result.bRashi.label} (${result.bRashi.hindiLabel}) + ${result.gRashi.label} (${result.gRashi.hindiLabel})`,
          highlight: true,
        },
        { label: "Total Guna Score", value: `${result.total} / 36` },
        { label: "Compatibility", value: `${result.tier.emoji} ${result.tier.label}` },
        { label: "Varna (Ego/Work)", value: `${result.varna} / 1` },
        { label: "Vashya (Dominance)", value: `${result.vashya} / 2` },
        { label: "Tara (Wellbeing)", value: `${result.tara} / 3` },
        { label: "Yoni (Physical/Sexual)", value: `${result.yoni} / 4` },
        { label: "Graha Maitri (Mental)", value: `${result.grahaMaitri} / 5` },
        { label: "Gana (Temperament)", value: `${result.gana} / 6` },
        { label: "Bhakoot (Love/Prosperity)", value: `${result.bhakoot} / 7${result.bhakootDosha ? " ⚠️ Dosha" : ""}` },
        { label: "Nadi (Health/Progeny)", value: `${result.nadi} / 8${result.nadiDosha ? " ⚠️ Dosha" : ""}` },
      ]
    : [];

  function handleCalculate() {
    const { ok, errors: validationErrors } = validate();
    setErrors(validationErrors);
    setSubmitted(ok);
  }

  function handleReset() {
    setBoyNakshatra("");
    setBoyRashi("");
    setGirlNakshatra("");
    setGirlRashi("");
    setSubmitted(false);
    setErrors({});
  }

  function makeChangeHandler(
    setter: (v: string) => void,
    errorKey: keyof FormErrors
  ) {
    return (e: React.ChangeEvent<HTMLSelectElement>) => {
      setter(e.target.value);
      if (errors[errorKey]) setErrors((prev) => ({ ...prev, [errorKey]: undefined }));
    };
  }

  const handleBoyNakChange = makeChangeHandler(setBoyNakshatra, "boyNakshatra");
  const handleBoyRashiChange = makeChangeHandler(setBoyRashi, "boyRashi");
  const handleGirlNakChange = makeChangeHandler(setGirlNakshatra, "girlNakshatra");
  const handleGirlRashiChange = makeChangeHandler(setGirlRashi, "girlRashi");

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Boy */}
        <div className="space-y-4 rounded-2xl border p-4">
          <h3 className="font-semibold text-gray-700">Boy&apos;s Details (वर)</h3>
          <div>
            <label htmlFor={boyNakId} className={LABEL_CLASS}>Nakshatra (नक्षत्र)</label>
            <select
              id={boyNakId}
              value={boyNakshatra}
              onChange={handleBoyNakChange}
              aria-invalid={!!errors.boyNakshatra}
              className={errors.boyNakshatra ? SELECT_ERROR_CLASS : SELECT_CLASS}
            >
              <option value="">Select nakshatra</option>
              {NAKSHATRAS.map((n) => (
                <option key={n.key} value={n.key}>{n.label} ({n.hindiLabel})</option>
              ))}
            </select>
            {errors.boyNakshatra && (
              <p role="alert" className="mt-1 text-sm text-red-600">{errors.boyNakshatra}</p>
            )}
          </div>
          <div>
            <label htmlFor={boyRashiId} className={LABEL_CLASS}>Rashi (राशि)</label>
            <select
              id={boyRashiId}
              value={boyRashi}
              onChange={handleBoyRashiChange}
              aria-invalid={!!errors.boyRashi}
              className={errors.boyRashi ? SELECT_ERROR_CLASS : SELECT_CLASS}
            >
              <option value="">Select rashi</option>
              {RASHIS.map((r) => (
                <option key={r.key} value={r.key}>{r.label} ({r.hindiLabel})</option>
              ))}
            </select>
            {errors.boyRashi && (
              <p role="alert" className="mt-1 text-sm text-red-600">{errors.boyRashi}</p>
            )}
          </div>
        </div>

        {/* Girl */}
        <div className="space-y-4 rounded-2xl border p-4">
          <h3 className="font-semibold text-gray-700">Girl&apos;s Details (कन्या)</h3>
          <div>
            <label htmlFor={girlNakId} className={LABEL_CLASS}>Nakshatra (नक्षत्र)</label>
            <select
              id={girlNakId}
              value={girlNakshatra}
              onChange={handleGirlNakChange}
              aria-invalid={!!errors.girlNakshatra}
              className={errors.girlNakshatra ? SELECT_ERROR_CLASS : SELECT_CLASS}
            >
              <option value="">Select nakshatra</option>
              {NAKSHATRAS.map((n) => (
                <option key={n.key} value={n.key}>{n.label} ({n.hindiLabel})</option>
              ))}
            </select>
            {errors.girlNakshatra && (
              <p role="alert" className="mt-1 text-sm text-red-600">{errors.girlNakshatra}</p>
            )}
          </div>
          <div>
            <label htmlFor={girlRashiId} className={LABEL_CLASS}>Rashi (राशि)</label>
            <select
              id={girlRashiId}
              value={girlRashi}
              onChange={handleGirlRashiChange}
              aria-invalid={!!errors.girlRashi}
              className={errors.girlRashi ? SELECT_ERROR_CLASS : SELECT_CLASS}
            >
              <option value="">Select rashi</option>
              {RASHIS.map((r) => (
                <option key={r.key} value={r.key}>{r.label} ({r.hindiLabel})</option>
              ))}
            </select>
            {errors.girlRashi && (
              <p role="alert" className="mt-1 text-sm text-red-600">{errors.girlRashi}</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          type="button"
          onClick={handleCalculate}
          className="rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black/40 focus:ring-offset-2"
        >
          Calculate Guna Milan
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
            {result.bRashi.label} ({result.bRashi.hindiLabel}) + {result.gRashi.label} ({result.gRashi.hindiLabel})
          </h3>
          <p className="mt-3 text-4xl font-bold text-pink-600">{result.total} / 36</p>
          <p className="mt-1 text-sm text-gray-500">
            {result.tier.emoji} {result.tier.label}
          </p>
          {(result.nadiDosha || result.bhakootDosha) && (
            <p className="mt-3 text-sm font-medium text-amber-700">
              {result.nadiDosha && "⚠️ Nadi Dosha present. "}
              {result.bhakootDosha && "⚠️ Bhakoot Dosha present. "}
              Traditionally, consult a knowledgeable astrologer before deciding.
            </p>
          )}
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Ashtakoot Guna Milan Breakdown"
          results={results}
          calculatorName="Kundli Milan Calculator"
        />
      )}
    </div>
  );
}