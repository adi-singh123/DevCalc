import { BookOpenCheck, CheckCircle2, ShieldCheck } from "lucide-react";
import type { Calculator } from "@/src/types/calculator";

type Props = {
  calculator: Calculator;
};

const categoryGuidance: Record<string, { heading: string; checks: string[]; limitation: string }> = {
  Finance: {
    heading: "Use this estimate for planning, then verify the final numbers",
    checks: ["Confirm the interest rate, fees and compounding period", "Compare the result with the lender or official statement", "Allow for taxes, charges and rate changes not included in the inputs"],
    limitation: "Financial results are estimates, not a loan offer, investment recommendation or tax assessment.",
  },
  Health: {
    heading: "Understand the result in context",
    checks: ["Use current and correctly measured inputs", "Compare trends rather than relying on one isolated reading", "Discuss symptoms, diagnoses or treatment decisions with a qualified clinician"],
    limitation: "Population formulas cannot account for every medical condition, medicine, body type or individual circumstance.",
  },
  Construction: {
    heading: "Turn the estimate into a practical project check",
    checks: ["Measure finished dimensions and use consistent units", "Include wastage, openings, local labour and delivery costs", "Validate structural quantities with an engineer or experienced contractor"],
    limitation: "Site conditions, specifications and local market rates can make the final requirement different from an online estimate.",
  },
  Vehicle: {
    heading: "Check the estimate against your actual vehicle and location",
    checks: ["Use the manufacturer specification or a recent measured value", "Include local fuel, tax, toll or registration charges where relevant", "Confirm statutory figures with the responsible transport authority"],
    limitation: "Driving conditions, vehicle condition, location and government notifications can change the final figure.",
  },
  Math: {
    heading: "Verify the calculation step by step",
    checks: ["Keep every value in a consistent format", "Review the displayed formula and worked example", "Recalculate after correcting rounded or missing inputs"],
    limitation: "The result is only as precise as the supplied values and the rounding shown by the calculator.",
  },
  Education: {
    heading: "Use the result with your institution's rules",
    checks: ["Enter marks, credits and weightings exactly as published", "Check the worked example before relying on the result", "Confirm conversion and attendance rules with your institution"],
    limitation: "Universities, boards and institutions can use different grading, rounding and eligibility policies.",
  },
  "Developer Tools": {
    heading: "Review generated output before using it",
    checks: ["Keep sensitive production data out of browser tools", "Validate the output in its destination system", "Retain a copy of the original input before transforming it"],
    limitation: "Formatting or validation success does not prove that data is safe, authorized or semantically correct for every system.",
  },
  Fun: {
    heading: "What this result does—and does not—mean",
    checks: ["Treat the output as a repeatable game result", "Do not use it to judge another person's feelings or character", "Use real communication for real relationship decisions"],
    limitation: "This entertainment result is generated from the supplied text and is not a psychological or scientific assessment.",
  },
};

const fallbackGuidance = {
  heading: "Get a more useful result",
  checks: ["Review each input before calculating", "Use the displayed method to understand the output", "Verify important decisions with an appropriate official or professional source"],
  limitation: "This tool provides a planning estimate based on the information entered and the method explained on this page.",
};

export default function CalculatorEditorialGuide({ calculator }: Props) {
  const guidance = categoryGuidance[calculator.category] ?? fallbackGuidance;
  const example = calculator.formula.example;

  return (
    <section className="mt-12 overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-50/40 dark:border-emerald-900/40 dark:bg-emerald-950/10">
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b border-emerald-100 p-6 sm:p-8 lg:border-b-0 lg:border-r dark:border-emerald-900/40">
          <div className="flex items-center gap-3 text-emerald-800 dark:text-emerald-300">
            <BookOpenCheck aria-hidden="true" size={24} />
            <h2 className="text-2xl font-bold">{guidance.heading}</h2>
          </div>
          <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">
            The {calculator.name} uses the method shown on this page. Read the formula, check the units and compare the worked example with your own inputs before relying on the result.
          </p>
          {example && (
            <div className="mt-5 rounded-2xl bg-white/80 p-4 text-sm leading-6 text-slate-700 shadow-sm dark:bg-slate-900/70 dark:text-slate-300">
              <strong className="block text-slate-900 dark:text-white">Quick reasonableness check</strong>
              Compare your result with this page&apos;s example: {example.input}. The illustrated outcome is {example.output}.
            </div>
          )}
        </div>

        <div className="p-6 sm:p-8">
          <h3 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
            <CheckCircle2 aria-hidden="true" size={20} className="text-emerald-700 dark:text-emerald-400" />
            Before you use the answer
          </h3>
          <ul className="mt-4 space-y-3">
            {guidance.checks.map((check) => (
              <li key={check} className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                {check}
              </li>
            ))}
          </ul>
          <p className="mt-6 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950 dark:border-amber-900/50 dark:bg-amber-950/20 dark:text-amber-100">
            <ShieldCheck aria-hidden="true" size={20} className="mt-0.5 shrink-0" />
            <span><strong>Important limitation:</strong> {guidance.limitation}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
