# Phase 12 — Trace/screenshot comparisons (Playwright)

## Goal
Use Playwright evidence to compare after UI changes.

## Recommended process
1) Create a baseline screenshot set:
- `Phase12/evidence/screenshots-baseline/register.png`
- `Phase12/evidence/screenshots-baseline/login.png`
- `Phase12/evidence/screenshots-baseline/dashboard.png`

2) After a UI change:
- Run the script again (same BASE_URL)
- Compare new screenshots with baseline using your diff tool.

## Theory: screenshots and traces answer different questions

A screenshot freezes the rendered page at one moment; a trace records a sequence of browser actions, requests, and observations that can help explain how the page reached that state. Use screenshots to compare appearance and traces to diagnose timing, navigation, or network behavior. Neither replaces a clear assertion about the expected user-visible result.

Keep the baseline and current capture conditions aligned, including browser, viewport, data, and authentication state. The checked-in script writes current images under `screenshots-current` and compares them with `screenshots-baseline`; the dashboard capture is unauthenticated. Review and approve intended changes before replacing the reference set.

## Trace comparison
- Update Phase6 Playwright config to enable `trace: 'on-first-retry'` (already used in play).
- For a regression, re-run the failing test; then open:
  - `npx playwright show-trace <trace.zip>`

## What to look for
- Layout shift / spacing differences
- Missing/changed text in error/success states
- Different redirect behavior
