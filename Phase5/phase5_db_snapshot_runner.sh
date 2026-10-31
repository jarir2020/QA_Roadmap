#!/usr/bin/env bash
set -euo pipefail

# Phase 5 — DB snapshot runner (AuthDemo)
# Captures MySQL users table before/after auth operations.

DB_HOST="${DB_HOST:-localhost}"
DB_PORT="${DB_PORT:-3306}"
DB_NAME="${DB_NAME:-sqa_demo_auth}"
DB_USER="${DB_USER:-root}"
DB_PASS="${DB_PASS:-root}"

BASE_URL="${BASE_URL:-http://127.0.0.1:8030}"

EMAIL="${EMAIL:-phase5_user_$(date +%s)@example.com}"
PASSWORD="${PASSWORD:-Password123!}"
COOKIE_JAR="${COOKIE_JAR:-/tmp/authdemo_phase5_cookies.txt}"
RUN_DIR="${RUN_DIR:-/tmp/phase5_authdemo_$(date +%F_%H-%M-%S)}"

mkdir -p "$RUN_DIR"

mysql_cmd() {
  mysql -h "$DB_HOST" -P "$DB_PORT" -u "$DB_USER" -p"$DB_PASS" "$DB_NAME" "$@"
}

snap() {
  local tag="$1"
  mysql_cmd -e "SELECT id, email, is_active, created_at, LENGTH(password_hash) AS hash_len FROM users ORDER BY id;" > "$RUN_DIR/users_${tag}.csv"
}

echo "[Phase5] Run dir: $RUN_DIR"

echo "[Phase5] Snapshot BEFORE"
snap "before"

# Register
curl -sS -X POST "$BASE_URL/register.php" \
  -d "email=$EMAIL" \
  -d "password=$PASSWORD" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -o "$RUN_DIR/register_response.html" || true

# Login + dashboard to ensure session flow
rm -f "$COOKIE_JAR" || true
curl -sS -X POST "$BASE_URL/login.php" \
  -d "email=$EMAIL" \
  -d "password=$PASSWORD" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -c "$COOKIE_JAR" -b "$COOKIE_JAR" \
  -o "$RUN_DIR/login_response.html" || true

curl -sS -X GET "$BASE_URL/dashboard.php" -b "$COOKIE_JAR" \
  -o "$RUN_DIR/dashboard_response.html" || true

echo "[Phase5] Snapshot AFTER"
snap "after"

# Basic diff summary (count + email presence)
BEFORE_COUNT=$(wc -l < "$RUN_DIR/users_before.csv" | tr -d ' ') || true
AFTER_COUNT=$(wc -l < "$RUN_DIR/users_after.csv" | tr -d ' ') || true

echo "[Phase5] users row lines before: $BEFORE_COUNT"
echo "[Phase5] users row lines after:  $AFTER_COUNT"

grep -n "$EMAIL" "$RUN_DIR/users_before.csv" > /dev/null || true
if grep -q "$EMAIL" "$RUN_DIR/users_after.csv"; then
  echo "[Phase5] OK: seeded email present in AFTER snapshot"
else
  echo "[Phase5] WARNING: seeded email NOT found in AFTER snapshot"
fi

echo "[Phase5] Done. Evidence in $RUN_DIR"
