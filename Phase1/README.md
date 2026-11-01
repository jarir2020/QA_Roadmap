# Phase 1 — Testing fundamentals

Phase 1 introduces the reasoning used throughout the roadmap: define expected behavior, choose evidence that can reveal a mismatch, and spend test effort according to risk.

## Theory map

- [Testing fundamentals notes](./SQA_Phase1_Testing_Fundamentals_Notes.md) explain quality activities, SDLC/STLC, test levels, test types, evidence, faults, coverage, and risk.
- [Registration, login, and dashboard demo](./Demo_Registration_Login_Dashboard_PHP_HTMX_CSS.md) connects trust boundaries, sessions, database constraints, and partial-page requests to a runnable learning example.
- [AuthDemo run guide](./AuthDemo/README.md) describes the local app setup and its authentication state model.
- [AuthDemo test plan](./AuthDemo/Phase1_TestPlan_AuthDemo.md) applies those concepts to scenarios, data, evidence, and release criteria.

## Learning sequence

Start with the vocabulary and lifecycle, then identify the demo's user-visible requirements. Derive risks and input partitions before writing cases. Finally, run the journeys from clean browser and database states and record the evidence. This progression separates the requirement (“what should happen”) from the test design (“how to observe it”) and the execution result (“what happened in this run”).

## Phase update

Theory sections now connect test oracles, fault-to-failure reasoning, coverage limits, authentication state, server trust boundaries, test data, and risk-based exit decisions to the Phase 1 artifacts.
