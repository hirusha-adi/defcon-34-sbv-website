# DESIGN.md — ScamBait Village @ DEF CON 34 Static Website

This file defines the content, visual system, page structure, components, and implementation guidance for the **ScamBait Village @ DEF CON 34** website.

---

## 1. Site Purpose

The website exists to support the launch and promotion of **ScamBait Village @ DEF CON 34**.

Primary goals:

1. Drive **speaker submissions** through a Microsoft Forms link.
2. Build awareness before DEF CON 34 in August 2026.
3. Publish schedule information once available.
4. Explain what the village is and why it matters.
5. Recognize **AnyDesk** and future sponsors.
6. Provide scam-awareness resources for attendees and the wider public.
7. Route inquiries for press, sponsors, volunteers, speakers, and community partners.

The first release can be mostly static, with “coming soon” states for schedule and final speaker list.

---

## 2. Known Event Information

Use this information across the site:

- **Site / event name:** ScamBait Village @ DEF CON 34
- **Conference:** DEF CON 34
- **Dates:** August 6–9, 2026
- **Location:** Las Vegas Convention Center West Hall, Las Vegas, Nevada
- **Primary audience:** DEF CON attendees, scambaiters, anti-scam researchers, trust & safety teams, OSINT practitioners, cyber defenders, telecom/security people, victim-support advocates, press, and sponsors.
- **Forms:** Microsoft Forms links; use `#` placeholders until final links are provided.
- **Initial sponsor/supporter:** AnyDesk
- **Schedule status:** Coming soon

### Verification notes

Before launch, confirm:

- final village room/location inside DEF CON 34
- exact operating days and hours
- whether village programming is all four days or a subset
- official sponsor wording and logos
- official GCAS Labs mission wording
- exact Microsoft Forms links
- DEF CON trademark/logo usage permissions

---

## 3. Brand Positioning

### Core idea

**ScamBait Village is where scam awareness, community scambaiting, anti-fraud research, and hacker culture collide.**

It should feel like a mission board for people fighting scams, not a corporate conference microsite.

### Brand pillars

1. **Community-led** — built around scambaiters, researchers, volunteers, defenders, and educators.
2. **Victim-focused** — the reason the village exists is to reduce harm to real people.
3. **Technical but responsible** — research, tools, OSINT, telemetry, and demos without illegal access or reckless content.
4. **DEF CON energy** — underground, curious, hands-on, slightly rebellious.
5. **Sponsor-friendly** — polished enough for partners while still feeling authentic.

### One-line positioning

> A hacker village for scam awareness, ethical scambaiting education, live demos, anti-fraud tooling, and community-led scam disruption.

### Short hero copy

> Waste scammer time. Protect real people.

### Longer hero copy

> ScamBait Village brings together scambaiters, researchers, defenders, OSINT practitioners, trust & safety teams, and curious hackers to study how scams work, build safer countermeasures, and teach people how not to get burned.

---

## 4. Audience

### Primary users

- DEF CON attendees looking for villages to visit
- People who already watch or participate in scambaiting
- Security researchers interested in fraud, social engineering, OSINT, telecom abuse, or trust & safety
- Speakers considering submitting a talk or workshop
- Sponsors interested in anti-scam, anti-abuse, fraud prevention, identity safety, telecom security, or remote access safety

### Secondary users

- Press/media
- Volunteers
- Victim-support communities
- Public safety and consumer-protection groups
- People looking for scam education resources

---

## 5. Information Architecture

Main navigation:

1. Home
2. About
3. Schedule
4. Speakers
5. Sponsors
6. Resources
7. Contact

For the first version, this can be implemented as either:

- one-page anchor navigation, or
- a small static multi-page site.

A multi-page site is cleaner once schedule/speaker/sponsor content grows.

---

## 6. Page Specifications

## 6.1 Home

### Purpose

Create immediate hype and explain the village in under 10 seconds.

### Required sections

#### Hero

Content:

- Eyebrow: `DEF CON 34 · August 2026 · Las Vegas`
- H1: `ScamBait Village @ DEF CON 34`
- Subheading: `Scam intel, live demos, fraud education, and community tooling for the people fighting back against scams.`
- Event meta: `August 6–9, 2026 · Las Vegas Convention Center West Hall`
- Primary CTA: `Submit a Talk`
- Secondary CTA: `Become a Sponsor`
- Tertiary text link: `View schedule status`

Visual treatment:

- Large brutal headline.
- Terminal/status-panel feel.
- Subtle grid/noise background.
- No stock photos.
- Use a fake command prompt motif, e.g.:

