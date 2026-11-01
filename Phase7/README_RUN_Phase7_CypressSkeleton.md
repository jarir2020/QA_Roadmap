# Phase 7 — Cypress skeleton (wrong password)

## What this is
A minimal Cypress-style test skeleton showing selectors and assertions.

## If you want it to run
1) Scaffold Cypress in Phase7:
```bash
cd Phase7
npm init -y
npm i -D cypress
npx cypress open
```
2) Place the spec file at: `cypress/e2e/auth_wrong_password.cy.js`
3) Serve AuthDemo and set Cypress baseUrl accordingly.

## Theory: a skeleton demonstrates syntax, not readiness

The spec shows the structure of a browser test: visit a route, locate controls, perform an action, and assert the resulting message. The Cypress installation and the application server are separate dependencies; the test also needs a valid base URL and predictable test account state.

The assertion is the test oracle. A robust negative-login case should verify the generic error and, where needed, verify that no authenticated session or protected access was granted. Keep the wrong password different from the registered credential and do not place real credentials in the spec.
