# Phase 2 — Manual Test Cases (Example CRUD Module)

> Example module for learning. Use this same structure as your AuthDemo Phase 2 work.

## Target module
CRUD for a single entity (e.g., `Students`):
- Create (POST)
- Read (list + details)
- Update (PUT/PATCH)
- Delete (DELETE)
- Basic UI validation

## Assumptions
- UI has pages like:
  - `/items` (list)
  - `/items/new` (create)
  - `/items/{id}/edit` (update)
- API uses server-side validation.
- Error and success messages are visible in the UI.

---

## Test Data / Preconditions
- At least one existing record in DB (e.g., an item with id = 1).
- A small set of invalid values:
  - missing required field
  - invalid format (e.g., too long string)
  - invalid numeric / negative value (if applicable)

---

## Test Cases

### Create
#### TC-CRUD-001: Create with valid inputs
**Preconditions:** none
**Steps:**
1. Open create page
2. Enter valid values for all required fields
3. Submit
**Expected:** record is created and appears in list; success message shown.

#### TC-CRUD-002: Create with missing required field
**Preconditions:** none
**Steps:**
1. Open create page
2. Leave required field empty
3. Submit
**Expected:** validation error shown; record not created.

#### TC-CRUD-003: Create with invalid field format
**Preconditions:** none
**Steps:**
1. Open create page
2. Enter invalid values (e.g., malformed email / too-long name / invalid number)
3. Submit
**Expected:** validation error shown; record not created.

#### TC-CRUD-004: Create duplicates (if business rule exists)
**Preconditions:** record already exists with unique key
**Steps:**
1. Create a record using same unique key
2. Submit
**Expected:** duplicate prevented with proper message.

### Read
#### TC-CRUD-005: List shows existing records
**Preconditions:** at least one record exists
**Steps:**
1. Open list page
**Expected:** existing record appears with correct key fields.

#### TC-CRUD-006: Details loads correct record
**Preconditions:** record id exists
**Steps:**
1. Open details for existing id
**Expected:** details match DB values.

#### TC-CRUD-007: Details for non-existent id
**Preconditions:** id does not exist
**Steps:**
1. Open details page with invalid id
**Expected:** not found message / 404 behavior; no crash.

### Update
#### TC-CRUD-008: Update with valid changes
**Preconditions:** record exists
**Steps:**
1. Open edit page for existing id
2. Modify fields
3. Submit
**Expected:** record updated; new values visible in details/list.

#### TC-CRUD-009: Update with invalid changes
**Preconditions:** record exists
**Steps:**
1. Edit record
2. Enter invalid value(s)
3. Submit
**Expected:** validation errors shown; values not persisted.

#### TC-CRUD-010: Update non-existent record
**Preconditions:** id does not exist
**Steps:**
1. Open edit page for non-existent id
2. Attempt submit
**Expected:** not found behavior; no unintended records created.

### Delete
#### TC-CRUD-011: Delete existing record
**Preconditions:** record exists
**Steps:**
1. Trigger delete from list or details
2. Confirm deletion (if confirmation exists)
**Expected:** record removed; success message shown; record no longer appears.

#### TC-CRUD-012: Delete non-existent record (id tamper)
**Preconditions:** id does not exist
**Steps:**
1. Attempt delete with invalid id
**Expected:** safe failure / not found; no crash.

---

## Bug Report Template (Copy/Paste)
**Bug Title:**

**Environment:**
- Pages / endpoints:
- Browser/OS:
- Test date:

**Preconditions:**

**Steps to Reproduce:**
1.
2.
3.

**Actual Result:**

**Expected Result:**

**Evidence:**
- Screenshot(s)
- Console/network logs (optional)

**Severity / Priority:**
- Severity:
- Priority:

**Workaround (if any):**

