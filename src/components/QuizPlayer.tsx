"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Quiz } from "@/lib/types";
import { useProgress } from "@/context/ProgressContext";

export function QuizPlayer({
  quiz,
  isExam = false,
}: {
  quiz: Quiz;
  isExam?: boolean;
}) {
  const { saveQuizResult, saveExamResult, progress } = useProgress();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const total = quiz.questions.length;
  const score = useMemo(() => {
    return quiz.questions.reduce((sum, q) => {
      return sum + (answers[q.id] === q.correctIndex ? 1 : 0);
    }, 0);
  }, [answers, quiz.questions]);

  const percent = total ? Math.round((score / total) * 100) : 0;
  const passed = percent >= quiz.passPercent;
  const prior = progress.quizScores[quiz.slug];

  function submit() {
    if (Object.keys(answers).length < total) {
      alert("Answer every question before submitting.");
      return;
    }
    setSubmitted(true);
    if (isExam) saveExamResult(score, total, percent >= quiz.passPercent);
    else saveQuizResult(quiz.slug, score, total, percent >= quiz.passPercent);
  }

  function reset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <div className="mx-auto max-w-phone space-y-4 px-3 pb-28 pt-4">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-phoenix-crimson to-phoenix-deep p-5 text-white shadow-glow">
        <p className="text-xs font-bold uppercase tracking-wider text-white/70">
          {isExam ? "Final Reels Challenge" : "Stories Challenge"}
        </p>
        <h1 className="mt-1 text-xl font-bold leading-tight">{quiz.title}</h1>
        <p className="mt-2 text-sm text-white/85">{quiz.description}</p>
        <p className="mt-3 text-xs font-semibold">
          Pass mark: {quiz.passPercent}% · {total} questions
        </p>
        {prior && (
          <p className="mt-1 text-xs text-white/70">
            Last attempt: {prior.percent}% ({prior.passed ? "passed" : "not yet"})
          </p>
        )}
      </div>

      {quiz.questions.map((q, idx) => {
        const picked = answers[q.id];
        const show = submitted;
        return (
          <div
            key={q.id}
            className="rounded-3xl border border-white/10 bg-white p-4 shadow-card"
          >
            <p className="text-xs font-bold text-phoenix-crimson">
              Q{idx + 1}
            </p>
            <p className="mt-1 text-sm font-semibold text-phoenix-ink">
              {q.prompt}
            </p>
            <div className="mt-3 space-y-2">
              {q.choices.map((choice, cIdx) => {
                let style = "border-black/10 bg-phoenix-mist/50";
                if (show) {
                  if (cIdx === q.correctIndex)
                    style = "border-emerald-500 bg-emerald-50";
                  else if (cIdx === picked)
                    style = "border-red-400 bg-red-50";
                } else if (picked === cIdx) {
                  style = "border-phoenix-crimson bg-phoenix-soft";
                }
                return (
                  <label
                    key={cIdx}
                    className={`flex cursor-pointer gap-2 rounded-xl border px-3 py-2.5 text-sm ${style}`}
                  >
                    <input
                      type="radio"
                      className="mt-0.5"
                      name={q.id}
                      disabled={submitted}
                      checked={picked === cIdx}
                      onChange={() =>
                        setAnswers((prev) => ({ ...prev, [q.id]: cIdx }))
                      }
                    />
                    <span>{choice}</span>
                  </label>
                );
              })}
            </div>
            {show && (
              <p className="mt-3 text-xs leading-relaxed text-phoenix-gray">
                {q.explanation}
              </p>
            )}
          </div>
        );
      })}

      {!submitted ? (
        <button
          type="button"
          onClick={submit}
          className="w-full rounded-full bg-phoenix-crimson py-3 text-sm font-bold text-white shadow-glow"
        >
          Submit challenge
        </button>
      ) : (
        <div className="space-y-3 rounded-3xl bg-phoenix-ink p-5 text-center text-white">
          <p className="text-3xl font-black">{percent}%</p>
          <p className="text-sm">
            {score}/{total} correct ·{" "}
            {passed ? "You passed 🔥" : "Keep grinding — try again"}
          </p>
          <div className="flex flex-col gap-2">
            {!passed && (
              <button
                type="button"
                onClick={reset}
                className="rounded-full bg-white py-2.5 text-sm font-bold text-phoenix-ink"
              >
                Retry
              </button>
            )}
            {isExam && passed && (
              <Link
                href="/certificate/"
                className="rounded-full bg-phoenix-crimson py-2.5 text-sm font-bold text-white"
              >
                Get certificate →
              </Link>
            )}
            <Link
              href="/feed/"
              className="rounded-full border border-white/20 py-2.5 text-sm font-semibold text-white"
            >
              Back to feed
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
