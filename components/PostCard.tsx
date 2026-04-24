import Link from "next/link";
import type { Post } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";

const typeLabel: Record<Post["postType"], string> = {
  pillar: "Compound profile",
  comparison: "Comparison",
  cluster: "Explainer",
  listicle: "Evidence review",
};

export function PostCard({
  post,
  variant = "compact",
}: {
  post: Post;
  variant?: "compact" | "feature";
}) {
  const hub = getHub(post.hub);
  if (variant === "feature") {
    return (
      <Link
        href={`/${post.slug}`}
        className="group block relative p-8 bg-paper border border-inknavy/15 rounded-sm hover:border-oxblood/60 transition"
      >
        <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-oxblood transition-all duration-200" />
        <span className="caps-label text-oxblood">
          {hub?.shortName} · {typeLabel[post.postType]}
        </span>
        <h3 className="font-serif text-[1.6rem] md:text-[1.9rem] text-inknavy mt-3 leading-[1.1] group-hover:text-oxblood transition">
          {post.title}
        </h3>
        <p className="mt-4 text-[15px] text-charcoal/85 leading-[1.7]">
          {post.description}
        </p>
        <span className="mt-5 inline-block text-oxblood text-sm">
          Read the profile →
        </span>
      </Link>
    );
  }
  return (
    <Link
      href={`/${post.slug}`}
      className="group block relative p-5 bg-paper border border-inknavy/15 rounded-sm hover:border-oxblood/60 transition"
    >
      <div className="absolute top-0 left-0 w-[3px] h-0 group-hover:h-full bg-oxblood transition-all duration-200" />
      <span className="caps-label text-oxblood">
        {hub?.shortName} · {typeLabel[post.postType]}
      </span>
      <h3 className="font-serif text-lg text-inknavy mt-2 mb-2 leading-snug group-hover:text-oxblood transition">
        {post.title}
      </h3>
      <p className="text-[13.5px] text-charcoal/75 line-clamp-2 leading-[1.6]">
        {post.description}
      </p>
      <span className="mt-3 inline-block caps-label text-slate">
        {post.readingTime} min read
      </span>
    </Link>
  );
}
