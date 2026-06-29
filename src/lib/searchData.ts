export type SerpResult = {
  id: string;
  title: string;
  url: string;
  displayUrl: string;
  snippet: string;
  category: "about" | "case-studies" | "projects" | "skills" | "experience" | "contact";
};

export const serpResults: SerpResult[] = [
  {
    id: "about",
    title: "About — Jaimin Naykawala, SEO Specialist",
    url: "/about",
    displayUrl: "jaiminnaykawala.com › about",
    snippet:
      "SEO Specialist with a developer background. Technical SEO, content strategy, and AEO/GEO treated as one system. Built a social platform before going full-time into SEO.",
    category: "about",
  },
  {
    id: "case-studies",
    title: "Case Studies — How real SEO problems were solved",
    url: "/case-studies",
    displayUrl: "jaiminnaykawala.com › case-studies",
    snippet:
      "Six in-depth case studies on traffic recovery, AEO across ChatGPT/Perplexity/Claude/Gemini, AI content engines, and SaaS audits.",
    category: "case-studies",
  },
  {
    id: "projects",
    title: "Projects — 177% organic traffic growth and more",
    url: "/projects",
    displayUrl: "jaiminnaykawala.com › projects",
    snippet:
      "Blog SEO Growth (9,445 → 26,180 monthly visitors), SaaS SEO optimization, and a full-stack social media platform.",
    category: "projects",
  },
  {
    id: "skills",
    title: "Skills — Technical SEO, Content, AEO, GEO, Analytics",
    url: "/skills",
    displayUrl: "jaiminnaykawala.com › skills",
    snippet:
      "Skill catalog covering Technical SEO, Site Architecture, Schema, Search Intent, Answer Engine Optimization, and Generative Engine Optimization.",
    category: "skills",
  },
  {
    id: "experience",
    title: "Experience — SEO Specialist · 2024",
    url: "/experience",
    displayUrl: "jaiminnaykawala.com › experience",
    snippet:
      "SEO Specialist · Mar 2024 – Aug 2024. Drove 177% organic traffic growth, fixed Core Web Vitals, rebuilt internal linking architecture.",
    category: "experience",
  },
  {
    id: "contact",
    title: "Contact — Hire Jaimin Naykawala",
    url: "/contact",
    displayUrl: "jaiminnaykawala.com › contact",
    snippet:
      "Open to consulting, contract, and full-time SEO roles. Reach out via the form or LinkedIn.",
    category: "contact",
  },
];

export const searchSuggestions = [
  "best seo specialist",
  "jaimin naykawala",
  "technical seo expert",
  "answer engine optimization",
  "seo case studies",
  "hire seo consultant",
  "generative engine optimization",
];

export type Tool = { name: string; description: string };
export const tools: Tool[] = [
  { name: "Google Search Console", description: "Indexation, performance, core web vitals" },
  { name: "Google Analytics 4", description: "Traffic, engagement, conversion attribution" },
  { name: "Looker Studio", description: "Custom SEO dashboards and reporting" },
  { name: "Ahrefs", description: "Backlinks, keyword research, content gap analysis" },
  { name: "Semrush", description: "Rank tracking, site audit, competitor research" },
  { name: "Microsoft Clarity", description: "Heatmaps, session recordings, UX signals" },
  { name: "Metabase", description: "BI for product-led SEO insights" },
  { name: "Screaming Frog", description: "Technical crawls and site audits" },
  { name: "Google Sheets", description: "Workflow automation and data modelling" },
  { name: "LLM Tools", description: "ChatGPT, Claude, Perplexity for AEO research" },
];

export type BlogPost = {
  title: string;
  source: string;
  excerpt: string;
  href: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "How ClickUp's Blog Lost 97.6% of Its Traffic",
    source: "Case Study",
    excerpt: "A 15-month decline traced to thin AI content, cannibalization, and misread intent.",
    href: "/case-studies/clickup-blog-traffic-loss",
  },
  {
    title: "Intent-Based Queries Across 5 AI Search Engines",
    source: "AEO Research",
    excerpt: "Comparing ChatGPT, Perplexity, Claude, Gemini, and AI Overviews on real intents.",
    href: "/case-studies/intent-queries-ai-search",
  },
  {
    title: "Build an AI Content Engine That Knows Your Product",
    source: "Workflow",
    excerpt: "A repeatable system for product-grounded content generation, not generic AI slop.",
    href: "/case-studies/ai-content-engine",
  },
  {
    title: "Auto-update Competitor Posts With Ahrefs + Claude",
    source: "Automation",
    excerpt: "How an Ahrefs Firehose feed plus Claude keeps your top pages ahead of decay.",
    href: "/case-studies/auto-update-competitor-posts",
  },
];

export const peopleAlsoAsk = [
  {
    q: "What does an SEO Specialist actually do?",
    a: "Combines technical audits, content strategy, and analytics to grow non-paid search traffic — and increasingly, AI-search visibility (AEO/GEO).",
  },
  {
    q: "How do you measure SEO success?",
    a: "Organic sessions, keyword rankings, indexation health, Core Web Vitals, and assisted conversions — tied to revenue or product activation, not vanity metrics.",
  },
  {
    q: "What is AEO (Answer Engine Optimization)?",
    a: "Optimizing content so it gets cited or quoted by ChatGPT, Perplexity, Claude, Gemini, and AI Overviews — a different game than ranking on the blue links.",
  },
  {
    q: "Is SEO still worth it in the AI era?",
    a: "Yes — but the surface has expanded. Technical SEO + content quality now also drives AI citations and grounding, not just SERP rank.",
  },
];

export const relatedSearches = [
  "seo specialist near me",
  "best technical seo consultant",
  "hire freelance seo",
  "answer engine optimization specialist",
  "saas seo expert",
  "generative engine optimization",
  "seo case studies 2025",
  "jaimin naykawala linkedin",
];
