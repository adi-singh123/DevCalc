"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function GPACalculator() {
  const [subjects, setSubjects] =
    useState(["", "", "", "", ""]);

  const [submitted, setSubmitted] =
    useState(false);

  const addSubject = () => {
    setSubjects([
      ...subjects,
      "",
    ]);
  };

  const removeSubject = (
    index: number,
  ) => {
    if (subjects.length <= 2)
      return;

    setSubjects(
      subjects.filter(
        (_, i) =>
          i !== index,
      ),
    );
  };

  const updateSubject = (
    index: number,
    value: string,
  ) => {
    const updated = [
      ...subjects,
    ];

    updated[index] = value;

    setSubjects(updated);
  };

  const gpaData = useMemo(() => {
    if (
      !submitted ||
      subjects.some(
        (subject) =>
          subject === "",
      )
    ) {
      return null;
    }

    const marks =
      subjects.map(Number);

    const isInvalid =
      marks.some(
        (mark) =>
          Number.isNaN(
            mark,
          ) ||
          mark < 0 ||
          mark > 100,
      );

    if (isInvalid) {
      return null;
    }

    const totalMarks =
      marks.reduce(
        (
          sum,
          mark,
        ) =>
          sum + mark,
        0,
      );

    const percentage =
      totalMarks /
      subjects.length;

    const gpa =
      percentage / 9.5;

    let grade = "F";

    if (
      percentage >= 90
    )
      grade = "A+";
    else if (
      percentage >= 80
    )
      grade = "A";
    else if (
      percentage >= 70
    )
      grade = "B+";
    else if (
      percentage >= 60
    )
      grade = "B";
    else if (
      percentage >= 50
    )
      grade = "C";
    else if (
      percentage >= 40
    )
      grade = "D";

    return {
      totalMarks,
      percentage,
      gpa,
      grade,
    };
  }, [
    subjects,
    submitted,
  ]);

  const results =
    gpaData
      ? [
          {
            label:
              "Total Marks",
            value: `${gpaData.totalMarks}/${
              subjects.length *
              100
            }`,
          },
          {
            label:
              "Percentage",
            value: `${gpaData.percentage.toFixed(
              2,
            )}%`,
          },
          {
            label: "GPA",
            value:
              gpaData.gpa.toFixed(
                2,
              ),
            highlight: true,
          },
          {
            label:
              "Grade",
            value:
              gpaData.grade,
          },
        ]
      : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
   
      <p className="mt-2 text-slate-600">
        Calculate GPA,
        percentage, total
        marks, and grade
        instantly.
      </p>

      <div className="mt-6 space-y-4">
        {subjects.map(
          (
            subject,
            index,
          ) => (
            <div
              key={index}
              className="flex gap-2"
            >
              <input
                type="number"
                min="0"
                max="100"
                value={
                  subject
                }
                placeholder={`Subject ${
                  index +
                  1
                } Marks`}
                onChange={(
                  e,
                ) =>
                  updateSubject(
                    index,
                    e.target
                      .value,
                  )
                }
                className="flex-1 rounded-xl border p-3"
              />

              {subjects.length >
                2 && (
                <button
                  onClick={() =>
                    removeSubject(
                      index,
                    )
                  }
                  className="rounded-xl border px-4 transition hover:bg-red-50"
                >
                  ×
                </button>
              )}
            </div>
          ),
        )}

        <button
          onClick={
            addSubject
          }
          className="rounded-xl border px-4 py-2 transition hover:bg-gray-100"
        >
          + Add Subject
        </button>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() =>
            setSubmitted(
              true,
            )
          }
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate GPA
        </button>

        <button
          onClick={() => {
            setSubjects([
              "",
              "",
              "",
              "",
              "",
            ]);

            setSubmitted(
              false,
            );
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {gpaData && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Academic
            Summary
          </h3>

          <p className="mt-2 text-slate-600">
            Your GPA is{" "}
            <strong>
              {gpaData.gpa.toFixed(
                2,
              )}
            </strong>{" "}
            with grade{" "}
            <strong>
              {
                gpaData.grade
              }
            </strong>
          </p>
        </div>
      )}

      {results.length >
        0 && (
        <ResultsSection
          title="GPA Results"
          results={
            results
          }
           calculatorName="GPA Results"
        />
      )}
    </div>
  );
}