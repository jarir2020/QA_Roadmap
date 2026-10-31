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
