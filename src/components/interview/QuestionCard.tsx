/**
 * src/components/interview/QuestionCard.tsx
 * Premium single-question card with A/B/C/D labels, difficulty badge,
 * scenario, and code block.
 */

import React, { memo } from 'react';
import { InterviewQuestion } from '@/src/types/interview';

interface Props {
  question: InterviewQuestion;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer?: string;
  onSelect: (answer: string) => void;
  isFlagged?: boolean;
}

const OPTION_LABELS = ['A', 'B', 'C', 'D', 'E'];

const DIFFICULTY_COLORS: Record<string, string> = {
  Beginner: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  Intermediate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  Advanced: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  MNC: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
};

const CATEGORY_COLORS: Record<string, string> = {
  Theory: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Coding: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  Debugging: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
  Output: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
  'System Design': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
  Performance: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  Security: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  'Design Patterns': 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400',
};

export const QuestionCard: React.FC<Props> = memo(({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelect,
  isFlagged,
}) => {
  const difficultyClass = DIFFICULTY_COLORS[question.difficulty] ?? 'bg-slate-100 text-slate-600';
  const categoryClass = CATEGORY_COLORS[question.category] ?? 'bg-slate-100 text-slate-600';

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">

      {/* Card Header */}
      <div className="flex items-center justify-between flex-wrap gap-2 px-6 pt-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Category */}
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryClass}`}>
            {question.category}
          </span>
          {/* Difficulty */}
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${difficultyClass}`}>
            {question.difficulty}
          </span>
          {/* Flagged indicator */}
          {isFlagged && (
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
              🚩 Flagged
            </span>
          )}
        </div>
        <span className="text-xs text-slate-400 font-medium">
          Q{questionNumber}/{totalQuestions}
        </span>
      </div>

      {/* Question Body */}
      <div className="px-6 pt-5 pb-6">

        {/* Question text */}
        <h2 className="text-lg font-semibold leading-relaxed text-slate-900 dark:text-white mb-4">
          {question.question}
        </h2>

        {/* Code block */}
        {question.code && (
          <div className="mb-6 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 bg-slate-800 dark:bg-slate-950 px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-2 text-xs text-slate-400 font-mono">code</span>
            </div>
            <pre className="bg-slate-900 dark:bg-slate-950 px-5 py-4 overflow-x-auto text-sm font-mono leading-relaxed">
              <code className="text-blue-300">{question.code}</code>
            </pre>
          </div>
        )}

        {/* Options */}
        <div className="space-y-3" role="radiogroup" aria-label="Answer options">
          {question.options.map((option, index) => {
            const label = OPTION_LABELS[index] ?? String(index + 1);
            const isSelected = selectedAnswer === option;

            return (
              <button
                key={index}
                role="radio"
                aria-checked={isSelected}
                onClick={() => onSelect(option)}
                className={`group w-full flex items-start gap-3 rounded-2xl border-2 px-4 py-3.5 text-left transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/25 shadow-md shadow-blue-500/10'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50/50 dark:hover:bg-blue-900/10'
                }`}
              >
                {/* Label badge */}
                <span className={`mt-0.5 flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-lg text-xs font-bold transition-colors ${
                  isSelected
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 group-hover:text-blue-600'
                }`}>
                  {label}
                </span>
                {/* Option text */}
                <span className={`text-sm font-medium leading-relaxed ${
                  isSelected
                    ? 'text-blue-800 dark:text-blue-200'
                    : 'text-slate-700 dark:text-slate-300'
                }`}>
                  {option}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
});

QuestionCard.displayName = 'QuestionCard';