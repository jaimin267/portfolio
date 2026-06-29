import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta";

export default function NotFound() {
  usePageMeta({ title: "404 — Not found" });
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-7xl font-semibold tracking-tight">404</h1>
      <p className="mt-3 text-base text-[var(--muted-foreground)]">That page didn't make it past indexing.</p>
      <Link to="/" className="mt-6 rounded-md border border-[var(--border)] px-4 py-2 text-sm hover:bg-[var(--accent)]">
        Back to search
      </Link>
    </div>
  );
}
