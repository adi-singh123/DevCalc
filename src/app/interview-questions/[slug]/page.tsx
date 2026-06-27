/**
 * app/interview-questions/[slug]/page.tsx
 * Professional Technology Overview Page — Premium Learning Platform UI
 * BUG FIX: FAQS now correctly interpolate topic.title at render time.
 */

import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { interviewTopics } from "@/src/data/interview";
import Breadcrumb from "@/src/components/seo/Breadcrumb";
import BreadcrumbSchema from "@/src/components/seo/BreadcrumbSchema";
import { Lock, Unlock, ChevronRight } from "lucide-react";
import TopCompanies from "@/src/components/interview/TopCompanies";
import FAQSection from "@/src/components/calculator/FAQSection";
import FAQSchema from "@/src/components/seo/FAQSchema";
import PopularCalculators from '@/src/components/calculator/PopularCalculators';
interface Props {
  params: Promise<{ slug: string }>;
}

const STAGES = [
  {
    id: "beginner",
    title: "Beginner",
    desc: "Core fundamentals and basic syntax.",
    unlocked: true,
  },
  {
    id: "intermediate",
    title: "Intermediate",
    desc: "Hooks, state, and API handling.",
    unlocked: false,
  },
  {
    id: "advanced",
    title: "Advanced",
    desc: "Architecture, patterns, and optimization.",
    unlocked: false,
  },
  {
    id: "mnc",
    title: "MNC Level",
    desc: "System design, scale, and trade-offs.",
    unlocked: false,
  },
];

// ── FAQs are now a function so topic.title resolves correctly ──────────────
function buildFaqs(topicTitle: string) {
  return [
    {
      question: `How to prepare for a ${topicTitle} technical coding interview?`,
      answer:
        "Success comes from consistent practice of data structures, algorithms, and deep dives into framework internals. Analyze time/space complexity on every solution — not just correctness. Aim for 2–3 problems daily.",
    },
    {
      question: `Are these ${topicTitle} questions suitable for MNC system design rounds?`,
      answer:
        "Yes. Our expert-curated questions include high-level architecture, database scaling, CDN usage, caching layers, and load balancing trade-offs required for senior roles at Google, Amazon, and Microsoft.",
    },
    {
      question: "Why is the Intermediate stage locked?",
      answer:
        "Our roadmap builds a strong foundation first. You must score 50% or above in the Beginner stage to unlock Intermediate — ensuring you've mastered fundamentals before tackling advanced patterns.",
    },
    {
      question: `Can I practice ${topicTitle} MCQ interview questions for free?`,
      answer:
        "Absolutely — 100% free. DevCalc provides high-quality MCQs, code challenges, and detailed explanations to bridge the gap between theory and real-world application. No subscription required.",
    },
    {
      question: `What's the difference between junior and senior ${topicTitle} interviews?`,
      answer:
        "Junior interviews focus on syntax, data structures, and basic problem-solving. Senior roles go deeper into system architecture, code review, security, performance optimization, and architectural trade-offs.",
    },
    {
      question:
        "How should I handle live coding anxiety during the assessment?",
      answer:
        "Verbalize your thinking clearly. Interviewers prioritize your logical process and your ability to ask clarifying questions over writing perfect code immediately. Practice talking through your approach before typing.",
    },
    {
      question: "How many attempts do I get per stage?",
      answer:
        "Unlimited. You can retry any stage as many times as needed. On each retry, questions and options are reshuffled to prevent answer memorization and keep the experience challenging.",
    },
    {
      question: "Is my progress saved automatically?",
      answer:
        "Yes. Answers are auto-saved after every selection. If you refresh or accidentally close the tab mid-quiz, your progress is fully restored when you return to the page.",
    },
  ];
}

