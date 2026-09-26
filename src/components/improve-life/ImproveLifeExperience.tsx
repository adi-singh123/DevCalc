"use client";

import { useMemo, useState } from "react";
import InteractiveFaq from "@/src/components/common/InteractiveFaq";
import { calculateLifeReport } from "@/src/lib/improve-life/engine";
import { calculationParameters, improveLifeFaqs } from "@/src/lib/improve-life/content";
import type { BirthDetails, BirthPlace, LifeReport, PlanetPosition } from "@/src/lib/improve-life/types";

const initialDetails: BirthDetails = {
  name: "", gender: "other", date: "", time: "", timeAccuracy: "exact",
  place: { label: "", latitude: 0, longitude: 0, timezone: "" },
};

const inputClass = "mt-3 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base text-stone-900 outline-none transition focus:border-[#1f3a5c] focus:ring-2 focus:ring-[#1f3a5c]/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white";
const primaryButton = "rounded-xl bg-[#1f3a5c] px-5 py-3 font-semibold text-white transition hover:bg-[#172d48] disabled:cursor-not-allowed disabled:opacity-50";
const secondaryButton = "rounded-xl border border-stone-300 bg-white px-5 py-3 font-semibold text-stone-700 transition hover:bg-stone-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200";

type View = "landing" | "questions" | "report";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", { dateStyle: "long" }).format(new Date(`${value}T00:00:00`));
}

function PlaceSearch({ value, onSelect }: { value: BirthPlace; onSelect: (place: BirthPlace) => void }) {
  const [query, setQuery] = useState(value.label);
  const [results, setResults] = useState<BirthPlace[]>([]);
  const [status, setStatus] = useState("");

  async function search() {
    if (query.trim().length < 2) return setStatus("Enter at least two characters.");
    setStatus("Searching locations…");
    const response = await fetch(`/api/improve-life/locations?q=${encodeURIComponent(query.trim())}`);
    const data = await response.json();
    setResults(data.results ?? []);
    setStatus(data.error ?? ((data.results?.length ?? 0) ? "Select the correct birthplace." : "No matching locations found."));
  }

  return <div>
    <label htmlFor="birthplace" className="font-semibold text-stone-900 dark:text-white">Where were you born?</label>
    <div className="mt-3 flex flex-col gap-2 sm:flex-row">
      <input id="birthplace" value={query} onChange={(event) => { setQuery(event.target.value); onSelect({ label: "", latitude: 0, longitude: 0, timezone: "" }); }} className="min-w-0 flex-1 rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-[#1f3a5c] dark:border-slate-700 dark:bg-slate-950" placeholder="City, state, country" />
      <button type="button" onClick={search} className={`${secondaryButton} sm:w-auto`}>Search</button>
    </div>
    <p aria-live="polite" className="mt-2 text-sm text-stone-500 dark:text-slate-400">{status}</p>
    {results.length > 0 && <div className="mt-3 divide-y divide-stone-200 overflow-hidden rounded-xl border border-stone-200 bg-white dark:divide-slate-800 dark:border-slate-700 dark:bg-slate-950">
      {results.map((place) => <button key={`${place.label}-${place.latitude}`} type="button" onClick={() => { onSelect(place); setQuery(place.label); setResults([]); setStatus(`Selected ${place.label} (${place.timezone})`); }} className="block w-full px-4 py-3 text-left hover:bg-stone-50 dark:hover:bg-slate-900">
        <span className="block font-medium">{place.label}</span><span className="text-xs text-stone-500">{place.timezone} · {place.latitude.toFixed(3)}, {place.longitude.toFixed(3)}</span>
      </button>)}
    </div>}
  </div>;
}

function ReportSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return <section id={id} className="scroll-mt-32 rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"><h2 className="font-serif text-2xl font-semibold text-[#26364a] dark:text-white">{title}</h2><div className="mt-4 space-y-4 leading-7 text-stone-700 dark:text-slate-300">{children}</div></section>;
}

function planetSummary(planet: PlanetPosition) {
  return `${planet.sign} ${planet.degree.toFixed(2)}° · ${planet.nakshatra}, pada ${planet.pada}`;
}

