# Phase 11 — CI/CD, Containers & Test Environments

This folder contains learning deliverables for:
- CI pipeline flow
- Running tests on PRs
- Basic container/test environment setup concepts

## Target
Use AuthDemo as the example app.

## Deliverables
- CI workflow checklist (GitHub Actions)
- Test stages order + what to publish
- Notes on environment variables and artifacts

## Theory focus

CI/CD is a feedback system: each automated stage checks a property of a change and returns evidence quickly enough to guide the next action. Reproducible environments reduce false differences between a developer machine and a build agent. Test databases and seeded users are part of that environment and should be created deliberately for every run.

The Phase 11 materials now explain readiness, test-data setup, secret handling, artifact sensitivity, and how to choose meaningful release gates.
