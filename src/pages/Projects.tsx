import { ArrowUpRight } from "lucide-react";
import { PageLayout } from "../components/PageLayout";
import { CoverGraphic } from "../components/CoverGraphic";
import { usePageMeta } from "../lib/usePageMeta";

const projects = [
  {
    slug: "blog-seo-growth",
    title: "Blog SEO Growth",
    summary:
      "Took an underperforming SaaS blog from 9,445 to 26,180 monthly organic visitors in 5 months — a 177% lift.",
    tools: ["GSC", "GA4", "Ahrefs", "Looker", "Screaming Frog"],
    results: ["+177% organic traffic", "+25 keywords ranking top-10", "Indexation recovered 94%"],
    gradient: "from-violet-600 via-fuchsia-500 to-rose-500",
    cls: "lg:col-span-2 lg:row-span-2",
  },
  {
    slug: "saas-seo-optimization",
    title: "SaaS SEO Optimization",
    summary: "Core Web Vitals overhaul, schema rebuild, and search-intent realignment across the marketing site.",
    tools: ["Lighthouse", "Schema.org", "Semrush"],
    results: ["LCP 4.1s → 1.8s", "Indexable URLs +62%", "Trial signups +28%"],
    gradient: "from-sky-500 via-cyan-400 to-emerald-400",
    cls: "lg:col-span-2",
  },
  {
    slug: "social-media-platform",
    title: "Social Media Platform",
    summary: "Full-stack build before going full-time into SEO. Informs how I think about product-led search growth.",
    tools: ["TypeScript", "Postgres", "WebSockets"],
    results: ["10k+ users at peak", "Real-time feeds", "Built solo end-to-end"],
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    cls: "lg:col-span-2",
  },
];

export default function Projects() {
  usePageMeta({ title: "Projects — Jaimin Naykawala", description: "Selected SEO and engineering projects." });

  return (
    <PageLayout title="Projects">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="mb-2 text-3xl font-semibold">Selected projects</h1>
        <p className="mb-8 text-sm text-[var(--muted-foreground)]">
          A small set of work that demonstrates how I approach SEO problems end-to-end.
        </p>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 lg:auto-rows-[280px]">
          {projects.map((p) => (
            <article
              key={p.slug}
              className={"group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] " + p.cls}
            >
              <CoverGraphic slug={p.slug} gradient={p.gradient} className="absolute inset-0 opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative z-10 mt-auto p-6 text-white">
                <h2 className="text-2xl font-semibold leading-tight">{p.title}</h2>
                <p className="mt-2 max-w-xl text-sm text-white/85">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span key={t} className="rounded-full bg-white/15 px-2 py-0.5 text-[11px] backdrop-blur">{t}</span>
                  ))}
                </div>
                <ul className="mt-3 space-y-0.5 text-xs text-white/80">
                  {p.results.map((r) => <li key={r}>· {r}</li>)}
                </ul>
                <span className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
