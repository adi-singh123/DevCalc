/**
 * src/components/interview/QuestionNavigator.tsx
 * Grid navigator: Blue=current, Green=answered, Orange=flagged, Gray=unanswered.
 */

import React, { memo } from 'react';
import { InterviewQuestion } from '@/src/types/interview';

interface Props {
  total: number;
  current: number;
  answered: string[];          // question IDs that have been answered
  flagged: number[];           // question indices that are flagged
  questions: InterviewQuestion[];
  onNavigate: (index: number) => void;
}

export const QuestionNavigator: React.FC<Props> = memo(({
  total,
  current,
  answered,
  flagged,
  questions,
  onNavigate,
}) => {
  const answeredSet = new Set(answered);
  const flaggedSet = new Set(flagged);

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 shadow-sm">

      {/* Legend */}
      <div className="mb-4 flex items-center gap-4 flex-wrap text-xs font-medium text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-blue-500" /> Current
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-green-500" /> Answered
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-orange-400" /> Flagged
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-600" /> Not answered
        </span>
      </div>

      {/* Grid */}
      <div className="flex flex-wrap gap-2" role="navigation" aria-label="Question navigator">
        {Array.from({ length: total }).map((_, index) => {
          const isCurrent = index === current;
          const questionId = questions[index]?.id;
          const isAnswered = questionId ? answeredSet.has(questionId) : false;
          const isFlagged = flaggedSet.has(index);

          let classes = '';
          let ariaLabel = `Question ${index + 1}`;

          if (isCurrent) {
            classes = 'bg-blue-600 text-white ring-2 ring-blue-400 ring-offset-2 dark:ring-offset-slate-900 scale-110 shadow-lg shadow-blue-500/20';
            ariaLabel += ' (current)';
          } else if (isFlagged) {
            classes = 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-2 border-orange-300 dark:border-orange-600';
            ariaLabel += ' (flagged)';
          } else if (isAnswered) {
            classes = 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-2 border-green-300 dark:border-green-700';
            ariaLabel += ' (answered)';
          } else {
            classes = 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600';
          }

          return (
            <button
              key={index}
              onClick={() => onNavigate(index)}
              aria-label={ariaLabel}
              aria-current={isCurrent ? 'step' : undefined}
              className={`h-9 w-9 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${classes}`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
});

QuestionNavigator.displayName = 'QuestionNavigator';