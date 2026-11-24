// warning-label-for-humans: writes one safety warning label for every
// human being to /output/entry.txt for the make.fun bounty
// u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "WARNING: This human requires food, sleep, and validation before functioning.";

const MAX_CODE_POINTS = 160;

function codePoints(text: string): number {
  return [...text].length;
}
function validate(text: string): void {
  const count = codePoints(text);
  if (count < 1 || count > MAX_CODE_POINTS) {
    throw new Error(
      `entry must be 1-${MAX_CODE_POINTS} code points, got ${count}`,
    );
  }
  if (!text.trim()) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
validate(LINE);
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${codePoints(LINE)} code points to ${outPath}`);
