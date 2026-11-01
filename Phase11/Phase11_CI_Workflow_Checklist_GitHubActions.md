# Phase 11 — CI Workflow Checklist (GitHub Actions)

## Pipeline stages (recommended)
1. Install / Setup
2. Lint (optional)
3. DB/schema setup
4. Run API/UI smoke tests (lightweight)
5. Publish test report artifacts

---

## Required steps for AuthDemo
- Ensure PHP is available
- Ensure MySQL service is available
- Load schema into a test DB
- Create a test user (register via app or scripted seed)
- Run smoke checks:
  - register valid
  - login valid
  - dashboard access when session exists
  - dashboard redirect when logged out

---

## Environment variables
- Store DB credentials as GitHub Secrets
- Use `.env.example` pattern
- Never hard-code secrets in workflow

---

## Artifacts / reports
- Save logs for failures
- Save output HTML/screenshots if you automate UI later

## Release gates
- Block merge/promotion on:
  - smoke test failure
  - critical functional failures

## Theory: CI makes evidence repeatable

Continuous integration runs the same checks against a known revision and environment so a change can be evaluated consistently. Each stage should produce evidence that the next stage can trust: dependencies installed, schema loaded, services healthy, test data prepared, and assertions executed. Health checks should confirm readiness rather than merely that a process was started.

Store credentials in the CI secret store and pass them only to the steps that need them. Treat artifacts as potentially sensitive because HTML, logs, screenshots, and traces may contain account data or tokens. Publish only what helps diagnose a failure, with retention and redaction appropriate to the data.

A merge gate should represent an agreed quality risk, not simply a green workflow. Keep fast, reliable checks early; isolate unstable external dependencies; and make the failure message identify the failed behavior. The workflow examples need deterministic setup, including the demo account used by login and dashboard UI tests.
