# Phase 7 — Alternative automation tasks (for practice)

## Task A: Selenium learning task
- Choose scenario: TC from AuthDemo Phase 2 (e.g., login wrong password)
- Implement the scenario
- Verify expected generic error message appears
- Note evidence: screenshot + console/network notes

## Task B: Cypress learning task
- Repeat the same scenario
- Verify the error message appears
- Note differences: waiting, selectors, flakiness

## Task C: Decision notes
Write 5 bullets:
- Which tool is better for your use case?
- What setup friction did you face?
- What makes tests stable?
- What makes debugging easier?
- What would you recommend to a team?

## Theory: make a fair tool comparison

A comparison is meaningful only when both tools implement the same behavior against the same application state and environment. Keep the requirement, test data, assertions, and browser target equivalent; otherwise a difference in results may come from the experiment rather than the framework.

A single login scenario can reveal setup and debugging differences, but it cannot establish that one framework is universally better. Record the dimensions observed—such as locator model, waiting behavior, browser needs, feedback time, and trace quality—and state which team constraints make those dimensions important.
