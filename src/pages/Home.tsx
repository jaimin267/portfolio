import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import { SearchBar } from "../components/SearchBar";
import { DarkModeToggle } from "../components/DarkModeToggle";
import { LINKEDIN_URL } from "../components/SocialLinks";
import { usePageMeta } from "../lib/usePageMeta";

const G = ["#4285F4", "#EA4335", "#FBBC05", "#4285F4", "#34A853", "#EA4335"];

export default function Home() {
  usePageMeta({
    title: "Jaimin Naykawala — SEO Specialist",
    description:
      "SEO Specialist with a developer's foundation. Technical SEO, content strategy, and AEO/GEO treated as one system.",
  });

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="flex items-center justify-end gap-4 px-6 py-4 text-sm">
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/case-studies" className="hover:underline">Case Studies</Link>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
        <DarkModeToggle />
      </header>

      <main className="mx-auto flex max-w-2xl flex-col items-center px-6 pt-24 sm:pt-32">
        <h1
          className="mb-8 select-none text-center text-7xl font-normal tracking-tight sm:text-8xl"
          style={{ fontFamily: "var(--font-google)" }}
          aria-label="Jaimin"
        >
          {"Jaimin".split("").map((ch, i) => (
            <span key={i} style={{ color: G[i % G.length] }}>{ch}</span>
          ))}
        </h1>
        <SearchBar variant="home" autoFocus />
        <p className="mt-12 text-xs text-[var(--muted-foreground)]">
          Try: <em>best seo specialist</em> · <em>jaimin naykawala</em> · <em>seo case studies</em>
        </p>
      </main>

      <footer className="fixed inset-x-0 bottom-0 border-t border-[var(--border)] bg-[var(--secondary)]/40 px-6 py-3 text-xs text-[var(--muted-foreground)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span>India</span>
          <div className="flex gap-4">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/projects" className="hover:underline">Projects</Link>
            <Link to="/skills" className="hover:underline">Skills</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
