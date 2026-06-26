/**
 * src/lib/interview/constants.ts
 * Configuration constants for the interview engine.
 */

import { InterviewStage, Difficulty } from '@/src/types/interview';

export const STAGES: InterviewStage[] = ['Beginner', 'Intermediate', 'Advanced', 'MNC'];

export const PASSING_PERCENTAGE = 70;

export const QUESTIONS_PER_STAGE = 10;

export const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  Beginner: 'bg-green-500',
  Intermediate: 'bg-blue-500',
  Advanced: 'bg-yellow-500',
  MNC: 'bg-purple-600',
};

export const STAGE_ICONS: Record<InterviewStage, string> = {
  Beginner: '🌱',
  Intermediate: '🚀',
  Advanced: '🧠',
  MNC: '🏢',
};

export const TIME_LIMITS: Record<InterviewStage, number> = {
  Beginner: 600, // 10 minutes
  Intermediate: 900, // 15 minutes
  Advanced: 1200, // 20 minutes
  MNC: 1500, // 25 minutes
};