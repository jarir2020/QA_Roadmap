// Phase 3 — Responsive screenshot capture (non-diff)
// Requires: playwright installed in Phase6
// Run from Phase3 folder using node:
//   BASE_URL=http://127.0.0.1:8030 node phase3_responsive_screenshots_playwright.js

const fs = require('fs');
const path = require('path');

const { chromium } = require('playwright');

const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:8030';
const OUT_DIR = process.env.OUT_DIR || path.join(__dirname, 'evidence');

const pages = [
  { name: 'register', url: `${BASE_URL}/register.php` },
  { name: 'login', url: `${BASE_URL}/login.php` },
  { name: 'dashboard_login', url: `${BASE_URL}/dashboard.php` },
];

const viewports = [
  { label: 'desktop', width: 1366, height: 768 },
  { label: 'tablet', width: 768, height: 1024 },
  { label: 'mobile', width: 375, height: 667 },
];

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext();

  for (const vp of viewports) {
    for (const p of pages) {
      const page = await context.newPage({ viewport: { width: vp.width, height: vp.height } });
      await page.goto(p.url, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(300);
      const outPath = path.join(OUT_DIR, `${p.name}_${vp.label}.png`);
      await page.screenshot({ path: outPath });
      console.log(`Saved: ${outPath}`);
      await page.close();
    }
  }

  await context.close();
  await browser.close();
})();
