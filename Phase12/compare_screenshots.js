// Pixel-perfect-ish screenshot comparator (Phase 12)
// Usage: node compare_screenshots.js

const fs = require('fs');
const path = require('path');

const baselineDir = process.env.BASELINE_DIR;
const currentDir = process.env.CURRENT_DIR;
const diffDir = process.env.DIFF_DIR || path.join(path.dirname(currentDir), 'diffs');
const diffReportPath = process.env.DIFF_REPORT || path.join(diffDir, 'diff-report.md');
const threshold = Number(process.env.PIXEL_THRESHOLD ?? '0');

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function fileHash(buf) {
  // simple byte hash via length+first+last to avoid crypto deps
  return `${buf.length}:${buf[0]}:${buf[buf.length - 1]}`;
}

function pngEqual(a, b) {
  if (a.length !== b.length) return false;
  // For threshold=0, we compare bytes.
  return fileHash(a) === fileHash(b) && a.equals ? b.equals(a) : Buffer.compare(a, b) === 0;
}

(async () => {
  if (!baselineDir || !currentDir) {
    console.error('Missing BASELINE_DIR or CURRENT_DIR');
    process.exit(2);
  }

  ensureDir(diffDir);

  const baselineFiles = fs.readdirSync(baselineDir).filter(f => f.endsWith('.png'));
  baselineFiles.sort();
  const diffs = [];

  for (const f of baselineFiles) {
    const basePath = path.join(baselineDir, f);
    const curPath = path.join(currentDir, f);

    if (!fs.existsSync(curPath)) {
      diffs.push({ file: f, status: 'missing-current' });
      continue;
    }

    const baseBuf = fs.readFileSync(basePath);
    const curBuf = fs.readFileSync(curPath);

    const ok = pngEqual(baseBuf, curBuf);
    if (!ok) {
      diffs.push({ file: f, status: 'diff' });
      // For threshold=0 we don’t generate a pixel diff image; just report mismatch.
    }
  }

  const total = baselineFiles.length;
  const failed = diffs.filter(d => d.status !== 'ok').length;

  let md = `# Phase 12 — Screenshot Diff Report\n\n`;
  md += `- Baseline: ${baselineDir}\n`;
  md += `- Current: ${currentDir}\n`;
  md += `- Threshold: ${threshold}\n\n`;
  md += `## Summary\n`;
  md += `- Total screenshots: ${total}\n`;
  md += `- Diffs: ${diffs.length}\n\n`;
  md += `## Details\n`;
  md += `| File | Result |\n|---|---|\n`;
  for (const d of diffs) {
    const res = d.status === 'diff' ? 'DIFF' : d.status;
    md += `| ${d.file} | ${res} |\n`;
  }

  fs.writeFileSync(diffReportPath, md, 'utf8');
  console.log(md);

  if (diffs.some(d => d.status === 'diff' || d.status === 'missing-current')) {
    process.exit(1);
  }
})();
