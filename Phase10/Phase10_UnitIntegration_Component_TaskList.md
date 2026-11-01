# Phase 10 — Example Testing Tasks (AuthDemo)

> Phase 10 is about learning test types and how developers write them.

## 1) Unit testing tasks (PHP)
Create unit tests for functions in `src/auth.php` (conceptually):

### UT-AUTH-001: register_user invalid email
- Input: `abc@`
- Expect: `{ ok: false }` and error message.

### UT-AUTH-002: register_user short password
- Input: valid email + password length < 8
- Expect: `{ ok: false }`.

### UT-AUTH-003: register_user happy path
- Input: valid email + password >= 8
- Expect: `{ ok: true }`

### UT-AUTH-004: login_user wrong password
- Input: existing email + wrong password
- Expect: `{ ok: false }`

### UT-AUTH-005: login_user happy path sets session
- Expect: `$_SESSION['user_id']` is set.

## 2) Integration testing tasks (DB)
Create integration tests that hit the DB (can be run with a test DB):

### IT-AUTH-001: registration persists a user row
- Run register_user
- Query `users` table
- Expect: row count increased and password_hash stored.

### IT-AUTH-002: duplicate registration fails with unique email
- Register same email twice
- Expect: second attempt returns duplicate error.

## 3) Component testing tasks (UI)
If you use a UI test runner later:
- Test that form submits and `#form-result` updates.
- Keep scope small: don’t test routing and redirects in every component test.

## Tool suggestions (optional)
- PHP unit testing: PHPUnit
- Integration approach: test DB + transactions or cleanup

## Theory: choose the test level by dependency boundary

A true unit test isolates the behavior under test from the database and session environment, often through a seam or test double. The current AuthDemo registration and login functions call the database directly and login mutates session state, so invoking them against a real MySQL database is an integration test unless those dependencies are isolated.

Integration checks should verify the contract between layers: validation, unique constraints, persistence, and session state. Use a dedicated test database and deterministic cleanup; never let a test write to production data. Component/UI checks should assert the user's visible result while avoiding duplication of every low-level validation case.

Test doubles help control failure conditions and time, but they can diverge from real infrastructure. Keep at least a small number of integration checks against the actual database schema and constraints.
