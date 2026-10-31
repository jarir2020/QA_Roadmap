# Phase 12 — Trace/screenshot comparisons (Playwright)

## Goal
Use Playwright evidence to compare after UI changes.

## Recommended process
1) Create a baseline screenshot set:
- `Phase12/evidence/screenshots/register.png`
- `Phase12/evidence/screenshots/login.png`
- `Phase12/evidence/screenshots/dashboard.png`

2) After a UI change:
- Run the script again (same BASE_URL)
- Compare new screenshots with baseline using your diff tool.

## Trace comparison
- Update Phase6 Playwright config to enable `trace: 'on-first-retry'` (already used in play).
- For a regression, re-run the failing test; then open:
  - `npx playwright show-trace <trace.zip>`

## What to look for
- Layout shift / spacing differences
- Missing/changed text in error/success states
- Different redirect behavior
