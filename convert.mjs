import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const images = ['about', 'hero', 'product1', 'product2', 'product3'];
const IMAGE_DIR = 'public/images';

async function toWebp(name) {
    const source = path.join(IMAGE_DIR, `${name}.png`);
    const target = path.join(IMAGE_DIR, `${name}.webp`);

    if (!fs.existsSync(source)) return;

    await sharp(source)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 75 })
        .toFile(target);

    const { size } = fs.statSync(target);
    console.log(`Converted ${name}.webp (${Math.round(size / 1024)}KB)`);
    fs.unlinkSync(source);
}

async function buildLogos() {
    const logoSvg = path.join(IMAGE_DIR, 'logo-n.svg');
    if (!fs.existsSync(logoSvg)) return;

    const targets = [
        { name: 'logo-n.png', size: 512 },
        { name: 'logo-n-192.png', size: 192 },
        { name: 'logo-n-180.png', size: 180 },
        { name: 'logo-n-32.png', size: 32 },
    ];

    for (const { name, size } of targets) {
        const output = path.join(IMAGE_DIR, name);
        await sharp(logoSvg)
            .resize(size, size)
            .png({ compressionLevel: 9, adaptiveFiltering: true })
            .toFile(output);
        console.log(`Generated ${name}`);
    }
}

async function processImages() {
    for (const img of images) {
        await toWebp(img);
    }
    await buildLogos();
}

processImages().catch((err) => {
    console.error('Image optimization failed:', err);
});
