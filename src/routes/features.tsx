import { createFileRoute } from "@tanstack/react-router";
import { EditorialPanel, PageIntro } from "../components/prixy/page-elements";

export const Route = createFileRoute("/features")({
  head: () => ({ meta: [
    { title: "features | what prixy does" },
    { name: "description", content: "see how prixy registers, attends, listens, asks, retrieves, and reports back." },
    { property: "og:title", content: "features | what prixy does" },
    { property: "og:description", content: "delegate the presence and receive the information you actually asked for." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: FeaturesPage,
});

const features = [
  ["01", "register", "prixy can handle event registration on your behalf."],
  ["02", "attend", "it joins supported virtual meetings and handles attendance when applicable."],
  ["03", "listen", "it follows the session and watches for the information you care about."],
  ["04", "ask", "it waits for the appropriate moment to ask questions you specified."],
  ["05", "retrieve", "it captures answers, decisions, dates, pricing, codes, and the details you requested."],
  ["06", "retain", "it keeps the transcript and supporting material available for later inspection."],
] as const;

function FeaturesPage() {
  return <>
    <PageIntro eyebrow="features" title="go to the meeting. get the thing." description="tell prixy where to go and what you need. it handles the presence, then returns the answer." />
    <EditorialPanel>
      <p className="section-label">the presence loop</p>
      <div className="feature-grid">
        {features.map(([number, title, description]) => <article className="feature-block" key={number}>
          <span className="feature-number">{number}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </article>)}
      </div>
    </EditorialPanel>
    <section className="statement-band">
      <p className="section-label">one request in. one answer out.</p>
      <p className="statement-copy">“go to this event and find the promo code they announce during the live session.”</p>
      <p className="example-answer">promo code: example20</p>
    </section>
  </>;
}