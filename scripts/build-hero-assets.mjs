import fs from 'node:fs/promises';
import { createHash } from 'node:crypto';
import sharp from 'sharp';

// Prebuild responsive WebP files so the first visitor never waits for image conversion.
const names = ['hero-dance-v2', 'hero-spaces', 'hero-services', 'hero-news', 'hero-about', 'hero-contact'];
const manifest = {};
await fs.mkdir('public/heroes', { recursive: true });
for (const name of names) {
  const input = `public/${name}.webp`;
  const metadata = await sharp(input).metadata();
  const widths = [...new Set([800, 1440, Math.min(1920, metadata.width)].filter(w => w <= metadata.width))].sort((a,b) => a-b);
  const variants = [];
  for (const width of widths) {
    const buffer = await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toBuffer();
    const hash = createHash('sha256').update(buffer).digest('hex').slice(0, 12);
    const url = `/heroes/${name}-${width}-${hash}.webp`;
    await fs.writeFile(`public${url}`, buffer);
    variants.push({ url, width });
    console.log(url, buffer.length);
  }
  manifest[`/${name}.webp`] = {
    src: variants.at(-1).url,
    srcSet: variants.map(v => `${v.url} ${v.width}w`).join(', '),
    width: metadata.width,
    height: metadata.height,
  };
}
await fs.writeFile('src/data/hero-assets.json', JSON.stringify(manifest, null, 2) + '\n');
