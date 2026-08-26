"use client";

import { FormEvent, useEffect, useState } from "react";

type Question = {
  left: number;
  operator: "+" | "-" | "×";
  right: number;
  answer: number;
};

function createQuestion(): Question {
  const operator = (["+", "-", "×"] as const)[Math.floor(Math.random() * 3)];
  let left = Math.floor(Math.random() * 12) + 2;
  let right = Math.floor(Math.random() * 12) + 2;

  if (operator === "-" && right > left) {
    [left, right] = [right, left];
  }

  const answer =
    operator === "+"
      ? left + right
      : operator === "-"
        ? left - right
        : left * right;

  return { left, operator, right, answer };
}

export default function TugOfWarGame() {
  const [question, setQuestion] = useState<Question>({
    left: 8,
    operator: "×",
    right: 7,
    answer: 56,
  });
  const [answer, setAnswer] = useState("");
  const [position, setPosition] = useState(50);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState<"idle" | "playing" | "won" | "lost">(
    "idle",
  );
  const [message, setMessage] = useState("Answer quickly to pull the rope!");

  useEffect(() => {
    if (status !== "playing") return;

    const botTurn = window.setInterval(() => {
      setPosition((current) => {
        const next = Math.max(0, current - 5);
        if (next === 0) {
          setStatus("lost");
          setMessage("The bot won this round. Try again!");
        }
        return next;
      });
    }, 2500);

    return () => window.clearInterval(botTurn);
  }, [status]);

  function startGame() {
    setQuestion(createQuestion());
    setAnswer("");
    setPosition(50);
    setScore(0);
    setMessage("Answer quickly to pull the rope!");
    setStatus("playing");
  }

  function submitAnswer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status !== "playing" || answer.trim() === "") return;

    if (Number(answer) === question.answer) {
      const nextPosition = Math.min(100, position + 12);
      setPosition(nextPosition);
      setScore((current) => current + 1);
      setMessage("Correct! You pulled the rope.");
      if (nextPosition === 100) {
        setStatus("won");
        setMessage("You beat the bot!");
      }
    } else {
      const nextPosition = Math.max(0, position - 8);
      setPosition(nextPosition);
      setMessage(`Not quite — the answer was ${question.answer}.`);
      if (nextPosition === 0) {
        setStatus("lost");
        setMessage("The bot won this round. Try again!");
      }
    }

    setAnswer("");
    setQuestion(createQuestion());
  }

  return (
    <section className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-5 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-8">
      <div className="flex items-center justify-between text-sm font-bold">
        <span className="text-rose-600 dark:text-rose-400">Bot</span>
        <span className="text-slate-500 dark:text-slate-400">
          Score: {score}
        </span>
        <span className="text-blue-600 dark:text-blue-400">You</span>
      </div>

      <div className="relative my-8 h-5 rounded-full bg-gradient-to-r from-rose-200 via-slate-200 to-blue-200 dark:from-rose-950 dark:via-slate-800 dark:to-blue-950">
        <div
          className="absolute top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-amber-500 shadow-lg transition-all duration-300 dark:border-slate-900"
          style={{ left: `${position}%` }}
          aria-label={`Rope position: ${position} percent toward you`}
        >
          <span className="sr-only">Rope marker</span>
        </div>
      </div>

      {status === "playing" ? (
        <form onSubmit={submitAnswer} className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Solve this
          </p>
          <p className="my-5 text-5xl font-black text-slate-900 dark:text-white">
            {question.left} {question.operator} {question.right}
          </p>
          <div className="mx-auto flex max-w-sm gap-3">
            <label htmlFor="game-answer" className="sr-only">
              Your answer
            </label>
            <input
              id="game-answer"
              type="number"
              inputMode="numeric"
              autoFocus
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-lg font-bold text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              placeholder="Answer"
            />
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              Pull
            </button>
          </div>
        </form>
      ) : (
        <div className="py-5 text-center">
          <button
            type="button"
            onClick={startGame}
            className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 font-bold text-white shadow-lg transition hover:from-blue-700 hover:to-indigo-700"
          >
            {status === "idle" ? "Start match" : "Play again"}
          </button>
        </div>
      )}

      <p aria-live="polite" className="mt-5 text-center text-sm text-slate-600 dark:text-slate-300">
        {message}
      </p>
    </section>
  );
}
