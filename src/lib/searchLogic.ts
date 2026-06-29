import { serpResults, type SerpResult } from "./searchData";

const queryPriorityMap: Record<string, SerpResult["category"][]> = {
  "best seo specialist": ["about", "case-studies", "skills", "projects", "experience", "contact"],
  "jaimin naykawala": ["about", "experience", "projects", "case-studies", "skills", "contact"],
  "seo case studies": ["case-studies", "projects", "about", "skills", "experience", "contact"],
  "hire seo consultant": ["contact", "skills", "about", "case-studies", "projects", "experience"],
  "technical seo expert": ["skills", "case-studies", "about", "projects", "experience", "contact"],
  "answer engine optimization": ["case-studies", "skills", "about", "projects", "experience", "contact"],
  "generative engine optimization": ["skills", "case-studies", "about", "projects", "experience", "contact"],
};

export function getOrderedResults(query: string): SerpResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return serpResults;
  const exact = queryPriorityMap[q];
  if (exact) return exact.map((c) => serpResults.find((r) => r.category === c)!).filter(Boolean);

  const ranked = [...serpResults].sort((a, b) => {
    const score = (r: SerpResult) =>
      (r.title.toLowerCase().includes(q) ? 3 : 0) +
      (r.snippet.toLowerCase().includes(q) ? 2 : 0) +
      (r.category.includes(q) ? 1 : 0);
    return score(b) - score(a);
  });
  return ranked;
}

export function shouldShowFeaturedSnippet(query: string): boolean {
  return query.trim().toLowerCase() === "best seo specialist";
}

export type SerpTab = "all" | "projects" | "skills" | "contact";

export function getTabResults(tab: SerpTab, results: SerpResult[]): SerpResult[] {
  if (tab === "all") return results;
  return results.filter((r) => r.category === tab);
}
