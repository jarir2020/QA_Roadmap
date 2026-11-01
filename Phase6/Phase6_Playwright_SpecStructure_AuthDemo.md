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

## Theory: reliable browser specifications

A browser test is an executable contract between user action and observable behavior. Prefer locators based on accessible roles and labels because they reflect what a user or assistive technology can identify; use CSS selectors when the page has no better stable interface. Assert the outcome that matters, such as the result text and resulting route, rather than implementation details that can change without changing behavior.

Playwright's locator assertions wait for conditions automatically. Fixed sleeps add elapsed time without proving readiness and can still be too short on a slow run. Keep each test's browser context isolated and its database data unique or resettable so one case does not depend on another.
