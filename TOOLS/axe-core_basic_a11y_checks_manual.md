# axe / axe-core — basic accessibility checks (AuthDemo)

## Goal
Practice running accessibility checks for auth pages.

## Manual quick method
1. Open a page in Chrome.
2. If you have axe DevTools, run axe check.
3. Focus on issues: labels, form field names, focus order.

## What to verify
- Each input has an accessible name (label/aria-label)
- Errors are announced / visible
- No keyboard trap in the form

## Evidence to save
- Screenshot of flagged issues
- List of violation categories

## Theory: automated rules complement human evaluation

axe-core checks rendered markup against machine-testable accessibility rules and can quickly catch missing names, invalid ARIA patterns, and other structural problems. It cannot determine whether an entire task flow is understandable or whether all assistive-technology combinations work well.

Review each violation in the actual page state and fix the underlying semantic issue when possible. Run checks after validation messages appear as well as on the initial page, then add keyboard and screen-reader review for interaction behavior that automation cannot establish.
