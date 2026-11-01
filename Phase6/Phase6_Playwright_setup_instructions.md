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

## Theory: the test runner and browser are separate dependencies

Installing the Playwright test package supplies the test runner and browser-control API; installing the browser binaries supplies the actual engines that the runner launches. The application server and its database are separate prerequisites and must be ready before a test can observe the user journey. A failure to launch a browser is different from a failed application assertion, so keep setup diagnostics distinct.

A test should wait for state, not elapsed time. Locator and URL assertions retry until their condition is met or the configured timeout expires. Keep the suite small around critical end-to-end behavior, then use lower-cost checks for large validation matrices.
