import type { Metadata } from "next";
import Link from "next/link";
import { courseMeta } from "@/data/course";
import { ResetProgressButton } from "@/components/ResetProgressButton";

export const metadata: Metadata = {
  title: "Resources",
};

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-phone space-y-5 px-3 pb-28 pt-4 text-white">
      <div className="rounded-3xl bg-gradient-to-br from-phoenix-crimson to-phoenix-deep p-5 shadow-glow">
        <h1 className="text-xl font-black">Resources & credits</h1>
        <p className="mt-2 text-sm text-white/85">
          Official regulation & training links, video attributions, and stock
          photo credits for the Victoria Phoenix CKA Food Safety feed.
        </p>
      </div>

      <section className="rounded-3xl border border-white/10 bg-white p-5 text-phoenix-ink">
        <h2 className="text-sm font-bold uppercase tracking-wider text-phoenix-crimson">
          Curriculum & official links
        </h2>
        <ul className="mt-3 space-y-3 text-sm">
          {courseMeta.officialLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-phoenix-ink underline decoration-phoenix-crimson/40"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-relaxed text-phoenix-gray">
          {courseMeta.disclaimer}
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white p-5 text-phoenix-ink">
        <h2 className="text-sm font-bold uppercase tracking-wider text-phoenix-crimson">
          Educational videos
        </h2>
        <p className="mt-2 text-xs text-phoenix-gray">
          External embeds for learning outcomes. Attribution belongs to each
          publisher.
        </p>
        <ul className="mt-3 space-y-3 text-sm">
          {courseMeta.videoCredits.map((v) => (
            <li key={v.embed}>
              <p className="font-semibold">{v.title}</p>
              <p className="text-xs text-phoenix-gray">{v.org}</p>
              <a
                href={v.embed}
                className="text-xs text-phoenix-crimson underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open embed
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white p-5 text-phoenix-ink">
        <h2 className="text-sm font-bold uppercase tracking-wider text-phoenix-crimson">
          Stock photos
        </h2>
        <ul className="mt-3 space-y-2 text-sm">
          {courseMeta.stockPhotoCredits.map((s) => (
            <li key={s.file}>
              <span className="font-mono text-xs text-phoenix-gray">{s.file}</span>
              <br />
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-phoenix-crimson underline"
              >
                {s.credit}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-phoenix-gray">
          Memes (including ≤5 / ≥6 staffing and danger-zone hooks) and the
          Victoria Phoenix logo are school course assets under{" "}
          <code className="rounded bg-phoenix-mist px-1">public/media/</code>.
        </p>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
        <h2 className="text-sm font-bold text-white">About this feed</h2>
        <p className="mt-2 text-sm text-white/75">
          Built for <strong>{courseMeta.school}</strong>{" "}
          <strong>{courseMeta.pathway}</strong> on Team{" "}
          <strong>{courseMeta.team}</strong>. Motto vibe: {courseMeta.motto}.
          Colours: crimson, white, black.
        </p>
        <div className="mt-4">
          <ResetProgressButton />
        </div>
      </section>

      <Link href="/feed/" className="block text-center text-sm font-semibold text-white/60">
        ← Back to feed
      </Link>
    </div>
  );
}
