/**
 * src/components/interview/InterviewQuiz.tsx
 * Premium quiz orchestrator — one question at a time, with timer, navigator,
 * submit confirmation, auto-save, and exit warning.
 */

'use client';

import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import { InterviewQuestion, InterviewStage } from '@/src/types/interview';
import { QuestionCard } from './QuestionCard';
import { QuestionNavigator } from './QuestionNavigator';
import { ProgressBar } from './ProgressBar';
import { Timer } from './Timer';
import { WrongAnswers } from './WrongAnswers';
import { saveStageCompletion } from '@/src/lib/interview/interview-progress';
import { ChevronLeft, ChevronRight, Flag, X, AlertCircle, Clock } from 'lucide-react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface QuizResult {
  score: number;
  userAnswers: Record<string, string>;
  timeTaken: number;
}

interface Props {
  slug: string;
  questions: InterviewQuestion[];
  onComplete: (result: QuizResult) => void;
  onNextStage?: () => void;
  nextStageTitle?: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const STORAGE_KEY = (slug: string, stage: string) =>
  `quiz_state_${slug}_${stage}`;

const SECONDS_PER_QUESTION = 90; // 1.5 min per question

// ---------------------------------------------------------------------------
// Submit Confirmation Modal
// ---------------------------------------------------------------------------

interface ConfirmModalProps {
  answered: number;
  total: number;
  timeLeft: number;
  onCancel: () => void;
  onConfirm: () => void;
}

const SubmitModal: React.FC<ConfirmModalProps> = ({
  answered,
  total,
  timeLeft,
  onCancel,
  onConfirm,
}) => {
  const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const secs = String(timeLeft % 60).padStart(2, '0');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-sm rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Submit Test?
          </h3>
          <button
            onClick={onCancel}
            className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-3 mb-8">
          <div className="flex items-center justify-between rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 px-5 py-4">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Answered
            </span>
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">
              {answered}
            </span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800 px-5 py-4">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Not Answered
            </span>
            <span className="text-2xl font-bold text-orange-500 dark:text-orange-400">
              {total - answered}
            </span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 px-5 py-4">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Time Left
            </span>
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 font-mono">
              {mins}:{secs}
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 rounded-2xl border border-slate-200 dark:border-slate-700 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            Continue Quiz
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 rounded-2xl bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Exit Warning Modal
// ---------------------------------------------------------------------------

const ExitModal: React.FC<{ onStay: () => void; onLeave: () => void }> = ({
  onStay,
  onLeave,
}) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
    <div className="w-full max-w-sm rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl p-8 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
        <AlertCircle className="text-orange-500" size={28} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
        Quiz in Progress
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">
        Your progress will be saved. You can continue this quiz later.
      </p>
      <div className="flex gap-3">
        <button
          onClick={onLeave}
          className="flex-1 rounded-2xl border border-slate-200 dark:border-slate-700 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          Leave
        </button>
        <button
          onClick={onStay}
          className="flex-1 rounded-2xl bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          Continue Quiz
        </button>
      </div>
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Quiz Rules Card (shown before quiz starts)
// ---------------------------------------------------------------------------

const QuizRules: React.FC<{
  total: number;
  duration: number;
  onStart: () => void;
  slug: string;
  stage: string;
}> = ({ total, duration, onStart, slug, stage }) => {
  const mins = Math.floor(duration / 60);
  const rules = [
    'No Negative Marking',
    'Unlimited Retry on Fail',
    'Questions Shuffle Each Attempt',
    'Options Shuffle Each Attempt',
    '50% Required to Pass',
    'Result with Full Explanation',
    'Progress Saved Automatically',
  ];

  return (
    <div className="mx-auto max-w-2xl">
      {/* Header */}
      <div className="mb-6 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-xl shadow-blue-500/20">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-blue-200 text-sm font-medium uppercase tracking-wider mb-2">
              {slug}
            </p>
            <h2 className="text-3xl font-extrabold capitalize mb-1">
              {stage} Stage
            </h2>
            <p className="text-blue-100">
              {total} Questions · {mins} Minutes
            </p>
          </div>
          <div className="rounded-2xl bg-white/20 px-4 py-3 text-center">
            <div className="text-2xl font-bold">{total}</div>
            <div className="text-xs text-blue-100">Questions</div>
          </div>
        </div>
      </div>

      {/* Rules */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
          Quiz Rules
        </h3>
        <ul className="space-y-3 mb-8">
          {rules.map((rule) => (
            <li key={rule} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <span className="flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 text-xs font-bold">
                ✓
              </span>
              {rule}
            </li>
          ))}
        </ul>

        <button
          onClick={onStart}
          className="w-full rounded-2xl bg-blue-600 py-4 text-base font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98]"
        >
          Start Quiz →
        </button>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Review Answers (wrong answers panel)
// ---------------------------------------------------------------------------

const ReviewPanel: React.FC<{
  questions: InterviewQuestion[];
  userAnswers: Record<string, string>;
  onClose: () => void;
}> = ({ questions, userAnswers, onClose }) => (
  <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm p-4">
    <div className="mx-auto max-w-3xl py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Review Wrong Answers</h2>
        <button
          onClick={onClose}
          className="rounded-full p-2 bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
        >
          <X size={20} />
        </button>
      </div>
      <WrongAnswers questions={questions} userAnswers={userAnswers} />
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Main InterviewQuiz component
// ---------------------------------------------------------------------------

type QuizPhase = 'rules' | 'quiz' | 'review';

export const InterviewQuiz: React.FC<Props> = ({
  slug,
  questions: rawQuestions,
  onComplete,
}) => {
  // ── State ──────────────────────────────────────────────────────────────
  const [phase, setPhase] = useState<QuizPhase>('rules');

  // Shuffled questions — only computed once per mount / retry
  const [questions, setQuestions] = useState<InterviewQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [timeLeft, setTimeLeft] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [navigatorOpen, setNavigatorOpen] = useState(false);
  const [reviewAnswers, setReviewAnswers] = useState<Record<string, string>>({});
  const [showReview, setShowReview] = useState(false);

  const stageKey = rawQuestions[0]?.stage ?? 'unknown';
  const storageKey = STORAGE_KEY(slug, stageKey);

  // ── Shuffle & init ──────────────────────────────────────────────────────
  const initQuiz = useCallback(() => {
    const shuffled = shuffleArray(rawQuestions).map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));
    setQuestions(shuffled);
    setCurrentIndex(0);
    setUserAnswers({});
    setFlagged(new Set());
    const duration = shuffled.length * SECONDS_PER_QUESTION;
    setTimeLeft(duration);
    setStartTime(Date.now());

    // Try restore saved state
    try {
      const saved = sessionStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.questionIds?.join(',') === shuffled.map((q) => q.id).join(',')) {
          setUserAnswers(parsed.answers ?? {});
          setCurrentIndex(parsed.currentIndex ?? 0);
          setTimeLeft(parsed.timeLeft ?? duration);
          setFlagged(new Set(parsed.flagged ?? []));
        }
      }
    } catch {
      // ignore
    }
  }, [rawQuestions, storageKey]);

  // ── Start quiz ──────────────────────────────────────────────────────────
  const handleStart = useCallback(() => {
    initQuiz();
    setPhase('quiz');
  }, [initQuiz]);

  // ── Auto-save every answer ──────────────────────────────────────────────
  useEffect(() => {
    if (phase !== 'quiz' || questions.length === 0) return;
    try {
      sessionStorage.setItem(
        storageKey,
        JSON.stringify({
          questionIds: questions.map((q) => q.id),
          answers: userAnswers,
          currentIndex,
          timeLeft,
          flagged: Array.from(flagged),
        })
      );
    } catch {
      // ignore
    }
  }, [userAnswers, currentIndex, timeLeft, flagged, phase, questions, storageKey]);

  // ── Exit warning ────────────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== 'quiz') return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [phase]);

  // ── Keyboard navigation ─────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== 'quiz') return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentIndex < questions.length - 1)
        setCurrentIndex((i) => i + 1);
      if (e.key === 'ArrowLeft' && currentIndex > 0)
        setCurrentIndex((i) => i - 1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [phase, currentIndex, questions.length]);

  // ── Derived ─────────────────────────────────────────────────────────────
  const currentQuestion = questions[currentIndex];
  const answeredIds = useMemo(
    () => new Set(Object.keys(userAnswers)),
    [userAnswers]
  );
  const answeredCount = answeredIds.size;
  const isLast = currentIndex === questions.length - 1;
  const isFirst = currentIndex === 0;

  // ── Answer selection ────────────────────────────────────────────────────
  const handleSelect = useCallback(
    (answer: string) => {
      if (!currentQuestion) return;
      setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: answer }));
    },
    [currentQuestion]
  );

  // ── Navigation ──────────────────────────────────────────────────────────
  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
    setNavigatorOpen(false);
  }, []);

  // ── Flag toggle ─────────────────────────────────────────────────────────
  const toggleFlag = useCallback(() => {
    if (!currentQuestion) return;
    setFlagged((prev) => {
      const next = new Set(prev);
      next.has(currentQuestion.id)
        ? next.delete(currentQuestion.id)
        : next.add(currentQuestion.id);
      return next;
    });
  }, [currentQuestion]);

  // ── Submit ──────────────────────────────────────────────────────────────
  const handleSubmit = useCallback(() => {
    const timeTaken = Math.round((Date.now() - startTime) / 1000);
    const score = questions.reduce(
      (acc, q) => acc + (userAnswers[q.id] === q.correctAnswer ? 1 : 0),
      0
    );

    // Save progress — only mark completed if score >= 50%
    const passed = score / questions.length >= 0.5;
    if (passed) {
      try {
        const percentage = Math.round((score / questions.length) * 100);
        saveStageCompletion(slug, stageKey as InterviewStage, percentage);
      } catch {
        // ignore
      }
    }

    // Clear session
    try {
      sessionStorage.removeItem(storageKey);
    } catch {
      // ignore
    }

    setReviewAnswers({ ...userAnswers });
    setShowSubmitModal(false);

    onComplete({ score, userAnswers, timeTaken });
  }, [questions, userAnswers, startTime, slug, stageKey, storageKey, onComplete]);

  // ── Time up ─────────────────────────────────────────────────────────────
  const handleTimeUp = useCallback(() => {
    handleSubmit();
  }, [handleSubmit]);

  // ── Render: Rules ───────────────────────────────────────────────────────
  if (phase === 'rules') {
    return (
      <QuizRules
        total={rawQuestions.length}
        duration={rawQuestions.length * SECONDS_PER_QUESTION}
        onStart={handleStart}
        slug={slug}
        stage={stageKey}
      />
    );
  }

  // ── Render: Quiz ────────────────────────────────────────────────────────
  if (!currentQuestion) return null;

  const isFlagged = flagged.has(currentQuestion.id);

  return (
    <>
      {/* Modals */}
      {showSubmitModal && (
        <SubmitModal
          answered={answeredCount}
          total={questions.length}
          timeLeft={timeLeft}
          onCancel={() => setShowSubmitModal(false)}
          onConfirm={handleSubmit}
        />
      )}
      {showExitModal && (
        <ExitModal
          onStay={() => setShowExitModal(false)}
          onLeave={() => {
            setShowExitModal(false);
            history.back();
          }}
        />
      )}
      {showReview && (
        <ReviewPanel
          questions={questions}
          userAnswers={reviewAnswers}
          onClose={() => setShowReview(false)}
        />
      )}

      {/* Quiz Shell */}
      <div className="mx-auto max-w-3xl">

        {/* ── Top Bar ── */}
        <div className="mb-5 flex items-center justify-between gap-4 flex-wrap">
          {/* Left: tech + stage */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {slug}
            </p>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 capitalize">
              {stageKey} · Question {currentIndex + 1} of {questions.length}
            </p>
          </div>

          {/* Right: Timer + Flag + Exit */}
          <div className="flex items-center gap-2">
            <Timer
              initialSeconds={timeLeft}
              onTimeUp={handleTimeUp}
              onTick={setTimeLeft}
            />
            <button
              onClick={toggleFlag}
              title={isFlagged ? 'Unflag question' : 'Flag for review'}
              className={`rounded-xl p-2.5 transition-colors ${
                isFlagged
                  ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-500'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-orange-500'
              }`}
            >
              <Flag size={16} />
            </button>
            <button
              onClick={() => setShowExitModal(true)}
              title="Exit quiz"
              className="rounded-xl p-2.5 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-red-500 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* ── Progress Bar ── */}
        <ProgressBar
          current={answeredCount}
          total={questions.length}
          currentQuestion={currentIndex + 1}
        />

        {/* ── Question Card ── */}
        <QuestionCard
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          selectedAnswer={userAnswers[currentQuestion.id]}
          onSelect={handleSelect}
          isFlagged={isFlagged}
        />

        {/* ── Bottom Navigation ── */}
        <div className="mt-6 flex items-center justify-between gap-3 sticky bottom-4">

          {/* Previous */}
          <button
            onClick={() => setCurrentIndex((i) => i - 1)}
            disabled={isFirst}
            className={`flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all ${
              isFirst
                ? 'bg-slate-100 dark:bg-slate-800 text-slate-300 dark:text-slate-600 cursor-not-allowed'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-400 shadow-sm hover:shadow-md'
            }`}
          >
            <ChevronLeft size={16} />
            Previous
          </button>

          {/* Navigator toggle (mobile) */}
          <button
            onClick={() => setNavigatorOpen((v) => !v)}
            className="rounded-2xl bg-slate-100 dark:bg-slate-800 px-4 py-3 text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {answeredCount}/{questions.length}
          </button>

          {/* Next / Submit */}
          {isLast ? (
            <button
              onClick={() => setShowSubmitModal(true)}
              className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98]"
            >
              Submit Test
            </button>
          ) : (
            <button
              onClick={() => setCurrentIndex((i) => i + 1)}
              className={`flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all ${
                userAnswers[currentQuestion.id]
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-400 shadow-sm'
              }`}
            >
              Next
              <ChevronRight size={16} />
            </button>
          )}
        </div>

        {/* ── Question Navigator ── */}
        <div className={`mt-4 transition-all duration-300 ${navigatorOpen ? 'block' : 'hidden md:block'}`}>
          <QuestionNavigator
            total={questions.length}
            current={currentIndex}
            answered={Object.keys(userAnswers)}
            flagged={Array.from(flagged).map((id) =>
              questions.findIndex((q) => q.id === id)
            )}
            questions={questions}
            onNavigate={goTo}
          />
        </div>
      </div>
    </>
  );
};