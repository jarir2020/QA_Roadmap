# Phase 1 — Testing Fundamentals (Notes)

## Goal of Phase 1
Build strong foundations in QA/SQA terminology, SDLC/STLC, and core testing concepts. By the end, you should be able to write a concise **test strategy** for a **login & registration** module.

---

## 1) QA vs QC vs Testing (key terms)
- **Quality Assurance (QA):** Process-focused. Ensures the *right process* is followed to prevent defects (e.g., standards, reviews, verification steps).
- **Quality Control (QC):** Execution-focused. Ensures the *product* meets requirements (e.g., testing, inspections, acceptance checks).
- **Testing:** Activities intended to find defects by executing code and observing behavior.
- **Verification:** “Did we build the thing right?” (Are we compliant with specs / requirements?).
- **Validation:** “Did we build the right thing?” (Does it satisfy user/business intent?).

**Short auth-example:**
- QA: code review + input validation checks during auth implementation.
- QC: run login/register tests and confirm correct behavior in staging.

**Practical takeaway:**
- QA reduces defect injection.
- Testing finds remaining defects and reduces defect leakage.
- Verification/validation keep you from confusing “works technically” vs “meets real needs.”
- Good QA improves consistency of test results over time.

---

## 2) SDLC and STLC
### SDLC (Software Development Life Cycle)
Common stages:
1. Requirements
2. Design
3. Implementation
4. Testing
5. Deployment
6. Maintenance

### STLC (Software Testing Life Cycle)
Common stages:
1. Test Planning
2. Test Design
3. Test Environment Setup
4. Test Execution
5. Defect Reporting & Tracking
6. Test Closure & Exit Criteria

**Key idea:** Testing is planned and designed early; it’s not only “run tests at the end.”

**How this helps in Phase 1 (auth example):**
- Test planning tells you what to test for login/register (scope) and what you’ll skip.
- Test design converts requirements into test scenarios/cases.
- Environment setup ensures DB + session behavior are realistic.
- Exit criteria tells you what “done” means before release (blockers fixed).

---

## 3) Testing Principles (what great testers do)
1. **Testing shows presence of defects, not absence.**
2. **Exhaustive testing is impossible** for real systems.
3. **Early testing is cheaper.** Find defects sooner.
4. **Risk-based testing matters.** Focus on what fails badly (auth is high risk).
5. **Defects cluster.** A small part of the code often causes most failures (e.g., one auth validator).
6. **Same defect, different impact** depending on severity/priority (e.g., wrong password message vs account takeover).

**Auth practical reminders:**
- Prefer tests that protect user accounts (session, password hashing, authorization).
- Don’t only test “happy path”; test malformed inputs and boundary cases.
- If something is risky, test it earlier and more thoroughly.

---

## 4) Test Levels
### 1) Unit Testing
- Scope: smallest testable pieces (functions/classes)
- Goal: correctness of logic
- **Auth examples:** validator returns error for invalid email; password hashing function is called.

### 2) Integration Testing
- Scope: interactions between modules/services
- Goal: correct API between components (e.g., auth service + user service)
- **Auth examples:** login writes/reads session; registration inserts to DB and enforces unique email.

### 3) System Testing
- Scope: whole application
- Goal: end-to-end behavior in realistic environment
- **Auth examples:** register from browser → login → dashboard shows user.

### 4) Acceptance Testing (UAT)
- Scope: user/business perspective
- Goal: meets agreed criteria for release
- **Auth examples:** if the product requires email verification, confirm the expected user journey.

---

## 5) Test Types
### Functional testing
Verifies features and requirements (e.g., “valid login returns dashboard”).
- **Auth examples:** correct redirect, correct session creation, correct error shown.

### Non-functional testing
Verifies quality attributes (performance, security basics, usability).
- **Auth examples (basic):** error messages aren’t overly detailed; forms are usable.

### Smoke vs Sanity
- **Smoke testing:** “Can the system run at all?” After build/deploy.
  - **Auth:** register a fresh user + login.
- **Sanity testing:** “Does this specific change work?” focused subset.
  - **Auth:** only login negative cases changed → test only those quickly.

### Regression testing
Ensures new changes didn’t break existing behavior.
- **Auth:** after bug fix, re-run the main auth suite (login/register/logout).

### Exploratory / Ad hoc testing
Unscripted testing guided by curiosity and risk.
- **Auth:** try weird capitalization in email, remove fields, submit multiple times quickly.

### Positive vs Negative testing
- **Positive:** valid inputs, expected success
- **Negative:** invalid inputs, expected failures and safe behavior
- **Auth negative goal:** prevent account takeover and user enumeration.

---

## 6) Static vs Dynamic Testing
### Static testing
No code execution.
- Reviews (requirements/design/code)
- Static analysis tools
- Walkthroughs
- Policy checks (e.g., input validation rules, password hashing usage)

### Dynamic testing
Code execution + observation.
- Unit/integration/system tests
- Browser/system checks

**Auth practical distinction:**
- Static: confirm you *use* `password_hash`/`password_verify`, and that you don’t leak sensitive info in errors.
- Dynamic: confirm login/register actually work and sessions persist correctly across requests.

---

## 7) Black-box, White-box, Gray-box
- **Black-box:** Only requirements/inputs/outputs.
  - Use when you test UI behavior without knowing internals.
- **White-box:** Uses internal structure (branches, paths).
  - Use when you have code access and want to hit edge-case branches.
- **Gray-box:** Partial knowledge (e.g., API behavior + known edge conditions).
  - For auth, you might know which inputs are validated and why.

**In Phase 1 deliverable:**
- You’ll mainly use black-box/gray-box thinking.
- You still want to design tests that cover “decision points” (valid vs invalid credentials, active vs inactive user, missing fields).

