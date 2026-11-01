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
