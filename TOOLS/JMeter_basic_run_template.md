# JMeter — basic run template

## Goal
Practice running a lightweight load test.

## Setup
- Use JMeter installed locally

## Minimal approach
1. Use starter `.jmx` from `Phase8/`
   - `Phase8/auth_register_login.jmx`
2. In JMeter UI:
   - Add Thread Group
   - Add HTTP Sampler POST register.php
   - Add HTTP Sampler POST login.php
   - Add assertions for HTML strings

## Evidence
- Export HTML dashboard report
- Save results `.jtl`

## Theory: validate one request before adding load

A load test measures a configured workload, so first confirm that one sampler reaches the intended application action and produces the expected response. The Phase 8 JMX file is an empty starter and needs samplers, assertions, and data configuration before it can generate useful evidence. For AuthDemo form posts, send the HX-Request header required by the server handler.

Keep the test plan's throughput and data behavior in mind: repeated registrations with one identity mostly measure duplicate handling, while a growing set of unique identities changes database state over time. Define a realistic workload and pass threshold before interpreting aggregate results.
