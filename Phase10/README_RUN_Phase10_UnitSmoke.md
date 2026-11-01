# Phase 10 — Unit/integration smoke runner (AuthDemo)

## Run
```bash
cd Phase10
chmod +x phase10_php_unit_smoke_runner.sh
BASE_URL=http://127.0.0.1:8030 ./phase10_php_unit_smoke_runner.sh
```

## What it verifies
- Registration endpoint works (register_user)
- Login endpoint creates session (login_user)
- Dashboard shows the correct email (session + auth gate)

> For real unit tests, add PHPUnit later.

## Theory: this is an endpoint smoke check, not a unit test

A smoke check asks whether a high-value path can run through the assembled system. Unit testing instead isolates a small unit from external boundaries. This helper calls HTTP endpoints and then checks rendered content, so even when functional it would be an end-to-end or integration-style check rather than a unit test.

The current helper's form POSTs omit the HX-Request header required by the AuthDemo handlers. As written, they do not invoke the registration and login actions, so the final dashboard assertion cannot establish the documented session flow. Use a correctly formed request and verify each response/session transition before treating the result as evidence; add PHPUnit tests separately for isolated logic.
