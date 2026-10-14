#!/usr/bin/env node
/**
 * Downloads the chosen stock photo for every image slot into src/assets/images/,
 * cropped to the exact size the layout expects, and writes IMAGE-CREDITS.md.
 *
 *   npm run images              # download all slots
 *   npm run images -- living-1  # download only slots whose file name contains "living-1"
 *
 * Choices live in scripts/images.json ("choice" = index into "options").
 * Review and change them visually with scripts/image-review.html.
 * Photos are from Unsplash (free for commercial use under the Unsplash License).
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const outDir = path.join(root, "src", "assets", "images");
const filter = process.argv[2];

const slots = JSON.parse(await readFile(path.join(here, "images.json"), "utf8"));
await mkdir(outDir, { recursive: true });

const credits = [];
let failed = 0;

for (const slot of slots) {
  const pick = slot.options[slot.choice ?? 0];
  credits.push(`- \`${slot.file}\` — ${pick.desc}. Photo by ${pick.by} on Unsplash: ${pick.page}`);
  if (filter && !slot.file.includes(filter)) continue;

  const url = `${pick.src}?w=${slot.width}&h=${slot.height}&fit=crop&crop=entropy&q=80&fm=jpg`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const type = res.headers.get("content-type") ?? "";
    if (!type.startsWith("image/")) throw new Error(`unexpected content-type ${type}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(path.join(outDir, slot.file), buf);
    console.log(`✓ ${slot.file.padEnd(20)} ${(buf.length / 1024).toFixed(0).padStart(5)} KB  ${pick.by}`);
  } catch (err) {
    failed++;
    const hint = String(err.message).startsWith("HTTP")
      ? "this photo may have been removed — pick another option for this slot in scripts/images.json"
      : "check your internet connection and run again";
    console.error(`✗ ${slot.file}: ${err.message} — ${hint}`);
  }
}

await writeFile(
  path.join(root, "IMAGE-CREDITS.md"),
  `# Image credits\n\nStock photography from Unsplash, used under the Unsplash License (free for commercial use; attribution appreciated, not required).\nReplace with Elite Home Concepts' own photography as it becomes available.\n\n${credits.join("\n")}\n`,
);

console.log(failed ? `\nDone with ${failed} failure(s).` : "\nAll images downloaded. Restart `npm run dev` to see them.");
process.exitCode = failed ? 1 : 0;
