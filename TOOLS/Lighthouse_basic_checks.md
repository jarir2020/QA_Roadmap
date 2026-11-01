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

## Theory: lab audits are bounded observations

Lighthouse evaluates a page under a particular browser, device profile, route, and network/CPU simulation. Its performance and accessibility signals help find issues, but the score is not a direct measure of every user's experience. Dynamic content, cached resources, server state, and environment can change results between runs.

Use the underlying audits to guide investigation, then confirm user impact with repeatable checks. An accessibility score does not replace keyboard, semantic, or assistive-technology review, and a performance score does not replace real-user measurements.
