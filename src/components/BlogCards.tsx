import { Link } from "react-router-dom";
import { blogPosts } from "../lib/searchData";
import { CoverGraphic } from "./CoverGraphic";

export function BlogCards() {
  return (
    <section className="max-w-2xl">
      <h4 className="mb-3 text-base font-semibold">Latest case studies</h4>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {blogPosts.map((p) => (
          <Link
            key={p.title}
            to={p.href}
            className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition-shadow hover:shadow-md"
          >
            <CoverGraphic slug={p.title} className="h-28 w-full" />
            <div className="p-4">
              <div className="mb-1 text-xs uppercase tracking-wide text-[var(--muted-foreground)]">{p.source}</div>
              <h5 className="text-sm font-semibold leading-snug group-hover:underline">{p.title}</h5>
              <p className="mt-1 text-xs text-[var(--muted-foreground)] line-clamp-2">{p.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
