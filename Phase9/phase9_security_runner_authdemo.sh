#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-http://127.0.0.1:8030}"

COOKIE_JAR="${COOKIE_JAR:-/tmp/authdemo_phase9_cookies.txt}"

echo "[Phase9] Security checks (defensive)"

# 1) Dashboard blocks unauthenticated users
resp_code=$(curl -sS -o /tmp/p9_dash_unauth.html -w "%{http_code}" "$BASE_URL/dashboard.php")
if [[ "$resp_code" == "200" ]]; then
  echo "FAIL: Expected dashboard redirect/deny for unauthenticated user. Got 200"
  exit 1
fi
echo "OK: dashboard blocks unauthenticated (http_code=$resp_code)"

# 2) Wrong credentials error must be generic
rm -f "$COOKIE_JAR" || true
body=$(curl -sS -X POST "$BASE_URL/login.php" \
  -d "email=noone@example.com" \
  -d "password=WrongPassword!" \
  -H "Content-Type: application/x-www-form-urlencoded" \ 
  || true)

# Basic check (demo text)
if echo "$body" | grep -q "Invalid email or password"; then
  echo "OK: generic error returned"
else
  echo "FAIL: expected generic error message"
  exit 1
fi

# 3) Logout invalidates session
# Register+login to create session (fast)
EMAIL="p9_$(date +%s)@example.com"
PASS="Password123!"

curl -sS -X POST "$BASE_URL/register.php" -d "email=$EMAIL" -d "password=$PASS" -H "Content-Type: application/x-www-form-urlencoded" >/dev/null
curl -sS -X POST "$BASE_URL/login.php" -d "email=$EMAIL" -d "password=$PASS" -H "Content-Type: application/x-www-form-urlencoded" -c "$COOKIE_JAR" >/dev/null

# Confirm dashboard ok
resp_code2=$(curl -sS -o /tmp/p9_dash_authed.html -w "%{http_code}" "$BASE_URL/dashboard.php" -b "$COOKIE_JAR")
if [[ "$resp_code2" != "200" && "$resp_code2" != "302" ]]; then
  echo "FAIL: expected dashboard access after login"
  exit 1
fi

echo "OK: dashboard accessible after login (http_code=$resp_code2)"

# Logout then confirm blocked
curl -sS -X POST "$BASE_URL/logout.php" -b "$COOKIE_JAR" -c "$COOKIE_JAR" >/dev/null || true

resp_code3=$(curl -sS -o /tmp/p9_dash_after_logout.html -w "%{http_code}" "$BASE_URL/dashboard.php" -b "$COOKIE_JAR")
if [[ "$resp_code3" == "200" ]]; then
  echo "FAIL: dashboard should not be accessible after logout"
  exit 1
fi

echo "OK: dashboard blocked after logout"

echo "[Phase9] ALL CHECKS PASSED"
