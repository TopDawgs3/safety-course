"use client";

import Link from "next/link";
import type { FeedPost } from "@/lib/types";
import { media } from "@/lib/assets";
import { CarouselSlides } from "./CarouselSlides";
import { PollBlock } from "./PollBlock";
import { PostActions } from "./PostActions";

function Avatar({ name }: { name: string }) {
  const initial = name.trim().charAt(0).toUpperCase() || "P";
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-phoenix-crimson to-phoenix-deep text-sm font-bold text-white ring-2 ring-white">
      {initial}
    </div>
  );
}

export function FeedCard({ post }: { post: FeedPost }) {
  return (
    <article className="snap-card mx-auto w-full max-w-phone overflow-hidden rounded-3xl border border-white/10 bg-white shadow-feed">
      <div className="flex items-center gap-3 px-4 pt-4">
        <Avatar name={post.author} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-phoenix-ink">
            {post.author}
          </p>
          <p className="truncate text-xs text-phoenix-gray">{post.handle}</p>
        </div>
        {post.badge && (
          <span className="rounded-full bg-phoenix-crimson/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-phoenix-crimson">
            {post.badge}
          </span>
        )}
      </div>

      <div className="mt-3 px-4">
        {(post.type === "meme" || post.type === "photo") && post.image && (
          <div className="overflow-hidden rounded-2xl bg-phoenix-ink">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={media(post.image)}
              alt={post.imageAlt || post.caption.slice(0, 80)}
              className={`w-full object-cover ${
                post.image.includes("logo") ? "max-h-72 object-contain bg-white p-6" : "max-h-[420px]"
              }`}
            />
          </div>
        )}

        {post.type === "video" && post.videoId && (
          <div className="space-y-2">
            <div className="aspect-video overflow-hidden rounded-2xl bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${post.videoId}`}
                title={post.videoTitle || "Educational video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <p className="text-xs font-semibold text-phoenix-ink">
              {post.videoTitle}
            </p>
            {post.videoNote && (
              <p className="text-[11px] leading-snug text-phoenix-gray">
                {post.videoNote}
              </p>
            )}
            {post.image && (
              <div className="overflow-hidden rounded-xl border border-black/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={media(post.image)}
                  alt={post.imageAlt || "Related meme"}
                  className="max-h-40 w-full object-cover"
                />
              </div>
            )}
          </div>
        )}

        {(post.type === "carousel" || post.type === "tip" || post.type === "rule") &&
          post.slides &&
          post.slides.length > 0 && <CarouselSlides slides={post.slides} />}

        {(post.type === "tip" || post.type === "rule") && !post.slides && (
          <div className="rounded-2xl bg-gradient-to-br from-phoenix-crimson to-phoenix-deep p-5 text-white">
            <p className="text-xs font-bold uppercase tracking-wider text-white/70">
              {post.type === "rule" ? "Rule card" : "Tip"}
            </p>
            <p className="mt-2 text-sm leading-relaxed">{post.caption}</p>
          </div>
        )}

        {post.type === "poll" && post.poll && (
          <PollBlock
            question={post.poll.question}
            choices={post.poll.choices}
            correctIndex={post.poll.correctIndex}
            explanation={post.poll.explanation}
          />
        )}

        {post.type === "scenario" && post.scenario && (
          <div className="space-y-3">
            <div className="rounded-2xl bg-phoenix-ink p-4 text-white">
              <p className="text-xs font-bold uppercase tracking-wider text-phoenix-crimson">
                Scenario
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                {post.scenario.setup}
              </p>
            </div>
            <PollBlock
              question={post.scenario.question}
              choices={post.scenario.choices}
              correctIndex={post.scenario.correctIndex}
              explanation={post.scenario.explanation}
            />
          </div>
        )}

        {post.type === "cta" && post.cta && (
          <div className="rounded-2xl border-2 border-dashed border-phoenix-crimson/40 bg-phoenix-mist p-5 text-center">
            <p className="text-sm font-medium text-phoenix-ink">{post.caption}</p>
            <Link
              href={post.cta.href}
              className="mt-4 inline-flex rounded-full bg-phoenix-crimson px-5 py-2.5 text-sm font-bold text-white shadow-glow"
            >
              {post.cta.label} →
            </Link>
          </div>
        )}
      </div>

      <div className="px-4 pb-4 pt-3">
        {post.type !== "cta" &&
          post.type !== "tip" &&
          post.type !== "rule" && (
            <p className="text-sm leading-relaxed text-phoenix-ink">
              <span className="font-bold">{post.handle} </span>
              {post.caption}
            </p>
          )}
        {(post.type === "carousel" ||
          ((post.type === "tip" || post.type === "rule") && post.slides)) && (
          <p className="text-sm leading-relaxed text-phoenix-ink">
            <span className="font-bold">{post.handle} </span>
            {post.caption}
          </p>
        )}
        {post.ruleLine && (
          <p className="mt-2 rounded-lg bg-phoenix-ink px-3 py-2 text-xs font-semibold leading-snug text-white">
            <span className="text-phoenix-crimson">RULE · </span>
            {post.ruleLine}
          </p>
        )}
        {post.type !== "cta" && (
          <PostActions
            postId={post.id}
            tip={
              post.ruleLine
                ? `Remember: ${post.ruleLine}`
                : "Heart this when you’ve got it. Progress pill up top tracks your feed."
            }
          />
        )}
      </div>
    </article>
  );
}
