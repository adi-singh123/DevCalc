import {
  Award,
  BookOpen,
  Brain,
  Code2,
  Lock,
  MonitorSmartphone,
  Shuffle,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Interactive MCQ Tests",
    description:
      "Practice technology-specific interview questions with interactive multiple-choice quizzes and instant scoring.",
  },
  {
    icon: Code2,
    title: "Code Examples",
    description:
      "Understand every concept through practical code snippets and real-world interview examples.",
  },
  {
    icon: BookOpen,
    title: "Detailed Explanations",
    description:
      "Every question includes explanations that help you understand why an answer is correct.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description:
      "Track completed stages, quiz scores, best attempts, and continue from where you stopped.",
  },
  {
    icon: Lock,
    title: "Stage Unlock System",
    description:
      "Complete Beginner before Intermediate, Intermediate before Advanced, and finally unlock the MNC stage.",
  },
  {
    icon: Award,
    title: "Real Interview Scenarios",
    description:
      "Questions are inspired by interviews from leading technology companies including Google, Microsoft, Amazon, Adobe, Oracle, and more.",
  },
  {
    icon: Shuffle,
    title: "Randomized Practice",
    description:
      "Questions are shuffled every time you retry, providing a fresh interview experience on every attempt.",
  },
  {
    icon: MonitorSmartphone,
    title: "Practice Anywhere",
    description:
      "Prepare for interviews seamlessly on desktop, tablet, and mobile devices with a fully responsive interface.",
  },
];

export default function WhyChooseDevCalc() {
  return (
    <section className="mt-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
            Why DevCalc?
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            Why Choose DevCalc for Interview Preparation?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Prepare smarter with structured interview learning,
            interactive MCQ tests, detailed explanations,
            real-world coding questions, and a complete
            beginner-to-MNC roadmap for frontend and backend developers.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-500
                  hover:shadow-xl
                  dark:border-slate-700
                  dark:bg-slate-900
                "
              >
                <div
                  className="
                    inline-flex
                    rounded-2xl
                    bg-blue-100
                    p-4
                    text-blue-600
                    transition
                    group-hover:bg-blue-600
                    group-hover:text-white
                    dark:bg-blue-500/10
                  "
                >
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-10 text-center text-white">
          <h3 className="text-3xl font-bold">
            Start Your Interview Preparation Today
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-blue-100">
            Practice JavaScript, React, Next.js, SQL, Node.js,
            TypeScript, HTML, CSS and many more technologies
            through structured interview stages and improve your
            confidence before your next technical interview.
          </p>
        </div>
      </div>
    </section>
  );
}