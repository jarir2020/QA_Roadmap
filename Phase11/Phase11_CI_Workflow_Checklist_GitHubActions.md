# Phase 11 — CI Workflow Checklist (GitHub Actions)

## Pipeline stages (recommended)
1. Install / Setup
2. Lint (optional)
3. DB/schema setup
4. Run API/UI smoke tests (lightweight)
5. Publish test report artifacts

---

## Required steps for AuthDemo
- Ensure PHP is available
- Ensure MySQL service is available
- Load schema into a test DB
- Create a test user (register via app or scripted seed)
- Run smoke checks:
  - register valid
  - login valid
  - dashboard access when session exists
  - dashboard redirect when logged out

---

## Environment variables
- Store DB credentials as GitHub Secrets
- Use `.env.example` pattern
- Never hard-code secrets in workflow

---

## Artifacts / reports
- Save logs for failures
- Save output HTML/screenshots if you automate UI later

## Release gates
- Block merge/promotion on:
  - smoke test failure
  - critical functional failures
