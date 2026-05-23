# hairbyyodit

Source for [hairbyyodit.com.au](https://hairbyyodit.com.au) — Yodit Hailu, Adelaide mobile hairdresser. Cuts, colour, weddings.

Single-page static site. No build step. Deployed automatically to Vercel on push to `main`.

## Structure

- `index.html` — the page
- `styles.css` — full styling, responsive, reduced-motion handled
- `main.js` — vanilla, IntersectionObserver-driven price-reveal stagger + hero stagger
- `assets/` — logo SVGs (wordmark + monogram) and the preview file

## Logo

- `assets/logo.svg` — primary wordmark
- `assets/logo-mark.svg` — monogram (for favicon, social profile)
- `assets/logo-mono.svg` — monochrome variant
- `assets/logo-preview.html` — preview at multiple sizes / backgrounds

## Known placeholders (preview deploy)

This is a preview. Not yet final: phone number, email, form action, OG image, real Instagram captions, and /privacy + /terms pages.

## Source of truth

This repo is a deploy artefact. The full project — strategy, style guide, brand decisions, decisions ledger — lives in the Writers Block website-engine repo and is not public.
