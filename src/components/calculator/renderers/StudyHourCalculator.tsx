"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function StudyHoursCalculator() {
  const [examDate, setExamDate] =
    useState("");

  const [subjects, setSubjects] =
    useState("");

  const [chapters, setChapters] =
    useState("");

  const [dailyHours, setDailyHours] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !examDate ||
      !subjects ||
      !chapters ||
      !dailyHours ||
      !submitted
    ) {
      return null;
    }

    const today = new Date();

    const exam = new Date(examDate);

    const diff =
      exam.getTime() -
      today.getTime();

    if (diff <= 0) {
      return null;
    }

    const daysRemaining =
      Math.ceil(
        diff /
          (1000 *
            60 *
            60 *
            24),
      );

    const subjectCount =
      Number(subjects);

    const chapterCount =
      Number(chapters);

    const daily =
      Number(dailyHours);

    const totalStudyHours =
      daysRemaining * daily;

    const hoursPerSubject =
      totalStudyHours /
      subjectCount;

    const hoursPerChapter =
      totalStudyHours /
      chapterCount;

    let studyLevel =
      "Balanced";

    if (daily < 2) {
      studyLevel =
        "Low Study Time";
    } else if (daily > 6) {
      studyLevel =
        "Intensive Preparation";
    }

    return {
      daysRemaining,
      totalStudyHours,
      hoursPerSubject,
      hoursPerChapter,
      studyLevel,
    };
  }, [
    examDate,
    subjects,
    chapters,
    dailyHours,
    submitted,
  ]);

  const results = result
    ? [
        {
          label:
            "Days Remaining",
          value:
            result.daysRemaining,
          highlight: true,
        },
        {
          label:
            "Total Study Hours",
          value:
            result.totalStudyHours.toFixed(
              0,
            ),
        },
        {
          label:
            "Hours Per Subject",
          value:
            result.hoursPerSubject.toFixed(
              1,
            ),
        },
        {
          label:
            "Hours Per Chapter",
          value:
            result.hoursPerChapter.toFixed(
              1,
            ),
        },
        {
          label:
            "Study Plan",
          value:
            result.studyLevel,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Study Hours Calculator
      </h2>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Exam Date
        </label>

        <input
          type="date"
          value={examDate}
          onChange={(e) =>
            setExamDate(
              e.target.value,
            )
          }
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Number of Subjects
        </label>

        <input
          type="number"
          min="1"
          placeholder="e.g. 5"
          value={subjects}
          onChange={(e) =>
            setSubjects(
              e.target.value,
            )
          }
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Total Chapters
        </label>

        <input
          type="number"
          min="1"
          placeholder="e.g. 25"
          value={chapters}
          onChange={(e) =>
            setChapters(
              e.target.value,
            )
          }
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Daily Study Hours
        </label>

        <input
          type="number"
          min="1"
          placeholder="e.g. 4"
          value={dailyHours}
          onChange={(e) =>
            setDailyHours(
              e.target.value,
            )
          }
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() =>
            setSubmitted(true)
          }
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate Study Plan
        </button>

        <button
          onClick={() => {
            setExamDate("");
            setSubjects("");
            setChapters("");
            setDailyHours("");
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Study Plan Summary
          </h3>

          <p className="mt-2 text-3xl font-bold text-green-600">
            {
              result.totalStudyHours
            }{" "}
            Hours Available
          </p>

          <p className="mt-3 text-slate-600">
            You have{" "}
            <strong>
              {
                result.daysRemaining
              }
            </strong>{" "}
            days remaining for
            preparation.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Study Results"
          results={results}
            calculatorName="Study Results"

        />
      )}
    </div>
  );
}