import type { TempoPage, TempoStoryboard } from "tempo-sdk";
import { MemoryRouter } from "react-router-dom";
import { SearchBar } from "../../../src/components/SearchBar";
import { SerpResult } from "../../../src/components/SerpResult";
import { AIOverview } from "../../../src/components/AIOverview";
import { ToolsPanel } from "../../../src/components/ToolsPanel";
import { FeaturedSnippet } from "../../../src/components/FeaturedSnippet";
import { PeopleAlsoAsk } from "../../../src/components/PeopleAlsoAsk";
import { BlogCards } from "../../../src/components/BlogCards";
import { RelatedSearches } from "../../../src/components/RelatedSearches";
import { CoverGraphic } from "../../../src/components/CoverGraphic";
import { DarkModeToggle } from "../../../src/components/DarkModeToggle";
import { Avatar } from "../../../src/components/Avatar";
import { serpResults } from "../../../src/lib/searchData";
import { skills } from "../../../src/lib/skillsData";
import { Badge } from "../../../src/components/ui/badge";
import { Button } from "../../../src/components/ui/button";
import { Star, ShoppingCart, Heart } from "lucide-react";

const page: TempoPage = {
  name: "Portfolio Components",
};

export default page;

const withRouter = (children: React.ReactNode) => (
  <MemoryRouter>
    <div style={{ padding: 24, background: "var(--background)", color: "var(--foreground)", minHeight: "100%" }}>
      {children}
    </div>
  </MemoryRouter>
);

export const SearchBarHome: TempoStoryboard = {
  render: () => withRouter(<SearchBar variant="home" />),
  name: "SearchBar (Home)",
  layout: { x: 0, y: 0, width: 720, height: 280 },
};

export const SearchBarSerp: TempoStoryboard = {
  render: () => withRouter(<SearchBar variant="serp" initialQuery="best seo specialist" />),
  name: "SearchBar (SERP)",
  layout: { x: 760, y: 0, width: 720, height: 200 },
};

export const SerpResultCard: TempoStoryboard = {
  render: () => withRouter(<SerpResult result={serpResults[0]} />),
  name: "SerpResult",
  layout: { x: 0, y: 320, width: 720, height: 220 },
};

export const FeaturedSnippetCard: TempoStoryboard = {
  render: () => withRouter(<FeaturedSnippet />),
  name: "FeaturedSnippet",
  layout: { x: 760, y: 240, width: 720, height: 320 },
};

export const AIOverviewPanel: TempoStoryboard = {
  render: () => withRouter(<AIOverview />),
  name: "AIOverview",
  layout: { x: 0, y: 580, width: 720, height: 320 },
};

export const ToolsPanelCard: TempoStoryboard = {
  render: () => withRouter(<div style={{ width: 320 }}><ToolsPanel /></div>),
  name: "ToolsPanel",
  layout: { x: 760, y: 600, width: 420, height: 720 },
};

export const PeopleAlsoAskList: TempoStoryboard = {
  render: () => withRouter(<PeopleAlsoAsk />),
  name: "PeopleAlsoAsk",
  layout: { x: 0, y: 940, width: 720, height: 360 },
};

export const BlogCardsRow: TempoStoryboard = {
  render: () => withRouter(<BlogCards />),
  name: "BlogCards",
  layout: { x: 0, y: 1340, width: 720, height: 480 },
};

export const RelatedSearchesRow: TempoStoryboard = {
  render: () => withRouter(<RelatedSearches />),
  name: "RelatedSearches",
  layout: { x: 1220, y: 600, width: 720, height: 380 },
};

export const CoverGraphicSample: TempoStoryboard = {
  render: () =>
    withRouter(
      <CoverGraphic slug="clickup-blog-traffic-loss" gradient="from-violet-600 via-fuchsia-500 to-rose-500" className="h-60 w-full rounded-2xl" />,
    ),
  name: "CoverGraphic",
  layout: { x: 1220, y: 1020, width: 480, height: 320 },
};

export const DarkModeToggleStory: TempoStoryboard = {
  render: () =>
    withRouter(
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <DarkModeToggle />
        <span className="text-sm text-[var(--muted-foreground)]">Toggle dark mode</span>
      </div>,
    ),
  name: "DarkModeToggle",
  layout: { x: 1740, y: 1020, width: 280, height: 140 },
};

export const SkillCardStory: TempoStoryboard = {
  render: () => {
    const s = skills[0];
    return withRouter(
      <article className="flex flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]" style={{ width: 280 }}>
        <div className="relative h-32 bg-gradient-to-br from-[var(--primary)]/20 via-[var(--accent)] to-[var(--secondary)]">
          <button className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-rose-500 shadow">
            <Heart className="h-4 w-4" />
          </button>
          <Badge className="absolute left-2 top-2">Bestseller</Badge>
        </div>
        <div className="p-4">
          <h3 className="text-sm font-semibold">{s.name}</h3>
          <p className="mt-1 text-xs text-[var(--muted-foreground)]">{s.tagline}</p>
          <div className="mt-3 flex items-center gap-1 text-xs">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span>{s.rating.toFixed(1)}</span>
            <span className="text-[var(--muted-foreground)]">({s.reviews})</span>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm font-semibold">{s.price}</span>
            <Button size="sm" className="gap-1">
              <ShoppingCart className="h-3.5 w-3.5" /> Hire
            </Button>
          </div>
        </div>
      </article>,
    );
  },
  name: "SkillCard",
  layout: { x: 1220, y: 1380, width: 360, height: 460 },
};

export const AvatarStory: TempoStoryboard = {
  render: () =>
    withRouter(
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Avatar name="Jaimin Naykawala" size={40} />
        <Avatar name="Jaimin Naykawala" size={64} />
        <Avatar name="Jaimin Naykawala" size={96} />
      </div>,
    ),
  name: "Avatar",
  layout: { x: 1620, y: 1380, width: 380, height: 220 },
};
