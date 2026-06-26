import {
  Building2,
  Briefcase,
} from "lucide-react";

const companies = [
  {
    name: "Google",
    color: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
  },
  {
    name: "Microsoft",
    color: "bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400",
  },
  {
    name: "Amazon",
    color: "bg-yellow-50 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400",
  },
  {
    name: "Meta",
    color: "bg-sky-50 text-sky-700 dark:bg-sky-500/10 dark:text-sky-400",
  },
  {
    name: "Adobe",
    color: "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400",
  },
  {
    name: "Oracle",
    color: "bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400",
  },
  {
    name: "Netflix",
    color: "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400",
  },
  {
    name: "Uber",
    color: "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300",
  },
  {
    name: "Flipkart",
    color: "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400",
  },
  {
    name: "Atlassian",
    color: "bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400",
  },
  {
    name: "TCS",
    color: "bg-purple-50 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400",
  },
  {
    name: "Infosys",
    color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
  },
];

export default function TopCompanies() {
  return (
    <section className="mt-24">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400">
            Top Companies
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            Prepare for Interviews at Leading Tech Companies
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Our interview questions are inspired by
            real interview experiences shared by
            candidates from leading product-based
            companies and multinational organizations.
          </p>

        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {companies.map((company) => (
            <div
              key={company.name}
              className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                dark:border-slate-700
                dark:bg-slate-900
              "
            >
              <div
                className={`inline-flex rounded-2xl p-3 ${company.color}`}
              >
                <Building2 size={26} />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                {company.name}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Practice company-inspired interview
                questions covering coding,
                JavaScript, React, SQL,
                system design, debugging,
                and frontend/backend concepts.
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                <Briefcase size={16} />
                Company-Level Practice
              </div>
            </div>
          ))}

        </div>

        <div className="mt-14 rounded-3xl border border-dashed border-blue-300 bg-blue-50 p-8 dark:border-blue-500/30 dark:bg-blue-500/10">

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            More Companies Coming Soon
          </h3>

          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
            We are continuously adding interview
            questions inspired by hiring processes
            from startups, unicorns, FAANG companies,
            fintech, e-commerce, SaaS, and enterprise
            organizations.
          </p>

        </div>

      </div>
    </section>
  );
}