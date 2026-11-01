# Phase 5 — DB snapshot scripts (AuthDemo)

## Create a snapshot before and after each scenario

### Before running an API test
```sql
USE sqa_demo_auth;
SELECT id, email, is_active, created_at, LENGTH(password_hash) as hash_len
FROM users
ORDER BY id;
```

### After running the scenario
Run the same query again and compare.

## Where to store evidence
- Create a folder: `Phase5/evidence/YYYY-MM-DD/TC-XXX/`
- Save query outputs (copy/paste) + scenario inputs.

## Theory: snapshots need a controlled comparison

A snapshot is useful only when the before and after views are comparable. Use the same query, database, ordering, and test identity around one clearly identified action. Keep setup and cleanup separate from the action under test so an inserted row can be attributed to the scenario.

The query records a hash length rather than the password hash value. That can support a basic non-empty-storage check while avoiding disclosure of the derived secret. A snapshot does not by itself prove that the right user could log in, that authorization worked, or that all other records remained unchanged; pair it with the relevant API/session evidence.