---

## 8) Defect Lifecycle + Severity vs Priority
### Defect lifecycle (typical)
1. New
2. Assigned
3. Open/In Progress
4. Fixed
5. Retest
6. Verified/Closed

**Auth example:**
- Login bypass → severity is high; it should be handled first.
- Minor UI typo on password field → severity lower; can be scheduled later.

### Severity (impact if it happens)
Often:
- Blocker/Critical (can’t proceed)
- Major
- Minor
- Trivial

### Priority (what to handle first)
Based on business urgency, release timeline, workaround availability.

**Rule of thumb:** Severity is “how bad”; priority is “how soon.”

**Phase 1 reminder:** when writing your test strategy, define what “critical auth failure” means in your case.

---

## 9) Test Artifacts (what to produce)
- **Test Plan:** overall strategy, scope, approach, resources
  - For Phase 1, keep it lightweight but clear.
- **Test Strategy:** high-level approach and coverage thinking
  - Decide: “what is most important for login/register?”
- **Test Scenario:** end-to-end idea of what to test
  - Example: “User registers then logs in successfully.”
- **Test Case:** detailed steps + expected results
  - Example: exact input values + expected UI message.
- **Test Suite:** group of tests
  - Example suites: `auth-positive`, `auth-negative`, `auth-session`.
- **Test Report:** results summary (pass/fail, defects found, coverage)
  - Include severity/priority and evidence.

**Practical reminder:** artifacts make collaboration easier and reduce “I tested it but can’t prove it.”

---

## 10) How to write a test strategy for Login & Registration (template)
Below is a concise structure you can reuse.

### A) Scope
- In scope:
  - Registration
  - Login
  - Logout
  - Session/token handling (basic)
  - Input validation for auth forms
- Out of scope (if applicable):
  - Payment flows
  - Complex admin workflows

### B) Objectives
- Ensure authentication works for valid users
- Prevent unauthorized access
- Ensure failures are safe (generic errors, no user enumeration)

### C) Key Risks
- Weak validation allows bad/unsafe inputs
- Account enumeration via error messages
- Incorrect session handling (e.g., logged-in user remains logged-in after logout)
- Improper password handling (e.g., reset/login mismatch)

### D) Test Levels/Types
- Unit (where possible)
- Integration: auth service + user DB
- System: UI/API flow
- Functional: core requirements
- Negative testing: invalid inputs and edge cases
- Security basics: brute-force protection behavior (conceptual), session invalidation

### E) Environments & Data
- Staging environment
- Test DB with seeded users
- Test accounts:
  - valid user
  - inactive/locked user (if applicable)
  - non-existent user

### F) Example Test Categories (high value for auth)
**Registration**
- Valid registration creates user
- Duplicate email behavior
- Required fields validation
- Password rules (min length, complexity if required)
- Email verification behavior (if required)
- Invalid email format rejected

**Login**
- Valid credentials allow access
- Invalid password rejected
- Non-existent user behavior (avoid enumeration)
- Locked/disabled account behavior (generic messaging)
- Session persistence rules (remember me if exists)

**Cross-cutting**
- Error messaging consistency
- Rate limiting / throttling behavior (if supported)
- Accessibility basics for form fields (labels, focus order)

### G) Entry/Exit Criteria (simple)
- Entry: version deployed, test data prepared, access/sign-in available.
- Exit: critical scenarios pass; no open blocker issues; known medium/minor issues are accepted with rationale.

### H) Reporting
- Provide summary of passes/fails and defects by severity.
- Include evidence: logs/screenshots/traces.
- State any risks: what wasn’t tested and why (time/budget/environment constraints).

---

## 11) Phase 1 Deliverable: concise test strategy (Login & Registration)
Use this as your “final write-up” style.

### **Test Strategy — Login & Registration Module**

**Scope**
- Registration: create account from UI/API, validate inputs, handle duplicates, password rules.
- Login: authenticate using credentials, establish session/token, handle invalid credentials safely.
- Logout: invalidate session/token (when applicable).

**Objectives**
- Confirm correct authentication and expected navigation/state changes.
- Ensure negative cases fail safely and do not leak user existence.
- Validate input constraints and error handling consistency.

**Key Risks**
- User enumeration via error messages.
- Incorrect session/token lifecycle and logout behavior.
- Validation gaps for email/password fields.

**Test Design Approach**
- Risk-based functional testing for core flows.
- Positive + negative testing using equivalence partitioning and boundary values for:
  - email format
  - password length
  - required vs missing fields
- Minimal security-focused checks:
  - generic error messages for non-existent vs wrong-password
  - session invalidation on logout

**Test Levels & Types**
- Unit: password/validation logic where available.
- Integration: auth service + user storage + token/session provider.
- System: end-to-end UI flows for registration/login/logout.
- Smoke/sanity: verify core auth works after each build.
- Regression: re-run auth suite after related changes.

**Test Environments & Test Data**
- Staging environment.
- Seeded accounts:
  - active valid user
  - inactive/locked user (if supported)
  - non-existent user (for negative tests)

**Entry/Exit Criteria**
- Entry: deploy build + prepare test data.
- Exit: all critical auth scenarios pass; no open critical/blocker defects affecting login/registration.

**Deliverables**
- Test execution report with defects categorized by severity/priority.
- Evidence: screenshots/traces/logs for failed scenarios.

---

## What you should do next (Phase 1 practice checklist)
1. Rewrite the deliverable in your own words (so it feels like *your* document).
2. Create 10–15 test scenarios (not full test cases yet) for login/registration.
3. Pick 5 negative test scenarios (user enumeration, invalid input, locked user).

When you’re ready, tell me and I’ll help you turn those scenarios into a proper Phase 1/Phase 2-ready structure (scenarios → cases).
