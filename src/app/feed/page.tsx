import { feedPosts } from "@/data/feed";
import { FeedCard } from "@/components/feed/FeedCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feed",
};

export default function FeedPage() {
  return (
    <div className="snap-feed space-y-5 px-3 pb-28 pt-4">
      <div className="mx-auto max-w-phone rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-xs text-white/75">
        Heart ❤️ = mark post done · Tip 💬 = rule reminder · Keep facts tied to{" "}
        <span className="font-semibold text-white">AR 31/2006 s.31 + CKA safety</span>{" "}
        — memes are the hook, captions are the curriculum.
      </div>
      {feedPosts.map((post) => (
        <FeedCard key={post.id} post={post} />
      ))}
      <p className="pb-4 text-center text-xs text-white/40">
        End of feed · smash those challenges · Inspiring Creativity 🔥
      </p>
    </div>
  );
}
