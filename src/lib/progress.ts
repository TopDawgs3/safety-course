import type { CourseProgress } from "./types";
import { STORAGE_KEY } from "./types";

export const defaultProgress = (): CourseProgress => ({
  completedLessons: [],
  completedPosts: [],
  quizScores: {},
});

export function loadProgress(): CourseProgress {
  if (typeof window === "undefined") return defaultProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    const parsed = JSON.parse(raw) as CourseProgress;
    return {
      ...defaultProgress(),
      ...parsed,
      completedLessons: parsed.completedLessons ?? [],
      completedPosts: parsed.completedPosts ?? [],
      quizScores: parsed.quizScores ?? {},
    };
  } catch {
    return defaultProgress();
  }
}

export function saveProgress(progress: CourseProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function calcPercent(completed: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((completed / total) * 100);
}
