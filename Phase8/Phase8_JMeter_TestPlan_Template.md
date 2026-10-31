# Phase 8 — JMeter Test Plan Template (AuthDemo)

> You can manually implement this in JMeter UI.

## 1) Test goal
Measure:
- Throughput (requests/sec)
- Latency / response times (average + p95/p99)
- Error rate

## 2) Endpoints to test
Because this demo is UI-driven via HTMX, focus on the underlying form posts.

### A) Registration
- HTTP Method: POST
- URL: `/register.php`

Form params (x-www-form-urlencoded):
- email
- password

### B) Login
- HTTP Method: POST
- URL: `/login.php`
Form params:
- email
- password

## 3) Thread Groups
Use separate Thread Groups per request type.

Thread Group example settings (adjust):
- Users (threads): 10, 25, 50 (run multiple rounds)
- Ramp-up: 10s
- Loop count: 10 (or duration-based)

## 4) CSV parameterization
Use a CSV Data Set Config to vary:
- emails (avoid duplicate registration if it affects app)
- passwords (fixed valid password)

## 5) Correlation / authentication
For `/dashboard.php`, session is required.
Options:
- Simplify: validate only login and measure redirect response.
- Or: perform login and capture cookie header for subsequent dashboard checks.

## 6) Assertions
- Response code 200/302 expected (for login success)
- Response body contains expected strings when you expect errors

## 7) Timers
- Add a small think time (e.g., 0–500ms) to reduce unrealistic bursts.

## 8) Reporting
Collect:
- Summary Report
- Aggregate Report
- Graphs for latency
- Errors by response code
