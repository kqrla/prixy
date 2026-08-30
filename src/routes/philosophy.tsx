import { createFileRoute } from "@tanstack/react-router";
import { EditorialPanel, PageIntro, PullQuote } from "../components/prixy/page-elements";

export const Route = createFileRoute("/philosophy")({
  head: () => ({ meta: [
    { title: "philosophy | presence is expensive" },
    { name: "description", content: "prixy separates being somewhere from knowing something." },
    { property: "og:title", content: "philosophy | presence is expensive" },
    { property: "og:description", content: "being somewhere and knowing something are two different things." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: PhilosophyPage,
});

function PhilosophyPage() {
  return <>
    <PageIntro eyebrow="philosophy" title="presence is expensive. information doesn't have to be." description="being somewhere and knowing something are two different things. prixy separates them." />
    <EditorialPanel className="reading-layout">
      <p className="reading-label">the anti-recap</p>
      <div className="prose">
        <h2>the wrong assumption</h2>
        <p>there's been a strange assumption in productivity software that the hardest part of a meeting is remembering what happened. so we got summaries, recaps, action items, highlights, and key takeaways.</p>
        <p>sometimes those are useful. but if you sat through the meeting, you already know what happened. you don't need software to explain your own experience back to you.</p>
        <PullQuote>a summarizer asks “what happened?” a proxy asks “what did you need from what happened?”</PullQuote>
        <h2>especially when your brain doesn't work like a productivity blog</h2>
        <p>more information isn't always more helpful. for people with adhd, executive dysfunction, or simply limited attention, a recap can become another notification, another document, another wall of text, and another thing to process.</p>
        <p>prixy is designed around a simpler principle: if you know what you need, give me that.</p>
        <h2>delegate the presence</h2>
        <p>you don't always need to spend an hour of your life acquiring one piece of information. you don't always need to read a summary of something you already experienced. sometimes you just need someone to go.</p>
      </div>
    </EditorialPanel>
  </>;
}