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
- exit non-zero if screenshots differ (threshold = 0)

## 2) If you don’t have a baseline yet
Bootstrap baseline once:
```bash
mkdir -p evidence/screenshots-baseline
cp evidence/screenshots-current/*.png evidence/screenshots-baseline/
```
