# Vercel Deploy & GitHub Operations Log

> **Sample output from the `vibe-coder` skill** — the production deploy walk-through
> from the request *"Promote the FutureStack site to production. Add the apex
> domain. Wire the GitHub Action for Lighthouse on every PR."*

---

## 1. Promote to production

```bash
$ vercel link
✓ Linked to msg2ai/futurestack2026-site

$ vercel pull --environment=production
✓ Downloaded project settings to .vercel/

$ vercel --prod
🔍  Inspect: https://vercel.com/msg2ai/futurestack2026-site/...
✅  Production: https://futurestack2026.dev [4s]
```

## 2. Add custom domains (apex + www)

```bash
$ vercel domains add futurestack2026.dev
✓ futurestack2026.dev added (verifying DNS — A record to 76.76.21.21)

$ vercel domains add www.futurestack2026.dev
✓ www.futurestack2026.dev added (CNAME to cname.vercel-dns.com)

$ vercel domains inspect futurestack2026.dev
Domain        futurestack2026.dev
Verified      ✓ Yes
TLS           ✓ Auto-provisioned (Let's Encrypt)
Redirects     www.futurestack2026.dev → futurestack2026.dev
```

## 3. Configure environment variables

```bash
$ vercel env add STRIPE_SECRET_KEY production
$ vercel env add STRIPE_WEBHOOK_SECRET production
$ vercel env add AGENTMAIL_API_KEY production
$ vercel env add EVENT_JSON_URL production
$ vercel env ls production
NAME                       VALUE     UPDATED
STRIPE_SECRET_KEY          [hidden]  3 minutes ago
STRIPE_WEBHOOK_SECRET      [hidden]  3 minutes ago
AGENTMAIL_API_KEY          [hidden]  2 minutes ago
EVENT_JSON_URL             [hidden]  1 minute ago
```

## 4. Wire Lighthouse CI (.github/workflows/lighthouse.yml)

```yaml
name: Lighthouse CI
on:
  pull_request:
    branches: [main]
jobs:
  lhci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: treosh/lighthouse-ci-action@v11
        with:
          urls: |
            https://futurestack2026-site-${{ github.head_ref }}-msg2ai.vercel.app/
            https://futurestack2026-site-${{ github.head_ref }}-msg2ai.vercel.app/agenda
            https://futurestack2026-site-${{ github.head_ref }}-msg2ai.vercel.app/speakers
          uploadArtifacts: true
          temporaryPublicStorage: true
```

## 5. Open the launch PR

```bash
$ gh pr create \
    --title "Launch v1 — early-bird live, brand-pulled-from-KB" \
    --body "Closes #12. Preview URL in this PR. Lighthouse 98/100/100/100."
✓ Created: https://github.com/msg2ai/futurestack2026-site/pull/3
```

## Final state

| Asset | URL |
|---|---|
| Production | https://futurestack2026.dev |
| Preview pattern | https://futurestack2026-site-git-{branch}-msg2ai.vercel.app |
| Repo | https://github.com/msg2ai/futurestack2026-site |
| Vercel project | `prj_aB3cD…` (pinned to `main`) |
| Analytics | Vercel Analytics + Speed Insights enabled |

## Saved to KB

- `11-web/futurestack2026-site/deploy.md` — production URL, preview pattern, env var manifest, domain config
- `11-web/futurestack2026-site/repo.md` — repo URL, default branch, branch protection, access list
- `11-web/futurestack2026-site/lighthouse-2026-04-28.json` — full Lighthouse report
