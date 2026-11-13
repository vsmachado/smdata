import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const pathOf = (url) => fileURLToPath(url);

const iconBuffer = await readFile(
  new URL('../src/assets/brand/smdata-icon-512.png', import.meta.url)
);
const iconBase64 = iconBuffer.toString('base64');

const escapeXml = (text) =>
  text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

const palettes = {
  home: { a: '#16A08C', b: '#5B5BD6' },
  arcadea: { a: '#9A6CFF', b: '#35D6A0' },
  efinancas: { a: '#2E6E9E', b: '#A9DCD3' },
  empresa: { a: '#16A08C', b: '#3F8FA8' }
};

const pages = {
  pt: {
    home: {
      title: ['Software para o que', 'faz parte do seu dia.'],
      sub: 'Empresa familiar de tecnologia. Serviços e produtos próprios.',
      kind: 'home'
    },
    arcadea: {
      title: ['Toda a sua biblioteca', 'de jogos. Em um só lugar.'],
      sub: 'Arcadea — desktop e Companion Android.',
      kind: 'arcadea'
    },
    efinancas: {
      title: ['Quanto você ainda', 'pode gastar hoje?'],
      sub: 'eFinanças | Caixinhas — orçamento pessoal por caixinhas.',
      kind: 'efinancas'
    },
    empresa: {
      title: ['Uma empresa familiar', 'de tecnologia.'],
      sub: 'Serviços e produtos digitais próprios.',
      kind: 'empresa'
    }
  },
  en: {
    home: {
      title: ['Software for the things', 'that shape your day.'],
      sub: 'A family-owned technology company. Services and products of our own.',
      kind: 'home'
    },
    arcadea: {
      title: ['Your entire game library.', 'In one place.'],
      sub: 'Arcadea — desktop and Android Companion.',
      kind: 'arcadea'
    },
    efinancas: {
      title: ['How much can you', 'still spend today?'],
      sub: 'eFinanças | Caixinhas — personal budgeting by boxes.',
      kind: 'efinancas'
    },
    empresa: {
      title: ['A family-owned', 'technology company.'],
      sub: 'Technology services and digital products of our own.',
      kind: 'empresa'
    }
  }
};

function ogSvg({ title, sub, kind }) {
  const palette = palettes[kind];
  const titleLines = title
    .map(
      (line, index) =>
        `<text x="88" y="${300 + index * 78}" font-family="Segoe UI, Arial, sans-serif" font-size="66" font-weight="700" letter-spacing="-2.6" fill="#F7F8F6">${escapeXml(line)}</text>`
    )
    .join('');
  const subY = 300 + title.length * 78 + 4;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0B151D"/>
      <stop offset="0.55" stop-color="#0D1B26"/>
      <stop offset="1" stop-color="#101B2A"/>
    </linearGradient>
    <radialGradient id="glowA" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="${palette.a}" stop-opacity="0.34"/>
      <stop offset="1" stop-color="${palette.a}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowB" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="${palette.b}" stop-opacity="0.28"/>
      <stop offset="1" stop-color="${palette.b}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#FFFFFF" stroke-opacity="0.045" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <circle cx="1060" cy="90" r="330" fill="url(#glowA)"/>
  <circle cx="1130" cy="580" r="300" fill="url(#glowB)"/>
  <image href="data:image/png;base64,${iconBase64}" x="88" y="78" width="56" height="56"/>
  <text x="164" y="117" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="700" letter-spacing="-1.2" fill="#F7F8F6">SMData</text>
  <text x="88" y="192" font-family="Consolas, monospace" font-size="17" font-weight="600" letter-spacing="3.4" fill="${palette.b}">TECNOLOGIA · SERVIÇOS E PRODUTOS</text>
  ${titleLines}
  <text x="90" y="${subY}" font-family="Segoe UI, Arial, sans-serif" font-size="26" fill="#A9B6C2">${escapeXml(sub)}</text>
  <g transform="translate(88 545)">
    <rect width="120" height="4" rx="2" fill="${palette.a}"/>
    <text x="0" y="42" font-family="Consolas, monospace" font-size="16" letter-spacing="2" fill="#7F8D99">SMDATA.NET</text>
    <text x="1010" y="42" font-family="Segoe UI, Arial, sans-serif" font-size="16" fill="#7F8D99">SMData</text>
  </g>
</svg>`;
}

await mkdir(new URL('../public/og/pt/', import.meta.url), { recursive: true });
await mkdir(new URL('../public/og/en/', import.meta.url), { recursive: true });

for (const [lang, langPages] of Object.entries(pages)) {
  for (const [name, page] of Object.entries(langPages)) {
    const svg = ogSvg(page);
    const out = new URL(`../public/og/${lang}/${name}.png`, import.meta.url);
    await sharp(Buffer.from(svg)).png({ quality: 92 }).toFile(pathOf(out));
    console.log(`og/${lang}/${name}.png`);
  }
}

const iconFile = pathOf(
  new URL('../src/assets/brand/smdata-icon-512.png', import.meta.url)
);
for (const size of [32, 180, 192, 512]) {
  const name = size === 180 ? 'apple-touch-icon.png' : `favicon-${size}.png`;
  const out = new URL(`../public/brand/${name}`, import.meta.url);
  await sharp(iconFile)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(pathOf(out));
  console.log(`brand/${name}`);
}

await sharp(pathOf(new URL('../src/assets/efinancas/appicon.png', import.meta.url)))
  .resize(192, 192, { fit: 'cover' })
  .png({ compressionLevel: 9 })
  .toFile(pathOf(new URL('../public/brand/efinancas-mark.png', import.meta.url)));
console.log('brand/efinancas-mark.png');

// Build a small PNG-backed .ico so /favicon.ico does not 404.
const png32 = await readFile(new URL('../public/brand/favicon-32.png', import.meta.url));
const icoHeader = Buffer.alloc(6 + 16);
icoHeader.writeUInt16LE(0, 0);
icoHeader.writeUInt16LE(1, 2);
icoHeader.writeUInt16LE(1, 4);
icoHeader.writeUInt8(32, 6);
icoHeader.writeUInt8(32, 7);
icoHeader.writeUInt8(0, 8);
icoHeader.writeUInt8(0, 9);
icoHeader.writeUInt16LE(1, 10);
icoHeader.writeUInt16LE(32, 12);
icoHeader.writeUInt32LE(png32.length, 14);
icoHeader.writeUInt32LE(22, 18);
await writeFile(
  new URL('../public/favicon.ico', import.meta.url),
  Buffer.concat([icoHeader, png32])
);
console.log('favicon.ico');
