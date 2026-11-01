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
