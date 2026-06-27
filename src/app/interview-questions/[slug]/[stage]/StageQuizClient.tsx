/**
 * app/interview-questions/[slug]/[stage]/StageQuizClient.tsx
 * Client Component — all interactive quiz logic preserved exactly
 */

"use client";

import React, { useState, useCallback } from "react";
import { notFound, useRouter } from "next/navigation";
import { InterviewQuiz } from "@/src/components/interview/InterviewQuiz";
import { StageLocked } from "@/src/components/interview/StageLocked";
import { QuizResult } from "@/src/components/interview/QuizResult";
import Breadcrumb from "@/src/components/seo/Breadcrumb";
import BreadcrumbSchema from "@/src/components/seo/BreadcrumbSchema";

import {
  getProgress,
  checkStageAccess,
  getNextStage,
  saveStageCompletion,
} from "@/src/lib/interview/interview-progress";
import {
  InterviewStage,
  InterviewQuestion,
  InterviewProgress,
} from "@/src/types/interview";

import { javascriptQuestions } from "@/src/data/interview/javascript/javascript";
import { reactQuestions } from "@/src/data/interview/react/react";
import { nodeQuestions } from "@/src/data/interview/nodeJS/node";
import { sqlQuestions } from "@/src/data/interview/sql/sql";
import { typescriptQuestions } from "@/src/data/interview/typescript/typescript";
import { cppQuestions } from "@/src/data/interview/C++/c++";

const MOCK_DB: Record<string, InterviewQuestion[]> = {
  javascript: javascriptQuestions,
  react: reactQuestions,
  node: nodeQuestions,
  sql: sqlQuestions,
  typescript: typescriptQuestions,
  cpp: cppQuestions,
};

const STAGE_ORDER: InterviewStage[] = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "MNC",
];

interface QuizResultData {
  score: number;
  userAnswers: Record<string, string>;
  timeTaken: number;
}

interface Props {
  slug: string;
  stage: string;
}

