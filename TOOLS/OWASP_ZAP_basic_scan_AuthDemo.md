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
