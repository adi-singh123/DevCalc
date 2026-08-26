import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { STAMP_DUTY_STATES } from "@/src/data/states/stamp-duty-states";
import { ROAD_TAX_STATES } from "@/src/data/states/road-tax-states";

type CalculatorType = "stamp-duty" | "road-tax";

interface Props {
  type: CalculatorType;
  currentStateSlug?: string;
  title?: string;
  subtitle?: string;
}

export default function StateSelectorSection({
  type,
  currentStateSlug,
  title,
  subtitle,
}: Props) {
  const isStampDuty = type === "stamp-duty";
  const baseUrl = isStampDuty ? "/stamp-duty-calculator" : "/road-tax-calculator";
  const defaultTitle = isStampDuty
    ? "State-Wise Stamp Duty & Registration Calculators (2026)"
    : "State-Wise Road Tax & RTO Calculators (2026)";
  const defaultSubtitle = isStampDuty
    ? "Select your state to calculate exact stamp duty rates, Ready Reckoner / Circle Rates, women concessions, and registration caps."
    : "Select your state to calculate exact motor vehicle road tax, RTO registration charges, EV exemptions, and on-road price additions.";

  const states = isStampDuty ? STAMP_DUTY_STATES : ROAD_TAX_STATES;

  return (
    <section className="my-10 rounded-3xl border border-stone-200 bg-gradient-to-br from-[#f8f5ee] to-[#f2ecde] p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-950 dark:text-blue-300">
            <MapPin className="h-3.5 w-3.5" />
            <span>State Specific Slabs</span>
          </div>
          <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl dark:text-white">
            {title || defaultTitle}
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
            {subtitle || defaultSubtitle}
          </p>
        </div>

        {currentStateSlug && (
          <Link
            href={baseUrl}
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 sm:mt-0"
          >
            <span>View All India Hub</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {states.map((state) => {
          const isCurrent = state.slug === currentStateSlug;
          const href = `${baseUrl}/${state.slug}`;

          return (
            <Link
              key={state.slug}
              href={href}
              className={`group relative flex flex-col justify-between rounded-2xl border p-5 transition-all ${
                isCurrent
                  ? "border-blue-500 bg-blue-50/50 shadow-md ring-2 ring-blue-500/20 dark:border-blue-500/80 dark:bg-blue-950/40"
                  : "border-stone-200 bg-white shadow-sm hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                      {state.stateCode}
                    </span>
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      {state.stateName}
                    </h3>
                  </div>

                  {isCurrent && (
                    <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                      Current
                    </span>
                  )}
                </div>

                <div className="mt-3 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  {isStampDuty ? (
                    <>
                      <p>
                        <strong className="text-slate-800 dark:text-slate-200">Rate:</strong>{" "}
                        {(state as any).stampDutyMale.split(",")[0]}
                      </p>
                      <p>
                        <strong className="text-slate-800 dark:text-slate-200">Reg. Fee:</strong>{" "}
                        {(state as any).registrationCharge.split("(")[0]}
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        <strong className="text-slate-800 dark:text-slate-200">Petrol Car:</strong>{" "}
                        {(state as any).petrolCarRate.split("(")[0]}
                      </p>
                      <p>
                        <strong className="text-slate-800 dark:text-slate-200">EV Status:</strong>{" "}
                        {(state as any).evStatus.split("under")[0]}
                      </p>
                    </>
                  )}
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:translate-x-0.5 transition-transform dark:text-blue-400">
                <span>Calculate {state.stateName}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
