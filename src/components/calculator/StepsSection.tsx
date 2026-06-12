import {
  CalendarDays,
  Clock3,
  Calculator,
  BadgeCheck,
} from "lucide-react";

type Step = {
  step: number;
  title: string;
  description: string;
  icon: string;
};

type Props = {
  title: string;
  steps: Step[];
};

const icons = {
  calendar: CalendarDays,
  clock: Clock3,
  calculator: Calculator,
  result: BadgeCheck,
};

export default function StepsSection({
  title,
  steps,
}: Props) {
  return (
    <section className="mt-12">
      <h2 className="mb-8 text-center text-3xl font-bold">
        {title}
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((item) => {
          const Icon =
            icons[item.icon as keyof typeof icons];

          return (
            <div
              key={item.step}
              className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <p className="text-sm font-medium text-slate-500">
                Step {item.step}
              </p>

              <div className="mt-4 flex justify-center">
                <Icon size={42} />
              </div>

              <h3 className="mt-4 text-center text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-center text-sm text-slate-600">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}