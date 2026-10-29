/* Optional maintenance task: refresh the checked-in Google Fonts and licenses.
 * Normal deployment preparation is entirely offline. */
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const directory = path.resolve(__dirname, '../assets/fonts');
const families = ['Barlow Semi Condensed:wght@400;600', 'DM Mono:wght@400;500', 'DM Sans:wght@400', 'Inter:wght@400;600;700', 'JetBrains Mono:wght@400', 'Lato:wght@400', 'Oswald:wght@400;600', 'Rubik Dirt'];
const source = `https://fonts.googleapis.com/css2?${families.map(f => 'family=' + f.replaceAll(' ', '+')).join('&')}&display=swap`;
async function get(url, text = false) {
  const response = await fetch(url, { signal: AbortSignal.timeout(30000), headers: { 'User-Agent': 'Mozilla/5.0 Chrome/130.0.0.0 Safari/537.36' } });
  if (!response.ok) throw new Error(`${response.status}: ${url}`);
  return text ? response.text() : Buffer.from(await response.arrayBuffer());
}
(async () => {
  let css = await get(source, true);
  const urls = [...new Set([...css.matchAll(/url\((https:\/\/[^)]+)\)/g)].map(m => m[1]))];
  // Fetch everything successfully before modifying any local files.
  const fonts = await Promise.all(urls.map(async url => {
    const name = crypto.createHash('sha256').update(url).digest('hex').slice(0, 20) + path.extname(new URL(url).pathname);
    return { url, name, data: await get(url) };
  }));
  const licenses = await Promise.all(families.map(async family => {
    const name = family.split(':')[0].replaceAll(' ', '').toLowerCase();
    return { name, data: await get(`https://raw.githubusercontent.com/google/fonts/main/ofl/${name}/OFL.txt`, true) };
  }));
  fs.mkdirSync(directory, { recursive: true });
  for (const font of fonts) {
    fs.writeFileSync(path.join(directory, font.name), font.data);
    css = css.replaceAll(font.url, font.name);
  }
  for (const license of licenses) fs.writeFileSync(path.join(directory, `${license.name}-OFL.txt`), license.data);
  fs.writeFileSync(path.join(directory, 'fonts.css'), `/* Self-hosted Google Fonts. License files are in this directory.\n * Source: ${source}\n */\n` + css);
  fs.writeFileSync(path.join(directory, 'README.md'), '# Self-hosted fonts\n\nEight font families, downloaded from Google Fonts; their SIL Open Font Licenses are included alongside the font files. Both Latin and Cyrillic subsets supplied by Google are retained. Refresh with `node scripts/vendor-fonts.cjs` (requires internet). Normal `npm.cmd run prepare:deploy` uses these local files without network access.\n');
  console.log(`Saved ${fonts.length} font files and ${licenses.length} licenses.`);
})().catch(error => { console.error(error); process.exitCode = 1; });
