# Phase 11 — Suggested test stage order

Use this order so each stage builds confidence quickly.

1. **Schema/setup stage**
   - Load `database/schema.sql` into test DB

2. **Fast smoke tests** (no heavy automation)
   - register valid user
   - login with that user
   - dashboard accessible after login
   - dashboard redirects when logged out

3. **(Optional) Deeper manual steps**
   - negative inputs
   - edge cases

4. **Artifacts**
   - collect logs / captured HTML evidence

5. **Gates**
   - fail PR if smoke tests fail

## Theory: order checks by feedback cost and confidence

Fast, deterministic checks should run before expensive or environment-sensitive checks. This shortens the path from a defect to useful feedback. Later stages can add confidence through real database, API, and browser interactions, while each stage remains scoped to the property it can actually establish.

A gate should have a clear threshold and owner. A failing smoke test should block promotion only when the test is reliable and the failure represents a real product or environment problem. Track flaky tests separately; silently retrying them can hide both product defects and unstable test infrastructure.
