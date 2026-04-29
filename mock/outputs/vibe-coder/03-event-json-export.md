# hello.msg2ai.xyz Event JSON — merged export

> **Sample output from the `vibe-coder` skill** — the merged `event.json` ready
> to upload to **hello.msg2ai.xyz**, produced from the request *"Ship the event
> JSON to hello.msg2ai.xyz."* Every role contributed its slice; the General
> Chair (master file owner) merged and the Vibe Coder added the `web` slice.

---

## File location

`KB/10-msg2ai-export/event.json` (also stamped: `event-2026-04-28-1617.json`)

## Validation summary

- ✅ All 8 slices present
- ✅ 14 of 18 speakers have headshot URLs (4 missing — flagged to Program)
- ✅ All 4 confirmed sponsors have logo URLs
- ✅ Registration URL returns 200
- ✅ All 8 web URLs return 200
- ⚠️  `attendee_experience.helpdesk.phone_number` not yet provisioned — Lena to confirm before launch

## The merged event JSON

```json
{
  "event": {
    "name": "FutureStack 2026",
    "slug": "futurestack-2026",
    "start_date": "2026-10-15",
    "end_date": "2026-10-16",
    "timezone": "America/Chicago",
    "location": {
      "city": "Austin, TX",
      "venue": "Austin Convention Center — Hall 4",
      "address": "500 E Cesar Chavez St, Austin, TX 78701"
    },
    "theme": "Building the Next Generation of AI Infrastructure",
    "audience": "Engineering leaders, ML/AI practitioners, platform engineers, CTOs",
    "scale": 800,
    "website": "https://futurestack2026.dev",
    "registration_url": "https://futurestack2026.dev/register"
  },

  "status": {
    "registrations": "yellow",
    "sponsors": "yellow",
    "program": "green",
    "venue": "green",
    "marketing": "green",
    "finance": "green",
    "attendee_experience": "yellow",
    "web": "green"
  },

  "tracks": [
    { "id": "main", "name": "Main Stage" },
    { "id": "platform", "name": "Platform Engineering" },
    { "id": "applied",  "name": "Applied AI" }
  ],

  "sessions": [
    {
      "id": "S-001", "track_id": "main",
      "title": "The Future of Foundation Models",
      "format": "keynote", "duration_min": 45,
      "start": "2026-10-15T09:00:00-05:00",
      "room": "Main Stage",
      "speaker_ids": ["SP-001"]
    },
    {
      "id": "S-002", "track_id": "applied",
      "title": "Real-Time ML Pipelines at Scale",
      "format": "talk", "duration_min": 30,
      "start": "2026-10-15T10:30:00-05:00",
      "room": "Track A",
      "speaker_ids": ["SP-002"]
    }
    /* … 16 more sessions … */
  ],

  "speakers": [
    { "id": "SP-001", "name": "Dr. Amara Osei", "title": "Senior Research Scientist",
      "company": "DeepMind", "bio": "…",
      "headshot_url": "https://…/osei.jpg" },
    { "id": "SP-002", "name": "Raj Krishnan", "title": "Staff Engineer",
      "company": "Databricks", "bio": "…",
      "headshot_url": "https://…/krishnan.jpg" }
    /* … 16 more speakers … */
  ],

  "sponsor_tiers": [
    { "id": "title",     "name": "Title Sponsor",     "price": 75000, "max_slots": 1 },
    { "id": "gold",      "name": "Gold Sponsor",      "price": 40000, "max_slots": 3 },
    { "id": "silver",    "name": "Silver Sponsor",    "price": 15000, "max_slots": 6 },
    { "id": "community", "name": "Community Partner", "price":  5000, "max_slots": 10 }
  ],

  "sponsors": [
    {
      "id": "SP-CLOUDSCALE", "name": "CloudScale AI",
      "tier_id": "title", "logo_url": "https://…/cloudscale.svg",
      "website": "https://cloudscale.ai",
      "package": ["mainstage_branding", "keynote_intro", "booth_10x10", "10_tickets"],
      "booth": { "id": "B-01", "location": "Expo Hall, north wall" },
      "status": "confirmed"
    },
    { "id": "SP-VERTEX",     "name": "Vertex Data",      "tier_id": "gold",      "status": "confirmed" },
    { "id": "SP-NEURALPATH", "name": "NeuralPath Labs",  "tier_id": "silver",    "status": "confirmed" },
    { "id": "SP-DEVOPSWK",   "name": "DevOps Weekly",    "tier_id": "community", "status": "confirmed" }
  ],

  "marketing": {
    "tagline": "Building the next generation of AI infrastructure.",
    "brand": {
      "primary_color": "#c94a2a",
      "logo_url": "https://futurestack2026.dev/logo.svg"
    },
    "social_links": {
      "x": "https://x.com/futurestack",
      "linkedin": "https://linkedin.com/company/futurestack"
    },
    "press_kit_url": "https://futurestack2026.dev/press",
    "hashtag": "#FutureStack2026"
  },

  "venue": {
    "name": "Austin Convention Center — Hall 4",
    "address": "500 E Cesar Chavez St, Austin, TX 78701",
    "rooms": [
      { "id": "main",    "name": "Main Stage",    "capacity": 1000, "av": "full" },
      { "id": "track-a", "name": "Track A",       "capacity":  100, "av": "full" },
      { "id": "track-b", "name": "Track B",       "capacity":  100, "av": "full" },
      { "id": "track-c", "name": "Track C",       "capacity":  100, "av": "full" },
      { "id": "track-d", "name": "Track D",       "capacity":  100, "av": "full" },
      { "id": "expo",    "name": "Expo Hall",     "capacity":  600, "av": "limited" }
    ],
    "vendors": [
      { "id": "av-001",  "name": "Freeman AV",    "service": "AV",       "load_in": "2026-10-14T14:00" },
      { "id": "cat-001", "name": "ACC Catering",  "service": "F&B",      "load_in": "2026-10-15T06:30" }
    ],
    "accessibility": { "wheelchair": true, "hearing_loop": true, "step_free": true, "quiet_room": true }
  },

  "currency": "USD",
  "tickets": [
    { "id": "early-bird", "name": "Early Bird", "price":  395, "available_until": "2026-08-15", "perks": ["all_sessions", "reception", "swag_bag"] },
    { "id": "standard",   "name": "Standard",   "price":  595, "available_until": "2026-10-01", "perks": ["all_sessions", "reception"] },
    { "id": "vip",        "name": "VIP",        "price": 1295,                                "perks": ["all_sessions", "vip_lounge", "speaker_dinner"] },
    { "id": "student",    "name": "Student",    "price":   95,                                "perks": ["all_sessions"] }
  ],
  "invoicing": {
    "billing_email": "billing@futurestack2026.dev",
    "terms_days": 30
  },

  "attendee_experience": {
    "helpdesk": {
      "channels": ["sms", "whatsapp"],
      "languages": ["en", "es", "fr", "de", "ja", "ko", "pt", "zh"],
      "phone_number": null,
      "human_escalation": "+1-512-555-0199"
    },
    "ai_ambassador": {
      "enabled": true,
      "voice": "warm-professional",
      "fallback_to_human": true,
      "response_sla_seconds": 30
    },
    "session_reminders": { "lead_times_min": [1440, 60, 15] },
    "networking": { "opt_in": true, "format": "whatsapp_carousel", "matches_per_attendee": 3 },
    "nps": { "send_at": "event_close+2h", "channel": "whatsapp" },
    "accessibility": { "wheelchair": true, "quiet_room": true, "lactation_room": true }
  },

  "web": {
    "primary_domain":   "https://futurestack2026.dev",
    "registration_url": "https://futurestack2026.dev/register",
    "agenda_url":       "https://futurestack2026.dev/agenda",
    "speakers_url":     "https://futurestack2026.dev/speakers",
    "sponsors_url":     "https://futurestack2026.dev/sponsors",
    "venue_url":        "https://futurestack2026.dev/venue",
    "press_kit_url":    "https://futurestack2026.dev/press",
    "faq_url":          "https://futurestack2026.dev/faq",
    "vercel_project_id": "prj_aB3cD…",
    "github_repo":      "msg2ai/futurestack2026-site"
  }
}
```

## Upload command

```bash
$ msg2ai upload event.json --target hello.msg2ai.xyz
✓ Uploaded — event live at https://hello.msg2ai.xyz/futurestack-2026
✓ AI Ambassador concierge provisioned (SMS + WhatsApp, 8 languages)
✓ Attendee app available at the same URL
```
