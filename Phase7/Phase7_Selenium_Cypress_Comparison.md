# Phase 7 — Tool comparison (learning doc)

## Frameworks covered
- Selenium
- Cypress

## When to prefer Selenium
- You need broad cross-browser / driver support.
- You can tolerate more setup and slower feedback cycles.
- Your team already uses Selenium.

## When to prefer Cypress
- You want fast, developer-friendly E2E testing for modern web apps.
- You prefer good built-in debugging and readable test runs.

## Learning approach (recommended)
1. Pick ONE auth scenario to automate (login invalid password).
2. Implement it in Selenium.
3. Implement the same scenario in Cypress.
4. Capture differences:
   - setup effort
   - stability/auto-waiting behavior
   - debugging experience

## Deliverable
A short summary markdown:
- which tool you liked and why
- what you learned about reliability
- one screenshot or evidence link per tool

## Theory: compare capabilities in context

Frameworks differ in how they drive browsers, locate elements, wait for conditions, isolate state, run tests in parallel, and expose debugging evidence. Those mechanisms affect reliability and maintenance, but the outcome also depends on test design and application behavior. For example, an unstable test-data setup can make two frameworks look flaky even when the browser controls are sound.

Separate observed facts from preference: record what happened in the same scenario, then explain why a particular capability matters for the target team. Recheck framework and browser support against current project requirements before making a long-term adoption decision.
