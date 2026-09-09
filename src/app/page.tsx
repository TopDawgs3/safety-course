import Link from "next/link";
import { media } from "@/lib/assets";
import { courseMeta } from "@/data/course";

export default function SplashPage() {
  return (
    <div className="relative flex min-h-[calc(100dvh-7rem)] flex-col items-center justify-center overflow-hidden px-5 pb-8 pt-6 text-center text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(200,16,46,0.45),transparent_55%)]" />
      <div className="relative z-10 flex w-full max-w-sm flex-col items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={media("/media/vsa-phoenix-logo.png")}
          alt="Victoria Phoenix logo"
          className="h-36 w-36 rounded-full object-contain bg-white p-3 shadow-glow ring-4 ring-phoenix-crimson"
        />
        <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.25em] text-phoenix-crimson">
          {courseMeta.school}
        </p>
        <h1 className="mt-2 text-3xl font-black leading-tight tracking-tight">
          Cook Apprenticeship
          <span className="block text-phoenix-crimson">CKA · Food Safety</span>
        </h1>
        <p className="mt-2 text-sm italic text-white/70">{courseMeta.motto}</p>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/55">
          Victoria Phoenix feed · AR 31/2006 + sanitation
        </p>
        <p className="mt-4 text-sm leading-relaxed text-white/85">
          Personalized for <strong>{courseMeta.pathway}</strong>. Scroll an
          Instagram-style feed covering Alberta Food Regulation s.31, CKA3900
          workplace safety, sanitation &amp; hygiene, and WHMIS for cooks.
        </p>
        <div className="mt-5 rounded-2xl border border-white/15 bg-white/5 p-3 text-left text-[11px] leading-relaxed text-white/70">
          {courseMeta.disclaimer}
        </div>
        <Link
          href="/feed/"
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-phoenix-crimson py-3.5 text-sm font-bold text-white shadow-glow transition hover:bg-phoenix-red"
        >
          Start scrolling →
        </Link>
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-[11px] font-semibold text-white/55">
          <Link href="/challenge/module-s31/" className="underline">
            Challenges
          </Link>
          <span>·</span>
          <Link href="/exam/" className="underline">
            Final exam
          </Link>
          <span>·</span>
          <Link href="/resources/" className="underline">
            Resources
          </Link>
        </div>
      </div>
    </div>
  );
}
