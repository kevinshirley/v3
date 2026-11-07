// Prints resume/resume.html to public/resume.pdf with headless Chrome.
// Run with: npm run resume (set CHROME_PATH if Chrome isn't in the default macOS location).
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const chrome = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const source = fileURLToPath(new URL('./resume.html', import.meta.url));
const output = fileURLToPath(new URL('../public/resume.pdf', import.meta.url));

// A throwaway profile keeps this separate from any Chrome window that's already open.
const profile = mkdtempSync(join(tmpdir(), 'resume-chrome-'));

try {
  execFileSync(chrome, [
    '--headless=new',
    '--no-pdf-header-footer',
    `--user-data-dir=${profile}`,
    `--print-to-pdf=${output}`,
    pathToFileURL(source).href,
  ], { stdio: 'pipe' });
  console.log(`Wrote ${output}`);
} finally {
  rmSync(profile, { recursive: true, force: true });
}
