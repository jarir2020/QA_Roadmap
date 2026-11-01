# SQA tool coverage map

This document maps the tool guides and runnable examples in this repository to the evidence they can provide. It complements the [SQA learning plan](./SQA_Learning_Plan.md).

## Tool practice guides

The [TOOLS folder](./TOOLS/README.md) contains focused notes for:

- Allure reports
- BrowserStack, Sauce Labs, and LambdaTest
- Dependency scanning with Trivy and Snyk
- JMeter
- Lighthouse
- OWASP ZAP
- Pa11y
- Postman, Newman, and curl
- Jira with Xray, Zephyr, or qTest
- axe and axe-core

These are learning guides, not proof that the tools have been installed or run. Each result still needs a target, version, configuration, and human review.

## Phase artifacts and evidence boundaries

| Area | Repository artifact | What it can show | Current boundary |
| --- | --- | --- | --- |
| Browser automation | Phase 6 Playwright specs | Selected AuthDemo browser journeys | Chromium only; login/dashboard cases need a prepared demo account |
| API testing | Phase 4 curl examples and shell helper | HTTP form requests and session-cookie flow | Send the HX-Request header; the helper itself does not assert behavior |
| Database validation | Phase 5 SQL examples and snapshot helper | Selected user-table changes before and after a request | The helper omits HX-Request and cannot currently establish the documented registration flow |
| Performance | Phase 8 JMeter plan and run template | A configured workload's response times, throughput, and errors | The checked-in JMX is an empty starter and requires samplers and assertions |
| Security | Phase 9 cases and shell helper | Defensive checks for session and error behavior | The helper's request body and headers do not match the current HTMX handler contract; use the cases as the expected behavior |
| Unit/integration | Phase 10 tasks and shell helper | Concepts and a possible endpoint smoke path | The helper is not a unit test and omits the required HTMX header |
| Visual comparison | Phase 12 screenshot scripts | Chromium screenshots and exact PNG-byte comparison | One viewport; no perceptual threshold, semantic, accessibility, or behavior assertions |
| Reporting | Phase 13 metrics reporter | Markdown formatting of supplied metrics | Does not execute tests or validate the reported counts; no-input output is placeholder data |
| CI | Phase 11 workflow examples | Possible environment and pipeline structure | Login tests need explicit test-account setup; workflows have not been run as part of this documentation update |

## Theory: connect each tool to a risk question

Tool coverage is a map from a risk question to repeatable evidence, not a count of installed tools. Browser automation observes user-visible paths, SQL checks durable state, scanners inspect a configured inventory or route surface, and load tools measure a workload. The result should state the tool's boundary and limitations so a green result is not generalized beyond what it exercised.

Prefer a small, reliable core workflow before adding overlapping tools. A helper is only behavioral coverage when it sends the intended request, starts from controlled state, and asserts the expected result. A template or connectivity demonstration should be labeled as a starter until those conditions are met.

## Additional areas to expand later

The broader learning plan also names mobile and desktop automation, contract testing, chaos/resilience, data-pipeline testing, messaging, and AI application testing. These topics currently have roadmap coverage but no dedicated runnable example in this repository.
