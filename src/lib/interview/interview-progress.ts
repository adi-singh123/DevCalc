/**
 * src/lib/interview/interview-progress.ts
 * Enhanced logic for tracking, unlocking, and persisting user progress.
 */

import { InterviewProgress, InterviewStage } from '@/src/types/interview';

const STORAGE_KEY = 'interview_progress_';

// Define the order of stages based on your InterviewStage type
const STAGE_ORDER: InterviewStage[] = ['Beginner', 'Intermediate', 'Advanced', 'MNC'];

/**
 * Gets progress for a specific topic, returning default structure if not found.
 */
export const getProgress = (topicSlug: string): InterviewProgress => {
  if (typeof window === 'undefined') return getDefaultProgress(topicSlug);
  
  const data = localStorage.getItem(`${STORAGE_KEY}${topicSlug}`);
  return data ? JSON.parse(data) : getDefaultProgress(topicSlug);
};

/**
 * Creates the initial state for a topic's progress.
 */
export const getDefaultProgress = (topicSlug: string): InterviewProgress => ({
  topicSlug,
  currentStage: 'Beginner',
  stages: {
    Beginner: { stage: 'Beginner', isUnlocked: true, isCompleted: false, bestScore: 0, lastAttemptDate: null },
    Intermediate: { stage: 'Intermediate', isUnlocked: false, isCompleted: false, bestScore: 0, lastAttemptDate: null },
    Advanced: { stage: 'Advanced', isUnlocked: false, isCompleted: false, bestScore: 0, lastAttemptDate: null },
    MNC: { stage: 'MNC', isUnlocked: false, isCompleted: false, bestScore: 0, lastAttemptDate: null },
  }
});

/**
 * Marks the current stage as completed and automatically unlocks the next.
 */
export const saveStageCompletion = (topicSlug: string, currentStage: InterviewStage, score: number): void => {
  const progress = getProgress(topicSlug);
  
  // Mark current as completed
  progress.stages[currentStage].isCompleted = true;
  progress.stages[currentStage].bestScore = Math.max(progress.stages[currentStage].bestScore, score);
  progress.stages[currentStage].lastAttemptDate = new Date().toISOString();
  
  // Unlock next stage if exists
  const currentIndex = STAGE_ORDER.indexOf(currentStage);
  if (currentIndex < STAGE_ORDER.length - 1) {
    const nextStage = STAGE_ORDER[currentIndex + 1];
    progress.stages[nextStage].isUnlocked = true;
    progress.currentStage = nextStage;
  }
  
  saveProgress(topicSlug, progress);
};

export const saveProgress = (topicSlug: string, progress: InterviewProgress): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`${STORAGE_KEY}${topicSlug}`, JSON.stringify(progress));
};

export const checkStageAccess = (stage: InterviewStage, progress: InterviewProgress | null): boolean => {
  if (!progress) return stage === 'Beginner';
  return progress.stages[stage].isUnlocked;
};

export const getNextStage = (currentStage: InterviewStage): InterviewStage | null => {
  const currentIndex = STAGE_ORDER.indexOf(currentStage);
  return currentIndex < STAGE_ORDER.length - 1 ? STAGE_ORDER[currentIndex + 1] : null;
};

export const resetProgress = (topicSlug: string): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(`${STORAGE_KEY}${topicSlug}`);
};