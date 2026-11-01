# Phase 2 — CRUD Example

This folder adds a learning example for Phase 2.

- [`Phase2_CRUD_TestCases_Template.md`](/home/jarir-ahmed/Downloads/Working_in_Dream71-main/Phase2/Phase2_CRUD_TestCases_Template.md): test cases + bug template
- [`Phase2_CRUD_Checklist.md`](/home/jarir-ahmed/Downloads/Working_in_Dream71-main/Phase2/Phase2_CRUD_Checklist.md): execution checklist

Use the same style for your own app.

## Theory: CRUD invariants

CRUD testing is stronger when it checks invariants, or conditions that must remain true across operations. Examples include unique keys remaining unique, a record retaining its identity after an edit, relationships remaining valid, and deleting one record leaving unrelated records untouched. Derive these invariants from the domain rules before choosing examples.

The test-case template and checklist now explain how to select input partitions, establish repeatable state, and verify the effect of each transition.
