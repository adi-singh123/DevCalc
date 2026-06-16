"use client";

import { useMemo, useState } from "react";

type Operation = "add" | "subtract" | "multiply" | "determinant";

const createMatrix = (size: number): string[][] =>
  Array(size)
    .fill(null)
    .map(() => Array(size).fill("0"));

export default function MatrixCalculator() {
  const [size, setSize] = useState(2);
  const [matrixA, setMatrixA] = useState<string[][]>(createMatrix(2));
  const [matrixB, setMatrixB] = useState<string[][]>(createMatrix(2));
  const [operation, setOperation] = useState<Operation>("add");
  const [submitted, setSubmitted] = useState(false);

  const handleSizeChange = (newSize: number) => {
    setSize(newSize);
    setMatrixA(createMatrix(newSize));
    setMatrixB(createMatrix(newSize));
    setSubmitted(false);
  };

  const handleCellChange = (
    matrix: "A" | "B",
    row: number,
    col: number,
    value: string
  ) => {
    const setter = matrix === "A" ? setMatrixA : setMatrixB;
    setter((prev) => {
      const next = prev.map((r) => [...r]);
      next[row][col] = value;
      return next;
    });
    setSubmitted(false);
  };

  const result = useMemo(() => {
    if (!submitted) return null;

    const A = matrixA.map((row) => row.map(Number));
    const B = matrixB.map((row) => row.map(Number));

    if ([...A.flat(), ...B.flat()].some(isNaN)) return null;

    const determinantFn = (m: number[][]): number => {
      const n = m.length;
      if (n === 1) return m[0][0];
      if (n === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
      let det = 0;
      for (let col = 0; col < n; col++) {
        const minor = m.slice(1).map((row) => row.filter((_, i) => i !== col));
        det += Math.pow(-1, col) * m[0][col] * determinantFn(minor);
      }
      return det;
    };

    let matrix: number[][] = [];
    let determinant = 0;

    switch (operation) {
      case "add":
        matrix = A.map((row, r) => row.map((val, c) => val + B[r][c]));
        break;
      case "subtract":
        matrix = A.map((row, r) => row.map((val, c) => val - B[r][c]));
        break;
      case "multiply":
        matrix = Array(size)
          .fill(0)
          .map(() => Array(size).fill(0));
        for (let i = 0; i < size; i++)
          for (let j = 0; j < size; j++)
            for (let k = 0; k < size; k++) matrix[i][j] += A[i][k] * B[k][j];
        break;
      case "determinant":
        determinant = determinantFn(A);
        break;
    }

    return { matrix, determinant };
  }, [matrixA, matrixB, size, operation, submitted]);

  const resetCalculator = () => {
    setMatrixA(createMatrix(size));
    setMatrixB(createMatrix(size));
    setOperation("add");
    setSubmitted(false);
  };

  const cellClass =
    "rounded-lg border border-slate-300 p-2 text-center text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400";

  const renderMatrix = (label: string, matrix: string[][], which: "A" | "B") => (
    <div>
      <h3 className="mb-3 font-semibold text-slate-700">Matrix {label}</h3>
      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
      >
        {matrix.map((row, r) =>
          row.map((val, c) => (
            <input
              key={`${which}-${r}-${c}`}
              type="number"
              value={val}
              onChange={(e) => handleCellChange(which, r, c, e.target.value)}
              className={cellClass}
            />
          ))
        )}
      </div>
    </div>
  );

  const renderResultMatrix = (matrix: number[][]) => (
    <div
      className="mt-4 grid gap-2 text-center"
      style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
    >
      {matrix.map((row, r) =>
        row.map((val, c) => (
          <div
            key={`res-${r}-${c}`}
            className="rounded-lg bg-blue-100 px-2 py-3 text-sm font-bold text-blue-800"
          >
            {Number.isInteger(val) ? val : parseFloat(val.toFixed(4))}
          </div>
        ))
      )}
    </div>
  );

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">Matrix Calculator</h2>
      <p className="mt-2 text-slate-600">
        Perform matrix addition, subtraction, multiplication, and determinant
        calculations for matrices from 2×2 up to 5×5.
      </p>

      {/* Size Selector */}
      <div className="mt-6">
        <label className="mb-2 block font-medium text-slate-700">
          Matrix Size
        </label>
        <div className="flex gap-2">
          {[2, 3, 4, 5].map((n) => (
            <button
              key={n}
              onClick={() => handleSizeChange(n)}
              className={`rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                size === n
                  ? "bg-black text-white shadow"
                  : "hover:bg-slate-100 text-slate-700"
              }`}
            >
              {n}×{n}
            </button>
          ))}
        </div>
      </div>

      {/* Matrix Inputs */}
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {renderMatrix("A", matrixA, "A")}
        {operation !== "determinant" && renderMatrix("B", matrixB, "B")}
      </div>

      {/* Operation */}
      <div className="mt-6">
        <label className="mb-2 block font-medium text-slate-700">Operation</label>
        <select
          value={operation}
          onChange={(e) => {
            setOperation(e.target.value as Operation);
            setSubmitted(false);
          }}
          className="w-full rounded-xl border p-3"
        >
          <option value="add">Addition (A + B)</option>
          <option value="subtract">Subtraction (A − B)</option>
          <option value="multiply">Multiplication (A × B)</option>
          <option value="determinant">Determinant of A</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate
        </button>
        <button
          onClick={resetCalculator}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {/* Result */}
      {result && operation !== "determinant" && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6">
          <h3 className="text-xl font-semibold text-slate-800">Result Matrix</h3>
          {renderResultMatrix(result.matrix)}
        </div>
      )}

      {result && operation === "determinant" && (
        <div className="mt-8 rounded-2xl border bg-green-50 p-6 text-center">
          <h3 className="text-xl font-semibold text-slate-800">Determinant of A</h3>
          <p className="mt-3 text-3xl font-bold text-green-700">
            {Number.isInteger(result.determinant)
              ? result.determinant
              : parseFloat(result.determinant.toFixed(6))}
          </p>
        </div>
      )}
    </div>
  );
}