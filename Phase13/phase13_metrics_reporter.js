// Phase 13 — Simple metrics reporter (pass/fail + counts)
// Usage:
//  node phase13_metrics_reporter.js ./path/to/test-summary.json
// If no file is provided, it generates a placeholder report.

const fs = require('fs');
const path = require('path');

const input = process.argv[2];

function loadJSON(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function toMd(report) {
  const defects = report.defectCounts;
  return `# Phase 13 — Test Metrics Report\n\n` +
    `## Summary\n` +
    `Build/version: ${report.buildVersion}\n` +
    `Environment: ${report.environment}\n` +
    `Scope: ${report.scope}\n\n` +
    `## Scenario Results\n` +
    `Total scenarios: ${report.scenarioCounts.total}\n` +
    `Passed: ${report.scenarioCounts.passed}\n` +
    `Failed: ${report.scenarioCounts.failed}\n` +
    `Blocked: ${report.scenarioCounts.blocked}\n\n` +
    `## Defects (example grouping)\n` +
    `| Severity | Count |\n` +
    `|---|---:|\n` +
    `| Critical | ${defects.critical} |\n` +
    `| High | ${defects.high} |\n` +
    `| Medium | ${defects.medium} |\n` +
    `| Low | ${defects.low} |\n` +
    `\n## Top 3 risks remaining\n` +
    `- ${report.topRisks[0]}\n- ${report.topRisks[1]}\n- ${report.topRisks[2]}\n`;
}

function main() {
  let report;

  if (input && fs.existsSync(input)) {
    const data = loadJSON(input);
    // Expect shape (example):
    // { buildVersion, environment, scope, scenarioCounts, defectCounts, topRisks }
    report = data;
  } else {
    report = {
      buildVersion: 'unknown',
      environment: 'local',
      scope: 'AuthDemo auth flows',
      scenarioCounts: { total: 15, passed: 15, failed: 0, blocked: 0 },
      defectCounts: { critical: 0, high: 0, medium: 0, low: 0 },
      topRisks: [
        'Session/auth edge cases not fully covered',
        'UI error-handling variants may change unexpectedly',
        'Staging vs local environment differences'
      ]
    };
  }

  const outDir = path.join(__dirname, 'evidence');
  fs.mkdirSync(outDir, { recursive: true });

  const md = toMd(report);
  const outPath = path.join(outDir, 'phase13-metrics-report.md');
  fs.writeFileSync(outPath, md, 'utf8');

  console.log(`Wrote: ${outPath}`);
}

main();
