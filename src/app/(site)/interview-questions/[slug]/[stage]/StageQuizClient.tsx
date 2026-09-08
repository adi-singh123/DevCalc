/**
 * app/interview-questions/[slug]/[stage]/StageQuizClient.tsx
 * Client Component — all interactive quiz logic preserved exactly
 */

"use client";

import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
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
import type {
  InterviewStage,
  InterviewQuestion,
  InterviewProgress,
} from "@/src/types/interview";

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
  topicTitle: string;
  questions: InterviewQuestion[];
}

export default function StageQuizClient({
  slug,
  stage,
  topicTitle,
  questions,
}: Props) {
  const router = useRouter();

  const normalizedStage = (
    stage.toLowerCase() === "mnc"
      ? "MNC"
      : (stage.charAt(0).toUpperCase() + stage.slice(1))
  ) as InterviewStage;
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
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white capitalize">
              {normalizedStage} Interview Quiz
            </h2>
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

      </div>
    </main>
  );
}
