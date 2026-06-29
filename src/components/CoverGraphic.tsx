import { useMemo } from "react";

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i);
  return Math.abs(h);
}

export function CoverGraphic({ slug, gradient, className }: { slug: string; gradient?: string; className?: string }) {
  const seed = hash(slug);
  const dots = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => {
        const r = (seed * (i + 7)) % 977;
        return {
          cx: ((r * 13) % 100),
          cy: ((r * 31) % 100),
          rad: 1 + ((r * 7) % 5),
          op: 0.15 + (((r * 3) % 70) / 100),
        };
      }),
    [seed],
  );

  return (
    <div
      className={
        "relative overflow-hidden " +
        (gradient ? `bg-gradient-to-br ${gradient}` : "bg-gradient-to-br from-violet-600 via-fuchsia-500 to-rose-500") +
        (className ? " " + className : "")
      }
    >
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-90">
        {dots.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r={d.rad} fill="white" opacity={d.op} />
        ))}
        <path d="M0,80 Q30,60 50,75 T100,70" stroke="white" strokeWidth="0.6" fill="none" opacity="0.5" />
        <path d="M0,30 Q40,10 60,25 T100,20" stroke="white" strokeWidth="0.4" fill="none" opacity="0.35" />
      </svg>
    </div>
  );
}
