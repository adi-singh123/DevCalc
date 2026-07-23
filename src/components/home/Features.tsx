import { ShieldCheck, Zap, MousePointerClick, Smartphone } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "100% Free",
    description: "All calculators are free to use. No hidden charges.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get quick and accurate results in seconds.",
  },
  {
    icon: MousePointerClick,
    title: "Easy to Use",
    description: "Simple interface designed for everyone.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Works perfectly on all devices and screen sizes.",
  },
];

export default function Features() {
  return (
    <section className="border-y border-stone-200 bg-[#f1ece3] dark:border-slate-700 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#1f3a5c] shadow-sm dark:bg-slate-900 dark:text-blue-400">
              <Icon size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-[#26364a] dark:text-white">
                {title}
              </h3>
              <p className="mt-1 text-sm text-stone-600 dark:text-slate-400">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
