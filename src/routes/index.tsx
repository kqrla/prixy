import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import { EditorialPanel, LeafItem } from "../components/prixy/page-elements";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "prixy | your personal presence proxy" },
      { name: "description", content: "prixy goes to the meeting, event, or session and brings back exactly what you needed." },
      { property: "og:title", content: "prixy | your personal presence proxy" },
      { property: "og:description", content: "you don't always need a meeting summary. sometimes you need someone to go." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="home-hero">
        <p className="hero-kicker">your presence, when you can't be there.</p>
        <h1 className="hero-title">you don't always need a meeting summary. sometimes you need someone to go.</h1>
        <p className="hero-lede">
          prixy is a personal ai proxy that can show up to things on your behalf and bring back exactly what you needed.
        </p>
        <p className="hero-note"><ArrowDown size={18} aria-hidden="true" /> not a recap. a proxy.</p>
      </section>

      <EditorialPanel className="home-manifesto">
        <div>
          <p className="section-label">so what does prixy do?</p>
          <h2 className="manifesto-heading">prixy goes.</h2>
        </div>
        <ul className="leaf-list">
          <LeafItem>register for events on your behalf.</LeafItem>
          <LeafItem>join supported virtual meetings and handle attendance when applicable.</LeafItem>
          <LeafItem>listen for what matters and ask the questions you specified.</LeafItem>
          <LeafItem>capture answers and retrieve specific information from the session.</LeafItem>
          <LeafItem>send you the information you actually asked for.</LeafItem>
          <LeafItem>retain the transcript and supporting material for later inspection.</LeafItem>
        </ul>
      </EditorialPanel>

      <section className="statement-band">
        <p className="section-label">information, not content</p>
        <p className="statement-copy">you don't have to consume everything just because prixy collected everything.</p>
      </section>
    </>
  );
}
