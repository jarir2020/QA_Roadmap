# Phase 5 — Example SQL Queries (AuthDemo)

Replace `:email` with an email used in your tests.

## 1) Quick table checks
```sql
USE sqa_demo_auth;

SHOW TABLES;
SELECT COUNT(*) AS user_count FROM users;
```

## 2) Find user by email (before/after)
```sql
SELECT id, email, is_active, created_at
FROM users
WHERE email = :email
;
```

## 3) Validate uniqueness/invariants
```sql
-- If email is unique, this should always be 0
SELECT email, COUNT(*) AS cnt
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```

## 4) Confirm password_hash is stored
```sql
SELECT id, LENGTH(password_hash) AS hash_len
FROM users
WHERE email = :email
;
```

## 5) Registration: verify no insertion on invalid input
- Run the invalid registration via UI/API first.
- Then check that email row still doesn’t exist.

```sql
SELECT *
FROM users
WHERE email = :email
;
```

## 6) After duplicate registration
```sql
SELECT COUNT(*) AS cnt
FROM users
WHERE email = :email
;
```

## Theory: query results are assertions about invariants

A database validation query should correspond to a stated requirement. The uniqueness query checks a table-wide invariant; the per-email queries check the outcome for one test identity. Run the same query before and after the action and interpret the difference in light of the starting state.

The `:email` notation is a placeholder for a bound parameter in application code or a SQL client that supports named parameters; many command-line consoles do not substitute it automatically. Replace it safely for a manual query or use a prepared statement in code. Avoid `SELECT *` in evidence because it can expose fields that are irrelevant or sensitive.

These queries inspect persistence, not the complete feature. A valid row does not establish that the session was created, that the user can access only their own data, or that a failure response was safe.
