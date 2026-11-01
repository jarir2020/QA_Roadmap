# Phase 13 — Test Metrics Template (example)

## Release test summary
- Build/version:
- Environment:
- Tested scope:

## Coverage (by scenario)
- Total scenarios:
- Passed:
- Failed:
- Blocked:

## Defects
| Severity | Count | Notes |
|----------|-------|------|
| Critical |   |   |
| High     |   |   |
| Medium   |   |   |
| Low      |   |   |

## Quality metrics to track
- Escape rate (defects found in production)
- Defect density (defects per KLOC) if you have code scale
- Mean time to detect (MTTD)
- Mean time to resolve (MTTR)
- Flaky test rate (if you automate)

## Communication
- Top 3 risks remaining:
- What is safe to deploy and why:
- What needs monitoring after release:

## Theory: metrics need definitions and denominators

A metric is interpretable only when its population, time window, and calculation are clear. Scenario pass rate uses executed scenarios as its denominator; it does not measure untested requirements. Escape rate needs a defined release cohort and a period for production discoveries. Mean time to detect and resolve depend on consistent start and end events.

Use metrics to find trends and ask questions, not to rank individuals or reward volume. Counts can change because reporting practices changed, and a falling defect count can mean either better quality or less testing. Pair quantitative measures with scope, evidence, and a short explanation of limitations.
