"use client";

import { useState } from "react";
import ResultsSection from "../ResultsSection";

export default function RandomNumberGenerator() {
  const [min, setMin] =
    useState("1");

  const [max, setMax] =
    useState("100");

  const [randomNumber, setRandomNumber] =
    useState<number | null>(
      null,
    );

  const generateRandomNumber = () => {
    const minValue =
      Number(min);

    const maxValue =
      Number(max);

    if (
      isNaN(minValue) ||
      isNaN(maxValue) ||
      minValue > maxValue
    ) {
      setRandomNumber(null);
      return;
    }

    const generated =
      Math.floor(
        Math.random() *
          (maxValue -
            minValue +
            1),
      ) + minValue;

    setRandomNumber(
      generated,
    );
  };

  const resetCalculator = () => {
    setMin("1");
    setMax("100");
    setRandomNumber(null);
  };

  const results =
    randomNumber !== null
      ? [
          {
            label:
              "Random Number",
            value:
              randomNumber,
            highlight: true,
          },

          {
            label:
              "Minimum Value",
            value: min,
          },

          {
            label:
              "Maximum Value",
            value: max,
          },

          {
            label: "Range",
            value: `${
              Number(max) -
              Number(min) +
              1
            } Numbers`,
          },
        ]
      : [];

  return (
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Random Number Generator
      </h2>

      <p className="mt-2 text-slate-600">
        Generate random numbers
        instantly within any
        custom range. Perfect
        for games, contests,
        lotteries, giveaways,
        and decision making.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Minimum Value
          </label>

          <input
            type="number"
            value={min}
            onChange={(e) =>
              setMin(
                e.target.value,
              )
            }
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Maximum Value
          </label>

          <input
            type="number"
            value={max}
            onChange={(e) =>
              setMax(
                e.target.value,
              )
            }
            className="w-full rounded-xl border p-3"
          />
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={
            generateRandomNumber
          }
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Generate Number
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

      {randomNumber !==
        null && (
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center">
          <h3 className="text-lg font-semibold">
            Generated Number
          </h3>

          <p className="mt-3 text-5xl font-bold text-green-700">
            {randomNumber}
          </p>

          <p className="mt-2 text-slate-600">
            Randomly selected
            between {min} and{" "}
            {max}
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Random Number Results"
          results={results}
        />
      )}
    </div>
  );
}