# Phase 4 — API Testing (AuthDemo)

This folder contains Phase 4 deliverables to practice **API testing** for your AuthDemo.

## Target
- Registration endpoint: `POST /register.php` (HTMX UI action)
- Login endpoint: `POST /login.php` (HTMX UI action)
- (Optional) Auth-protected check: `GET /dashboard.php`

## What you will create in Phase 4
- API test scenarios
- API test cases (with headers + body)
- Evidence and bug report template

## Theory focus

HTTP testing checks the contract at the client-server boundary: method, path, headers, encoded body, status, response content, and cookies. This AuthDemo uses ordinary PHP routes with HTMX form submissions, so it returns HTML rather than a JSON resource representation. A client must send the same relevant headers as the browser to exercise the intended branch.

The Phase 4 cases now explain request shape, cookie-based session continuity, response-versus-state assertions, and the difference between a browser redirect and a response body consumed by curl.
