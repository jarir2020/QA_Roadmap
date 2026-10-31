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
