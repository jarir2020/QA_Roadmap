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
