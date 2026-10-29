# Publishing this presentation

Recommendation checked on 28 October 2026: **GitHub Pages**, using the existing repository, `https://github.com/zemfnur/portfolio-site`, and publishing only the prepared `dist` files. The intended site URL is `https://zemfnur.github.io/portfolio-site/`. This validation did not publish anything, create a repository, change remotes, stage, commit, or push files.

## What the project needs

This is a static, six-page portfolio. There is no application server, database, API, npm runtime dependency, or framework build. JavaScript runs in the visitor's browser. The existing relative URLs work at both a domain root and a GitHub Pages project path.

`npm.cmd run prepare:deploy` creates `dist/` and a complete, per-file inventory in `deployment-manifest.json`. The current package has **136 files in 19 subdirectories**, totaling **57,101,082 bytes (54.46 MiB)**. Counting `dist` itself gives 20 directories. Of these files, 134 are content/license files totaling 57,101,042 bytes; `.nojekyll` is 0 bytes and `.portfolio-deploy-output` is 40 bytes. The largest file is `assets/video/hero.mp4`, exactly **19,514,725 bytes (18.61 MiB)**. Paths, spaces, Unicode filenames, and filename capitalization are preserved.

| Files | Purpose |
| --- | --- |
| `index.html`, `about.html` | Home and About pages |
| `projects/logistics-crm.html`, `production-line-simulator.html`, `martin-exam.html`, `case-4.html` | Four case studies; keep these inside `projects/` |
| `styles.css`, `main.js`, `projects/production-line-simulator.css` | Layout, responsive styles, EN/RU localization, saved language choice, lightbox, and other browser interactions |
| `assets/images/`, `assets/favicon/` | Referenced images, video posters, icons, favicon manifest and its icons |
| `assets/fonts/` | Eight font families, 13 font files, CSS declarations and eight SIL Open Font Licenses |
| `assets/video/hero.mp4` | Existing hero showreel, 18.61 MiB |
| `video/Transportation-Overview-topza-case1.mp4`, `video/Transportation - drivers.mp4` | Two existing CRM demo videos |
| Referenced files under `case-3/`, `case-4/`, `case_card_bg/` | Case-study images and project-card artwork |
| `gaming-animation/scene.css`, `scene.js`, `Background/`, `Card/`, `squirrel/run/` | Animation styles, code, four backgrounds, four card images and eight squirrel frames |
| `.nojekyll` | Keeps GitHub Pages serving these prepared files without Jekyll processing |

The manifest lists every required individual file; the folders above can contain additional source files which are deliberately excluded from `dist`. The animation preview, source artwork, Figma exports, QA screenshots, Git history, local settings, `node_modules`, and development notes are not part of the public upload.

Originally, the pages fetched fonts from `fonts.googleapis.com` and `fonts.gstatic.com`. These have been replaced with local copies of the same families and requested weights: Barlow Semi Condensed 400/600, Inter 400/600/700, Oswald 400/600, DM Mono 400/500, DM Sans 400, JetBrains Mono 400, Lato 400, and Rubik Dirt 400. Latin and Cyrillic remain available in the fonts that support them; the existing Oswald display-font substitution for Russian remains intact.

The Case 4 repair restores the existing animation's missing scene layers, localized copy, and pause/resume button. A 375 × 849 SVG keeps the warning screen intact and overlays the supplied 375 × 378 scene at y=183. The original screenshot remains the loading/error fallback and lightbox source. The existing deferred `scene.js` mounts automatically; its timelines, assets, visibility handling, and reduced-motion behavior were not changed.

The only remaining external URLs are outgoing contact links to LinkedIn and Telegram. The presentation itself does not depend on those sites loading. LinkedIn access in Russia should not be relied on; it is an outgoing destination, not a hosting dependency.

