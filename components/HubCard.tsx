import Link from "next/link";
import type { Hub } from "@/lib/content/hubs";

export function HubCard({ hub }: { hub: Hub }) {
  return (
    <Link
      href={`/guides/${hub.slug}`}
      className="group block relative p-6 bg-paper border border-inknavy/15 rounded-sm hover:border-oxblood/60 transition h-full"
    >
      <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-oxblood transition-all duration-200" />
      <h3 className="font-serif text-xl text-inknavy mb-2 group-hover:text-oxblood transition">
        {hub.name}
      </h3>
      <p className="text-[14px] text-charcoal/75 leading-[1.65]">
        {hub.oneLiner}
      </p>
      <span className="mt-4 inline-block caps-label text-oxblood">Open hub →</span>
    </Link>
  );
}
