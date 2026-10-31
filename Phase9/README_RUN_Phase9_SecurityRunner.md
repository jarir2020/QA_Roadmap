# Phase 9 — Security runner (AuthDemo)

## Run
```bash
cd Phase9
chmod +x phase9_security_runner_authdemo.sh
BASE_URL=http://127.0.0.1:8030 ./phase9_security_runner_authdemo.sh
```

## What it checks
- Dashboard blocks unauthenticated users
- Wrong login shows generic error: `Invalid email or password`
- Logout invalidates session (dashboard blocked again)
