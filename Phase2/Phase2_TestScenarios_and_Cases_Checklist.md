# Phase 2 Checklist (AuthDemo)

## Manual testing checklist
- [ ] Convert Phase 1 scenarios into test cases
- [ ] Include preconditions, steps, and expected results
- [ ] Cover both positive and negative outcomes
- [ ] Verify session behavior (dashboard access + logout)
- [ ] Produce at least 1 bug report template

## Deliverables
- [ ] Test cases document: `Phase2_TestCases_AuthDemo.md`
- [ ] Bug report template included inside

## Theory: scenario versus case

A scenario names a behavior or risk at a useful level of intent, such as “a logged-out visitor cannot access the dashboard.” A test case makes that idea executable by specifying state, data, actions, and a verifiable result. Several cases can explore one scenario across input partitions or user roles. This separation keeps coverage planning readable while retaining enough detail to reproduce individual checks.

Trace each high-risk requirement to one or more scenarios, then trace each scenario to its cases and evidence. This lightweight chain reveals requirements with no test and tests whose purpose is unclear.
