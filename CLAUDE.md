# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A collection of 8 Claude Code skills for conference organizing teams, packaged three ways:
1. **Personal skills** — clone into `~/.claude/skills/` and they're auto-detected
2. **Claude Code plugin** — load via `claude --plugin-dir` using the `.claude-plugin/plugin.json` manifest
3. **npm package** — `npx conference-team-skills install` runs `bin/cli.js` which clones to the skills directory

There is no build step, no tests, and no dependencies. The deliverables are markdown files.

## Architecture

Each skill is a folder at the repo root containing a single `SKILL.md` file with YAML frontmatter (`name`, `description`) and markdown instructions. The frontmatter `description` field is what Claude uses to decide when to invoke the skill, so it must contain trigger phrases.

The 8 skills: `conference-general-chair`, `conference-program-chair`, `conference-sponsorship-lead`, `conference-marketing-comms`, `conference-venue-logistics`, `conference-finance-registration`, `conference-attendee-experience`, `conference-vibe-coder`. Each directory name **must** match the `name:` field in its `SKILL.md` frontmatter — Claude Code's skill loader will silently skip skills where they diverge.

Every skill (except setup boilerplate) follows the same shape: `### 0. Connect to the Shared Knowledge Base` (Google Drive / Dropbox / OneDrive / Notion) is the first capability, with **Firecrawl** as the website-bootstrap path. The last capability is always `### N. Export to hello.msg2ai.xyz Event JSON` — each skill owns a slice of `10-msg2ai-export/event.json`. The General Chair owns the master file and merges the slices.

The `.claude-plugin/plugin.json` manifest points `"skills": "./"` at the repo root so the plugin loader finds skill folders directly (no `skills/` subdirectory).

`bin/cli.js` is a zero-dependency Node.js CLI that shells out to `git clone`/`git pull` to install/update skills into `~/.claude/skills/conference-team-skills/`. It resolves the home directory cross-platform via `HOME`, `USERPROFILE`, or `HOMEDRIVE`+`HOMEPATH`.

## Key conventions

- Skill names use the pattern `conference-<role>` (e.g., `conference-general-chair`).
- Every skill references Claude connectors (Gmail, Google Calendar, Google Drive, Zoho CRM) but none depend on them — they're optional accelerators.
- The `conference-attendee-experience` skill is unique: it references two external products (AI Ambassador at ai-ambassador.xyz, ActionNotes) that are not part of this repo.
- `package.json` `files` array controls what ships to npm — every skill folder and `.claude-plugin/` must be listed there.

## When editing skills

- Keep the frontmatter `description` rich with trigger phrases — this is how Claude decides to activate the skill.
- Each skill is self-contained. Do not create cross-dependencies between skills.
- The `## How to work` section in each skill sets behavioral rules. The `## What you do` section defines numbered capabilities.
- All skills should produce outputs ready to use (send, present, paste) — not rough drafts.

## npm / CLI

```bash
node bin/cli.js help       # test CLI locally
node bin/cli.js list       # verify skill listing
```

The package name on npm is `conference-team-skills`. The binary name is also `conference-team-skills`.
