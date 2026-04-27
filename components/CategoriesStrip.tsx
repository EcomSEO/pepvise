import { Link } from "@/i18n/navigation";

/**
 * CategoriesStrip — densely styled inline horizontal pills with
 * item-count badges. The OPPOSITE of a 4-up tile pattern.
 *
 * Hover state inverts to ink-on-paper. Pills wrap on narrow screens
 * but never grow beyond a single content-flow row visually — they read
 * as a tag set, not a feature grid.
 */
export type CategoryItem = {
  slug: string;
  name: string;
  count: number;
};

export function CategoriesStrip({
  items,
  copy,
}: {
  items: CategoryItem[];
  copy: { eyebrow: string; heading: string; caption: string };
}) {
  return (
    <section className="border-b border-rule bg-paper-soft">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-14">
        <header className="mb-6 max-w-3xl">
          <div className="eyebrow mb-2.5">{copy.eyebrow}</div>
          <h2 className="font-serif text-[1.55rem] md:text-[1.85rem] leading-[1.18] text-ink">
            {copy.heading}
          </h2>
          <p className="mt-3 text-[14.5px] text-ink-soft leading-[1.55] max-w-2xl">
            {copy.caption}
          </p>
        </header>
        <div className="flex flex-wrap gap-2">
          {items.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}` as never}
              className="cat-pill"
            >
              {cat.name}
              <span className="cat-pill-count tnum">{cat.count}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