const dashaGuidance: Record<string, { simple: string; pressure: string; opportunity: string; action: string }> = {
  Sun: { simple: "identity, confidence, authority and recognition", pressure: "ego clashes or pressure to prove yourself", opportunity: "taking responsibility and becoming more visible", action: "lead calmly and let consistent work build your reputation" },
  Moon: { simple: "emotions, family, home and changing priorities", pressure: "mood changes or carrying other people's worries", opportunity: "building emotional security and closer family connections", action: "protect your routine, sleep and emotional boundaries" },
  Mars: { simple: "action, courage, competition and decisive change", pressure: "impatience, conflict or rushed decisions", opportunity: "starting difficult work and acting with confidence", action: "use the extra drive for a clear goal instead of arguments" },
  Mercury: { simple: "learning, communication, trade and practical skills", pressure: "overthinking, mixed messages or scattered attention", opportunity: "study, networking, writing, business and problem-solving", action: "verify details and finish one priority before starting another" },
  Jupiter: { simple: "growth, guidance, education and wider responsibility", pressure: "overpromising or assuming growth will happen automatically", opportunity: "learning, mentoring, long-term planning and mature relationships", action: "choose steady expansion and advice from qualified people" },
  Venus: { simple: "relationships, comfort, creativity and material choices", pressure: "people-pleasing or spending for short-term comfort", opportunity: "partnership, cooperation, creative work and improving your environment", action: "be clear about values, commitment and affordability" },
  Saturn: { simple: "discipline, delay, duty and long-term foundations", pressure: "slow progress, isolation or heavy responsibility", opportunity: "building something durable through patience and structure", action: "follow a realistic routine and measure progress over months" },
  Rahu: { simple: "ambition, unfamiliar paths, technology and rapid change", pressure: "confusion, obsession or chasing impressive shortcuts", opportunity: "new networks, unconventional work and bold learning", action: "test claims carefully and keep a stable backup plan" },
  Ketu: { simple: "detachment, review, inner work and changing direction", pressure: "uncertainty, withdrawal or losing interest in old goals", opportunity: "simplifying life and understanding what is no longer useful", action: "avoid impulsive exits; reflect before closing an important chapter" },
};

function periodYears(start: string, end: string) {
  return `${new Date(start).getFullYear()}–${new Date(end).getFullYear()}`;
}

