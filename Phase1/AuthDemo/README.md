# Phase1/AuthDemo

A small runnable demo app (PHP + HTMX + MySQL) for login / registration / dashboard.

## Run DB
1) Create DB + schema:
```sql
SOURCE database/schema.sql;
```

2) Seed demo user
- Best practice for this repo: register the user via the app (so the password hash is correct).
- After that, you can optionally update `database/seeders.sql` if you want.

Demo credentials (after you register):
- Email: `demo@example.com`
- Password: `Password123!`

## Run the web server
From this folder:
```bash
php -S 127.0.0.1:8000 -t public
```

Open:
- http://127.0.0.1:8000/register.php
- http://127.0.0.1:8000/login.php
- http://127.0.0.1:8000/dashboard.php (will redirect if not logged in)

## Notes
- Logout is session-based.
- Login/register forms use HTMX to update the result area.

## Theory: follow the authentication state

Think of the application as a small state machine: an anonymous visitor may register or attempt login; successful credential verification creates authenticated session state; a protected page checks that state on every request; logout invalidates it. Testing only the login form misses the transitions that define the security boundary. Check direct dashboard access before login, access after login, refresh behavior, and reuse of the old session after logout.

The user row is durable identity data, while the browser session is temporary proof that a request has authenticated. Password hashing protects the stored credential if the database is exposed; it does not protect a live session cookie. Database constraints, server-side validation, session-cookie settings, and safe output encoding each protect a different part of the flow, so they should have separate assertions.

This demo is intended for local learning. Production use needs a threat review for HTTPS, cookie flags, session rotation and expiry, CSRF, login throttling, secret management, and operational logging that avoids credentials.
