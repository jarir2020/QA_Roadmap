# Phase 8 — Performance testing (JMeter)

This folder contains Phase 8 deliverables to practice load/stress testing fundamentals.

## Target
AuthDemo endpoints:
- POST `/register.php`
- POST `/login.php`
- GET `/dashboard.php` (requires session; you may profile login + then dashboard separately)

## Deliverables
- Performance test scenarios
- JMeter plan template inputs
- Result/report checklist

## Theory focus

Performance is a property of a system under a particular workload and environment. A result is interpretable only when demand shape, test data, server resources, database state, and measurement method are known. Distinguish capacity and responsiveness questions from functional correctness: a fast response can still be wrong, and a correct response can arrive too slowly for its use.

The Phase 8 artifacts now explain workload profiles, data/session modeling, response-time percentiles, saturation signals, and the need for explicit acceptance thresholds.
