/**
 * app/interview-questions/[slug]/[stage]/page.tsx
 * Premium Quiz Interface with Stage-Locking and Progress Tracking
 */

"use client";

import React, { use, useState, useCallback } from "react";
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



const MOCK_DB: Record<string, InterviewQuestion[]> = {
  javascript: javascriptQuestions,
  react: reactQuestions,
  node:nodeQuestions,
  sql:sqlQuestions,
};

const STAGE_ORDER: InterviewStage[] = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "MNC",
];

interface QuizResult {
  score: number;
  userAnswers: Record<string, string>;
  timeTaken: number;
}

interface Props {
  params: Promise<{ slug: string; stage: string }>;
}

export default function StageQuizPage({ params }: Props) {
  const { slug, stage } = use(params);
  const router = useRouter();

  const normalizedStage = (stage.charAt(0).toUpperCase() +
    stage.slice(1)) as InterviewStage;
  const nextStage = getNextStage(normalizedStage);
  const isFinalStage = normalizedStage === "MNC";

  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [userProgress, setUserProgress] = useState<InterviewProgress | null>(
    () => (typeof window !== "undefined" ? getProgress(slug) : null),
  );
  const [isLoading, setIsLoading] = useState(false);

  const refreshProgress = useCallback(() => {
    setUserProgress(getProgress(slug));
  }, [slug]);

  const isLocked = !checkStageAccess(normalizedStage, userProgress);

  const questions = (MOCK_DB[slug] ?? []).filter(
    (q) => q.stage.toLowerCase() === stage.toLowerCase(),
  );

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

  const handleComplete = (result: QuizResult) => {
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
      label: slug.charAt(0).toUpperCase() + slug.slice(1),
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

        {/* Page header — hidden once quiz starts to save space */}
        {!isQuizComplete && (
          <header className="mb-8 mt-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">
              {slug.charAt(0).toUpperCase() + slug.slice(1)}
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

        {/* SEO Article — shown below quiz */}
        {/* SEO Article — shown below quiz */}
<article
  className="
    mt-12 md:mt-16
    rounded-3xl
    border border-slate-200 dark:border-slate-800
    bg-white dark:bg-slate-900
    p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12
    shadow-sm

    prose
    prose-slate
    dark:prose-invert
    max-w-none

    prose-headings:font-bold
    prose-headings:text-slate-900
    dark:prose-headings:text-white

    prose-p:text-slate-700
    dark:prose-p:text-slate-300

    prose-li:text-slate-700
    dark:prose-li:text-slate-300

    prose-strong:text-slate-900
    dark:prose-strong:text-white

    prose-ul:my-6
    prose-ul:space-y-2
    prose-li:marker:text-blue-600
  "
>
  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-tight">
    {normalizedStage} {slug.charAt(0).toUpperCase() + slug.slice(1)} Interview
    Preparation Guide
  </h2>

  <p className="text-base md:text-lg leading-8 mb-6">
    Preparing for a{" "}
    <strong>
      {normalizedStage} {slug}
    </strong>{" "}
    interview requires more than simply memorizing definitions. Top technology
    companies evaluate candidates on their conceptual understanding,
    problem-solving skills, coding ability, communication, and practical
    experience. Whether you're a fresher preparing for your first technical
    interview or an experienced developer targeting product-based companies, a
    structured preparation strategy significantly improves your chances of
    success.
  </p>

  <p className="text-base md:text-lg leading-8 mb-8">
    This{" "}
    <strong>
      {normalizedStage} {slug} MCQ quiz
    </strong>{" "}
    is designed using interview patterns commonly seen in technical assessments
    conducted by companies like Google, Microsoft, Amazon, Adobe, Atlassian,
    Walmart Global Tech, TCS, Infosys, Wipro, Capgemini, Accenture, and many
    other organizations. Every question helps reinforce important concepts while
    highlighting the reasoning behind the correct answer.
  </p>

  <h3 className="text-2xl font-semibold mt-10 mb-4 border-l-4 border-blue-600 pl-4">
    Why Learn {slug.charAt(0).toUpperCase() + slug.slice(1)} for Interviews?
  </h3>

  <p className="text-base md:text-lg leading-8 mb-8">
    {slug.charAt(0).toUpperCase() + slug.slice(1)} is one of the most
    frequently tested topics in software engineering interviews. Recruiters
    often evaluate candidates through conceptual questions, coding exercises,
    debugging challenges, scenario-based discussions, and system design
    conversations related to {slug}. A solid understanding demonstrates your
    ability to build scalable, maintainable, and efficient software solutions.
  </p>

  <h3 className="text-2xl font-semibold mt-10 mb-4 border-l-4 border-blue-600 pl-4">
    Topics Covered in This Quiz
  </h3>

  <ul className="grid gap-3 sm:grid-cols-2 my-8 list-disc pl-6">
    <li>Core fundamentals of {slug}</li>
    <li>Frequently asked interview questions</li>
    <li>Multiple Choice Questions (MCQs)</li>
    <li>Scenario-based interview questions</li>
    <li>Best practices and common mistakes</li>
    <li>Real-world coding concepts</li>
    <li>Performance optimization techniques</li>
    <li>Advanced interview concepts for experienced developers</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-10 mb-4 border-l-4 border-blue-600 pl-4">
    How to Prepare for a {slug.charAt(0).toUpperCase() + slug.slice(1)} Interview
  </h3>

  <p className="text-base md:text-lg leading-8 mb-6">
    Begin by mastering the fundamentals before moving toward advanced concepts.
    Understand not only how things work but also why they work that way.
    Practice writing clean and optimized code, explain your thought process
    clearly, and solve real interview questions within a time limit. Reviewing
    previous interview experiences and discussing different approaches with
    peers can further strengthen your preparation.
  </p>

  <p className="text-base md:text-lg leading-8 mb-8">
    In addition to solving MCQs, practice hands-on coding exercises, review
    documentation, work on real projects, and revise commonly asked interview
    questions. Companies often prefer candidates who can explain trade-offs,
    optimize existing solutions, and communicate effectively while solving
    technical problems.
  </p>

  <h3 className="text-2xl font-semibold mt-10 mb-4 border-l-4 border-blue-600 pl-4">
    Who Should Use This Quiz?
  </h3>

  <ul className="grid gap-3 sm:grid-cols-2 my-8 list-disc pl-6">
    <li>Software Engineering Students</li>
    <li>Computer Science Graduates</li>
    <li>Freshers Preparing for Placements</li>
    <li>Experienced Developers</li>
    <li>Frontend Developers</li>
    <li>Backend Developers</li>
    <li>Full Stack Developers</li>
    <li>Job Switch Candidates</li>
    <li>Competitive Programming Enthusiasts</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-10 mb-4 border-l-4 border-blue-600 pl-4">
    Benefits of Solving {slug.charAt(0).toUpperCase() + slug.slice(1)} MCQs
  </h3>

  <p className="text-base md:text-lg leading-8 mb-6">
    Practicing interview MCQs helps you identify weak areas, improve accuracy,
    and become familiar with the type of questions asked during online
    assessments. Regular practice also enhances confidence and reduces
    interview anxiety by exposing you to different problem-solving patterns.
  </p>

  <p className="text-base md:text-lg leading-8 mb-8">
    Our questions are regularly updated to match current hiring trends and
    interview expectations. Each explanation focuses on helping candidates
    understand the underlying concepts rather than simply memorizing answers,
    making this quiz useful for placements, coding interviews, technical
    screenings, certification exams, and self-learning.
  </p>

  <h3 className="text-2xl font-semibold mt-10 mb-4 border-l-4 border-blue-600 pl-4">
    Frequently Asked in Companies
  </h3>

  <p className="text-base md:text-lg leading-8 mb-8">
    Questions related to <strong>{slug}</strong> frequently appear in interviews
    conducted by Google, Microsoft, Amazon, Meta, Netflix, Uber, Adobe,
    Salesforce, Oracle, IBM, Intel, Accenture, TCS, Infosys, Wipro,
    Cognizant, Capgemini, HCL, Deloitte, EY, and numerous startups.
    Interviewers typically combine conceptual questions with practical coding
    tasks to evaluate real-world problem-solving ability.
  </p>

  <h3 className="text-2xl font-semibold mt-10 mb-4 border-l-4 border-blue-600 pl-4">
    Final Thoughts
  </h3>

  <p className="text-base md:text-lg leading-8">
    Consistent practice is the key to success in technical interviews. Attempt
    this{" "}
    <strong>
      {normalizedStage} {slug} Interview Quiz
    </strong>{" "}
    multiple times, review every explanation carefully, and revisit challenging
    questions until you can confidently explain the underlying concepts.
    Combining MCQ practice with coding exercises, mock interviews, and project
    experience will greatly improve your chances of clearing interviews at
    leading technology companies.
  </p>
</article>
      </div>
    </main>
  );
}
