import type { TempoPage, TempoRouteStoryboard } from "tempo-sdk";

const page: TempoPage = {
  name: "Portfolio Pages",
};

export default page;

export const Home: TempoRouteStoryboard = {
  route: "/",
  name: "Home (Google clone)",
  layout: { x: 0, y: 0, width: 1280, height: 900 },
};

export const Serp: TempoRouteStoryboard = {
  route: "/serp?q=best+seo+specialist",
  name: "SERP — best seo specialist",
  layout: { x: 1360, y: 0, width: 1280, height: 900 },
};

export const About: TempoRouteStoryboard = {
  route: "/about",
  name: "About (Kherpa-style)",
  layout: { x: 0, y: 980, width: 1280, height: 900 },
};

export const Skills: TempoRouteStoryboard = {
  route: "/skills",
  name: "Skill Store",
  layout: { x: 1360, y: 980, width: 1280, height: 900 },
};

export const Projects: TempoRouteStoryboard = {
  route: "/projects",
  name: "Projects (bento)",
  layout: { x: 0, y: 1960, width: 1280, height: 900 },
};

export const Experience: TempoRouteStoryboard = {
  route: "/experience",
  name: "Experience (timeline)",
  layout: { x: 1360, y: 1960, width: 1280, height: 900 },
};

export const Contact: TempoRouteStoryboard = {
  route: "/contact",
  name: "Contact",
  layout: { x: 0, y: 2940, width: 1280, height: 900 },
};

export const CaseStudies: TempoRouteStoryboard = {
  route: "/case-studies",
  name: "Case Studies (Substack)",
  layout: { x: 1360, y: 2940, width: 1280, height: 900 },
};

export const CaseStudyDetail: TempoRouteStoryboard = {
  route: "/case-studies/clickup-blog-traffic-loss",
  name: "Case Study — ClickUp",
  layout: { x: 0, y: 3920, width: 1280, height: 900 },
};
