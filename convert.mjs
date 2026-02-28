import sharp from 'sharp';
import fs from 'fs';

const images = ['about', 'hero', 'product1', 'product2', 'product3'];

async function processImages() {
    for (const img of images) {
        if (fs.existsSync(`public/images/${img}.png`)) {
            await sharp(`public/images/${img}.png`)
                .webp({ quality: 80 })
                .toFile(`public/images/${img}.webp`);
            console.log(`Converted ${img}.webp`);
            fs.unlinkSync(`public/images/${img}.png`);
        }
    }
}

processImages().catch(console.error);
