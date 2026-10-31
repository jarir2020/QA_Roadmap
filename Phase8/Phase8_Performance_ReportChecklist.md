# Phase 8 — Performance Report Checklist

## Data to capture
- Start/end time
- JMeter version / load generator OS
- Target URL and endpoints
- Thread group settings (threads, ramp-up, duration)
- Payload format (form fields)

## Metrics (required)
- Throughput (requests/sec)
- Average response time
- p95 response time
- p99 response time
- Error rate (% and list of error codes)

## Analysis prompts
- Which percentile increased first (p95 vs p99)?
- Are errors tied to a specific status code (500, 302, etc.)?
- Is DB slow? (look for signs in server logs)

## Recommendation section
- Suggest fixes for bottlenecks (DB indexes, caching, auth throttling)
- Identify next test (e.g., different thread ramp / caching warm-up)
