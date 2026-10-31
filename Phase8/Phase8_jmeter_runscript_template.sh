#!/usr/bin/env bash
set -euo pipefail

# Phase 8 — JMeter run script template
# Requires: JMeter installed and JMX files exist.

JMETER_BIN="${JMETER_BIN:-jmeter}"  # override if needed
JMX_FILE="${1:-auth_login_register.jmx}"

THREADS="${THREADS:-25}"
RAMP_UP="${RAMP_UP:-10}"
DURATION="${DURATION:-120}"

$JMETER_BIN \
  -n \
  -t "$JMX_FILE" \
  -Jthreads="$THREADS" \
  -JrampUp="$RAMP_UP" \
  -Jduration="$DURATION" \
  -l results.jtl \
  -e -o report

echo "Done. See report/index.html"
