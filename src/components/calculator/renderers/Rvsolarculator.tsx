"use client";

import { useMemo, useState } from "react";
import ResultsSection from "../ResultsSection";

/**
 * RV Solar Calculator
 *
 * Formulas used (standard off-grid/RV solar sizing methodology):
 *
 * 1. Adjusted daily energy need (Wh):
 *      adjustedWh = dailyWh * (1 + systemLossPercent / 100)
 *    (accounts for wiring loss, controller loss, battery inefficiency, etc.)
 *
 * 2. Required solar array size (W):
 *      solarWatts = adjustedWh / peakSunHours
 *
 * 3. Required battery bank capacity (Ah):
 *      batteryAh = (dailyWh * daysOfAutonomy) / (batteryVoltage * (depthOfDischarge / 100))
 *
 * 4. Charge controller sizing (A), with NEC-recommended 1.25x safety factor:
 *      controllerAmps = (solarWatts * 1.25) / batteryVoltage
 *
 * 5. Number of panels needed (rounded up):
 *      panelCount = ceil(solarWatts / panelWattage)
 */

export default function RvSolarCalculator() {
  const [dailyWh, setDailyWh] = useState("2000");
  const [peakSunHours, setPeakSunHours] = useState("4.5");
  const [systemLossPercent, setSystemLossPercent] =
    useState("20");
  const [batteryVoltage, setBatteryVoltage] =
    useState("12");
  const [batteryType, setBatteryType] = useState<
    "lithium" | "lead-acid"
  >("lithium");
  const [daysOfAutonomy, setDaysOfAutonomy] =
    useState("2");
  const [panelWattage, setPanelWattage] =
    useState("200");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const parsePositive = (
    value: string,
    label: string,
    opts?: { min?: number; max?: number },
  ): number | string => {
    const num = Number(value);

    if (value.trim() === "" || Number.isNaN(num)) {
      return `${label} must be a valid number.`;
    }

    if (num <= 0) {
      return `${label} must be greater than 0.`;
    }

    if (opts?.min !== undefined && num < opts.min) {
      return `${label} seems too low. Please check the value.`;
    }

    if (opts?.max !== undefined && num > opts.max) {
      return `${label} seems too high. Please check the value.`;
    }

    return num;
  };

  const handleCalculate = () => {
    const checks: Array<
      [string, string, { min?: number; max?: number }?]
    > = [
      [dailyWh, "Daily energy usage (Wh)", { min: 1, max: 50000 }],
      [
        peakSunHours,
        "Peak sun hours",
        { min: 0.5, max: 14 },
      ],
      [
        systemLossPercent,
        "System loss (%)",
        { min: 0, max: 60 },
      ],
      [batteryVoltage, "Battery voltage", { min: 1, max: 400 }],
      [
        daysOfAutonomy,
        "Days of autonomy",
        { min: 0.5, max: 14 },
      ],
      [panelWattage, "Panel wattage", { min: 1, max: 1000 }],
    ];

    for (const [value, label, opts] of checks) {
      const result = parsePositive(value, label, opts);

      if (typeof result === "string") {
        setError(result);
        setSubmitted(false);
        return;
      }
    }

    setError("");
    setSubmitted(true);
  };

  const handleReset = () => {
    setDailyWh("2000");
    setPeakSunHours("4.5");
    setSystemLossPercent("20");
    setBatteryVoltage("12");
    setBatteryType("lithium");
    setDaysOfAutonomy("2");
    setPanelWattage("200");
    setSubmitted(false);
    setError("");
  };

  const solarData = useMemo(() => {
    if (!submitted || error) {
      return null;
    }

    const wh = Number(dailyWh);
    const sunHours = Number(peakSunHours);
    const lossPercent = Number(systemLossPercent);
    const voltage = Number(batteryVoltage);
    const days = Number(daysOfAutonomy);
    const panelW = Number(panelWattage);

    if (
      !wh ||
      !sunHours ||
      !voltage ||
      !days ||
      !panelW
    ) {
      return null;
    }

    const depthOfDischarge =
      batteryType === "lithium" ? 80 : 50;

    // 1. Adjusted daily energy need
    const adjustedWh = wh * (1 + lossPercent / 100);

    // 2. Required solar array size
    const solarWatts = adjustedWh / sunHours;

    // 3. Required battery bank capacity
    const batteryAh =
      (wh * days) / (voltage * (depthOfDischarge / 100));

    // 4. Charge controller sizing (1.25x NEC safety factor)
    const controllerAmps = (solarWatts * 1.25) / voltage;

    // 5. Number of panels
    const panelCount = Math.ceil(solarWatts / panelW);

    return {
      solarWatts: Math.round(solarWatts),
      batteryAh: Math.round(batteryAh),
      controllerAmps: Math.round(controllerAmps * 10) / 10,
      panelCount,
      depthOfDischarge,
      batteryKwh:
        Math.round(
          ((batteryAh * voltage) / 1000) * 100,
        ) / 100,
    };
  }, [
    dailyWh,
    peakSunHours,
    systemLossPercent,
    batteryVoltage,
    batteryType,
    daysOfAutonomy,
    panelWattage,
    submitted,
    error,
  ]);

  const results = solarData
    ? [
        {
          label: "Recommended Solar Array",
          value: `${solarData.solarWatts} W`,
          highlight: true,
        },
        {
          label: "Number of Panels",
          value: `${solarData.panelCount} × ${panelWattage}W`,
        },
        {
          label: "Battery Bank Capacity",
          value: `${solarData.batteryAh} Ah (${batteryVoltage}V)`,
        },
        {
          label: "Usable Battery Energy",
          value: `${solarData.batteryKwh} kWh`,
        },
        {
          label: "Charge Controller Size",
          value: `${solarData.controllerAmps} A`,
        },
      ]
    : [];

  return (
    <div className="mt-8 w-full max-w-full overflow-hidden rounded-3xl border bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block font-medium">
            Daily Energy Usage (Wh)
          </label>

          <input
            type="number"
            inputMode="decimal"
            value={dailyWh}
            onChange={(e) => {
              setDailyWh(e.target.value);
              if (error) setError("");
            }}
            placeholder="e.g. 2000"
            className="w-full rounded-xl border p-3"
          />

          <p className="mt-1 text-xs text-slate-500">
            Sum of all appliance watts × hours used per day.
          </p>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Peak Sun Hours / Day
          </label>

          <input
            type="number"
            inputMode="decimal"
            value={peakSunHours}
            onChange={(e) => {
              setPeakSunHours(e.target.value);
              if (error) setError("");
            }}
            placeholder="e.g. 4.5"
            className="w-full rounded-xl border p-3"
          />

          <p className="mt-1 text-xs text-slate-500">
            Typically 3–6 hrs depending on region/season.
          </p>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            System Loss (%)
          </label>

          <input
            type="number"
            inputMode="decimal"
            value={systemLossPercent}
            onChange={(e) => {
              setSystemLossPercent(e.target.value);
              if (error) setError("");
            }}
            placeholder="e.g. 20"
            className="w-full rounded-xl border p-3"
          />

          <p className="mt-1 text-xs text-slate-500">
            Wiring, controller & inverter losses (default 20%).
          </p>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Battery Voltage (V)
          </label>

          <select
            value={batteryVoltage}
            onChange={(e) => {
              setBatteryVoltage(e.target.value);
              if (error) setError("");
            }}
            className="w-full rounded-xl border p-3"
          >
            <option value="12">12V</option>
            <option value="24">24V</option>
            <option value="48">48V</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Battery Type
          </label>

          <select
            value={batteryType}
            onChange={(e) =>
              setBatteryType(
                e.target.value as "lithium" | "lead-acid",
              )
            }
            className="w-full rounded-xl border p-3"
          >
            <option value="lithium">
              Lithium (80% DoD)
            </option>
            <option value="lead-acid">
              Lead-Acid / AGM (50% DoD)
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Days of Autonomy
          </label>

          <input
            type="number"
            inputMode="decimal"
            value={daysOfAutonomy}
            onChange={(e) => {
              setDaysOfAutonomy(e.target.value);
              if (error) setError("");
            }}
            placeholder="e.g. 2"
            className="w-full rounded-xl border p-3"
          />

          <p className="mt-1 text-xs text-slate-500">
            Days the battery bank should last without sun.
          </p>
        </div>

        <div className="sm:col-span-2">
          <label className="mb-2 block font-medium">
            Individual Panel Wattage (W)
          </label>

          <input
            type="number"
            inputMode="decimal"
            value={panelWattage}
            onChange={(e) => {
              setPanelWattage(e.target.value);
              if (error) setError("");
            }}
            placeholder="e.g. 200"
            className="w-full rounded-xl border p-3 sm:max-w-xs"
          />
        </div>
      </div>

      {error && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600 dark:border-red-900 dark:bg-red-950 dark:text-red-400">
          {error}
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={handleCalculate}
          className="w-full cursor-pointer rounded-xl bg-amber-600 px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:bg-amber-700 hover:shadow-lg sm:w-auto"
        >
          Calculate Solar Needs
        </button>

        <button
          onClick={handleReset}
          className="w-full cursor-pointer rounded-xl border px-6 py-3 transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg sm:w-auto"
        >
          Reset
        </button>
      </div>

      {solarData && (
        <div className="mt-8 rounded-3xl border border-amber-100 bg-gradient-to-r from-amber-50 to-orange-50 p-8 text-center dark:border-slate-700 dark:from-slate-800 dark:to-slate-900">
          <div className="text-6xl">☀️</div>

          <h3 className="mt-4 text-5xl font-bold text-amber-600">
            {solarData.solarWatts} W
          </h3>

          <p className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
            Recommended Solar Array Size
          </p>

          <p className="mt-4 text-slate-600 dark:text-slate-400">
            You will need approximately {solarData.panelCount}{" "}
            × {panelWattage}W panel
            {solarData.panelCount === 1 ? "" : "s"}, a{" "}
            {solarData.batteryAh} Ah battery bank at{" "}
            {batteryVoltage}V, and a{" "}
            {solarData.controllerAmps}A charge controller.
          </p>

          <p className="mt-6 text-sm text-slate-500">
            Estimates only — actual needs vary with cloud cover,
            panel angle, and appliance efficiency.
          </p>
        </div>
      )}

      {results.length > 0 && (
        <ResultsSection
          title="RV Solar Calculator Results"
          results={results}
          calculatorName="RV Solar Calculator"
        />
      )}
    </div>
  );
}