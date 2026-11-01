# Phase 9 — Security testing

This folder contains Phase 9 learning artifacts for security testing fundamentals.

## Target
AuthDemo (login/registration/dashboard) — focus on defensive QA checks.

## Deliverables
- Security test cases (authorization, authentication, input validation)
- Evidence and bug report template
- Simple risk checklist

## Theory focus

Security testing begins with assets, trust boundaries, and plausible failure paths. Authentication asks who the user is; authorization asks what that identity may do. Input validation, output encoding, session management, and access control address different failure modes, so success in one area does not imply safety in another.

Use defense in depth: several independent controls should limit the impact of a single mistake. Phase 9's defensive cases now explain how to test these controls through safe, observable behavior and how to report the effect without publishing sensitive data.
