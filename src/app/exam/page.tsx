import type { Metadata } from "next";
import { finalExam } from "@/data/quizzes";
import { QuizPlayer } from "@/components/QuizPlayer";

export const metadata: Metadata = {
  title: "Final Reels Challenge",
};

export default function ExamPage() {
  return <QuizPlayer quiz={finalExam} isExam />;
}
