# Phase 5 — SQL & Data Validation

This folder contains Phase 5 deliverables to practice validating auth behavior by checking database state.

## Target app
AuthDemo (`sqa_demo_auth.users`)

## What you will use
- SQL validation checklist (what to verify before/after API actions)
- Example SQL queries for common auth scenarios
- Database state evidence template

## Theory focus

Database testing checks whether application actions preserve data rules across state changes. Separate durable user records from transient session state: login and logout can change authentication state without changing the users table. Validate both expected changes and invariants that must remain true, such as uniqueness and the absence of unintended inserts.

The Phase 5 artifacts now explain how to make before/after comparisons reproducible, limit sensitive evidence, interpret query placeholders, and avoid treating a database snapshot as proof of the whole user journey.
