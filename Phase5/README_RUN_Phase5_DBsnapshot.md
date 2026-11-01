# Phase 5 — DB snapshot runner

## Run
```bash
cd Phase5
chmod +x phase5_db_snapshot_runner.sh

export DB_HOST=localhost DB_PORT=3306 DB_NAME=sqa_demo_auth DB_USER=root DB_PASS=root
export BASE_URL=http://127.0.0.1:8030

./phase5_db_snapshot_runner.sh
```

## Output
Creates a run folder under `/tmp/phase5_authdemo_*` containing:
- `users_before.csv`
- `users_after.csv`
- `register_response.html`
- `login_response.html`
- `dashboard_response.html`

## Theory: interpret the snapshot runner's evidence

The runner compares user rows before and after a registration attempt and reports whether it found the test email. This is a narrow persistence check; it does not verify every checklist invariant or prove successful authentication by itself. The response files and cookie jar are supporting evidence that should be interpreted alongside the database snapshots.

The current helper sends form POSTs without the HX-Request header used by the AuthDemo handlers. As written, those POSTs do not exercise the registration and login actions described in the Phase 4 cases, so the expected inserted row may be absent. Use the corrected Phase 4 curl examples with the header when you need to exercise the actual HTMX handlers. Keep the local database password in a protected environment and avoid storing it in shared logs.
