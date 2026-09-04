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

import { InterviewTopicCard } from '@/src/components/interview/InterviewTopicCard';

interface Props {
  params: Promise<{ slug: string }>;
}

const STAGES = [
  {
    id: "beginner",
    title: "Beginner",
    desc: "Core fundamentals, syntax, data types, and primary language building blocks.",
    unlocked: true,
  },
  {
    id: "intermediate",
    title: "Intermediate",
    desc: "Asynchronous workflows, memory behavior, standard libraries, and common design patterns.",
    unlocked: true,
  },
  {
    id: "advanced",
    title: "Advanced",
    desc: "Internal runtime mechanics, performance profiling, concurrency, and architecture.",
    unlocked: true,
  },
  {
    id: "mnc",
    title: "MNC Level",
    desc: "Large-scale system design, distributed constraints, resilience, and FAANG-style trade-offs.",
    unlocked: true,
  },
];

const TOPIC_SPECIFIC_FAQS: Record<
  string,
  Array<{ question: string; answer: string }>
> = {
  javascript: [
    {
      question: "How does the JavaScript Event Loop handle microtasks vs macrotasks?",
      answer:
        "The JavaScript runtime executes synchronous code on the call stack first. When the stack clears, the Event Loop drains the entire Microtask Queue (Promise callbacks, queueMicrotask, MutationObserver) before picking a single task from the Macrotask / Task Queue (setTimeout, setInterval, I/O, setImmediate). If microtasks continuously schedule more microtasks, macrotask execution is starved.",
    },
    {
      question: "What is the difference between Prototypal Inheritance and Classical Inheritance?",
      answer:
        "JavaScript uses prototypal inheritance where objects inherit directly from other objects via their [[Prototype]] chain (accessible via Object.getPrototypeOf or __proto__). There are no true classes in the engine; the 'class' syntax introduced in ES6 is syntactic sugar over prototype chains and constructor functions.",
    },
    {
      question: "How does JavaScript Garbage Collection work (Mark-and-Sweep)?",
      answer:
        "Modern V8 engines use generational mark-and-sweep garbage collection. The GC starts at global roots (window/global, call stack, active closures) and traverses references. Unreachable memory in the Young Generation (Scavenge/Nursery) is collected rapidly via Cheney's copying algorithm, while surviving long-lived objects are promoted to the Old Generation and collected via Mark-Sweep-Compact.",
    },
    {
      question: "What is the practical difference between Debouncing and Throttling?",
      answer:
        "Debouncing delays function execution until a specified delay has passed since the last event trigger (ideal for search autocomplete inputs). Throttling enforces a maximum frequency of execution, ensuring the handler runs at most once per defined time interval (ideal for scroll listeners, window resize, and game loops).",
    },
    {
      question: "Why does 0.1 + 0.2 !== 0.3 in JavaScript?",
      answer:
        "JavaScript uses IEEE 754 double-precision 64-bit floating-point arithmetic. Fractions like 0.1 and 0.2 have infinite repeating representations in binary, causing tiny precision rounding errors when summed (yielding 0.30000000000000004). For precise monetary or math calculations, use scaled integers or libraries like decimal.js.",
    },
  ],
  react: [
    {
      question: "How does React 18/19 Concurrent Rendering and Fiber reconciliation work?",
      answer:
        "React Fiber represents the component tree as a linked list of mutable work units. In Concurrent Mode, React breaks rendering into interruptible chunks, allowing higher-priority user inputs (clicks, typing) to pause background render passes (via startTransition or useDeferredValue) and prevent UI freezing.",
    },
    {
      question: "What is the difference between useMemo, useCallback, and React.memo?",
      answer:
        "React.memo is a higher-order component that skips re-rendering a child if its props have not shallowly changed. useCallback memoizes a function definition between renders so child props remain referentially equal. useMemo caches the computed result of an expensive calculation across renders.",
    },
    {
      question: "Why should React state never be mutated directly?",
      answer:
        "React relies on reference equality (Object.is) to detect state changes and schedule re-renders. Directly mutating state objects/arrays preserves the existing memory reference, causing React's reconciliation cycle to miss the update and resulting in stale UI, broken devtools time-travel, and erratic concurrent behavior.",
    },
    {
      question: "What is the difference between Server Components (RSC) and Client Components?",
      answer:
        "React Server Components execute solely on the server, send zero JavaScript to the client bundle, and can directly access databases, file systems, and server secrets. Client Components ('use client') run on both server (for SSR) and client, supporting interactive state, effects, browser APIs, and event listeners.",
    },
  ],
  node: [
    {
      question: "How does Node.js achieve high concurrency despite being single-threaded?",
      answer:
        "Node.js runs your JavaScript code on a single main thread via V8, but delegates asynchronous I/O, file system access, network sockets, DNS queries, and cryptographic operations to the underlying C library libuv. Libuv utilizes operating system kernel notification primitives (epoll, kqueue, IOCP) and an internal thread pool to handle non-blocking operations efficiently.",
    },
    {
      question: "What causes Event Loop blockages in Node.js production servers?",
      answer:
        "CPU-intensive tasks (complex regex execution with catastrophic backtracking, heavy JSON parsing of multi-megabyte payloads, synchronous fs operations like fs.readFileSync, and heavy cryptographic hashing) run directly on the main thread, freezing the event loop and delaying all incoming HTTP requests.",
    },
    {
      question: "What is the difference between process.nextTick() and setImmediate()?",
      answer:
        "Callbacks passed to process.nextTick() execute immediately after the current phase completes and before the Event Loop advances to any other phase. setImmediate() callbacks run in the 'Check' phase of the Event Loop (after I/O callbacks).",
    },
  ],
  sql: [
    {
      question: "What is the difference between Clustered and Non-Clustered Indexes?",
      answer:
        "A Clustered Index physically dictates the on-disk sorting and storage order of table data (a table can have only one clustered index, usually the Primary Key). A Non-Clustered Index creates a separate B-tree structure holding index key values with row pointers back to the actual data rows.",
    },
    {
      question: "How do ACID properties guarantee transactional reliability in relational databases?",
      answer:
        "Atomicity ensures all statements in a transaction succeed or all roll back. Consistency guarantees database constraints and foreign keys remain valid. Isolation ensures concurrent transactions do not interfere. Durability guarantees committed data survives system crashes via Write-Ahead Logging (WAL).",
    },
    {
      question: "What is the difference between WHERE and HAVING clauses?",
      answer:
        "The WHERE clause filters individual rows before any grouping or aggregation takes place. The HAVING clause filters aggregated group results produced by a GROUP BY clause.",
    },
  ],
  typescript: [
    {
      question: "What is the difference between 'type' and 'interface' in TypeScript?",
      answer:
        "Both define object structures, but 'interface' supports declaration merging (adding fields across multiple interface blocks with the same name) and is preferred for public API models. 'type' aliases are more flexible and support union types, primitive aliases, tuple definitions, mapped types, and conditional types.",
    },
    {
      question: "What is the difference between 'unknown' and 'any'?",
      answer:
        "'any' turns off all type checking, allowing arbitrary property accesses and assignments. 'unknown' is the type-safe counterpart; it accepts any value, but TypeScript forces you to perform type narrowing before invoking methods or properties on it.",
    },
    {
      question: "How do Discriminated Unions work in TypeScript?",
      answer:
        "A Discriminated Union combines multiple object types that share a common literal discriminant property. When matching on that property inside a switch or if statement, TypeScript automatically narrows the remaining properties to the specific subtype.",
    },
  ],
  python: [
    {
      question: "What is the Global Interpreter Lock (GIL) in CPython and how does it affect concurrency?",
      answer:
        "The GIL is a mutex that prevents multiple native OS threads from executing Python bytecode simultaneously within a single CPython process. While it protects CPython's reference-counting memory management from race conditions, it limits multi-threaded CPU-bound programs to a single CPU core. CPU-bound concurrency requires the multiprocessing module.",
    },
    {
      question: "How do Python Generators and the 'yield' keyword save memory?",
      answer:
        "Generators produce items lazily on-demand one at a time using 'yield' instead of constructing entire collections in RAM. When 'yield' is encountered, execution state is paused and saved. This allows streaming multi-gigabyte files with O(1) memory consumption.",
    },
    {
      question: "What is the difference between 'is' and '==' in Python?",
      answer:
        "'==' compares equality of values (invoking __eq__), whereas 'is' checks reference identity (whether both variables point to the exact same object in memory, comparing id(a) == id(b)).",
    },
  ],
};

