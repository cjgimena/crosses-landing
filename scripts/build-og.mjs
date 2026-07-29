#!/usr/bin/env node
/* Render brand/og.html to og.png at 1200×630 with headless Chrome.
 *
 * The social card is a static asset, but it's built from a real HTML template
 * (brand/og.html) so it stays editable and on-brand rather than being a binary
 * nobody can change. Fonts are vendored under brand/fonts, so the render needs
 * no network. Re-run after editing the template:
 *
 *     node scripts/build-og.mjs
 *
 * Requires Google Chrome (or set CHROME to another Chromium binary).
 */
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const src = resolve(root, 'brand/og.html');
const out = resolve(root, 'og.png');

const CHROME = process.env.CHROME ||
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

execFileSync(CHROME, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--force-color-profile=srgb',
  '--window-size=1200,630',
  '--default-background-color=00000000',
  `--screenshot=${out}`,
  // Advance virtual time so the vendored webfonts are parsed and laid out before
  // the one-shot screenshot fires.
  '--virtual-time-budget=4000',
  `file://${src}`,
], { stdio: 'inherit' });

console.log(`Wrote ${out} (1200×630)`);
