"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function AttendanceCalculator() {
  const [totalClasses, setTotalClasses] = useState("");
  const [attendedClasses, setAttendedClasses] = useState("");
  const [targetPercentage, setTargetPercentage] = useState("75");
  const [submitted, setSubmitted] = useState(false);

  const attendance = useMemo(() => {
    if (
      !submitted ||
      !totalClasses ||
      !attendedClasses ||
      !targetPercentage
    ) {
      return null;
    }

    const total = Number(totalClasses);
    const attended = Number(attendedClasses);
    const target = Number(targetPercentage);

    if (
      total <= 0 ||
      attended < 0 ||
      attended > total ||
      target <= 0 ||
      target > 100
    ) {
      return null;
    }

    const attendancePercentage = (attended / total) * 100;

    let classesNeeded = 0;
    let classesCanMiss = 0;

    if (attendancePercentage < target) {
      classesNeeded = Math.ceil(
        (target * total - 100 * attended) / (100 - target),
      );
    }

    if (attendancePercentage >= target) {
      classesCanMiss = Math.floor(
        (100 * attended) / target - total,
      );
    }

    let status = "";

    if (attendancePercentage > target) {
      status = "Above Target";
    } else if (
      Math.abs(attendancePercentage - target) < 0.01
    ) {
      status = "On Target";
    } else {
      status = "Below Target";
    }

    return {
      attendancePercentage: attendancePercentage.toFixed(2),
      classesNeeded,
      classesCanMiss,
      status,
    };
  }, [
    totalClasses,
    attendedClasses,
    targetPercentage,
    submitted,
  ]);

  const results = attendance
    ? [
        {
          label: "Attendance Percentage",
          value: `${attendance.attendancePercentage}%`,
          highlight: true,
        },
        {
          label: "Status",
          value: attendance.status,
        },
        {
          label: "Classes Needed",
          value: attendance.classesNeeded,
        },
        {
          label: "Classes Can Miss",
          value: attendance.classesCanMiss,
        },
      ]
    : [];

  return (
    <div className="calculator-panel mt-8 rounded-3xl border bg-white p-6 shadow-sm">
   

      <div className="mt-6">
        <label className="mb-2 block font-medium">
          Total Classes
        </label>

        <input
          type="number"
          min="1"
          placeholder="Enter total classes"
          value={totalClasses}
          onChange={(e) => setTotalClasses(e.target.value)}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Classes Attended
        </label>

        <input
          type="number"
          min="0"
          placeholder="Enter attended classes"
          value={attendedClasses}
          onChange={(e) => setAttendedClasses(e.target.value)}
          className="w-full rounded-xl border p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block font-medium">
          Target Attendance (%)
        </label>

        <input
          type="number"
          min="1"
          max="100"
          placeholder="Enter target percentage"
          value={targetPercentage}
          onChange={(e) =>
            setTargetPercentage(e.target.value)
          }
          className="w-full rounded-xl border p-3"
        />
      </div>

      {submitted &&
        totalClasses &&
        attendedClasses &&
        Number(attendedClasses) >
          Number(totalClasses) && (
          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-red-600">
            Classes attended cannot be greater than total
            classes.
          </div>
        )}

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setSubmitted(true)}
          className="cursor-pointer rounded-xl bg-black px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Calculate Attendance
        </button>

        <button
          onClick={() => {
            setTotalClasses("");
            setAttendedClasses("");
            setTargetPercentage("75");
            setSubmitted(false);
          }}
          className="cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
        >
          Reset
        </button>
      </div>

      {attendance && (
        <div className="mt-8 rounded-2xl border bg-blue-50 p-6 text-center">
          <h3 className="text-xl font-semibold">
            Current Attendance:{" "}
            {attendance.attendancePercentage}%
          </h3>

          <p className="mt-2 text-slate-600">
            Status: {attendance.status}
          </p>

          {attendance.classesNeeded > 0 && (
            <p className="mt-2 text-slate-600">
              Attend{" "}
              <strong>
                {attendance.classesNeeded}
              </strong>{" "}
              more consecutive classes to reach your
              target attendance.
            </p>
          )}

          {attendance.classesCanMiss > 0 && (
            <p className="mt-2 text-slate-600">
              You can miss{" "}
              <strong>
                {attendance.classesCanMiss}
              </strong>{" "}
              more classes and still maintain your target
              attendance.
            </p>
          )}
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Attendance Results"
          results={results}
          calculatorName="Attendance Results"
        />
      )}
    </div>
  );
}