import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mic, Search as SearchIcon, X } from "lucide-react";
import { searchSuggestions } from "../lib/searchData";
import { cn } from "../lib/utils";

type Props = {
  variant?: "home" | "serp";
  initialQuery?: string;
  autoFocus?: boolean;
};

export function SearchBar({ variant = "home", initialQuery = "", autoFocus = false }: Props) {
  const [query, setQuery] = useState(initialQuery);
  const [focused, setFocused] = useState(false);
  const [phIndex, setPhIndex] = useState(0);
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => setQuery(initialQuery), [initialQuery]);

  useEffect(() => {
    if (focused || query) return;
    const id = window.setInterval(() => setPhIndex((i) => (i + 1) % searchSuggestions.length), 2200);
    return () => window.clearInterval(id);
  }, [focused, query]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return searchSuggestions.slice(0, 6);
    return searchSuggestions.filter((s) => s.toLowerCase().includes(q)).slice(0, 6);
  }, [query]);

  const submit = (q: string) => {
    if (!q.trim()) return;
    navigate(`/serp?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <div className={cn("relative w-full", variant === "home" ? "max-w-xl" : "max-w-2xl")}>
      <div
        className={cn(
          "flex items-center gap-3 rounded-full border bg-[var(--background)] px-5 transition-shadow",
          variant === "home" ? "h-12" : "h-11",
          focused ? "shadow-md border-[var(--ring)]" : "border-[var(--border)] hover:shadow-sm",
        )}
      >
        <SearchIcon className="h-4 w-4 text-[var(--muted-foreground)] shrink-0" />
        <div className="relative flex-1">
          <input
            ref={ref}
            autoFocus={autoFocus}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => window.setTimeout(() => setFocused(false), 120)}
            onKeyDown={(e) => {
              if (e.key === "Enter") submit(query);
            }}
            className="w-full bg-transparent outline-none text-sm placeholder:text-transparent"
            placeholder="search"
            aria-label="Search"
          />
          {!query && !focused && (
            <span
              key={phIndex}
              className="pointer-events-none absolute inset-y-0 left-0 flex items-center text-sm text-[var(--muted-foreground)]"
              style={{ animation: "rotate-placeholder 2.2s ease-in-out" }}
            >
              {searchSuggestions[phIndex]}
            </span>
          )}
        </div>
        {query && (
          <button onClick={() => setQuery("")} className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]" aria-label="Clear">
            <X className="h-4 w-4" />
          </button>
        )}
        <Mic className="h-4 w-4 text-[var(--muted-foreground)] shrink-0" />
      </div>

      {focused && filtered.length > 0 && (
        <ul className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--popover)] py-2 shadow-lg">
          {filtered.map((s) => (
            <li key={s}>
              <button
                onMouseDown={(e) => {
                  e.preventDefault();
                  setQuery(s);
                  submit(s);
                }}
                className="flex w-full items-center gap-3 px-5 py-2 text-left text-sm hover:bg-[var(--accent)]"
              >
                <SearchIcon className="h-4 w-4 text-[var(--muted-foreground)]" />
                {s}
              </button>
            </li>
          ))}
        </ul>
      )}

      {variant === "home" && (
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => submit(query || "best seo specialist")}
            className="rounded-md border border-transparent bg-[var(--secondary)] px-4 py-2 text-sm text-[var(--secondary-foreground)] hover:border-[var(--border)]"
          >
            Google Search
          </button>
          <button
            onClick={() => submit("best seo specialist")}
            className="rounded-md border border-transparent bg-[var(--secondary)] px-4 py-2 text-sm text-[var(--secondary-foreground)] hover:border-[var(--border)]"
          >
            I'm Feeling Lucky
          </button>
        </div>
      )}
    </div>
  );
}