```txt
$ trace --source scam --mode community
signal acquired: village_ops_august_2026
cfp_status: pending
schedule_status: compiling
```

#### Signal board

Four small status cards:

- `CFP` — Opening Soon
- `Schedule` — Coming Soon
- `Sponsors` — AnyDesk + more TBA
- `Village Ops` — August 2026

#### What the village is

Three cards:

- Scam awareness
- Ethical scambaiting education
- Community anti-fraud tooling

#### Main CTA band

Text:

> Got research, tooling, field stories, workshops, or hard-won lessons from the anti-scam front line?

Button:

- `Submit to CFP` → `#`

#### Sponsor preview

Text:

> Thank you to AnyDesk for supporting anti-scam education and community-led scam disruption work.

Buttons:

- `Become a Sponsor` → `#`
- `Sponsor Info` → `/sponsors` or `#sponsors`

---

## 6.2 About

### Purpose

Explain the village, GCAS Labs, and the ethical frame.

### Required sections

#### What is ScamBait Village?

Copy direction:

> ScamBait Village is a community space for people studying, documenting, disrupting, and educating others about scams. The village brings together scambaiters, security researchers, OSINT practitioners, telecom defenders, trust & safety teams, and educators to share practical lessons from the fight against fraud.

#### Why it matters

Mention:

- scams cause financial and emotional harm
- scam ecosystems involve phone numbers, domains, remote-access tools, payment rails, social engineering scripts, mule networks, and platform abuse
- education helps people recognize scams before money or credentials are lost

#### GCAS Labs

Starting copy:

> GCAS Labs supports community-led anti-scam research, education, and responsible disruption work by connecting scambaiters, security researchers, technologists, and victim-support advocates.

Add a note for editors:

> Replace this with approved GCAS Labs mission copy before production launch.

#### Values

Use cards or a short list:

- Protect victims first
- Teach, do not sensationalize
- Share defensive knowledge
- Respect consent and legality
- Build tools responsibly
- Make anti-scam work accessible

#### Safety / ethics statement

Use this prominently:

> The village focuses on education, awareness, responsible research, and victim safety. We do not encourage unauthorized access, malware deployment, doxxing, harassment, or instructions that create new harm.

---

## 6.3 Schedule

### Purpose

Allow the schedule to be unfinished without the page feeling empty.

### Header

- H1: `Schedule`
- Subheading: `Talks, workshops, panels, and live demos are being assembled. Full village programming will be published once confirmed.`

### Coming soon state

Use a terminal panel:

```txt
schedule.build: in_progress
speaker.queue: receiving_submissions
room.assignment: pending
publish.target: before_DEF_CON_34
```

### Day placeholders

Create four day cards:

1. Thursday, August 6 — Kickoff / setup awareness TBA
2. Friday, August 7 — Talks, demos, and community sessions TBA
3. Saturday, August 8 — Workshops, panels, and live demos TBA
4. Sunday, August 9 — Wrap-up and community action TBA

Each card should include:

- day
- date
- status badge: `TBA`
- placeholder slot rows

### Filter chips for future use

- Talks
- Workshops
- Live Demos
- Panels
- Beginner Friendly
- Advanced

These can be non-functional in the first release but should look ready for later filtering.

---

## 6.4 Speakers / CFP

### Purpose

Convert visitors into speaker submissions.

### Header

- H1: `Call for Presentations`
- Subheading: `Bring your scam research, field stories, tooling, workshops, and hard-earned lessons to ScamBait Village.`
- CTA: `Submit via Microsoft Forms` → `#`

### Submission types

Use cards:

- Talk
- Workshop
- Live Demo
- Panel
- Lightning Talk

### Topics we want

Use a two-column card grid:

- Scam intelligence and fraud trend research
- Ethical scambaiting workflows
- Victim-safety and intervention stories
- OSINT-for-good
- Telecom abuse, caller ID spoofing, SMS scams, and robocalls
- Remote-access scam education
- Social engineering defense
- AI-generated scams and AI-assisted defense
- Tooling, automation, dashboards, reporting pipelines
- Community operations and volunteer coordination
- Legal, ethical, and safety lessons

### Not a fit

Use a warning panel:

- illegal hacking walkthroughs
- malware deployment
- doxxing
- revenge content
- vendor pitch disguised as research
- live targeting of real people without consent/legal basis

### Expected form fields

Mention these so speakers know what to prepare:

- speaker name / handle
- email
- affiliation, optional
- talk title
- talk type
- abstract
- audience level
- safety/legal notes
- links to previous work, optional
- A/V needs
- consent to be contacted

---

## 6.5 Sponsors

### Purpose

Recognize current support and invite future sponsors.

