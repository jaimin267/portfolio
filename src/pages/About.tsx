import { Link } from "react-router-dom";
import { ArrowRight, Check, Compass, FileText, Map, Play, Quote, Rocket, Target } from "lucide-react";
import { Avatar } from "../components/Avatar";
import { LINKEDIN_URL } from "../components/SocialLinks";
import { usePageMeta } from "../lib/usePageMeta";

const logos = ["ClickUp", "Notion", "Linear", "Vercel", "Stripe", "Plaid"];

const services = [
  { icon: Target, title: "Technical SEO", body: "Crawl, render, index — fixed at the root, not patched at the surface." },
  { icon: FileText, title: "Content Strategy", body: "Topical authority through clusters mapped to real product jobs-to-be-done." },
  { icon: Compass, title: "AEO / GEO", body: "Get cited by ChatGPT, Perplexity, Claude, Gemini, and AI Overviews." },
  { icon: Rocket, title: "Analytics & Reporting", body: "GA4 + GSC + Looker dashboards that tie SEO to revenue, not vanity metrics." },
];

const steps = [
  { n: "01", icon: Compass, title: "Understand", body: "Product, audience, business model. Context first, opinions later." },
  { n: "02", icon: FileText, title: "Audit", body: "Technical crawl, content audit, AEO baseline, analytics health-check." },
  { n: "03", icon: Map, title: "Plan", body: "A prioritized roadmap with effort/impact for every initiative." },
  { n: "04", icon: Play, title: "Execute", body: "Ship, measure, iterate. Weekly async updates, monthly deep reviews." },
];

const principles = [
  "Transparency over theater",
  "Built for how search actually works",
  "Teaching, not gatekeeping",
  "Systems over tactics",
  "No unnecessary complexity",
  "No hype-driven marketing",
];

