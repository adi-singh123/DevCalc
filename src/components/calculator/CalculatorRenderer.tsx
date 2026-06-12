"use client";

import { useState } from "react";

export default function CalculatorRenderer() {
  const [birthDate, setBirthDate] = useState("");

  return (
    <section className="mt-10 rounded-2xl border p-6">
      <h2 className="text-2xl font-bold">
        Age Calculator
      </h2>

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Date of Birth
        </label>

        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="w-full rounded-xl border p-3"
        />
      </div>
    </section>
  );
}


function calculateAge(dateOfBirth: string) {
  if (!dateOfBirth) return null;

  const birth = new Date(dateOfBirth);
  const now = new Date();

  const diff = now.getTime() - birth.getTime();

  const days = Math.floor(
    diff / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    diff / (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    diff / (1000 * 60)
  );

  const seconds = Math.floor(
    diff / 1000
  );

  const years = Math.floor(days / 365.25);
  const months = Math.floor(days / 30.44);

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
  };
}