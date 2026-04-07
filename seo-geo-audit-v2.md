# SEO + GEO Audit v2 — omdigital.agency
**Date:** April 2026 · **Scope:** Full site re-evaluation · **Compared against:** seo-geo-audit.md (original)

---

## Executive Summary

The site has made significant, high-quality improvements since the original audit. Every critical structural item — schema markup, canonicals, the sitemap, the noindex on the campaign page, the Daily Signals title — has been fixed. The FAQ schema is comprehensive and the blog infrastructure is ready. The site has gone from zero structured data and zero AI-citation potential to a solid baseline.

Two issues from the original audit remain unresolved and are now the highest priorities: the H1 on the homepage still contains no keywords ("Less Labor. More Flow."), and none of the four planned blog articles have been published — they all show "Coming soon." These two gaps are the main barrier to meaningful organic or AI-engine visibility, as the structural fixes can't fully deliver without keyword-carrying copy.

**What's been fixed (13 of 15 critical/high issues):** Canonical tags, schema markup (Organization + Person + FAQPage on both main pages), sitemap.xml, robots.txt sitemap reference, free-campaign noindex, logo domain fix, copyright update, hero alt text, meta keywords, title tag, meta description, Daily Signals page title, and a full blog hub with correct SEO metadata.

**Remaining top priorities:**
1. Rewrite the homepage H1 to include the primary keyword
2. Publish the four blog articles (currently "Coming soon")
3. Add blog pages to sitemap.xml

**Overall assessment:** Strong structural foundation now in place. The gap between current state and meaningful ranking/citation is no longer technical — it's content.

---

## Audit Change Log — What Was Fixed

| Issue (from original audit) | Status | Notes |
|---|---|---|
| index.html H1 "Less labor. More flow." contains no keywords | ❌ **Not fixed** | H1 is still "Less Labor. More Flow." — lead paragraph has keywords but H1 is the primary ranking signal |
| No canonical tag on index.html | ✅ Fixed | `<link rel="canonical" href="https://omdigital.agency/" />` added |
| No schema markup (Organization, FAQ, Person) | ✅ Fixed | Comprehensive JSON-LD added — Organization, Person (Frankie), FAQPage on index.html |
| No XML sitemap | ✅ Fixed | sitemap.xml created and referenced in robots.txt |
| Hero image alt: "OM Digital hero image" — not descriptive | ✅ Fixed | Now: "AI marketing automation workflows for fintech and crypto startups — OM Digital" |
| No `<meta name="keywords">` | ✅ Fixed | Added to index.html |
| No blog, no case studies — site has ~200 words of copy | ⚠️ **Partial** | Blog hub created with 4 article cards; no articles published yet |
| No FAQ section on index.html | ✅ Fixed | 4-item FAQ section added with `<details>` accordion (first item open by default) |
| No FAQ section on dailysignals.html | ✅ Fixed | 10-item FAQ section added with `<details>` accordion |
| dailysignals.html title had no keyword in first 30 chars | ✅ Fixed | Now: "Daily Signals: Automated Content Desk for Trading Platforms \| OM Digital" |
| No Organization or Product schema on dailysignals.html | ✅ Fixed | Service + FAQPage JSON-LD schema added |
| free-campaign.html expired deadline live and indexable | ✅ Fixed | `noindex, follow` added; canonical added |
| free-campaign.html footer copyright "© 2025" | ✅ Fixed | Updated to © 2026 |
| free-campaign.html logo src points to `dailysignals.info` | ✅ Fixed | Now loading from `omdigital.agency/images/om-logo-black.png` |
| No canonical tag on free-campaign.html | ✅ Fixed | Canonical added |
| No Person schema for Frankie Chan | ✅ Fixed | Full Person schema with `jobTitle`, `description`, `sameAs`, `knowsAbout` inside Organization schema |
| Meta description on index.html weak/no keywords | ✅ Fixed | Updated: "OM Digital helps lean teams automate marketing workflows with a bespoke approach..." |
| Title tag on index.html: no keywords | ✅ Fixed | "OM Digital — Marketing AI Automation for Crypto/Fintech Startups & SMEs" |
| No sitemap reference in robots.txt | ✅ Fixed | `Sitemap: https://omdigital.agency/sitemap.xml` added |

---

## Remaining Issues — Updated On-Page Table

