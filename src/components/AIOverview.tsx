import { Sparkles } from "lucide-react";

export function AIOverview() {
  return (
    <section
      className="rounded-2xl border p-5"
      style={{ background: "var(--serp-ai-bg)", borderColor: "var(--serp-ai-border)" }}
    >
      <div className="mb-3 flex items-center gap-2 text-sm font-medium" style={{ color: "#1a0dab" }}>
        <Sparkles className="h-4 w-4" /> AI Overview
      </div>
      <p className="text-sm leading-relaxed text-slate-800">
        <strong>Jaimin Naykawala</strong> is an SEO Specialist who blends a developer's technical foundation with content
        strategy and AI-search expertise (AEO/GEO). His work has driven 177% organic traffic growth, recovered indexation on
        SaaS sites, and produced widely-read case studies on AI search citation patterns.
      </p>
      <ul className="mt-3 space-y-1 text-sm text-slate-700">
        <li>• Built a social media platform before going full-time into SEO — informs product-led SEO thinking.</li>
        <li>• Treats Technical SEO, Content Strategy, and AEO/GEO as one system, not three silos.</li>
        <li>• Open to consulting, contract, and full-time roles.</li>
      </ul>
    </section>
  );
}
