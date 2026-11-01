# Phase 13 — Metrics reporter

## What it generates
- `Phase13/evidence/phase13-metrics-report.md`

## Run (placeholder report)
```bash
node Phase13/phase13_metrics_reporter.js
```

## Run with your JSON
Create a JSON file with this structure:
- buildVersion
- environment
- scope
- scenarioCounts: { total, passed, failed, blocked }
- defectCounts: { critical, high, medium, low }
- topRisks: [3 strings]

Then:
```bash
node Phase13/phase13_metrics_reporter.js ./my-summary.json
```

## Theory: metrics are an evidence summary, not an assessment engine

The input fields are manually supplied counts and risk statements. The reporter does not validate that passed + failed + blocked equals total, does not read a test-run result, and does not infer release readiness. Build the JSON from a traceable report and check the values before publishing.

Use consistent definitions across releases so trends remain comparable. Include the test scope and environment, explain what was excluded, and avoid treating a higher pass count as better quality when the tested scope or test selection changed.
