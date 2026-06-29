import { Link } from "react-router-dom";
import { ArrowRight, MapPin, ExternalLink, TrendingUp, BarChart2, Target } from "lucide-react";
import { usePageMeta } from "../lib/usePageMeta";
import { LINKEDIN_URL } from "../components/SocialLinks";

const experiences = [
  {
    id: "sr-marketing-exec",
    role: "Sr. Marketing Executive",
    company: "Refrens",
    companyUrl: "https://www.refrens.com/",
    period: "08/2024 – Present",
    location: "Surat, Gujarat",
    current: true,
    summary:
      "Leading multi-platform PPC and SEO strategy at a B2B SaaS platform, driving measurable growth across organic traffic, keyword visibility, and paid campaign efficiency.",
    metrics: [
      { label: "Organic Traffic", value: "+82%", sub: "YoY growth" },
      { label: "Non-branded Keywords", value: "+77%", sub: "footprint increase" },
      { label: "Client ROI", value: "+40%", sub: "via PPC optimization" },
      { label: "CTR Boost", value: "+25%", sub: "ad copy & visuals" },
    ],
    achievements: [
      "Led strategy for multi-platform PPC campaigns, increasing client ROI by 40% through effective bid optimization and keyword strategy.",
      "Drove overall SEO improvement and blog growth including technical audits, content planning, and organic growth strategy.",
      "Increased non-branded keyword footprint by 77% through targeted content and on-page optimization.",
      "Conducted technical SEO audits and resolved crawling, indexing, and performance issues.",
      "Planned and executed blog content strategy to drive organic traffic.",
      "Optimized internal linking and website structure for better crawlability and ranking.",
      "Conducted comprehensive competitive analysis and keyword research using Google Ads, resulting in a 30% increase in campaign efficiency.",
      "Collaborated closely with the creative team to produce engaging ad copy and visuals, boosting click-through rates by 25%.",
    ],
  },
  {
    id: "marketing-exec",
    role: "Marketing Executive",
    company: "Refrens",
    companyUrl: "https://www.refrens.com/",
    period: "06/2025 – 12/2025",
    location: "Surat, Gujarat",
    current: false,
    summary:
      "Focused on India funnel (GST businesses) — conversion optimization, page speed improvements, and product-led SEO strategy targeting Indian SMBs.",
    metrics: [
      { label: "India Funnel Traffic", value: "+25%", sub: "overall increase" },
      { label: "Conversion Rate", value: "+18%", sub: "via A/B testing" },
    ],
    achievements: [
      "Focused on India funnel (GST businesses) with conversion optimization, page speed improvements, and product-led SEO strategy.",
      "Increased overall traffic by 25% for the India funnel.",
      "Improved page speed and Core Web Vitals for key landing pages.",
      "Optimized generator forms and conversion funnel, encouraging users to add GST details.",
      "Implemented in-software strategy to capture GST details from users who signed up without GST.",
      "Implemented A/B testing for landing pages, increasing conversion rates by 18% through iterative testing and optimization.",
    ],
  },
  {
    id: "seo-intern",
    role: "SEO Intern",
    company: "Fortune Analytica",
    companyUrl: undefined,
    period: "03/2024 – 08/2024",
    location: "Surat, Gujarat",
    current: false,
    summary:
      "Drove blog SEO strategy from the ground up — keyword research, content planning, and on-page optimization to grow organic traffic and search visibility.",
    metrics: [
      { label: "Blog Organic Traffic", value: "+177%", sub: "9,445 → 26,180" },
    ],
    achievements: [
      "Increased blog organic traffic by approximately 177% — 9,445 to 26,180 monthly visitors.",
      "Conducted keyword research to identify high-value content opportunities.",
      "Created content briefs and assigned topics to writers.",
      "Led content planning and blog publishing workflow.",
      "Implemented on-page SEO including meta tags, internal linking, headings, and keyword optimization.",
      "Monitored performance using Google Analytics and Google Search Console.",
      "Worked on content optimization and updating existing blogs to improve rankings.",
      "Collaborated with editorial and content team for SEO implementation.",
    ],
  },
];

const roleIcons: Record<string, typeof TrendingUp> = {
  "sr-marketing-exec": TrendingUp,
  "marketing-exec": BarChart2,
  "seo-intern": Target,
};

