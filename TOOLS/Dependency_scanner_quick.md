# Dependency scanners (quick practice)

## Options (choose one)
- Trivy
- Snyk
- Dependabot (GitHub)

## For this repo
Start with:
- `trivy fs .` (if installed)

## Evidence
- Save scan report output
- List top 3 vulnerabilities/issues and whether they’re real/false positives

## Theory: a finding is a lead for risk analysis

A dependency scanner compares discovered packages and versions with vulnerability or policy data. A severity label is a prioritization signal, not a complete exploitability assessment. Consider whether the vulnerable code is present, reachable, exposed, and affected by the application's configuration; also consider the cost and risk of upgrading.

Track direct and transitive dependencies, the affected path, fixed version, and any compensating control. A clean scan only means no findings matched the scanner's data and configuration at that time; it does not prove the application is secure.
