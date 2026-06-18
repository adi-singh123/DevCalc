"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function MarksRequiredCalculator() {
  const [totalMarks, setTotalMarks] =
    useState("");

  const [obtainedMarks, setObtainedMarks] =
    useState("");

  const [remainingMarks, setRemainingMarks] =
    useState("");

  const [targetPercentage, setTargetPercentage] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !totalMarks ||
      !obtainedMarks ||
      !remainingMarks ||
      !targetPercentage ||
      !submitted
    ) {
      return null;
    }

    const total = Number(totalMarks);
    const obtained = Number(obtainedMarks);
    const remaining = Number(remainingMarks);
    const target = Number(targetPercentage);

    if (
      total <= 0 ||
      obtained < 0 ||
      remaining <= 0 ||
      target <= 0 ||
      target > 100
    ) {
      return null;
    }

    const targetMarks =
      (target / 100) * total;

    const requiredMarks =
      targetMarks - obtained;

    const achievable =
      requiredMarks <= remaining;

    const maxPossiblePercentage =
      (
        ((obtained + remaining) /
          total) *
        100
      ).toFixed(2);

    let status = "Achievable";

    if (!achievable) {
      status = "Not Achievable";
    } else if (
      requiredMarks <=
      remaining * 0.5
    ) {
      status = "Easily Achievable";
    }

    return {
      targetMarks,
      requiredMarks:
        requiredMarks > 0
          ? requiredMarks
          : 0,
      achievable,
      status,
      maxPossiblePercentage,
    };
  }, [
    totalMarks,
    obtainedMarks,
    remainingMarks,
    targetPercentage,
    submitted,
  ]);

  const results = result
    ? [
        {
          label: "Required Marks",
          value:
            result.requiredMarks.toFixed(
              2,
            ),
          highlight: true,
        },
        {
          label: "Target Status",
          value: result.status,
        },
        {
          label: "Target Marks",
          value:
            result.targetMarks.toFixed(
              2,
            ),
        },
        {
          label:
            "Maximum Possible %",
          value: `${result.maxPossiblePercentage}%`,
        },
        {
          label: "Achievable",
          value:
            result.achievable
              ? "Yes"
              : "No",
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
 

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Total Marks
        </label>

        <input
          type="number"
          placeholder="e.g. 500"
          value={totalMarks}
          onChange={(e) =>
            setTotalMarks(
              e.target.value,
            )
          }
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Obtained Marks
        </label>

        <input
          type="number"
          placeholder="e.g. 320"
          value={obtainedMarks}
          onChange={(e) =>
            setObtainedMarks(
              e.target.value,
            )
          }
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Remaining Marks
        </label>

        <input
          type="number"
          placeholder="e.g. 100"
          value={remainingMarks}
          onChange={(e) =>
            setRemainingMarks(
              e.target.value,
            )
          }
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Target Percentage (%)
        </label>

        <input
          type="number"
          min="1"
          max="100"
          placeholder="e.g. 75"
          value={
            targetPercentage
          }
          onChange={(e) =>
            setTargetPercentage(
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
          Calculate
        </button>

        <button
          onClick={() => {
            setTotalMarks("");
            setObtainedMarks("");
            setRemainingMarks("");
            setTargetPercentage(
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
        <div
          className={`mt-8 rounded-2xl border p-6 text-center ${
            result.achievable
              ? "bg-green-50"
              : "bg-red-50"
          }`}
        >
          <h3 className="text-xl font-semibold">
            Marks Required
          </h3>

          <p
            className={`mt-2 text-3xl font-bold ${
              result.achievable
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {result.requiredMarks.toFixed(
              2,
            )}
          </p>

          <p className="mt-3 text-slate-600">
            Target is{" "}
            <strong>
              {result.status}
            </strong>
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Marks Analysis"
          results={results}
        />
      )}
    </div>
  );
}