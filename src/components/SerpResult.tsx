import { Link } from "react-router-dom";
import type { SerpResult as Result } from "../lib/searchData";

export function SerpResult({ result }: { result: Result }) {
  return (
    <article className="max-w-2xl">
      <div className="mb-1 text-xs text-[var(--serp-url)]" style={{ color: "var(--serp-url)" }}>
        {result.displayUrl}
      </div>
      <h3 className="mb-1 text-xl font-normal leading-snug">
        <Link to={result.url} className="hover:underline" style={{ color: "var(--serp-link)" }}>
          {result.title}
        </Link>
      </h3>
      <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">{result.snippet}</p>
    </article>
  );
}
