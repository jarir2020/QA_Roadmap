# Phase 3 — Responsive screenshot runner

## Prereq
Playwright module is easiest to install/locate under `Phase6/`.

## Run
```bash
cd Phase3
BASE_URL=http://127.0.0.1:8030 \
node phase3_responsive_screenshots_playwright.js
```

## Output
Screenshots to `Phase3/evidence/*.png`.

## Theory: screenshots are observations, not assertions

The script captures the three configured routes at three viewport sizes using Chromium. It provides repeatable visual evidence that can help compare layout states, but it does not calculate image differences, check accessibility, verify form behavior, or exercise multiple browser engines. The dashboard capture uses a fresh unauthenticated context, so it records the logged-out route behavior rather than an authenticated dashboard.

For useful comparisons, keep the application state, viewport, browser version, fonts, and data stable. Review each image against explicit layout expectations; a screenshot file being produced only confirms that capture completed.
