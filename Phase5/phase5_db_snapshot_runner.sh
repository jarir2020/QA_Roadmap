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
  mysql_cmd -e \
    "SELECT id, email, is_active, created_at, LENGTH(password_hash) AS hash_len FROM users ORDER BY id;" \
    > "$RUN_DIR/users_${tag}.csv"
}

echo "[Phase5] Run dir: $RUN_DIR"
echo "[Phase5] Using EMAIL=$EMAIL"

echo "[Phase5] Snapshot BEFORE"
snap "before"

# Register (HTMX UI returns HTML snippet; DB check is source of truth)
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

BEFORE_COUNT=$(($(wc -l < "$RUN_DIR/users_before.csv") - 1))
AFTER_COUNT=$(($(wc -l < "$RUN_DIR/users_after.csv") - 1))

echo "[Phase5] users rows before: $BEFORE_COUNT"
echo "[Phase5] users rows after:  $AFTER_COUNT"

check_email_present() {
  local file="$1"
  if grep -q "^.*\t$EMAIL\t" "$file"; then
    echo "1"; return 0
  fi
  echo "0"; return 0
}

PRESENT_BEFORE=$(check_email_present "$RUN_DIR/users_before.csv")
PRESENT_AFTER=$(check_email_present "$RUN_DIR/users_after.csv")

echo "[Phase5] email present before: $PRESENT_BEFORE"
echo "[Phase5] email present after:  $PRESENT_AFTER"

if [[ "$PRESENT_BEFORE" == "0" && "$PRESENT_AFTER" == "1" ]]; then
  echo "[Phase5] OK: registration created the expected user row."
elif [[ "$PRESENT_AFTER" == "1" ]]; then
  echo "[Phase5] WARNING: email already existed or DB was not clean; still found after."
else
  echo "[Phase5] FAIL: email not found after registration/login."
  echo "[Phase5] Debug: last lines of register_response.html"
  tail -n 40 "$RUN_DIR/register_response.html" || true
fi

echo "[Phase5] Done. Evidence in $RUN_DIR"
