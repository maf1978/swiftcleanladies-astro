# Site structure — Swiftclean Ladies

**Domain:** https://www.swiftcleanladies.com  
**Stack:** Astro (static) + Cloudflare Workers Assets

## Information architecture

```
/                                 Home
/about/                           About
/contact/                         Contact + GHL webhook form
/services/                        Services hub
/services/{service}/              6 service pages
/services/{area}/{service}/       24 local combo pages
/areas/                           Areas hub
/areas/{area}/                    4 city pages
/blog/                            Blog hub
/blog/{slug}/                     3 posts
```

## Service areas

Crawfordville · Saint Marks · Tallahassee · Panacea (FL)

## Discovery files

| File | Role |
|------|------|
| `/robots.txt` | Crawl rules + Sitemap directive |
| `/sitemap-index.xml` | Sitemap index |
| `/sitemap-0.xml` | URL set (43 locs) |
| `/sitemap.xml` | 301 → sitemap-index.xml |
| `/247e6cf6febe444baa90514c4a49a1ee.txt` | IndexNow ownership key |

## Notes

- Trailing slashes required (`trailingSlash: 'always'`).
- No invented prices; quote-first CTAs.
- GHL chat widget + GA4 on all pages.
