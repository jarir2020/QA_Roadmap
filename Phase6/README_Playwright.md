# Phase 6 — Playwright tests for AuthDemo

## Prerequisites
- AuthDemo server running at: http://127.0.0.1:8030
- Test user exists in DB for dashboard/login tests:
  - Email: demo@example.com
  - Password: Password123!

## Run
From this folder:
```bash
npm exec playwright test
```

## Notes
- The test `register.spec.js` creates a unique email each run.
- If `dashboard.spec.js` fails, register the demo user once via the app UI.

## Theory: what this suite currently covers

The configured project launches Desktop Chrome and runs browser-level checks against the live AuthDemo server. Registration creates a timestamped identity to avoid collisions; login and dashboard checks rely on a pre-existing demo account. This mix illustrates why setup state must be explicit and why persistent databases can make otherwise identical runs behave differently.

The current invalid-email case only asserts that the success phrase is absent. A stronger oracle checks the specific validation feedback and confirms whether the request was expected to reach the server, since native input validation may stop it in the browser. A retry can help diagnose intermittent timing problems, but it does not make a nondeterministic test correct.
