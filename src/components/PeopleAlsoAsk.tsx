import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { peopleAlsoAsk } from "../lib/searchData";

export function PeopleAlsoAsk() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="max-w-2xl">
      <h4 className="mb-3 text-base font-semibold">People also ask</h4>
      <ul className="divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[var(--card)]">
        {peopleAlsoAsk.map((qa, i) => {
          const expanded = open === i;
          return (
            <li key={i}>
              <button
                onClick={() => setOpen(expanded ? null : i)}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-medium hover:bg-[var(--accent)]/40"
              >
                <span>{qa.q}</span>
                <ChevronDown className={"h-4 w-4 transition-transform " + (expanded ? "rotate-180" : "")} />
              </button>
              {expanded && <p className="px-5 pb-4 text-sm text-[var(--muted-foreground)]">{qa.a}</p>}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
