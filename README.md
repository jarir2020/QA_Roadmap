# QA_Roadmap

A practical QA/SQA learning roadmap grounded in a small PHP + HTMX + MySQL authentication demo.

## Learning path

The repository moves from testing concepts to progressively broader evidence: manual test design, browser and API behavior, database state, UI automation, performance, security, CI, specialized quality attributes, and release decisions.

- [Phase 1 — Testing fundamentals](./Phase1/README.md)
- [Phase 2 — Manual testing and test design](./Phase2/Phase2_README.md)
- [Phase 3 — Web, browser, and accessibility checks](./Phase3/Phase3_README.md)
- [Phase 4 — API testing](./Phase4/Phase4_README.md)
- [Phase 5 — SQL and data validation](./Phase5/Phase5_README.md)
- [Phase 6 — Playwright UI automation](./Phase6/Phase6_README.md)
- [Phase 7 — Alternative automation frameworks](./Phase7/Phase7_README.md)
- [Phase 8 — Performance testing](./Phase8/Phase8_README.md)
- [Phase 9 — Security testing](./Phase9/Phase9_README.md)
- [Phase 10 — Unit, integration, and component testing](./Phase10/Phase10_README.md)
- [Phase 11 — CI/CD and test environments](./Phase11/Phase11_README.md)
- [Phase 12 — Specialized testing](./Phase12/Phase12_README.md)
- [Phase 13 — Test strategy, metrics, and QA leadership](./Phase13/Phase13_README.md)

## Core theory and practice

Start with the [complete SQA learning plan](./SQA_Learning_Plan.md), then use the phase artifacts to apply its concepts to the [AuthDemo](./Phase1/AuthDemo/README.md). Each phase README links to its checklists, examples, test plans, or run guides. The [tool coverage plan](./TOOLS_COVERAGE_PLAN.md) maps shared tools to their practice notes.

## Theory-first learning model

The roadmap treats testing as a way to gather evidence about risk. Requirements define expected behavior; test design chooses representative situations; execution observes the system; reporting explains what the evidence supports and what remains unknown. The phases add different observation layers, from function and database state to browser behavior and release readiness.

A passing result is always scoped to its build, environment, data, and assertions. Tool output and coverage counts help organize evidence, but neither is proof that the product is defect-free.
