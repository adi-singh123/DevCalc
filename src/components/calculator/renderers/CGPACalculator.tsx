"use client";

import { useState } from "react";
import ResultsSection from "../ResultsSection";

type Subject = {
  grade: string;
  credit: string;
};

export default function CGPACalculator() {
  const [subjects, setSubjects] = useState<Subject[]>([
    { grade: "", credit: "" },
    { grade: "", credit: "" },
    { grade: "", credit: "" },
  ]);

  const [submitted, setSubmitted] = useState(false);

  const updateSubject = (
    index: number,
    field: keyof Subject,
    value: string,
  ) => {
    const updated = [...subjects];
    updated[index][field] = value;
    setSubjects(updated);
  };

  const addSubject = () => {
    setSubjects([
      ...subjects,
      {
        grade: "",
        credit: "",
      },
    ]);
  };

  const removeSubject = (index: number) => {
    if (subjects.length <= 1) return;

    setSubjects(
      subjects.filter((_, i) => i !== index),
    );
  };

  const calculateCGPA = () => {
    let totalGradePoints = 0;
    let totalCredits = 0;

    for (const subject of subjects) {
      const grade = Number(subject.grade);
      const credit = Number(subject.credit);

      if (
        isNaN(grade) ||
        isNaN(credit) ||
        grade < 0 ||
        grade > 10 ||
        credit <= 0
      ) {
        continue;
      }

      totalGradePoints += grade * credit;
      totalCredits += credit;
    }

    if (totalCredits === 0) {
      return null;
    }

    const cgpa =
      totalGradePoints / totalCredits;

    const percentage = cgpa * 9.5;

    return {
      cgpa: cgpa.toFixed(2),
      percentage: percentage.toFixed(2),
      totalCredits,
    };
  };

  const result = submitted
    ? calculateCGPA()
    : null;

  const results = result
    ? [
        {
          label: "CGPA",
          value: result.cgpa,
          highlight: true,
        },
        {
          label: "Percentage",
          value: `${result.percentage}%`,
        },
        {
          label: "Total Credits",
          value: result.totalCredits,
        },
      ]
    : [];

  const resetCalculator = () => {
    setSubjects([
      { grade: "", credit: "" },
      { grade: "", credit: "" },
      { grade: "", credit: "" },
    ]);

    setSubmitted(false);
  };

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
   

      <p className="mt-2 text-slate-600">
        Calculate your CGPA and convert it into
        percentage using subject grades and
        credit hours.
      </p>

      <div className="mt-8 space-y-6">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className="rounded-2xl border p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">
                Subject {index + 1}
              </h3>

              {subjects.length > 1 && (
                <button
                  onClick={() =>
                    removeSubject(index)
                  }
                  className="text-sm text-red-600 hover:text-red-700"
                >
                  Remove
                </button>
              )}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium">
                  Grade Point (0 - 10)
                </label>

                <input
                  type="number"
                  min="0"
                  max="10"
                  step="0.01"
                  value={subject.grade}
                  onChange={(e) =>
                    updateSubject(
                      index,
                      "grade",
                      e.target.value,
                    )
                  }
                  placeholder="e.g. 8.5"
                  className="w-full rounded-xl border p-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Credit Hours
                </label>

                <input
                  type="number"
                  min="1"
                  value={subject.credit}
                  onChange={(e) =>
                    updateSubject(
                      index,
                      "credit",
                      e.target.value,
                    )
                  }
                  placeholder="e.g. 4"
                  className="w-full rounded-xl border p-3"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button
          onClick={addSubject}
          className="cursor-pointer rounded-xl border px-5 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100"
        >
          + Add Subject
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate CGPA
        </button>

        <button
          onClick={resetCalculator}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <ResultsSection
          title="CGPA Results"
          results={results}
        />
      )}
    </div>
  );
}