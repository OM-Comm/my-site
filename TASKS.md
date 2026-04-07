# SEO + GEO Implementation Tasks — omdigital.agency
Based on audit: `seo-geo-audit.md` · April 2026

**Legend:** ✅ Done · 🔄 In progress · ✅ Pending

---

## index.html

| # | Task | Status | Notes |
|---|---|---|---|
| 1 | Rewrite H1 to hybrid format | ✅ | `"Less Labor. More Flow. — AI Marketing Automation for Fintech & Crypto"` — tagline stays, keywords appended |
| 2 | Add canonical tag | ✅ | `<link rel="canonical" href="https://omdigital.agency/" />` |
| 3 | Improve hero image alt text | ✅ | `"AI marketing automation for fintech and crypto startups — OM Digital"` |
| 4 | Add visible FAQ section (4 Q&As) | ✅ | Written copy included; must be visible on page (no accordions); pairs with schema |
| 5 | Add JSON-LD schema block | ✅ | Organization + FAQPage + Person (Frankie Chan) |
| 6 | Add keywords meta tag | ✅ | `AI marketing automation, fintech marketing, crypto marketing, white label marketing, marketing automation agency` |

---

## dailysignals.html

| # | Task | Status | Notes |
|---|---|---|---|
| 7 | Reorder title tag | ✅ | `"Daily Signals: Automated Content Desk for Trading Platforms \| OM Digital"` |
| 8 | Add visible FAQ section (5 Q&As) | ✅ | Product-specific Q&As; visible on page; pairs with schema |
| 9 | Add JSON-LD schema | ✅ | FAQPage + Product schema |

---

## free-campaign.html

| # | Task | Status | Notes |
|---|---|---|---|
| 10 | Add noindex meta tag | ✅ | `<meta name="robots" content="noindex, follow">` — removes from Google index |
| 11 | Fix logo src | ✅ | Change `dailysignals.info/images/om-logo-black.png` → `https://omdigital.agency/images/om-logo-black.png` |
| 12 | Update copyright | ✅ | `© 2025` → `© 2026` |
| 13 | Fix invalid HTML | ✅ | `<br></br>` × 2 → `<br>` |
| 14 | Add canonical tag | ✅ | `<link rel="canonical" href="https://omdigital.agency/free-campaign.html" />` |

---

## New Files

| # | Task | Status | Notes |
|---|---|---|---|
| 15 | Create `sitemap.xml` | ✅ | Index + dailysignals URLs; submit to Google Search Console after deploy |
| 16 | Update `robots.txt` | ✅ | Add `Sitemap: https://omdigital.agency/sitemap.xml` |

---

## Blog

| # | Task | Status | Notes |
|---|---|---|---|
| 17 | Create `/blog/index.html` | ✅ | Listing page with 4 article stubs — structure + titles ready, content TBD |

### Blog article stubs to create

| Stub file | Title | Target keyword | Priority |
|---|---|---|---|
| `/blog/ai-marketing-automation-fintech.html` | What is AI Marketing Automation? A Guide for Fintech Founders | `AI marketing automation fintech` | 🔥 First |
| `/blog/white-label-marketing-automation.html` | White Label Marketing Automation: What It Is and Who It's For | `white label marketing automation` | 🔥 Second |
| `/blog/scale-crypto-marketing.html` | How to Scale Crypto Marketing Without Growing Your Team | `how to scale crypto marketing` | High |
| `/blog/frankie-chan-founder-story.html` | From Zero to $8M Monthly Volume in 90 Days: Building Crypto P2P at Speed | `crypto marketing case study` | High |

---

## Post-deploy (manual steps)

| Step | Notes |
|---|---|
| Submit sitemap to Google Search Console | `https://omdigital.agency/sitemap.xml` |
| Request re-indexing of index.html and dailysignals.html | Use GSC URL Inspection tool |
| Verify schema with Google Rich Results Test | `https://search.google.com/test/rich-results` |
| Check AI Overview appearance | Search target keywords in Google; note if AI Overview shows |

---

## Verification

| # | Task | Status |
|---|---|---|
| 18 | Final diff review of all changed files | ✅ |
