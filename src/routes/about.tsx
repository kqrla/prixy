import { createFileRoute } from "@tanstack/react-router";
import { EditorialPanel, PageIntro, PullQuote } from "../components/prixy/page-elements";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "about prixy | a personal proxy" },
    { name: "description", content: "why prixy is a personal presence proxy, not another productivity app." },
    { property: "og:title", content: "about prixy | a personal proxy" },
    { property: "og:description", content: "a personal proxy, not another productivity app." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});

function AboutPage() {
  return <>
    <PageIntro eyebrow="about" title="a personal proxy, not another productivity app." description="prixy started from a simple question: what if an ai assistant actually went somewhere instead of telling you about somewhere you already went?" />
    <EditorialPanel className="reading-layout">
      <p className="reading-label">your little proxy</p>
      <div className="prose">
        <p>the result is a personal agent that can act as your presence across supported digital spaces.</p>
        <p>it can register. it can attend. it can listen. it can ask. it can retrieve. and it can come back with exactly what you needed.</p>
        <PullQuote>quietly present where you aren't.</PullQuote>
        <p>prixy is personal by design. it's not supposed to be a generic corporate meeting bot invited to every calendar event. it's your instance.</p>
        <p>you give it instructions. you decide what it should care about. you decide what it should report back. you can inspect the underlying transcript when you want the full context. otherwise, it stays out of the way.</p>
        <p>no forced recap. no mandatory dashboard. no assumption that every meeting needs to become content. just a proxy.</p>
      </div>
    </EditorialPanel>
  </>;
}