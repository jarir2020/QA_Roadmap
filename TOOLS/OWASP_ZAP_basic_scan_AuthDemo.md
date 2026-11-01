# OWASP ZAP quick scan (AuthDemo)

## Goal
Run a basic spider + active scan to practice security testing workflow.

## Run (ZAP in CLI/API mode)
If you have ZAP Docker:
```bash
docker run -t --rm -p 8080:8080 --name zap 
  -v $(pwd)/zap-work:/zap/wrk \
  owasp/zap2docker-stable zap-baseline-url \
  http://127.0.0.1:8030
```

## What to verify
- ZAP reports are produced
- You understand which alerts are false positives vs real

## Evidence to save
- HTML report / JSON report
- Alert list with URLs and parameters

## Theory: a scanner explores only the configured surface

A web scanner sends requests to discover and check reachable routes. Its findings depend on the crawl, authentication state, scope, and rules enabled. A baseline scan is primarily passive observation; an active scan sends attack-like inputs and can change application data or place load on a service.

Run scans only against an authorized local or test target, define the scope, and use disposable data. Triage each alert by reproducing it safely and checking the affected context; automated alerts can be false positives, while unvisited or authenticated routes can remain untested.
