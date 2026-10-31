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
