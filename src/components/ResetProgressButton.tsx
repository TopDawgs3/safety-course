"use client";

import { useProgress } from "@/context/ProgressContext";

export function ResetProgressButton() {
  const { resetProgress } = useProgress();
  return (
    <button
      type="button"
      onClick={() => {
        if (
          confirm(
            "Reset all local progress (hearts, quizzes, exam, certificate) on this device?"
          )
        ) {
          resetProgress();
        }
      }}
      className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/70 hover:bg-white/10"
    >
      Reset local progress
    </button>
  );
}
