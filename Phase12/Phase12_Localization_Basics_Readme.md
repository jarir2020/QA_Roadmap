# Phase 12 — Localization basics (light)

## If your UI supports multiple languages
- Verify date/number formatting if used
- Ensure labels do not overflow
- Verify RTL layout if applicable

## For AuthDemo (current limitation)
This demo uses fixed English strings, so localization tasks are mostly “check readiness”.

## Theory: localization changes more than translated words

Localization adapts content and behavior to a language and region: wording, date and number formats, currency, plural rules, text direction, and input conventions. Translated strings may be longer or shorter than the source, so layouts should tolerate expansion and avoid fixed-width assumptions. Bidirectional text also needs mixed-direction values such as email addresses and numbers to remain readable.

Test with the actual locale configuration and representative boundary values. Keep display formatting separate from stored canonical values; a localized date or decimal separator should not silently change the underlying data. The current fixed-English demo cannot validate these behaviors, so the checklist is a readiness guide rather than a localization result.
