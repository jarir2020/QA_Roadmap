# Phase 8 — Performance Test Scenarios (AuthDemo)

## Performance goals
- Measure response time and error rate for **register** and **login**.
- Identify bottlenecks (DB latency, PHP execution time).

---

## Scenario P-001: Baseline (low load)
- Threads: 10
- Ramp-up: 10s
- Duration/loops: 1–2 minutes
- Endpoint: POST `/login.php`
- Expected: low error rate; stable p95.

## Scenario P-002: Medium load
- Threads: 25
- Ramp-up: 10–20s
- Duration/loops: 2 minutes
- Endpoint: POST `/register.php`
- Expected: success with minimal failures.

## Scenario P-003: High load
- Threads: 50
- Ramp-up: 20–30s
- Duration/loops: 3 minutes
- Endpoint: POST `/login.php`
- Expected: system remains responsive; errors acceptable with defined threshold.

## Scenario P-004: Spike test
- Threads: 70
- Ramp-up: 5–10s
- Duration/loops: 30–60s
- Endpoint: POST `/login.php`
- Expected: no crashes; error rate increases but system recovers.

## Scenario P-005: Session proof (dashboard redirect)
- Perform login load lightly (threads 5–10)
- Then measure GET `/dashboard.php` response/redirect
- Expected: redirect/200 works consistently.

---

## Reporting checklist
- Record throughput (req/sec)
- Record avg + p95/p99 latency
- Record errors by HTTP status code
- Note bottlenecks and propose mitigations

## Theory: baseline, load, stress, and spike answer different questions

A baseline records behavior under light, stable demand. A load test asks whether expected demand meets agreed service objectives. A stress test deliberately approaches or exceeds capacity to discover failure modes and recovery behavior. A spike test changes demand abruptly to examine how quickly the system absorbs and sheds pressure. These labels describe workload intent; the thread counts above are practice values, not capacity claims.

Every scenario needs a defined workload, duration, data strategy, and pass threshold. Repeated registration with the same identity mostly measures duplicate handling rather than successful creation. Login load should use controlled credentials and a cookie policy that matches whether each request represents a new or continuing session. Record recovery after load stops, not only peak behavior.
