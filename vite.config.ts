import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const tempoRoot = path.dirname(fileURLToPath(import.meta.url));

// The Tempo canvas host lives in the auto-generated, git-ignored `.tempo/`
// folder, which only exists when the canvas devserver is running locally. When
// it's missing (e.g. production builds on Vercel), resolve the import to a no-op
// stub so the build doesn't fail trying to find it.
function tempoHostFallback() {
  const hostExists =
    existsSync(path.join(tempoRoot, ".tempo/tempo-host.tsx")) ||
    existsSync(path.join(tempoRoot, ".tempo/tempo-host.ts")) ||
    existsSync(path.join(tempoRoot, ".tempo/tempo-host.jsx")) ||
    existsSync(path.join(tempoRoot, ".tempo/tempo-host.js")) ||
    existsSync(path.join(tempoRoot, ".tempo/tempo-host/index.tsx")) ||
    existsSync(path.join(tempoRoot, ".tempo/tempo-host/index.ts"));

  return {
    name: "tempo-host-fallback",
    enforce: "pre" as const,
    resolveId(source: string) {
      if (hostExists) return null;
      if (source.endsWith(".tempo/tempo-host")) {
        return path.join(tempoRoot, "src/tempo-host-stub.tsx");
      }
      return null;
    },
  };
}

export default defineConfig(async () => {
  const { tempoVitePlugin } = await import("tempo-sdk");

  return {
    root: tempoRoot,
    plugins: [
      tempoHostFallback(),
      tailwindcss(),
      tempoVitePlugin(),
      react(),
      tsconfigPaths({
        projectDiscovery: "lazy",
      }),
    ],
  };
});
