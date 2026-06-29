import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search as SearchIcon, X } from "lucide-react";
import { Avatar } from "../components/Avatar";
import { CoverGraphic } from "../components/CoverGraphic";
import { caseStudies } from "../lib/caseStudiesData";
import { usePageMeta } from "../lib/usePageMeta";

const ACCENT = "#3b2bbd";
const BORDER = "#e5e5e0";

export default function CaseStudies() {
  usePageMeta({
    title: "Case Studies — Jaimin Naykawala",
    description: "In-depth case studies on SEO audits, AEO across AI engines, and traffic recovery.",
  });

  const [showSearch, setShowSearch] = useState(false);
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const v = q.trim().toLowerCase();
    if (!v) return caseStudies;
    return caseStudies.filter(
      (c) =>
        c.title.toLowerCase().includes(v) ||
        c.excerpt.toLowerCase().includes(v) ||
        c.tag.toLowerCase().includes(v),
    );
  }, [q]);

  const featured = caseStudies.find((c) => c.featured) ?? caseStudies[0];
  const recent = filtered.filter((c) => c.slug !== featured.slug);

  return (
    <div className="cs-root min-h-screen">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6" style={{ borderBottom: `1px solid ${BORDER}` }}>
        <Link to="/" className="cs-display text-xl font-semibold">Search & Strategy</Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link to="/" style={{ fontFamily: "system-ui" }} className="hover:underline">Home</Link>
          <Link to="/about" style={{ fontFamily: "system-ui" }} className="hover:underline">About</Link>
          <Link to="/contact" style={{ fontFamily: "system-ui" }} className="hover:underline">Contact</Link>
          <button
            onClick={() => setShowSearch((v) => !v)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full"
            style={{ border: `1px solid ${BORDER}` }}
            aria-label="Toggle search"
          >
            {showSearch ? <X className="h-4 w-4" /> : <SearchIcon className="h-4 w-4" />}
          </button>
        </nav>
      </header>

      {showSearch && (
        <div className="mx-auto max-w-3xl px-6 pt-4">
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search case studies, tags, topics..."
            className="w-full rounded-md bg-transparent px-3 py-3 text-base outline-none"
            style={{ border: `1px solid ${BORDER}`, fontFamily: "system-ui" }}
          />
        </div>
      )}

      <main className="mx-auto max-w-3xl px-6 py-10">
        <Link to={`/case-studies/${featured.slug}`} className="block group">
          <CoverGraphic slug={featured.slug} gradient={featured.cover} className="h-72 w-full rounded-lg" />
          <div className="mt-5">
            <span className="cs-display text-xs uppercase tracking-widest" style={{ color: ACCENT }}>
              Featured · {featured.tag}
            </span>
            <h1 className="cs-display mt-2 text-4xl font-semibold leading-[1.1] group-hover:underline">{featured.title}</h1>
            <p className="mt-3 text-lg text-[#3a3a3a]">{featured.subtitle}</p>
            <div className="mt-3 flex items-center gap-3 text-sm" style={{ color: "#5a5a5a", fontFamily: "system-ui" }}>
              <Avatar name={featured.author} size={28} />
              <span>{featured.author}</span>
              <span>·</span>
              <time dateTime={featured.dateISO}>{featured.date}</time>
              <span>·</span>
              <span>{featured.readTime}</span>
            </div>
          </div>
        </Link>

        <h2 className="cs-display mt-16 mb-6 text-2xl font-semibold" style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: "0.5rem" }}>
          Recent posts
        </h2>
        <div className="space-y-10">
          {recent.map((c) => (
            <Link key={c.slug} to={`/case-studies/${c.slug}`} className="grid grid-cols-1 gap-5 sm:grid-cols-[1fr_180px] group">
              <div>
                <span className="cs-display text-xs uppercase tracking-widest" style={{ color: ACCENT }}>{c.tag}</span>
                <h3 className="cs-display mt-1 text-2xl font-semibold leading-snug group-hover:underline">{c.title}</h3>
                <p className="mt-2 text-base text-[#3a3a3a] line-clamp-3">{c.excerpt}</p>
                <div className="mt-2 text-xs" style={{ color: "#5a5a5a", fontFamily: "system-ui" }}>
                  {c.author} · {c.date} · {c.readTime}
                </div>
              </div>
              <CoverGraphic slug={c.slug} gradient={c.cover} className="h-32 w-full rounded-md sm:h-full" />
            </Link>
          ))}
          {recent.length === 0 && <p className="text-sm" style={{ color: "#5a5a5a" }}>No matching posts.</p>}
        </div>
      </main>

      <footer className="mx-auto max-w-3xl px-6 py-10 text-xs" style={{ color: "#5a5a5a", borderTop: `1px solid ${BORDER}`, fontFamily: "system-ui" }}>
        © {new Date().getFullYear()} Jaimin Naykawala · A publication on SEO, AEO, and product-led search.
      </footer>
    </div>
  );
}
