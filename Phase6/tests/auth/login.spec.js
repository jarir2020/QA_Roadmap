const { test, expect } = require('@playwright/test');

test('Login with wrong password shows generic error', async ({ page }) => {
  const email = 'demo@example.com';

  await page.goto('/login.php');
  await page.locator('input[name="email"]').fill(email);
  await page.locator('input[name="password"]').fill('WrongPassword!');

  await page.click('button[type="submit"]');

  await expect(page.locator('#form-result')).toContainText('Invalid email or password');
});

test('Dashboard redirects to login when logged out', async ({ page }) => {
  await page.goto('/dashboard.php');

  await expect(page).toHaveURL(/\/login\.php/);
});
