"use client";

import { useState } from "react";
import type { FeedCarouselSlide } from "@/lib/types";

export function CarouselSlides({ slides }: { slides: FeedCarouselSlide[] }) {
  const [i, setI] = useState(0);
  const slide = slides[i];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-phoenix-ink to-phoenix-charcoal text-white">
      <div className="min-h-[200px] p-5">
        <p className="text-3xl">{slide.emoji ?? "✨"}</p>
        <h3 className="mt-2 text-lg font-bold">{slide.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/80">{slide.body}</p>
      </div>
      <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
        <button
          type="button"
          className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold disabled:opacity-30"
          disabled={i === 0}
          onClick={() => setI((n) => Math.max(0, n - 1))}
        >
          ← Prev
        </button>
        <div className="flex gap-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 w-1.5 rounded-full ${
                idx === i ? "bg-phoenix-crimson" : "bg-white/30"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          className="rounded-full bg-phoenix-crimson px-3 py-1 text-xs font-semibold disabled:opacity-30"
          disabled={i === slides.length - 1}
          onClick={() => setI((n) => Math.min(slides.length - 1, n + 1))}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
