/**
 * app/interview-questions/[slug]/[stage]/page.tsx
 * Server Component — handles generateMetadata + renders Client Component
 */

import { Metadata } from "next";
import { interviewTopics } from "@/src/data/interview";
import StageQuizClient from "./StageQuizClient";

interface Props {
  params: Promise<{ slug: string; stage: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, stage } = await params;

  const topic = interviewTopics.find((t) => t.slug === slug);
  const topicTitle =
    topic?.title ?? slug.charAt(0).toUpperCase() + slug.slice(1);
  const stageTitle = stage.charAt(0).toUpperCase() + stage.slice(1);

  return {
    title: `${topicTitle} ${stageTitle} Interview Questions & MCQ Practice | DevCalc`,
    description: `Practice ${stageTitle} ${topicTitle} interview questions with MCQs, coding questions, explanations, quizzes, and real interview scenarios. Free unlimited retries with detailed explanations.`,
    keywords: [
      `${topicTitle} interview questions`,
      `${topicTitle} ${stageTitle} interview`,
      `${topicTitle} MCQ`,
      `${topicTitle} quiz`,
      `${topicTitle} coding interview`,
      `${topicTitle} interview practice`,
      `${topicTitle} ${stageTitle} MCQ`,
      `${topicTitle} ${stageTitle} quiz`,
      `${topicTitle} ${stageTitle} interview questions`,
      `${topicTitle} interview questions and answers`,
      `${topicTitle} interview questions for freshers`,
      `${topicTitle} interview questions for experienced`,
      `${topicTitle} online test`,
      `${topicTitle} placement questions`,
      `${topicTitle} technical interview`,
      `${topicTitle} interview preparation`,
      `${topicTitle} MCQs with answers`,
      `${topicTitle} Google interview questions`,
      `${topicTitle} Amazon interview questions`,
      `${topicTitle} Microsoft interview questions`,
      `${topicTitle} TCS interview questions`,
      `${topicTitle} Infosys interview questions`,
      `${topicTitle} Wipro interview questions`,
      `${stageTitle} level interview questions`,
      "technical interview preparation",
      "coding interview MCQ",
      "software developer interview questions",
      "programming interview questions",
      "MNC interview questions",
      "interview quiz online",
      "developer assessment test",
    ],
    alternates: {
      canonical: `https://www.devcalc.in/interview-questions/${slug}/${stage}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: `${topicTitle} ${stageTitle} Interview Questions & MCQ Practice | DevCalc`,
      description: `Practice ${stageTitle} ${topicTitle} interview questions with MCQs and real interview scenarios. Pass with 50% to unlock the next stage. Free, unlimited retries.`,
      url: `https://www.devcalc.in/interview-questions/${slug}/${stage}`,
      siteName: "DevCalc",
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${topicTitle} ${stageTitle} Interview Questions | DevCalc`,
      description: `Practice ${stageTitle} ${topicTitle} MCQs with detailed explanations. Free quiz with unlimited retries.`,
    },
  };
}

export default async function StageQuizPage({ params }: Props) {
  const { slug, stage } = await params;
  return <StageQuizClient slug={slug} stage={stage} />;
}