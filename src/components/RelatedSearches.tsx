import { useNavigate } from "react-router-dom";
import { Search as SearchIcon } from "lucide-react";
import { relatedSearches } from "../lib/searchData";

export function RelatedSearches() {
  const navigate = useNavigate();
  return (
    <section className="max-w-2xl">
      <h4 className="mb-3 text-base font-semibold">Related searches</h4>
      <ul className="grid grid-cols-1 divide-y divide-[var(--border)] overflow-hidden rounded-2xl border border-[var(--border)] sm:grid-cols-2 sm:divide-y-0">
        {relatedSearches.map((s, i) => (
          <li key={s} className={"sm:" + (i % 2 === 0 ? "border-r" : "") + " sm:border-[var(--border)]"}>
            <button
              onClick={() => navigate(`/serp?q=${encodeURIComponent(s)}`)}
              className="flex w-full items-center gap-3 px-5 py-3 text-left text-sm hover:bg-[var(--accent)]/40"
            >
              <SearchIcon className="h-4 w-4 text-[var(--muted-foreground)]" />
              {s}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