export default function Experience() {
  usePageMeta({
    title: "Experience — Jaimin Naykawala",
    description: "Career journey of Jaimin Naykawala — Sr. Marketing Executive at Refrens, SEO, PPC, and content strategy.",
  });

  return (
    <div className="kh-root min-h-screen">
      {/* Nav */}
      <nav className="sticky top-4 z-50 mx-auto flex max-w-3xl items-center justify-between rounded-full border border-[var(--kh-gray-200)] bg-white/80 px-5 py-2 shadow-sm backdrop-blur">
        <Link to="/" className="kh-display text-lg font-semibold">Jaimin</Link>
        <div className="hidden gap-6 text-sm text-[var(--kh-gray-600)] sm:flex">
          <Link to="/about" className="hover:text-[var(--kh-gray-900)]">About</Link>
          <Link to="/case-studies" className="hover:text-[var(--kh-gray-900)]">Case Studies</Link>
          <Link to="/skills" className="hover:text-[var(--kh-gray-900)]">Skills</Link>
          <Link to="/experience" className="font-medium text-[var(--kh-gray-900)]">Experience</Link>
        </div>
        <Link
          to="/contact"
          className="rounded-full bg-[var(--kh-purple)] px-4 py-1.5 text-sm font-medium text-white hover:opacity-90"
        >
          Hire me
        </Link>
      </nav>

      {/* Hero */}
      <header className="mx-auto max-w-3xl px-6 pt-16 pb-10">
        <span className="kh-fade-up inline-flex items-center gap-2 rounded-full border border-[var(--kh-gray-200)] bg-white px-3 py-1 text-xs text-[var(--kh-gray-600)]">
          Marketing · SEO · PPC · Content Strategy
        </span>
        <h1
          className="kh-display kh-fade-up mt-5 text-4xl font-semibold leading-tight sm:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          The journey so far.
        </h1>
        <p
          className="kh-fade-up mt-4 max-w-xl text-base text-[var(--kh-gray-600)]"
          style={{ animationDelay: "160ms" }}
        >
          From an SEO intern to leading multi-platform marketing strategy — every role added a layer to how I think about organic growth, conversion, and content.
        </p>
      </header>

      {/* Timeline */}
      <main className="mx-auto max-w-3xl px-6 pb-16">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-3 bottom-3 w-px bg-[var(--kh-gray-200)]" />

          <ol className="space-y-10">
            {experiences.map((exp, i) => {
              const Icon = roleIcons[exp.id];
              return (
                <li
                  key={exp.id}
                  className="kh-fade-up relative pl-12"
                  style={{ animationDelay: `${(i + 2) * 80}ms` }}
                >
                  {/* Timeline dot */}
                  <span
                    className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border-2 shadow-sm"
                    style={{
                      borderColor: exp.current ? "var(--kh-purple)" : "var(--kh-gray-200)",
                      background: exp.current ? "var(--kh-purple-xlight)" : "white",
                      color: exp.current ? "var(--kh-purple)" : "var(--kh-gray-400)",
                    }}
                  >
                    <Icon className="h-4 w-4" />
                  </span>

                  {/* Card */}
                  <div
                    className="rounded-2xl border bg-white p-6 transition-shadow hover:shadow-md"
                    style={{
                      borderColor: exp.current ? "var(--kh-purple-mid)" : "var(--kh-gray-200)",
                      boxShadow: exp.current ? "0 0 0 1px var(--kh-purple-xlight)" : undefined,
                    }}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="kh-display text-xl font-semibold text-[var(--kh-gray-900)]">
                            {exp.role}
                          </h2>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-[var(--kh-purple-xlight)] px-2.5 py-0.5 text-xs font-medium text-[var(--kh-purple)]">
                              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--kh-purple)]" />
                              Current
                            </span>
                          )}
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-[var(--kh-gray-600)]">
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 font-medium hover:text-[var(--kh-purple)]"
                            >
                              {exp.company}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          ) : (
                            <span className="font-medium">{exp.company}</span>
                          )}
                          <span className="text-[var(--kh-gray-300)]">·</span>
                          <span>{exp.period}</span>
                          <span className="text-[var(--kh-gray-300)]">·</span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="mt-4 text-sm leading-relaxed text-[var(--kh-gray-600)]">
                      {exp.summary}
                    </p>

                    {/* Metrics */}
                    {exp.metrics.length > 0 && (
                      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {exp.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="rounded-xl border border-[var(--kh-gray-100)] bg-[var(--kh-gray-50)] p-3"
                          >
                            <div className="text-xs text-[var(--kh-gray-400)]">{m.label}</div>
                            <div
                              className="kh-display mt-0.5 text-xl font-semibold"
                              style={{ color: "var(--kh-purple)" }}
                            >
                              {m.value}
                            </div>
                            <div className="text-xs text-[var(--kh-gray-400)]">{m.sub}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Achievements */}
                    <ul className="mt-5 space-y-2">
                      {exp.achievements.map((a, idx) => (
                        <li key={idx} className="flex gap-2.5 text-sm text-[var(--kh-gray-600)]">
                          <span
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: "var(--kh-purple)" }}
                          />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* Timeline end marker */}
          <div className="relative mt-10 pl-12">
            <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-[var(--kh-gray-300)] bg-white text-xs text-[var(--kh-gray-400)]">
              '24
            </span>
            <div className="flex items-center gap-3 rounded-2xl border border-dashed border-[var(--kh-gray-200)] bg-white px-5 py-4 text-sm text-[var(--kh-gray-400)]">
              The starting point. Built habits in research, analytics, and execution that carry forward into every role since.
            </div>
          </div>
        </div>
      </main>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="rounded-3xl bg-[var(--kh-gray-900)] p-10 text-center text-white">
          <h2 className="kh-display text-2xl font-semibold sm:text-3xl">
            Looking to grow your organic presence?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-[var(--kh-gray-300)]">
            SEO, PPC, content strategy — or the full stack. Let's talk about what your funnel actually needs.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-[var(--kh-purple)] px-5 py-2.5 text-sm font-medium hover:opacity-90"
            >
              Get in touch
            </Link>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium hover:bg-white/10"
            >
              Message on LinkedIn <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--kh-gray-200)] py-8 text-center text-xs text-[var(--kh-gray-400)]">
        © {new Date().getFullYear()} Jaimin Naykawala · Built with care.
      </footer>
    </div>
  );
}
