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

## Theory: automated accessibility rules have a limited view

Pa11y can detect many machine-checkable issues in the rendered page, such as missing names or invalid relationships. It cannot fully judge whether instructions are understandable, a task is usable, or a screen reader announces the interaction as intended. Some checks require human context.

Run checks on representative page states, including validation errors and authenticated views where applicable. Treat violations as evidence to investigate and report the route, state, browser, and rule; pair automated results with keyboard and assistive-technology checks.
