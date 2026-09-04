const fs = require('fs');
const path = require('path');

const cssDir = path.resolve(__dirname, '../src/assets/css');
const output = path.join(cssDir, 'global.css');
const entries = [
  'bootstrap.min.css',
  'all.min.css',
  'style.css',
  'responsive.css',
  'icomoon.css',
  'color-3.css',
  'react-adjustment.css',
];
const imported = new Set();

function flatten(file) {
  const absolute = path.resolve(file);
  if (imported.has(absolute)) return '';
  imported.add(absolute);

  let css = fs.readFileSync(absolute, 'utf8').replace(/^\uFEFF/, '');
  css = css.replace(/@charset\s+["'][^"']+["'];?/gi, '');
  css = css.replace(/@import\s+(?:url\()?\s*["']([^"']+)["']\s*\)?\s*;/gi, (rule, request) => {
    if (/^(?:https?:|data:|\/\/)/i.test(request)) return rule;
    return flatten(path.resolve(path.dirname(absolute), request));
  });

  return css.replace(/url\(\s*(["']?)(?!data:|https?:|\/\/|#)([^"')]+)\1\s*\)/gi, (_, quote, request) => {
    const [assetPath, suffix = ''] = request.split(/(?=[?#])/u, 2);
    const resolved = path.resolve(path.dirname(absolute), assetPath);
    let relative = path.relative(cssDir, resolved).split(path.sep).join('/');
    if (!relative.startsWith('.')) relative = `./${relative}`;
    return `url(${quote}${relative}${suffix}${quote})`;
  });
}

const banner = '/* Generated flattened global stylesheet. Keep source styles in their original files. */\n';
const css = entries.map((entry) => flatten(path.join(cssDir, entry))).join('\n');
fs.writeFileSync(output, banner + css);
console.log(`Wrote ${path.relative(process.cwd(), output)} (${Buffer.byteLength(css)} bytes)`);
