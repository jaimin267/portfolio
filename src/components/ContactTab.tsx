import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import { EMAIL, LINKEDIN_URL } from "./SocialLinks";

export function ContactTab() {
  return (
    <section className="max-w-3xl">
      <h2 className="mb-1 text-xl font-semibold">Contact</h2>
      <p className="mb-4 text-sm text-[var(--muted-foreground)]">
        Open to consulting, contract, and full-time SEO roles. Fastest reply via LinkedIn DM.
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 transition-colors hover:bg-[var(--accent)]/40"
        >
          <Linkedin className="h-5 w-5" />
          <div>
            <div className="text-sm font-semibold">LinkedIn</div>
            <div className="text-xs text-[var(--muted-foreground)]">jaimin-naykawala</div>
          </div>
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 transition-colors hover:bg-[var(--accent)]/40"
        >
          <Mail className="h-5 w-5" />
          <div>
            <div className="text-sm font-semibold">Email</div>
            <div className="text-xs text-[var(--muted-foreground)]">{EMAIL}</div>
          </div>
        </a>
      </div>
      <div className="mt-4 text-sm">
        Or use the{" "}
        <Link to="/contact" className="underline" style={{ color: "var(--serp-link)" }}>
          full contact form
        </Link>
        .
      </div>
    </section>
  );
}
