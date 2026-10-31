# Phase 6 — Playwright Test Plan (AuthDemo)

## Goal
Create automated UI tests for:
- Registration page
- Login page
- Dashboard page (auth gating)

## Setup assumptions
- Server running at `http://127.0.0.1:8000`
- DB is configured (schema exists)
- You can register a test user once (avoid flakiness from repeated inserts)

## Recommended Playwright scenarios
1. Register with valid inputs succeeds
2. Register with invalid email format shows error in result container
3. Register with short password shows validation error
4. Login with valid credentials reaches dashboard
5. Login with wrong password shows generic error
6. Dashboard redirects to login when logged out
7. Logout returns user to login page

## Practical test design notes
- Use robust locators (prefer label text / input names).
- Add retries in Playwright configuration only if you must.
- Validate that HTMX updates `#form-result` contents.
- Keep tests independent but use stable test data when possible.
