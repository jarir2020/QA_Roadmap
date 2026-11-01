# Phase 13 — Go/No-Go Checklist (AuthDemo)

## Must be true (No-Go blockers)
- [ ] P0 flows pass: register/login/dashboard access
- [ ] No critical/security defects open
- [ ] Login error messages are generic (no enumeration)
- [ ] Dashboard redirect works for logged-out users

## If partially true (Go with warning)
- [ ] P1 defects have workaround and limited impact
- [ ] No data corruption in DB from auth flows

## Release monitoring plan (during first hours)
- [ ] Check error logs/HTTP 5xx rate
- [ ] Monitor login failures volume

## Theory: a release decision accepts residual risk

A Go/No-Go decision asks whether the evidence and mitigations are sufficient for the intended exposure. A checklist pass only means the listed conditions were reviewed; it cannot guarantee that no defects remain. Record the build, evidence, unresolved defects, untested areas, decision owner, and rationale so the choice can be revisited.

Monitoring is part of the decision because some risks become visible only under real traffic. Define what signal would trigger investigation or rollback, who will respond, and what action they can take. A monitoring item without an owner or response threshold is difficult to use.
