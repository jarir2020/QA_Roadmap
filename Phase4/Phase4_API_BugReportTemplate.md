# Phase 4 — Bug Report Template (API)

**Bug Title:**

**Type:** API response / auth / session / validation

**Environment:**
- App: AuthDemo
- Base URL: `http://127.0.0.1:8000`
- DB: `sqa_demo_auth`
- Client: Postman/curl + version

**Request**
- Method:
- Endpoint:
- Headers:
- Body:

**Preconditions:**

**Steps to Reproduce:**
1.
2.
3.

**Actual Result:**

**Expected Result:**

**Evidence:**
- Status code:
- Response body (or snippet)
- Cookies set/cleared
- Screenshots / HAR file

**Severity / Priority:**
- Severity:
- Priority:

**Workaround (if any):**

## Theory: describe the HTTP contract precisely

An API defect report should let another person reconstruct the request at the boundary: method, path, query, headers, body encoding, cookie state, and relevant preconditions. These details distinguish a server defect from a client that sent a different request than intended. Record status and response headers as well as the body, since redirects and cookie changes are part of the contract.

Keep secrets out of evidence. Redact passwords, session identifiers, and personal data while retaining enough structure to reproduce the failure with safe test values. State whether the issue is in transport behavior, response representation, validation, persistence, or authorization.
