#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync, spawnSync } = require("child_process");

// Primary remote (post org transfer); legacy is a fallback so the installer
// keeps working through the github.com/msg2ai migration.
const REPO_URL_PRIMARY = "https://github.com/msg2ai/conference-team-skills.git";
const REPO_URL_LEGACY  = "https://github.com/RethinkLedgers/conference-team-skills.git";

const SKILL_FOLDERS = [
  "general-chair",
  "program-content",
  "sponsorship",
  "marketing-comms",
  "venue-logistics",
  "finance-registration",
  "attendee-experience",
  "vibe-coder",
];

// Determine the Claude skills directory based on platform
function getSkillsDir() {
  const home =
    process.env.HOME ||
    process.env.USERPROFILE ||
    (process.env.HOMEDRIVE && process.env.HOMEPATH
      ? process.env.HOMEDRIVE + process.env.HOMEPATH
      : null);
  if (!home) {
    console.error("Error: Could not determine home directory.");
    process.exit(1);
  }
  return path.join(home, ".claude", "skills", "conference-team-skills");
}

function printBanner() {
  console.log("");
  console.log("  Conference Team Skills for Claude");
  console.log("  8 skills — one for every seat on your org chart, plus a Vibe Coder for the website");
  console.log("  Built by MSG2AI — https://msg2ai.xyz");
  console.log("");
}

function printUsage() {
  console.log("Usage: npx conference-team-skills <command>");
  console.log("");
  console.log("Commands:");
  console.log("  install     Install skills to ~/.claude/skills/");
  console.log("  uninstall   Remove skills from ~/.claude/skills/");
  console.log("  update      Update skills to the latest version");
  console.log("  list        List all available skills");
  console.log("  setup       Run the integration setup wizard (Firecrawl, Drive, Gmail, …)");
  console.log("  mock        Show the path to the mock conference (FutureStack 2026)");
  console.log("  help        Show this help message");
  console.log("");
}

function ensureGit() {
  try {
    execSync("git --version", { stdio: "ignore" });
  } catch {
    console.error("Error: Git is not installed.");
    console.error(
      "Install Git from https://git-scm.com and try again."
    );
    process.exit(1);
  }
}

// Try cloning from the primary remote, fall back to the legacy remote on
// "Repository not found" / network failures during the github.com/msg2ai
// migration window.
function cloneRepo(targetDir) {
  for (const url of [REPO_URL_PRIMARY, REPO_URL_LEGACY]) {
    try {
      execSync(`git clone "${url}" "${targetDir}"`, { stdio: "inherit" });
      return url;
    } catch {
      // try the next URL
      continue;
    }
  }
  return null;
}

function printPostInstall(skillsDir) {
  console.log("");
  console.log("──────────────────────────────────────────────────────────");
  console.log("  Done! 8 conference team skills are now installed.");
  console.log("──────────────────────────────────────────────────────────");
  console.log("");
  console.log("  Skills:");
  for (const skill of SKILL_FOLDERS) {
    console.log("    - " + skill);
  }
  console.log("");
  console.log("  Recommended first steps:");
  console.log("");
  console.log("  1) Set up your shared Knowledge Base (Drive / Dropbox / Notion)");
  console.log("     — every skill reads from and writes to it. The Conference Chair");
  console.log("     skill creates the 11-folder structure for you on first run.");
  console.log("");
  console.log("  2) Connect Firecrawl to bootstrap the KB from your event website:");
  console.log("       bash " + path.join(skillsDir, "setup/setup-firecrawl.sh"));
  console.log("");
  console.log("  3) Run the full setup wizard to connect the integrations you use:");
  console.log("       npx conference-team-skills setup");
  console.log("     (or pick individual scripts in " + path.join(skillsDir, "setup") + ")");
  console.log("");
  console.log("  4) See a real run — the FutureStack 2026 mock conference shows what");
  console.log("     each skill produces, plus the merged event JSON for hello.msg2ai.xyz:");
  console.log("       open " + path.join(skillsDir, "mock"));
  console.log("");
  console.log("  Open Claude Code and try a prompt like:");
  console.log('     "Build the timeline for my conference — event is Sept 15, 500 attendees"');
  console.log('     "Find 30 prospective sponsors for our fintech conference in NYC"');
  console.log('     "Spin up the event landing page and ship it to a Vercel preview"');
  console.log("");
}

