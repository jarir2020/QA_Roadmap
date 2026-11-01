# Lighthouse — quick performance/accessibility checks

## Run
```bash
lighthouse http://127.0.0.1:8030/login.php \
  --quiet --chrome-flags="--headless" \
  --output html --output-path ./lighthouse-login.html
```

## What to check
- Accessibility score
- Performance score
- Any warnings related to images/contrast/labels

## Evidence
- Save generated HTML report
