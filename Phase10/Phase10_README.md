# Phase 10 — Unit, Integration & Component Testing

This folder contains example tasks to learn the “developer-side” of testing (unit/integration/component).

## Target
AuthDemo logic:
- Input validation
- password_hash / password_verify paths
- auth session behavior

## Deliverables
- Suggested unit test cases (conceptual)
- Integration test ideas (DB + auth)
- Component/UI test ideas (small scope)

## Theory focus

Test level is determined by the boundary exercised, not by the name of the test. A unit test isolates a small behavior from external systems; an integration test verifies collaboration across boundaries such as PHP code and MySQL; a component test checks a bounded UI or service component with its dependencies controlled. A test that calls an HTTP endpoint and uses a real database is not a unit test, even if it checks one function indirectly.

The Phase 10 artifacts now connect isolation, test doubles, database cleanup, and evidence to the actual AuthDemo boundaries.
