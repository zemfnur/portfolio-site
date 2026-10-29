# Portfolio — Zemfira Nurgaleeva

Static single-page portfolio site. No build step — npm is used only for linting.

## Run

Open `index.html` directly in a browser, or serve the folder:

```
python -m http.server 8000
```

For the hosting comparison, regional access evidence and publishing steps, see
[DEPLOYMENT.md](DEPLOYMENT.md). The recommended provider is GitHub Pages.

Prepare a clean upload folder without publishing anything:

```
npm.cmd run prepare:deploy
```

Upload only the contents of `dist/`. `deployment-manifest.json` lists every
required file and external URL. Fonts are self-hosted in `assets/fonts/`.

## Lint

```
npm install
npm run lint        # html-validate + stylelint
```

## Structure

- `index.html` — page markup; English copy lives here, Russian in `main.js`
- `styles.css` — all styles, design tokens at the top
- `main.js` — EN/RU language switch (strings + toggle logic)
- `assets/` — images, icons, favicon

## Conventions

- **Language switch**: the "Русский язык" link in the hero toggles EN/RU.
  Choice persists in `localStorage`. To add translatable text, give the
  element a `data-i18n="key"` attribute and add the key to both language
  dicts in `main.js` (also `data-i18n-alt` / `data-i18n-arialabel` for
  attributes).
- **Case-study links**: project cards link to the four HTML pages in `projects/`.
- **Media**: the hero showreel is `assets/video/hero.mp4`; two CRM demo clips
  live in `video/`. Keep their poster images as loading/autoplay fallbacks.
- **Russian display font**: Barlow Semi Condensed has no Cyrillic, so
  `[lang="ru"]` swaps `--font-display` to Oswald (see `styles.css`).
- **Russian typography**: `main.js` applies non-breaking spaces after common
  short Russian prepositions, conjunctions and particles when applying RU.
  It processes text nodes across inline formatting and links, stopping at
  block boundaries. Code, editable fields and explicitly non-Russian elements
  are excluded. Use `data-typography="off"` for a text block that must retain
  literal spacing. Switching back to EN restores spaces before localization.
