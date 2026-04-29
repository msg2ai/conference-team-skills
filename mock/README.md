# Mock Conference — FutureStack 2026

This directory contains a complete mock conference demonstrating all 8 skills working together — from the shared Knowledge Base, through every role's outputs, to a merged event JSON ready for upload to **hello.msg2ai.xyz**.

**FutureStack 2026** is a fictional 2-day AI infrastructure conference (Oct 15–16, Austin Convention Center, 800 attendees) used to showcase what each skill produces. The committee personas in `conference.md` match the personas on the [campaign visual](../docs/campaign-visual.html) and [landing page](../docs/index.html) — Sara Chen (Conference Chair), Marco Rivera (Program Director), James Patel (Head of Sponsorship), Priya Kim (CMO), Tom Thompson (Head of Operations), Amelia Okafor (CFO), Lena Nguyen (Chief Experience Officer), and Noor Khan (Head of Web).

## What's in here

```
mock/
├── conference.md                          ← The fake conference definition (all details + KB location + Vercel/GitHub)
├── README.md                              ← You are here
└── outputs/                               ← One sample artifact per capability per skill
    ├── general-chair/
    │   ├── 01-timeline.md                 ← Critical path timeline
    │   ├── 02-risk-register.md            ← Risk register with mitigations
    │   └── 03-board-briefing.md           ← Executive status briefing
    ├── program-content/
    │   ├── 01-agenda.md                   ← 2-day agenda grid
    │   ├── 02-speaker-outreach-email.md   ← Personalized speaker outreach
    │   └── 03-speaker-tracker.md          ← Speaker pipeline tracker
    ├── sponsorship/
    │   ├── 01-outreach-sequence.md        ← 3-email sponsor outreach cadence
    │   ├── 02-activation-tracker.md       ← Sponsor deliverables matrix
    │   └── 03-sponsor-roi-report.md       ← Post-event sponsor value report
    ├── marketing-comms/
    │   ├── 01-campaign-calendar.md        ← Week-by-week marketing plan
    │   ├── 02-email-copy.md               ← 4 ready-to-send email campaigns
    │   └── 03-press-release.md            ← Event announcement press release
    ├── venue-logistics/
    │   ├── 01-floor-plan-brief.md         ← Written floor plan layout
    │   ├── 02-vendor-tracker.md           ← Vendor status tracker
    │   └── 03-run-of-show.md              ← Minute-by-minute Day 1 playbook
    ├── finance-registration/
    │   ├── 01-budget.md                   ← Full event P&L with scenarios
    │   ├── 02-registration-tiers.md       ← Ticket tier design
    │   └── 03-sponsor-invoice.md          ← Professional sponsor invoice
    ├── attendee-experience/
    │   ├── 01-faq.md                      ← 20-question pre-event FAQ
    │   ├── 02-ai-ambassador-config.md     ← SMS/WhatsApp concierge setup
    │   └── 03-post-event-report.md        ← NPS + post-event analysis
    └── vibe-coder/                        ← NEW
        ├── 01-landing-page-brief.md       ← Next.js landing page scaffold + content map
        ├── 02-vercel-deploy-log.md        ← Vercel CLI + GitHub CLI deploy walk-through
        └── 03-event-json-export.md        ← Merged hello.msg2ai.xyz event JSON
```

## Knowledge Base layout

In a real run, this is what the team's shared Knowledge Base looks like for FutureStack 2026 (Google Drive):

```
FutureStack 2026/                          ← shared root
├── 01-event-brief/                        ← theme, dates, audience, scale (Sara)
├── 02-brand-and-voice/                    ← logos, colors, tone (Priya)
├── 03-prior-events/                       ← FutureStack 2025 recap, NPS, sponsor list
├── 04-sponsors/                           ← pipeline, contracts, deliverables (James)
├── 05-speakers/                           ← bios, headshots, slides, briefings (Marco)
├── 06-venue-logistics/                    ← venue contracts, vendors, ROS (Tom)
├── 07-finance-registration/               ← budget, invoices, registration (Amelia)
├── 08-attendees/                          ← segments, registration export, feedback (Lena)
├── 09-meeting-notes/                      ← committee notes, decisions (Sara owns)
├── 10-msg2ai-export/                      ← merged event.json for hello.msg2ai.xyz
└── 11-web/                                ← repo URLs, deploy notes, screenshots (Noor)
```

The Knowledge Base was bootstrapped by **Firecrawl** scraping `https://futurestack2025.dev` (last year's site) — 30 minutes of crawling produced `01-event-brief/from-website.md` and `03-prior-events/website-extract-2026-04-01.json`, saving the team a half-day of typing.

## How the skills connect

These outputs demonstrate the cross-skill connections built into every skill — and show the merge point at `10-msg2ai-export/event.json`:

```
                              Conference Chair (Sara)
                              merges all slices into event.json
                              ↑   ↑   ↑   ↑   ↑   ↑   ↑
            ┌────────┬────────┴───┴───┴───┴───┴───┴───┴────────┬────────┐
            │        │             │              │             │        │
        Program  Sponsorship    CMO       Operations   Finance  Attendee   Web
       (Marco)    (James)    (Priya)     (Tom)       (Amelia)  XP (Lena) (Noor)
            │        │             │              │             │        │
            └────────┴─────────────┴── shared Knowledge Base ────┴────────┘
```

| From Skill | To Skill | What's handed off |
|---|---|---|
| Program → Marketing | Speaker names, bios, session titles for promotion |
| Program → Venue | Session schedule for room assignments and AV |
| Sponsorship → Finance | Confirmed revenue for budget reconciliation |
| Sponsorship → Marketing | Logos and tier info for website and signage |
| Sponsorship → Venue | Booth specs for floor plan |
| Sponsorship → Vibe Coder | Per-sponsor microsite content |
| Finance → Sponsorship | Attendee demographics for prospect pitches |
| Finance → Venue | Attendee count for catering |
| Finance → Vibe Coder | Ticket tiers + pricing for the registration page |
| Venue → Attendee XP | Venue layout for wayfinding |
| Venue → Vibe Coder | Address, hotels, accessibility for `/venue` page |
| Marketing → Vibe Coder | Brand assets, copy, press kit for the website |
| Vibe Coder → All skills | The canonical deployed URL (used in every email/deck) |
| Attendee XP → Marketing | NPS and feedback for post-event content |
| All skills → Conference Chair | Status updates for board briefings + JSON slice for export |

## Using this as a template

To plan a real conference with these skills:

1. Copy `conference.md` and replace with your event details
2. Set up your shared Knowledge Base in Google Drive (or Dropbox / Notion) — the General Chair skill creates the 11-folder structure for you
3. Bootstrap the KB from your existing event website with Firecrawl (one prompt: *"Bootstrap the knowledge base from https://your-event.com using Firecrawl"*)
4. Open Claude Code and use the skills naturally:
   ```
   "Build the timeline for my conference — event date is March 20, 500 attendees"
   "Write outreach emails for 3 sponsor prospects"
   "Spin up the landing page and ship it to a Vercel preview"
   "Export the event JSON for upload to hello.msg2ai.xyz"
   ```
5. Each skill produces outputs like the ones in `outputs/` — ready to use
