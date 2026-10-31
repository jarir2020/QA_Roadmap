// Phase 12 — Lightweight visual regression helper (screenshots compare)
// Usage: node phase12_visual_regression_playwright.js
// Prereqs: Playwright installed in Phase6

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:8030';
const OUT_DIR = process.env.OUT_DIR || path.join(__dirname, 'evidence');
const BASELINE_DIR = process.env.BASELINE_DIR || path.join(__dirname, 'evidence/screenshots-baseline');
const CURRENT_DIR = process.env.CURRENT_DIR || path.join(__dirname, 'evidence/screenshots-current');

const pixelThreshold = Number(process.env.PIXEL_THRESHOLD ?? '0');

const pages = [
  { name: 'register', url: `${BASE_URL}/register.php` },
  { name: 'login', url: `${BASE_URL}/login.php` },
  { name: 'dashboard', url: `${BASE_URL}/dashboard.php` },
];

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const screenshotDir = CURRENT_DIR;
  fs.mkdirSync(screenshotDir, { recursive: true });

  for (const p of pages) {
    const page = await context.newPage();
    await page.goto(p.url, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);

    const file = path.join(screenshotDir, `${p.name}.png`);
    await page.screenshot({ path: file, fullPage: false });
    console.log(`Saved: ${file}`);
    await page.close();
  }

  await context.close();
  await browser.close();

  console.log('Screenshots captured. Running pixel diff...');

  const { spawnSync } = require('child_process');
  const cmp = spawnSync('node', [path.join(__dirname, 'compare_screenshots.js')], {
    stdio: 'inherit',
    env: {
      ...process.env,
      BASELINE_DIR,
      CURRENT_DIR,
      DIFF_DIR: path.join(OUT_DIR, 'diffs'),
      PIXEL_THRESHOLD: String(pixelThreshold),
    },
    cwd: __dirname,
  });

  process.exit(cmp.status ?? 1);

})();
