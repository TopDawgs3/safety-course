"use client";

import { useState } from "react";
import { useProgress } from "@/context/ProgressContext";

export function PostActions({
  postId,
  tip,
}: {
  postId: string;
  tip?: string;
}) {
  const { togglePostHeart, isPostHearted } = useProgress();
  const [showTip, setShowTip] = useState(false);
  const [copied, setCopied] = useState(false);
  const hearted = isPostHearted(postId);

  async function share() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mt-3 flex items-center gap-1">
      <button
        type="button"
        onClick={() => togglePostHeart(postId)}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold transition ${
          hearted
            ? "bg-phoenix-crimson text-white"
            : "bg-black/5 text-phoenix-ink hover:bg-phoenix-soft"
        }`}
        aria-pressed={hearted}
        aria-label={hearted ? "Unmark as done" : "Mark lesson done"}
      >
        <span aria-hidden>{hearted ? "❤️" : "🤍"}</span>
        {hearted ? "Done" : "Heart"}
      </button>

      <button
        type="button"
        onClick={() => setShowTip((v) => !v)}
        className="flex items-center gap-1.5 rounded-full bg-black/5 px-3 py-1.5 text-sm font-semibold text-phoenix-ink hover:bg-phoenix-soft"
        aria-expanded={showTip}
      >
        <span aria-hidden>💬</span>
        Tip
      </button>

      <button
        type="button"
        onClick={share}
        className="flex items-center gap-1.5 rounded-full bg-black/5 px-3 py-1.5 text-sm font-semibold text-phoenix-ink hover:bg-phoenix-soft"
      >
        <span aria-hidden>↗</span>
        {copied ? "Copied" : "Share"}
      </button>

      {showTip && (
        <div className="basis-full mt-2 rounded-xl border border-phoenix-crimson/20 bg-phoenix-mist p-3 text-sm text-phoenix-ink">
          {tip ||
            "Heart = mark this post done for progress. Keep scrolling — memes teach, captions lock the real rule."}
        </div>
      )}
    </div>
  );
}
