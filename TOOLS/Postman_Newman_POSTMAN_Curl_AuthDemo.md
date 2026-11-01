# Postman / Newman (AuthDemo) — minimal coverage

## Goal
Practice sending login/register requests and validating responses during Phase 4/6 work.

## Minimal approach (no Postman export required)
Use curl to simulate what Postman/Newman would send, then later paste into Postman:

### Register
- endpoint: `POST http://127.0.0.1:8030/register.php`
- form: `email`, `password`
- header: `HX-Request: true` (required by the current AuthDemo POST handlers)

### Login
- endpoint: `POST http://127.0.0.1:8030/login.php`
- form: `email`, `password`

### Dashboard
- endpoint: `GET http://127.0.0.1:8030/dashboard.php`
- cookies: session cookie from login

## What to verify
- Registration returns success/failure in HTML
- Wrong login returns generic error
- Dashboard access requires session

## Newman (how to run)
If you create an exported Postman collection (`collection.json`), run:
```bash
newman run collection.json -e env.json
```

## Theory: preserve request and session semantics

A collection should capture the full request contract: method, URL, body encoding, required headers, and expected response. These AuthDemo routes return HTML for HTMX form actions rather than JSON; a POST without the HX-Request header returns the page instead of processing the credentials.

Login state is carried between requests by a session cookie. Configure the client to store the cookie from login and replay it for the dashboard request. A Newman collection should use a dedicated environment and non-sensitive test credentials, and assertions should check both the response and protected-state behavior.
