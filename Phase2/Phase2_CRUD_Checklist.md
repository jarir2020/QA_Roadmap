# Phase 2 Checklist — CRUD Example

## Manual testing checklist
- [ ] Create: valid inputs succeed
- [ ] Create: missing required fields fail
- [ ] Create: invalid formats fail
- [ ] Create: duplicate handling (if applicable)
- [ ] Read: list shows existing records
- [ ] Read: details page loads correct record
- [ ] Read: non-existent id handled safely
- [ ] Update: valid changes persist
- [ ] Update: invalid changes rejected
- [ ] Update: non-existent id handled safely
- [ ] Delete: existing record removed
- [ ] Delete: non-existent id handled safely

## Evidence checklist
- [ ] Capture screenshots for failures
- [ ] Record inputs used (key fields)
- [ ] Note URL + user/session context

## Theory: CRUD is a state-change model

CRUD operations are transitions over persistent state. A strong check observes the state before and after an operation: creation adds one valid record, update changes only the intended fields, and deletion removes or soft-deletes the intended record. Read checks should confirm identity and relationships, not merely that a page rendered.

The “non-existent id” cases exercise a different partition from ordinary validation: the identifier is syntactically acceptable but does not map to an entity. Add authorization and ownership checks where the application has users or roles, because an existing record can still be inaccessible. For destructive actions, verify both the immediate response and the later state so that a success message cannot hide a failed or over-broad change.

