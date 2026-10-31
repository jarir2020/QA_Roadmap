#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-http://127.0.0.1:8030}"

EMAIL="${EMAIL:-api_user_$(date +%s)@example.com}"
PASSWORD="${PASSWORD:-Password123!}"

COOKIE_JAR="${COOKIE_JAR:-/tmp/authdemo_cookies.txt}"

# Register
curl -sS -X POST "$BASE_URL/register.php" \
  -d "email=$EMAIL" \
  -d "password=$PASSWORD" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -o /tmp/authdemo_register_response.html || true

echo "[Phase4] register email: $EMAIL"

echo "[Phase4] register response (snippet):"
sed -n '1,40p' /tmp/authdemo_register_response.html || true

# Login
rm -f "$COOKIE_JAR" || true
curl -sS -X POST "$BASE_URL/login.php" \
  -d "email=$EMAIL" \
  -d "password=$PASSWORD" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -c "$COOKIE_JAR" \
  -b "$COOKIE_JAR" \
  -o /tmp/authdemo_login_response.html || true

echo "[Phase4] login response (snippet):"
sed -n '1,60p' /tmp/authdemo_login_response.html || true

# Dashboard (session required)
curl -sS -X GET "$BASE_URL/dashboard.php" -b "$COOKIE_JAR" -o /tmp/authdemo_dashboard_response.html || true

echo "[Phase4] dashboard response (snippet):"
sed -n '1,60p' /tmp/authdemo_dashboard_response.html || true

echo "[Phase4] done"
