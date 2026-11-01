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

## Theory: automate stable contracts at the right layer

UI automation verifies the complete browser path, including DOM interaction, HTMX requests, session cookies, and navigation. It is valuable for a small set of critical journeys, while validation partitions and database invariants are often cheaper to cover at lower layers. A balanced suite uses browser tests for user-visible contracts and focused API or unit checks for broad input combinations.

Make each case deterministic: provide a known initial state, use isolated browser context, avoid fixed sleeps, and create unique records when the database persists between runs. A negative test should assert the expected error, not merely the absence of a success phrase. Native browser validation can prevent a request from reaching the server, so distinguish client-side rejection from server-side validation when that distinction matters.
