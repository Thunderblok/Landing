# OKO Holding Corporation — Typography

**Last reviewed:** 2026-10-16

## Font system

Two faces, one each for display and UI:

- **Display serif — Fraunces** (`Fraunces[SOFT,WONK,opsz,wght].woff2`)
  Variable axes: SOFT, WONK, opsz, wght. Italic variant included.
  Used for headlines, hero copy, section titles, display quotes.

- **UI sans — Inter** (`Inter-roman.var.woff2`)
  Variable axis: wght (roman only).
  Used for body text, UI controls, metadata, code callouts, and most prose.

- **Code — system monospace stack**
  `ui-monospace, "SF Mono", "Cascadia Code", "Courier New", monospace`
  Used for code blocks, module names, atoms, SHA fingerprints.

## Licence

Both fonts ship under the SIL Open Font License 1.1. The `OFL.txt` file in each font subdirectory is the authoritative licence text. Editorial reuse permitted; redistribution requires preserving the OFL.

## Usage guidance

- Fraunces at 48–96px for display headlines. opsz axis is tuned for larger sizes.
- Inter at 15–17px for body copy. Line-height 1.5–1.65.
- When pairing: lead with Fraunces for the editorial feel, body in Inter for readability.
- Monospace only for technical identifiers; never for prose.

## Where to find the live versions

Loaded on https://okoholding.com from `/assets/vendor/fonts/{fraunces,inter}/*.woff2` with preload hints on key pages. Each page's token sheet (`/assets/brand/oko-tokens.css`) declares `@font-face` with `font-display: swap`.
