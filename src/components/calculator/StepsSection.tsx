import {
  CalendarDays,
  Clock3,
  Calculator,
  BadgeCheck,
  Scale,
  Ruler,
  Target,
  BookOpen,
  List,
  MapPin,
  Heart,
  Droplets,
  Baby,
  Activity,
  ClipboardList,
  CircleDot,
  DollarSign,
  Coins,
  Landmark,
  Sprout,
  Hammer,
  Wrench,
  ShieldCheck,
  Package,
  TrendingUp,
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
  weight: Scale,
  height: Ruler,
  target: Target,
  book: BookOpen,
  list: List,
  location: MapPin,
  ruler: Ruler,

  // Health
  heart: Heart,
  period: Droplets,
  baby: Baby,
  activity: Activity,
  ovulation: CircleDot,

  // Finance / Gold
  money: DollarSign,
  gold: Coins,
  bank: Landmark,

  // Agriculture
  agriculture: Sprout,

  // Construction
  construction: Hammer,
  tools: Wrench,

  // General
  verify: ShieldCheck,
  package: Package,
  summary: ClipboardList,
  growth: TrendingUp,
};

export default function StepsSection({
  title,
  steps,
}: Props) {
  return (
    <section className="mt-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          {title}
        </h2>

        <p className="mt-3 text-slate-600 dark:text-slate-400">
          Follow these simple steps to get accurate results instantly.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((item) => {
          const Icon =
            icons[
              item.icon as keyof typeof icons
            ];

          return (
            <div
              key={item.step}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                dark:border-slate-700
                dark:bg-slate-900
              "
            >
              {/* Step Number Badge */}
              <div
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-100
                  text-sm
                  font-bold
                  text-blue-600
                  dark:bg-blue-500/10
                  dark:text-blue-400
                "
              >
                {item.step}
              </div>

              {/* Icon */}
              <div className="flex justify-center">
                <div
                  className="
                    rounded-2xl
                    bg-blue-50
                    p-4
                    text-blue-600
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    dark:bg-blue-500/10
                    dark:text-blue-400
                  "
                >
                  <Icon size={40} />
                </div>
              </div>

              {/* Title */}
              <h3
                className="
                  mt-5
                  text-center
                  text-lg
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-3
                  text-center
                  text-sm
                  leading-6
                  text-slate-600
                  dark:text-slate-400
                "
              >
                {item.description}
              </p>

              {/* Bottom Accent */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-1
                  w-full
                  bg-gradient
                  from-blue-500
                  to-indigo-500
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}