`package.json` / `package-lock.json` describe development lint tools only. They are not uploaded. Repackaging uses Node.js built-ins and requires no dependency installation or internet connection. Refreshing fonts is a separate, optional maintenance command, `node scripts/vendor-fonts.cjs`, which requires internet access.

## Provider comparison

All three services can serve this project's HTML, CSS, browser JavaScript, images, local fonts, animations and videos over HTTPS at a free provider subdomain. None requires buying a domain. Hosting cannot override a browser's autoplay restrictions, reduced-motion preferences, or an ISP's filtering.

| Provider | Free public URL and workflow | Relevant limitations | Assessment |
| --- | --- | --- | --- |
| **GitHub Pages** | `https://zemfnur.github.io/portfolio-site/`; publish the prepared artifact from the existing repository | GitHub Free requires a public repository. Published site maximum 1 GB; soft bandwidth limit 100 GB/month; soft 10 builds/hour for branch publishing. Browser uploads: 25 MiB/file, 100 files/batch. | **Best overall for this static portfolio.** Current files fit browser upload limits; higher bandwidth allowance is useful for the hero video. |
| **Netlify Free** | `https://NAME.netlify.app`; direct folder upload or GitHub integration | 300 shared credits/month; production deploy 15 credits, bandwidth 20 credits/GB, requests 2 credits/10,000. Free sites pause on credit exhaustion. Drop guidance recommends under 50 MB and warns files over 10 MB may stall. | Easiest direct upload interface, but this 54.46 MiB package with an 18.61 MiB file exceeds its recommended browser-upload sizes. Prefer GitHub integration or CLI for this project. |
| **Vercel Hobby** | `https://NAME.vercel.app`; GitHub integration or CLI | Personal/non-commercial use only; published fair-use guidance includes up to 100 GB/month fast data transfer. CLI source upload maximum 100 MB on Hobby. Advertising design services may fall within its commercial-use definition. | Technically supports the files, but weaker fit because of the commercial-use restriction and documented Turkish blocking history. |

