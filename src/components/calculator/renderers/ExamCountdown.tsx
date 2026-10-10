"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { Bookmark, CalendarDays, CheckCircle2, Clock3, Flame, Plus, Trash2 } from "lucide-react";
import ResultsSection from "../ResultsSection";

type ExamPlan = {
  examName: string;
  examDate: string;
  dailyHours: number;
  topics: number;
  createdDate: string;
};

type StudyLog = Record<string, number>;
type SavedBookmark = { id: string; title: string; note: string };

type StoredPlanner = {
  plan: ExamPlan;
  studyLog: StudyLog;
  bookmarks: SavedBookmark[];
};

const STORAGE_KEY = "devcalc.exam-planner.v1";
const DAY_MS = 86_400_000;

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateNumber(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return Date.UTC(year, month - 1, day);
}

function dayDifference(from: string, to: string) {
  return Math.ceil((dateNumber(to) - dateNumber(from)) / DAY_MS);
}

function calculateStreak(log: StudyLog, today: string) {
  let streak = 0;
  const cursor = new Date(`${today}T12:00:00`);
  while (log[localDateKey(cursor)] > 0) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function Calendar({ examDate, studyLog }: { examDate: string; studyLog: StudyLog }) {
  const exam = new Date(`${examDate}T12:00:00`);
  const year = exam.getFullYear();
  const month = exam.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = Array.from({ length: firstDay + daysInMonth }, (_, index) => index < firstDay ? null : index - firstDay + 1);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center justify-between gap-3">
        <div><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Exam calendar</p><h3 className="mt-1 text-lg font-bold">{exam.toLocaleDateString("en-IN", { month: "long", year: "numeric" })}</h3></div>
        <CalendarDays className="text-blue-600" aria-hidden="true" />
      </div>
      <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => <div key={day} className="py-2 font-semibold text-slate-500">{day}</div>)}
        {cells.map((day, index) => {
          if (!day) return <div key={`blank-${index}`} />;
          const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const isExam = key === examDate;
          const studied = (studyLog[key] ?? 0) > 0;
          return <div key={key} title={studied ? `${studyLog[key]} study minutes` : undefined} className={`relative rounded-lg py-2 ${isExam ? "bg-blue-600 font-bold text-white" : studied ? "bg-emerald-100 font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300" : "bg-slate-50 dark:bg-slate-800"}`}>{day}{studied && !isExam && <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald-600" />}</div>;
        })}
      </div>
      <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500"><span><i className="mr-1 inline-block h-2 w-2 rounded-full bg-blue-600" />Exam</span><span><i className="mr-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />Study logged</span></div>
    </section>
  );
}

