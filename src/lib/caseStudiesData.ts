export type CaseStudyBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] };

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  dateISO: string;
  author: string;
  readTime: string;
  cover: string;
  tag: string;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
  content: CaseStudyBlock[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "clickup-blog-traffic-loss",
    title: "How ClickUp's Blog Lost 97.6% of Its Traffic in 15 Months",
    subtitle: "A teardown of one of the most public SEO collapses in SaaS — and the patterns that caused it.",
    excerpt:
      "Thin AI content, intent mismatch, and aggressive cannibalization. A forensic look at what went wrong and what to learn.",
    date: "Feb 14, 2026",
    dateISO: "2026-02-14",
    author: "Jaimin Naykawala",
    readTime: "12 min read",
    cover: "from-violet-600 via-fuchsia-500 to-rose-500",
    tag: "Audit",
    featured: true,
    metrics: [
      { label: "Traffic loss", value: "-97.6%" },
      { label: "Time window", value: "15 months" },
      { label: "Pages affected", value: "1,200+" },
    ],
    content: [
      { type: "p", text: "ClickUp's blog was a poster-child for content velocity. By late 2024, it was a poster-child for what happens when velocity outruns judgment." },
      { type: "h2", text: "What happened" },
      { type: "p", text: "Between mid-2023 and late 2024, organic sessions to /blog cratered. Not a slow bleed — a near-vertical drop that aligned almost too cleanly with Google's helpful-content updates." },
      { type: "list", items: [
        "AI-assisted content shipped without product grounding",
        "Cannibalization across 4–6 near-duplicate URLs per topic",
        "Intent mismatch: informational pages targeting bottom-funnel queries",
        "Internal linking that spread equity uniformly instead of concentrating it",
      ] },
      { type: "h2", text: "What I'd do differently" },
      { type: "p", text: "Start from the product, not the keyword tool. Cluster by job-to-be-done. Kill duplicates before publishing the next batch. Measure assisted conversion, not impressions." },
      { type: "quote", text: "Velocity is a multiplier. Multiply by zero and you still get zero.", cite: "Jaimin" },
    ],
  },
  {
    slug: "intent-queries-ai-search",
    title: "I Ran 8 Intent-Based Queries Across ChatGPT, Perplexity, Claude, Gemini, and AI Overviews",
    subtitle: "Where each engine pulls citations from, and what it means for AEO strategy in 2026.",
    excerpt:
      "Same question, five answers. Mapping which sources each AI search surface trusts on commercial intent.",
    date: "Jan 30, 2026",
    dateISO: "2026-01-30",
    author: "Jaimin Naykawala",
    readTime: "10 min read",
    cover: "from-sky-500 via-cyan-400 to-emerald-400",
    tag: "AEO",
    metrics: [
      { label: "Engines tested", value: "5" },
      { label: "Queries", value: "8" },
      { label: "Citations analyzed", value: "112" },
    ],
    content: [
      { type: "p", text: "AEO is not a monolith. Each AI surface has its own citation logic, and acting like they're interchangeable is how you waste a quarter." },
      { type: "h2", text: "Method" },
      { type: "p", text: "Eight commercial-intent queries across the same five engines, repeated three times over two weeks to filter run-to-run noise." },
      { type: "list", items: [
        "Perplexity over-indexes on Reddit and high-DR review sites",
        "ChatGPT cites canonical brand pages disproportionately",
        "Claude favors documentation and primary sources",
        "Gemini leans into Google's existing ranking signals",
        "AI Overviews lag — what wins blue links 6 weeks ago wins here today",
      ] },
    ],
  },
  {
    slug: "ai-content-engine",
    title: "How to Build an AI Content Engine That Knows Your Product",
    subtitle: "A grounded, repeatable workflow for content that actually converts — not generic AI slop.",
    excerpt:
      "RAG over your docs, structured prompts per content type, and a human-in-the-loop QA gate. The blueprint.",
    date: "Jan 18, 2026",
    dateISO: "2026-01-18",
    author: "Jaimin Naykawala",
    readTime: "9 min read",
    cover: "from-indigo-600 via-blue-500 to-cyan-400",
    tag: "Workflow",
    content: [
      { type: "p", text: "Most 'AI content engines' are a wrapper around ChatGPT and a Notion template. That's a generator, not an engine." },
      { type: "h2", text: "The four pieces" },
      { type: "list", items: [
        "Grounding: a vector index over product docs, changelog, support tickets",
        "Templates: one prompt per content type with explicit IO contracts",
        "QA: an automated checklist (claims, links, brand voice) before human review",
        "Feedback: edits flow back as fine-tuning signal, not lost",
      ] },
    ],
  },
  {
    slug: "auto-update-competitor-posts",
    title: "Auto-update Competitor Posts With Ahrefs Firehose and Claude",
    subtitle: "An automated pipeline that watches competitor URLs and drafts updates the day they decay.",
    excerpt:
      "Ahrefs Firehose for the signal, Claude for the draft, a Sheets-driven approval queue for the human.",
    date: "Dec 22, 2025",
    dateISO: "2025-12-22",
    author: "Jaimin Naykawala",
    readTime: "8 min read",
    cover: "from-amber-500 via-orange-500 to-rose-500",
    tag: "Automation",
    content: [
      { type: "p", text: "Content decay is predictable. The first competitor to refresh wins. Doing it manually means you lose the race." },
      { type: "h2", text: "The pipeline" },
      { type: "list", items: [
        "Ahrefs Firehose flags ranking changes on tracked URLs",
        "Claude reads the live competitor + your version and drafts an update",
        "A Sheets queue gives the human a 1-click approve/reject",
        "Approved drafts auto-PR into the CMS",
      ] },
    ],
  },
  {
    slug: "ibm-ai-search-without-publishing",
    title: "How IBM Wins AI Search Without Publishing Anything New",
    subtitle: "Decade-old documentation, schema-rich product pages, and an authority moat that AI engines respect.",
    excerpt:
      "An old-internet brand quietly dominates AI citations. Here's the structural reason — and what mid-market brands can copy.",
    date: "Dec 5, 2025",
    dateISO: "2025-12-05",
    author: "Jaimin Naykawala",
    readTime: "11 min read",
    cover: "from-slate-700 via-blue-700 to-indigo-600",
    tag: "AEO",
    content: [
      { type: "p", text: "IBM doesn't out-publish anyone in 2026. They don't need to. Their authority compounds through structure." },
      { type: "h2", text: "Three structural advantages" },
      { type: "list", items: [
        "Schema markup that's been correct for a decade",
        "Documentation pages that read as primary sources to LLMs",
        "External citations from .edu/.gov that nobody can buy",
      ] },
    ],
  },
  {
    slug: "saas-audit-saved-rebuild",
    title: "The SEO Audit That Saved a SaaS From a Full Rebuild",
    subtitle: "A founder was 3 weeks from a Next.js migration. The actual problem was 14 lines of robots.txt.",
    excerpt:
      "A technical audit that traced 'the framework is the problem' back to a misconfigured robots and a CDN cache rule.",
    date: "Nov 11, 2025",
    dateISO: "2025-11-11",
    author: "Jaimin Naykawala",
    readTime: "7 min read",
    cover: "from-emerald-500 via-teal-500 to-cyan-500",
    tag: "Technical",
    metrics: [
      { label: "Indexation recovered", value: "94%" },
      { label: "Time to fix", value: "2 days" },
      { label: "Migration avoided", value: "$80k" },
    ],
    content: [
      { type: "p", text: "The founder had a quote from an agency for a full rebuild. The real fix was a 14-line robots.txt change and a CDN cache invalidation." },
      { type: "h2", text: "The audit path" },
      { type: "list", items: [
        "Crawl with Screaming Frog — flagged blocked /app routes",
        "GSC Coverage report confirmed: 'blocked by robots.txt'",
        "Cloudflare cache rule was serving stale headers",
        "14 lines of robots.txt, one cache purge, indexation back in 72h",
      ] },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
