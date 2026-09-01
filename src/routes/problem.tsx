import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BigHeading,
  BriefNote,
  CellGrid,
  DocBox,
  MetaRow,
  NumberedList,
  Prose,
  PullQuote,
  StripLabel,
} from "../components/prixy/document-parts";

export const Route = createFileRoute("/problem")({
  head: () => ({
    meta: [
      { title: "problem | the cost of being there" },
      {
        name: "description",
        content:
          "the problems prixy responds to: mandatory attendance, recap overload, and information buried inside live sessions.",
      },
      { property: "og:title", content: "problem | the cost of being there" },
      {
        property: "og:description",
        content: "attendance is expensive, and recaps did not fix it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProblemPage,
});

const symptoms = [
  {
    title: "the hour tax",
    description:
      "an hour of live attendance for one figure, one date, or one confirmation you needed.",
  },
  {
    title: "live-only information",
    description:
      "codes, availability, and answers announced during a session and never written down afterwards.",
  },
  {
    title: "recap overload",
    description:
      "summaries of sessions you already sat through, adding reading time to time already spent.",
  },
  {
    title: "attendance gates",
    description:
      "registration, waiting rooms, and presence requirements that exist before any value is delivered.",
  },
  {
    title: "timezone collisions",
    description:
      "the session that matters happens at an hour that does not work for your life.",
  },
  {
    title: "attention limits",
    description:
      "for anyone with limited attention or executive dysfunction, a long live call is an expensive way to learn one fact.",
  },
];

const whyNow = [
  {
    title: "everything moved to live calls",
    description:
      "product updates, community announcements, and decisions increasingly happen in synchronous rooms rather than documents.",
  },
  {
    title: "summaries answered the wrong question",
    description:
      "note-taking tools ask what happened. the unmet need is what you specifically wanted from what happened.",
  },
  {
    title: "delegation had no digital equivalent",
    description:
      "sending someone in your place is normal in the physical world and has had no clean online counterpart.",
  },
];

function ProblemPage() {
  return (
    <div>
      <MetaRow
        fields={[
          { label: "document", value: "problem" },
          { label: "type", value: "problem statement" },
          { label: "issue", value: "001" },
          { label: "status", value: "preview" },
        ]}
      />

      <BriefNote>
        the problem is not that meetings are unrecorded. it is that the only way to obtain what a
        session contains is to spend the session.
      </BriefNote>

      <StripLabel>problem</StripLabel>
      <BigHeading>
        being there
        <br />
        costs
        <br />
        too much.
      </BigHeading>

      <DocBox label="symptoms">
        <CellGrid items={symptoms} />
      </DocBox>

      <DocBox label="why it persists">
        <NumberedList items={whyNow} />
      </DocBox>

      <DocBox label="the gap">
        <Prose>
          <PullQuote>attendance is the price. information is the product.</PullQuote>
          <p>
            prixy targets that gap directly: keep the information, drop the requirement that you be
            the one in the room.
          </p>
        </Prose>
        <div className="mt-4">
          <Link
            to="/purpose"
            className="border-b border-primary text-[10px] uppercase tracking-[0.12em] text-primary"
          >
            read the purpose
          </Link>
        </div>
      </DocBox>
    </div>
  );
}
