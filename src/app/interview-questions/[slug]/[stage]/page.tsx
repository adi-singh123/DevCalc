import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { interviewTopics } from "@/src/data/interview";
import { getInterviewQuestions } from "@/src/data/interview/questions";
import StageQuizClient from "./StageQuizClient";

interface Props {
  params: Promise<{ slug: string; stage: string }>;
}

const STAGES = ["beginner", "intermediate", "advanced", "mnc"] as const;

const STAGE_GUIDANCE: Record<(typeof STAGES)[number], string> = {
  beginner:
    "Build a dependable foundation before moving to framework internals or architecture. This stage checks terminology, syntax, common APIs, and the everyday decisions expected from an entry-level developer.",
  intermediate:
    "Apply core concepts to realistic development situations. This stage emphasizes debugging, data flow, API usage, trade-offs, and the patterns developers encounter while maintaining production applications.",
  advanced:
    "Work through deeper runtime behavior, performance, security, and architecture. Questions require reasoning about why an approach works, where it fails, and which trade-offs matter at scale.",
  mnc:
    "Practice senior-level scenarios similar to structured product-company assessments. This stage combines system design, production debugging, optimization, security, and communication of engineering trade-offs.",
};

export function generateStaticParams() {
  return interviewTopics.flatMap((topic) =>
    STAGES.map((stage) => ({ slug: topic.slug, stage })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, stage } = await params;
  const topic = interviewTopics.find((item) => item.slug === slug);

  if (!topic || !STAGES.includes(stage as (typeof STAGES)[number])) {
    return { robots: { index: false, follow: false } };
  }

  const stageTitle = stage === "mnc" ? "MNC" : `${stage[0].toUpperCase()}${stage.slice(1)}`;
  const canonical = `https://www.devcalc.in/interview-questions/${slug}/${stage}`;

  return {
    title: `${topic.title} ${stageTitle} Interview Questions & MCQ Practice`,
    description: `Practice ${stageTitle} ${topic.title} interview questions covering real development scenarios, coding concepts, and detailed answer explanations. ${topic.totalQuestions / STAGES.length} questions, free.`,
    alternates: { canonical },
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
      title: `${topic.title} ${stageTitle} Interview Questions & MCQ Practice | DevCalc`,
      description: `Practice ${stageTitle} ${topic.title} questions with detailed explanations and unlimited retries.`,
      url: canonical,
      siteName: "DevCalc",
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${topic.title} ${stageTitle} Interview Questions | DevCalc`,
      description: `Practice ${stageTitle} ${topic.title} MCQs with detailed explanations.`,
    },
  };
}

export default async function StageQuizPage({ params }: Props) {
  const { slug, stage } = await params;
  const topic = interviewTopics.find((item) => item.slug === slug);
  const normalizedStage = stage as (typeof STAGES)[number];

  if (!topic || !STAGES.includes(normalizedStage)) {
    notFound();
  }

  const questions = getInterviewQuestions(slug, stage);
  if (questions.length === 0) {
    notFound();
  }

  const stageTitle = stage === "mnc" ? "MNC" : `${stage[0].toUpperCase()}${stage.slice(1)}`;
  const categories = [...new Set(questions.map((question) => question.category))];
  const topics = [...new Set(questions.flatMap((question) => question.tags))].slice(0, 12);
  const currentIndex = STAGES.indexOf(normalizedStage);
  const previousStage = currentIndex > 0 ? STAGES[currentIndex - 1] : null;
  const nextStage = currentIndex < STAGES.length - 1 ? STAGES[currentIndex + 1] : null;

  return (
    <>
      <section className="border-b border-stone-200 bg-[#faf7f0] px-4 py-10 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-stone-600 dark:text-slate-400">
            <Link href="/interview-questions" className="hover:underline">Interview questions</Link>
            <span aria-hidden="true"> / </span>
            <Link href={`/interview-questions/${slug}`} className="hover:underline">{topic.title}</Link>
            <span aria-hidden="true"> / {stageTitle}</span>
          </nav>

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-400">
            {stageTitle} practice · {questions.length} questions
          </p>
          <h1 className="mt-3 max-w-4xl font-serif text-3xl font-semibold tracking-tight text-[#26364a] sm:text-4xl dark:text-white">
            {topic.title} {stageTitle} Interview Questions and MCQ Practice
          </h1>
          <p className="mt-5 max-w-4xl text-base leading-7 text-stone-700 dark:text-slate-300">
            {topic.description}
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="font-semibold text-slate-900 dark:text-white">What this stage tests</h2>
              <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-slate-300">
                {STAGE_GUIDANCE[normalizedStage]}
              </p>
              <p className="mt-3 text-sm text-stone-600 dark:text-slate-400">
                Question formats in this set: {categories.join(", ")}.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="font-semibold text-slate-900 dark:text-white">Topics represented in this question set</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {topics.map((item) => (
                  <li key={item} className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-700 dark:bg-slate-800 dark:text-slate-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-blue-700 dark:text-blue-400">
            {previousStage && (
              <Link href={`/interview-questions/${slug}/${previousStage}`} className="hover:underline">← Previous stage</Link>
            )}
            <Link href={`/interview-questions/${slug}`} className="hover:underline">View the complete {topic.title} roadmap</Link>
            {nextStage && (
              <Link href={`/interview-questions/${slug}/${nextStage}`} className="hover:underline">Next stage →</Link>
            )}
          </div>
        </div>
      </section>

      <StageQuizClient
        slug={slug}
        stage={stage}
        topicTitle={topic.title}
        questions={questions}
      />
    </>
  );
}
