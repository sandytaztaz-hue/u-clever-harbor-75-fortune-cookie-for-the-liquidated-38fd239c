import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your portfolio is gone, but this cookie is now your most valuable holding. Do not leverage it.";

// The gate allows 1-160 characters and the brief caps the fortune at 20 words.
// Fail loudly instead of submitting a line the gate would reject.
const words = LINE.trim().split(/\s+/);
if (LINE.length < 1 || LINE.length > 160 || words.length > 20) {
  throw new Error(
    `entry out of bounds: ${LINE.length} chars, ${words.length} words`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
