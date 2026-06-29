import { Briefcase, Home, Mail, Sparkles } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import type { SerpTab } from "../lib/searchLogic";

type Props = { value: SerpTab; onChange: (v: SerpTab) => void };

const TABS: { value: SerpTab; label: string; icon: any }[] = [
  { value: "all", label: "All", icon: Home },
  { value: "projects", label: "Projects", icon: Briefcase },
  { value: "skills", label: "Skills", icon: Sparkles },
  { value: "contact", label: "Contact", icon: Mail },
];

export function SerpTabs({ value, onChange }: Props) {
  return (
    <Tabs value={value} onValueChange={(v) => onChange(v as SerpTab)}>
      <TabsList>
        {TABS.map((t) => {
          const Icon = t.icon;
          return (
            <TabsTrigger key={t.value} value={t.value} className="gap-2">
              <Icon className="h-4 w-4" />
              {t.label}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}