export default function About() {
  usePageMeta({
    title: "About — Jaimin Naykawala, SEO Specialist",
    description: "SEO Specialist with a developer's foundation. Search, understood from the inside out.",
  });

  return (
    <div className="kh-root min-h-screen">
      <nav className="sticky top-4 z-50 mx-auto flex max-w-3xl items-center justify-between rounded-full border border-[var(--kh-gray-200)] bg-white/80 px-5 py-2 shadow-sm backdrop-blur">
        <Link to="/" className="kh-display text-lg font-semibold">Jaimin</Link>
        <div className="hidden gap-6 text-sm text-[var(--kh-gray-600)] sm:flex">
          <Link to="/projects" className="hover:text-[var(--kh-gray-900)]">Projects</Link>
          <Link to="/case-studies" className="hover:text-[var(--kh-gray-900)]">Case Studies</Link>
          <Link to="/skills" className="hover:text-[var(--kh-gray-900)]">Skills</Link>
          <Link to="/experience" className="hover:text-[var(--kh-gray-900)]">Experience</Link>
        </div>
        <Link
          to="/contact"
          className="rounded-full bg-[var(--kh-purple)] px-4 py-1.5 text-sm font-medium text-white hover:opacity-90"
        >
          Hire me
        </Link>
      </nav>

      <header className="mx-auto max-w-5xl px-6 pt-16 pb-12 text-center">
        <span className="kh-fade-up inline-flex items-center gap-2 rounded-full border border-[var(--kh-gray-200)] bg-white px-3 py-1 text-xs text-[var(--kh-gray-600)]">
          SEO Specialist · Technical · Content · AEO
        </span>
        <h1 className="kh-display kh-fade-up mt-6 text-5xl font-semibold leading-[1.05] sm:text-6xl" style={{ animationDelay: "80ms" }}>
          Search, understood from the<br />
          <span style={{ color: "var(--kh-purple)" }}>inside out.</span>
        </h1>
        <p className="kh-fade-up mx-auto mt-5 max-w-2xl text-base text-[var(--kh-gray-600)]" style={{ animationDelay: "160ms" }}>
          I built a social media platform before going full-time into SEO. That foundation means crawl, render, and index
          issues get fixed at the root — and content strategy gets shaped by what actually drives the product, not by what
          ranks easiest.
        </p>
        <div className="kh-fade-up mt-8 flex justify-center gap-3" style={{ animationDelay: "240ms" }}>
          <Link to="/case-studies" className="rounded-full bg-[var(--kh-gray-900)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90">
            See case studies
          </Link>
          <Link to="/contact" className="rounded-full border border-[var(--kh-gray-200)] bg-white px-5 py-2.5 text-sm font-medium hover:bg-[var(--kh-gray-100)]">
            Start a conversation <ArrowRight className="ml-1 inline h-4 w-4" />
          </Link>
        </div>

        <div className="kh-fade-up mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-[var(--kh-gray-200)] bg-white shadow-xl" style={{ animationDelay: "320ms" }}>
          <div className="flex items-center gap-2 border-b border-[var(--kh-gray-200)] bg-[var(--kh-gray-50)] px-3 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="ml-3 text-xs text-[var(--kh-gray-400)]">jaiminnaykawala.com/dashboard</span>
          </div>
          <div className="grid grid-cols-3 gap-4 p-6 text-left">
            <Stat label="Organic traffic" value="+177%" sub="9.4k → 26.2k / mo" />
            <Stat label="Keywords ranking" value="+25" sub="Top-10 positions" />
            <Stat label="Indexation" value="94%" sub="Recovered in 72h" />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <p className="mb-4 text-center text-xs uppercase tracking-widest text-[var(--kh-gray-400)]">Trusted by teams shipping at</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-base font-medium text-[var(--kh-gray-400)]">
          {logos.map((l) => <span key={l} className="kh-display">{l}</span>)}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="kh-display mb-8 text-3xl font-semibold sm:text-4xl">Three pillars, one system.</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="rounded-2xl border border-[var(--kh-gray-200)] bg-white p-6 hover:shadow-md transition-shadow">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--kh-purple-xlight)] text-[var(--kh-purple)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="kh-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-[var(--kh-gray-600)]">{s.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="kh-display mb-8 text-3xl font-semibold sm:text-4xl">A four-step process.</h2>
        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <li key={s.n} className="rounded-2xl border border-[var(--kh-gray-200)] bg-white p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-mono text-[var(--kh-gray-400)]">{s.n}</span>
                  <Icon className="h-4 w-4 text-[var(--kh-purple)]" />
                </div>
                <h4 className="kh-display text-lg font-semibold">{s.title}</h4>
                <p className="mt-1 text-sm text-[var(--kh-gray-600)]">{s.body}</p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[280px_1fr]">
          <div className="flex flex-col items-center rounded-2xl border border-[var(--kh-gray-200)] bg-white p-6 text-center">
            <Avatar name="Jaimin Naykawala" size={96} />
            <h4 className="kh-display mt-4 text-lg font-semibold">Jaimin Naykawala</h4>
            <p className="text-xs text-[var(--kh-gray-600)]">SEO Specialist · India</p>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="mt-3 text-xs underline" style={{ color: "var(--kh-purple)" }}>
              Connect on LinkedIn
            </a>
          </div>
          <blockquote className="rounded-2xl border border-[var(--kh-gray-200)] bg-white p-8">
            <Quote className="h-6 w-6 text-[var(--kh-purple)]" />
            <p className="mt-3 text-xl leading-relaxed">
              "Most SEO breaks because content, technical, and analytics teams operate as silos. The win is treating them as
              one system — and being the person who can ship across all three."
            </p>
            <p className="mt-4 text-sm text-[var(--kh-gray-600)]">— Jaimin, on his approach</p>
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="kh-display mb-8 text-3xl font-semibold sm:text-4xl">Principles I work by.</h2>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <li key={p} className="flex items-start gap-2 rounded-xl border border-[var(--kh-gray-200)] bg-white p-4 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--kh-purple)]" />
              {p}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-3xl bg-[var(--kh-gray-900)] p-10 text-center text-white">
          <h2 className="kh-display text-3xl font-semibold sm:text-4xl">Have a search problem worth solving?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--kh-gray-300)]">
            Audits, retainers, AEO work, and technical migrations. Fastest reply via LinkedIn.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="rounded-full bg-[var(--kh-purple)] px-5 py-2.5 text-sm font-medium hover:opacity-90">
              Start a project
            </Link>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium hover:bg-white/10">
              Message on LinkedIn
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

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-xl border border-[var(--kh-gray-200)] p-4">
      <div className="text-xs uppercase tracking-wide text-[var(--kh-gray-400)]">{label}</div>
      <div className="kh-display mt-1 text-2xl font-semibold">{value}</div>
      <div className="text-xs text-[var(--kh-gray-600)]">{sub}</div>
    </div>
  );
}
