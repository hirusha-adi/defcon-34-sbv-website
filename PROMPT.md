# PROMPT.md — Build Prompt for ScamBait Village @ DEF CON 34

Use this prompt in Cursor, Codex, v0, Windsurf, or another AI coding assistant to generate the first version of the website.

---

## Role

You are a senior front-end engineer and visual designer building a static event website for **ScamBait Village @ DEF CON 34**.

The site must be fast, accessible, dark, hacker-themed, and built with **Tailwind CSS**. It is primarily for speaker submissions, schedule awareness, sponsor information, community education, and general hype leading up to August.

---

## Project Context

Build a static website for **ScamBait Village @ DEF CON 34**.

ScamBait Village is a community-focused hacker village about scam awareness, ethical scambaiting, scam disruption, fraud education, telecom/social-engineering abuse, remote-access scam patterns, OSINT-for-good, and protecting real victims from financial and emotional harm.

The site should feel like a DEF CON village: underground, technical, community-driven, slightly chaotic, but still polished and professional enough for sponsors, speakers, press, and volunteers.

### Public event context to include

- Event: **DEF CON 34**
- Dates: **August 6–9, 2026**
- Location: **Las Vegas Convention Center West Hall, Las Vegas, Nevada**
- Village schedule/details: **coming soon** until finalized
- Speaker submissions: use a placeholder Microsoft Forms link: `#`
- Sponsor inquiry form: use a placeholder Microsoft Forms link: `#`
- Volunteer/contact form: use a placeholder Microsoft Forms link: `#`

### Organizing / community context

- Include **GCAS Labs** in the About section.
- Mission copy should be editable, but use this starting point:
  > GCAS Labs supports community-led anti-scam research, education, and responsible disruption work by connecting scambaiters, security researchers, technologists, and victim-support advocates.
- Mention **AnyDesk** as an initial sponsor/partner in the Sponsors section, but keep it simple until official assets and exact wording are supplied.
- Do not invent sponsor tiers, prices, logos, legal claims, or confirmed speaker names.

---

## Tech Requirements

Build as a static front-end website using one of these acceptable stacks:

1. **Vite + React + Tailwind CSS** — preferred if components/state are helpful.
2. **Astro + Tailwind CSS** — preferred if the goal is mostly static content.
3. **Plain HTML + Tailwind CSS** — acceptable for a very lightweight build.

The site must not require a backend. All forms should link to Microsoft Forms placeholders using `href="#"` until real links are provided.

### Required implementation details

- Use Tailwind CSS for styling.
- Make the site fully responsive: mobile, tablet, desktop, large desktop.
- Use semantic HTML.
- Use accessible color contrast.
- Add keyboard-visible focus states.
- Add skip-to-content link.
- Use plain anchor links or static pages.
- Use clean reusable components if using React/Astro.
- Add SEO metadata and Open Graph metadata.
- Add placeholder social preview metadata.
- No analytics unless explicitly requested later.
- No external fonts unless configured safely; system fonts are acceptable.
- No heavy animation libraries.
- No autoplay audio/video.
- No backend form handling.
- No exploit instructions, malware instructions, unauthorized-access guidance, or doxxing workflows.

---

## Pages / Sections

Build these pages as either separate routes or top-level sections with anchor navigation. Separate routes are preferred if using Astro/React Router; anchors are fine for a static single-page launch version.

### 1. Home

Purpose: bold landing page for the village.

Required content:

- Hero headline: **ScamBait Village @ DEF CON 34**
- Subheadline: community-driven scam disruption, awareness, and scambaiting education at hacker summer camp.
- Event meta: **August 6–9, 2026 · Las Vegas Convention Center West Hall**
- Primary CTA: **Submit a Talk** → `#`
- Secondary CTA: **Become a Sponsor** → `#`
- Tertiary CTA: **Get Updates** → `#`
- Short “what this is” section.
- Hype cards for:
  - talks
  - workshops
  - live demos
  - scam awareness
  - community tools
  - victim-safety education
- Add a “signal board” / terminal-style announcement strip:
  - `CFP: Opening Soon`
  - `Schedule: Coming Soon`
  - `Sponsors: AnyDesk + more TBA`
  - `Village Ops: August 2026`

Suggested hero copy:

> A hacker village for the people who waste scammer time, expose fraud patterns, build anti-scam tooling, and teach the public how not to get burned.

Tone: bold, technical, punchy, not corporate.

---

### 2. About

Purpose: explain the village, GCAS Labs, and the community.

Required sections:

- What ScamBait Village is.
- Why scams matter.
- GCAS Labs mission.
- Community values.
- Safety / ethics statement.

Include this content direction:

- Scambaiting should be framed as education, research, awareness, and responsible disruption.
- Emphasize protecting victims, reducing harm, and sharing knowledge.
- Avoid glorifying harassment, vigilantism, illegal access, malware, doxxing, or revenge hacking.

Suggested ethics statement:

