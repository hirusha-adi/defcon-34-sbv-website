# ScamBait Village @ DEF CON 34

Static event website for **ScamBait Village @ DEF CON 34** — a community hacker village focused on scam awareness, ethical scambaiting education, fraud disruption, and victim safety.

Built with **Vite + React + Tailwind CSS**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build & deploy

```bash
npm run build
npm run preview
```

The `dist/` folder is a static site deployable to GitHub Pages, Cloudflare Pages, Vercel, or Netlify.

## Project structure

```
src/
  components/   # Reusable UI (Header, Footer, Button, TerminalPanel, etc.)
  data/         # Editable content (event info, nav, schedule, sponsors, forms)
  pages/        # Route pages (Home, About, Schedule, Speakers, Sponsors, Resources, Contact)
public/         # favicon.svg, og-image.svg
```

## Before launch — replace placeholders

### Microsoft Forms links

Update `src/data/forms.ts`:

| Key | Purpose |
|-----|---------|
| `speakerSubmission` | CFP / talk submissions |
| `sponsorInquiry` | Sponsor interest |
| `volunteerInterest` | Volunteer sign-up |
| `generalInquiry` | General contact |
| `pressInquiry` | Press / media |
| `updates` | Mailing list / updates |

All values are currently `#`.

### Schedule

Replace placeholder data in `src/data/schedule.ts` with confirmed talks, speakers, rooms, and times.

### Sponsors

- Update `src/data/sponsors.ts` with approved sponsor names, logos, and wording.
- Replace AnyDesk placeholder box with official logo once usage is approved.

### GCAS Labs mission

Edit the GCAS Labs copy in `src/pages/About.tsx` with approved mission text.

### Open Graph image

Replace `public/og-image.svg` with a final `og-image.png` (1200×630) and update `index.html` if needed.

### Legal / trademark

Update the footer legal note in `src/components/Footer.tsx` with approved copy.

## Content safety

This site is defensive education only. Do not add content that teaches unauthorized access, malware, doxxing, harassment, or fraud.

## License

Event content © ScamBait Village organizers. See repository for license details.
