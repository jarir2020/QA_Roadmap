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

## Theory: interpret the runner output cautiously

Security automation is only as strong as its request and assertion. The current helper is a learning template: its POSTs omit the HX-Request header used by AuthDemo, its form body does not consistently name the password field, and some checks accept a broad error-container match or a redirect as success. Therefore its final status message is not reliable evidence that the listed security properties passed.

Use the Phase 9 cases as the source of expected behavior and verify the exact response, session state, and protected-page outcome with a correctly formed request. A passing transport call or generic error string is not proof of secure authentication or authorization.
