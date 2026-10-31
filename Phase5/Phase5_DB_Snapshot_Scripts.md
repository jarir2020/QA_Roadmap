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
