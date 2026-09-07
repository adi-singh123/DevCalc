import type { InterviewQuestion } from "@/src/types/interview";
import { javascriptQuestions } from "./javascript/javascript";
import { reactQuestions } from "./react/react";
import { nodeQuestions } from "./nodeJS/node";
import { sqlQuestions } from "./sql/sql";
import { typescriptQuestions } from "./typescript/typescript";
import { cppQuestions } from "./C++/c++";
import { htmlQuestions } from "./html/html";
import { javaQuestions } from "./java/java";
import { phpQuestions } from "./php/php";
import { nextjsQuestions } from "./nextjs/next";
import { goQuestions } from "./go/golang";
import { pythonQuestions } from "./python/python";

const QUESTIONS_BY_TOPIC: Record<string, InterviewQuestion[]> = {
  javascript: javascriptQuestions,
  react: reactQuestions,
  node: nodeQuestions,
  sql: sqlQuestions,
  typescript: typescriptQuestions,
  cpp: cppQuestions,
  html: htmlQuestions,
  java: javaQuestions,
  php: phpQuestions,
  nextjs: nextjsQuestions,
  go: goQuestions,
  python: pythonQuestions,
};

export function getInterviewQuestions(
  slug: string,
  stage: string,
): InterviewQuestion[] {
  return (QUESTIONS_BY_TOPIC[slug] ?? []).filter(
    (question) => question.stage.toLowerCase() === stage.toLowerCase(),
  );
}
