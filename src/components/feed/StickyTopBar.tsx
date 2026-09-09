"use client";

import Link from "next/link";
import { media } from "@/lib/assets";
import { useProgress } from "@/context/ProgressContext";

export function StickyTopBar() {
  const { overallPercent, ready } = useProgress();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-phoenix-black/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-phone items-center gap-3 px-3 py-2.5">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={media("/media/vsa-phoenix-logo.png")}
            alt="Victoria Phoenix"
            className="h-9 w-9 rounded-full object-cover ring-2 ring-phoenix-crimson"
          />
        </Link>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold tracking-tight text-white">
            VSA Phoenix · CKA Safety
          </p>
          <p className="truncate text-[10px] uppercase tracking-wider text-white/50">
            Victoria School of the Arts
          </p>
        </div>
        <div className="rounded-full bg-phoenix-crimson px-3 py-1 text-xs font-bold text-white shadow-glow">
          {ready ? `${overallPercent}%` : "…"}
        </div>
      </div>
      <div className="h-0.5 w-full bg-white/10">
        <div
          className="h-full bg-phoenix-crimson transition-all duration-500"
          style={{ width: `${ready ? overallPercent : 0}%` }}
        />
      </div>
    </header>
  );
}
