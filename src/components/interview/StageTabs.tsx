/**
 * src/components/interview/StageTabs.tsx
 * Stage navigation tabs: completed=green, current=blue, locked=gray.
 * Only unlocked stages are clickable.
 */

import React, { memo } from 'react';
import { InterviewStage } from '@/src/types/interview';
import { STAGES } from '@/src/lib/interview/constants';
import { CheckCircle2, Lock } from 'lucide-react';

interface Props {
  currentStage: InterviewStage;
  onStageChange: (stage: InterviewStage) => void;
  unlockedStages: InterviewStage[];
  completedStages?: InterviewStage[];
}

const STAGE_LABELS: Record<InterviewStage, string> = {
  Beginner: 'Beginner',
  Intermediate: 'Intermediate',
  Advanced: 'Advanced',
  MNC: 'MNC',
};

export const StageTabs: React.FC<Props> = memo(({
  currentStage,
  onStageChange,
  unlockedStages,
  completedStages = [],
}) => {
  return (
    <div
      className="flex gap-1 p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-2xl overflow-x-auto"
      role="tablist"
      aria-label="Interview stages"
    >
      {STAGES.map((stage) => {
        const isActive = currentStage === stage;
        const isUnlocked = unlockedStages.includes(stage);
        const isCompleted = completedStages.includes(stage);

        let tabClass = '';
        if (isActive) {
          tabClass = 'bg-blue-600 text-white shadow-md shadow-blue-500/20';
        } else if (isCompleted) {
          tabClass = 'bg-white dark:bg-slate-900 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800 hover:bg-green-50 dark:hover:bg-green-900/20 cursor-pointer';
        } else if (isUnlocked) {
          tabClass = 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer';
        } else {
          tabClass = 'text-slate-400 dark:text-slate-600 cursor-not-allowed opacity-60';
        }

        return (
          <button
            key={stage}
            role="tab"
            aria-selected={isActive}
            aria-disabled={!isUnlocked}
            disabled={!isUnlocked}
            onClick={() => isUnlocked && onStageChange(stage)}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${tabClass}`}
          >
            {isCompleted && !isActive ? (
              <CheckCircle2 size={14} className="text-green-500" />
            ) : !isUnlocked ? (
              <Lock size={13} />
            ) : null}
            {STAGE_LABELS[stage]}
          </button>
        );
      })}
    </div>
  );
});

StageTabs.displayName = 'StageTabs';