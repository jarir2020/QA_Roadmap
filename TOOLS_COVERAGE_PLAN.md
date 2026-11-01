# SQA tool coverage plan (based on `SQA_Learning_Plan.md`)

> Mode: lightweight coverage (run commands + checklist) — no heavy per-tool codebases.

## Already covered in this repo (implemented as code/scripts)
- **Playwright** (Phase 6): headless UI tests for AuthDemo
- **Screenshots + visual diff helper** (Phase 12): screenshot capture + baseline pixel comparison
- **API testing basics** (Phase 4): curl-based runner for register/login/dashboard
- **SQL / data validation** (Phase 5): DB snapshot runner (before/after)
- **Security testing basics** (Phase 9): defensive redirect + generic error runner
- **CI smoke** (Phase 11): GitHub Actions to run Playwright headless
- **Unit-style smoke** (Phase 10): curl-driven sanity checks

## Remaining tools to cover (commands/checklists)
The items below are taken from the **Recommended core stack** and **phase tool lists** in `SQA_Learning_Plan.md`.

### Test management / defect tracking
- Jira
- TestRail / Xray / Zephyr / qTest (choose 1–2)

### Browsers / cross-platform / a11y
- BrowserStack (or Sauce)
- axe / axe-core
- Lighthouse
- Pa11y

### API tooling
- Postman / Newman
- curl / HTTPie (curl already used)

### Performance tooling
- JMeter

### Security tooling
- OWASP ZAP
- Burp Suite (optional)
- Dependency scanners (Dependabot/Snyk/Trivy)

### CI reporting
- Allure (optional)

## How I will deliver coverage here
For each tool:
1. Add a `TOOLS/<tool-name>/README.md` with:
   - install/setup
   - minimal command to run
   - “what to verify” checklist
2. Where possible, add a runnable script in the corresponding folder.
3. Keep examples based on AuthDemo.

## Next step
I will start generating tool coverage folders for the highest-priority remaining tools in order:
1. Newman + Postman runner
2. JMeter starter `.jmx` + run script
3. OWASP ZAP quick scan
4. axe-core (manual + command)
5. Lighthouse (CI-friendly CLI)
