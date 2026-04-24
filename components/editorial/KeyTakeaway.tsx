import type { ReactNode } from "react";

type Variant = "key-takeaway" | "caveat" | "method" | "our-reading";

const config: Record<
  Variant,
  { label: string; border: string; bg: string; dot: string; text: string }
> = {
  "key-takeaway": {
    label: "The short answer",
    border: "border-oxblood",
    bg: "bg-oxblood/5",
    dot: "bg-oxblood",
    text: "text-oxblood",
  },
  caveat: {
    label: "Caveat",
    border: "border-tier-moderate",
    bg: "bg-[color:var(--color-tier-moderate)]/10",
    dot: "bg-tier-moderate",
    text: "text-tier-moderate",
  },
  method: {
    label: "Method note",
    border: "border-inknavy",
    bg: "bg-inknavy/5",
    dot: "bg-inknavy",
    text: "text-inknavy",
  },
  "our-reading": {
    label: "Our reading",
    border: "border-oxblood",
    bg: "bg-bone-deep/40",
    dot: "bg-oxblood",
    text: "text-oxblood",
  },
};

/**
 * KeyTakeaway — structured callout, used inline in long-form prose.
 * Oxblood accent; not alarm-coded, not wellness-green.
 */
export function KeyTakeaway({
  variant = "key-takeaway",
  title,
  children,
}: {
  variant?: Variant;
  title?: string;
  children: ReactNode;
}) {
  const c = config[variant];
  return (
    <aside
      className={`my-8 border-l-[3px] ${c.border} ${c.bg} pl-5 pr-5 py-5 rounded-r-sm`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
        <span className={`caps-label ${c.text}`}>{title ?? c.label}</span>
      </div>
      <div className="text-[15.5px] text-charcoal/90 leading-[1.7]">
        {children}
      </div>
    </aside>
  );
}
