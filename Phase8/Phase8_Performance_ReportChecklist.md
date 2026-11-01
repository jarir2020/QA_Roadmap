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

## Theory: interpret distributions and saturation

Average response time can hide a slow tail. The 95th percentile describes a point below which 95% of measured requests completed; p99 highlights rarer slow experiences when the sample is large enough to support it. Always report sample size and workload, since percentiles from a tiny run are unstable.

Read latency, throughput, and errors together. Rising latency with flattening throughput can indicate saturation; rising errors can show that the service is rejecting or failing work. These are clues, not diagnoses: correlate them with application, database, and load-generator observations before recommending a fix. A slow load generator can make a healthy service appear underutilized.
