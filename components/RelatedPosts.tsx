import type { Post } from "@/lib/content/posts";
import { PostCard } from "./PostCard";
import { Eyebrow } from "./editorial/Eyebrow";

export function RelatedPosts({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="mt-16">
      <Eyebrow tone="oxblood">Further reading</Eyebrow>
      <h2 className="font-serif text-[1.6rem] md:text-[1.9rem] text-inknavy mt-2 mb-6 leading-tight">
        Adjacent in the literature.
      </h2>
      <div className="grid md:grid-cols-3 gap-5">
        {posts.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </section>
  );
}