> We focus on education, awareness, responsible research, and victim safety. The village does not encourage unauthorized access, malware deployment, doxxing, harassment, or instructions that create new harm.

---

### 3. Schedule

Purpose: show talks, workshops, and demos even if the program is not ready.

For now, create a polished **Coming Soon** schedule page.

Required elements:

- “Schedule coming soon” hero.
- Three placeholder day columns or cards:
  - Thursday, August 6 — DEF CON kickoff / village setup awareness
  - Friday, August 7 — talks, demos, community sessions TBA
  - Saturday, August 8 — workshops, panels, live demos TBA
  - Sunday, August 9 — wrap-up, community action, closing sessions TBA
- Filter chips UI for future:
  - Talks
  - Workshops
  - Live Demos
  - Panels
  - Beginner Friendly
  - Advanced
- Empty-state cards with terminal-style labels:
  - `slot.pending`
  - `speaker.tba`
  - `room.tba`

Data should be easy to replace later with a schedule array/object.

---

### 4. Speakers / CFP

Purpose: drive speaker submissions.

Required content:

- Page title: **Call for Presentations**
- CTA button: **Submit via Microsoft Forms** → `#`
- Explain what types of submissions are welcome.

Submission categories:

- Scam intelligence and fraud trend research
- Ethical scambaiting workflows
- Victim-safety and intervention stories
- OSINT-for-good
- Telecom abuse, caller ID spoofing, SMS scams, robocalls
- Remote-access scam education
- Social engineering defense
- AI-generated scams and AI-assisted defense
- Tooling, automation, dashboards, reporting pipelines
- Community operations and volunteer coordination
- Legal, ethical, and safety lessons

Add a “what we do not want” section:

- No illegal hacking walkthroughs
- No malware deployment
- No doxxing
- No revenge content
- No live targeting of real people without consent/legal basis
- No vendor pitch disguised as a talk

Fields to mention as expected in the Microsoft Form:

- Speaker name / handle
- Email
- Organization/community affiliation, optional
- Talk title
- Talk type: talk, workshop, live demo, panel, lightning talk
- Abstract
- Audience level
- Safety/legal notes
- Prior presentation links, optional
- A/V needs
- Consent to be contacted

---

### 5. Sponsors

Purpose: sponsor information and CTA.

Required content:

- Thank **AnyDesk** as an early/current sponsor or highlighted supporter. Use cautious wording:
  > Thank you to AnyDesk for supporting anti-scam education and community-led scam disruption work.
- Add “more sponsors TBA.”
- CTA: **Become a Sponsor** → `#`

Sponsor value propositions:

- Reach DEF CON attendees interested in fraud prevention, social engineering defense, anti-abuse, identity safety, platform trust, telecom security, and threat intelligence.
- Support public education against scams.
- Help fund workshops, demos, infrastructure, signage, recordings, volunteer operations, and community tools.

Do not invent exact sponsor tiers or prices. Instead, create placeholder cards:

- Signal Sponsor — TBA
- Infrastructure Sponsor — TBA
- Community Sponsor — TBA
- Education Sponsor — TBA

Each card should include “details coming soon” and a CTA.

---

### 6. Resources

Purpose: educational resources and community links.

Create resource cards grouped by:

- Learn how scams work
- Report scams
- Remote-access scam safety
- OSINT and investigation ethics
- Community tools
- Victim support

Use placeholder links `#` for now, except for obvious public-safety resources if included manually later.

Resource card examples:

- “Remote Access Scam Red Flags”
- “How to Talk to a Potential Scam Victim”
- “Scambaiting Safety Checklist”
- “Reporting Phone Numbers and Domains”
- “OSINT Ethics for Anti-Scam Work”
- “AI Voice / Deepfake Scam Awareness”

Do not include step-by-step offensive guidance.

---

### 7. Contact

Purpose: inquiries, press, volunteering.

Required CTAs:

- General inquiries → `#`
- Press inquiries → `#`
- Volunteer interest → `#`
- Sponsor inquiries → `#`

Add simple contact cards:

- Speak at the village
- Sponsor the village
- Volunteer with ops
- Press / media
- Community collaboration

---

## Visual Direction

Use a dark hacker theme. It should look like a modern DEF CON village site, not a generic SaaS landing page.

### Mood

- black terminal
- signal interception
- scam call-center takedown board
- green phosphor / CRT glow
- packet traces
- threat-intel dashboard
- underground hacker zine
- clean enough for sponsors

### Avoid

- corporate blue SaaS gradients
- generic stock photos
- cartoon scammers
- fake Matrix rain everywhere
- childish neon overload
- cluttered illegible terminal screens
- flowers, soft pastel styling, or cheerful startup visuals

### Suggested palette

- Background: near-black `#050807`
- Surface: deep green-black `#07110D`
- Panel: `#0B1512`
- Border: muted green `#18352A`
- Primary accent: phosphor green `#39FF88`
- Secondary accent: cyan `#40E0D0`
- Warning accent: amber `#FFD166`
- Danger accent: red `#FF4D6D`
- Text: off-white `#E6FFF2`
- Muted text: `#8AA99A`

