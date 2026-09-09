"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { CourseProgress } from "@/lib/types";
import { calcPercent, defaultProgress, loadProgress, saveProgress } from "@/lib/progress";
import { heartablePostIds } from "@/data/feed";
import { quizzes, finalExam } from "@/data/quizzes";

interface ProgressContextValue {
  progress: CourseProgress;
  ready: boolean;
  markLessonComplete: (slug: string) => void;
  togglePostHeart: (postId: string) => void;
  isPostHearted: (postId: string) => boolean;
  saveQuizResult: (
    slug: string,
    score: number,
    total: number,
    passed: boolean
  ) => void;
  saveExamResult: (score: number, total: number, passed: boolean) => void;
  setLearnerName: (name: string) => void;
  issueCertificate: (name: string) => void;
  resetProgress: () => void;
  feedPercent: number;
  overallPercent: number;
  isLessonComplete: (slug: string) => boolean;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

const assessmentCount = quizzes.length + 1;

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<CourseProgress>(defaultProgress);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setProgress(loadProgress());
    setReady(true);
  }, []);

  const persist = useCallback((next: CourseProgress) => {
    setProgress(next);
    saveProgress(next);
  }, []);

  const markLessonComplete = useCallback((slug: string) => {
    setProgress((prev) => {
      if (prev.completedLessons.includes(slug)) return prev;
      const next = {
        ...prev,
        completedLessons: [...prev.completedLessons, slug],
      };
      saveProgress(next);
      return next;
    });
  }, []);

  const togglePostHeart = useCallback((postId: string) => {
    setProgress((prev) => {
      const has = prev.completedPosts.includes(postId);
      const completedPosts = has
        ? prev.completedPosts.filter((id) => id !== postId)
        : [...prev.completedPosts, postId];
      const next = { ...prev, completedPosts };
      saveProgress(next);
      return next;
    });
  }, []);

  const isPostHearted = useCallback(
    (postId: string) => progress.completedPosts.includes(postId),
    [progress.completedPosts]
  );

  const saveQuizResult = useCallback(
    (slug: string, score: number, total: number, passed: boolean) => {
      const percent = calcPercent(score, total);
      setProgress((prev) => {
        const next: CourseProgress = {
          ...prev,
          quizScores: {
            ...prev.quizScores,
            [slug]: {
              score,
              percent,
              passed,
              date: new Date().toISOString(),
            },
          },
        };
        saveProgress(next);
        return next;
      });
    },
    []
  );

  const saveExamResult = useCallback(
    (score: number, total: number, passed: boolean) => {
      const percent = calcPercent(score, total);
      const date = new Date().toISOString();
      setProgress((prev) => {
        const next: CourseProgress = {
          ...prev,
          examResult: { score, percent, passed, date },
          quizScores: {
            ...prev.quizScores,
            [finalExam.slug]: { score, percent, passed, date },
          },
        };
        saveProgress(next);
        return next;
      });
    },
    []
  );

  const setLearnerName = useCallback((name: string) => {
    setProgress((prev) => {
      const next = { ...prev, learnerName: name };
      saveProgress(next);
      return next;
    });
  }, []);

  const issueCertificate = useCallback((name: string) => {
    setProgress((prev) => {
      const next = {
        ...prev,
        learnerName: name,
        certificateIssuedAt: new Date().toISOString(),
      };
      saveProgress(next);
      return next;
    });
  }, []);

  const resetProgress = useCallback(() => {
    persist(defaultProgress());
  }, [persist]);

  const heartedCountable = progress.completedPosts.filter((id) =>
    heartablePostIds.includes(id)
  ).length;

  const feedPercent = calcPercent(heartedCountable, heartablePostIds.length);

  const passedAssessments =
    quizzes.filter((q) => progress.quizScores[q.slug]?.passed).length +
    (progress.examResult?.passed ? 1 : 0);

  const overallPercent = calcPercent(
    heartedCountable + passedAssessments,
    heartablePostIds.length + assessmentCount
  );

  const isLessonComplete = useCallback(
    (slug: string) => progress.completedLessons.includes(slug),
    [progress.completedLessons]
  );

  const value = useMemo(
    () => ({
      progress,
      ready,
      markLessonComplete,
      togglePostHeart,
      isPostHearted,
      saveQuizResult,
      saveExamResult,
      setLearnerName,
      issueCertificate,
      resetProgress,
      feedPercent,
      overallPercent,
      isLessonComplete,
    }),
    [
      progress,
      ready,
      markLessonComplete,
      togglePostHeart,
      isPostHearted,
      saveQuizResult,
      saveExamResult,
      setLearnerName,
      issueCertificate,
      resetProgress,
      feedPercent,
      overallPercent,
      isLessonComplete,
    ]
  );

  return (
    <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}
