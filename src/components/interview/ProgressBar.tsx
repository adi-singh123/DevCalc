/**
 * src/components/interview/ProgressBar.tsx
 * Animated progress bar with percentage and question counter.
 */

import React, { memo } from 'react';

interface Props {
  current: number;   // answered count
  total: number;
  currentQuestion?: number; // 1-based display index
}

export const ProgressBar: React.FC<Props> = memo(({ current, total, currentQuestion }) => {
  const percentage = total > 0 ? Math.min(100, Math.round((current / total) * 100)) : 0;

  return (
    <div className="mb-5 w-full" role="status" aria-label={`${current} of ${total} questions answered`}>

      {/* Labels */}
      <div className="mb-2 flex items-center justify-between text-xs font-semibold">
        <span className="text-slate-500 dark:text-slate-400">
          {currentQuestion != null
            ? `Question ${currentQuestion} / ${total}`
            : `${current} / ${total} Answered`}
        </span>
        <span className={`font-bold tabular-nums ${
          percentage >= 80
            ? 'text-green-600 dark:text-green-400'
            : percentage >= 40
            ? 'text-blue-600 dark:text-blue-400'
            : 'text-slate-400'
        }`}>
          {percentage}%
        </span>
      </div>

      {/* Track */}
      <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        {/* Fill */}
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {/* Shimmer effect */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[shimmer_2s_infinite]"
            style={{ backgroundSize: '200% 100%' }}
          />
        </div>
      </div>
    </div>
  );
});

ProgressBar.displayName = 'ProgressBar';