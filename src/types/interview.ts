/**
 * src/types/interview.ts
 * Core domain types for the interview system.
 */

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced' | 'MNC';

export type QuestionCategory = 'Theory' | 'Coding' | 'Debugging' | 'Output' | 'System Design' | 'Performance'| 'Security'|'Design Patterns';

export type InterviewStage = 'Beginner' | 'Intermediate' | 'Advanced' | 'MNC';

export interface InterviewQuestion {
  id: string;
  topic: string;
  stage: InterviewStage;
  difficulty: Difficulty;
  category: QuestionCategory;
  question: string;
  code?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  tags: string[];
}

export interface InterviewTopic {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  totalQuestions: number;
  lastUpdated: string;
}

export interface InterviewResult {
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  timeTaken: number; // in seconds
  wrongAnswers: {
    questionId: string;
    userAnswer: string;
  }[];
}

export interface StageProgress {
  stage: InterviewStage;
  isUnlocked: boolean;
  isCompleted: boolean;
  bestScore: number;
  lastAttemptDate: string | null;
}

export interface InterviewProgress {
  topicSlug: string;
  stages: Record<InterviewStage, StageProgress>;
  currentStage: InterviewStage;
}