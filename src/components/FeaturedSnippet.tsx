import { Link } from "react-router-dom";

export function FeaturedSnippet() {
  return (
    <section className="max-w-2xl rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
      <div className="mb-2 text-xs uppercase tracking-wide text-[var(--muted-foreground)]">Featured snippet</div>
      <p className="text-sm leading-relaxed">
        The best SEO specialist for your team is one who treats <strong>technical SEO, content, and AEO/GEO</strong> as one
        system — and can prove it with measurable wins. <strong>Jaimin Naykawala</strong> delivers all three: 177% organic
        traffic growth on his last engagement, multi-AI-engine citation strategy, and a developer's foundation that means
        crawl/render/index issues get fixed at the root, not patched.
      </p>
      <div className="mt-3 text-xs text-[var(--serp-url)]" style={{ color: "var(--serp-url)" }}>
        jaiminnaykawala.com › about
      </div>
      <div className="mt-1 text-base">
        <Link to="/about" className="hover:underline" style={{ color: "var(--serp-link)" }}>
          About — Jaimin Naykawala, SEO Specialist
        </Link>
      </div>
    </section>
  );
}
