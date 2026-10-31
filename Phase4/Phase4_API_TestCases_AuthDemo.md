# Phase 4 — API Test Cases (AuthDemo)

## Base URLs
- Server: `http://127.0.0.1:8000`

## Common request headers (for form posts)
- `Content-Type: application/x-www-form-urlencoded`

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
