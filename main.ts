import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fortune-cookie candidates drafted from zero (clean-room, no kit examples):
// 1. "Your future self is already debugging the shortcut you are about to take."
//    True, but the shortcut trope is familiar; the turn is thin.
// 2. "The bug hides not in the code you wrote, but in the code you assumed."
//    Strong parallel structure, but "the code you assumed" reads oddly on first pass.
// 3. "Legacy code is yesterday's clever idea, still clocking in today."
//    Nice "clocking in" double meaning, but "yesterday's clever idea" is a known framing.
// 4. "The estimate you gave in the meeting was a wish wearing a number."
//    Fresh image, but more of an observation than a fortune.
// 5. "Every 'temporary' fix has already signed a lease in your codebase."
//    WINNER: one balanced sentence, lands in a single breath; true for every
//    tired senior engineer (temporary fixes never leave); the lease metaphor is
//    a turn nobody has heard before; quiet double meaning — a "temporary" thing
//    signing a lease is a contradiction that rewards a second read, and
//    "signed" quietly echoes signing a contract (and a commit).
const line =
  "Every 'temporary' fix has already signed a lease in your codebase.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Guard: the gate requires 1-120 chars, one line, no trailing newline.
// Fail loudly here rather than shipping a silently invalid entry.
if (line.length === 0 || line.length > 120 || line.includes("\n")) {
  throw new Error(`entry line invalid: ${line.length} chars`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
