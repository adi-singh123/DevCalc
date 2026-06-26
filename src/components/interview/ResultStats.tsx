/**
 * src/components/interview/ResultStats.tsx
 * Statistical performance metrics — correct, wrong, accuracy, passing, time taken.
 */

import React, { memo } from 'react';

interface Props {
  correct: number;
  wrong: number;
  passingMarks: number;
  accuracy: number;
  timeTaken?: number; // seconds
}

function formatDuration(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return m > 0 ? `${m}m ${sec}s` : `${sec}s`;
}

export const ResultStats: React.FC<Props> = memo(({
  correct,
  wrong,
  passingMarks,
  accuracy,
  timeTaken,
}) => {
  const stats = [
    {
      label: 'Correct',
      value: String(correct),
      color: 'text-green-600 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-100 dark:border-green-800',
    },
    {
      label: 'Wrong',
      value: String(wrong),
      color: 'text-red-600 dark:text-red-400',
      bg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-100 dark:border-red-800',
    },
    {
      label: 'Accuracy',
      value: `${accuracy.toFixed(0)}%`,
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      border: 'border-purple-100 dark:border-purple-800',
    },
    {
      label: 'Pass Mark',
      value: `${passingMarks}%`,
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-100 dark:border-blue-800',
    },
    ...(timeTaken != null
      ? [{
          label: 'Time Taken',
          value: formatDuration(timeTaken),
          color: 'text-amber-600 dark:text-amber-400',
          bg: 'bg-amber-50 dark:bg-amber-900/20',
          border: 'border-amber-100 dark:border-amber-800',
        }]
      : []),
  ];

  return (
    <div className={`grid gap-3 ${stats.length === 5 ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-2 sm:grid-cols-4'}`}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`rounded-2xl border px-4 py-4 ${stat.bg} ${stat.border}`}
        >
          <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
            {stat.label}
          </div>
          <div className={`text-xl font-extrabold tabular-nums ${stat.color}`}>
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
});

ResultStats.displayName = 'ResultStats';