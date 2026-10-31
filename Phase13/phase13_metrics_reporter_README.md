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
