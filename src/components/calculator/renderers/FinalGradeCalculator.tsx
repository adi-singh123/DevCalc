"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function FinalGradeCalculator() {
  const [currentGrade, setCurrentGrade] =
    useState("");

  const [targetGrade, setTargetGrade] =
    useState("");

  const [finalWeight, setFinalWeight] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !submitted ||
      !currentGrade ||
      !targetGrade ||
      !finalWeight
    ) {
      return null;
    }

    const current =
      Number(currentGrade);

    const target =
      Number(targetGrade);

    const weight =
      Number(finalWeight);

    if (
      isNaN(current) ||
      isNaN(target) ||
      isNaN(weight) ||
      current < 0 ||
      target < 0 ||
      weight <= 0 ||
      weight > 100
    ) {
      return null;
    }

    const examWeight =
      weight / 100;

    const requiredScore =
      (target -
        current *
          (1 -
            examWeight)) /
      examWeight;

    let status =
      "Achievable";

    if (
      requiredScore > 100
    ) {
      status =
        "Not Achievable";
    } else if (
      requiredScore <= 0
    ) {
      status =
        "Already Achieved";
    }

    return {
      current,
      target,
      weight,
      requiredScore,
      status,
    };
  }, [
    currentGrade,
    targetGrade,
    finalWeight,
    submitted,
  ]);

  const results = result
    ? [
        {
          label:
            "Required Final Exam Score",
          value: `${Math.max(
            0,
            result.requiredScore,
          ).toFixed(2)}%`,
          highlight: true,
        },

        {
          label:
            "Current Grade",
          value: `${result.current}%`,
        },

        {
          label:
            "Target Grade",
          value: `${result.target}%`,
        },

        {
          label:
            "Final Exam Weight",
          value: `${result.weight}%`,
        },

        {
          label:
            "Status",
          value:
            result.status,
        },
      ]
    : [];

  const resetCalculator =
    () => {
      setCurrentGrade("");
      setTargetGrade("");
      setFinalWeight("");
      setSubmitted(false);
    };

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Final Grade
        Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Calculate the score
        needed on your final
        exam to achieve your
        desired course grade.
        Perfect for school,
        college, and university
        students.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div>
          <label className="mb-2 block font-medium">
            Current Grade (%)
          </label>

          <input
            type="number"
            min="0"
            max="100"
            value={
              currentGrade
            }
            onChange={(e) =>
              setCurrentGrade(
                e.target.value,
              )
            }
            placeholder="80"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Target Grade (%)
          </label>

          <input
            type="number"
            min="0"
            max="100"
            value={
              targetGrade
            }
            onChange={(e) =>
              setTargetGrade(
                e.target.value,
              )
            }
            placeholder="90"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Final Exam Weight
            (%)
          </label>

          <input
            type="number"
            min="1"
            max="100"
            value={
              finalWeight
            }
            onChange={(e) =>
              setFinalWeight(
                e.target.value,
              )
            }
            placeholder="40"
            className="w-full rounded-xl border p-3"
          />
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() =>
            setSubmitted(true)
          }
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate
        </button>

        <button
          onClick={
            resetCalculator
          }
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Required Final Exam
            Score
          </h3>

          <p className="mt-3 text-4xl font-bold text-blue-700">
            {Math.max(
              0,
              result.requiredScore,
            ).toFixed(2)}
            %
          </p>

          <p className="mt-3 text-lg font-medium">
            {
              result.status
            }
          </p>

          {result.requiredScore >
            100 && (
            <p className="mt-2 text-sm text-red-600">
              Your target grade
              cannot be reached
              with the current
              values.
            </p>
          )}
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Final Grade Results"
          results={results}
        />
      )}
    </div>
  );
}