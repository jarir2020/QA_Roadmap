# Phase 10 — Reporting Notes (what to write)

When you document unit/integration/component testing:
- What is isolated vs what is real (DB/network/browser)
- How you keep tests independent (cleanup/transactions)
- What assertions you make (messages, redirects, DB rows)
- Evidence: test run output, failure logs

## Theory: report the boundary your test crossed

A test result is easier to interpret when it states what was real and what was controlled. Record whether the test used a real database, HTTP server, browser, clock, or external service, and identify any test doubles. This lets readers separate a product failure from a fixture or environment problem.

For failures, include the assertion, relevant input class, setup state, and concise diagnostics. Avoid claiming broad coverage from a single smoke path. If a test uses cleanup or transactions, note the isolation strategy because persistent state can make later runs order-dependent.
