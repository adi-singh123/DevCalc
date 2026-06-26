/**
 * src/components/interview/StageLocked.tsx
 * Displayed when a user tries to access a locked interview stage.
 * Shows a clear lock illustration, reason, and navigation back to previous stage.
 */

import React, { memo } from 'react';
import { Lock, ArrowLeft, Target } from 'lucide-react';

interface Props {
  reason: string;
  onContinuePrevious: () => void;
  previousStageTitle?: string;
}

export const StageLocked: React.FC<Props> = memo(({
  reason,
  onContinuePrevious,
  previousStageTitle,
}) => {
  return (
    <div className="mx-auto max-w-md w-full">
      <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">

        {/* Top illustration area */}
        <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 px-8 py-12 flex flex-col items-center">
          {/* Animated lock */}
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-slate-300 dark:bg-slate-700 blur-xl opacity-50 scale-110" />
            <div className="relative h-24 w-24 rounded-full bg-white dark:bg-slate-800 border-4 border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-lg">
              <Lock className="w-10 h-10 text-slate-400 dark:text-slate-500" strokeWidth={1.5} />
            </div>
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2 text-center">
            Stage Locked
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center max-w-xs leading-relaxed">
            {reason}
          </p>
        </div>

        {/* Info + actions */}
        <div className="px-8 py-6">

          {/* What you need */}
          <div className="mb-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 px-4 py-4 flex items-start gap-3">
            <Target size={18} className="flex-shrink-0 text-blue-600 dark:text-blue-400 mt-0.5" />
            <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
              Score <strong>50% or above</strong> in the{' '}
              {previousStageTitle ? (
                <strong>{previousStageTitle}</strong>
              ) : (
                'previous'
              )}{' '}
              stage to unlock this level.
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={onContinuePrevious}
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-blue-600 py-4 text-sm font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98]"
          >
            <ArrowLeft size={16} />
            Go to {previousStageTitle ?? 'Previous Stage'}
          </button>
        </div>
      </div>
    </div>
  );
});

StageLocked.displayName = 'StageLocked';