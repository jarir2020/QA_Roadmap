# Phase 4 — API Test Scenarios (AuthDemo)

## Important note
This demo is UI-driven with HTMX, so the “API” you test is the server response from:
- `POST /register.php` (form data: email, password)
- `POST /login.php` (form data: email, password)
- `GET /dashboard.php` (session protected)

You can test these using Postman/Insomnia or curl.

---

## Core scenarios
1. Register valid user
2. Register duplicate email
3. Register invalid email format
4. Register short password
5. Login valid credentials
6. Login wrong password
7. Login non-existent user
8. Dashboard access without session
9. Dashboard access with session after login
10. Logout and re-check dashboard access

---

## Validation & safety scenarios
11. Email normalization (case + trim)
12. Generic error message (no user enumeration)
13. Ensure successful login creates a usable session cookie
14. Ensure error responses target only `#form-result` (behavioral verification)
15. Repeat requests do not corrupt session state

## Theory: scenarios define protocol-level risks

An HTTP scenario is defined by more than a URL: method, headers, body encoding, cookies, and server state all affect the path taken. Because this demo's form handlers are HTMX-aware, preserve the HX-Request header when testing the form action with curl or Postman. Otherwise the request may only retrieve a full page instead of exercising registration or login.

The login-to-dashboard journey also tests continuity across requests. The browser normally carries the session cookie automatically; a command-line client must store and replay it explicitly. Compare anonymous, authenticated, and invalidated states to check the authorization boundary.
