import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import { SerpResult } from "../components/SerpResult";
import { SerpTabs } from "../components/SerpTabs";
import { AIOverview } from "../components/AIOverview";
import { ToolsPanel } from "../components/ToolsPanel";
import { FeaturedSnippet } from "../components/FeaturedSnippet";
import { PeopleAlsoAsk } from "../components/PeopleAlsoAsk";
import { BlogCards } from "../components/BlogCards";
import { RelatedSearches } from "../components/RelatedSearches";
import { ContactTab } from "../components/ContactTab";
import { SkillsTab } from "../components/SkillsTab";
import { DarkModeToggle } from "../components/DarkModeToggle";
import { getOrderedResults, getTabResults, shouldShowFeaturedSnippet, type SerpTab } from "../lib/searchLogic";
import { usePageMeta } from "../lib/usePageMeta";

const G = ["#4285F4", "#EA4335", "#FBBC05", "#4285F4", "#34A853", "#EA4335"];

export default function Serp() {
  const [params] = useSearchParams();
  const q = params.get("q") ?? "";
  const [tab, setTab] = useState<SerpTab>("all");

  usePageMeta({
    title: q ? `${q} — Jaimin Naykawala` : "Search — Jaimin Naykawala",
    description: `Search results for "${q}" on Jaimin Naykawala's portfolio.`,
  });

  const ordered = useMemo(() => getOrderedResults(q), [q]);
  const tabResults = useMemo(() => getTabResults(tab, ordered), [tab, ordered]);
  const showFeatured = shouldShowFeaturedSnippet(q);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-3 sm:flex-row sm:items-center">
          <Link
            to="/"
            className="select-none text-2xl font-normal tracking-tight"
            style={{ fontFamily: "var(--font-google)" }}
            aria-label="Jaimin home"
          >
            {"Jaimin".split("").map((ch, i) => (
              <span key={i} style={{ color: G[i % G.length] }}>{ch}</span>
            ))}
          </Link>
          <div className="flex-1">
            <SearchBar variant="serp" initialQuery={q} />
          </div>
          <DarkModeToggle />
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <SerpTabs value={tab} onChange={setTab} />
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-8">
          {tab === "skills" ? (
            <SkillsTab />
          ) : tab === "contact" ? (
            <ContactTab />
          ) : (
            <>
              <AIOverview />
              {showFeatured && <FeaturedSnippet />}
              <div className="space-y-6">
                {tabResults.map((r) => (
                  <SerpResult key={r.id} result={r} />
                ))}
                {tabResults.length === 0 && (
                  <p className="text-sm text-[var(--muted-foreground)]">No results in this tab.</p>
                )}
              </div>
              <PeopleAlsoAsk />
              <BlogCards />
              <RelatedSearches />
            </>
          )}
        </div>
        <aside className="hidden lg:block">
          <ToolsPanel />
        </aside>
      </main>
    </div>
  );
}
