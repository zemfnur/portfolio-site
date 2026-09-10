# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Zemfira Nurgaleeva (UX/UI designer). Static single page — `index.html`, `styles.css`, `main.js` — with no build step; deployed by uploading the folder to any static host. npm exists only for linting, not for building.

## Commands

Serve locally (prefer over opening `index.html` directly — localStorage and the i18n script behave over http):

```
python -m http.server 8000
```

Lint:

```
npm run lint        # both
npm run lint:html   # html-validate index.html
npm run lint:css    # stylelint styles.css
```

When a new HTML file is added (e.g. case-study pages), add it to the `lint:html` glob in `package.json`.

## Visual QA workflow

- **Figma is the source of truth.** The page implements frame "Main-1920" (1920×2740) faithfully. Read measurements, variables, and screenshots via the Figma MCP (`get_design_context`, `get_screenshot`). CSS tokens in `:root` mirror Figma variables — when the design changes, update tokens first, then the layout that uses them.
- **Verify rendering with Playwright MCP** against the local server: screenshot at 1920×1080 (design size) and a mobile viewport, in **both languages** (toggle with the "Русский язык" button; the choice persists in `localStorage`, so clear it or click twice when switching).
- **Hero invariants** (regression-prone, keep true at any viewport): the hero fits the first viewport (`100svh`, no initial scroll) and the hero links sit flush on the video's bottom edge. `.hero__media`'s `max-height` calc and the two `--hero-*` clamp tokens in `:root` are a coupled single-source-of-truth — change them together.
- `.verify-hero.html` is a headless numeric harness that reports hero-fit + link/video alignment (usage comment inside).

## Architecture

Three-file static site:

- `index.html` — all markup; English copy lives as the default text in the markup itself.
- `main.js` — the only script: the EN/RU language switch plus the case-study illustration lightbox (`img[data-lightbox]` → `.lightbox` overlay). Russian strings live in `STRINGS` there. To make text translatable: give the element `data-i18n="key"` (or `data-i18n-alt` / `data-i18n-arialabel` for attributes) and add the key to both language dicts. The switch button label always shows the language you'd switch *to*.
- `styles.css` — all styles. Desktop-first; breakpoints at 1024px (hero stacks, single column) and 720px. BEM class names (enforced by stylelint).
- `projects/*.html` — case-study pages (`logistics-crm.html` implements Figma "Portfolio-case1", `production-line-simulator.html` implements "Portfolio-2"). Both share the case-study component styles in `styles.css` (`.case-hero`, `.scenario`, `.result`, …). i18n keys in `main.js` are global: case-1 keys are unprefixed (`caseTitle`…), case-2 keys are prefixed (`case2…`, `c2…`, `m…`, `uf…`) — a future case 3 needs its own prefix.

Non-obvious constraints:

- **Russian display font swap**: Barlow Semi Condensed has no Cyrillic, so `[lang="ru"]` swaps `--font-display` to Oswald and tightens `.hero__display` tracking so the RU title stays on one line. Any change to display type must be checked in both languages.
- **Hero is height-driven**: `.hero__grid` is flex (not grid) so the video scales to the hero height instead of its intrinsic 781px stretching the page. Don't switch it to CSS grid casually.

## Intentional placeholders

Don't "fix" these; they're awaiting real content:

- The "Contacts" link in the case-study page headers still points at `mailto:EMAIL@EXAMPLE.COM` (the footer contacts are real: LinkedIn/Telegram links plus the clipboard-copy email button — `.footer__copy` in `main.js`).
- Hero showreel is poster-only: `assets/video/hero.mp4` doesn't exist yet, so the exported poster shows. Keep the `<video>` and its `autoplay`/`muted` (there's an inline html-validate disable for it).

## Tooling notes

- stylelint enforces the BEM `block__element--modifier` pattern and `prefix` media-query notation (`(max-width: …)`, matching the desktop-first approach); `no-descending-specificity` is off because the `[lang="ru"]` overrides deliberately sit at the top with the tokens.
- html-validate is v9: inline disable directives **require square brackets** — `<!-- [html-validate-disable-next rule] -->`. The bracketless form documented on the website is v10+ and silently does nothing here.
