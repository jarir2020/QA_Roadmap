# Trivy/Snyk (dependency scanning) — fuller practice

## Trivy (quick)
```bash
trivy fs . > trivy-report.txt
```

## What to verify
- Ensure high/critical results are real or explainable
- For npm: validate affected package paths

## Snyk
- Open Snyk UI for the repo
- Run dependency scan
- Export findings

## Evidence
- Save top 5 issues
- For each issue: remediation step or “won’t fix” rationale

## Theory: prioritize by exposure and remediation risk

A scanner finding combines package identity, version, and vulnerability metadata. Prioritization should consider severity, whether the vulnerable component is reachable, whether the affected feature is exposed, and the availability of a safe fix. Upgrading can itself introduce compatibility risk, so record the validation needed after remediation.

Document accepted risk with an owner, reason, and review date rather than leaving a finding unexplained. Re-scan after changes to confirm the package path and fixed version, while remembering that the scanner covers only the inventory and data sources it recognizes.
