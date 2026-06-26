/**
 * src/lib/interview/helpers.ts
 * Helper functions for interview logic, scoring, and formatting.
 */

import { InterviewStage, InterviewResult } from '@/src/types/interview';
import { STAGES, PASSING_PERCENTAGE } from './constants';

export const getNextStage = (current: InterviewStage): InterviewStage | null => {
  const index = STAGES.indexOf(current);
  return index < STAGES.length - 1 ? STAGES[index + 1] : null;
};

export const getPreviousStage = (current: InterviewStage): InterviewStage | null => {
  const index = STAGES.indexOf(current);
  return index > 0 ? STAGES[index - 1] : null;
};

export const calculatePercentage = (score: number, total: number): number => {
  return Math.round((score / total) * 100);
};

export const calculatePass = (score: number, total: number): boolean => {
  return calculatePercentage(score, total) >= PASSING_PERCENTAGE;
};

export const calculateScore = (userAnswers: Record<string, string>, questions: any[]): number => {
  return questions.reduce((acc, q) => {
    return userAnswers[q.id] === q.correctAnswer ? acc + 1 : acc;
  }, 0);
};

export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};