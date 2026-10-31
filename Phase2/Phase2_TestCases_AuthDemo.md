# Phase 2 — Manual Testing & Test Design (AuthDemo)

## Target module
AuthDemo: Registration + Login + Dashboard (PHP + HTMX + MySQL)

## What you are building in Phase 2
- Convert Phase 1 scenarios into **test cases**
- Write clear **steps** + **expected results**
- Prepare **bug report templates** (how you will document issues)

---

## Assumptions
- DB schema exists in `sqa_demo_auth.users`
- User creation is performed via the app UI so password hashing is correct
- Server available at `http://127.0.0.1:8000`

---

## Test Data Setup (Preconditions)
Create these users (email, password):
- Valid active user: `demo@example.com` / `Password123!`
- Duplicate-email test: reuse a newly registered email

---

## Test Cases

### TC-001: Register with valid inputs
**Preconditions:** none
**Steps:**
1. Open `/register.php`
2. Enter `newuser@example.com`
3. Enter password with length >= 8 (e.g., `Password123!`)
4. Submit
**Expected:** Success message “Registration successful”, no error shown in `#form-result`.

### TC-002: Register with duplicate email
**Preconditions:** user exists in DB (register once first)
**Steps:**
1. Open `/register.php`
2. Use the same email as an existing user
3. Use any valid password
4. Submit
**Expected:** Error “Email already registered”.

### TC-003: Register invalid email format
**Preconditions:** none
**Steps:**
1. Open `/register.php`
2. Enter `abc@` as email
3. Enter password >= 8
4. Submit
**Expected:** Error “Invalid email format”.

### TC-004: Register password too short
**Preconditions:** none
**Steps:**
1. Open `/register.php`
2. Enter valid email `shortpw@example.com`
3. Enter password `1234567`
4. Submit
**Expected:** Error “Password must be at least 8 characters”.

### TC-005: Login with valid credentials
**Preconditions:** user exists (demo user)
**Steps:**
1. Open `/login.php`
2. Enter email `demo@example.com`
3. Enter password `Password123!`
4. Submit
**Expected:** Redirect to `/dashboard.php`.

### TC-006: Login wrong password
**Preconditions:** user exists
**Steps:**
1. Open `/login.php`
2. Enter existing email
3. Enter wrong password
4. Submit
**Expected:** Error “Invalid email or password”.

### TC-007: Login non-existent user
**Preconditions:** email not registered
**Steps:**
1. Open `/login.php`
2. Enter non-existent email
3. Enter any password
4. Submit
**Expected:** Error “Invalid email or password” (generic message).

### TC-008: Dashboard requires authentication
**Preconditions:** logged out (new browser session)
**Steps:**
1. Open `/dashboard.php`
**Expected:** Redirect to `/login.php`.

### TC-009: Dashboard shows correct user
**Preconditions:** logged in
**Steps:**
1. Login successfully (TC-005)
2. Open `/dashboard.php`
**Expected:** Dashboard displays the email of the logged-in user.

### TC-010: Logout invalidates session
**Preconditions:** logged in
**Steps:**
1. Click Logout on dashboard
2. Then open `/dashboard.php` again
**Expected:** Redirect to `/login.php`.

---

## Bug Report Template (for manual testing)
Copy/paste when reporting issues.

**Bug Title:**

**Environment:**
- App: AuthDemo
- Server: `http://127.0.0.1:8000`
- DB: `sqa_demo_auth`
- Browser/OS:

**Preconditions:**

**Steps to Reproduce:**
1.
2.
3.

**Actual Result:**

**Expected Result:**

**Evidence:**
- Screenshot / screen recording
- Browser console output (if any)

**Severity / Priority:**
- Severity (choose): Blocker / Major / Minor / Trivial
- Priority (choose): P0 / P1 / P2 / P3

**Notes / Workaround:**

