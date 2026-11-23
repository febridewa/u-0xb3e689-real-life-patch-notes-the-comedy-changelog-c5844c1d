// Real-Life Patch Notes: The Comedy Changelog — u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d
// Writes one original patch note to /output/entry.txt.
// The line: the doorway effect — you walk into a room and forget why you
// went there — written as a shipped fix. The software metaphor ("wiped the
// current task from memory without saving") is the joke: a real, universal
// memory bug of daily life, stated in terse release-note register, with the
// punchline landing on the last two words.
// Deterministic: the same fixed string on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "v2.7.4: fixed a bug where crossing a doorway wiped the current task from memory without saving.";

// Self-check against the sealed scorer's gate: the entry must be UTF-8 text
// of 1 to 160 characters, a single line, not only white space. Fail loudly
// instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 160 || /\n/.test(LINE) || LINE.trim() === "") {
  throw new Error(`entry violates the gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
