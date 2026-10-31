const { test, expect } = require('@playwright/test');

test('After successful login, dashboard shows user email', async ({ page }) => {
  const email = 'demo@example.com';

  await page.goto('/login.php');
  await page.locator('input[name="email"]').fill(email);
  await page.locator('input[name="password"]').fill('Password123!');
  await page.click('button[type="submit"]');

  await page.waitForURL(/\/dashboard\.php/);

  await expect(page.getByText('Dashboard')).toBeVisible();
  await expect(page.locator('body')).toContainText(email);
});
