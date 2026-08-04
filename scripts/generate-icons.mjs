import sharp from "sharp";
import { promises as fs } from "node:fs";
import path from "node:path";

const outDir = path.resolve("public");
const masterSvg = path.resolve("public/icons/icon.svg");

async function generate() {
  const svgBuffer = await fs.readFile(masterSvg);

  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(outDir, "apple-touch-icon.png"));

  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(outDir, "android-chrome-192x192.png"));

  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(outDir, "android-chrome-512x512.png"));

  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.join(outDir, "favicon-16x16.png"));

  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(outDir, "favicon-32x32.png"));

  const sizes = [16, 32, 48];
  const pngBuffers = [];
  for (const size of sizes) {
    pngBuffers.push(await sharp(svgBuffer).resize(size, size).png().toBuffer());
  }
  await writeIco(path.join(outDir, "favicon.ico"), sizes, pngBuffers);

  console.log("Favicon assets generated successfully.");
}

async function writeIco(filePath, sizes, pngBuffers) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(sizes.length, 4);

  const entries = [];
  let offset = 6 + sizes.length * 16;
  for (let i = 0; i < sizes.length; i++) {
    const size = sizes[i];
    const png = pngBuffers[i];
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(png.length, 8);
    entry.writeUInt32LE(offset, 12);
    entries.push(entry);
    offset += png.length;
  }

  const ico = Buffer.concat([header, ...entries, ...pngBuffers]);
  await fs.writeFile(filePath, ico);
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});