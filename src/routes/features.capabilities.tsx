import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BigHeading,
  BriefNote,
  CellGrid,
  DocBox,
  MetaRow,
  NumberedList,
  StripLabel,
} from "../components/prixy/document-parts";

export const Route = createFileRoute("/features/capabilities")({
  head: () => ({
    meta: [
      { title: "capabilities | what prixy can actually do" },
      {
        name: "description",
        content:
          "a detailed capability sheet covering registration, attendance, listening, asking, retrieval, and retention.",
      },
      { property: "og:title", content: "capabilities | what prixy can actually do" },
      {
        property: "og:description",
        content: "the detailed capability sheet for a personal presence proxy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CapabilitiesPage,
});

const beforeSession = [
  {
    title: "registration",
    description:
      "fills in the registration form, handles confirmation steps, and stores the resulting join link.",
  },
  {
    title: "scheduling",
    description:
      "resolves the correct start time across timezones and reserves the slot on your calendar.",
  },
  {
    title: "briefing",
    description:
      "takes your goal and prepared questions as the instruction set for that specific session.",
  },
];

const duringSession = [
  {
    title: "joins as you",
    description:
      "enters with the profile and display identity you selected for that room.",
  },
  {
    title: "goal-aware listening",
    description:
      "tracks the session for the specific thing you asked about instead of transcribing blindly.",
  },
  {
    title: "asks and follows up",
    description:
      "raises prepared questions at an appropriate moment and pushes once if the answer is vague.",
  },
  {
    title: "captures live artefacts",
    description: "collects codes, links, slides, and chat messages dropped during the call.",
  },
];

const afterSession = [
  {
    title: "the short answer",
    description:
      "the requested detail arrives first, in one line, without a wall of surrounding context.",
  },
  {
    title: "honest gaps",
    description:
      "if the information never surfaced, prixy says so instead of inventing a plausible answer.",
  },
  {
    title: "optional source",
    description:
      "the transcript and materials stay available for inspection and are deletable at any time.",
  },
];

function CapabilitiesPage() {
  return (
    <div>
      <MetaRow
        fields={[
          { label: "document", value: "capabilities" },
          { label: "parent", value: "features" },
          { label: "issue", value: "001" },
          { label: "status", value: "preview" },
        ]}
      />

      <BriefNote>
        capabilities are grouped by when they happen: before the session, during it, and after it.
        the split matters because each stage has different failure modes.
      </BriefNote>

      <StripLabel>capabilities</StripLabel>
      <BigHeading>
        what it
        <br />
        can do.
      </BigHeading>

      <DocBox label="before the session">
        <NumberedList items={beforeSession} />
      </DocBox>

      <DocBox label="during the session">
        <CellGrid items={duringSession} columns={2} />
      </DocBox>

      <DocBox label="after the session">
        <NumberedList items={afterSession} />
      </DocBox>

      <div className="flex flex-wrap gap-4 border-x border-b border-primary px-4 py-4">
        <Link
          to="/features"
          className="border-b border-primary text-[10px] uppercase tracking-[0.12em] text-primary"
        >
          back to features
        </Link>
        <Link
          to="/features/supports"
          className="border-b border-primary text-[10px] uppercase tracking-[0.12em] text-primary"
        >
          supported platforms
        </Link>
      </div>
    </div>
  );
}
