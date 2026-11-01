# BrowserStack / Sauce Labs / LambdaTest — quick smoke practice

## Goal
Run the auth flow on at least 2 browser/device combinations.

## What to do
1. Choose 2 combos (examples):
   - Chrome desktop
   - Firefox desktop
2. Use a short manual script:
   - open register.php
   - register
   - login
   - dashboard shows user email
   - logout blocks dashboard

## Evidence
- Screenshot per browser/device
- Notes: any discrepancies

## Theory: choose a representative environment matrix

Browser and device testing samples combinations of rendering engine, operating system, viewport, and input method. Exhaustive combinations are rarely affordable, so select environments based on user reach, product support commitments, and known technical risks. Keep the tested build and workflow identical across combinations to make differences attributable.

A passing smoke on two combinations is evidence for those combinations and that short journey only. Record exact browser/device versions and the tested state; capture a reproducible failure with steps and evidence before attributing it to a browser.