function buildFaqs(topicTitle: string, slug: string) {
  const specific = TOPIC_SPECIFIC_FAQS[slug.toLowerCase()];
  if (specific && specific.length > 0) {
    return [
      ...specific,
      {
        question: `How should I prepare for a ${topicTitle} technical interview?`,
        answer:
          "Master core language primitives, practice timed MCQ assessments to test edge cases, and build working projects. When answering coding questions, always discuss time/space complexity (Big O) and explain edge case handling upfront.",
      },
      {
        question: `Can I practice all ${topicTitle} stages (Beginner to MNC) for free?`,
        answer:
          "Yes, all DevCalc interview stages are completely free and open. You can attempt Beginner, Intermediate, Advanced, and MNC stages directly with detailed explanations for every question.",
      },
      {
        question: "How many attempts do I get per stage?",
        answer:
          "Unlimited. You can retake any stage as many times as needed. On each attempt, questions and options are shuffled to reinforce conceptual learning rather than rote memorization.",
      },
    ];
  }

  return [
    {
      question: `What are the core ${topicTitle} concepts evaluated in technical interviews?`,
      answer:
        `Interviewers assess syntax precision, memory lifecycle management, algorithmic efficiency, error handling, and production debugging patterns in ${topicTitle}.`,
    },
    {
      question: `What is the difference between fresher and senior ${topicTitle} interview questions?`,
      answer:
        `Fresher interviews emphasize syntax, foundational algorithms, and core language structures. Senior interviews delve into concurrency, performance optimization, architectural trade-offs, and distributed systems integration.`,
    },
    {
      question: `Are these ${topicTitle} questions aligned with top MNC hiring assessments?`,
      answer:
        `Yes. Questions are curated from real technical screening patterns used at global tech companies, service-based MNCs, and high-growth product startups.`,
    },
    {
      question: `Can I attempt all ${topicTitle} interview stages for free?`,
      answer:
        `Yes. DevCalc provides completely free access to Beginner, Intermediate, Advanced, and MNC level interview quizzes with comprehensive answer explanations.`,
    },
    {
      question: "How does practicing MCQs help in technical interview preparation?",
      answer:
        "MCQs with realistic distractors test edge cases, operator precedence, type coercion, and execution lifecycles that verbal questions often overlook, sharpening your technical precision.",
    },
  ];
}

