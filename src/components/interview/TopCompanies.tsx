import { Link } from "lucide-react";
import { Building2, ExternalLink } from "lucide-react";

const companies = [
  {
    name: "Google",
    slug: "google",
    roles: "SWE, L4–L6",
    color: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
    border: "hover:border-blue-300 dark:hover:border-blue-500/50",
    topics: ["Data Structures", "System Design", "JavaScript", "React"],
  },
  {
    name: "Microsoft",
    slug: "microsoft",
    roles: "SDE I, II, III",
    color: "bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400",
    border: "hover:border-green-300 dark:hover:border-green-500/50",
    topics: ["TypeScript", "System Design", "SQL", "C++"],
  },
  {
    name: "Amazon",
    slug: "amazon",
    roles: "SDE I, II, Senior",
    color: "bg-yellow-50 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400",
    border: "hover:border-yellow-300 dark:hover:border-yellow-500/50",
    topics: ["Node.js", "SQL", "System Design", "JavaScript"],
  },
  {
    name: "Meta",
    slug: "meta",
    roles: "E3–E6 Engineer",
    color: "bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-400",
    border: "hover:border-sky-300 dark:hover:border-sky-500/50",
    topics: ["React", "JavaScript", "System Design", "C++"],
  },
  {
    name: "Adobe",
    slug: "adobe",
    roles: "MTS I, II, Senior",
    color: "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400",
    border: "hover:border-red-300 dark:hover:border-red-500/50",
    topics: ["JavaScript", "React", "SQL", "TypeScript"],
  },
  {
    name: "Oracle",
    slug: "oracle",
    roles: "IC2–IC4 Engineer",
    color: "bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400",
    border: "hover:border-orange-300 dark:hover:border-orange-500/50",
    topics: ["SQL", "Java", "System Design", "C++"],
  },
  {
    name: "Netflix",
    slug: "netflix",
    roles: "L4–L6 Engineer",
    color: "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400",
    border: "hover:border-red-300 dark:hover:border-red-500/50",
    topics: ["System Design", "Node.js", "JavaScript", "React"],
  },
  {
    name: "Uber",
    slug: "uber",
    roles: "SWE I, II, Senior",
    color: "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300",
    border: "hover:border-slate-300 dark:hover:border-slate-500",
    topics: ["System Design", "SQL", "Node.js", "JavaScript"],
  },
  {
    name: "Flipkart",
    slug: "flipkart",
    roles: "SDE I, II, III",
    color: "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400",
    border: "hover:border-indigo-300 dark:hover:border-indigo-500/50",
    topics: ["JavaScript", "React", "SQL", "System Design"],
  },
  {
    name: "Atlassian",
    slug: "atlassian",
    roles: "P3–P5 Engineer",
    color: "bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400",
    border: "hover:border-cyan-300 dark:hover:border-cyan-500/50",
    topics: ["TypeScript", "React", "Node.js", "SQL"],
  },
  {
    name: "TCS",
    slug: "tcs",
    roles: "Trainee to Senior",
    color: "bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400",
    border: "hover:border-purple-300 dark:hover:border-purple-500/50",
    topics: ["JavaScript", "SQL", "C++", "Node.js"],
  },
  {
    name: "Infosys",
    slug: "infosys",
    roles: "SE to SSE",
    color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
    border: "hover:border-emerald-300 dark:hover:border-emerald-500/50",
    topics: ["JavaScript", "SQL", "React", "TypeScript"],
  },
];

// Map topic label → interview slug
const TOPIC_SLUGS: Record<string, string> = {
  "JavaScript": "javascript",
  "React": "react",
  "Node.js": "node",
  "SQL": "sql",
  "TypeScript": "typescript",
  "C++": "cpp",
  "System Design": "javascript", // fallback to closest available
  "Data Structures": "javascript",
  "Java": "javascript",
};

export default function TopCompanies() {
  return (
    <section className="mt-24">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400">
            Top Companies
          </span>
          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            Prepare for Interviews at Leading Tech Companies
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Our interview questions are inspired by real interview experiences
            shared by candidates from leading product-based companies and
            multinational organizations. Click any company to start practising.
          </p>
        </div>

        {/* Company cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {companies.map((company) => (
            <div
              key={company.name}
              className={`
                group
                flex flex-col
                rounded-3xl
                border border-slate-200
                bg-white
                p-6
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
                dark:border-slate-700 dark:bg-slate-900
                ${company.border}
              `}
            >
              {/* Icon + role badge */}
              <div className="flex items-start justify-between">
                <div className={`inline-flex rounded-2xl p-3 ${company.color}`}>
                  <Building2 size={26} />
                </div>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                  {company.roles}
                </span>
              </div>

              {/* Company name */}
              <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                {company.name}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400 flex-1">
                Practice company-inspired interview questions covering coding,
                system design, debugging, and frontend/backend concepts asked
                at {company.name}.
              </p>

              {/* Topic pills — each links to that topic's beginner quiz */}
              <div className="mt-4 flex flex-wrap gap-2">
                {company.topics.map((topic) => {
                  const slug = TOPIC_SLUGS[topic];
                  return slug ? (
                    <Link
                      key={topic}
                      href={`/interview-questions/${slug}/beginner`}
                      className={`
                        rounded-full px-2.5 py-1 text-xs font-semibold
                        transition-opacity hover:opacity-80
                        ${company.color}
                      `}
                    >
                      {topic}
                    </Link>
                  ) : (
                    <span
                      key={topic}
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${company.color}`}
                    >
                      {topic}
                    </span>
                  );
                })}
              </div>

              {/* CTA — links to interview-questions index */}
              <Link
                href="/interview-questions"
                className="
                  mt-5 flex items-center gap-2
                  text-sm font-semibold text-blue-600
                  transition-colors hover:text-blue-800
                  dark:text-blue-400 dark:hover:text-blue-300
                "
                aria-label={`Practice ${company.name} interview questions`}
              >
                <ExternalLink size={15} />
                View All Practice Sets
              </Link>
            </div>
          ))}
        </div>

        {/* Coming soon banner */}
        <div className="mt-14 rounded-3xl border border-dashed border-blue-300 bg-blue-50 p-8 dark:border-blue-500/30 dark:bg-blue-500/10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                More Companies Coming Soon
              </h3>
              <p className="mt-2 leading-8 text-slate-600 dark:text-slate-400">
                We are continuously adding interview questions inspired by
                hiring processes from startups, unicorns, FAANG companies,
                fintech, e-commerce, SaaS, and enterprise organizations.
              </p>
            </div>
            <Link
              href="/interview-questions"
              className="
                shrink-0
                rounded-2xl
                bg-blue-600 px-6 py-3
                text-sm font-bold text-white
                transition-colors hover:bg-blue-700
                dark:bg-blue-500 dark:hover:bg-blue-600
              "
            >
              Browse All Topics →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}