import { useEffect } from "react";

type Meta = {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
};

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function usePageMeta({ title, description, ogTitle, ogDescription }: Meta) {
  useEffect(() => {
    document.title = title;
    if (description) setMeta("description", description);
    setMeta("og:title", ogTitle ?? title, "property");
    if (ogDescription || description) {
      setMeta("og:description", ogDescription ?? description ?? "", "property");
    }
  }, [title, description, ogTitle, ogDescription]);
}
