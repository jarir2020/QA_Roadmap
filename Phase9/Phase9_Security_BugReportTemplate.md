# Phase 9 — Security Bug Report Template

**Bug Title:**

**Severity / Priority:**
- Severity: Critical / High / Medium / Low
- Priority: P0 / P1 / P2 / P3

## Affected Component
- Page/Endpoint:
- Feature:

## Environment
- URL / Base URL:
- Browser/OS:
- Auth state (logged in/out):

## Preconditions
- Example: user exists, user inactive, etc.

## Steps to Reproduce
1.
2.
3.

## Actual Result

## Expected Result

## Evidence
- Screenshots
- Console errors
- HTTP status codes
- Response body snippets

## Risk / Impact
(Explain what an attacker/user could gain and why it matters.)

## Recommended Fix
(Add safe validation / escaping / auth handling approach)

## Theory: report the security property and impact

A security finding should identify the violated property, the preconditions needed to reach it, and the consequence for confidentiality, integrity, or availability. Separate demonstrated impact from a hypothetical worst case, and record the exact user role and session state used. This helps teams prioritize severity based on harm while keeping priority tied to release urgency and available mitigation.

Evidence should be minimal and safe. Redact credentials, tokens, personal data, and exploit details that are not needed to reproduce a defensive check. Prefer a harmless proof that shows the authorization or validation boundary failed.
