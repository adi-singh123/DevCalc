/**
 * src/lib/interview/shuffle.ts
 * Utilities for randomizing question sets and options.
 */

import { InterviewQuestion } from '@/src/types/interview';

/**
 * Fisher-Yates shuffle algorithm to randomize array elements
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const shuffleQuestions = (questions: InterviewQuestion[]): InterviewQuestion[] => {
  return shuffleArray(questions);
};

export const shuffleOptions = (options: string[]): string[] => {
  return shuffleArray(options);
};

export const randomQuestionSet = (questions: InterviewQuestion[], count: number): InterviewQuestion[] => {
  return shuffleArray(questions).slice(0, count);
};