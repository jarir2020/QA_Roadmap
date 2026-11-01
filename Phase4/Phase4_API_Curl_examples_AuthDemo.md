# Phase 4 — Curl examples (AuthDemo)

## Base URL
`http://127.0.0.1:8000`

## Register
```bash
curl -s -X POST "http://127.0.0.1:8000/register.php" \
  -H "HX-Request: true" \
  -d "email=test1@example.com" \
  -d "password=Password123!"
```

## Login
```bash
curl -s -X POST "http://127.0.0.1:8000/login.php" \
  -H "HX-Request: true" \
  -d "email=demo@example.com" \
  -d "password=Password123!" \
  -c cookies.txt
```

## Dashboard (with cookies)
```bash
curl -s -X GET "http://127.0.0.1:8000/dashboard.php" -b cookies.txt
```

## Wrong login (non-existent user)
```bash
curl -s -X POST "http://127.0.0.1:8000/login.php" \
  -H "HX-Request: true" \
  -d "email=noone@example.com" \
  -d "password=Password123!"
```

## Theory: an HTMX form request is still an HTTP contract

These PHP routes return HTML, and the current handlers process a POST only when the request includes the HX-Request header. Add `-H "HX-Request: true"` to each POST command to exercise the same server branch used by the page's HTMX form. Without it, the route returns the full page and does not run the registration or login action.

Form data is URL-encoded here; the `-d` options create that request body. The cookie jar stores the session cookie returned during login and sends it on the later dashboard request. This is necessary because HTTP requests are otherwise independent: the server needs the cookie to associate a later request with the authenticated session.

A curl response does not execute JavaScript. The successful login handler returns a small script that navigates a browser; with curl, verify the response and then make a separate dashboard request using the saved cookie. Keep the cookie jar private and remove it after the exercise.
