import type { ReactNode } from "react";

type Tone = "oxblood" | "inknavy" | "slate" | "bone";

export function Eyebrow({
  children,
  tone = "oxblood",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const toneClass =
    tone === "inknavy"
      ? "text-inknavy"
      : tone === "slate"
      ? "text-slate"
      : tone === "bone"
      ? "text-bone"
      : "text-oxblood";
  return (
    <span className={`eyebrow ${toneClass} ${className}`}>{children}</span>
  );
}