### Typography

- Headings: bold condensed sans or system sans.
- Technical labels/code: monospace.
- Body: readable sans.

Use CSS variables or Tailwind theme extensions for colors.

---

## Components to Build

- Header / navbar
- Mobile nav
- Hero section
- CTA buttons
- Terminal announcement bar
- Section header component
- Hype/stat cards
- Schedule placeholder cards
- Speaker submission category cards
- Sponsor cards
- Resource cards
- Contact cards
- Footer
- Badge/pill component
- Focus styles
- “Coming soon” empty state

---

## Suggested Data Structures

Use plain arrays/objects so the content can be updated easily later.

```ts
export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Speakers', href: '/speakers' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export const formLinks = {
  speakerSubmission: '#',
  sponsorInquiry: '#',
  volunteerInterest: '#',
  generalContact: '#',
  pressContact: '#',
  updates: '#',
};

export const eventInfo = {
  name: 'ScamBait Village @ DEF CON 34',
  dates: 'August 6–9, 2026',
  location: 'Las Vegas Convention Center West Hall, Las Vegas, Nevada',
  status: 'Schedule coming soon',
};

export const scheduleDays = [
  { day: 'Thursday', date: 'August 6', status: 'Kickoff / setup awareness TBA' },
  { day: 'Friday', date: 'August 7', status: 'Talks, demos, and sessions TBA' },
  { day: 'Saturday', date: 'August 8', status: 'Workshops, panels, and live demos TBA' },
  { day: 'Sunday', date: 'August 9', status: 'Wrap-up and community action TBA' },
];
```

---

## Homepage Structure

Recommended order:

1. Skip link
2. Header/nav
3. Hero
4. Terminal announcement strip
5. What the village is
6. Feature grid / hype cards
7. CFP CTA band
8. Schedule coming soon preview
9. Sponsor strip with AnyDesk
10. Resources preview
11. Contact CTA
12. Footer

---

## Copywriting Tone

Use language like:

- “Waste scammer time. Protect real people.”
- “Scam intel, live demos, fraud education, and community tooling.”
- “For scambaiters, researchers, defenders, trust & safety teams, OSINT practitioners, and curious hackers.”
- “Come learn how scams work before someone you love gets hit.”
- “The schedule is compiling. CFP signal opens soon.”

Avoid:

- “We hack scammers.”
- “We destroy call centers.”
- “Learn to break into scammer machines.”
- Any promise of illegal activity, harassment, or unauthorized access.

---

## Accessibility Requirements

- All links and buttons must have visible focus states.
- Use semantic landmarks: `header`, `main`, `section`, `footer`.
- Use proper heading hierarchy.
- Do not rely on color alone for meaning.
- Keep body text readable.
- Maintain color contrast.
- Ensure mobile nav works with keyboard.
- Respect `prefers-reduced-motion`.

---

## SEO / Metadata

Default title:

> ScamBait Village @ DEF CON 34

Default description:

> ScamBait Village @ DEF CON 34 is a community hacker village focused on scam awareness, ethical scambaiting education, fraud disruption, OSINT-for-good, and protecting victims.

Suggested keywords:

- ScamBait Village
- DEF CON 34
- scambaiting
- scam awareness
- fraud prevention
- social engineering defense
- OSINT
- anti-scam community
- hacker village

Open Graph:

- `og:title`: ScamBait Village @ DEF CON 34
- `og:description`: Talks, workshops, live demos, and community education for scam disruption and victim safety.
- `og:type`: website
- `og:image`: `/og-image.png` placeholder

---

## Content Safety Requirements

The website must support defensive education and community awareness only. Do not generate content that teaches or enables:

- unauthorized system access
- malware deployment
- credential theft
- doxxing
- harassment
- live targeting of real individuals
- evasion of law enforcement or platform safety systems
- operational instructions for committing fraud

When in doubt, frame content around prevention, reporting, victim support, research ethics, and responsible disclosure.

---

## Deliverables

Generate:

- A polished static website.
- Tailwind configuration with the theme tokens.
- Reusable components.
- Placeholder Microsoft Forms links using `#`.
- Placeholder schedule data.
- Placeholder sponsor tier cards.
- Responsive layout.
- SEO metadata.
- README notes explaining where to replace Microsoft Forms links, sponsor assets, and confirmed schedule data.

---

## Acceptance Criteria

The first version is successful when:

- The site clearly communicates what ScamBait Village is.
- The home page has a strong hacker-village hero.
- CFP/speaker submissions are prominent.
- Schedule can stay “coming soon” without looking unfinished.
- Sponsor page highlights AnyDesk and invites future sponsors.
- Resources page supports awareness and education.
- Contact page covers inquiries, press, sponsors, and volunteers.
- All Microsoft Forms links are placeholders using `#`.
- The site looks dark, hacker-themed, and polished.
- It is fully static and deployable to GitHub Pages, Cloudflare Pages, Vercel static output, or Netlify.
