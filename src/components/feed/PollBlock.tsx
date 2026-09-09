"use client";

import { useState } from "react";

export function PollBlock({
  question,
  choices,
  correctIndex,
  explanation,
}: {
  question: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const answered = picked !== null;
  const correct = picked === correctIndex;

  return (
    <div className="rounded-2xl border border-phoenix-crimson/25 bg-phoenix-mist p-4">
      <p className="text-xs font-bold uppercase tracking-wider text-phoenix-crimson">
        Poll · tap to answer
      </p>
      <p className="mt-2 text-base font-semibold text-phoenix-ink">{question}</p>
      <div className="mt-3 space-y-2">
        {choices.map((c, idx) => {
          let style =
            "border-black/10 bg-white hover:border-phoenix-crimson/40";
          if (answered) {
            if (idx === correctIndex)
              style = "border-emerald-500 bg-emerald-50 text-emerald-950";
            else if (idx === picked)
              style = "border-red-400 bg-red-50 text-red-950";
            else style = "border-black/5 bg-white/60 opacity-70";
          }
          return (
            <button
              key={idx}
              type="button"
              disabled={answered}
              onClick={() => setPicked(idx)}
              className={`block w-full rounded-xl border px-3 py-2.5 text-left text-sm font-medium transition ${style}`}
            >
              {c}
            </button>
          );
        })}
      </div>
      {answered && (
        <p
          className={`mt-3 text-sm ${
            correct ? "text-emerald-800" : "text-phoenix-deep"
          }`}
        >
          <span className="font-bold">{correct ? "Nailed it. " : "Not quite. "}</span>
          {explanation}
        </p>
      )}
    </div>
  );
}
