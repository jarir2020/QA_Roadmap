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
