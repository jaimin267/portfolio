import { Link } from "react-router-dom";
import { skills } from "../lib/skillsData";
import { Badge } from "./ui/badge";

export function SkillsTab() {
  return (
    <section className="max-w-3xl">
      <h2 className="mb-1 text-xl font-semibold">Skills</h2>
      <p className="mb-4 text-sm text-[var(--muted-foreground)]">
        Browse the full skill catalog or jump to the{" "}
        <Link to="/skills" className="underline" style={{ color: "var(--serp-link)" }}>
          Skill Store
        </Link>
        .
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {skills.slice(0, 6).map((s) => (
          <div key={s.id} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm font-semibold">{s.name}</div>
                <div className="mt-0.5 text-xs text-[var(--muted-foreground)]">{s.tagline}</div>
              </div>
              {s.badge && (
                <Badge variant={s.badge === "Hot" ? "hot" : s.badge === "New" ? "new" : "default"}>{s.badge}</Badge>
              )}
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-[var(--muted-foreground)]">
              <span>{s.years}y · {s.projects} projects</span>
              <span>★ {s.rating.toFixed(1)} ({s.reviews})</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
