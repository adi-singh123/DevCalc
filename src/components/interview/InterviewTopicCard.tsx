/**
 * src/components/interview/InterviewTopicCard.tsx
 * Card component for displaying interview topics on the home page.
 */

import Link from "next/link";
import { InterviewTopic } from "@/src/types/interview";
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiCplusplus,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";

interface Props {
  topic: InterviewTopic;
}

// Helper to resolve the correct icon
const getTechnologyIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case "javascript":
      return <SiJavascript className="text-5xl text-yellow-400" />;
    case "react":
      return <SiReact className="text-5xl text-cyan-400" />;
    case "typescript":
      return <SiTypescript className="text-5xl text-blue-600" />;
    case "node":
    case "nodejs":
    case "node.js":
      return <SiNodedotjs className="text-5xl text-green-600" />;
    case "next":
    case "nextjs":
    case "next.js":
      return <SiNextdotjs className="text-5xl dark:text-white" />;
    case "database":
    case "sql":
      return <TbDatabase className="text-5xl text-indigo-600" />;
    case "c++":
    case "cpp":
      return < SiCplusplus className="text-5xl text-indigo-600" />;
    default:
      return null;
  }
};

export const InterviewTopicCard = ({ topic }: Props) => {
  return (
    <Link
      href={`/interview-questions/${topic.slug}`}
      className="block h-full"
    >
      <article
        className="
          group
          flex
          h-full
          flex-col
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-500
          hover:shadow-xl
          dark:border-slate-700
          dark:bg-slate-900
        "
      >
        {/* Icon */}
        <div className="mb-5">
          {getTechnologyIcon(topic.icon ?? topic.slug)}
        </div>

        {/* Title */}
        <h3
          className="
            text-2xl
            font-bold
            text-slate-900
            transition-colors
            group-hover:text-blue-600
            dark:text-white
          "
        >
          {topic.title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-3
            flex-1
            text-sm
            leading-6
            text-slate-600
            dark:text-slate-400
          "
        >
          {topic.description}
        </p>

        {/* Footer */}
        <div
          className="
            mt-6
            flex
            items-center
            justify-between
            border-t
            border-slate-200
            pt-4
            dark:border-slate-700
          "
        >
          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-blue-600
            "
          >
            {topic.totalQuestions}+ Questions
          </span>

          <span
            className="
              text-sm
              font-medium
              text-slate-500
              transition-colors
              group-hover:text-blue-600
            "
          >
            Start →
          </span>
        </div>
      </article>
    </Link>
  );
};