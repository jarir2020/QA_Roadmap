// Phase 12 — Lightweight visual regression helper (screenshots compare)
// Usage: node phase12_visual_regression_playwright.js
// Prereqs: Playwright installed in Phase6

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:8030';
const OUT_DIR = process.env.OUT_DIR || path.join(__dirname, 'evidence');

const pages = [
  { name: 'register', url: `${BASE_URL}/register.php` },
  { name: 'login', url: `${BASE_URL}/login.php` },
  { name: 'dashboard', url: `${BASE_URL}/dashboard.php` },
];

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 } });
  const screenshotDir = path.join(OUT_DIR, 'screenshots');
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

  console.log('Done. Compare screenshots manually or via your VCS diff tooling.');
})();
