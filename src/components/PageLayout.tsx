import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { DarkModeToggle } from "./DarkModeToggle";

type Props = { children: ReactNode; title?: string };

export function PageLayout({ children, title }: Props) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link
            to="/serp?q=jaimin+naykawala"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          >
            <ArrowLeft className="h-4 w-4" /> Back to search
          </Link>
          <div className="flex items-center gap-3">
            {title && <span className="text-sm font-medium text-[var(--muted-foreground)]">{title}</span>}
            <DarkModeToggle />
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
