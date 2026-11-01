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

## Theory: a load test is a workload model

A load test estimates how a system behaves under a defined pattern of demand. Threads represent simulated users executing the configured path; ramp-up controls how quickly they arrive, and loop or duration settings control how long the workload continues. These settings do not directly guarantee a particular requests-per-second rate because pacing, server response time, and the test plan's request sequence also affect throughput.

Keep the workload realistic enough to answer a question: a baseline establishes normal behavior, a load test checks expected demand, a stress test explores capacity limits, and a spike test observes response to an abrupt change. Define expected error and latency thresholds before running the test. Use unique registration identities and session handling that match the scenario, or test-data collisions can dominate the measurements.

The AuthDemo handlers require the HX-Request header on form POSTs. Include it in the HTTP sampler so the request reaches the registration or login action rather than simply returning the page. Validate that the sampler produces the intended response before adding virtual users.
