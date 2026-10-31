# Phase 6 — Playwright setup (AuthDemo)

## Goal
Create 1–3 automated tests for auth using Playwright.

## Quick start (conceptual)
1. Install Node.js
2. Create a test folder structure:
   - `playwright.config.*`
   - `tests/auth/*.spec.*`

3. Install dependencies:
- `npm init -y`
- `npm i -D @playwright/test`

4. Run:
```bash
npx playwright test
```

## What to validate
- Register success message appears in `#form-result`
- Wrong login shows generic error
- Dashboard shows user email after valid login
