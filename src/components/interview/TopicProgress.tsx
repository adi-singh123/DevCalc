/**
 * src/components/interview/TopicProgress.tsx
 * Visual progress tracker for a topic showing stage completion status.
 */

import React, { memo } from 'react';
import { InterviewProgress, InterviewStage } from '@/src/types/interview';
import { CheckCircle2, Lock, PlayCircle } from 'lucide-react';

interface Props {
  progress: InterviewProgress;
}

const STAGE_ORDER: InterviewStage[] = ['Beginner', 'Intermediate', 'Advanced', 'MNC'];

export const TopicProgress: React.FC<Props> = memo(({ progress }) => {
  const totalStages = STAGE_ORDER.length;
  const completedStages = STAGE_ORDER.filter(
    (s) => progress.stages[s]?.isCompleted
  ).length;
  const progressPercentage = Math.round((completedStages / totalStages) * 100);

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          Your Progress
        </h3>
        <span className="text-sm font-bold text-blue-600 dark:text-blue-400 tabular-nums">
          {completedStages}/{totalStages} stages
        </span>
      </div>

      {/* Track bar */}
      <div className="mb-6">
        <div className="h-2.5 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden mb-1.5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-700 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="text-xs text-slate-400 text-right font-medium">{progressPercentage}% complete</p>
      </div>

      {/* Stage list */}
      <div className="space-y-2.5">
        {STAGE_ORDER.map((stage, idx) => {
          const stageData = progress.stages[stage];
          const isCompleted = stageData?.isCompleted ?? false;
          const isCurrent = progress.currentStage === stage;
          const isUnlocked = stageData?.isUnlocked ?? false;

          return (
            <div
              key={stage}
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition-colors ${
                isCurrent
                  ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                  : isCompleted
                  ? 'bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900'
                  : 'bg-slate-50 dark:bg-slate-800/40 border border-transparent'
              }`}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                {isCompleted ? (
                  <CheckCircle2 size={18} className="text-green-500" />
                ) : isCurrent ? (
                  <PlayCircle size={18} className="text-blue-600 dark:text-blue-400" />
                ) : isUnlocked ? (
                  <div className="h-[18px] w-[18px] rounded-full border-2 border-slate-300 dark:border-slate-600" />
                ) : (
                  <Lock size={15} className="text-slate-300 dark:text-slate-600" />
                )}
              </div>

              {/* Label */}
              <span className={`text-sm font-semibold flex-1 ${
                isCompleted
                  ? 'text-green-700 dark:text-green-400'
                  : isCurrent
                  ? 'text-blue-700 dark:text-blue-300'
                  : isUnlocked
                  ? 'text-slate-700 dark:text-slate-300'
                  : 'text-slate-400 dark:text-slate-600'
              }`}>
                {stage}
              </span>

              {/* Badge */}
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                isCompleted
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                  : isCurrent
                  ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
              }`}>
                {isCompleted
                  ? `${stageData?.bestScore ?? 0}% best`
                  : isCurrent
                  ? 'Current'
                  : isUnlocked
                  ? 'Unlocked'
                  : 'Locked'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
});

TopicProgress.displayName = 'TopicProgress';