| Page | Issue | Severity | Recommended Fix |
|---|---|---|---|
| index.html | **H1 "Less Labor. More Flow." still contains no keywords** | 🔴 Critical | Rewrite to: `AI Marketing Automation for Fintech & Crypto Teams` — move the tagline to a `<p class="lead">` or stylised sub-heading beneath it |
| index.html | FAQ uses `<details>` accordions, not open/visible text | 🟠 High | Google may not index closed accordion answers for FAQPage eligibility. Change to visible Q&A pairs (static HTML, no toggle). See GEO section. |
| index.html | OG alt text still "OM Digital Hero Image" | 🟡 Medium | Update `og:image:alt` to match the new hero alt: "AI marketing automation workflows for fintech and crypto startups — OM Digital" |
| index.html | Nav links to `/dailysignals` (no `.html` extension) | 🟡 Medium | Depending on server config this may 404. Change to `https://omdigital.agency/dailysignals.html` or configure a clean redirect at the server level |
| index.html | Content depth: ~400–500 words of body copy (est.) | 🟠 High | Expand service descriptions and FAQ answers to reach 800–1,200 words for meaningful AI citation eligibility |
| blog/ | All 4 articles are "Coming soon" — no published content | 🔴 Critical | Publish the first article ("What is AI Marketing Automation? A Guide for Fintech Founders") — this alone will significantly improve AI citation potential |
| sitemap.xml | Blog hub and blog articles not in sitemap | 🟠 High | Add `/blog/` and each published article URL to sitemap.xml as they go live |
| sitemap.xml | `xmlns` uses `https://` (spec expects `http://`) | 🟢 Low | Change to `xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"` — most crawlers handle both but this is spec-correct |
| dailysignals.html | FAQ uses `<details>` accordions | 🟠 High | Same issue as index.html — visible static Q&A preferred for Google FAQPage rich results |
| All pages | Render-blocking GTM/GA scripts at top of `<head>` | ⚠️ Warning | Move GTM noscript fallback after `<body>`, and load gtag.js with `async` (it already has it). No change needed to gtag — it's already async. GTM injection script could be deferred without significant loss. Low-priority. |
| free-campaign.html | Chip still shows "Application Deadline: Dec 31, 2025" | 🟢 Low | Page is noindexed, so no SEO impact. UX issue only — update copy or redirect to a new campaign page when ready |

---

## Schema Markup — Updated Assessment

Both main pages now have comprehensive, correct JSON-LD. This is a major improvement.

**index.html schema:** Organization (with `@id`, logo, description, contactPoint, areaServed, knowsAbout, sameAs) + Person (Frankie Chan, with jobTitle, description, knowsAbout, sameAs) + FAQPage (4 questions). This is excellent — it's exactly what Google and AI engines use for knowledge panel attribution and People Also Ask inclusion.

**dailysignals.html schema:** Service (with provider referencing the Organization @id) + FAQPage (10 questions). The cross-referencing of `"@id": "https://omdigital.agency/#org"` is best-practice and links the two pages' structured data together in the knowledge graph.

**One gap:** The FAQPage schema is present and correct, but Google requires the corresponding HTML answers to be visibly accessible on the page (not hidden behind closed accordions) to award FAQPage rich results. The first `<details>` item has `open` which helps, but closed items may not qualify.

---

## Blog Assessment

The blog hub (`/blog/index.html`) is well-structured:
- Correct `<title>`, meta description, canonical, and `robots: index, follow`
- Linked from the main nav ("Blog" item present)
- 4 article cards targeting the right keywords: AI marketing automation, white label marketing automation, scaling crypto marketing, and the Frankie Chan case study
- Clean article URL structure: `/blog/ai-marketing-automation-fintech.html` etc.

The only missing piece is actual content. Until at least one article is published, the blog provides no SEO or GEO value. The blog page itself links to `.html` files that likely 404 right now.

**Priority order for publishing:**
1. `ai-marketing-automation-fintech.html` — definitional, triggers AI Overviews, highest GEO value
2. `white-label-marketing-automation.html` — core commercial keyword, low competition
3. `scale-crypto-marketing.html` — problem-intent, ideal customer targeting
4. `frankie-chan-founder-story.html` — E-E-A-T signal, AI-citable specific outcome data

---

## Technical SEO Checklist — Updated

