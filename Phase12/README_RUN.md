# Phase 12 — How to run (visual regression + diff)

## Prerequisites
- Node.js
- Playwright dependency in `Phase12/`
  ```bash
  cd Phase12
  npm install
  ```
- Your PHP AuthDemo server running on port **8030**.

## 1) Capture screenshots + run pixel diff
```bash
BASE_URL=http://127.0.0.1:8030 node phase12_visual_regression_playwright.js
```

This will:
- write screenshots to `Phase12/evidence/screenshots-current/`
- run `compare_screenshots.js` against `Phase12/evidence/screenshots-baseline/`
- exit non-zero if any baseline image differs byte-for-byte or has no current image

## Theory: what this comparison actually measures

The capture script uses Chromium at one fixed viewport and opens each route in a fresh unauthenticated context. The dashboard route therefore records its logged-out redirect behavior. The comparator checks PNG file bytes for equality; it is not a perceptual pixel-difference algorithm, and the current threshold value is reported but not applied. A different browser, font, or rendering environment can therefore cause a failure even when the layout looks equivalent.

Review the generated screenshots and the diff report before updating a baseline. A changed image may reflect an intended design revision or an environmental difference. The comparison does not verify semantics, accessibility, form behavior, or responsive sizes beyond the configured viewport.

## 2) If you don’t have a baseline yet
Bootstrap baseline once:
```bash
mkdir -p evidence/screenshots-baseline
cp evidence/screenshots-current/*.png evidence/screenshots-baseline/
```
