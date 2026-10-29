/* Validate the prepared files as URLs beneath the intended GitHub Pages path.
 * This is an offline package check; it does not contact or publish the site. */
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
const base = new URL('https://zemfnur.github.io/portfolio-site/');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'deployment-manifest.json'), 'utf8'));
const files = [];
let directories = 0;
function walk(folder, prefix = '') {
  for (const item of fs.readdirSync(folder, { withFileTypes: true })) {
    const name = prefix + item.name;
    if (item.isDirectory()) { directories++; walk(path.join(folder, item.name), name + '/'); }
    else files.push({ path: name, bytes: fs.statSync(path.join(folder, item.name)).size });
  }
}
walk(output);
const names = new Set(files.map(file => file.path));
const hash = full => crypto.createHash('sha256').update(fs.readFileSync(full)).digest('hex');
for (const file of manifest.files) {
  assert(names.has(file.path), `Missing inventory file: ${file.path}`);
  assert.equal(fs.statSync(path.join(output, file.path)).size, file.bytes, file.path);
  assert.equal(hash(path.join(root, file.path)), hash(path.join(output, file.path)), file.path);
}
assert.equal(files.length, manifest.files.length + 2, 'Only content and two publishing metadata files expected');
assert(names.has('.nojekyll') && names.has('.portfolio-deploy-output'));
let references = 0;
function check(from, raw) {
  const value = raw.trim().replace(/&amp;/g, '&').replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n));
  if (!value || /^(?:#|data:|mailto:|tel:|javascript:)/i.test(value)) return;
  const url = new URL(value, new URL(from, base));
  if (url.origin !== base.origin) return;
  assert(url.pathname.startsWith(base.pathname), `Escapes project URL: ${from} -> ${value}`);
  const name = decodeURIComponent(url.pathname.slice(base.pathname.length));
  assert(names.has(name), `Missing or wrong-case path: ${from} -> ${url.href}`);
  references++;
}
for (const file of files) {
  const ext = path.extname(file.path);
  if (!['.html', '.css', '.svg', '.webmanifest', '.js'].includes(ext)) continue;
  const source = fs.readFileSync(path.join(output, file.path), 'utf8').replace(/<!--[\s\S]*?-->/g, '');
  if (['.html', '.svg'].includes(ext)) {
    for (const match of source.matchAll(/\b(?:src|href|poster)\s*=\s*["']([^"']+)["']/g)) check(file.path, match[1]);
  }
  if (['.html', '.css', '.svg'].includes(ext)) {
    for (const match of source.matchAll(/url\(\s*["']?([^\s"')]+)["']?\s*\)/g)) check(file.path, match[1]);
  }
  if (ext === '.webmanifest') for (const icon of JSON.parse(source).icons || []) check(file.path, icon.src);
  if (file.path === 'gaming-animation/scene.js') {
    for (const match of source.matchAll(/['"]((?:Background|Card)\/[^'"]+\.png)['"]/g)) check(file.path, match[1]);
    for (let frame = 1; frame <= 8; frame++) check(file.path, `squirrel/run/frame-0${frame}.png`);
  }
}
const pages = files.filter(file => file.path.endsWith('.html')).map(file => file.path).sort();
assert.deepEqual(pages, ['about.html', 'index.html', 'projects/case-4.html', 'projects/logistics-crm.html', 'projects/martin-exam.html', 'projects/production-line-simulator.html']);
const videos = files.filter(file => file.path.endsWith('.mp4')).map(file => file.path).sort();
assert.deepEqual(videos, ['assets/video/hero.mp4', 'video/Transportation - drivers.mp4', 'video/Transportation-Overview-topza-case1.mp4']);
const case4 = fs.readFileSync(path.join(output, 'projects/case-4.html'), 'utf8');
for (const name of ['gaming-scene', 'gaming-toggle', 'gaming-scene__sky', 'gaming-scene__mountains', 'gaming-scene__forest', 'gaming-scene__path', 'gaming-scene__squirrel', 'gaming-scene__thought', 'gaming-scene__card']) {
  assert(case4.includes(`class="${name}"`), `Missing animation element: ${name}`);
}
assert(case4.includes('src="../gaming-animation/scene.js" defer'));
const fonts = files.filter(file => /\.(?:woff2?|ttf|otf)$/.test(file.path));
assert.equal(fonts.length, 13);
assert.equal(files.filter(file => file.path.endsWith('-OFL.txt')).length, 8);
assert(names.has('gaming-animation/scene.css'));
assert.equal(files.filter(file => /^gaming-animation\/.*\.png$/.test(file.path)).length, 16);
assert.deepEqual(manifest.warnings, []);
console.log(JSON.stringify({ base: base.href, references, files: files.length, contentFiles: manifest.files.length,
  directories, directoryCountIncludesDistRoot: false, bytes: files.reduce((sum, file) => sum + file.bytes, 0),
  contentBytes: manifest.bytes, largest: [...files].sort((a, b) => b.bytes - a.bytes)[0], pages, videos,
  fontFiles: fonts.length, images: files.filter(file => /\.(?:png|jpe?g|svg|webp|gif|avif|ico)$/.test(file.path)).length,
  animationImages: 16, result: 'PASS' }, null, 2));
