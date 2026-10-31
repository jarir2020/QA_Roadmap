# Phase 9 — Security Test Cases (AuthDemo)

> Defensive QA perspective. Focus on verifying safe behavior, not on exploitation.

## Authentication & session
### SEC-AUTH-001: Dashboard blocks unauthenticated users
- Steps: Open `/dashboard.php` in a fresh session (logged out)
- Expected: Redirect to `/login.php`

### SEC-AUTH-002: Logout invalidates session
- Steps: Login → Logout → open `/dashboard.php`
- Expected: Redirect to `/login.php`

### SEC-AUTH-003: Wrong credentials don’t reveal user existence
- Steps: Login with non-existent email + any password
- Expected: Generic error "Invalid email or password"

## Input validation
### SEC-INPUT-001: Invalid email format rejected
- Steps: Register with `abc@`
- Expected: Error "Invalid email format"; no user created

### SEC-INPUT-002: Password min length enforced
- Steps: Register with password shorter than 8
- Expected: Error message; no user created

### SEC-INPUT-003: HTML/JS injection attempts in email field (basic)
- Steps: Use email like `<script>alert(1)</script>@x.com`
- Expected: Register fails at validation (or if accepted, UI escapes output; no script execution)

## Authorization basics
### SEC-AUTHZ-001: Session-protected page can’t be accessed by URL alone
- Steps: Copy dashboard URL; open while logged out
- Expected: redirect to login

## Reporting guidance
- Prefer generic error messages.
- Ensure UI doesn’t render unsanitized user-supplied strings.