| Check | Status | Change from v1 |
|---|---|---|
| HTTPS | ✅ Pass | No change |
| HTML lang attribute | ✅ Pass | No change |
| Meta charset first | ✅ Pass | No change |
| Viewport meta | ✅ Pass | No change |
| Mobile responsive | ✅ Pass | No change |
| Canonical tag (index.html) | ✅ Pass | **Fixed** — was ❌ Fail |
| Canonical tag (dailysignals.html) | ✅ Pass | No change |
| Canonical tag (free-campaign.html) | ✅ Pass | **Fixed** — was ❌ Fail |
| XML Sitemap | ✅ Pass | **Fixed** — was ❌ Fail |
| Sitemap in robots.txt | ✅ Pass | **Fixed** — was ❌ Fail |
| robots.txt | ✅ Pass | No change |
| AI bot permissions (GPTBot, CCBot, Claude-Web) | ✅ Pass | No change |
| Organization schema | ✅ Pass | **Fixed** — was ❌ Fail |
| FAQPage schema (index.html) | ✅ Pass | **Fixed** — was ❌ Fail |
| FAQPage schema (dailysignals.html) | ✅ Pass | **Fixed** — was ❌ Fail |
| Person schema (Frankie Chan) | ✅ Pass | **Fixed** — was ❌ Fail |
| Service schema (dailysignals.html) | ✅ Pass | **New** |
| Title tag (index.html) | ✅ Pass | **Fixed** — was generic |
| Meta description (index.html) | ✅ Pass | **Fixed** — was generic |
| Title tag (dailysignals.html) | ✅ Pass | **Fixed** — keyword not in first 30 chars |
| H1 — homepage | ❌ Fail | No change — still "Less Labor. More Flow." |
| FAQ HTML visible (not behind closed accordions) | ⚠️ Warning | First item open, rest collapsed — may not qualify for FAQPage rich results |
| Blog published content | ❌ Fail | 4 articles planned, 0 published |
| Blog in sitemap | ❌ Fail | Blog hub and articles not in sitemap |
| Sitemap xmlns spec compliance | ⚠️ Warning | Uses `https://` — spec expects `http://` |
| Hero image alt text (index.html) | ✅ Pass | **Fixed** — was "OM Digital hero image" |
| OG image alt (index.html) | ⚠️ Warning | Still "OM Digital Hero Image" — should match new hero alt |
| Expired content indexed | ✅ Pass | **Fixed** — free-campaign.html now noindexed |
| Footer copyright | ✅ Pass | **Fixed** — © 2026 on all pages |
| Logo domain mismatch | ✅ Pass | **Fixed** — logo now on omdigital.agency |
| Render-blocking scripts | ⚠️ Warning | No change — GTM still injected synchronously |
| Internal linking (dailysignals → index) | ⚠️ Warning | Still limited; no descriptive back-link anchor text |
| Content depth (homepage) | ⚠️ Warning | Improved from ~200 words to ~400–500 est. body copy — still below 800-word GEO threshold |

**Summary: 22 Pass / 3 Fail / 5 Warning — up from 12 Pass / 9 Fail / 5 Warning in v1**

---

## GEO Status — AI Citation Readiness

| Signal | v1 | v2 | Status |
|---|---|---|---|
| Organization schema | ❌ | ✅ | Fixed |
| Person schema (Frankie) | ❌ | ✅ | Fixed |
| FAQPage schema | ❌ | ✅ | Fixed — both pages |
| Visible FAQ HTML (no accordions) | ❌ | ⚠️ | Partial — first item open |
| H1 contains target keyword | ❌ | ❌ | Not fixed |
| Content depth ≥ 800 words (homepage) | ❌ | ⚠️ | Improved but below threshold |
| Published blog content | ❌ | ❌ | Blog hub ready, 0 articles live |
| AI bot allowances (robots.txt) | ✅ | ✅ | No change |
| Specific outcome data (citable by AI) | ⚠️ | ✅ | Frankie's track record now in schema AND visible bio |

**GEO citation readiness:** Moved from "Very Low" to "Low-Medium." The schema is now in place and correct. The limiting factor is content — no blog posts and a thin homepage means AI engines have few paragraphs to cite. Once one or two blog articles go live, this rating will move to Medium-High quickly.

---

## Prioritised Action Plan — What Remains

### Do This Week

| Action | Impact | Effort | File |
|---|---|---|---|
| **Rewrite H1** from "Less Labor. More Flow." to "AI Marketing Automation for Fintech & Crypto Teams" (tagline becomes the lead `<p>`) | High — direct ranking + GEO signal | 10 min | index.html |
| **Change FAQ from accordions to visible static HTML** on both index.html and dailysignals.html | High — FAQPage rich result eligibility, AI citation | 30 min per page | index.html, dailysignals.html |
| **Fix nav link** from `/dailysignals` to `/dailysignals.html` (or configure server redirect) | Medium — avoids potential 404 | 5 min | index.html |
| **Update OG alt text** on index.html to match hero alt text | Low-Medium | 2 min | index.html |
| **Fix sitemap.xml xmlns** from `https://` to `http://` | Low | 2 min | sitemap.xml |

### This Quarter — Content Sprint

| Action | Impact | Effort | Notes |
|---|---|---|---|
| **Publish blog article 1:** "What is AI Marketing Automation? A Guide for Fintech Founders" | Very High | Half day | Unlocks GEO citations; target 1,000–1,500 words with FAQPage schema |
| **Publish blog article 2:** "White Label Marketing Automation: What It Is and Who It's For" | High | Half day | Core commercial keyword |
| **Add blog pages to sitemap.xml** as articles go live | High | 15 min per article | Update sitemap + re-submit to Google Search Console |
| **Expand homepage body copy** to 800+ words by adding a "How it works" or use-case section | High | 2–3 hours | Primarily a GEO signal |
| **Publish blog articles 3 & 4** (crypto marketing scale, Frankie founder story) | High | 1 day total | E-E-A-T and case study signals |
| **Submit updated sitemap to Google Search Console** | High | 15 min | Needed after adding blog |
| **Create one case study page** (`/case-study/`) with specific outcome data | Very High | 1 day | Highest-value AI citation asset |

---

*Audit v2 prepared by Claude for OM Digital — April 2026. Cross-referenced against seo-geo-audit.md (v1).*
