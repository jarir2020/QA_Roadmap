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
