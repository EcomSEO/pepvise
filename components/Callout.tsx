import { ReactNode } from "react";

type Variant = "note" | "key-takeaway" | "warning" | "source";

const variantClass: Record<Variant, string> = {
  note: "border-oxblood bg-oxblood/5",
  "key-takeaway": "border-inknavy bg-bone-deep/40",
  warning: "border-tier-moderate bg-[color:var(--color-tier-moderate)]/10",
  source: "border-inknavy/30 bg-paper",
};

const variantLabel: Record<Variant, string> = {
  note: "Note",
  "key-takeaway": "The short answer",
  warning: "Caveat",
  source: "Source",
};

export function Callout({
  variant = "note",
  title,
  children,
}: {
  variant?: Variant;
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside
      className={`border-l-[3px] rounded-r-sm px-5 py-4 my-6 ${variantClass[variant]}`}
    >
      <p className="caps-label text-inknavy mb-1">
        {title ?? variantLabel[variant]}
      </p>
      <div className="text-charcoal/90 text-[15px] leading-[1.7]">
        {children}
      </div>
    </aside>
  );
}
