# Landing Page Brief — futurestack2026.dev

> **Sample output from the `vibe-coder` skill** — produced from a single
> prompt: *"Spin up the FutureStack 2026 landing page using the brand and
> content already in our KB and ship it to a Vercel preview today."*

---

## Stack

- **Framework:** Next.js 15 (App Router, TypeScript, Tailwind, ESLint, src-dir)
- **Hosting:** Vercel (production: `futurestack2026.dev`, preview per PR)
- **Repo:** `msg2ai/futurestack2026-site` (default branch protected, dev branch for staging)
- **Fonts:** `Fraunces` (display), `Inter` (body), self-hosted via `next/font`
- **CMS:** content layer reads from `10-msg2ai-export/event.json` in the KB

## Content sourced from the Knowledge Base

| Section | Pulled from |
|---|---|
| Event name, dates, location, theme | `01-event-brief/futurestack-2026.md` |
| Brand color, logo, fonts | `02-brand-and-voice/brand.md` |
| Speaker grid (5 confirmed) | `05-speakers/` + program slice of `event.json` |
| Sponsor logo wall (4 confirmed tiers) | `04-sponsors/` + sponsorship slice |
| Ticket tiers + price | `07-finance-registration/registration-tiers.md` |
| Venue address + map | `06-venue-logistics/venue.md` |
| FAQ (top 8 of 20) | `08-attendees/faq.md` |

## Page structure

```
app/
├── (marketing)/
│   ├── page.tsx               ← Hero, why-attend, agenda preview, speakers, sponsors, FAQ, CTA
│   ├── agenda/page.tsx        ← Full schedule, filter by track
│   ├── speakers/
│   │   ├── page.tsx           ← Grid
│   │   └── [slug]/page.tsx    ← Speaker detail
│   ├── sponsors/
│   │   ├── page.tsx           ← Tiered wall
│   │   └── [slug]/page.tsx    ← Per-sponsor microsite
│   ├── venue/page.tsx         ← Address, hotels, parking, accessibility
│   ├── press/page.tsx         ← Press kit (logos, fact sheet, headshots)
│   ├── faq/page.tsx           ← Pre-event Q&A
│   └── register/page.tsx      ← Tier comparison + Stripe Checkout
├── opengraph-image.tsx        ← Auto-generated OG image with event branding
├── sitemap.ts
└── robots.ts
```

## Hero copy (in CMO Priya Kim's voice — pulled from `02-brand-and-voice/`)

> ## Building the next generation of AI infrastructure.
> Two days. One track. Five hundred practitioners shipping AI in production.
> **Austin · Oct 15–16, 2026**
>
> [ Get the early-bird ticket — $395 ] [ See the agenda → ]

## Lighthouse targets (preview build)

| Metric | Target | Achieved |
|---|---|---|
| Performance | 95+ | 98 |
| Accessibility | 95+ | 100 |
| Best Practices | 95+ | 100 |
| SEO | 95+ | 100 |

## What the Vibe Coder shipped today

- ✅ Repo scaffolded: `msg2ai/futurestack2026-site` (private, branch protection on)
- ✅ Initial commit pushed (8 routes, content layer wired to `event.json`)
- ✅ Vercel preview live: `https://futurestack2026-site-git-main.vercel.app`
- ✅ Custom domain pending DNS — `futurestack2026.dev` apex points to Vercel
- ✅ OG image generation working (tested on LinkedIn + X share preview)
- ✅ Stripe Checkout wired to test keys (3 ticket tiers)
- ✅ Lead-capture form (newsletter) wired to AgentMail
- ⚠️  3 speakers still missing headshots — handed back to Program Director (Marco)

## Hand-offs

- → **CMO (Priya):** Preview URL ready for review and social-share testing
- → **General Chair (Sara):** Lighthouse scores logged, no risks
- → **Sponsorship (James):** Sponsor microsite scaffolds for Title and Gold tiers ready for review
- → **Finance (Amelia):** Stripe test keys swapped for production keys before early-bird launch (Jul 1)
- → **Attendee Experience (Lena):** Web slice contributed to `10-msg2ai-export/event.json`
