# Portfolio — Zemfira Nurgaleeva

Static single-page portfolio site. No build step — npm is used only for linting.

## Run

Open `index.html` directly in a browser, or serve the folder:

```
python -m http.server 8000
```

Deploy by uploading the folder to any static host (GitHub Pages, Netlify, etc.).

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
- **Case-study links**: each project card has `href="#"` plus a
  `data-page="projects/<slug>.html"` hint. When you create the page,
  move the value into `href` and delete `data-page`.
- **Placeholders to fill in**: footer social links (`HANDLE`, `EMAIL`),
  hero showreel video (drop a file into `assets/video/` and swap the
  placeholder div for a `<video>` — the comment in `index.html` shows how).
- **Russian display font**: Barlow Semi Condensed has no Cyrillic, so
  `[lang="ru"]` swaps `--font-display` to Oswald (see `styles.css`).
