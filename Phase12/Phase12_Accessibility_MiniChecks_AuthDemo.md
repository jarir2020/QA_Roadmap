# Phase 12 — Accessibility mini-checks (AuthDemo)

## Pages
- `/register.php`
- `/login.php`
- `/dashboard.php`

## Checks (manual)
- [ ] Every `input` has an associated `label` (or accessible name)
- [ ] Tab order follows a logical flow (email → password → submit)
- [ ] Error/success text is readable and not only conveyed by color
- [ ] Keyboard-only navigation can submit the form
- [ ] Button text is descriptive (not only icons)

## Evidence to capture
- Screenshot(s) showing focus
- Any screen reader notes (if you use one)

## Theory: accessibility makes information and actions perceivable

An accessible name connects a control to its purpose, while keyboard access verifies that the same action is reachable without a pointer. Focus order and focus feedback help users understand where they are after navigation or validation. Error meaning should be conveyed through text and programmatic relationships, not color alone.

These manual checks sample important barriers but do not establish full conformance. Combine semantic inspection, keyboard use, assistive-technology review, and automated checks; each catches different problems. Record the page state and the exact control when reporting an issue.
