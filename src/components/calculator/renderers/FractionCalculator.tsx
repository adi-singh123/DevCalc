"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

type Operation =
  | "add"
  | "subtract"
  | "multiply"
  | "divide";

export default function FractionCalculator() {
  const [numerator1, setNumerator1] =
    useState("");

  const [denominator1, setDenominator1] =
    useState("");

  const [numerator2, setNumerator2] =
    useState("");

  const [denominator2, setDenominator2] =
    useState("");

  const [operation, setOperation] =
    useState<Operation>("add");

  const [submitted, setSubmitted] =
    useState(false);

  const gcd = (
    a: number,
    b: number,
  ): number => {
    return b === 0
      ? Math.abs(a)
      : gcd(b, a % b);
  };

  const result = useMemo(() => {
    if (
      !submitted ||
      !numerator1 ||
      !denominator1 ||
      !numerator2 ||
      !denominator2
    ) {
      return null;
    }

    const n1 = Number(numerator1);
    const d1 = Number(denominator1);

    const n2 = Number(numerator2);
    const d2 = Number(denominator2);

    if (
      d1 === 0 ||
      d2 === 0
    ) {
      return null;
    }

    let numerator = 0;
    let denominator = 1;

    switch (operation) {
      case "add":
        numerator =
          n1 * d2 +
          n2 * d1;
        denominator =
          d1 * d2;
        break;

      case "subtract":
        numerator =
          n1 * d2 -
          n2 * d1;
        denominator =
          d1 * d2;
        break;

      case "multiply":
        numerator =
          n1 * n2;
        denominator =
          d1 * d2;
        break;

      case "divide":
        numerator =
          n1 * d2;
        denominator =
          d1 * n2;
        break;
    }

    const divisor = gcd(
      numerator,
      denominator,
    );

    const simplifiedNumerator =
      numerator / divisor;

    const simplifiedDenominator =
      denominator / divisor;

    const decimalValue =
      simplifiedNumerator /
      simplifiedDenominator;

    const wholePart =
      Math.trunc(decimalValue);

    const remainder =
      Math.abs(
        simplifiedNumerator %
          simplifiedDenominator,
      );

    return {
      numerator:
        simplifiedNumerator,
      denominator:
        simplifiedDenominator,
      decimalValue,
      wholePart,
      remainder,
    };
  }, [
    numerator1,
    denominator1,
    numerator2,
    denominator2,
    operation,
    submitted,
  ]);

  const results = result
    ? [
        {
          label:
            "Simplified Fraction",
          value: `${result.numerator}/${result.denominator}`,
          highlight: true,
        },
        {
          label:
            "Decimal Value",
          value:
            result.decimalValue.toFixed(
              6,
            ),
        },
        {
          label:
            "Mixed Fraction",
          value:
            result.remainder === 0
              ? `${result.wholePart}`
              : `${result.wholePart} ${result.remainder}/${result.denominator}`,
        },
      ]
    : [];

  const resetCalculator = () => {
    setNumerator1("");
    setDenominator1("");
    setNumerator2("");
    setDenominator2("");
    setOperation("add");
    setSubmitted(false);
  };

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Fraction Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Add, subtract, multiply,
        divide, and simplify
        fractions instantly.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            First Fraction
          </label>

          <div className="flex gap-3">
            <input
              type="number"
              value={numerator1}
              onChange={(e) =>
                setNumerator1(
                  e.target.value,
                )
              }
              placeholder="1"
              className="w-full rounded-xl border p-3"
            />

            <span className="flex items-center text-xl font-bold">
              /
            </span>

            <input
              type="number"
              value={denominator1}
              onChange={(e) =>
                setDenominator1(
                  e.target.value,
                )
              }
              placeholder="2"
              className="w-full rounded-xl border p-3"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Second Fraction
          </label>

          <div className="flex gap-3">
            <input
              type="number"
              value={numerator2}
              onChange={(e) =>
                setNumerator2(
                  e.target.value,
                )
              }
              placeholder="3"
              className="w-full rounded-xl border p-3"
            />

            <span className="flex items-center text-xl font-bold">
              /
            </span>

            <input
              type="number"
              value={denominator2}
              onChange={(e) =>
                setDenominator2(
                  e.target.value,
                )
              }
              placeholder="4"
              className="w-full rounded-xl border p-3"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Operation
        </label>

        <select
          value={operation}
          onChange={(e) =>
            setOperation(
              e.target
                .value as Operation,
            )
          }
          className="w-full rounded-xl border p-3"
        >
          <option value="add">
            Addition (+)
          </option>

          <option value="subtract">
            Subtraction (-)
          </option>

          <option value="multiply">
            Multiplication (×)
          </option>

          <option value="divide">
            Division (÷)
          </option>
        </select>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() =>
            setSubmitted(true)
          }
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate Fraction
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
            Result
          </h3>

          <p className="mt-3 text-3xl font-bold text-blue-700">
            {result.numerator}/
            {
              result.denominator
            }
          </p>

          <p className="mt-2 text-slate-600">
            Decimal:{" "}
            {result.decimalValue.toFixed(
              6,
            )}
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Fraction Results"
          results={results}
        />
      )}
    </div>
  );
}