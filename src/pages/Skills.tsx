import { useMemo, useState } from "react";
import { Heart, Search as SearchIcon, ShoppingCart, Star } from "lucide-react";
import { PageLayout } from "../components/PageLayout";
import { skills, skillCategories, type Skill } from "../lib/skillsData";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { cn } from "../lib/utils";
import { usePageMeta } from "../lib/usePageMeta";
import { EMAIL } from "../components/SocialLinks";

type Sort = "featured" | "rating" | "projects";

export default function Skills() {
  usePageMeta({ title: "Skills — Jaimin Naykawala", description: "Skill catalog: Technical SEO, Content, AEO, GEO, Analytics." });

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof skillCategories)[number]>("All");
  const [sort, setSort] = useState<Sort>("featured");
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = skills.filter(
      (s) =>
        (category === "All" || s.category === category) &&
        (!q || s.name.toLowerCase().includes(q) || s.tagline.toLowerCase().includes(q)),
    );
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === "projects") list = [...list].sort((a, b) => b.projects - a.projects);
    return list;
  }, [query, category, sort]);

  const toggle = (id: string) =>
    setWishlist((s) => {
      const next = new Set(s);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <PageLayout title="Skill Store">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted-foreground)]" />
            <Input
              placeholder="Search the skill catalog..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <button className="relative inline-flex h-10 items-center gap-2 rounded-md border border-[var(--border)] px-3 text-sm">
            <Heart className="h-4 w-4" /> Wishlist
            <span className="ml-1 rounded-full bg-[var(--primary)] px-1.5 py-0.5 text-[10px] text-[var(--primary-foreground)]">
              {wishlist.size}
            </span>
          </button>
        </div>

        <div className="mb-6 rounded-2xl border border-[var(--border)] bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 p-6 text-white">
          <div className="text-xs uppercase tracking-widest opacity-80">Free with every engagement</div>
          <h2 className="mt-1 text-2xl font-semibold">A 30-day SEO health check, on the house.</h2>
          <p className="mt-1 text-sm opacity-90">No commitment. Find out what's actually moving — and what isn't.</p>
        </div>

        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {skillCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs",
                  category === c
                    ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)]"
                    : "border-[var(--border)] bg-[var(--background)] hover:bg-[var(--accent)]",
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Sort: {sort}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup value={sort} onValueChange={(v) => setSort(v as Sort)}>
                <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="rating">Top rated</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="projects">Most projects</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((s) => (
            <article key={s.id} className="group flex flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]">
              <div className="relative h-32 bg-gradient-to-br from-[var(--primary)]/20 via-[var(--accent)] to-[var(--secondary)]">
                <button
                  onClick={() => toggle(s.id)}
                  className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-rose-500 shadow"
                  aria-label="Toggle wishlist"
                >
                  <Heart className={cn("h-4 w-4", wishlist.has(s.id) && "fill-current")} />
                </button>
                {s.badge && (
                  <Badge
                    variant={s.badge === "Hot" ? "hot" : s.badge === "New" ? "new" : "default"}
                    className="absolute left-2 top-2"
                  >
                    {s.badge}
                  </Badge>
                )}
                <span className="absolute bottom-2 right-2 rounded-md bg-black/30 px-2 py-0.5 text-[10px] uppercase tracking-wide text-white">
                  {s.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-sm font-semibold leading-tight">{s.name}</h3>
                <p className="mt-1 text-xs text-[var(--muted-foreground)] line-clamp-2">{s.tagline}</p>
                <div className="mt-3 flex items-center gap-1 text-xs">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-medium">{s.rating.toFixed(1)}</span>
                  <span className="text-[var(--muted-foreground)]">({s.reviews})</span>
                  <span className="ml-auto text-[var(--muted-foreground)]">{s.projects} projects</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[var(--secondary)]">
                  <div className="h-full bg-[var(--primary)]" style={{ width: `${s.proficiency}%` }} />
                </div>
                <div className="mt-1 flex items-center justify-between text-[10px] text-[var(--muted-foreground)]">
                  <span>Proficiency {s.proficiency}%</span>
                  <span>{s.years}y exp</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold">{s.price}</span>
                  <Button size="sm" onClick={() => setActiveSkill(s)} className="gap-1">
                    <ShoppingCart className="h-3.5 w-3.5" /> Hire this skill
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 text-sm sm:grid-cols-4">
          <Trust label="Avg rating" value="4.9 / 5.0" />
          <Trust label="Projects shipped" value="80+" />
          <Trust label="Avg response" value="< 24h" />
          <Trust label="Reply rate" value="100%" />
        </div>
      </div>

      <ContactModal skill={activeSkill} onClose={() => setActiveSkill(null)} />
    </PageLayout>
  );
}

function Trust({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">{label}</div>
      <div className="mt-1 text-base font-semibold">{value}</div>
    </div>
  );
}

function ContactModal({ skill, onClose }: { skill: Skill | null; onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.setTimeout(() => {
      setSent(false);
      onClose();
      setName("");
      setEmail("");
      setMessage("");
    }, 1600);
  };

  return (
    <Dialog
      open={!!skill}
      onOpenChange={(o) => {
        if (!o) onClose();
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Hire: {skill?.name}</DialogTitle>
          <DialogDescription className="text-sm text-[var(--muted-foreground)]">
            Tell me a little about the engagement. I'll reply within 24 hours.
          </DialogDescription>
        </DialogHeader>
        {sent ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              ✓
            </div>
            <p className="text-sm">Thanks — I'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-3">
            <div>
              <Label>Name</Label>
              <Input required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <Label>Email</Label>
              <Input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <Label>What you're working on</Label>
              <Textarea
                required
                rows={4}
                value={message || (skill ? `I'd like to hire you for: ${skill.name}.\n\n` : "")}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between gap-3 pt-2">
              <a href={`mailto:${EMAIL}`} className="text-xs text-[var(--muted-foreground)] hover:underline">
                Or email directly
              </a>
              <Button type="submit">Send inquiry</Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
