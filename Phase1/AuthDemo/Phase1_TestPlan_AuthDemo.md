# Phase 1 Test Plan — AuthDemo (Login / Registration / Dashboard)

## 1) Scope
This plan covers UI behavior and session flow for:
- Registration page (`/register.php`)
- Login page (`/login.php`)
- Dashboard page (`/dashboard.php`)
- Logout (`/logout.php`)

## 2) Objectives
- Verify the happy-path works end-to-end: **register → login → dashboard**.
- Verify negative flows fail safely:
  - invalid inputs are rejected
  - wrong credentials do not reveal whether the user exists
- Verify session handling:
  - dashboard requires login
  - logout clears login state

## 3) Assumptions
- User passwords are hashed with PHP `password_hash()` and verified with `password_verify()`.
- Database connection is configured via `.env`.
- Pages use HTMX to update a `#form-result` element.

## 4) Test Approach
- Risk-based functional testing.
- Positive + negative testing.
- Validation focus on:
  - email format
  - password length
  - duplicate emails
- Session state checks by using a fresh browser session.

## 5) Environments / Test Data
### Environment
- Local PHP server (run.sh): `http://127.0.0.1:8000`
- MySQL database: `sqa_demo_auth`

### Test Data
Create user accounts via UI so hashing is correct.

## 6) Test Credentials (Working)
> Use the credentials below **only for testing after registering the demo user**.

- **Registration test user**
  - Email: `demo@example.com`
  - Password: `Password123!`

> Registration produces the actual stored password hash. If you already registered once, you can reuse the same credentials.

## 7) Entry & Exit Criteria
### Entry
- Server running.
- Database schema created (users table exists).
- Test user created (via registration).

### Exit
- All **core** scenarios pass (1–10).
- No open **critical/blocker** defects.
- Negative tests (11–15) either pass or have justified rationale.

## 8) Test Scenarios
(See also quick list below)

### Core functional scenarios
1. Register with valid email + valid password
2. Register with duplicate email
3. Register with invalid email format
4. Register with password too short
5. Login with valid credentials
6. Login with wrong password (existing email)
7. Login with non-existent email
8. Dashboard requires login (logged out)
9. Dashboard shows user email
10. Logout clears session

### Negative / edge scenarios
11. Email normalization (leading/trailing spaces; case-insensitive)
12. Inactive user behavior (set `is_active=0` in DB)
13. Multiple rapid submits
14. HTMX target area updates correctly with errors
15. Session persistence across page refresh

## 9) Evidence to capture
For failures:
- Screenshot of UI (including `#form-result`)
- Steps to reproduce
- Browser console errors (if any)
- Which credential/input was used

