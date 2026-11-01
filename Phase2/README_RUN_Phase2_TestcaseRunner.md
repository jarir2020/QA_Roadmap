# Phase 2 — Run the tiny test-case runner

## Format check for MD
```bash
cd Phase2
node phase2_testcase_runner.js ./Phase2_TestCases_AuthDemo.md
```

## Format check for JSON testcases
```bash
cd Phase2
node phase2_testcase_runner.js ./phase2_testcases_authdemo_sample.json
```

Expected: `Phase2 format checks: passed=... failed=0`

## Theory: what a format check establishes

The small runner checks documentation structure, not application behavior. In Markdown mode it looks for a test-case identifier; in JSON mode it checks that each case has an identifier, at least one step, and a non-empty expected result. It does not open a browser, call the application, inspect the database, or prove that the expected result is correct.

This distinction matters because validation is layered: a format check can catch incomplete artifacts early, while manual or automated execution supplies behavioral evidence. Keep the runner's “passed” output scoped to formatting and structure, and report UI execution separately.
