export function ReviewStamp({
  updatedAt,
  readingTime,
  author = "The PepVise Editorial Team",
}: {
  updatedAt: string;
  readingTime: number;
  author?: string;
}) {
  const formatted = new Date(updatedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <p className="caps-label text-slate">
      By {author} <span className="text-inknavy/30">·</span> Reviewed {formatted}{" "}
      <span className="text-inknavy/30">·</span> {readingTime} min read
    </p>
  );
}
