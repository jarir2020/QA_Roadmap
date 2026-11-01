# Phase 4 — API Test Cases (AuthDemo)

## Base URLs
- Server: `http://127.0.0.1:8000`

## Common request headers (for form posts)
- `Content-Type: application/x-www-form-urlencoded`
- `HX-Request: true` (required by the current handlers to process the HTMX form action)

## Test Cases

### TC-API-001: Register valid input
**Request**
POST `/register.php`
Body:
- email: `api_valid_user@example.com`
- password: `Password123!`

**Expected**
- HTML shows success message (contains "Registration successful")

### TC-API-002: Register duplicate email
**Preconditions**
- User already exists

**Request**
POST `/register.php`
Body:
- email: existing email
- password: any valid password

**Expected**
- HTML contains error "Email already registered"

### TC-API-003: Register invalid email
POST `/register.php`
Body:
- email: `abc@`
- password: `Password123!`

**Expected**
- HTML contains error "Invalid email format"

### TC-API-004: Register short password
POST `/register.php`
Body:
- email: new email
- password: `1234567`

**Expected**
- HTML contains error "Password must be at least 8 characters"

### TC-API-005: Login valid credentials
**Preconditions**
- User exists

POST `/login.php`
Body:
- email: `demo@example.com`
- password: `Password123!`

**Expected**
- Response redirects/sets session for dashboard (dashboard becomes accessible)

### TC-API-006: Login wrong password
POST `/login.php`
Body:
- email: existing email
- password: `WrongPassword!`

**Expected**
- HTML contains "Invalid email or password"

### TC-API-007: Login non-existent user
POST `/login.php`
Body:
- email: `noone@example.com`
- password: `Password123!`

**Expected**
- HTML contains "Invalid email or password"

### TC-API-008: Dashboard without session
GET `/dashboard.php`

**Expected**
- Redirect to `/login.php`

### TC-API-009: Dashboard with session
**Preconditions**
- Login performed and session cookie stored

GET `/dashboard.php`

**Expected**
- HTML contains Dashboard content and user email

### TC-API-010: Logout invalidates session
**Preconditions**
- Logged in

POST `/logout.php`

Then GET `/dashboard.php`

**Expected**
- Redirect to `/login.php`

---

## Generic safety checks
- Error messages should be generic: "Invalid email or password" for both wrong password and non-existent user.
- Session cookie should exist after successful login and be required for dashboard.

## Theory: test the protocol boundary and session continuity

The word API does not imply JSON or a separate REST service. These examples exercise server-side form handlers that return HTML fragments for HTMX. The request method, body encoding, and HX-Request header determine which handler path runs; omitting a required header can make a test pass against the wrong behavior.

A session is carried across otherwise independent HTTP requests through a cookie. Test login by capturing that cookie, then use the same cookie jar for the protected dashboard request. A curl client will not execute the JavaScript redirect in the login response, so assert the server response and make the next request explicitly.

For each case, separate response assertions from state assertions: a message can be present while persistence or authorization is wrong. The generic-error cases test a security property; use equivalent request shapes so the comparison is meaningful.
