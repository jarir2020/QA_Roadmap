# Phase 13 — How to run metrics reporter

## Run with placeholder report
```bash
node Phase13/phase13_metrics_reporter.js
```

## Run with your JSON summary
Example:
```bash
node Phase13/phase13_metrics_reporter.js ./Phase13/phase13_test_summary_example.json
```

This generates:
- `Phase13/evidence/phase13-metrics-report.md`

## Theory: the reporter formats supplied data

The reporter does not execute tests or calculate results from test evidence. It writes a Markdown summary from the JSON values provided; without an input file it emits hard-coded placeholder counts. Treat that output as a formatting example, not a real release report, until you replace every value with evidence from a named build and environment.

Review the counts for internal consistency and state their denominator and time window. The report can help communicate quality, but it cannot decide whether the release is safe.
