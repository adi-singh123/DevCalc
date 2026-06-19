"use client";

import { useMemo, useRef, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function LuckyNumberCalculator() {
  const [birthDate, setBirthDate] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const birthDateRef =
    useRef<HTMLInputElement>(null);

  const luckyData = useMemo(() => {
    if (
      !submitted ||
      !birthDate
    ) {
      return null;
    }

    const digits = birthDate.replace(
      /\D/g,
      "",
    );

    let sum = digits
      .split("")
      .reduce(
        (
          total,
          digit,
        ) =>
          total +
          Number(digit),
        0,
      );

    while (sum > 9) {
      sum = sum
        .toString()
        .split("")
        .reduce(
          (
            total,
            digit,
          ) =>
            total +
            Number(digit),
          0,
        );
    }

    const meanings: Record<
      number,
      {
        title: string;
        description: string;
      }
    > = {
      1: {
        title: "Leader",
        description:
          "Independent, ambitious, and confident. You enjoy taking initiative and leading others.",
      },

      2: {
        title: "Diplomat",
        description:
          "Peaceful, cooperative, and sensitive. You thrive in partnerships and teamwork.",
      },

      3: {
        title: "Creative",
        description:
          "Expressive, optimistic, and imaginative. You enjoy creativity and communication.",
      },

      4: {
        title: "Practical",
        description:
          "Reliable, disciplined, and hardworking. You value structure and stability.",
      },

      5: {
        title: "Adventurer",
        description:
          "Energetic, curious, and freedom-loving. You enjoy new experiences and challenges.",
      },

      6: {
        title: "Caregiver",
        description:
          "Responsible, supportive, and compassionate. Family and relationships are important to you.",
      },

      7: {
        title: "Thinker",
        description:
          "Analytical, spiritual, and thoughtful. You enjoy learning and exploring deeper meanings.",
      },

      8: {
        title: "Achiever",
        description:
          "Confident, determined, and goal-oriented. You often strive for success and influence.",
      },

      9: {
        title: "Humanitarian",
        description:
          "Generous, compassionate, and idealistic. You care deeply about helping others.",
      },
    };

    return {
      luckyNumber: sum,
      title:
        meanings[sum].title,
      description:
        meanings[sum]
          .description,
    };
  }, [
    birthDate,
    submitted,
  ]);

  const results = luckyData
    ? [
        {
          label:
            "Lucky Number",
          value:
            luckyData.luckyNumber,
          highlight: true,
        },

        {
          label:
            "Personality Type",
          value:
            luckyData.title,
        },
      ]
    : [];

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Date of Birth
        </label>

        <input
          ref={birthDateRef}
          type="date"
          value={birthDate}
          onChange={(e) =>
            setBirthDate(
              e.target.value,
            )
          }
          onClick={() =>
            birthDateRef.current?.showPicker?.()
          }
          className="w-full cursor-pointer rounded-xl border p-3"
        />
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() =>
            setSubmitted(true)
          }
          className="cursor-pointer rounded-xl bg-amber-600 px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-amber-700 hover:shadow-lg"
        >
          Find Lucky Number
        </button>

        <button
          onClick={() => {
            setBirthDate("");
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {luckyData && (
        <div className="mt-8 rounded-3xl border border-amber-100 bg-gradient-to-r from-amber-50 to-yellow-50 p-8 text-center dark:border-slate-700 dark:from-slate-800 dark:to-slate-900">
          <div className="text-6xl">
            ⭐
          </div>

          <p className="mt-4 text-sm font-medium uppercase tracking-wide text-slate-500">
            Your Lucky Number
          </p>

          <h3 className="mt-3 text-6xl font-bold text-amber-600">
            {
              luckyData.luckyNumber
            }
          </h3>

          <p className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
            {luckyData.title}
          </p>

          <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-400">
            {
              luckyData.description
            }
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Lucky Number Results"
          results={results}
          calculatorName="Lucky Number Calculator"
        />
      )}
    </div>
  );
}