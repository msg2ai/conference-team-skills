# Setup Shortcuts

Quick-start scripts to connect the tools referenced by the conference team skills.

Run any script from this directory to configure the integration for Claude Code.

## Available Setup Scripts

| Script | What it sets up | Used by skills |
|---|---|---|
| [`setup-firecrawl.sh`](./setup-firecrawl.sh) | **Firecrawl** — bootstrap the shared Knowledge Base from an existing event website | All skills |
| [`setup-agentmail.sh`](./setup-agentmail.sh) | AgentMail — AI-native email inboxes | All skills |
| [`setup-gmail.sh`](./setup-gmail.sh) | Gmail connector | All skills |
| [`setup-google-calendar.sh`](./setup-google-calendar.sh) | Google Calendar connector | General Chair, Program, Venue, Finance |
| [`setup-google-drive.sh`](./setup-google-drive.sh) | Google Drive connector — shared Knowledge Base host | All skills |
| [`setup-zoom.sh`](./setup-zoom.sh) | Zoom for meetings and recordings | General Chair, Program, Venue, Attendee Experience |
| [`setup-canva.sh`](./setup-canva.sh) | Canva for design assets | Marketing, Sponsorship, Venue, Attendee Experience |
| [`setup-twenty-crm.sh`](./setup-twenty-crm.sh) | Twenty CRM for contact/pipeline management | Sponsorship, Finance, Program, Venue, Attendee Experience |
| [`setup-clickup.sh`](./setup-clickup.sh) | ClickUp for project/task management | All skills |
| [`setup-asana.sh`](./setup-asana.sh) | Asana for project/task management | All skills |
| [`setup-vercel.sh`](./setup-vercel.sh) | Vercel for event website deployment | Marketing, Vibe Coder |
| [`setup-obsidian.sh`](./setup-obsidian.sh) | Obsidian for knowledge base and notes | All skills |
| [`setup-all.sh`](./setup-all.sh) | Run all setup scripts at once | — |

## Usage

```bash
# Set up a single integration
bash setup/setup-gmail.sh

# Set up everything
bash setup/setup-all.sh
```

Most integrations require OAuth authentication — the script will open a browser for you to authorize.
