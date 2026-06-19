"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function QuadraticEquationCalculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !submitted ||
      a === "" ||
      b === "" ||
      c === ""
    ) {
      return null;
    }

    const coefficientA = Number(a);
    const coefficientB = Number(b);
    const coefficientC = Number(c);

    if (
      isNaN(coefficientA) ||
      isNaN(coefficientB) ||
      isNaN(coefficientC) ||
      coefficientA === 0
    ) {
      return null;
    }

    const discriminant =
      coefficientB ** 2 -
      4 *
        coefficientA *
        coefficientC;

    let root1 = "";
    let root2 = "";
    let rootType = "";

    if (discriminant > 0) {
      root1 = (
        (-coefficientB +
          Math.sqrt(
            discriminant,
          )) /
        (2 *
          coefficientA)
      ).toFixed(4);

      root2 = (
        (-coefficientB -
          Math.sqrt(
            discriminant,
          )) /
        (2 *
          coefficientA)
      ).toFixed(4);

      rootType =
        "Two Distinct Real Roots";
    } else if (
      discriminant === 0
    ) {
      root1 = (
        -coefficientB /
        (2 *
          coefficientA)
      ).toFixed(4);

      root2 = root1;

      rootType =
        "One Repeated Real Root";
    } else {
      const realPart =
        (
          -coefficientB /
          (2 *
            coefficientA)
        ).toFixed(4);

      const imaginaryPart =
        (
          Math.sqrt(
            Math.abs(
              discriminant,
            ),
          ) /
          (2 *
            coefficientA)
        ).toFixed(4);

      root1 = `${realPart} + ${imaginaryPart}i`;

      root2 = `${realPart} - ${imaginaryPart}i`;

      rootType =
        "Complex Roots";
    }

    const vertexX =
      -coefficientB /
      (2 *
        coefficientA);

    const vertexY =
      coefficientA *
        vertexX *
        vertexX +
      coefficientB *
        vertexX +
      coefficientC;

    return {
      discriminant,
      root1,
      root2,
      rootType,
      vertexX,
      vertexY,
    };
  }, [
    a,
    b,
    c,
    submitted,
  ]);

  const results = result
    ? [
        {
          label: "Root 1",
          value: result.root1,
          highlight: true,
        },
        {
          label: "Root 2",
          value: result.root2,
        },
        {
          label:
            "Discriminant",
          value:
            result.discriminant.toFixed(
              4,
            ),
        },
        {
          label:
            "Root Type",
          value:
            result.rootType,
        },
        {
          label:
            "Vertex X",
          value:
            result.vertexX.toFixed(
              4,
            ),
        },
        {
          label:
            "Vertex Y",
          value:
            result.vertexY.toFixed(
              4,
            ),
        },
      ]
    : [];

  const resetCalculator = () => {
    setA("");
    setB("");
    setC("");
    setSubmitted(false);
  };

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Quadratic Equation
        Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Solve equations of the
        form ax² + bx + c = 0,
        find roots,
        discriminant, and
        vertex instantly.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        <div>
          <label className="mb-2 block font-medium">
            Coefficient a
          </label>

          <input
            type="number"
            value={a}
            onChange={(e) =>
              setA(
                e.target.value,
              )
            }
            placeholder="1"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Coefficient b
          </label>

          <input
            type="number"
            value={b}
            onChange={(e) =>
              setB(
                e.target.value,
              )
            }
            placeholder="-5"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Coefficient c
          </label>

          <input
            type="number"
            value={c}
            onChange={(e) =>
              setC(
                e.target.value,
              )
            }
            placeholder="6"
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
          Solve Equation
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
        <div className="mt-8 rounded-2xl border bg-purple-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Equation Roots
          </h3>

          <p className="mt-3 text-2xl font-bold text-purple-700">
            x₁ = {result.root1}
          </p>

          <p className="mt-2 text-2xl font-bold text-purple-700">
            x₂ = {result.root2}
          </p>

          <p className="mt-3 text-slate-600">
            {result.rootType}
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Quadratic Equation Results"
          results={results}
           calculatorName="Quadratic Equation Results"
        />
      )}
    </div>
  );
}