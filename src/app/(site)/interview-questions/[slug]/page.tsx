/**
 * app/interview-questions/[slug]/page.tsx
 * Professional Technology Overview Page — Premium Learning Platform UI
 * BUG FIX: FAQS now correctly interpolate topic.title at render time.
 */

import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { interviewTopics } from "@/src/data/interview";
import { getInterviewQuestions } from "@/src/data/interview/questions";
import Breadcrumb from "@/src/components/seo/Breadcrumb";
import BreadcrumbSchema from "@/src/components/seo/BreadcrumbSchema";
import { Lock, Unlock, ChevronRight } from "lucide-react";
import TopCompanies from "@/src/components/interview/TopCompanies";
import FAQSection from "@/src/components/calculator/FAQSection";
import FAQSchema from "@/src/components/seo/FAQSchema";
import OmagelPromoBanner from "@/src/components/common/OmagelPromoBanner";

import { InterviewTopicCard } from '@/src/components/interview/InterviewTopicCard';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return interviewTopics.map((topic) => ({ slug: topic.slug }));
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

function getTopicFaqs(slug: string) {
  return TOPIC_SPECIFIC_FAQS[slug.toLowerCase()] ?? [];
}
export default async function TopicOverviewPage({ params }: Props) {
  const { slug } = await params;
  const topic = interviewTopics.find((t) => t.slug === slug);
  if (!topic) return notFound();

  const relatedTopics = interviewTopics
    .filter((item) => item.slug !== topic.slug)
    .slice(0, 4);

  const faqs = getTopicFaqs(slug);
  const questionsByStage = STAGES.map((stage) => ({
    ...stage,
    questions: getInterviewQuestions(slug, stage.id),
  }));
  const allQuestions = questionsByStage.flatMap((stage) => stage.questions);
  const topicTags = [...new Set(allQuestions.flatMap((question) => question.tags))].slice(0, 16);
  const sampleQuestions = questionsByStage.flatMap((stage) =>
    stage.questions.slice(0, 2).map((question) => ({
      ...question,
      stageTitle: stage.title,
    })),
  );



  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-8">
        {faqs.length > 0 && <FAQSchema faqs={faqs} />}
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

        <OmagelPromoBanner />

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
        <section className="mx-auto mt-10 max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-10">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            What is covered in this {topic.title} question bank
          </h2>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            The collection currently contains {allQuestions.length} questions across four difficulty stages. The coverage below is derived from the questions themselves, rather than a generic interview syllabus.
          </p>

          <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {questionsByStage.map((stage) => (
              <div key={stage.id} className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/60">
                <dt className="font-semibold text-slate-900 dark:text-white">{stage.title}</dt>
                <dd className="mt-1 text-sm text-slate-600 dark:text-slate-300">{stage.questions.length} questions</dd>
              </div>
            ))}
          </dl>

          <h3 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Concepts represented</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {topicTags.map((tag) => (
              <li key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-800 dark:bg-blue-950 dark:text-blue-300">{tag}</li>
            ))}
          </ul>

          <h3 className="mt-8 text-xl font-bold text-slate-900 dark:text-white">Sample questions</h3>
          <ol className="mt-4 grid gap-4 md:grid-cols-2">
            {sampleQuestions.map((question) => (
              <li key={question.id} className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
                <span className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-400">
                  {question.stageTitle} · {question.category}
                </span>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{question.question}</p>
              </li>
            ))}
          </ol>
        </section>

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
        {faqs.length > 0 && (
          <section className="mt-20 mb-2">
            <FAQSection faqs={faqs} />
          </section>
        )}
      </div>
    </main>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = interviewTopics.find((t) => t.slug === slug);
  if (!topic) {
    return { robots: { index: false, follow: false } };
  }
  return {
    title: `${topic.title} Interview Questions & Coding Guide`,
    description: topic
      ? `Practice ${topic.totalQuestions} ${topic.title} interview questions across beginner, intermediate, advanced, and MNC stages, with explanations and topic-specific coverage.`
      : "Technical interview questions and explanations.",
    alternates: {
      canonical: `https://www.devcalc.in/interview-questions/${slug}`,
    },
    openGraph: {
      title: `${topic.title} Interview Prep | DevCalc`,
      description: topic
        ? `${topic.totalQuestions} ${topic.title} questions organized from beginner through MNC level, with answer explanations.`
        : "Technical interview questions and explanations.",
      url: `https://www.devcalc.in/interview-questions/${slug}`,
      siteName: "DevCalc",
      type: "website",
    },
  };
}
