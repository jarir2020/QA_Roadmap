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
