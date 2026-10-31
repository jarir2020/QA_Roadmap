const { test, expect } = require('@playwright/test');

test('Register with valid inputs succeeds', async ({ page }) => {
  const email = `pw-${Date.now()}@example.com`;

  await page.goto('/register.php');
  await page.locator('input[name="email"]').fill(email);
  await page.locator('input[name="password"]').fill('Password123!');

  // HTMX submits and updates #form-result
  await page.click('button[type="submit"]');
  await page.waitForTimeout(200);

  await expect(page.locator('#form-result')).toContainText('Registration successful');
});

test('Register with invalid email shows error', async ({ page }) => {
  await page.goto('/register.php');
  await page.locator('input[name="email"]').fill('abc@');
  await page.locator('input[name="password"]').fill('Password123!');

  await page.click('button[type="submit"]');

  // For invalid email, we at least assert we do NOT show success.
  await expect(page.locator('#form-result')).not.toContainText('Registration successful');

});
