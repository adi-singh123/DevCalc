/**
 * src/data/interview/index.ts
 * Central registry for all interview topics.
 */

import { InterviewTopic } from "@/src/types/interview"

export const interviewTopics: InterviewTopic[] = [
  {
    id: '1',
    slug: 'javascript',
    title: 'JavaScript',
    description: 'Master core JS concepts, ES6+, closures, and asynchronous programming.',
    icon: 'javascript',
    totalQuestions: 120,
    lastUpdated: '2026-06-25',
  },
  {
    id: '2',
    slug: 'react',
    title: 'React',
    description: 'In-depth hooks, state management, performance optimization, and patterns.',
    icon: 'react',
    totalQuestions: 120,
    lastUpdated: '2026-06-25',
  },
  {
    id: '3',
    slug: 'typescript',
    title: 'TypeScript',
    description: 'Advanced types, generics, configuration, and interface design.',
    icon: 'typescript',
    totalQuestions: 120,
    lastUpdated: '2026-06-25',
  },
  {
    id: '4',
    slug: 'node',
    title: 'Node.js',
    description: 'Event loop, streams, buffering, authentication, and API architecture.',
    icon: 'node',
    totalQuestions: 120,
    lastUpdated: '2026-06-25',
  },
  {
    id: '5',
    slug: 'sql',
    title: 'SQL',
    description: 'Complex joins, indexing, transactions, and database optimization.',
    icon: 'database',
    totalQuestions: 120,
    lastUpdated: '2026-06-25',
  },
  {
    id: '6',
    slug: 'nextjs',
    title: 'Next.js',
    description: 'App router, server components, data fetching, and SSR strategies.',
    icon: 'nextjs',
    totalQuestions: 120,
    lastUpdated: '2026-06-25',
  },
];