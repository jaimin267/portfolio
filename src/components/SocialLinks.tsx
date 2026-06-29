import { Linkedin, Mail } from "lucide-react";
import { cn } from "../lib/utils";

export const LINKEDIN_URL = "https://www.linkedin.com/in/jaimin-naykawala";
export const EMAIL = "jaimin@example.com";

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
      >
        <Linkedin className="h-4 w-4" /> LinkedIn
      </a>
      <a
        href={`mailto:${EMAIL}`}
        className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
      >
        <Mail className="h-4 w-4" /> Email
      </a>
    </div>
  );
}
