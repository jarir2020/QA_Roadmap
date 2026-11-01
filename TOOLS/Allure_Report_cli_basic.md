# Allure report — basic workflow practice

## Goal
Generate a test report from test results.

## Options (choose one)
- For Playwright:
  - configure reporter to generate JSON
  - generate Allure HTML outside CI

## Click-minimal steps (conceptual)
1. Run tests with a reporter that produces result files.
2. Convert results to report:
   - `allure generate ...`
   - `allure open`

## Evidence
- Save generated Allure HTML report link or zip

## Theory: a report is a view of recorded test results

A reporting tool organizes events and assertions that a test runner already produced. It can make trends, failures, attachments, and run metadata easier to review, but it cannot make an incorrect assertion trustworthy or recover evidence the runner never recorded.

Attach enough context to reproduce a failure while avoiding secrets in screenshots, environment variables, and request logs. Keep result history tied to a build and environment so comparisons describe the same scope.
