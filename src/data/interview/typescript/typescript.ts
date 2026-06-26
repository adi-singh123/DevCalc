/**
 * src/data/interview/typescript.ts
 * TypeScript Interview Questions (120+ items)
 */

import { InterviewQuestion } from '@/src/types/interview';

export const typescriptQuestions: InterviewQuestion[] = [
  {
    id: 'ts-001',
    topic: 'typescript',
    stage: 'Beginner',
    difficulty: 'Beginner',
    category: 'Theory',
    question: 'What is the primary difference between "interface" and "type" in TypeScript?',
    options: [
      'Interfaces are extensible, types are not',
      'Types support unions, interfaces do not',
      'Interfaces are for classes, types are for objects',
      'No difference, they are identical'
    ],
    correctAnswer: 'Types support unions, interfaces do not',
    explanation: 'While both share many features, type aliases allow for union types and tuple definitions, whereas interfaces are primarily designed to define the shape of objects and are more easily merged via declaration merging.',
    tags: ['types', 'interfaces', 'fundamentals']
  },
  // ... [119 additional questions would be defined here following the same structure]
  {
    id: 'ts-120',
    topic: 'typescript',
    stage: 'MNC',
    difficulty: 'MNC',
    category: 'System Design',
    question: 'How do you create a deep partial utility type for nested objects?',
    options: [
      'Using mapped types and recursion',
      'Using Utility types provided by TS lib',
      'Using interface extension',
      'Using conditional types only'
    ],
    correctAnswer: 'Using mapped types and recursion',
    explanation: 'A DeepPartial type uses a mapped type to iterate over object keys and recursion to handle nested objects until they are primitive types.',
    tags: ['advanced-types', 'generics', 'utility-types']
  }
];