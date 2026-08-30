# prixy site shell

## build

- replace the placeholder home route with an editorial landing page modeled on the reference: cream canvas, flowing pink background bands, bold black type, delicate floral marks, and thin outlined content panels
- create a shared responsive header and footer with lowercase navigation for home, about, features, philosophy, and roadmap
- split the supplied copy into focused pages at `/`, `/about`, `/features`, `/philosophy`, and `/roadmap`
- keep all visible writing lowercase, avoid emojis, and use lucide icons where interface iconography is needed
- add unique metadata for every route and preserve accessible, semantic structure

## design system

- define the pink, cream, ink, olive, and border roles as semantic oklch tokens in `src/styles.css`
- use a bold geometric sans-serif for display text and a readable sans-serif for body copy
- recreate the organic reference motif with css shapes and lightweight decorative flower components rather than embedding the screenshot
- make navigation and content adapt cleanly from wide desktop to small mobile screens

## documentation

- create and maintain `overview.md`, `features.md`, `underthehood.md`, `techstack.md`, `port.md`, `portsb.md`, and `roadmap.md`
- document the current frontend-only architecture and give concrete local setup, deployment, and future backend migration guidance

## verification

- confirm route rendering and navigation in the browser at desktop and mobile widths
- check the current build diagnostics and correct any runtime or layout errors