function install() {
  const skillsDir = getSkillsDir();

  if (fs.existsSync(skillsDir)) {
    console.log("Skills are already installed at:");
    console.log("  " + skillsDir);
    console.log("");
    console.log("Run 'npx conference-team-skills update' to get the latest version.");
    return;
  }

  ensureGit();

  // Create parent directory if needed
  const parentDir = path.dirname(skillsDir);
  fs.mkdirSync(parentDir, { recursive: true });

  console.log("Installing skills to:");
  console.log("  " + skillsDir);
  console.log("");

  const usedUrl = cloneRepo(skillsDir);

  if (!usedUrl) {
    console.error("");
    console.error("Error: Failed to clone the conference-team-skills repository.");
    console.error("Tried:");
    console.error("  " + REPO_URL_PRIMARY);
    console.error("  " + REPO_URL_LEGACY);
    console.error("");
    console.error("Check your internet connection and that github.com is reachable.");
    process.exit(1);
  }

  if (usedUrl === REPO_URL_LEGACY) {
    console.log("");
    console.log("Note: cloned from the legacy URL (" + REPO_URL_LEGACY + ").");
    console.log("That redirect is fine — once the repo is fully transferred to");
    console.log("github.com/msg2ai it'll resolve directly.");
  }

  // Sanity check: confirm the install dropped all the bits we expect
  const expected = [
    ...SKILL_FOLDERS,
    "setup",
    "mock",
    "docs",
    ".claude-plugin",
    "README.md",
  ];
  const missing = expected.filter(
    (rel) => !fs.existsSync(path.join(skillsDir, rel))
  );
  if (missing.length > 0) {
    console.error("");
    console.error("Warning: install completed but expected files are missing:");
    for (const m of missing) console.error("  - " + m);
    console.error("Run 'npx conference-team-skills update' to retry.");
  }

  printPostInstall(skillsDir);
}

function uninstall() {
  const skillsDir = getSkillsDir();

  if (!fs.existsSync(skillsDir)) {
    console.log("Skills are not installed. Nothing to remove.");
    return;
  }

  fs.rmSync(skillsDir, { recursive: true, force: true });

  console.log("Skills removed from:");
  console.log("  " + skillsDir);
  console.log("");
}

function update() {
  const skillsDir = getSkillsDir();

  if (!fs.existsSync(skillsDir)) {
    console.log("Skills are not installed yet. Running install instead...");
    console.log("");
    install();
    return;
  }

  ensureGit();

  console.log("Updating skills...");
  console.log("");

  try {
    execSync("git pull", { cwd: skillsDir, stdio: "inherit" });
  } catch {
    console.error("");
    console.error("Error: Failed to update. Try uninstalling and reinstalling:");
    console.error("  npx conference-team-skills uninstall");
    console.error("  npx conference-team-skills install");
    process.exit(1);
  }

  console.log("");
  console.log("Skills updated to the latest version.");
  console.log("");
}

function list() {
  console.log("Available skills:");
  console.log("");
  console.log("  general-chair          Conference Chair / Event Director (Sara)");
  console.log("  program-content        Program Director (Marco)");
  console.log("  sponsorship            Head of Sponsorship (James)");
  console.log("  marketing-comms        CMO / Marketing & Communications (Priya)");
  console.log("  venue-logistics        Head of Operations / Venue & Logistics (Tom)");
  console.log("  finance-registration   CFO / Finance & Registration (Amelia)");
  console.log("  attendee-experience    Chief Experience Officer / Attendee XP (Lena)");
  console.log("  vibe-coder             Head of Web / Vibe Coder — Next.js + Vercel + GitHub (Noor)");
  console.log("");

  const skillsDir = getSkillsDir();
  if (fs.existsSync(skillsDir)) {
    console.log("Status: Installed at " + skillsDir);
  } else {
    console.log("Status: Not installed");
    console.log("Run 'npx conference-team-skills install' to install.");
  }
  console.log("");
}

function setup() {
  const skillsDir = getSkillsDir();
  if (!fs.existsSync(skillsDir)) {
    console.error("Skills are not installed. Run 'npx conference-team-skills install' first.");
    process.exit(1);
  }
  const setupAll = path.join(skillsDir, "setup", "setup-all.sh");
  if (!fs.existsSync(setupAll)) {
    console.error("Could not find " + setupAll);
    console.error("Run 'npx conference-team-skills update' and try again.");
    process.exit(1);
  }
  console.log("Launching the integration setup wizard...");
  console.log("Press 'q' at any prompt to quit.");
  console.log("");
  const result = spawnSync("bash", [setupAll], { stdio: "inherit" });
  if (result.status !== 0 && result.status !== null) {
    process.exit(result.status);
  }
}

function mock() {
  const skillsDir = getSkillsDir();
  if (!fs.existsSync(skillsDir)) {
    console.error("Skills are not installed. Run 'npx conference-team-skills install' first.");
    process.exit(1);
  }
  const mockDir = path.join(skillsDir, "mock");
  console.log("Mock conference (FutureStack 2026):");
  console.log("  " + mockDir);
  console.log("");
  console.log("  - mock/conference.md          — fictional event brief");
  console.log("  - mock/README.md              — index of all sample outputs");
  console.log("  - mock/outputs/<skill>/       — sample artifacts per skill");
  console.log("");
  console.log("Open it in your editor to see what each skill produces.");
  console.log("");
}

// Main
printBanner();

const command = process.argv[2] || "help";

switch (command) {
  case "install":
  case "i":
    install();
    break;
  case "uninstall":
  case "remove":
    uninstall();
    break;
  case "update":
  case "upgrade":
    update();
    break;
  case "list":
  case "ls":
    list();
    break;
  case "setup":
    setup();
    break;
  case "mock":
    mock();
    break;
  case "help":
  case "--help":
  case "-h":
    printUsage();
    break;
  default:
    console.log("Unknown command: " + command);
    console.log("");
    printUsage();
    process.exit(1);
}
