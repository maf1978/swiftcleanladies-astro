# Sitemap validation — Swiftclean Ladies

**Site:** https://www.swiftcleanladies.com  
**Checked:** 2026-07-21  
**Generator:** `@astrojs/sitemap` → `sitemap-index.xml` + `sitemap-0.xml`

## Summary

| Check | Result |
|-------|--------|
| Valid XML | Pass |
| URL count | 43 (under 50k limit) |
| HTTPS only | Pass |
| HTTP 200 for all locs | Pass (43/43) |
| No `<priority>` / `<changefreq>` | Pass (omitted; ignored by Google) |
| `<lastmod>` present | Fixed — blog posts use publish dates; other pages use build date |
| robots.txt Sitemap | Pass → `sitemap-index.xml` |
| `/sitemap.xml` | Fixed — 301 → `/sitemap-index.xml` via `_redirects` |
| Non-canonical / noindex in sitemap | Pass (none found) |
| IndexNow key file in sitemap | Pass (excluded) |

## Issues addressed

| Issue | Severity | Action |
|-------|----------|--------|
| Missing `<lastmod>` | Low | Added via `serialize()` in `astro.config.mjs` |
| `/sitemap.xml` 404 | Medium | Added `public/_redirects` 301 to index |

## URL inventory (43)

- Core: `/`, `/about/`, `/contact/`, `/services/`, `/areas/`, `/blog/`
- Areas (4): Crawfordville, Saint Marks, Tallahassee, Panacea
- Services (6): recurring, one-time, deep, commercial, new-construction, home organization
- Combos (24): 6 services × 4 areas
- Blog posts (3)

## Recommendations

1. Resubmit sitemap in Bing Webmaster Tools and Google Search Console after deploy.
2. Re-run IndexNow batch when content changes materially.
3. Update `blogLastmod` in `astro.config.mjs` when adding or editing blog posts (or automate from frontmatter later).