export default async function TopicOverviewPage({ params }: Props) {
  const { slug } = await params;
  const topic = interviewTopics.find((t) => t.slug === slug);
  if (!topic) return notFound();

  const relatedTopics = interviewTopics
    .filter((item) => item.slug !== topic.slug)
    .slice(0, 4);

  const faqs = buildFaqs(topic.title, slug);


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
            <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6">
              {topic.title} Interview Questions, MCQs & Complete Preparation
              Roadmap
            </h2>
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

        <section className="mt-20">
  <div className="mb-8 text-center">
    <h2 className="text-3xl font-bold">
      Continue Your Interview Preparation
    </h2>

    <p className="mt-3 text-slate-600 dark:text-slate-400">
      Explore other popular interview topics and strengthen your full-stack development skills.
    </p>
  </div>

  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
    {relatedTopics.map((item) => (
      <InterviewTopicCard
        key={item.id}
        topic={item}
      />
    ))}
  </div>
</section>

        <TopCompanies />

        {/* FAQ */}
        <section className="mt-20 mb-2">
          <FAQSection
            faqs={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
          />
          
        </section>
      </div>
    </main>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = interviewTopics.find((t) => t.slug === slug);
  return {
    title: `${topic?.title} Interview Questions & Coding Guide`,
   description:
  `New to ${topic?.title} or brushing up for an MNC interview? Practice 1500+ curated questions and MCQs — structured from beginner basics to advanced system design. Free and no sign-up.`,
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
