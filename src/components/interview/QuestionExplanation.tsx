/**
 * src/components/interview/QuestionExplanation.tsx
 * Displays detailed explanation and code snippets after a user provides an answer.
 */

import React from 'react';

interface Props {
  explanation: string;
  code?: string;
  isCorrect: boolean;
}

export const QuestionExplanation: React.FC<Props> = ({ explanation, code, isCorrect }) => {
  return (
    <div className={`mt-6 p-6 rounded-xl border-l-4 ${
      isCorrect 
        ? 'bg-green-50 dark:bg-green-900/20 border-green-500' 
        : 'bg-red-50 dark:bg-red-900/20 border-red-500'
    }`}>
      <h4 className={`font-bold mb-2 ${isCorrect ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
        {isCorrect ? 'Correct!' : 'Explanation'}
      </h4>
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        {explanation}
      </p>
      
      {code && (
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm font-mono text-blue-300">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};