export default async function TopicOverviewPage({ params }: Props) {
  const { slug } = await params;
  const topic = interviewTopics.find((t) => t.slug === slug);
  if (!topic) return notFound();

  const faqs = buildFaqs(topic.title);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <FAQSchema faqs={faqs} />
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "/" },
            { name: "Interview", url: "/interview-questions" },
            { name: topic.title, url: `/interview-questions/${slug}` },
          ]}
        />
        <Breadcrumb
          items={[
            { label: "Interview Questions", href: "/interview-questions" },
            { label: topic.title },
          ]}
        />

        {/* Hero */}
        <header className="relative mt-12 py-20 px-8 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl text-white shadow-2xl overflow-hidden">
          {/* Decorative circles */}
          <div
            aria-hidden="true"
            className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/5"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -left-10 h-80 w-80 rounded-full bg-white/5"
          />

          <div className="relative">
            <span className="inline-block mb-4 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold">
              {topic.totalQuestions}+ Questions
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight leading-tight">
              {topic.title} Interview Questions:
              <br className="hidden md:block" />
              Preparation &amp; Coding Guide
            </h1>
            <p className="text-blue-100 text-lg mb-8 max-w-3xl leading-relaxed">
              Master <strong>{topic.title} technical coding</strong> with our
              structured roadmap. From <strong>MCQ interview practice</strong>{" "}
              to <strong>advanced system design</strong>, succeed in your next
              developer assessment.
            </p>
            <a
              href={`/interview-questions/${slug}/beginner`}
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-3.5 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg"
            >
              Start Beginner Quiz <ChevronRight size={18} />
            </a>
          </div>
        </header>

        {/* Stages */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-3 text-center text-slate-900 dark:text-white">
            Structured Interview Roadmap
          </h2>
          <p className="text-center text-slate-500 dark:text-slate-400 mb-10">
            Complete each stage to unlock the next level.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STAGES.map((stage, idx) => (
              <div
                key={stage.id}
                className={`relative p-6 rounded-3xl border transition-all ${
                  !stage.unlocked
                    ? "bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                    : "bg-white dark:bg-slate-900 border-blue-400 shadow-xl shadow-blue-500/10"
                }`}
              >
                {/* Step number */}
                <span className="absolute top-4 right-4 text-xs font-bold text-slate-300 dark:text-slate-700">
                  0{idx + 1}
                </span>

                {stage.unlocked ? (
                  <Unlock className="mb-4 text-blue-600" size={22} />
                ) : (
                  <Lock className="mb-4 text-slate-400" size={22} />
                )}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">
                  {stage.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {stage.desc}
                </p>

                {stage.unlocked ? (
                  <a
                    href={`/interview-questions/${slug}/${stage.id}`}
                    className="block w-full py-3 bg-blue-600 text-white rounded-2xl font-bold text-center text-sm hover:bg-blue-700 transition-colors"
                  >
                    Start Quiz
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full py-3 bg-slate-200 dark:bg-slate-800 text-slate-400 rounded-2xl font-bold text-sm cursor-not-allowed"
                  >
                    🔒 Locked
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SEO Article */}
        <article className="max-w-4xl mx-auto mt-10 p-6 md:p-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl prose dark:prose-invert prose-blue max-w-none">
          <header className="mb-10 text-center">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">
              Ultimate Guide
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6">
              {topic.title} Interview Questions, MCQs & Complete Preparation
              Roadmap
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Mastering <strong>{topic.title}</strong> is the key to landing
              high-paying software engineering roles. This comprehensive guide
              covers everything you need to ace your next technical interview at
              top product-based companies.
            </p>
          </header>

          <section className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h2 className="!mt-0">
              Why {topic.title} Matters in Tech Interviews
            </h2>
            <p>
              Interviewers Don&apos;t just test your knowledge of{" "}
              <strong>{topic.title}</strong>; they evaluate your
              <strong>
                {" "}
                problem-solving architecture, code optimization skills, and
                debugging capability
              </strong>
              . In modern technical interviews at companies like Google, Meta,
              and Amazon, the ability to explain
              <em> why</em> you chose a specific approach is just as important
              as the code itself.
            </p>
          </section>

          <h2 className="mt-2 mb-2 bg-gray-50 flex justify-center text-1xl border-rose-100  dark:bg-slate-800 shadow-sm rounded-r-lg ">
            4-Week {topic.title} Preparation Roadmap
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { week: "Week 1", focus: "Core Fundamentals & Syntax" },
              {
                week: "Week 2",
                focus: "Data Structures & Algorithmic Patterns",
              },
              { week: "Week 3", focus: "Advanced Concepts & Optimization" },
              { week: "Week 4", focus: "Mock Interviews & System Design" },
            ].map((item) => (
              <div
                key={item.week}
                className="p-4 border-l-4 border-blue-500 bg-white dark:bg-slate-800 shadow-sm rounded-r-lg"
              >
                <h4 className="m-0 text-blue-600">{item.week}</h4>
                <p className="m-0 text-sm font-medium">{item.focus}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-2 mb-2 bg-gray-50 flex justify-center text-1xl border-rose-100  dark:bg-slate-800 shadow-sm rounded-r-lg">
            Key Topics You Must Master
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Fundamentals",
              "Advanced Concepts",
              "MCQs",
              "Memory Mgmt",
              "Optimization",
              "Security",
              "Debugging",
              "Design Patterns",
            ].map((t) => (
              <span
                key={t}
                className="flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-semibold border border-blue-100 dark:border-blue-800"
              >
                🚀 {t}
              </span>
            ))}
          </div>

          <h2>Freshers vs. Experienced: What’s Expected?</h2>
          <table className="w-full text-left border-collapse border border-slate-300 dark:border-slate-700">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-300 dark:border-slate-700 p-3">
                  Focus Area
                </th>
                <th className="border border-slate-300 dark:border-slate-700 p-3">
                  For Freshers
                </th>
                <th className="border border-slate-300 dark:border-slate-700 p-3">
                  For Experienced
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 p-3">
                  Concepts
                </td>
                <td className="border border-slate-300 dark:border-slate-700 p-3">
                  Strong Fundamental Base
                </td>
                <td className="border border-slate-300 dark:border-slate-700 p-3">
                  System Design & Scaling
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 p-3">
                  Coding
                </td>
                <td className="border border-slate-300 dark:border-slate-700 p-3">
                  Clean, Logical Syntax
                </td>
                <td className="border border-slate-300 dark:border-slate-700 p-3">
                  Production-Ready Performance
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 p-3">
                  Problem Solving
                </td>
                <td className="border border-slate-300 dark:border-slate-700 p-3">
                  Analytical Thinking
                </td>
                <td className="border border-slate-300 dark:border-slate-700 p-3">
                  Trade-offs & Architecture
                </td>
              </tr>
            </tbody>
          </table>

          <ul className="mt-2">
            <li>
              <strong>Skipping the Why:</strong> Never start coding without
              discussing your approach first.
            </li>
            <li>
              <strong>Ignoring Edge Cases:</strong> Always ask about null
              pointers, memory limits, or empty inputs.
            </li>
            <li>
              <strong>Over-Engineering:</strong> Don&apos;t write complex code
              when a simple, readable solution works.
            </li>
            <li>
              <strong>Lack of Communication:</strong> Treat the interview as a
              pair-programming session.
            </li>
          </ul>
        </article>
        <TopCompanies />

        {/* FAQ */}
        <section className="mt-20">
          <FAQSection
            faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
          />
          
        </section>
             <PopularCalculators  
                  currentSlug="developer-tool"/>
      </div>
    </main>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = interviewTopics.find((t) => t.slug === slug);
  return {
    title: `${topic?.title} Interview Questions & Coding Guide`,
    description: `Master ${topic?.title} with 1500+ curated interview questions, MCQs, and system design problems. Structured roadmap from Beginner to MNC level.`,
    keywords: [
      `${topic?.title} interview questions`,
      `${topic?.title} interview questions and answers`,
      `${topic?.title} interview questions for freshers`,
      `${topic?.title} interview questions for experienced`,
      `${topic?.title} interview preparation`,
      `${topic?.title} interview guide`,
      `${topic?.title} interview tips`,
      `${topic?.title} interview cheatsheet`,
      `${topic?.title} MCQ`,
      `${topic?.title} MCQs with answers`,
      `${topic?.title} quiz`,
      `${topic?.title} coding interview`,
      `${topic?.title} coding questions`,
      `${topic?.title} coding problems`,
      `${topic?.title} coding challenges`,
      `${topic?.title} practical interview questions`,
      `${topic?.title} viva questions`,
      `${topic?.title} online test`,
      `${topic?.title} aptitude questions`,
      `${topic?.title} multiple choice questions`,
      `${topic?.title} programming questions`,
      `${topic?.title} examples`,
      `${topic?.title} tutorial`,
      `${topic?.title} notes`,
      `${topic?.title} explained`,
      `${topic?.title} roadmap`,
      `${topic?.title} concepts`,
      `${topic?.title} fundamentals`,
      `${topic?.title} advanced interview questions`,
      `${topic?.title} real interview questions`,
      `${topic?.title} top interview questions`,
      `${topic?.title} most asked interview questions`,
      `${topic?.title} latest interview questions`,
      `${topic?.title} placement questions`,
      `${topic?.title} campus placement questions`,
      `${topic?.title} Google interview questions`,
      `${topic?.title} Amazon interview questions`,
      `${topic?.title} Microsoft interview questions`,
      `${topic?.title} TCS interview questions`,
      `${topic?.title} Infosys interview questions`,
      `${topic?.title} Accenture interview questions`,
      `${topic?.title} Capgemini interview questions`,
      `${topic?.title} Wipro interview questions`,
      "technical interview preparation",
      "software developer interview questions",
      "coding interview preparation",
      "coding interview practice",
      "programming interview questions",
      "system design interview",
      "data structures interview questions",
      "algorithms interview questions",
      "frontend interview questions",
      "backend interview questions",
      "full stack interview questions",
      "computer science interview questions",
      "IT interview questions",
      "job interview preparation",
      "placement interview questions",
      "software engineering interview",
      "developer interview questions",
      "MNC interview questions",
    ],
    alternates: {
      canonical: `https://www.devcalc.in/interview-questions/${slug}`,
    },
    openGraph: {
      title: `${topic?.title} Interview Prep | DevCalc`,
      description: `Structured ${topic?.title} roadmap from Beginner to MNC level. 1500+ questions with full explanations.`,
      url: `https://www.devcalc.in/interview-questions/${slug}`,
      siteName: "DevCalc",
      type: "website",
    },
  };
}