function LifeReportView({ report, restart }: { report: LifeReport; restart: () => void }) {
  const tendency: Record<string, string> = {
    Aries: "direct action and initiative", Taurus: "stability and practical follow-through", Gemini: "learning and communication", Cancer: "care, memory and belonging", Leo: "creative expression and leadership", Virgo: "analysis, service and refinement", Libra: "balance, cooperation and aesthetics", Scorpio: "depth, persistence and transformation", Sagittarius: "exploration, principles and teaching", Capricorn: "discipline, structure and long-range effort", Aquarius: "independent thought and collective concerns", Pisces: "imagination, empathy and reflection",
  };
  const anchor = report.lagna?.sign ?? report.moon.sign;
  const current = report.currentDasha;
  const dateOnly = (value: string) => new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(new Date(value));
  const past = report.dashas.filter((item) => new Date(item.end) < new Date()).slice(-3);
  const future = report.dashas.filter((item) => new Date(item.start) > new Date()).slice(0, 3);
  const currentGuide = current ? dashaGuidance[current.planet] : undefined;
  const relationshipWindow = report.dashas.find((period) => new Date(period.start) > new Date() && ["Venus", "Jupiter", "Moon"].includes(period.planet));
  const careerWindow = report.dashas.find((period) => new Date(period.start) > new Date() && ["Sun", "Mercury", "Jupiter", "Saturn", "Rahu"].includes(period.planet));
  const venus = report.planets.find((planet) => planet.name === "Venus");
  const mercury = report.planets.find((planet) => planet.name === "Mercury");
  const saturn = report.planets.find((planet) => planet.name === "Saturn");

  return <div className="mx-auto max-w-6xl px-4 py-10">
    <div className="flex flex-wrap items-start justify-between gap-5"><div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">Your easy-to-read Jyotish report</p><h1 className="mt-2 font-serif text-4xl font-semibold text-[#26364a] dark:text-white">{report.details.name}, here is your life reading</h1><p className="mt-3 max-w-3xl text-stone-600 dark:text-slate-300">Start with the plain-English reading below. Technical chart details are available later if you want to understand how it was calculated.</p></div><button type="button" onClick={restart} className={secondaryButton}>Start a new report</button></div>

    <nav aria-label="Report sections" className="sticky top-2 z-20 mt-8 overflow-x-auto rounded-xl border border-stone-200 bg-[#faf7f0]/95 p-2 backdrop-blur dark:border-slate-700 dark:bg-slate-950/95"><div className="flex min-w-max gap-1">{[["reading","Your reading"],["past","Past"],["present","Now"],["relationships","Relationships"],["career","Career"],["future","Next"],["improve","Action plan"],["chart","Chart"]].map(([id,label]) => <a key={id} href={`#${id}`} className="rounded-lg px-3 py-2 text-sm font-medium text-stone-700 hover:bg-white dark:text-slate-300 dark:hover:bg-slate-900">{label}</a>)}</div></nav>

    <div className="mt-6 grid gap-5">
      <ReportSection id="overview" title="Birth summary">
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div><dt className="text-sm text-stone-500">Birth</dt><dd className="font-semibold">{formatDate(report.details.date)}{!report.limited && ` · ${report.details.time}`}</dd></div>
          <div><dt className="text-sm text-stone-500">Birthplace</dt><dd className="font-semibold">{report.details.place.label}</dd></div>
          <div><dt className="text-sm text-stone-500">{report.lagna ? "Lagna" : "Moon sign"}</dt><dd className="font-semibold">{report.lagna ? planetSummary(report.lagna) : report.moon.sign}</dd></div>
          <div><dt className="text-sm text-stone-500">Current Mahadasha</dt><dd className="font-semibold">{current?.planet ?? "Outside generated range"}</dd></div>
        </dl>
        {report.limited && <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">Limited report: without a known birth time, Lagna, houses, D9/D10 chart houses and time-sensitive conclusions are intentionally omitted. Noon is used only to estimate the date-stable planetary positions and is not presented as your birth time.</p>}
      </ReportSection>

      <ReportSection id="reading" title="Your reading in simple words">
        <p><strong>Your basic nature:</strong> You are likely to approach life through {tendency[anchor]}. {report.lagna ? `This comes from your ${report.lagna.sign} Ascendant, which describes the style you show when meeting people and handling new situations.` : `Because your birth time is unknown, this reading uses your ${report.moon.sign} Moon sign and does not guess your Ascendant.`}</p>
        <p><strong>Your inner response:</strong> Your Moon is in {report.moon.sign}, in {report.moon.nakshatra} Nakshatra. In this tradition, that can show a need for {tendency[report.moon.sign]}. Under stress, you may lean too heavily on this habit; when balanced, it becomes one of your dependable strengths.</p>
        {currentGuide && <p><strong>Your main life chapter now:</strong> You are in a {current?.planet} period, connected with {currentGuide.simple}. The useful side is {currentGuide.opportunity}. The part to watch is {currentGuide.pressure}.</p>}
        <p className="rounded-xl bg-[#faf7f0] p-4 text-sm dark:bg-slate-950"><strong>How to read this:</strong> Keep the statements that match your experience and ignore those that do not. These are traditional interpretations of calculated placements, not facts about your character.</p>
      </ReportSection>

      <ReportSection id="past" title="What your past may have felt like">
        <p className="text-sm text-stone-500">Compare these themes with your real memories. The calculator does not assume that a specific event happened.</p>
        {past.length ? past.map((period) => {
          const guide = dashaGuidance[period.planet];
          return <article key={period.start} className="rounded-xl border border-stone-200 p-4 dark:border-slate-700">
            <h3 className="font-semibold text-[#26364a] dark:text-white">{periodYears(period.start, period.end)}: a {period.planet} chapter</h3>
            <p className="mt-2">This phase may have placed more attention on {guide.simple}. You may have experienced {guide.pressure}, while also learning about {guide.opportunity}. Ask yourself whether this period changed how you handled these parts of life.</p>
          </article>;
        }) : <p>No completed Mahadasha falls inside the generated timeline.</p>}
      </ReportSection>

      <ReportSection id="present" title="What is happening in your current phase">
        {current && currentGuide ? <>
          <p><strong>{current.planet} Mahadasha:</strong> {dateOnly(current.start)} to {dateOnly(current.end)}</p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-[#faf7f0] p-4 dark:bg-slate-950"><h3 className="font-semibold">Main theme</h3><p className="mt-2 text-sm leading-6">{currentGuide.simple}</p></div>
            <div className="rounded-xl bg-[#faf7f0] p-4 dark:bg-slate-950"><h3 className="font-semibold">Possible difficulty</h3><p className="mt-2 text-sm leading-6">{currentGuide.pressure}</p></div>
            <div className="rounded-xl bg-[#faf7f0] p-4 dark:bg-slate-950"><h3 className="font-semibold">Best use of this time</h3><p className="mt-2 text-sm leading-6">{currentGuide.action}.</p></div>
          </div>
          <p>This does not mean every area changes at once. Look for this theme mainly in the decisions and responsibilities already active in your life.</p>
        </> : <p>The current date is outside the generated Dasha range.</p>}
      </ReportSection>

      <ReportSection id="relationships" title="Relationships and marriage">
        <p>{venus ? `Your Venus is in ${venus.sign}${venus.house ? ` in house ${venus.house}` : ""}. In this rule set, relationships may work better when you express ${tendency[venus.sign]} in a balanced way.` : "Relationship guidance is limited because Venus could not be read."} Clear communication and shared values matter more than choosing a date from a calculator.</p>
        {relationshipWindow ? <p><strong>A relationship-focused period to observe:</strong> {relationshipWindow.planet} Mahadasha runs approximately {periodYears(relationshipWindow.start, relationshipWindow.end)}. Traditional astrology links it with {dashaGuidance[relationshipWindow.planet].simple}, so partnership or family questions may receive more attention. This is not a prediction that marriage will happen in that period.</p> : <p>No future Venus, Jupiter or Moon Mahadasha appears inside the generated timeline.</p>}
        <p><strong>Why there is no exact marriage year:</strong> responsible marriage timing would require validated sub-periods, transits and additional chart rules that this version does not calculate. Giving an exact year would be invented.</p>
      </ReportSection>

      <ReportSection id="career" title="Career, money and major purchases">
        <p>{mercury && saturn ? `Mercury in ${mercury.sign} describes how you learn and communicate, while Saturn in ${saturn.sign} represents patience and long-term responsibility in this method.` : "Career guidance is based mainly on the current planetary period."} Your most reliable progress comes from combining a learnable skill with a repeatable routine.</p>
        {careerWindow && <p><strong>A career-focused period to observe:</strong> {careerWindow.planet} Mahadasha runs approximately {periodYears(careerWindow.start, careerWindow.end)}. Its themes include {dashaGuidance[careerWindow.planet].opportunity}. Use this as a planning prompt, not a promise of a job, promotion or business success.</p>}
        <p><strong>Home, vehicle or major purchase:</strong> this report cannot responsibly say that you will buy a house by a particular year. Base purchases on income stability, savings, debt and qualified financial advice.</p>
      </ReportSection>

      <ReportSection id="future" title="What may need your attention next">
        {future.map((period) => {
          const guide = dashaGuidance[period.planet];
          return <article key={period.start} className="rounded-xl border border-stone-200 p-4 dark:border-slate-700">
            <h3 className="font-semibold text-[#26364a] dark:text-white">{periodYears(period.start, period.end)}: {period.planet} Mahadasha</h3>
            <p className="mt-2">Life may place more focus on {guide.simple}. The opportunity is {guide.opportunity}; the risk is {guide.pressure}. Prepare by trying to {guide.action}.</p>
          </article>;
        })}
      </ReportSection>

      <ReportSection id="improve" title="Your practical action plan">
        <ol className="grid gap-3 sm:grid-cols-2">
          <li className="rounded-xl bg-[#faf7f0] p-4 dark:bg-slate-950"><strong>1. Current priority</strong><p className="mt-1 text-sm">{currentGuide ? `${currentGuide.action}.` : "Choose one clear goal for the next three months."}</p></li>
          <li className="rounded-xl bg-[#faf7f0] p-4 dark:bg-slate-950"><strong>2. Relationships</strong><p className="mt-1 text-sm">Say what you need directly and judge compatibility through actions, not predictions.</p></li>
          <li className="rounded-xl bg-[#faf7f0] p-4 dark:bg-slate-950"><strong>3. Career and money</strong><p className="mt-1 text-sm">Build one useful skill, track spending and verify major decisions with qualified professionals.</p></li>
          <li className="rounded-xl bg-[#faf7f0] p-4 dark:bg-slate-950"><strong>4. Well-being</strong><p className="mt-1 text-sm">Protect sleep, movement and a stable routine; seek professional help when needed.</p></li>
        </ol>
      </ReportSection>

      <ReportSection id="chart" title="Technical chart details">
        <p className="text-sm">This table supports the reading above. You do not need to understand every term to use the plain-English sections.</p>
        <div className="overflow-x-auto"><table className="w-full min-w-[620px] text-left text-sm"><thead><tr className="border-b border-stone-200"><th className="py-3">Point</th><th>Sidereal position</th>{!report.limited && <th>House</th>}<th>D9 sign</th><th>D10 sign</th></tr></thead><tbody>{report.planets.map((planet) => <tr key={planet.name} className="border-b border-stone-100 dark:border-slate-800"><th className="py-3 font-semibold">{planet.name}</th><td>{planetSummary(planet)}</td>{!report.limited && <td>{planet.house}</td>}<td>{planet.navamsha}</td><td>{planet.dashamsha}</td></tr>)}</tbody></table></div>
      </ReportSection>

      <ReportSection id="timeline-past" title="Technical period history">
        {past.length ? past.map((period) => <article key={period.start} className="border-l-2 border-[#1f3a5c] pl-4"><h3 className="font-semibold">{period.planet} Mahadasha</h3><p className="text-sm text-stone-500">{dateOnly(period.start)} – {dateOnly(period.end)}</p><p>The traditional framework associates this period with themes represented by {period.planet}. Treat this as a period label for reflection, not a claim that a specific event occurred.</p></article>) : <p>No completed Mahadasha falls inside the generated timeline.</p>}
      </ReportSection>

      <ReportSection id="timeline-present" title="Technical current-period note">
        {current ? <><p><strong>{current.planet} Mahadasha:</strong> {dateOnly(current.start)} – {dateOnly(current.end)}</p><p>Current themes are derived from the calculated Vimshottari period and the natal placement of {current.planet}. Career, money and relationship decisions should still be based on evidence, professional advice and your real circumstances.</p></> : <p>The current date is outside the generated Dasha range.</p>}
      </ReportSection>

      <ReportSection id="timeline-future" title="Technical upcoming-period list">
        {future.map((period) => <article key={period.start} className="border-l-2 border-stone-300 pl-4"><h3 className="font-semibold">{period.planet} Mahadasha</h3><p className="text-sm text-stone-500">{dateOnly(period.start)} – {dateOnly(period.end)}</p><p>This is a traditional timing window, not a promised event or probability. Its meaning depends on the natal position and the person&apos;s circumstances.</p></article>)}
      </ReportSection>

      <ReportSection id="responsible-use" title="Responsible use">
        <p>Use the report as a structured reflection tool: define one practical career goal, review financial decisions with qualified professionals, communicate directly in relationships and maintain routines that support sleep, health and focused work.</p>
        <p>Traditional remedies are presented conservatively: reflection, charitable action, disciplined habits and respectful spiritual practice may be meaningful to you, but DevCalc does not prescribe gemstones, payments, medical treatments or guaranteed remedies.</p>
      </ReportSection>

      <ReportSection id="method" title="Calculation methodology and limitations">
        <p>Positions are calculated in UTC using Astronomy Engine and converted to a mean Lahiri-style sidereal longitude. The report uses whole-sign houses, mean lunar nodes and Vimshottari Mahadasha from the Moon&apos;s Nakshatra. D9 and D10 sign placements are mathematical Vargas; this version does not claim full Shadbala, Ashtakavarga, transit, Yoga, Dosha, Antardasha or Pratyantardasha analysis.</p>
        <p>Ayanamsha used: {report.ayanamsha.toFixed(6)}°. Normalized UTC instant: {report.utcDate}. Rule version: 1.0. The same normalized inputs and version produce the same report.</p>
        <p>Vedic astrology is a traditional belief system and is not scientifically validated as a method for predicting personality or future events. Do not use this report as medical, legal, financial, relationship or safety advice.</p>
      </ReportSection>
    </div>
  </div>;
}

export default function ImproveLifeExperience() {
  const [view, setView] = useState<View>("landing");
  const [step, setStep] = useState(0);
  const [details, setDetails] = useState(initialDetails);
  const [error, setError] = useState("");
  const [report, setReport] = useState<LifeReport | null>(null);
  const maxDate = new Date().toISOString().slice(0, 10);
  const stepValid = useMemo(() => [details.name.trim().length >= 2, Boolean(details.gender), Boolean(details.date) && details.date <= maxDate && details.date >= "1900-01-01", details.timeAccuracy === "unknown" || Boolean(details.time), Boolean(details.place.timezone), true][step], [details, maxDate, step]);

  function next() { if (!stepValid) return setError("Please complete this step before continuing."); setError(""); setStep((value) => Math.min(5, value + 1)); }
  function generate() { try { setReport(calculateLifeReport(details)); setView("report"); window.scrollTo({ top: 0, behavior: "smooth" }); } catch { setError("The report could not be calculated. Please review the birth details."); } }

  if (view === "report" && report) return <LifeReportView report={report} restart={() => { setReport(null); setDetails(initialDetails); setStep(0); setView("landing"); }} />;

  if (view === "questions") return <main className="mx-auto flex min-h-[72vh] max-w-3xl items-center px-4 py-8 sm:py-12"><section className="w-full rounded-2xl border border-stone-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-9">
    <div className="flex items-center justify-between gap-4"><p className="text-sm font-semibold text-[#1f3a5c] dark:text-blue-300">Birth details</p><p className="text-sm text-stone-500">Step {step + 1} of 6</p></div>
    <div className="mt-4 grid grid-cols-6 gap-2" aria-hidden="true">{Array.from({ length: 6 }, (_, index) => <span key={index} className={`h-1.5 rounded-full ${index <= step ? "bg-[#1f3a5c]" : "bg-stone-200 dark:bg-slate-700"}`} />)}</div>
    <div className="mt-7 min-h-64 sm:mt-9">
      {step === 0 && <div><label htmlFor="name" className="font-serif text-2xl font-semibold text-[#26364a] dark:text-white">What is your name?</label><p className="mt-2 text-sm text-stone-500">Used only to personalise the report, never to calculate planetary positions.</p><input id="name" autoComplete="name" value={details.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} className={inputClass} placeholder="Full name" /></div>}
      {step === 1 && <fieldset><legend className="font-serif text-2xl font-semibold text-[#26364a] dark:text-white">What is your gender?</legend><p className="mt-2 text-sm text-stone-500">Stored for report wording only; astronomical calculations do not depend on gender.</p><div className="mt-5 grid gap-3 sm:grid-cols-3">{[["male","Male"],["female","Female"],["other","Other / prefer not to say"]].map(([value,label]) => <button key={value} type="button" onClick={() => setDetails({ ...details, gender: value as BirthDetails["gender"] })} className={`${secondaryButton} ${details.gender === value ? "border-[#1f3a5c] ring-2 ring-[#1f3a5c]/15" : ""}`}>{label}</button>)}</div></fieldset>}
      {step === 2 && <div><label htmlFor="dob" className="font-serif text-2xl font-semibold text-[#26364a] dark:text-white">When were you born?</label><input id="dob" type="date" min="1900-01-01" max={maxDate} value={details.date} onChange={(e) => setDetails({ ...details, date: e.target.value })} className={inputClass} /></div>}
      {step === 3 && <div><h2 className="font-serif text-2xl font-semibold text-[#26364a] dark:text-white">What time were you born?</h2><p className="mt-2 text-sm text-stone-500">Lagna, houses and divisional interpretation can change with birth time.</p><div className="mt-5 grid gap-3 sm:grid-cols-3">{[["exact","Exact"],["approximate","Approximate"],["unknown","I don’t know"]].map(([value,label]) => <button key={value} type="button" onClick={() => setDetails({ ...details, timeAccuracy: value as BirthDetails["timeAccuracy"] })} className={`${secondaryButton} ${details.timeAccuracy === value ? "border-[#1f3a5c] ring-2 ring-[#1f3a5c]/15" : ""}`}>{label}</button>)}</div>{details.timeAccuracy !== "unknown" && <input aria-label="Birth time" type="time" value={details.time} onChange={(e) => setDetails({ ...details, time: e.target.value })} className={inputClass} />}{details.timeAccuracy === "unknown" && <p className="mt-5 rounded-xl bg-stone-50 p-4 text-sm text-stone-700 dark:bg-slate-950 dark:text-slate-300">A limited report will omit Lagna, houses and other time-sensitive conclusions. No birth time will be invented.</p>}</div>}
      {step === 4 && <PlaceSearch value={details.place} onSelect={(place) => setDetails({ ...details, place })} />}
      {step === 5 && <div><h2 className="font-serif text-2xl font-semibold text-[#26364a] dark:text-white">Please confirm your birth details</h2><dl className="mt-5 divide-y divide-stone-200 rounded-xl border border-stone-200 px-4 dark:divide-slate-800 dark:border-slate-700">{[["Name",details.name],["Gender",details.gender],["Date",formatDate(details.date)],["Birth time",details.timeAccuracy === "unknown" ? "Unknown — limited report" : `${details.time} (${details.timeAccuracy})`],["Birthplace",details.place.label],["Timezone",details.place.timezone]].map(([term,value]) => <div key={term} className="grid gap-1 py-3 sm:grid-cols-[150px_1fr]"><dt className="text-sm text-stone-500">{term}</dt><dd className="font-medium capitalize">{value}</dd></div>)}</dl></div>}
    </div>
    {error && <p role="alert" className="mt-4 text-sm font-medium text-red-700">{error}</p>}
    <div className="mt-7 grid grid-cols-2 gap-3 border-t border-stone-200 pt-5 dark:border-slate-800"><button type="button" onClick={() => step === 0 ? setView("landing") : setStep(step - 1)} className={secondaryButton}>Back</button>{step < 5 ? <button type="button" onClick={next} disabled={!stepValid} className={primaryButton}>Continue</button> : <button type="button" onClick={generate} className={primaryButton}>Create report</button>}</div>
  </section></main>;

  return <main className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:pt-10">
    <section className="grid items-center gap-10 border-b border-stone-200 py-10 dark:border-slate-800 sm:py-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)] lg:gap-16">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">Traditional Jyotish calculation</p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight text-[#26364a] dark:text-white sm:text-5xl lg:text-6xl">Know yourself better through a transparent birth-chart calculation</h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-stone-600 dark:text-slate-300 sm:text-lg sm:leading-8">Explore sidereal planetary positions, Nakshatra, whole-sign houses and Vimshottari life periods using your birth details and a documented, deterministic method.</p>
        <button type="button" onClick={() => { setView("questions"); setStep(0); }} className={`mt-8 w-full sm:w-auto ${primaryButton}`}>Create my report</button>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-stone-500">No random text or guaranteed predictions. Identical normalized inputs and the same rule version produce the same calculation.</p>
      </div>
      <aside className="rounded-2xl border border-stone-200 bg-[#faf7f0] p-5 dark:border-slate-700 dark:bg-slate-900 sm:p-7" aria-label="Report calculation summary">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-stone-500">Calculation summary</p>
        <dl className="mt-5 space-y-4">
          {[["Inputs", "Date, time and birthplace"], ["Coordinate system", "Sidereal zodiac"], ["House method", "Whole-sign houses"], ["Timing method", "Vimshottari Mahadasha"], ["Privacy", "Report calculated in your browser"]].map(([term, value]) => <div key={term} className="border-b border-stone-200 pb-4 last:border-0 last:pb-0 dark:border-slate-700"><dt className="text-xs font-semibold uppercase tracking-wide text-stone-500">{term}</dt><dd className="mt-1 font-medium text-[#26364a] dark:text-white">{value}</dd></div>)}
        </dl>
      </aside>
    </section>

    <section className="py-12 sm:py-16" aria-labelledby="explore-heading">
      <div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-stone-500">Report coverage</p><h2 id="explore-heading" className="mt-2 font-serif text-3xl font-semibold text-[#26364a] dark:text-white sm:text-4xl">What you can explore</h2><p className="mt-4 leading-7 text-stone-600 dark:text-slate-300">Every result is connected to a calculated chart value or period. The report separates available calculations from techniques that are not yet supported.</p></div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{["Personality themes from Lagna and Moon","Planet signs, degrees, Nakshatra and Pada","Whole-sign houses when time is known","D9 and D10 divisional sign placements","Past Mahadasha periods","Present planetary period","Upcoming Mahadasha periods","Practical reflection prompts"].map((item) => <div key={item} className="rounded-xl border border-stone-200 bg-white p-5 text-sm font-medium leading-6 text-stone-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">{item}</div>)}</div>
    </section>

    <section className="border-y border-stone-200 py-12 dark:border-slate-800 sm:py-16" aria-labelledby="method-heading">
      <div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-stone-500">Transparent methodology</p><h2 id="method-heading" className="mt-2 font-serif text-3xl font-semibold text-[#26364a] dark:text-white sm:text-4xl">How DevCalc produces the result</h2><p className="mt-4 leading-7 text-stone-600 dark:text-slate-300">The report is a sequence of reproducible calculations followed by conservative, fixed interpretations. It is not generated from your name, browsing activity or a random horoscope template.</p></div>
      <ol className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {[
          ["Validate", "Check the date, time accuracy and selected birthplace."],
          ["Normalize", "Convert local birth time to UTC using the resolved historical timezone."],
          ["Calculate", "Find supported planetary longitudes and the local Ascendant."],
          ["Transform", "Apply sidereal correction, signs, houses, Nakshatra, D9 and D10 rules."],
          ["Interpret", "Map the calculated values to reviewed themes and clear limitations."],
        ].map(([title, description], index) => <li key={title} className="rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"><span className="text-sm font-semibold text-[#1f3a5c] dark:text-blue-300">Step {index + 1}</span><h3 className="mt-2 font-serif text-xl font-semibold text-[#26364a] dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-stone-600 dark:text-slate-300">{description}</p></li>)}
      </ol>
    </section>

    <section className="py-12 sm:py-16" aria-labelledby="parameters-heading">
      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
        <div><p className="text-sm font-semibold uppercase tracking-[0.14em] text-stone-500">Calculation inputs</p><h2 id="parameters-heading" className="mt-2 font-serif text-3xl font-semibold text-[#26364a] dark:text-white sm:text-4xl">Parameters used in the report</h2><p className="mt-4 leading-7 text-stone-600 dark:text-slate-300">Name and gender do not change the astronomy. The following values determine chart positions, timing or the interpretation rule set.</p></div>
        <dl className="overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          {calculationParameters.map((parameter) => <div key={parameter.name} className="grid gap-1 border-b border-stone-200 px-5 py-4 last:border-0 dark:border-slate-800 sm:grid-cols-[180px_1fr] sm:gap-6 sm:px-6"><dt className="font-semibold text-[#26364a] dark:text-white">{parameter.name}</dt><dd className="text-sm leading-6 text-stone-600 dark:text-slate-300">{parameter.purpose}</dd></div>)}
        </dl>
      </div>
    </section>

    <section className="grid gap-5 border-y border-stone-200 py-12 dark:border-slate-800 sm:grid-cols-2 sm:py-16">
      <div className="rounded-2xl border border-stone-200 bg-[#faf7f0] p-6 dark:border-slate-700 dark:bg-slate-900"><h2 className="font-serif text-2xl font-semibold text-[#26364a] dark:text-white">Why time and place matter</h2><p className="mt-4 leading-7 text-stone-700 dark:text-slate-300">Birth date, local time, coordinates and timezone define the astronomical instant. Time and coordinates also affect the Ascendant and houses. When time is unknown, those values are deliberately omitted.</p></div>
      <div className="rounded-2xl border border-stone-200 bg-[#faf7f0] p-6 dark:border-slate-700 dark:bg-slate-900"><h2 className="font-serif text-2xl font-semibold text-[#26364a] dark:text-white">What the timeline means</h2><p className="mt-4 leading-7 text-stone-700 dark:text-slate-300">Past, present and future sections follow the calculated Vimshottari Mahadasha sequence. They describe traditional period themes; they do not assert that an event happened or promise that one will happen.</p></div>
      <div className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"><h2 className="font-serif text-2xl font-semibold text-[#26364a] dark:text-white">Privacy</h2><p className="mt-4 leading-7 text-stone-700 dark:text-slate-300">After birthplace resolution, the report calculation runs in your browser. The completed birth profile is not submitted to a report database.</p></div>
      <div className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"><h2 className="font-serif text-2xl font-semibold text-[#26364a] dark:text-white">Responsible use</h2><p className="mt-4 leading-7 text-stone-700 dark:text-slate-300">Astrology is a traditional belief system, not a scientifically validated prediction method. Do not use this report as professional medical, legal, financial or safety advice.</p></div>
    </section>

    <section className="py-12 sm:py-16" aria-labelledby="faq-heading">
      <div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-stone-500">Clear answers</p><h2 id="faq-heading" className="mt-2 font-serif text-3xl font-semibold text-[#26364a] dark:text-white sm:text-4xl">Frequently asked questions</h2><p className="mt-4 leading-7 text-stone-600 dark:text-slate-300">Understand what the report calculates, what each input changes, and where its limitations begin.</p></div>
      <InteractiveFaq faqs={improveLifeFaqs} />
    </section>

    <section className="rounded-2xl border border-stone-200 bg-[#faf7f0] p-6 dark:border-slate-700 dark:bg-slate-900 sm:p-8"><h2 className="font-serif text-2xl font-semibold text-[#26364a] dark:text-white">Current methodology boundary</h2><p className="mt-3 max-w-5xl leading-7 text-stone-700 dark:text-slate-300">This version calculates D1 whole-sign placements, D9/D10 sign placements, mean lunar nodes and Vimshottari Mahadasha. It does not claim full Shadbala, Ashtakavarga, Yoga/Dosha, transit, Antardasha, Pratyantardasha or event-window analysis. These techniques should be added only after separate validation and methodology review.</p><button type="button" onClick={() => { setView("questions"); setStep(0); window.scrollTo({ top: 0, behavior: "smooth" }); }} className={`mt-6 w-full sm:w-auto ${primaryButton}`}>Create my report</button></section>
  </main>;
}
