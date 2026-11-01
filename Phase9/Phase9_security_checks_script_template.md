# Phase 9 — Security checks script ideas (AuthDemo)

This file provides simple *defensive* checks you can run before/after changes.

## Checks
1. Ensure unauthorized dashboard redirects to login
2. Ensure wrong login returns generic error
3. Ensure error messages don’t include user existence details

## Evidence to collect
- Screenshots
- Response HTML snippet
- HTTP status codes

## Theory: a security check needs a strong oracle

A check should state the protected property and distinguish the expected safe outcome from a superficially similar response. For example, a generic error string is not sufficient if an authenticated session was still created, and a redirect alone does not prove that protected data is inaccessible through another route.

Keep security automation small and repeatable. Use isolated test accounts, avoid destructive actions outside the local test environment, and verify the server-side state as well as the visible response where needed. A script that only finds the word “error” can produce false positives, so assert the specific behavior and relevant status or session state.
