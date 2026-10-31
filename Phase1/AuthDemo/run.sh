#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Create table (idempotent)
mysql -u root -proot -h 127.0.0.1 -P 3306 sqa_demo_auth < "$ROOT_DIR/database/schema.sql"

echo "Starting server at http://127.0.0.1:8030"
php -S 127.0.0.1:8030 -t "$ROOT_DIR/public"