Sources: [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits), [free/public repository availability and publishing settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [GitHub upload limits](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository), [Netlify credit rates and pausing](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/how-credits-work/), [Netlify Drop guidance](https://docs.netlify.com/start/quickstarts/netlify-drop-quickstart/), [Vercel fair use](https://vercel.com/docs/limits/fair-use-guidelines), [Vercel upload limits](https://vercel.com/docs/limits).

For scale, Netlify's first production deploy leaves 285 credits: less than 14.25 GB of transfer once request usage is counted. At this package's uncompressed size, that is fewer than roughly 250 complete site downloads. Real visits vary greatly because of browser caching, video range requests, and which pages visitors open. GitHub's 100 GB allowance is a soft limit, not unlimited video hosting.

GitHub Pages is intended for personal/project sites; its restrictions on running an online business, e-commerce, or commercial SaaS still apply. This project is a portfolio without checkout or server-side services. If its purpose changes, reassess the host's terms.

## Access in Russia, Europe and Turkey: evidence and limits

There is no verified country-wide availability guarantee for any candidate. The final URL cannot be tested before publishing; this preparation did not deploy a test site or perform live in-country measurements.

| Region | Evidence | What it establishes |
| --- | --- | --- |
| Russia | A [published first-hand measurement report](https://htmlkin.ru/articles/netlify-vercel-github-pages-dostup-iz-rossii), dated 14 August 2026, reports successful HTTPS checks on 6 August for example `github.io`, `netlify.app` and `vercel.app` sites from three Russian data-center nodes. | Some access worked at that time. This is a small, dated sample from data centers, not a test of residential/mobile networks or your future URL. It cannot rank national reliability. |
| Russia | A [Vercel user report](https://community.vercel.com/t/custom-domain-response-bodies-stall-in-russia-while-vercel-app-works-on-the-same-ips/49387) gives September 2026 measurements where a custom domain stalled but its `vercel.app` URL loaded on the same connection. | Hostname and network matter. A working provider homepage, dashboard, or custom domain does not prove another hostname works. This is a user report, not a provider-wide diagnosis. |
| Europe | The August report used German and Dutch control nodes and reported no failures there. | Limited positive evidence for two European countries on those dates, not all of Europe or every ISP. |
| Turkey | [EngelliWeb / Freedom of Expression Association](https://ifade.org.tr/engelliweb/vercel-erisime-engellendi-2/) documented a BTK block of `vercel.app` on 27 March 2024 and a previous block in December 2023. | Concrete blocking history makes Vercel's free hostname a poor default for this audience. The historical order does not establish its current enforcement on every Turkish ISP. |
| Turkey | No sufficiently current, direct measurements establishing access to the relevant GitHub Pages and Netlify site hostnames were found in this research. | Their present availability remains **unverified**, not confirmed accessible and not confirmed blocked. Test the actual published hostname locally. |

Cloudflare Pages is not a preferred alternative for this particular audience: [Cloudflare documented ISP throttling in Russia](https://blog.cloudflare.com/russian-internet-users-are-unable-to-access-the-open-internet) in June 2025, including transfers stopping around 16 KB. This is evidence about Cloudflare services; it is not proof that GitHub Pages, Netlify or Vercel are affected in the same way.

The GitHub Pages recommendation is based on the project's technical fit, generous free bandwidth, and straightforward workflow. It is not a claim that GitHub is proven more accessible nationally than Netlify. If tested visitors cannot reach GitHub Pages, use a separately tested Netlify mirror; a second hostname may help but cannot guarantee access during wider restrictions.

## Prepare and preview locally

Run these commands in the existing project directory:

```powershell
npm.cmd run prepare:deploy
node scripts/validate-deploy.cjs
python -m http.server 8000 --bind 127.0.0.1 --directory dist
```

Open `http://127.0.0.1:8000/projects/case-4.html` to preview the prepared package. To preview source files instead, use `python -m http.server 8000 --bind 127.0.0.1` from the project root. Stop the server with Ctrl+C. Use `npm.cmd` because this Windows environment blocks the `npm.ps1` wrapper.

## Future publishing in the existing repository

Use `zemfnur/portfolio-site`; no additional repository or remote change is needed. Publishing is a separate future action. No Pages workflow or repository settings were created or changed during this repair.

For a source repository, use a GitHub Pages Actions workflow that checks out the source, sets up Node.js, runs `npm run prepare:deploy` and `node scripts/validate-deploy.cjs`, and uploads **only `dist/`** as the Pages artifact before deployment. Select **Settings → Pages → Build and deployment → Source: GitHub Actions** when ready to configure publishing. The deployment job needs Pages write and OIDC token permissions and the `github-pages` environment. See [GitHub's custom workflow instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages). This workflow still needs to be configured and reviewed before publishing.

The artifact root must contain `index.html` and all prepared subfolders. Keep `.nojekyll`; `.portfolio-deploy-output` is a harmless local marker and can be omitted. Do not copy the prepared files over the source branch or publish the whole working directory. `dist/` is generated and ignored by Git; an Actions workflow builds it from the reviewed source.

For an intentionally configured branch-based publication instead, the prepared contents must be at that publishing branch's root (or `/docs`), not inside a `dist` folder. The correct browser-upload inventory, if needed, is 81 files in batch 1 (`assets/`: 71, `projects/`: 5, four root content files and `.nojekyll`) and **54** in batch 2 (`case-3/`: 27, `case-4/`: 6, `case_card_bg/`: 1, `gaming-animation/`: 18, `video/`: 2). That is 135 public files with the local marker omitted, or 136 with it included. No branch was created during this repair.

The intended published address is `https://zemfnur.github.io/portfolio-site/`. Test that exact URL after a separately authorized publication. Do not use Git LFS for the current videos; they fit normal Git limits, and GitHub Pages does not serve Git LFS content.

## Netlify alternative

If keeping the source repository private is important, or GitHub Pages fails audience testing, use Netlify Free with a GitHub repository containing the **prepared contents** at its root. Sign in yourself, choose **Add new project → Import an existing project → GitHub**, select that repository, choose no framework, leave the build command empty, and set the publish directory to `.`. No environment variables or domain purchase are needed. Its assigned `netlify.app` URL is shareable. Updates to that repository trigger production deploys and consume credits.

For a direct upload, sign in first and visit [Netlify Drop](https://app.netlify.com/drop). Drag the `dist` folder there. Its current size exceeds Netlify's recommended browser-upload guidance, so this is an alternative to try, not the recommended reliable path. If it stalls, switch to Git import instead of removing required videos. Keep the Free plan and monitor Usage & billing; when credits run out, sites pause until the next cycle or a plan change.

## Validation and regional acceptance

Preparation and `node scripts/validate-deploy.cjs` pass: all 193 discovered local HTML/CSS/SVG/manifest and runtime-animation references resolve with exact filename case beneath `https://zemfnur.github.io/portfolio-site/`. This is offline URL resolution against the prepared files, not a claim that the unpublished remote URL responds. Every inventory file matches its source by SHA-256. The package includes exactly six HTML pages, three MP4 videos, 13 font files, eight font licenses, and 97 image/icon files, including all 16 animation images plus the animation script and stylesheet. There are no missing files or preparation warnings. HTML lint, existing CSS lint, animation CSS lint, and JavaScript syntax checks pass. Earlier binary font checks verified Latin glyphs in all 13 font faces and Cyrillic in Inter and Oswald.

Local browser testing passed in headless Chrome 156.0.8078.48 using an isolated temporary profile and a local server under `/portfolio-site/`. All 134 content/license files transferred completely with HTTP 200 and the expected byte lengths. At widths 1920, 1280, 1024, 720 and 390 pixels, in both EN and RU, Case 4 mounted 32 decoded image instances and 20 animation tracks without overflow or panel clipping. Pointer pause/resume, keyboard activation, advancing/resuming timelines, stable paused timelines, reduced-motion suppression and restoration, offscreen pausing, localized scene/control text, and the existing illustration lightbox all passed. Desktop and mobile screenshots were inspected. There were no browser console errors, uncaught page errors, failed requests, or HTTP error responses during the test. The local test script and screenshots are retained under ignored `.playwright-mcp/` (`validate-case4-deployment.cjs`, `deploy-case4-*.png`); they are excluded from `dist`.

Live publishing, video playback on visitor devices, and country/ISP acceptance tests remain outstanding. Complete local file transfers establish package integrity, not end-user playback or regional availability.

After publishing, use desktop and mobile browsers, without a VPN, on at least one home and one mobile connection in Russia and Turkey and in the European countries your visitors actually use. An HTTP 200 for the homepage is not enough:

- Open all six pages, including a case-study URL directly; refresh each nested URL.
- Switch EN/RU, navigate to another page, and confirm the saved choice, Cyrillic typography and line wrapping.
- Play the hero and two CRM videos; check that playback continues beyond the first few seconds. Muted autoplay may still be restricted by browser/device policies.
- Open an illustration lightbox, close it, follow section anchors and project navigation, and check the layout on a phone.
- Scroll to the case-4 animation, check its backgrounds/card/squirrel images, and pause/resume it. Reduced-motion mode deliberately suppresses animation.
- Check DevTools → Network for failed or stalled HTML, CSS, JavaScript, image, font and video requests, and Console for errors. In particular, check complete large-file transfers rather than only response status.
- Test outgoing contact links separately; failure of an external service does not mean the presentation host failed.

Tools such as [Check-Host](https://check-host.net/) can supplement these checks, but data-center results do not replace tests on visitor networks. A global provider status page is not evidence of regional reachability. Browser rendering, playback and live regional acceptance remain to be checked on the final published URL.
