# Phase 12 — Visual regression basics (simple)

## What to do
1. Take a baseline screenshot for each page:
   - register
   - login
   - dashboard
2. After any UI change, re-take screenshots.

## What to compare
- Layout shift / spacing
- Color differences for error/success states
- Form field sizes across devices

## Evidence
- Baseline screenshots
- New screenshots
- Notes on differences (expected vs unexpected)

## Theory: visual baselines are controlled comparisons

A visual baseline is an approved rendering used as a reference after a change. A difference can be a defect, an intentional design update, or environmental noise from fonts, browser version, viewport, animation, dynamic data, or time-dependent content. Keep capture conditions and page state stable, then review every intended baseline update.

Visual comparison complements behavioral tests; it cannot tell whether a changed pixel is meaningful to a user or whether a visually identical control works. Pair screenshots with functional and accessibility checks. This repository's comparator currently checks PNG bytes exactly rather than calculating a perceptual pixel tolerance, so small rendering differences can fail the comparison.
