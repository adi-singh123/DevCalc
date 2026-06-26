/**
 * src/components/interview/Timer.tsx
 * Countdown timer with urgent state, time-up callback, and tick callback
 * for syncing timeLeft into parent state for auto-save.
 */

'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import { Clock } from 'lucide-react';

interface Props {
  initialSeconds: number;
  onTimeUp: () => void;
  onTick?: (remaining: number) => void;
}

function formatTime(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export const Timer: React.FC<Props> = memo(({ initialSeconds, onTimeUp, onTick }) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const isUrgent = timeLeft <= 60;
  const isCritical = timeLeft <= 30;

  const handleTimeUp = useCallback(onTimeUp, []); // eslint-disable-line

  useEffect(() => {
    if (timeLeft <= 0) {
      handleTimeUp();
      return;
    }

    const id = setTimeout(() => {
      const next = timeLeft - 1;
      setTimeLeft(next);
      onTick?.(next);
    }, 1000);

    return () => clearTimeout(id);
  }, [timeLeft, handleTimeUp, onTick]);

  return (
    <div
      role="timer"
      aria-label={`Time remaining: ${formatTime(timeLeft)}`}
      className={`flex items-center gap-2 rounded-xl px-3.5 py-2.5 font-mono text-sm font-bold tabular-nums transition-colors ${
        isCritical
          ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 animate-pulse'
          : isUrgent
          ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
      }`}
    >
      <Clock size={14} aria-hidden="true" />
      {formatTime(timeLeft)}
    </div>
  );
});

Timer.displayName = 'Timer';