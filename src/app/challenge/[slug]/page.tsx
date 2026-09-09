import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { quizzes } from "@/data/quizzes";
import { QuizPlayer } from "@/components/QuizPlayer";

export function generateStaticParams() {
  return quizzes.map((q) => ({ slug: q.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const quiz = quizzes.find((q) => q.slug === params.slug);
  return { title: quiz?.title ?? "Challenge" };
}

export default function ChallengePage({
  params,
}: {
  params: { slug: string };
}) {
  const quiz = quizzes.find((q) => q.slug === params.slug);
  if (!quiz) notFound();
  return <QuizPlayer quiz={quiz} />;
}
