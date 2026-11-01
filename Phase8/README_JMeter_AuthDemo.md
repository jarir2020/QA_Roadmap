# Phase 8 — JMeter (AuthDemo) login + register

## Files
- `auth_register_login.jmx`: starter test plan (open in JMeter and finalize)
- `Phase8_jmeter_runscript_template.sh`: runnable wrapper script template

## Endpoints
- `POST /register.php` with `email`, `password`
- `POST /login.php` with `email`, `password`

## What you must do in JMeter (GUI)
1. Create a Thread Group (threads, ramp-up, duration).
2. Add two HTTP Samplers:
   - POST `/register.php`
   - POST `/login.php`
3. For each sampler, set:
   - Base URL: `http://127.0.0.1:8030`
   - Method: POST
   - Parameters: `email`, `password`
4. Add Response assertions:
   - registration response contains `Registration successful`
   - login response sets location to dashboard or contains `Invalid email or password`
5. Add Listeners:
   - Summary Report
   - Aggregate Report
   - Backend listener (optional)

## Credentials / test data
- Use unique emails for registration to avoid duplicate failures.
- Password: `Password123!`

## Theory: validate the plan before generating load

The checked-in JMX file is an empty starter plan; it contains no HTTP samplers yet. The run-script template can invoke JMeter, but a generated report from an unconfigured plan is not evidence that AuthDemo was exercised. Build and run one single-user request first, inspect its request and response, then scale the workload.

For this HTMX-based demo, add the HX-Request header to POST samplers so the server processes the form action. Use a cookie manager when a later dashboard request must reuse a login session. Keep registration data unique, and add response assertions that distinguish a real action result from a generic page response.

A performance result should be reported with the workload and environment, including concurrency, ramp-up, duration, payloads, browser-independent HTTP behavior, and server/database setup. The numbers in example scenarios are learning values, not a service-level objective.