export default function ExamCountdownCalculator() {
  const [examName, setExamName] = useState("");
  const [examDate, setExamDate] = useState("");
  const [dailyStudyHours, setDailyStudyHours] = useState("3");
  const [topics, setTopics] = useState("20");
  const [plan, setPlan] = useState<ExamPlan | null>(null);
  const [studyLog, setStudyLog] = useState<StudyLog>({});
  const [bookmarks, setBookmarks] = useState<SavedBookmark[]>([]);
  const [bookmarkTitle, setBookmarkTitle] = useState("");
  const [bookmarkNote, setBookmarkNote] = useState("");
  const [error, setError] = useState("");
  const today = localDateKey();

  useEffect(() => {
    let active = true;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) return;
      const parsed = JSON.parse(saved) as StoredPlanner;
      if (parsed.plan?.examDate && parsed.plan?.examName) {
        queueMicrotask(() => {
          if (!active) return;
          setPlan(parsed.plan);
          setExamName(parsed.plan.examName);
          setExamDate(parsed.plan.examDate);
          setDailyStudyHours(String(parsed.plan.dailyHours));
          setTopics(String(parsed.plan.topics));
          setStudyLog(parsed.studyLog ?? {});
          setBookmarks(parsed.bookmarks ?? []);
        });
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    return () => { active = false; };
  }, []);

  useEffect(() => {
    if (!plan) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ plan, studyLog, bookmarks } satisfies StoredPlanner));
  }, [plan, studyLog, bookmarks]);

  const result = useMemo(() => {
    if (!plan) return null;
    const daysRemaining = dayDifference(today, plan.examDate);
    const validDays = Math.max(0, daysRemaining);
    const revisionDays = validDays > 0 ? Math.max(1, Math.floor(validDays * 0.2)) : 0;
    const studyDays = Math.max(0, validDays - revisionDays);
    const totalMinutesLogged = Object.values(studyLog).reduce((sum, minutes) => sum + minutes, 0);
    const dailyMinutes = plan.dailyHours * 60;
    const todayMinutes = studyLog[today] ?? 0;
    const totalWindow = Math.max(1, dayDifference(plan.createdDate, plan.examDate));
    const elapsed = Math.max(0, dayDifference(plan.createdDate, today));
    const timelineProgress = Math.min(100, Math.round((elapsed / totalWindow) * 100));
    return {
      daysRemaining,
      weeksRemaining: Math.max(0, daysRemaining / 7),
      availableHours: validDays * plan.dailyHours,
      revisionDays,
      studyDays,
      topicsPerWeek: studyDays ? Math.max(1, Math.ceil(plan.topics / Math.max(1, studyDays / 7))) : plan.topics,
      totalMinutesLogged,
      todayMinutes,
      dailyMinutes,
      dailyProgress: dailyMinutes ? Math.min(100, Math.round((todayMinutes / dailyMinutes) * 100)) : 0,
      timelineProgress,
      streak: calculateStreak(studyLog, today),
    };
  }, [plan, studyLog, today]);

  function savePlan(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const hours = Number(dailyStudyHours);
    const topicCount = Number(topics);
    if (!examName.trim()) return setError("Enter an exam name.");
    if (!examDate || dayDifference(today, examDate) <= 0) return setError("Choose a future exam date.");
    if (!Number.isFinite(hours) || hours <= 0 || hours > 16) return setError("Daily study time must be between 0 and 16 hours.");
    if (!Number.isInteger(topicCount) || topicCount < 1 || topicCount > 1000) return setError("Enter between 1 and 1,000 syllabus topics.");
    const nextPlan = { examName: examName.trim(), examDate, dailyHours: hours, topics: topicCount, createdDate: plan?.createdDate ?? today };
    setPlan(nextPlan);
    setError("");
  }

  function addStudyMinutes(minutes: number) {
    setStudyLog((current) => ({ ...current, [today]: (current[today] ?? 0) + minutes }));
  }

  function addBookmark(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!bookmarkTitle.trim()) return;
    setBookmarks((current) => [...current, { id: crypto.randomUUID(), title: bookmarkTitle.trim(), note: bookmarkNote.trim() }]);
    setBookmarkTitle("");
    setBookmarkNote("");
  }

  function clearPlanner() {
    window.localStorage.removeItem(STORAGE_KEY);
    setPlan(null);
    setStudyLog({});
    setBookmarks([]);
    setExamName("");
    setExamDate("");
    setDailyStudyHours("3");
    setTopics("20");
  }

  const milestones = plan && result ? [30, 14, 7, 1].map((days) => ({ days, date: new Date(dateNumber(plan.examDate) - days * DAY_MS), reached: result.daysRemaining <= days })) : [];

  return (
    <div className="mt-8 space-y-6">
      <form onSubmit={savePlan} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Personal exam planner</p><h2 className="mt-1 text-2xl font-bold">Create your countdown</h2></div>{plan && <button type="button" onClick={clearPlanner} className="inline-flex items-center gap-2 text-sm font-semibold text-red-600"><Trash2 size={16} />Clear saved plan</button>}</div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <label><span className="mb-2 block font-medium">Exam name</span><input value={examName} onChange={(event) => setExamName(event.target.value)} placeholder="For example, NEET 2027" maxLength={80} className="w-full rounded-xl border border-slate-300 bg-transparent p-3 dark:border-slate-700" /></label>
          <label><span className="mb-2 block font-medium">Exam date</span><input type="date" min={today} value={examDate} onChange={(event) => setExamDate(event.target.value)} className="w-full rounded-xl border border-slate-300 bg-transparent p-3 dark:border-slate-700" /></label>
          <label><span className="mb-2 block font-medium">Daily study target (hours)</span><input type="number" min="0.5" max="16" step="0.5" value={dailyStudyHours} onChange={(event) => setDailyStudyHours(event.target.value)} className="w-full rounded-xl border border-slate-300 bg-transparent p-3 dark:border-slate-700" /></label>
          <label><span className="mb-2 block font-medium">Syllabus topics</span><input type="number" min="1" max="1000" value={topics} onChange={(event) => setTopics(event.target.value)} className="w-full rounded-xl border border-slate-300 bg-transparent p-3 dark:border-slate-700" /></label>
        </div>
        {error && <p role="alert" className="mt-4 text-sm font-semibold text-red-600">{error}</p>}
        <button type="submit" className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">{plan ? "Update saved plan" : "Create and save countdown"}</button>
        <p className="mt-3 text-xs text-slate-500">Your exam plan, study log, and bookmarks are stored only in this browser using localStorage.</p>
      </form>

      {plan && result && (
        <>
          <section className="grid gap-4 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-800 p-6 text-white shadow-lg sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">Next exam</p><h2 className="mt-2 text-3xl font-bold">{plan.examName}</h2>
              <div className="mt-6 flex flex-wrap items-end justify-between gap-5"><div><p className="text-6xl font-black">{Math.max(0, result.daysRemaining)}</p><p className="mt-1 text-blue-100">days remaining</p></div><div className="text-right"><p className="text-sm text-blue-100">{new Date(`${plan.examDate}T12:00:00`).toLocaleDateString("en-IN", { dateStyle: "long" })}</p><p className="mt-2 font-semibold">{result.availableHours.toLocaleString()} planned hours available</p></div></div>
              <div className="mt-6"><div className="flex justify-between text-xs"><span>Timeline used</span><span>{result.timelineProgress}%</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-white/20"><div className="h-full rounded-full bg-white" style={{ width: `${result.timelineProgress}%` }} /></div></div>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/30"><Flame className="text-amber-600" /><p className="mt-4 text-3xl font-bold">{result.streak}</p><p className="text-sm text-slate-600 dark:text-slate-300">day study streak</p></div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/30"><Clock3 className="text-emerald-600" /><p className="mt-4 text-3xl font-bold">{Math.round(result.totalMinutesLogged / 60 * 10) / 10}h</p><p className="text-sm text-slate-600 dark:text-slate-300">study time logged</p></div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
              <div className="flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Study today</p><h3 className="mt-1 text-xl font-bold">{result.todayMinutes} of {result.dailyMinutes} minutes</h3></div><span className="text-2xl font-bold text-blue-600">{result.dailyProgress}%</span></div>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"><div className="h-full rounded-full bg-blue-600" style={{ width: `${result.dailyProgress}%` }} /></div>
              <div className="mt-5 grid grid-cols-3 gap-2">{[15, 30, 60].map((minutes) => <button key={minutes} type="button" onClick={() => addStudyMinutes(minutes)} className="rounded-xl border border-slate-300 py-2 text-sm font-semibold hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">+{minutes} min</button>)}</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Preparation split</p>
              <dl className="mt-4 grid grid-cols-2 gap-4 text-sm"><div><dt className="text-slate-500">Learning days</dt><dd className="mt-1 text-2xl font-bold">{result.studyDays}</dd></div><div><dt className="text-slate-500">Revision days</dt><dd className="mt-1 text-2xl font-bold">{result.revisionDays}</dd></div><div><dt className="text-slate-500">Topics each week</dt><dd className="mt-1 text-2xl font-bold">{result.topicsPerWeek}</dd></div><div><dt className="text-slate-500">Weeks remaining</dt><dd className="mt-1 text-2xl font-bold">{result.weeksRemaining.toFixed(1)}</dd></div></dl>
            </div>
          </section>

          <Calendar examDate={plan.examDate} studyLog={studyLog} />

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900"><div className="flex items-center gap-2"><CheckCircle2 className="text-blue-600" /><h3 className="text-lg font-bold">Countdown milestones</h3></div><div className="mt-4 space-y-3">{milestones.map((milestone) => <div key={milestone.days} className="flex items-center justify-between rounded-xl bg-slate-50 p-3 dark:bg-slate-800"><div><p className="font-semibold">{milestone.days} days before exam</p><p className="text-xs text-slate-500">{milestone.date.toLocaleDateString("en-IN", { dateStyle: "medium" })}</p></div><span className={`rounded-full px-2 py-1 text-xs font-semibold ${milestone.reached ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"}`}>{milestone.reached ? "Reached" : "Upcoming"}</span></div>)}</div></div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900"><div className="flex items-center gap-2"><Bookmark className="text-violet-600" /><h3 className="text-lg font-bold">Study bookmarks</h3></div><form onSubmit={addBookmark} className="mt-4 space-y-3"><input value={bookmarkTitle} onChange={(event) => setBookmarkTitle(event.target.value)} placeholder="Topic or resource title" maxLength={100} className="w-full rounded-xl border border-slate-300 bg-transparent p-3 dark:border-slate-700" /><textarea value={bookmarkNote} onChange={(event) => setBookmarkNote(event.target.value)} placeholder="Short note, chapter, or link" maxLength={300} rows={2} className="w-full rounded-xl border border-slate-300 bg-transparent p-3 dark:border-slate-700" /><button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 font-semibold text-white"><Plus size={16} />Add bookmark</button></form><div className="mt-4 space-y-2">{bookmarks.map((bookmark) => <div key={bookmark.id} className="flex items-start justify-between gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800"><div><p className="font-semibold">{bookmark.title}</p>{bookmark.note && <p className="mt-1 break-words text-sm text-slate-500">{bookmark.note}</p>}</div><button type="button" onClick={() => setBookmarks((current) => current.filter((item) => item.id !== bookmark.id))} aria-label={`Delete ${bookmark.title}`} className="text-red-600"><Trash2 size={16} /></button></div>)}{!bookmarks.length && <p className="text-sm text-slate-500">Save chapters, revision notes, or useful resource links here.</p>}</div></div>
          </section>

          <ResultsSection title="Exam preparation summary" calculatorName="Exam Countdown Calculator" results={[{ label: "Days remaining", value: Math.max(0, result.daysRemaining), highlight: true }, { label: "Weeks remaining", value: result.weeksRemaining.toFixed(1) }, { label: "Available study hours", value: result.availableHours.toLocaleString() }, { label: "Recommended revision days", value: result.revisionDays }, { label: "Current study streak", value: `${result.streak} days` }]} />
        </>
      )}
    </div>
  );
}
