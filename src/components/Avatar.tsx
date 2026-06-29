import { useState } from "react";
import { cn } from "../lib/utils";

type Props = { src?: string; name: string; size?: number; className?: string };

export function Avatar({ src = "/jaimin.jpg", name, size = 40, className }: Props) {
  const [errored, setErrored] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const showImage = src && !errored;

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full overflow-hidden font-semibold text-white",
        "bg-gradient-to-br from-violet-600 to-fuchsia-500 select-none",
        className,
      )}
      style={{ width: size, height: size, fontSize: size * 0.38 }}
      aria-label={name}
    >
      {showImage ? (
        <img
          src={src}
          alt={name}
          width={size}
          height={size}
          className="h-full w-full object-cover"
          onError={() => setErrored(true)}
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}
