#!/bin/bash
# ============================================================
# create-conference-skills-repo.sh
# Run this from your terminal to create the GitHub repo
# and push all 8 conference team skills.
#
# Prerequisites:
#   - GitHub CLI installed: https://cli.github.com
#   - Logged in: gh auth login
#   - Or set GITHUB_TOKEN env var with a personal access token
# ============================================================

set -e

REPO_NAME="conference-team-skills"
ORG="msg2ai"
DESCRIPTION="8 free Claude skills — one for every seat on your conference org chart, plus a Vibe Coder for the website. Built by MSG2AI."
SKILLS_DIR="$(dirname "$0")"

echo "🚀 Creating GitHub repo: $ORG/$REPO_NAME"

# Create the repo under msg2ai org
gh repo create "$ORG/$REPO_NAME" \
  --public \
  --description "$DESCRIPTION" \
  --homepage "https://msg2ai.xyz" \
  --clone=false

echo "✅ Repo created: https://github.com/$ORG/$REPO_NAME"

# Init git in the skills directory if not already
cd "$SKILLS_DIR"

if [ ! -d ".git" ]; then
  git init
  git branch -M main
fi

# Stage everything
git add .
git commit -m "Initial commit: 8 conference team Claude skills

- General Chair / Conference Chair (Timeline, Committee, Risk, Briefings)
- Program Director (Agenda, CFP, Speaker, Peer Review, Run-of-Show)
- Head of Sponsorship (Prospects, Deck, Outreach, Contracts, Activation)
- CMO / Marketing & Comms (Campaign, Copy, Personas, PR, Recap)
- Head of Operations / Venue & Logistics (RFPs, F&B, Floor Plan, Vendors, ROS)
- CFO / Finance & Registration (Budget, Registration, Invoicing, Expenses)
- Chief Experience Officer / Attendee Experience (AI Ambassador + ActionNotes)
- Head of Web / Vibe Coder (Next.js + Vercel + GitHub web shipping)

Each skill reads from a shared Knowledge Base (Drive / Dropbox / Notion),
bootstraps via Firecrawl, and exports a slice of event.json for upload to hello.msg2ai.xyz.

Built by MSG2AI — https://msg2ai.xyz"

# Set remote and push
git remote add origin "https://github.com/$ORG/$REPO_NAME.git"
git push -u origin main

echo ""
echo "✅ All done!"
echo "🔗 Repo live at: https://github.com/$ORG/$REPO_NAME"
echo ""
echo "Next steps:"
echo "  1. Go to the repo and add topics: claude, ai, conference, events, claude-skills"
echo "  2. Upload conference-team-skills.zip as a Release asset"
echo "  3. Use this URL in your LinkedIn post CTA:"
echo "     https://github.com/$ORG/$REPO_NAME"
