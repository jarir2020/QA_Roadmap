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
