import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BigHeading,
  BriefNote,
  CellGrid,
  DocBox,
  MetaRow,
  NumberedList,
  StripLabel,
  Tag,
} from "../components/prixy/document-parts";

export const Route = createFileRoute("/features/supports")({
  head: () => ({
    meta: [
      { title: "supports | what prixy can join" },
      {
        name: "description",
        content:
          "the meeting platforms prixy targets, the ways it obtains a join link, and how account switching works.",
      },
      { property: "og:title", content: "supports | what prixy can join" },
      {
        property: "og:description",
        content: "meeting platforms, join paths, and multi-account identity handling.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SupportsPage,
});

const platforms = [
  {
    marker: "video",
    title: "google meet",
    description:
      "calendar-native links, waiting rooms, and in-call chat capture for workspace and personal accounts.",
  },
  {
    marker: "video",
    title: "zoom",
    description:
      "scheduled meetings and webinars, including passcodes, registration links, and q&a panels.",
  },
  {
    marker: "video",
    title: "microsoft teams",
    description: "org-invited meetings and guest joins where external participants are permitted.",
  },
  {
    marker: "community",
    title: "discord",
    description:
      "voice channels and stage events, including calls that only start live inside a server.",
  },
  {
    marker: "work",
    title: "slack huddles",
    description: "huddles and scheduled calls inside workspaces you have connected.",
  },
  {
    marker: "events",
    title: "webinar and event platforms",
    description:
      "hosted sessions on platforms like luma, hopin-style event tools, and streamed sessions with live chat.",
  },
];

const joinPaths = [
  {
    title: "link already in your calendar",
    description:
      "the invite exists and carries a join url. prixy reads the event and attends at the scheduled time.",
  },
  {
    title: "assigned meeting, link arrives later",
    description:
      "you are on the invite list but the link is emailed beforehand. prixy watches the connected inbox and picks up the url when it lands.",
  },
  {
    title: "call starts live in discord or slack",
    description:
      "there is no link at all until someone opens a channel call. prixy stays present in the space and joins when the call goes live.",
  },
  {
    title: "pre-registration required",
    description:
      "sessions on luma and similar platforms require signing up first. prixy registers, receives the confirmation, and keeps the resulting link.",
  },
  {
    title: "link dropped live during a window",
    description:
      "the url is posted in a channel, forum thread, or chat at some point during an announced period. prixy watches that surface for the window and joins the moment it appears.",
  },
];

const identity = [
  {
    title: "logged-in sessions",
    description:
      "prixy uses your authenticated session for a platform so it enters rooms restricted to signed-in members.",
  },
  {
    title: "account switching",
    description:
      "pick which profile attends. a work identity for the client call, a personal one for the community event.",
  },
  {
    title: "profile matching",
    description:
      "display name, avatar, and org affiliation are matched to what the meeting expects, so the room sees a coherent participant.",
  },
  {
    title: "multiple inboxes",
    description:
      "connect several email accounts. prixy watches each one for invites, confirmations, and late-arriving links.",
  },
];

function SupportsPage() {
  return (
    <div>
      <MetaRow
        fields={[
          { label: "document", value: "supports" },
          { label: "parent", value: "features" },
          { label: "issue", value: "001" },
          { label: "status", value: "target coverage" },
        ]}
      />

      <BriefNote>
        coverage is defined per platform and per join path, because getting into the room is usually
        harder than being in it. everything listed here is target coverage for the preview product.
      </BriefNote>

      <StripLabel>supports</StripLabel>
      <BigHeading>
        where it
        <br />
        can show up.
      </BigHeading>

      <DocBox label="meeting and event platforms">
        <CellGrid items={platforms} />
      </DocBox>

      <DocBox label="how it joins">
        <NumberedList items={joinPaths} />
      </DocBox>

      <DocBox label="accounts and identity">
        <CellGrid items={identity} columns={2} />
        <div className="mt-4 flex flex-wrap gap-2">
          <Tag>logged-in access</Tag>
          <Tag>account switching</Tag>
          <Tag>profile matching</Tag>
          <Tag>multiple inboxes</Tag>
        </div>
      </DocBox>

      <DocBox label="not supported" filled>
        <p className="text-sm leading-relaxed">
          rooms where automated participants are prohibited, sessions requiring physical presence or
          identity verification prixy cannot legitimately satisfy, and any space where you have not
          granted it access.
        </p>
      </DocBox>

      <div className="flex flex-wrap gap-4 border-x border-b border-primary px-4 py-4">
        <Link
          to="/features"
          className="border-b border-primary text-[10px] uppercase tracking-[0.12em] text-primary"
        >
          back to features
        </Link>
        <Link
          to="/features/capabilities"
          className="border-b border-primary text-[10px] uppercase tracking-[0.12em] text-primary"
        >
          capability sheet
        </Link>
      </div>
    </div>
  );
}
