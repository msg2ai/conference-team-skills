#!/bin/bash
# Setup Apollo.io integration for Claude Code
# Used by: Sponsorship Lead (prospect research, contact enrichment, outreach sequences).
#          Complements Twenty CRM — Apollo *fills* the pipeline, Twenty *manages* it.
echo "Setting up Apollo.io integration..."
echo ""
echo "Apollo.io is the prospecting engine for the Sponsorship Lead skill:"
echo "  - Search companies by industry, size, geography, technographics"
echo "  - Find decision-maker contacts (VP Marketing, Head of Partnerships, etc.)"
echo "  - Enrich existing contact records"
echo "  - Trigger outreach sequences from confirmed prospects"
echo ""
echo "Connect via Claude.ai (recommended):"
echo "  1. Go to https://claude.ai/settings/connectors"
echo "  2. Find 'Apollo.io' and click Connect"
echo "  3. Authorize with your Apollo account (OAuth)"
echo "  4. Apollo will be available in Claude Code automatically"
echo ""
echo "Or add it directly to Claude Code:"
echo "  claude mcp add apollo --transport http https://mcp.apollo.io"
echo ""
echo "After connecting, test it by asking Claude:"
echo "  'Find 30 fintech companies in EMEA with 200-1000 employees that sponsor industry events'"
