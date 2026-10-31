# Phase 5 Checklist — SQL & Data Validation (AuthDemo)

## DB under test
- Database: `sqa_demo_auth`
- Table: `users`

## General rules
- Always record DB state **before** the API action and **after** it.
- Verify both:
  - **Data correctness** (right rows/values)
  - **Data integrity** (uniqueness constraints, expected invariants)

---

## A) Before you test
- [ ] Confirm `users` table exists
- [ ] Confirm you know test user email values used in Phase 3/4
- [ ] Take a snapshot/export query (row count + user rows by email)

---

## B) Registration validations (after POST /register.php)
For the email used in the test:
- [ ] Exactly one user row exists (unique email)
- [ ] `email` matches normalized value stored by app (lowercased)
- [ ] `password_hash` is non-empty
- [ ] `is_active` is `1`
- [ ] `created_at` is set

For duplicate registration:
- [ ] Row count does not increase
- [ ] No second user row is created

For invalid email / short password:
- [ ] No new user row is inserted

---

## C) Login validations (after POST /login.php)
Because login doesn’t change DB in this demo, validate:
- [ ] No user row is modified during login
- [ ] Session cookie behavior is handled by app (DB state remains stable)

---

## D) Logout validations
Because logout doesn’t change DB in this demo, validate:
- [ ] No `users` data is modified

---

## E) Reporting evidence
- [ ] Save SQL outputs (before/after) as evidence
- [ ] Link them to the scenario IDs (e.g., TC-API-001)
