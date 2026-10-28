# Website image audit

Audited against Figma file `BJtOJGU3v6CgDwantuuEfX` on 2026-10-28.

| Page | Figma frame | Result |
| --- | --- | --- |
| Home | `1118:53` | All four project images are byte-identical to Figma. Corrected the hero video's aspect ratio to 750:781. |
| About | `1170:91` | No content images in either the page or design. Existing logos preserved. |
| Logistics CRM | `1528:23311` | Corrected hero and four screenshot backdrops using exact raw Figma image fills; restored 16px framing, 14px inner radii, fit modes, route screenshot crop, and image column widths. Corrected the status card to contain its image. Restored the static multiple-transports preview and placed the exact Figma video in its gallery slot. Video posters come from the matching source videos. |
| Production Line Simulator | `1618:353` | Existing image content, backgrounds, framing, and fit modes match; preserved. The hero's separately encoded local copy has the same content as the Figma source. |
| Martin Exam | `1715:435` | Corrected the core-flow weekly-task state, recommended-review state, reward-card image, vocabulary/listening sequence, three gallery backdrops, gallery heights, reward spacing, and review crop mode. Matching hero images preserved. |
| Product Growth | `1812:631` | Exact image sources preserved. Restored the exact static warning screenshot in place of the animated illustration overlay and corrected screen-slot heights and spacing. |

Inspected 103 Figma image-fill layers (including framing backgrounds) and three video fills. All required sources were found in project files or retrieved from Figma. No approximate substitutes were used.

Validation: HTML and CSS lint passed. Playwright checked all six pages in English and Russian at 1920, 1024, and 390 CSS pixels (36 combinations): no broken images, page errors, or horizontal overflow. Reviewed full-page and detailed image screenshots. Additional checks confirmed desktop CRM image-column dimensions, stacked tablet layout, and mobile image lightboxes.

Reference inventory, comparison renders, final screenshots, and the detailed verification results are retained in `.playwright-mcp/image-audit/` (ignored QA artifacts).
