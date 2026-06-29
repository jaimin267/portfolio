import { tools } from "../lib/searchData";

export function ToolsPanel() {
  return (
    <aside className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
      <div className="mb-3 text-xs uppercase tracking-wide text-[var(--muted-foreground)]">Tools used</div>
      <h4 className="mb-1 text-base font-semibold">Jaimin's SEO stack</h4>
      <p className="mb-4 text-xs text-[var(--muted-foreground)]">
        Daily-driver tools across audits, analytics, and AEO research.
      </p>
      <ul className="space-y-2.5">
        {tools.map((t) => (
          <li key={t.name} className="text-sm">
            <div className="font-medium">{t.name}</div>
            <div className="text-xs text-[var(--muted-foreground)]">{t.description}</div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