### Header

- H1: `Sponsors`
- Subheading: `Support the village helping people understand, document, and disrupt scams responsibly.`

### AnyDesk section

Copy:

> Thank you to AnyDesk for supporting anti-scam education and community-led scam disruption work.

Implementation note:

- Use text-only sponsor placeholder until official logo usage is approved.
- Use a logo placeholder box labelled `AnyDesk` if needed.
- Do not imply an official partnership beyond approved wording.

### Sponsor CTA

Button:

- `Become a Sponsor` → `#`

### Sponsor value proposition

Use cards:

- Reach DEF CON attendees interested in fraud prevention and social engineering defense.
- Support public education around scams and remote-access abuse.
- Help fund workshops, signage, demos, infrastructure, recordings, and volunteer operations.
- Connect with anti-abuse, trust & safety, telecom, OSINT, and security communities.

### Placeholder tiers

Do not list prices yet. Use these placeholder cards:

1. Signal Sponsor — Details coming soon
2. Infrastructure Sponsor — Details coming soon
3. Community Sponsor — Details coming soon
4. Education Sponsor — Details coming soon

Each card CTA:

- `Request sponsor info` → `#`

---

## 6.6 Resources

### Purpose

Give visitors safe, educational next steps.

### Groups

#### Learn how scams work

Cards:

- Common scam patterns
- Social engineering red flags
- Remote-access scam anatomy
- AI voice and deepfake scam awareness

#### Report scams

Cards:

- Report phone numbers
- Report malicious domains
- Report payment abuse
- Preserve evidence safely

#### Community safety

Cards:

- Scambaiting safety checklist
- OSINT ethics
- Victim-first communication
- Legal boundaries

#### Tools and templates

Cards:

- Scam call notes template
- Domain/phone report checklist
- Awareness slide deck placeholder
- Community tooling index placeholder

Use `#` placeholder links for now unless official resources are later approved.

---

## 6.7 Contact

### Purpose

Route visitors quickly.

### Header

- H1: `Contact`
- Subheading: `Questions, press, sponsors, volunteers, and community collaborators can reach the village team here.`

### Contact cards

1. Speaker / CFP questions → `#`
2. Sponsor inquiries → `#`
3. Press / media → `#`
4. Volunteer interest → `#`
5. General inquiries → `#`
6. Community collaboration → `#`

Each card should have:

- title
- one-sentence description
- CTA button

---

## 7. Visual System

## 7.1 Theme

The visual language is **dark hacker village**, with restraint.

Keywords:

- terminal
- packet trace
- scam call board
- command center
- CRT phosphor
- threat intel dashboard
- underground zine
- DEF CON village

The site should look like it belongs near DEF CON, but it should still be legible and sponsor-safe.

## 7.2 Color Tokens

Use CSS variables or Tailwind theme extension.

| Token | Hex | Usage |
|---|---:|---|
| `bg` | `#050807` | primary background |
| `bg-soft` | `#07110D` | secondary background |
| `surface` | `#0B1512` | cards/panels |
| `surface-raised` | `#102018` | elevated cards |
| `border` | `#18352A` | subtle borders |
| `border-strong` | `#266347` | active borders |
| `text` | `#E6FFF2` | main text |
| `text-muted` | `#8AA99A` | secondary text |
| `accent` | `#39FF88` | primary green |
| `accent-cyan` | `#40E0D0` | secondary accent |
| `warning` | `#FFD166` | warnings/TBA |
| `danger` | `#FF4D6D` | safety warnings |

