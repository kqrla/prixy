import { createFileRoute } from "@tanstack/react-router";
import { EditorialPanel, PageIntro } from "../components/prixy/page-elements";

export const Route = createFileRoute("/roadmap")({
  head: () => ({ meta: [
    { title: "roadmap | where prixy goes next" },
    { name: "description", content: "the path from precise information retrieval to a trusted personal presence proxy." },
    { property: "og:title", content: "roadmap | where prixy goes next" },
    { property: "og:description", content: "a focused path toward delegated digital presence." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: RoadmapPage,
});

const roadmapItems = [
  ["now", "supported sessions", "reliable attendance, focused listening, specific questions, and concise answers across supported virtual events."],
  ["next", "registration and timing", "handle more of the work before a session, including registration, reminders, timezone handling, and attendance requirements."],
  ["later", "personal context", "learn what matters to you while keeping instructions, source material, and reporting under your control."],
  ["eventually", "broader presence", "extend the same delegation model to more digital spaces without turning prixy into a noisy productivity layer."],
] as const;

function RoadmapPage() {
  return <>
    <PageIntro eyebrow="roadmap" title="from one useful answer to a dependable presence." description="the goal is not to process more meetings. it is to give you back the time you would have spent attending them." />
    <EditorialPanel>
      <ol className="roadmap-list">
        {roadmapItems.map(([stage, title, description]) => <li className="roadmap-item" key={stage}>
          <span className="roadmap-index">{stage}</span>
          <div><h2>{title}</h2><p>{description}</p></div>
        </li>)}
      </ol>
    </EditorialPanel>
  </>;
}