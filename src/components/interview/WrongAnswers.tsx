/**
 * src/components/interview/WrongAnswers.tsx
 * Review panel for incorrect answers with color-coded options,
 * explanation, and code blocks.
 */

import React, { memo } from 'react';
import { InterviewQuestion } from '@/src/types/interview';
import { CheckCircle2, XCircle } from 'lucide-react';

interface Props {
  questions: InterviewQuestion[];
  userAnswers: Record<string, string>;
}

export const WrongAnswers: React.FC<Props> = memo(({ questions, userAnswers }) => {
  const wrongQuestions = questions.filter(
    (q) => userAnswers[q.id] !== q.correctAnswer
  );

  if (wrongQuestions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="text-5xl mb-4">🎯</div>
        <h3 className="text-xl font-bold text-white mb-2">Perfect Score!</h3>
        <p className="text-slate-400">You answered every question correctly.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-slate-400 text-sm">
        {wrongQuestions.length} incorrect answer{wrongQuestions.length !== 1 ? 's' : ''}
      </p>

      {wrongQuestions.map((q, idx) => {
        const userAnswer = userAnswers[q.id];

        return (
          <div
            key={q.id}
            className="rounded-3xl border border-slate-700 bg-slate-900 overflow-hidden shadow-lg"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-800">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-900/40 text-red-400 text-xs font-bold">
                {idx + 1}
              </span>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-400">
                  {q.category}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-400">
                  {q.difficulty}
                </span>
              </div>
            </div>

            {/* Question */}
            <div className="px-6 pt-5 pb-4">
              <p className="text-white font-semibold leading-relaxed mb-4">
                {q.question}
              </p>

              {/* Code */}
              {q.code && (
                <div className="mb-4 rounded-2xl overflow-hidden border border-slate-700">
                  <div className="bg-slate-950 px-4 py-2 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                  </div>
                  <pre className="bg-slate-950 px-5 py-4 overflow-x-auto text-sm font-mono text-blue-300 leading-relaxed">
                    <code>{q.code}</code>
                  </pre>
                </div>
              )}

              {/* Answers */}
              <div className="space-y-2.5">
                {q.options.map((option, optIdx) => {
                  const isCorrect = option === q.correctAnswer;
                  const isUserWrong = option === userAnswer && !isCorrect;

                  if (!isCorrect && !isUserWrong) return null;

                  return (
                    <div
                      key={optIdx}
                      className={`flex items-start gap-3 rounded-2xl px-4 py-3.5 border ${
                        isCorrect
                          ? 'bg-green-900/20 border-green-700'
                          : 'bg-red-900/20 border-red-700'
                      }`}
                    >
                      {isCorrect
                        ? <CheckCircle2 size={18} className="flex-shrink-0 text-green-400 mt-0.5" />
                        : <XCircle size={18} className="flex-shrink-0 text-red-400 mt-0.5" />
                      }
                      <div>
                        <p className={`text-xs font-bold mb-0.5 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                          {isCorrect ? 'Correct Answer' : 'Your Answer'}
                        </p>
                        <p className={`text-sm ${isCorrect ? 'text-green-200' : 'text-red-200'}`}>
                          {option}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Explanation */}
            {q.explanation && (
              <div className="mx-6 mb-6 rounded-2xl bg-slate-800/60 border border-slate-700 px-5 py-4">
                <p className="text-xs font-bold text-blue-400 mb-2 uppercase tracking-wide">
                  Explanation
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {q.explanation}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
});

WrongAnswers.displayName = 'WrongAnswers';