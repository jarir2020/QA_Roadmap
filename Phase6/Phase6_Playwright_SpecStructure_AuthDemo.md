# Phase 6 — Example Playwright Spec Structure (AuthDemo)

> This is a structure template you can turn into real Playwright tests.

## File layout suggestion
- `tests/auth/register.spec.ts`
- `tests/auth/login.spec.ts`
- `tests/auth/dashboard.spec.ts`

## Shared helpers
- `getPage()` / fixture creating a browser context
- `registerUser(email, password)`
- `loginUser(email, password)`

## Assertions to include for HTMX
- After submit, check `#form-result` contains expected text
- After successful login, check dashboard contains user email
- For redirects, verify current URL and page content

## What to report
- screenshots for failures
- Playwright trace if you debug flaky tests
