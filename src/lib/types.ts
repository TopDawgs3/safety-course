export type CalloutType = "rule" | "scenario" | "tip";

export interface Callout {
  type: CalloutType;
  title: string;
  body: string;
}

export interface LessonSection {
  heading: string;
  paragraphs: string[];
  callouts?: Callout[];
}

export interface Lesson {
  slug: string;
  module: "A" | "B" | "C" | "D";
  moduleTitle: string;
  number: number;
  title: string;
  durationMinutes: number;
  summary: string;
  sections: LessonSection[];
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
}

export interface Quiz {
  slug: string;
  title: string;
  module: "A" | "B" | "C" | "D" | "final";
  description: string;
  passPercent: number;
  questions: QuizQuestion[];
  unlockAfterLesson?: string;
}

export type FeedPostType =
  | "meme"
  | "video"
  | "tip"
  | "carousel"
  | "poll"
  | "rule"
  | "scenario"
  | "photo"
  | "cta";

export interface FeedCarouselSlide {
  title: string;
  body: string;
  emoji?: string;
}

export interface FeedPost {
  id: string;
  type: FeedPostType;
  author: string;
  handle: string;
  badge?: string;
  caption: string;
  ruleLine?: string;
  image?: string;
  imageAlt?: string;
  videoId?: string;
  videoTitle?: string;
  videoNote?: string;
  slides?: FeedCarouselSlide[];
  poll?: {
    question: string;
    choices: string[];
    correctIndex: number;
    explanation: string;
  };
  scenario?: {
    setup: string;
    question: string;
    choices: string[];
    correctIndex: number;
    explanation: string;
  };
  cta?: {
    label: string;
    href: string;
  };
  topic: "regulation" | "safety" | "sanitation" | "whmis" | "meta";
}

export interface CourseProgress {
  completedLessons: string[];
  completedPosts: string[];
  quizScores: Record<
    string,
    { score: number; percent: number; passed: boolean; date: string }
  >;
  examResult?: { score: number; percent: number; passed: boolean; date: string };
  learnerName?: string;
  certificateIssuedAt?: string;
}

export const STORAGE_KEY = "vsa-phoenix-cka-safety-progress-v1";
