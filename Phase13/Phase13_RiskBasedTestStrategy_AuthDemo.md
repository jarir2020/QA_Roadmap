# Phase 13 — Risk-Based Test Strategy (AuthDemo)

## App under test
AuthDemo: registration, login, dashboard, logout.

## Risk model (simple)
Risk = Likelihood × Impact

### High risk areas (test first)
1. Authentication correctness (login/session)
- Likelihood: High
- Impact: Critical (users can’t access)
- Priority: P0

2. Authorization gating (dashboard access)
- Likelihood: Medium
- Impact: Critical (unauthorized access)
- Priority: P0

3. Input validation & safe error handling
- Likelihood: High
- Impact: Major (security + UX)
- Priority: P1

### Medium risk
- Logout reliability
- Dashboard rendering correctness

### Lower risk (for this demo)
- Small UI styling issues

## Testing distribution (example)
- Unit (if available): password validation/hashing logic
- Integration: register/login/session behaviors with DB
- System/UI: end-to-end flows and redirects
- Security basics: generic error messages, input escaping

## Entry/Exit risk gates
### Exit PASS conditions
- All P0 tests pass
- No critical defects open

### Exit PARTIAL conditions
- P1 issues exist but have workarounds and limited impact

