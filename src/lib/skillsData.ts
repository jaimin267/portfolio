export type Skill = {
  id: string;
  name: string;
  category: "Technical" | "Content" | "AI Search" | "Analytics";
  tagline: string;
  years: number;
  demand: "High" | "Very High" | "Hot";
  projects: number;
  rating: number;
  reviews: number;
  proficiency: number;
  badge?: "Bestseller" | "New" | "Hot" | "Pro";
  price: string;
};

export const skills: Skill[] = [
  {
    id: "technical-seo",
    name: "Technical SEO",
    category: "Technical",
    tagline: "Crawl, render, index — fixed at the root.",
    years: 3,
    demand: "Very High",
    projects: 12,
    rating: 4.9,
    reviews: 47,
    proficiency: 95,
    badge: "Bestseller",
    price: "From $1,200",
  },
  {
    id: "content-seo",
    name: "Content SEO",
    category: "Content",
    tagline: "Topical authority, not keyword stuffing.",
    years: 3,
    demand: "High",
    projects: 18,
    rating: 4.8,
    reviews: 62,
    proficiency: 92,
    badge: "Pro",
    price: "From $900",
  },
  {
    id: "answer-engine-optimization",
    name: "Answer Engine Optimization",
    category: "AI Search",
    tagline: "Get cited by ChatGPT, Perplexity, Claude.",
    years: 2,
    demand: "Hot",
    projects: 7,
    rating: 5.0,
    reviews: 19,
    proficiency: 88,
    badge: "Hot",
    price: "From $1,500",
  },
  {
    id: "generative-engine-optimization",
    name: "Generative Engine Optimization",
    category: "AI Search",
    tagline: "Win the AI Overviews surface.",
    years: 1,
    demand: "Hot",
    projects: 5,
    rating: 4.9,
    reviews: 11,
    proficiency: 84,
    badge: "New",
    price: "From $1,500",
  },
  {
    id: "site-architecture",
    name: "Site Architecture",
    category: "Technical",
    tagline: "Internal linking that concentrates equity.",
    years: 3,
    demand: "High",
    projects: 9,
    rating: 4.9,
    reviews: 24,
    proficiency: 90,
    price: "From $1,000",
  },
  {
    id: "seo-analytics",
    name: "SEO Analytics",
    category: "Analytics",
    tagline: "GA4 + GSC + Looker dashboards that mean something.",
    years: 4,
    demand: "Very High",
    projects: 14,
    rating: 4.8,
    reviews: 38,
    proficiency: 93,
    badge: "Bestseller",
    price: "From $800",
  },
  {
    id: "schema-markup",
    name: "Schema Markup",
    category: "Technical",
    tagline: "Structured data done correctly the first time.",
    years: 3,
    demand: "High",
    projects: 11,
    rating: 4.9,
    reviews: 22,
    proficiency: 91,
    price: "From $600",
  },
  {
    id: "search-intent",
    name: "Search Intent",
    category: "Content",
    tagline: "What the user actually wants — not what they typed.",
    years: 3,
    demand: "Very High",
    projects: 16,
    rating: 4.9,
    reviews: 41,
    proficiency: 94,
    badge: "Pro",
    price: "From $700",
  },
];

export const skillCategories = ["All", "Technical", "Content", "AI Search", "Analytics"] as const;