### Tailwind theme example

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        village: {
          bg: '#050807',
          soft: '#07110D',
          surface: '#0B1512',
          raised: '#102018',
          border: '#18352A',
          borderStrong: '#266347',
          text: '#E6FFF2',
          muted: '#8AA99A',
          green: '#39FF88',
          cyan: '#40E0D0',
          warning: '#FFD166',
          danger: '#FF4D6D',
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(57, 255, 136, 0.12)',
        panel: '0 20px 60px rgba(0, 0, 0, 0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
};
```

Fonts are optional. If external font loading is not desired, use system fonts.

## 7.3 Typography

### Headings

- Large, bold, slightly compressed if possible.
- Use uppercase labels sparingly.
- H1 should feel like a poster/banner.

Suggested classes:

```html
<h1 class="text-5xl font-black tracking-tight text-village-text md:text-7xl lg:text-8xl">
```

### Body

Readable and not too small.

```html
<p class="text-base leading-7 text-village-muted md:text-lg">
```

### Technical labels

Use monospace for:

- status chips
- terminal blocks
- dates
- fake CLI snippets
- metadata labels

---

## 8. Layout Rules

### Global layout

- Max content width: `max-w-7xl`
- Main padding: `px-4 sm:px-6 lg:px-8`
- Section padding: `py-16 md:py-24`
- Card radius: `rounded-2xl`
- Border: `border border-village-border`
- Background panels: `bg-village-surface/80`

### Hero layout

Desktop:

- left: headline/copy/CTAs
- right: terminal/status panel

Mobile:

- stacked
- hero headline remains large but not overflowing

### Background texture

Use pure CSS only:

- radial highlights with low opacity
- grid background using linear gradients
- optional noise texture via CSS if lightweight

Avoid heavy image backgrounds.

Example:

```css
.bg-grid {
  background-image:
    linear-gradient(rgba(57, 255, 136, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(57, 255, 136, 0.06) 1px, transparent 1px);
  background-size: 32px 32px;
}
```

---

## 9. Component Design

## 9.1 Buttons

### Primary

Use for CFP and main CTAs.

Visual:

- black/dark background
- green border or green fill
- strong hover/focus

Class direction:

```html
<a class="inline-flex items-center rounded-xl border border-village-green bg-village-green px-5 py-3 font-mono text-sm font-bold text-black shadow-glow transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-village-green focus:ring-offset-2 focus:ring-offset-village-bg">
```

### Secondary

```html
<a class="inline-flex items-center rounded-xl border border-village-borderStrong px-5 py-3 font-mono text-sm font-bold text-village-text transition hover:border-village-green hover:text-village-green focus:outline-none focus:ring-2 focus:ring-village-cyan focus:ring-offset-2 focus:ring-offset-village-bg">
```

## 9.2 Cards

Standard card:

```html
<div class="rounded-2xl border border-village-border bg-village-surface/80 p-6 shadow-panel">
```

Interactive card:

```html
<div class="rounded-2xl border border-village-border bg-village-surface/80 p-6 transition hover:-translate-y-1 hover:border-village-green hover:shadow-glow">
```

Respect reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 9.3 Terminal Panel

Use for hero/status/schedule empty states.

Required elements:

- top bar with three dots
- monospace text
- green/cyan highlights
- subtle border

Example content:

```txt
scambait-village@defcon34:~$ ./compile_schedule
[status] cfp_signal=warming_up
[status] speaker_queue=open_soon
[status] sponsor_signal=active
[status] village_ops=august_2026
```

## 9.4 Pills / Badges

Use for:

- Coming Soon
- TBA
- CFP
- Sponsor
- Beginner Friendly
- Workshop
- Live Demo

Style:

```html
<span class="rounded-full border border-village-border bg-village-soft px-3 py-1 font-mono text-xs text-village-muted">
```

## 9.5 Warning / Ethics Panel

Use red/amber accents but keep readable.

Text:

> Education only. No unauthorized access, malware, doxxing, harassment, or instructions that create new harm.

---

## 10. Navigation and Footer

## 10.1 Header

Left:

- wordmark: `ScamBait Village`
- small terminal cursor or `[SBV]` mark

Right:

- Home
- About
- Schedule
- Speakers
- Sponsors
- Resources
- Contact
- CTA button: `Submit a Talk`

Mobile:

- hamburger menu
- large tap targets
- keyboard accessible

## 10.2 Footer

Footer sections:

- Village name and short description
- Navigation links
- CTAs
- Legal/trademark note

Suggested footer note:

> DEF CON and sponsor names/logos are trademarks of their respective owners. Use official marks only with permission. Replace this note with approved legal copy before launch.

---

## 11. Imagery and Iconography

### Use

- CSS grid lines
- ASCII/terminal motifs
- abstract signal lines
- simple line icons
- glitch-style separators, used lightly
- monochrome sponsor/logo placeholders until official assets are approved

### Avoid

- fake scammer mugshots
- aggressive crime imagery
- police/military overtones
- copyrighted DEF CON art unless approved
- AnyDesk logo unless official use is approved
- overused Matrix rain

---

## 12. Interactions

Use minimal interactions:

- hover border glow on cards
- terminal cursor blink, optional
- mobile menu open/close
- anchor scroll
- future schedule filter UI can be static initially

Do not use heavy animation. Keep page performant.

---

## 13. Accessibility

Minimum requirements:

- Color contrast meets WCAG AA where practical.
- All CTAs are keyboard accessible.
- Focus rings are visible.
- No hover-only information.
- Skip link at top.
- Semantic landmarks.
- `aria-label` on mobile menu button.
- Reduced motion support.
- Descriptive link text.
- Images/logos have sensible alt text or are decorative.

---

## 14. Content Safety and Ethics

This website must stay defensive and educational.

Allowed framing:

- scam awareness
- research ethics
- victim safety
- reporting workflows
- public education
- defensive tooling
- social engineering defense
- fraud pattern analysis
- OSINT-for-good

Disallowed framing:

- unauthorized access tutorials
- malware instructions
- credential theft
- doxxing
- harassment
- instructions to target real people
- scam replication instructions
- instructions for evading detection or law enforcement

Use this standard wording where needed:

> ScamBait Village exists to educate, protect, and responsibly disrupt harm. We do not publish instructions for unauthorized access, malware, doxxing, harassment, or fraud.

---

## 15. Suggested File Structure

For Vite + React:

```txt
src/
  components/
    Header.tsx
    Footer.tsx
    Button.tsx
    TerminalPanel.tsx
    SectionHeader.tsx
    Card.tsx
    Badge.tsx
  data/
    event.ts
    nav.ts
    schedule.ts
    sponsors.ts
    resources.ts
    forms.ts
  pages/
    Home.tsx
    About.tsx
    Schedule.tsx
    Speakers.tsx
    Sponsors.tsx
    Resources.tsx
    Contact.tsx
  App.tsx
  main.tsx
  index.css
public/
  og-image.png
  favicon.svg
```

For Astro:

```txt
src/
  components/
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    about.astro
    schedule.astro
    speakers.astro
    sponsors.astro
    resources.astro
    contact.astro
  data/
public/
  og-image.png
  favicon.svg
```

---

## 16. Initial Content Data

Use this as a starting point.

```ts
export const forms = {
  speakerSubmission: '#',
  sponsorInquiry: '#',
  volunteerInterest: '#',
  generalInquiry: '#',
  pressInquiry: '#',
  updates: '#',
};

export const event = {
  name: 'ScamBait Village @ DEF CON 34',
  shortName: 'ScamBait Village',
  conference: 'DEF CON 34',
  dates: 'August 6–9, 2026',
  location: 'Las Vegas Convention Center West Hall, Las Vegas, Nevada',
  tagline: 'Waste scammer time. Protect real people.',
  description:
    'A community hacker village focused on scam awareness, ethical scambaiting education, fraud disruption, OSINT-for-good, and victim safety.',
};

export const sponsorPreview = [
  {
    name: 'AnyDesk',
    label: 'Sponsor / supporter',
    description:
      'Supporting anti-scam education and community-led scam disruption work.',
    url: '#',
  },
];

export const cfpTopics = [
  'Scam intelligence and fraud trend research',
  'Ethical scambaiting workflows',
  'Victim-safety and intervention stories',
  'OSINT-for-good',
  'Telecom abuse, caller ID spoofing, SMS scams, and robocalls',
  'Remote-access scam education',
  'Social engineering defense',
  'AI-generated scams and AI-assisted defense',
  'Tooling, automation, dashboards, and reporting pipelines',
  'Community operations and volunteer coordination',
  'Legal, ethical, and safety lessons',
];

export const scheduleDays = [
  {
    day: 'Thursday',
    date: 'August 6',
    status: 'Kickoff / setup awareness TBA',
  },
  {
    day: 'Friday',
    date: 'August 7',
    status: 'Talks, demos, and community sessions TBA',
  },
  {
    day: 'Saturday',
    date: 'August 8',
    status: 'Workshops, panels, and live demos TBA',
  },
  {
    day: 'Sunday',
    date: 'August 9',
    status: 'Wrap-up and community action TBA',
  },
];
```

---

## 17. Launch Checklist

Before public launch:

- Replace all `#` Microsoft Forms links.
- Confirm DEF CON 34 dates/location wording.
- Confirm village operating dates/hours.
- Add official room/location once available.
- Replace GCAS Labs placeholder mission with approved copy.
- Confirm AnyDesk sponsor wording and logo usage.
- Add privacy statement for outbound Microsoft Forms.
- Add final contact routing.
- Add final schedule and speakers.
- Add Open Graph image.
- Test mobile nav.
- Test keyboard navigation.
- Run Lighthouse accessibility/performance checks.
- Verify no unsafe/offensive instructional content is present.

---

## 18. Recommended First Milestone

Build a launch-ready static version with:

- Home
- About
- Schedule coming soon
- Speakers / CFP
- Sponsors
- Resources
- Contact
- all form links as `#`
- AnyDesk placeholder sponsor card
- GCAS Labs editable mission copy
- dark hacker theme
- responsive layout
- accessible focus states

This first milestone should be good enough to publish while final schedule, Microsoft Forms links, sponsor assets, and confirmed speaker details are still being collected.
