import { createFileRoute } from "@tanstack/react-router";
import { Globe, Mail, CreditCard, Mic, Video, Pause } from "lucide-react";
import { BigHeading, BriefNote, MetaRow, StripLabel } from "@/components/prixy/document-parts";

export const Route = createFileRoute("/how-it-runs")({
  head: () => ({
    meta: [
      { title: "how it runs | prixy" },
      { name: "description", content: "the browser, mail, payment, voice, and video services behind prixy's planned delegated presence." },
      { property: "og:title", content: "how it runs | prixy" },
      { property: "og:description", content: "a look at prixy's execution environments, service choices, and future self-hosted support." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowItRunsPage,
});

function HowItRunsPage() {
  return (
    <article className="[&_h1]:text-5xl [&_h1]:normal-case [&_h1]:tracking-normal sm:[&_h1]:text-7xl [&_span]:normal-case [&_span]:tracking-normal">
      <MetaRow fields={[
        { label: "document", value: "how it runs" },
        { label: "type", value: "system notes" },
        { label: "issue", value: "008" },
        { label: "status", value: "planned stack" },
      ]} />
      <BriefNote>
        the services behind delegated presence. these are product stack choices, not live connections in this preview.
      </BriefNote>
      <StripLabel>execution / communication / presence</StripLabel>
      <BigHeading>how it runs</BigHeading>

      <section aria-labelledby="browser-environment" className="border-x border-b border-primary">
        <div className="flex items-center gap-3 border-b border-primary px-4 py-3 text-primary">
          <Globe size={18} aria-hidden="true" />
          <h2 id="browser-environment" className="text-lg font-semibold">browser environment</h2>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="border-b border-primary p-4 md:border-r md:border-b-0">
            <h3 className="mb-2 text-sm font-semibold">cloud asynchronous work</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              prixy uses browserbase or kernel.sh for cloud browser sessions that keep working while you are away. the browser handles registration, signed-in pages, and joining through a meeting link.
            </p>
          </div>
          <div className="p-4">
            <h3 className="mb-2 text-sm font-semibold">your own environment / future support</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              future support will include open-source browser environments connectable to your own server, gcp, or azure. the aim is to let you choose where browser work runs without changing the instruction you give prixy.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="communication-payments" className="border-x border-b border-primary">
        <h2 id="communication-payments" className="border-b border-primary px-4 py-3 text-lg font-semibold text-primary">mail and payments</h2>
        <div className="grid md:grid-cols-2">
          <div className="border-b border-primary p-4 md:border-r md:border-b-0">
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary"><Mail size={16} aria-hidden="true" />mail / agentmail</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              agentmail provides the mail layer for invitations, registration confirmations, and meeting links that arrive before a session. mail is part of the joining workflow, not another inbox you need to watch.
            </p>
          </div>
          <div className="p-4">
            <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary"><CreditCard size={16} aria-hidden="true" />payment / vault and agentcard</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              the current payment direction uses kernel.sh vault with agentcard.ai or agentcard.sh for agent-assisted checkout, including paid event registration. payment execution is planned, not enabled in this preview.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="voice" className="border-x border-b border-primary">
        <div className="flex items-center gap-3 border-b border-primary px-4 py-3 text-primary">
          <Mic size={18} aria-hidden="true" />
          <h2 id="voice" className="text-lg font-semibold">voice</h2>
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-sm font-semibold">real-time audio / livekit</h3>
          <p className="max-w-3xl text-xs leading-relaxed text-muted-foreground">
            livekit is the voice layer for real-time audio and spoken interaction. it supports the presence side of listening and asking prepared questions when a session permits participation.
          </p>
        </div>
      </section>

      <section aria-labelledby="video" className="border-x border-b border-primary">
        <div className="flex items-center gap-3 border-b border-primary px-4 py-3 text-primary">
          <Video size={18} aria-hidden="true" />
          <h2 id="video" className="text-lg font-semibold">video</h2>
        </div>
        <div className="grid gap-4 p-4 sm:grid-cols-2">
          <div className="border border-primary p-4">
            <div className="mb-4 text-[10px] text-primary">planned provider</div>
            <h3 className="mb-2 text-sm font-semibold">masky.ai</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              masky.ai is the planned video presence layer for sessions where a visual representative is appropriate. video remains separate from the browser and voice environment.
            </p>
          </div>
          <div className="border border-primary bg-secondary/40 p-4 text-muted-foreground">
            <div className="mb-4 flex items-center gap-2 text-[10px]"><Pause size={12} aria-hidden="true" />frozen / muted for now</div>
            <h3 className="mb-2 text-sm font-semibold">cantina.com</h3>
            <p className="text-xs leading-relaxed">
              an alternative video direction on hold. cantina is frozen and muted for now, outside the active provider plan.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}