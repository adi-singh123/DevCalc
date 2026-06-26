/**
 * src/components/interview/QuizResult.tsx
 * Premium result screen with large score, pass/fail badge, time taken,
 * MNC track completion, review answers, and retry/next stage buttons.
 */

'use client';

import React, { useState, memo } from 'react';
import { ResultStats } from './ResultStats';
import { WrongAnswers } from './WrongAnswers';
import { InterviewQuestion } from '@/src/types/interview';
import {
  Trophy,
  RefreshCcw,
  ArrowRight,
  BookOpen,
  XCircle,
  Compass,
  X,
} from 'lucide-react';

interface Props {
  score: number;
  total: number;
  timeTaken?: number;        // seconds
  isPassed: boolean;
  onRetry: () => void;
  onNextStage?: () => void;
  nextStageTitle?: string;
  // For review panel
  questions?: InterviewQuestion[];
  userAnswers?: Record<string, string>;
  // MNC = final stage
  isFinalStage?: boolean;
  slug?: string;
}

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

// ── Review Modal ────────────────────────────────────────────────────────────

const ReviewModal: React.FC<{
  questions: InterviewQuestion[];
  userAnswers: Record<string, string>;
  onClose: () => void;
}> = ({ questions, userAnswers, onClose }) => (
  <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm p-4">
    <div className="mx-auto max-w-3xl py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Review Wrong Answers</h2>
        <button
          onClick={onClose}
          className="rounded-full p-2 bg-slate-800 text-slate-300 hover:bg-slate-700"
        >
          <X size={20} />
        </button>
      </div>
      <WrongAnswers questions={questions} userAnswers={userAnswers} />
    </div>
  </div>
);

// ── Main ────────────────────────────────────────────────────────────────────

export const QuizResult: React.FC<Props> = memo(({
  score,
  total,
  timeTaken,
  isPassed,
  onRetry,
  onNextStage,
  nextStageTitle,
  questions,
  userAnswers,
  isFinalStage,
  slug,
}) => {
  const [showReview, setShowReview] = useState(false);
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  // ── MNC Track Complete ───────────────────────────────────────────────────
  if (isFinalStage && isPassed) {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl border border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-10 text-center shadow-xl">
          <div className="text-6xl mb-4">🏆</div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
            Congratulations!
          </h2>
          <p className="text-yellow-700 dark:text-yellow-400 font-semibold text-lg mb-2">
            {slug ? `${slug.charAt(0).toUpperCase() + slug.slice(1)} ` : ''}Track Completed
          </p>
          <div className="my-6 flex items-center justify-center">
            <div className="relative h-32 w-32">
              <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f59e0b" strokeWidth="2.5"
                  strokeDasharray="100, 100" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-extrabold text-amber-600">100%</span>
                <span className="text-xs text-slate-500">Complete</span>
              </div>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            You have mastered all four stages. You are interview-ready!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {questions && userAnswers && (
              <button
                onClick={() => setShowReview(true)}
                className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 dark:border-slate-700 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition-colors"
              >
                <BookOpen size={16} /> Review Answers
              </button>
            )}
            <link
              href="/interview-questions"
              className="flex items-center justify-center gap-2 rounded-2xl bg-amber-500 px-6 py-3 text-sm font-bold text-white hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/20"
            >
              <Compass size={16} /> Explore More Technologies
            </link>
          </div>
        </div>
        {showReview && questions && userAnswers && (
          <ReviewModal questions={questions} userAnswers={userAnswers} onClose={() => setShowReview(false)} />
        )}
      </div>
    );
  }

  // ── Score Ring ───────────────────────────────────────────────────────────
  const ringColor = isPassed ? '#22c55e' : '#ef4444';
  const circumference = 2 * Math.PI * 45;
  const dash = (percentage / 100) * circumference;

  return (
    <div className="mx-auto max-w-2xl">
      {showReview && questions && userAnswers && (
        <ReviewModal questions={questions} userAnswers={userAnswers} onClose={() => setShowReview(false)} />
      )}

      {/* Result Card */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">

        {/* Header banner */}
        <div className={`px-8 py-6 text-center ${
          isPassed
            ? 'bg-gradient-to-r from-green-500 to-emerald-600'
            : 'bg-gradient-to-r from-red-500 to-rose-600'
        }`}>
          <div className="flex items-center justify-center gap-3 text-white">
            {isPassed
              ? <><Trophy size={24} /> <span className="text-xl font-bold">Passed!</span></>
              : <><XCircle size={24} /> <span className="text-xl font-bold">Not Passed</span></>
            }
          </div>
        </div>

        {/* Score ring + big number */}
        <div className="flex flex-col items-center pt-8 pb-4 px-8">
          <div className="relative h-36 w-36 mb-4">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
              {/* Track */}
              <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="6"
                className="dark:stroke-slate-700" />
              {/* Fill */}
              <circle
                cx="50" cy="50" r="45" fill="none"
                stroke={ringColor} strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${dash} ${circumference}`}
                style={{ transition: 'stroke-dasharray 1s ease-out' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                {score}/{total}
              </span>
              <span className={`text-sm font-bold ${isPassed ? 'text-green-600' : 'text-red-500'}`}>
                {percentage}%
              </span>
            </div>
          </div>

          {/* Stage unlock / fail message */}
          {isPassed && nextStageTitle && (
            <div className="mb-4 flex items-center gap-2 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-4 py-2.5 text-sm font-semibold text-green-700 dark:text-green-400">
              🎉 {nextStageTitle} Stage Unlocked!
            </div>
          )}
          {!isPassed && (
            <div className="mb-4 text-sm text-slate-500 dark:text-slate-400">
              Passing score is <span className="font-bold text-slate-700 dark:text-slate-300">50%</span>. You scored {percentage}%.
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="px-8 pb-6">
          <ResultStats
            correct={score}
            wrong={total - score}
            passingMarks={50}
            accuracy={percentage}
            timeTaken={timeTaken}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 px-8 pb-8">
          {/* Review (only when wrong answers exist) */}
          {questions && userAnswers && (total - score) > 0 && (
            <button
              onClick={() => setShowReview(true)}
              className="flex items-center justify-center gap-2 flex-1 rounded-2xl border border-slate-200 dark:border-slate-700 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              <BookOpen size={16} />
              Review Answers
            </button>
          )}

          {isPassed && onNextStage && nextStageTitle ? (
            <button
              onClick={onNextStage}
              className="flex items-center justify-center gap-2 flex-1 rounded-2xl bg-green-600 py-3.5 text-sm font-bold text-white hover:bg-green-700 transition-colors shadow-lg shadow-green-500/20"
            >
              Continue to {nextStageTitle}
              <ArrowRight size={16} />
            </button>
          ) : (
            <button
              onClick={onRetry}
              className="flex items-center justify-center gap-2 flex-1 rounded-2xl bg-blue-600 py-3.5 text-sm font-bold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
            >
              <RefreshCcw size={16} />
              Retry Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

QuizResult.displayName = 'QuizResult';