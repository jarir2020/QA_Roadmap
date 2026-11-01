# Phase 5 — DB Evidence Template

## Scenario ID
(e.g., TC-API-001)

## Emails used
- Test email:
- Optional extra email:

## DB state BEFORE
```sql
-- paste query + output
```

## DB state AFTER
```sql
-- paste query + output
```

## Assertions
- [ ] Expected row inserted / not inserted
- [ ] email stored as expected
- [ ] password_hash exists
- [ ] is_active correct
- [ ] created_at updated
- [ ] no duplicates created

## Notes / Risks

## Theory: database evidence proves persistence properties

A before-and-after snapshot helps separate a visible response from a persisted change. Compare the row count and the specific test identity, then verify required invariants such as uniqueness, normalized email, active status, and timestamp behavior. For an invalid or duplicate registration, the expected evidence is that no unintended row was added.

A stored password hash is evidence that a derived credential was persisted; never copy the hash itself into a report unless there is a specific, protected reason. Do not include plaintext passwords, session cookies, or unrelated user records in evidence. Capture only the fields needed to support the assertion.