export default function StageQuizClient({ slug, stage }: Props) {
  const router = useRouter();

  const normalizedStage = (stage.charAt(0).toUpperCase() +
    stage.slice(1)) as InterviewStage;
  const nextStage = getNextStage(normalizedStage);
  const isFinalStage = normalizedStage === "MNC";

  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizResultData | null>(null);
  const [userProgress, setUserProgress] = useState<InterviewProgress | null>(
    () => (typeof window !== "undefined" ? getProgress(slug) : null),
  );
  const [isLoading] = useState(false);

  const refreshProgress = useCallback(() => {
    setUserProgress(getProgress(slug));
  }, [slug]);

  const isLocked = !checkStageAccess(normalizedStage, userProgress);

  const questions = (MOCK_DB[slug] ?? []).filter(
    (q) => q.stage.toLowerCase() === stage.toLowerCase(),
  );

  const topicTitle = slug.charAt(0).toUpperCase() + slug.slice(1);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Loading quiz…
          </p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) return notFound();

  // ── Handlers ────────────────────────────────────────────────────────────

  const handleComplete = (result: QuizResultData) => {
    const passed = result.score >= questions.length * 0.5;
    if (passed) {
      const percentage = Math.round((result.score / questions.length) * 100);
      saveStageCompletion(slug, normalizedStage, percentage);
      refreshProgress();
    }
    setQuizResult(result);
    setIsQuizComplete(true);
  };

  const handleRetry = () => {
    setQuizResult(null);
    setIsQuizComplete(false);
  };

  const handleNextStage = () => {
    if (nextStage) {
      router.push(`/interview-questions/${slug}/${nextStage.toLowerCase()}`);
    }
  };

  // ── Breadcrumb Data ──────────────────────────────────────────────────────

  const breadcrumbItems = [
    { label: "Interview", href: "/interview-questions" },
    {
      label: topicTitle,
      href: `/interview-questions/${slug}`,
    },
    { label: normalizedStage },
  ];

  const breadcrumbSchema = [
    { name: "Home", url: "/" },
    { name: "Interview Questions", url: "/interview-questions" },
    { name: slug, url: `/interview-questions/${slug}` },
    { name: normalizedStage, url: `/interview-questions/${slug}/${stage}` },
  ];

  // ── Locked View ──────────────────────────────────────────────────────────

  if (isLocked) {
    const prevStageIndex = STAGE_ORDER.indexOf(normalizedStage) - 1;
    const prevStage = prevStageIndex >= 0 ? STAGE_ORDER[prevStageIndex] : null;

    return (
      <main className="min-h-screen flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-950">
        <StageLocked
          reason={`Complete the ${prevStage ?? "previous"} stage with 50% or above to unlock ${normalizedStage}.`}
          onContinuePrevious={() =>
            prevStage
              ? router.push(
                  `/interview-questions/${slug}/${prevStage.toLowerCase()}`,
                )
              : router.push(`/interview-questions/${slug}`)
          }
          previousStageTitle={prevStage ?? undefined}
        />
      </main>
    );
  }

  // ── Quiz / Result View ───────────────────────────────────────────────────

  const isPassed = quizResult
    ? quizResult.score >= questions.length * 0.5
    : false;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      <BreadcrumbSchema items={breadcrumbSchema} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <Breadcrumb items={breadcrumbItems} />

        {!isQuizComplete && (
          <header className="mb-8 mt-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">
              {topicTitle}
            </p>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white capitalize">
              {normalizedStage} Interview Quiz
            </h1>
          </header>
        )}

        {isQuizComplete && quizResult ? (
          <div className="mt-6">
            <QuizResult
              score={quizResult.score}
              total={questions.length}
              timeTaken={quizResult.timeTaken}
              isPassed={isPassed}
              onRetry={handleRetry}
              onNextStage={handleNextStage}
              nextStageTitle={nextStage ?? undefined}
              questions={questions}
              userAnswers={quizResult.userAnswers}
              isFinalStage={isFinalStage}
              slug={slug}
            />
          </div>
        ) : (
          <InterviewQuiz
            slug={slug}
            questions={questions}
            onComplete={handleComplete}
            onNextStage={handleNextStage}
            nextStageTitle={nextStage ?? undefined}
          />
        )}

        {/* ── SEO Article ─────────────────────────────────────────────── */}
        <article
          className="
            mt-12 md:mt-16
            rounded-3xl
            border border-slate-200 dark:border-slate-800
            bg-white dark:bg-slate-900
            p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12
            shadow-sm
            prose prose-slate dark:prose-invert max-w-none
            prose-headings:font-bold
            prose-headings:text-slate-900 dark:prose-headings:text-white
            prose-p:text-slate-700 dark:prose-p:text-slate-300
            prose-li:text-slate-700 dark:prose-li:text-slate-300
            prose-strong:text-slate-900 dark:prose-strong:text-white
            prose-ul:my-6 prose-ul:space-y-2
            prose-li:marker:text-blue-600
          "
        >
          {/* ── Hero heading ── */}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 leading-tight">
            {normalizedStage} {topicTitle} Interview Questions and Answers
            — Complete Preparation Guide {new Date().getFullYear()}
          </h2>

          <p className="text-base md:text-lg leading-8 mb-4">
            This comprehensive guide covers every important{" "}
            <strong>
              {normalizedStage} {topicTitle} interview question
            </strong>{" "}
            you are likely to encounter during technical assessments, online
            tests, and face-to-face coding rounds at product-based companies,
            service-based MNCs, and high-growth startups. Whether you are a
            fresher attending your first campus placement drive or an
            experienced software engineer preparing for a senior role, this
            guide will help you build the depth and confidence required to
            perform well under real interview conditions.
          </p>

          <p className="text-base md:text-lg leading-8 mb-6">
            Technical interviews at companies like Google, Microsoft, Amazon,
            Meta, Adobe, Atlassian, Flipkart, Walmart Global Tech, Razorpay,
            Zepto, CRED, TCS, Infosys, Wipro, Cognizant, Capgemini, Accenture,
            HCL, and Deloitte follow structured evaluation frameworks. They test
            not just your knowledge of{" "}
            <strong>{topicTitle}</strong> syntax and APIs but also your ability
            to reason about trade-offs, debug unfamiliar code, design scalable
            systems, and communicate your thought process clearly within a
            limited time window. This quiz and guide prepare you for all of
            those dimensions simultaneously.
          </p>

          {/* ── What makes this stage unique ── */}
          <h3 className="text-2xl font-semibold mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            What the {normalizedStage} Stage Means for Your Interview Readiness
          </h3>

          <p className="text-base md:text-lg leading-8 mb-4">
            The {normalizedStage} level in our structured roadmap is
            deliberately positioned to match the difficulty band that real
            interviewers use when evaluating candidates for{" "}
            {normalizedStage === "Beginner"
              ? "entry-level and fresher roles"
              : normalizedStage === "Intermediate"
              ? "mid-level software engineering positions with one to three years of experience"
              : normalizedStage === "Advanced"
              ? "senior and lead engineering roles requiring deep architectural understanding"
              : "principal engineer, staff engineer, and MNC-level system design rounds"}{" "}
            in {topicTitle}. Each question at this stage is drawn from actual
            interview patterns observed across hundreds of hiring cycles at
            top-tier technology organizations.
          </p>

          <p className="text-base md:text-lg leading-8 mb-6">
            {normalizedStage === "Beginner" &&
              `At the Beginner level, interviewers focus on whether you have a solid mental model of ${topicTitle} fundamentals. They want to see that you understand core concepts, can write syntactically correct code, and are able to explain the purpose of the basic building blocks of the language or framework. Mistakes at this level are usually conceptual — candidates either skip foundational topics assuming they are too simple, or they memorize definitions without truly understanding how things work under the hood.`}
            {normalizedStage === "Intermediate" &&
              `At the Intermediate level, interviewers expect you to move beyond definitions and demonstrate practical understanding. Questions involve real-world scenarios where you must choose between multiple valid approaches and justify your decision. You are expected to understand performance implications, common anti-patterns, state management complexities, and asynchronous behavior in ${topicTitle}. Simply knowing what something is is no longer sufficient — you must know when and why to use it.`}
            {normalizedStage === "Advanced" &&
              `At the Advanced level, interviews become architectural conversations. Interviewers present complex, open-ended engineering challenges and evaluate how you break them down, identify constraints, propose solutions, and handle edge cases. Deep knowledge of ${topicTitle} internals, memory management, concurrency, performance optimization, and design patterns is expected. Candidates who reach this stage and succeed typically have extensive hands-on experience building and maintaining production systems.`}
            {normalizedStage === "MNC" &&
              `The MNC level represents the highest difficulty tier — the type of questions asked during final rounds at FAANG, unicorn startups, and elite product companies. Interviews at this level combine deep ${topicTitle} expertise with system design, distributed systems thinking, scalability trade-offs, and the ability to evaluate solutions across multiple technical and business dimensions. You are expected to lead the conversation, ask the right clarifying questions, and produce a well-reasoned, well-structured answer under significant time pressure.`}
          </p>

          {/* ── Core concepts ── */}
          <h3 className="text-2xl font-semibold mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            Core {topicTitle} Concepts Tested at the {normalizedStage} Level
          </h3>

          <p className="text-base md:text-lg leading-8 mb-4">
            Understanding which specific areas of {topicTitle} are most
            frequently evaluated at the {normalizedStage} level allows you to
            prioritize your preparation effectively. Based on patterns observed
            across thousands of real interview sessions, the following topic
            clusters appear most consistently in {normalizedStage}-level{" "}
            {topicTitle} interviews:
          </p>

          <ul className="grid gap-3 sm:grid-cols-2 my-6 list-disc pl-6">
            <li>
              Foundational {topicTitle} syntax, data types, and language
              primitives
            </li>
            <li>
              Memory management, garbage collection, and resource cleanup
              strategies
            </li>
            <li>
              Asynchronous programming patterns, event loops, and concurrency
              models
            </li>
            <li>
              Object-oriented and functional programming paradigms in{" "}
              {topicTitle}
            </li>
            <li>
              Error handling, exception propagation, and defensive coding
              techniques
            </li>
            <li>
              Performance profiling, bottleneck identification, and optimization
              strategies
            </li>
            <li>
              Design patterns and their practical application in {topicTitle}
              codebases
            </li>
            <li>
              Testing strategies including unit testing, integration testing,
              and test-driven development
            </li>
            <li>
              Security vulnerabilities and best practices specific to{" "}
              {topicTitle} applications
            </li>
            <li>
              Code review standards, refactoring approaches, and maintainability
              principles
            </li>
            <li>
              Common {topicTitle} libraries, frameworks, and ecosystem tooling
            </li>
            <li>
              Real-world scenario-based questions drawn from production
              engineering challenges
            </li>
          </ul>

          {/* ── Why interviewers ask MCQs ── */}
          <h3 className="text-2xl font-semibold mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            Why Companies Use MCQ-Based Assessments for {topicTitle} Interviews
          </h3>

          <p className="text-base md:text-lg leading-8 mb-4">
            Multiple choice question assessments have become a standard
            screening tool for technology companies because they allow hiring
            teams to evaluate a large pool of candidates quickly and
            consistently. At the {normalizedStage} level, MCQs are specifically
            designed to distinguish candidates who have surface-level familiarity
            with {topicTitle} from those who have genuine conceptual depth.
          </p>

          <p className="text-base md:text-lg leading-8 mb-4">
            Well-crafted MCQs at this level include deliberately plausible
            distractors — incorrect options that look correct to someone who has
            only skimmed the documentation. To consistently choose the right
            answer, you need to understand not just the correct behavior but also
            why the other options are wrong. This is exactly the kind of
            reasoning that interviewers want to see when they follow up MCQ
            rounds with verbal explanation requests or live coding exercises.
          </p>

          <p className="text-base md:text-lg leading-8 mb-6">
            Companies including TCS, Infosys, Wipro, Cognizant, and Capgemini
            use automated MCQ platforms like HackerRank, Mettl, AMCAT, and
            CoCubes to conduct initial screening rounds. Product companies like
            Google, Microsoft, and Amazon use MCQ-style questions in their
            online assessment portals before inviting candidates for technical
            phone screens. Performing well in this quiz directly translates to
            better outcomes in those real assessment environments.
          </p>

          {/* ── How to use this quiz ── */}
          <h3 className="text-2xl font-semibold mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            How to Use This Quiz for Maximum Interview Preparation Benefit
          </h3>

          <p className="text-base md:text-lg leading-8 mb-4">
            Simply answering questions and checking your score is the least
            effective way to use this quiz. To extract maximum preparation value,
            adopt the following evidence-based study approach that experienced
            interview coaches recommend for technical assessments:
          </p>

          <p className="text-base md:text-lg leading-8 mb-4">
            <strong>First pass — attempt without preparation.</strong> Take the
            quiz cold before studying any material. Your raw score reveals your
            genuine baseline knowledge and immediately identifies which topic
            areas have the largest gaps. This is far more efficient than trying
            to study everything uniformly. Most candidates discover that their
            weak areas are different from what they expected.
          </p>

          <p className="text-base md:text-lg leading-8 mb-4">
            <strong>
              Second pass — review every explanation, not just wrong answers.
            </strong>{" "}
            After your first attempt, read the explanation for every single
            question — including the ones you answered correctly. It is common
            to select the right answer for the wrong reason. The explanations
            reveal the precise conceptual reasoning that interviewers expect you
            to be able to articulate verbally.
          </p>

          <p className="text-base md:text-lg leading-8 mb-4">
            <strong>Third pass — targeted study and re-attempt.</strong> After
            reviewing explanations, spend time studying the specific {topicTitle}{" "}
            concepts where you made errors. Then retake the quiz with reshuffled
            questions and options. The shuffle ensures you are not relying on
            position memory. Your score on this third attempt is a much more
            accurate measure of genuine readiness.
          </p>

          <p className="text-base md:text-lg leading-8 mb-6">
            <strong>Fourth pass — verbal explanation practice.</strong> For each
            question in the quiz, practice explaining the correct answer out
            loud as if you were speaking to an interviewer. This is the single
            most underused preparation technique. Candidates who can explain{" "}
            {topicTitle} concepts clearly in their own words perform
            dramatically better in live technical interviews than those who can
            only recognize the right answer in a multiple-choice format.
          </p>

          {/* ── Stage-specific preparation strategy ── */}
          <h3 className="text-2xl font-semibold mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            {normalizedStage}-Level {topicTitle} Interview Preparation Strategy
          </h3>

          <p className="text-base md:text-lg leading-8 mb-4">
            A targeted preparation strategy aligned with the {normalizedStage}{" "}
            difficulty level is significantly more effective than generic study
            plans. The following week-by-week roadmap is designed specifically
            for candidates preparing for {normalizedStage}-level {topicTitle}{" "}
            interviews over a four-week period:
          </p>

          <p className="text-base md:text-lg leading-8 mb-3">
            <strong>Week 1 — Concept consolidation.</strong>{" "}
            {normalizedStage === "Beginner"
              ? `Cover all foundational ${topicTitle} concepts systematically. Do not skip any topic assuming it is too basic. Foundational gaps are the primary reason candidates fail Beginner-level technical screens. Focus on data types, control flow, functions, scope, and the core execution model of ${topicTitle}.`
              : normalizedStage === "Intermediate"
              ? `Revisit foundational concepts and then systematically study intermediate patterns: closures, higher-order functions, prototypal inheritance, promises, async/await, and common design patterns in ${topicTitle}. Build small projects that force you to apply each concept in a realistic context.`
              : normalizedStage === "Advanced"
              ? `Conduct a deep audit of your ${topicTitle} knowledge. Identify the three or four topic areas where your understanding is weakest and immerse yourself in those areas during week one. Read official documentation, source code comments, and engineering blog posts from companies that use ${topicTitle} at scale.`
              : `Spend week one studying system design fundamentals: distributed systems, consistency models, CAP theorem, load balancing, database sharding, caching strategies, and message queues. These concepts underpin MNC-level ${topicTitle} interview conversations regardless of the specific technical stack.`}
          </p>

          <p className="text-base md:text-lg leading-8 mb-3">
            <strong>Week 2 — Problem solving and pattern recognition.</strong>{" "}
            Solve at least fifteen to twenty {normalizedStage}-level {topicTitle}{" "}
            problems on platforms like LeetCode, HackerRank, and Codeforces.
            Focus on recognizing patterns rather than memorizing solutions.
            After solving each problem, write a brief summary of the approach
            and the key insight that made it work. This habit dramatically
            accelerates pattern recognition in live interviews.
          </p>

          <p className="text-base md:text-lg leading-8 mb-3">
            <strong>Week 3 — Mock interviews and timed practice.</strong>{" "}
            Simulate real interview conditions by solving problems under a
            strict time limit. Conduct mock interviews with peers or use
            platforms like Pramp, Interviewing.io, or CodePair. Record yourself
            explaining solutions and watch the recordings critically. Most
            candidates are unaware of communication habits that negatively
            affect how interviewers perceive their technical competence.
          </p>

          <p className="text-base md:text-lg leading-8 mb-6">
            <strong>
              Week 4 — Review, refinement, and confidence building.
            </strong>{" "}
            Revisit every topic where you made errors during weeks one through
            three. Retake this quiz multiple times until you can consistently
            score above seventy percent. Practice explaining {topicTitle}{" "}
            architectural decisions, trade-off discussions, and debugging
            approaches in clear, structured language. Focus on eliminating
            hesitation and building the calm confidence that interviewers
            associate with senior-level technical competence.
          </p>

          {/* ── Common mistakes ── */}
          <h3 className="text-2xl font-semibold mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            Common Mistakes Candidates Make in {normalizedStage} {topicTitle}{" "}
            Interviews
          </h3>

          <p className="text-base md:text-lg leading-8 mb-4">
            Understanding the most frequent failure modes at the{" "}
            {normalizedStage} level allows you to proactively address them
            before your actual interview. These patterns are observed
            consistently across candidates regardless of their educational
            background or years of experience:
          </p>

          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li className="text-base md:text-lg leading-7">
              <strong>
                Jumping to code before fully understanding the problem.
              </strong>{" "}
              Interviewers consistently rate candidates lower who begin coding
              immediately without asking clarifying questions. Taking two to
              three minutes to confirm the problem constraints, expected input
              and output format, and edge cases signals strong engineering
              maturity.
            </li>
            <li className="text-base md:text-lg leading-7">
              <strong>Confusing familiarity with understanding.</strong> Many
              candidates have used {topicTitle} extensively but have never
              studied its internals. They can write working code but cannot
              explain why it works. Interviewers distinguish between these two
              profiles very quickly through targeted follow-up questions.
            </li>
            <li className="text-base md:text-lg leading-7">
              <strong>Ignoring time and space complexity analysis.</strong> At
              the {normalizedStage} level, every coding solution should be
              accompanied by a complexity analysis. Candidates who cannot
              immediately articulate the Big O characteristics of their solution
              leave a strongly negative impression regardless of whether the
              code itself is correct.
            </li>
            <li className="text-base md:text-lg leading-7">
              <strong>Failing to handle edge cases proactively.</strong> An
              interviewer will almost always probe edge cases — null inputs,
              empty arrays, extremely large inputs, concurrent access scenarios.
              Candidates who wait to be prompted rather than raising these cases
              themselves miss an important opportunity to demonstrate senior
              engineering thinking.
            </li>
            <li className="text-base md:text-lg leading-7">
              <strong>Over-engineering simple solutions.</strong> Particularly
              at the {normalizedStage} level, there is a temptation to
              demonstrate knowledge by introducing unnecessary complexity.
              Interviewers value clarity, simplicity, and maintainability. A
              clean, readable, correct solution is almost always preferred over
              a technically impressive but unnecessarily complex one.
            </li>
            <li className="text-base md:text-lg leading-7">
              <strong>Poor communication under pressure.</strong> Technical
              correctness accounts for only a portion of interview evaluation.
              Communication quality, collaboration instincts, and the ability to
              accept and incorporate feedback in real time are weighted heavily —
              especially for {normalizedStage}-level positions where you will be
              expected to interact with cross-functional teams and mentor junior
              engineers.
            </li>
          </ul>

          {/* ── Who should use ── */}
          <h3 className="text-2xl font-semibold mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            Who Should Attempt the {normalizedStage} {topicTitle} Quiz
          </h3>

          <p className="text-base md:text-lg leading-8 mb-4">
            This quiz is specifically designed for the following candidate
            profiles. If you identify with any of these descriptions, this is
            the right resource for your current preparation stage:
          </p>

          <ul className="grid gap-3 sm:grid-cols-2 my-6 list-disc pl-6">
            {normalizedStage === "Beginner" && (
              <>
                <li>
                  Computer science and engineering students in their final year
                </li>
                <li>Recent graduates attending campus placement drives</li>
                <li>
                  Bootcamp graduates preparing for their first developer role
                </li>
                <li>Career switchers learning {topicTitle} from scratch</li>
                <li>
                  Developers from other languages exploring {topicTitle}
                </li>
                <li>
                  Candidates preparing for service-based MNC written tests
                </li>
                <li>
                  Students appearing for AMCAT, CoCubes, and eLitmus
                  assessments
                </li>
                <li>
                  Anyone who wants to verify their foundational {topicTitle}{" "}
                  knowledge
                </li>
              </>
            )}
            {normalizedStage === "Intermediate" && (
              <>
                <li>
                  Developers with one to three years of {topicTitle} experience
                </li>
                <li>
                  Junior engineers preparing for promotion to mid-level roles
                </li>
                <li>
                  Candidates targeting product-based companies for the first
                  time
                </li>
                <li>
                  Freelancers formalizing their {topicTitle} knowledge base
                </li>
                <li>
                  Developers preparing for HackerRank and technical phone
                  screens
                </li>
                <li>
                  Engineers switching from service-based to product-based
                  companies
                </li>
                <li>
                  Candidates targeting three to eight LPA software engineering
                  roles
                </li>
                <li>
                  Developers who want to move from frontend to full-stack
                  positions
                </li>
              </>
            )}
            {normalizedStage === "Advanced" && (
              <>
                <li>
                  Senior software engineers with three or more years of
                  experience
                </li>
                <li>Tech leads preparing for architect-level interviews</li>
                <li>
                  Developers targeting FAANG and top-tier product companies
                </li>
                <li>
                  Engineers preparing for staff and principal engineer rounds
                </li>
                <li>
                  Candidates targeting fifteen LPA and above compensation
                  packages
                </li>
                <li>
                  Engineers who want to mentor others and need conceptual depth
                </li>
                <li>
                  Developers preparing for system design interview components
                </li>
                <li>
                  Anyone who has failed advanced rounds and wants to identify
                  gaps
                </li>
              </>
            )}
            {normalizedStage === "MNC" && (
              <>
                <li>
                  Principal and staff engineers targeting top global technology
                  firms
                </li>
                <li>
                  Candidates preparing for FAANG final rounds and onsite
                  interviews
                </li>
                <li>
                  Engineering managers returning to individual contributor roles
                </li>
                <li>
                  Developers targeting thirty LPA and above compensation levels
                </li>
                <li>
                  Engineers preparing for distributed systems and design
                  discussions
                </li>
                <li>
                  Senior candidates exploring opportunities at Google,
                  Microsoft, Amazon
                </li>
                <li>
                  Developers with five or more years of {topicTitle} production
                  experience
                </li>
                <li>
                  Anyone preparing for the most competitive technical hiring
                  processes globally
                </li>
              </>
            )}
          </ul>

          {/* ── Real interview experience ── */}
          <h3 className="text-2xl font-semibold mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            What a Real {normalizedStage} {topicTitle} Interview Looks Like
          </h3>

          <p className="text-base md:text-lg leading-8 mb-4">
            Understanding the actual structure and flow of a{" "}
            {normalizedStage}-level {topicTitle} interview helps you prepare for
            the full experience rather than just the technical content. Here is
            a realistic description of how these interviews typically unfold at
            leading technology companies:
          </p>

          <p className="text-base md:text-lg leading-8 mb-4">
            Most {normalizedStage}-level {topicTitle} interviews begin with a
            brief introduction and a warm-up question designed to gauge your
            communication style and basic familiarity with the topic. This is
            followed by two to three core technical questions that progressively
            increase in complexity. The interviewer will often provide hints or
            redirect the conversation if you get stuck — your response to these
            hints is itself an evaluation criterion. Candidates who incorporate
            feedback gracefully and adjust their approach quickly signal strong
            collaborative instincts.
          </p>

          <p className="text-base md:text-lg leading-8 mb-4">
            In the middle portion of the interview, you will typically be asked
            to write actual code — either in a shared editor, on a whiteboard,
            or on paper depending on the interview format. At the{" "}
            {normalizedStage} level, the interviewer is evaluating code quality,
            variable naming, function decomposition, and the overall structure
            of your solution in addition to its correctness. Comments,
            meaningful variable names, and logical function boundaries matter.
          </p>

          <p className="text-base md:text-lg leading-8 mb-6">
            The final portion of a {normalizedStage} {topicTitle} interview
            usually involves a discussion of trade-offs, alternative approaches,
            and real-world applicability of your solution. You may be asked how
            you would modify your approach if the input size increased by a
            factor of one thousand, or how you would handle this problem in a
            multi-threaded environment. These discussion questions are where
            truly strong candidates differentiate themselves from average ones.
          </p>

          {/* ── Companies that test this ── */}
          <h3 className="text-2xl font-semibold mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            Companies That Test {topicTitle} at the {normalizedStage} Level
          </h3>

          <p className="text-base md:text-lg leading-8 mb-4">
            The following companies are known to include {normalizedStage}-level{" "}
            {topicTitle} questions in their technical interview and assessment
            processes. Their hiring patterns have directly informed the
            questions included in this quiz:
          </p>

          <p className="text-base md:text-lg leading-8 mb-4">
            <strong>Global product companies:</strong> Google, Microsoft,
            Amazon, Meta, Apple, Netflix, Uber, Airbnb, LinkedIn, Twitter,
            Stripe, Shopify, Atlassian, Salesforce, Oracle, Adobe, and Intuit
            regularly evaluate {topicTitle} knowledge at the {normalizedStage}{" "}
            level during their multi-stage technical interview processes.
          </p>

          <p className="text-base md:text-lg leading-8 mb-4">
            <strong>Indian product companies and unicorns:</strong> Flipkart,
            Razorpay, CRED, Zepto, Swiggy, Zomato, PhonePe, Paytm, Meesho,
            BrowserStack, Freshworks, Chargebee, Postman, and Innovaccer include{" "}
            {topicTitle} assessments as part of their engineering hiring
            pipelines across multiple experience levels.
          </p>

          <p className="text-base md:text-lg leading-8 mb-6">
            <strong>Service-based MNCs:</strong> TCS, Infosys, Wipro, Cognizant,
            Capgemini, Accenture, HCL Technologies, Tech Mahindra, Mphasis,
            LTIMindtree, and Hexaware use {topicTitle} MCQ assessments during
            mass recruitment drives, lateral hiring processes, and internal
            skill certification programs for career progression.
          </p>

          {/* ── Structured roadmap ── */}
          <h3 className="text-2xl font-semibold mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            The Complete {topicTitle} Interview Preparation Roadmap
          </h3>

          <p className="text-base md:text-lg leading-8 mb-4">
            Our four-stage structured roadmap is designed to take you from
            foundational knowledge to enterprise-level interview readiness in a
            logical, progressive sequence. Each stage builds directly on the one
            before it, ensuring that you have genuine depth rather than isolated
            pockets of knowledge:
          </p>

          <p className="text-base md:text-lg leading-8 mb-3">
            <strong>Beginner Stage</strong> — Establishes the complete
            foundational knowledge base required for all subsequent learning.
            Covers {topicTitle} syntax, core data structures, control flow,
            functions, scope, and the fundamental execution model. Passing this
            stage with fifty percent or above unlocks the Intermediate stage.
          </p>

          <p className="text-base md:text-lg leading-8 mb-3">
            <strong>Intermediate Stage</strong> — Builds practical engineering
            judgment on top of the foundational knowledge established at the
            Beginner level. Covers design patterns, asynchronous programming,
            state management, error handling strategies, and performance
            considerations. Questions at this level require you to choose
            between multiple valid approaches and justify your decision.
          </p>

          <p className="text-base md:text-lg leading-8 mb-3">
            <strong>Advanced Stage</strong> — Develops the architectural
            thinking and deep technical expertise required for senior
            engineering roles. Covers {topicTitle} internals, concurrency,
            memory optimization, complex design patterns, and large-scale
            application architecture. Questions at this level reflect the
            problems that senior engineers encounter in production systems.
          </p>

          <p className="text-base md:text-lg leading-8 mb-6">
            <strong>MNC Stage</strong> — The final and most challenging tier,
            designed to prepare candidates for the highest-stakes technical
            interviews in the industry. Covers system design, distributed
            systems, cross-functional trade-off analysis, and the kind of
            open-ended engineering problems that top-tier companies use to
            evaluate principal and staff-level engineering candidates.
          </p>

          {/* ── Final thoughts ── */}
          <h3 className="text-2xl font-semibold mt-10 mb-4 border-l-4 border-blue-600 pl-4">
            Final Thoughts on {normalizedStage} {topicTitle} Interview
            Preparation
          </h3>

          <p className="text-base md:text-lg leading-8 mb-4">
            Technical interview preparation is a skill that compounds over time.
            The candidates who perform best in {normalizedStage}-level{" "}
            {topicTitle} interviews are not necessarily the ones who are most
            naturally talented — they are the ones who have practiced most
            deliberately, studied their mistakes most carefully, and built the
            habit of thinking out loud and communicating their reasoning process
            clearly and confidently.
          </p>

          <p className="text-base md:text-lg leading-8 mb-4">
            Use this quiz as a diagnostic tool, a learning accelerator, and a
            confidence builder. Attempt it multiple times. Review every
            explanation. Practice explaining each concept verbally. Build small
            projects that force you to apply what you are learning in realistic
            contexts. Combine MCQ practice with hands-on coding exercises, peer
            mock interviews, and systematic review of your weak areas.
          </p>

          <p className="text-base md:text-lg leading-8">
            Every attempt you make — whether you pass or fail — gives you
            actionable information about where to focus your preparation energy
            next. The structured roadmap on this platform is designed to guide
            you through that journey systematically, from your first{" "}
            {topicTitle} interview to your final MNC onsite round. Start where
            you are, be honest about your current level, and keep practicing.
            The results will follow.
          </p>
        </article>
      </div>
    </main>
  );
}