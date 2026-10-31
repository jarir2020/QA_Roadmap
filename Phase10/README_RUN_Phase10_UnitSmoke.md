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
