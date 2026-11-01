# Pa11y — automated accessibility checks

## Run (example)
```bash
npx pa11y http://127.0.0.1:8030/login.php \
  --wait 1000 \
  --actions "screen-reader" \
  --reporter json > pa11y-login.json
```

## What to verify
- Input labels
- Empty buttons/links
- Focus order where applicable

## Evidence
- Save JSON output
