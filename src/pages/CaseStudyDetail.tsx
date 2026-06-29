import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Bookmark, Heart, MessageCircle, Share2 } from "lucide-react";
import { Avatar } from "../components/Avatar";
import { CoverGraphic } from "../components/CoverGraphic";
import { caseStudies, getCaseStudy } from "../lib/caseStudiesData";
import { usePageMeta } from "../lib/usePageMeta";
import NotFound from "./NotFound";

const ACCENT = "#3b2bbd";
const BORDER = "#e5e5e0";

export default function CaseStudyDetail() {
  const { slug = "" } = useParams();
  const study = getCaseStudy(slug);

  usePageMeta({
    title: study ? `${study.title} — Jaimin Naykawala` : "Not found",
    description: study?.excerpt,
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!study) return <NotFound />;

  const more = caseStudies.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <article className="cs-root min-h-screen">
      <header className="mx-auto max-w-3xl px-6 pt-8" style={{ fontFamily: "system-ui" }}>
        <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm" style={{ color: "#5a5a5a" }}>
          <ArrowLeft className="h-4 w-4" /> All case studies
        </Link>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-10">
        <span className="cs-display text-xs uppercase tracking-widest" style={{ color: ACCENT }}>{study.tag}</span>
        <h1 className="cs-display mt-2 text-5xl font-semibold leading-[1.05]">{study.title}</h1>
        <p className="mt-4 text-xl text-[#3a3a3a]">{study.subtitle}</p>

        <div className="mt-6 flex items-center gap-3 text-sm" style={{ color: "#5a5a5a", fontFamily: "system-ui" }}>
          <Avatar name={study.author} size={36} />
          <div>
            <div className="font-medium" style={{ color: "#1a1a1a" }}>{study.author}</div>
            <div className="text-xs">
              <time dateTime={study.dateISO}>{study.date}</time> · {study.readTime}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-5" style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "0.75rem 0", color: "#5a5a5a", fontFamily: "system-ui" }}>
          <button className="inline-flex items-center gap-2 text-sm hover:opacity-70"><Heart className="h-4 w-4" />Like</button>
          <button className="inline-flex items-center gap-2 text-sm hover:opacity-70"><MessageCircle className="h-4 w-4" />Comment</button>
          <button className="inline-flex items-center gap-2 text-sm hover:opacity-70"><Share2 className="h-4 w-4" />Share</button>
          <button className="ml-auto inline-flex items-center gap-2 text-sm hover:opacity-70"><Bookmark className="h-4 w-4" />Save</button>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-lg">
          <CoverGraphic slug={study.slug} gradient={study.cover} className="h-72 w-full" />
          {study.metrics && (
            <div className="absolute inset-x-0 bottom-0 grid grid-cols-3 gap-px bg-white/20 backdrop-blur">
              {study.metrics.map((m) => (
                <div key={m.label} className="bg-black/40 p-4 text-white">
                  <div className="text-xs uppercase tracking-widest opacity-80" style={{ fontFamily: "system-ui" }}>{m.label}</div>
                  <div className="cs-display mt-1 text-2xl font-semibold">{m.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 space-y-5 text-lg leading-[1.7]">
          {study.content.map((b, i) => {
            if (b.type === "h2") return <h2 key={i} className="cs-display mt-8 text-3xl font-semibold leading-tight">{b.text}</h2>;
            if (b.type === "p") return <p key={i}>{b.text}</p>;
            if (b.type === "list") return (
              <ul key={i} className="ml-5 list-disc space-y-2">
                {b.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            );
            return (
              <blockquote key={i} className="my-6 border-l-4 pl-5 italic" style={{ borderColor: ACCENT }}>
                <p>"{b.text}"</p>
                {b.cite && <cite className="mt-2 block text-sm not-italic" style={{ color: "#5a5a5a" }}>— {b.cite}</cite>}
              </blockquote>
            );
          })}
        </div>

        <div className="my-12 rounded-lg p-6" style={{ background: "#f1efe8", border: `1px solid ${BORDER}`, fontFamily: "system-ui" }}>
          <h3 className="cs-display text-xl font-semibold">Get the next one in your inbox.</h3>
          <p className="mt-1 text-sm" style={{ color: "#3a3a3a" }}>
            One in-depth case study a month. No filler.
          </p>
          <Link to="/contact" className="mt-3 inline-block rounded-md px-4 py-2 text-sm font-medium text-white" style={{ background: ACCENT }}>
            Subscribe via email
          </Link>
        </div>

        <h3 className="cs-display mt-16 mb-5 text-xl font-semibold" style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "1rem" }}>
          More case studies
        </h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {more.map((c) => (
            <Link key={c.slug} to={`/case-studies/${c.slug}`} className="group block">
              <CoverGraphic slug={c.slug} gradient={c.cover} className="h-32 w-full rounded-md" />
              <div className="cs-display mt-2 text-base font-semibold leading-snug group-hover:underline">{c.title}</div>
              <div className="text-xs" style={{ color: "#5a5a5a", fontFamily: "system-ui" }}>{c.date}</div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
