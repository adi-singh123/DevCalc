"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function ExamCountdownCalculator() {
  const [examDate, setExamDate] =
    useState("");

  const [dailyStudyHours, setDailyStudyHours] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !examDate ||
      !dailyStudyHours ||
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

    const weeksRemaining =
      (
        daysRemaining / 7
      ).toFixed(1);

    const dailyHours =
      Number(dailyStudyHours);

    const totalStudyHours =
      daysRemaining *
      dailyHours;

    const revisionDays =
      Math.max(
        1,
        Math.floor(
          daysRemaining * 0.2,
        ),
      );

    const studyDays =
      daysRemaining -
      revisionDays;

    let preparationLevel =
      "Good";

    if (
      totalStudyHours <
      50
    ) {
      preparationLevel =
        "Needs More Study Time";
    } else if (
      totalStudyHours >
      200
    ) {
      preparationLevel =
        "Excellent Preparation Window";
    }

    return {
      daysRemaining,
      weeksRemaining,
      totalStudyHours,
      revisionDays,
      studyDays,
      preparationLevel,
    };
  }, [
    examDate,
    dailyStudyHours,
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
            "Weeks Remaining",
          value:
            result.weeksRemaining,
        },
        {
          label:
            "Total Study Hours",
          value:
            result.totalStudyHours.toLocaleString(),
        },
        {
          label:
            "Recommended Study Days",
          value:
            result.studyDays,
        },
        {
          label:
            "Recommended Revision Days",
          value:
            result.revisionDays,
        },
        {
          label:
            "Preparation Status",
          value:
            result.preparationLevel,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
     

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
          Daily Study Hours
        </label>

        <input
          type="number"
          min="1"
          placeholder="e.g. 4"
          value={
            dailyStudyHours
          }
          onChange={(e) =>
            setDailyStudyHours(
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
          Calculate Countdown
        </button>

        <button
          onClick={() => {
            setExamDate("");
            setDailyStudyHours(
              "",
            );
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Time Until Exam
          </h3>

          <p className="mt-2 text-3xl font-bold text-blue-600">
            {
              result.daysRemaining
            }{" "}
            Days
          </p>

          <p className="mt-3 text-slate-600">
            You have approximately{" "}
            <strong>
              {
                result.totalStudyHours
              }{" "}
              study hours
            </strong>{" "}
            remaining before
            your exam.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Exam Preparation Results"
          results={results}
        />
      )}
    </div>
  );
}