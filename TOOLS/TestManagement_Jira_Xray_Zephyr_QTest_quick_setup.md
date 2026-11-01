# Test management tools (Jira + Xray + Zephyr/QTest) — quick practice

## Goal
Practice mapping test cases and defects to a workflow.

## Pick one integration practice (recommended)
- **Jira + Xray** (common) OR **Jira + Zephyr**

## What to do (lightweight)
1. Create a test plan for AuthDemo:
   - suites: auth-positive, auth-negative, auth-session
2. Add 10–15 test cases (use Phase2/Phase4/Phase6 tests as inputs).
3. Create a sample bug from a failed run:
   - attach screenshot (from Playwright trace or failing evidence)
   - include environment + steps
4. Link bug to the test case.

## Evidence to save
- Screenshots of created items in the tool
- Exported IDs/links (no secrets)

## Theory: traceability connects intent to evidence

A test management system helps keep requirements, risks, cases, executions, and defects connected. This trace lets a team see which important behaviors have evidence, which failures block a requirement, and what changed after a fix. It also makes scope gaps visible before a release decision.

Keep cases focused and results tied to a specific build and environment. Avoid creating test records only to increase counts; each case should have a clear purpose, repeatable setup, and observable expected result. Attach evidence with sensitive values removed.
