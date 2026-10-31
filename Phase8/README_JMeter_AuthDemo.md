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
