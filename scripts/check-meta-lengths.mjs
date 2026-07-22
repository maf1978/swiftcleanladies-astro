import fs from 'node:fs';
import path from 'node:path';

function getMeta(html) {
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
  const desc = (html.match(/name="description" content="([^"]*)"/) || [])[1] || '';
  return { title, desc };
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, files);
    else if (entry.name === 'index.html') files.push(p);
  }
  return files;
}

const files = walk('dist');
const issues = [];

for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  const { title, desc } = getMeta(html);
  if (!title) continue;
  const url = f.replace(/\\/g, '/').replace(/^dist/, '').replace(/index\.html$/, '');
  const ts = title.length <= 60 ? 'ok' : 'too_long';
  const ds = desc.length < 120 ? 'too_short' : desc.length <= 155 ? 'ok' : 'too_long';
  if (ts !== 'ok' || ds !== 'ok') {
    issues.push({ url, tLen: title.length, ts, dLen: desc.length, ds, title, desc });
  }
}

console.log(`pages ${files.length} issues ${issues.length}`);
console.log(JSON.stringify(issues, null, 2));
