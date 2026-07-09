"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";
import { evaluate } from "mathjs";

export default function ScientificCalculator() {
  const [expression, setExpression] = useState("");

  const [mode, setMode] = useState<"deg" | "rad">("deg");

  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (!submitted || !expression) return null;

    try {
      let exp = expression;

      exp = exp.replace(/π/g, "pi");

      const value = evaluate(exp);

      return Number(value);
    } catch {
      return null;
    }
  }, [expression, submitted]);

  const results =
    result !== null
      ? [
          {
            label: "Result",
            value: result,
            highlight: true,
          },
        ]
      : [];

  const append = (value: string) => {
    setExpression((prev) => prev + value);
  };

  const clear = () => {
    setExpression("");
    setSubmitted(false);
  };

  const scientificFunctions = {
    sin: () => {
      const num = Number(expression);

      const angle = mode === "deg" ? (num * Math.PI) / 180 : num;

      setExpression(String(Math.sin(angle)));
    },

    cos: () => {
      const num = Number(expression);

      const angle = mode === "deg" ? (num * Math.PI) / 180 : num;

      setExpression(String(Math.cos(angle)));
    },

    tan: () => {
      const num = Number(expression);

      const angle = mode === "deg" ? (num * Math.PI) / 180 : num;

      setExpression(String(Math.tan(angle)));
    },

    log: () => {
      const num = Number(expression);

      setExpression(String(Math.log10(num)));
    },

    ln: () => {
      const num = Number(expression);

      setExpression(String(Math.log(num)));
    },

    sqrt: () => {
      const num = Number(expression);

      setExpression(String(Math.sqrt(num)));
    },

    square: () => {
      const num = Number(expression);

      setExpression(String(num ** 2));
    },

    cube: () => {
      const num = Number(expression);

      setExpression(String(num ** 3));
    },
  };

  const buttonClass =
  "rounded-lg border p-3 font-medium transition hover:bg-slate-100";

  return (
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">Scientific Calculator</h2>

      <div className="mt-6">
        <input
          type="text"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          placeholder="Enter expression..."
          className="w-full rounded-xl border p-4 text-lg"
        />
      </div>

      <div className="mt-4 flex gap-3">
        <button
          onClick={() => setMode("deg")}
          className={`rounded-lg px-4 py-2 ${
            mode === "deg" ? "bg-black text-white" : "border"
          }`}
        >
          DEG
        </button>

        <button
          onClick={() => setMode("rad")}
          className={`rounded-lg px-4 py-2 ${
            mode === "rad" ? "bg-black text-white" : "border"
          }`}
        >
          RAD
        </button>
      </div>

      <div className="mt-6 grid grid-cols-4 gap-3">
        <button
          onClick={scientificFunctions.sin}
          className={buttonClass}
        >
          sin
        </button>

        <button
          onClick={scientificFunctions.cos}
          className={buttonClass}
        >
          cos
        </button>

        <button
          onClick={scientificFunctions.tan}
         className={buttonClass}
        >
          tan
        </button>

        <button
          onClick={scientificFunctions.log}
          className={buttonClass}
        >
          log
        </button>

        <button
          onClick={scientificFunctions.ln}
          className={buttonClass}
        >
          ln
        </button>

        <button
          onClick={scientificFunctions.sqrt}
         className={buttonClass}
        >
          √
        </button>

        <button
          onClick={scientificFunctions.square}
          className={buttonClass}
        >
          x²
        </button>

        <button
          onClick={scientificFunctions.cube}
         className={buttonClass}
        >
          x³
        </button>

        <button onClick={() => append("π")}className={buttonClass}>
          π
        </button>

        <button onClick={() => append("e")} className={buttonClass}>
          e
        </button>
        <button className={buttonClass} onClick={() => append("7")}>7</button>
        <button className={buttonClass} onClick={() => append("8")}>8</button>
        <button className={buttonClass} onClick={() => append("9")}>9</button>
        <button className={buttonClass} onClick={() => append("/")}>÷</button>

        <button className={buttonClass} onClick={() => append("4")}>4</button>
        <button className={buttonClass} onClick={() => append("5")}>5</button>
        <button className={buttonClass} onClick={() => append("6")}>6</button>
        <button className={buttonClass} onClick={() => append("*")}>×</button>

        <button className={buttonClass} onClick={() => append("1")}>1</button>
        <button className={buttonClass} onClick={() => append("2")}>2</button>
        <button className={buttonClass} onClick={() => append("3")}>3</button>
        <button className={buttonClass} onClick={() => append("-")}>−</button>

        <button className={buttonClass} onClick={() => append("0")}>0</button>
        <button className={buttonClass} onClick={() => append(".")}>.</button>
        <button className={buttonClass} onClick={() => append("+")}>+</button>
        <button className={buttonClass} onClick={() => append("^")}>xʸ</button>

        <button className={buttonClass} onClick={() => append("%")}>%</button>

        <button className={buttonClass} onClick={() => setExpression((prev) => prev.slice(0, -1))}>
          ⌫
        </button>

        <button className={buttonClass} onClick={() => append("(")} >
          (
        </button>

        <button className={buttonClass} onClick={() => append(")")}>
          )
        </button>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate
        </button>

        <button
          onClick={clear}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {result !== null && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center">
          <h3 className="text-xl font-semibold">Result: {result}</h3>

          <p className="mt-2 text-slate-600">
            Scientific calculation completed successfully.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Scientific Calculator Results"
          results={results}
        />
      )}
    </div>
  );
}
