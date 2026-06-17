"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

export default function HeartRateZoneCalculator() {
  const [age, setAge] =
    useState("");

  const [
    restingHeartRate,
    setRestingHeartRate,
  ] = useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const result = useMemo(() => {
    if (
      !submitted ||
      !age ||
      !restingHeartRate
    ) {
      return null;
    }

    const ageNum =
      Number(age);

    const restingHR =
      Number(
        restingHeartRate,
      );

    if (
      isNaN(ageNum) ||
      isNaN(restingHR) ||
      ageNum <= 0 ||
      restingHR <= 0
    ) {
      return null;
    }

    const maxHeartRate =
      220 - ageNum;

    const reserve =
      maxHeartRate -
      restingHR;

    const zone1Min =
      Math.round(
        reserve * 0.5 +
          restingHR,
      );
    const zone1Max =
      Math.round(
        reserve * 0.6 +
          restingHR,
      );

    const zone2Min =
      Math.round(
        reserve * 0.6 +
          restingHR,
      );
    const zone2Max =
      Math.round(
        reserve * 0.7 +
          restingHR,
      );

    const zone3Min =
      Math.round(
        reserve * 0.7 +
          restingHR,
      );
    const zone3Max =
      Math.round(
        reserve * 0.8 +
          restingHR,
      );

    const zone4Min =
      Math.round(
        reserve * 0.8 +
          restingHR,
      );
    const zone4Max =
      Math.round(
        reserve * 0.9 +
          restingHR,
      );

    const zone5Min =
      Math.round(
        reserve * 0.9 +
          restingHR,
      );
    const zone5Max =
      maxHeartRate;

    return {
      maxHeartRate,
      zone1Min,
      zone1Max,
      zone2Min,
      zone2Max,
      zone3Min,
      zone3Max,
      zone4Min,
      zone4Max,
      zone5Min,
      zone5Max,
    };
  }, [
    age,
    restingHeartRate,
    submitted,
  ]);

  const results = result
    ? [
        {
          label:
            "Maximum Heart Rate",
          value: `${result.maxHeartRate} BPM`,
          highlight: true,
        },
        {
          label:
            "Zone 1 (Recovery)",
          value: `${result.zone1Min}-${result.zone1Max} BPM`,
        },
        {
          label:
            "Zone 2 (Fat Burn)",
          value: `${result.zone2Min}-${result.zone2Max} BPM`,
        },
        {
          label:
            "Zone 3 (Aerobic)",
          value: `${result.zone3Min}-${result.zone3Max} BPM`,
        },
        {
          label:
            "Zone 4 (Threshold)",
          value: `${result.zone4Min}-${result.zone4Max} BPM`,
        },
        {
          label:
            "Zone 5 (Maximum)",
          value: `${result.zone5Min}-${result.zone5Max} BPM`,
        },
      ]
    : [];

  const resetCalculator = () => {
    setAge("");
    setRestingHeartRate("");
    setSubmitted(false);
  };

  return (
    <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Heart Rate Zone
        Calculator
      </h2>

      <p className="mt-2 text-slate-600">
        Calculate your target
        heart rate zones for
        fat burning, cardio,
        endurance training, and
        athletic performance.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Age (Years)
          </label>

          <input
            type="number"
            min="1"
            value={age}
            onChange={(e) =>
              setAge(
                e.target.value,
              )
            }
            placeholder="30"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Resting Heart Rate
            (BPM)
          </label>

          <input
            type="number"
            min="30"
            value={
              restingHeartRate
            }
            onChange={(e) =>
              setRestingHeartRate(
                e.target.value,
              )
            }
            placeholder="60"
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
          Calculate
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
        <div className="mt-8 rounded-2xl border bg-red-50 p-6">
          <h3 className="text-center text-xl font-semibold">
            Heart Rate Zones
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="font-medium">
                Zone 1 (Recovery)
              </p>
              <p className="text-lg font-bold">
                {result.zone1Min} -{" "}
                {
                  result.zone1Max
                }{" "}
                BPM
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="font-medium">
                Zone 2 (Fat Burn)
              </p>
              <p className="text-lg font-bold">
                {result.zone2Min} -{" "}
                {
                  result.zone2Max
                }{" "}
                BPM
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="font-medium">
                Zone 3 (Aerobic)
              </p>
              <p className="text-lg font-bold">
                {result.zone3Min} -{" "}
                {
                  result.zone3Max
                }{" "}
                BPM
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 shadow-sm">
              <p className="font-medium">
                Zone 4
                (Threshold)
              </p>
              <p className="text-lg font-bold">
                {result.zone4Min} -{" "}
                {
                  result.zone4Max
                }{" "}
                BPM
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 shadow-sm md:col-span-2">
              <p className="font-medium">
                Zone 5 (Maximum
                Effort)
              </p>
              <p className="text-lg font-bold">
                {result.zone5Min} -{" "}
                {
                  result.zone5Max
                }{" "}
                BPM
              </p>
            </div>
          </div>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="Heart Rate Zone Results"
          results={results}
        />
      )}
    </div>
  );
}