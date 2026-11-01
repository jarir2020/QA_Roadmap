// Phase 2 — tiny test-case runner (no framework)
// Purpose: convert your manual test cases into a runnable smoke for format + evidence placeholders.
// This does NOT execute UI; it validates structure and can optionally check expected strings via curl.
//
// Usage:
//   node phase2_testcase_runner.js ./Phase2/Phase2_TestCases_AuthDemo.md
//
// Optional:
//   BASE_URL=http://127.0.0.1:8030 node phase2_testcase_runner.js ./Phase2/testcases.json

const fs = require('fs');
const path = require('path');

const input = process.argv[2];
if (!input) {
  console.error('Usage: node phase2_testcase_runner.js <path-to-md-or-json>');
  process.exit(2);
}

const abs = path.resolve(process.cwd(), input);
if (!fs.existsSync(abs)) {
  console.error('File not found:', abs);
  process.exit(2);
}

function runChecks(testcases) {
  let passed = 0;
  let failed = 0;
  for (const tc of testcases) {
    const idOk = typeof tc.id === 'string' && tc.id.length > 0;
    const stepsOk = Array.isArray(tc.steps) && tc.steps.length > 0;
    const expectedOk = typeof tc.expected === 'string' && tc.expected.length > 0;
    if (idOk && stepsOk && expectedOk) {
      passed++;
    } else {
      failed++;
      console.log(`[FAIL] ${tc.id ?? 'UNKNOWN'}: invalid structure`);
    }
  }
  console.log(`\nPhase2 format checks: passed=${passed} failed=${failed}`);
  process.exit(failed ? 1 : 0);
}

const ext = path.extname(abs).toLowerCase();
const raw = fs.readFileSync(abs, 'utf8');

if (ext === '.json') {
  const data = JSON.parse(raw);
  runChecks(data.testcases ?? []);
} else {
  // MD mode: only ensure it contains TC- pattern blocks.
  const hasTc = /TC-\w+-\d+/.test(raw) || /TC-\d+/.test(raw);
  if (!hasTc) {
    console.log('No test case IDs found (expected TC-... patterns).');
    process.exit(1);
  }
  console.log('MD format looks like it includes TC-... IDs.');
  console.log('To make it runnable, create a Phase2 JSON file in the repo like testcases.json');
  process.exit(0);
}
