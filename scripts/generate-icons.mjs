/**
 * Rasterises src/app/icon.svg into the binary icons Next can't generate itself.
 *
 *   node scripts/generate-icons.mjs
 *
 * Outputs are committed — this only needs re-running when the mark changes.
 *
 * ponytail: leans on sharp, which arrives transitively via next. If that ever
 * stops being true, `npm i -D sharp` — the site doesn't depend on this script,
 * only on its committed output.
 */
import { Buffer } from "node:buffer";
import { strict as assert } from "node:assert";
import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const SVG = new URL("../src/app/icon.svg", import.meta.url);

/** Render at `size`, transparent. Density keeps small raster crisp. */
const render = async (svg, size) =>
  sharp(svg, { density: 512 }).resize(size, size).png().toBuffer();

/**
 * Render onto an opaque square with breathing room.
 * iOS composites a transparent apple-touch-icon onto BLACK, which would eat the
 * dark ring entirely — so these must be flattened, not transparent.
 */
const rendered = async (svg, size, padRatio) => {
  const pad = Math.round(size * padRatio);
  return sharp(svg, { density: 512 })
    .resize(size - pad * 2, size - pad * 2)
    .flatten({ background: "#ffffff" })
    .extend({
      top: pad,
      bottom: pad,
      left: pad,
      right: pad,
      background: "#ffffff",
    })
    .png()
    .toBuffer();
};

/**
 * Wrap a PNG in an ICO container. An .ico may embed PNG data directly
 * (Vista+, so every browser that matters) — no BMP encoding needed.
 * Layout: 6-byte header, one 16-byte directory entry, then the payload.
 */
function pngToIco(png, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: 1 = icon
  header.writeUInt16LE(1, 4); // image count

  const entry = Buffer.alloc(16);
  entry.writeUInt8(size % 256, 0); // width  (256 encodes as 0)
  entry.writeUInt8(size % 256, 1); // height
  entry.writeUInt8(0, 2); // palette size: 0 = truecolour
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // colour planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(header.length + entry.length, 12); // payload offset

  return Buffer.concat([header, entry, png]);
}

const svg = await readFile(SVG);

const ico = pngToIco(await render(svg, 32), 32);
await writeFile(new URL("../src/app/favicon.ico", import.meta.url), ico);

// Apple rounds the corners itself; ~9% padding keeps the mark off the radius.
await writeFile(
  new URL("../src/app/apple-icon.png", import.meta.url),
  await rendered(svg, 180, 0.09),
);

await writeFile(
  new URL("../public/icon-512.png", import.meta.url),
  await rendered(svg, 512, 0.09),
);

// The ICO byte layout is hand-rolled, so prove it round-trips: the directory
// entry must point at a real PNG signature.
const offset = ico.readUInt32LE(18);
const len = ico.readUInt32LE(14);
assert.equal(ico.readUInt16LE(2), 1, "ICO type should be 1");
assert.equal(offset, 22, "single-entry payload starts at byte 22");
assert.equal(offset + len, ico.length, "declared length should span the file");
assert.deepEqual(
  [...ico.subarray(offset, offset + 8)],
  [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],
  "payload should be a PNG",
);

const dims = await Promise.all(
  ["../src/app/apple-icon.png", "../public/icon-512.png"].map(async (p) => {
    const { width, height, channels } = await sharp(
      await readFile(new URL(p, import.meta.url)),
    ).metadata();
    return `${p.split("/").pop()} ${width}x${height} ${channels}ch`;
  }),
);

console.log(`favicon.ico 32x32 (${ico.length}B)`);
console.log(dims.join("\n"));
