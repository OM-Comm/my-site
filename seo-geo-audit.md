# SEO + GEO Audit — omdigital.agency
**Date:** April 2026 · **Scope:** Full site · **Focus:** AI marketing agency, white label AI, automated content desk

---

## Executive Summary

omdigital.agency has solid technical foundations (fast, clean HTML, HTTPS, mobile-responsive, correct bot allowances) but scores critically low on the content signals that drive both traditional rankings and AI-engine citations. The homepage H1 contains zero target keywords. There is no schema markup anywhere. The site has no blog, no case studies, no FAQ sections, and no sitemap — meaning Google and AI engines have almost nothing to cite or crawl beyond two thin product pages. The white-label and automated content desk angles are a genuine competitive gap in the market; no competitor has claimed this positioning. That opportunity is being left on the table because the site has no content to surface in search.

**Top 3 priorities:**
1. Add schema markup (Organization + FAQ) to both main pages — highest GEO impact, 2-hour fix
2. Rewrite the homepage H1 and meta description to include target keywords
3. Add a `/blog` with 4–6 foundational articles targeting question-based, low-competition keywords

**Overall assessment:** Needs significant work on content and structured data before meaningful organic or AI-engine visibility is possible.

---

## Keyword Opportunity Table

| Keyword | Est. Difficulty | Opportunity | Current Ranking | Intent | Recommended Content |
|---|---|---|---|---|---|
| White label AI marketing | Medium (30–40%) | **High** | Not ranking | Commercial | Landing page + FAQ |
| Automated content desk | Easy-Medium (15–25%) | **High** | Not ranking | Commercial | Dedicated page (dailysignals) |
| AI marketing agency for fintech | Medium (35–45%) | **High** | Not ranking | Commercial | Homepage + blog post |
| Marketing automation crypto startup | Medium (35–45%) | **High** | Not ranking | Commercial | Blog post + case study |
| White label crypto content | Easy (20–30%) | **High** | Not ranking | Commercial | Daily Signals page |
| Trading platform content automation | Easy (15–20%) | **High** | Not ranking | Niche/Commercial | Daily Signals landing |
| AI marketing agency London | Medium (40–50%) | Medium | Not ranking | Commercial | Homepage localisation |
| What is marketing automation fintech | Easy (20–30%) | **High** | Not ranking | Informational | Blog post + FAQ schema |
| How to scale crypto marketing without hiring | Easy (15–25%) | **High** | Not ranking | Informational | Blog post |
| Best marketing automation tools crypto | Medium (35–45%) | Medium | Not ranking | Informational | Blog listicle |
| Bespoke marketing automation agency | Easy (20–30%) | **High** | Not ranking | Commercial | Homepage |
| White label market insights trading | Easy (10–20%) | **High** | Not ranking | Niche | Daily Signals page |
| Marketing automation workflow design | Easy-Medium (25–35%) | Medium | Not ranking | Informational | Blog post |
| Fintech marketing agency UK | Medium (40–50%) | Medium | Not ranking | Commercial | Homepage |
| Automated newsletter fintech | Easy (15–25%) | **High** | Not ranking | Commercial | Daily Signals |

---

## On-Page Issues

| Page | Issue | Severity | Fix |
|---|---|---|---|
| index.html | **H1 "Less labor. More flow." contains no keywords** | 🔴 Critical | Rewrite to include primary keyword: e.g. "AI Marketing Automation for Fintech & Crypto Teams" with the tagline as a subheading |
| index.html | No canonical tag | 🟠 High | Add `<link rel="canonical" href="https://omdigital.agency/" />` |
| index.html | No schema markup (Organization, FAQ, Person) | 🟠 High | Add JSON-LD schema block — see fixes section |
| index.html | No XML sitemap linked or present | 🟠 High | Create sitemap.xml, reference in robots.txt |
| index.html | Hero image alt: "OM Digital hero image" — not descriptive | 🟡 Medium | Change to "AI marketing automation workflow for fintech startups — OM Digital" |
| index.html | No `<meta name="keywords">` tag | 🟢 Low | Add (Google ignores it but helps Bing/other crawlers) |
| index.html | No blog, no case studies — site has ~200 words of copy | 🔴 Critical | Add content hub (see content gap section) |
| index.html | No FAQ section | 🟠 High | Add FAQ section targeting People Also Ask queries |
| index.html | "OM Digital hero image" OG alt text | 🟡 Medium | Update to keyword-relevant description |
| dailysignals.html | Title: "OM Digital \| Daily Signals Automated Content Desk" — no keyword in first 30 chars | 🟡 Medium | Reorder: "Daily Signals: Automated Content Desk for Trading Platforms \| OM Digital" |
| dailysignals.html | No Organization or Product schema | 🟠 High | Add Product + FAQ schema |
| dailysignals.html | No FAQ section on page | 🟠 High | Add 5–8 Q&A pairs with FAQPage schema |
| dailysignals.html | URL has `.html` extension | 🟡 Medium | Ideally redirect to `/dailysignals/` (clean URL) — low priority |
| free-campaign.html | **Expired deadline "Dec 31, 2025" is live and indexable** | 🔴 Critical | Either update the offer, add noindex, or redirect to homepage |
| free-campaign.html | Footer copyright "© 2025" | 🟡 Medium | Update to © 2026 |
| free-campaign.html | Logo src points to `dailysignals.info` (wrong domain) | 🟠 High | Change to `omdigital.agency/images/om-logo-black.png` |
| free-campaign.html | `<br></br>` invalid HTML | 🟡 Medium | Replace with `<br>` |
| free-campaign.html | No canonical tag | 🟡 Medium | Add canonical |
| All pages | No XML sitemap exists at `/sitemap.xml` | 🟠 High | Create and submit to Google Search Console |
| All pages | No structured data of any kind | 🔴 Critical | Add Organization schema minimum; FAQ on content pages |
| All pages | No `rel="canonical"` on index.html | 🟠 High | Add canonical to prevent www/non-www duplication |

---

## Content Gap Analysis

| Topic | Why It Matters | Format | Priority | Effort |
|---|---|---|---|---|
| "What is AI marketing automation?" | Foundational informational query; triggers AI Overviews; builds topical authority | Blog post + FAQ schema | **High** | Half day |
| "How to scale crypto marketing without hiring" | Problem-intent; targets OM Digital's ideal customer; low competition | Blog post | **High** | Half day |
| "White label marketing automation: what it is and how it works" | Core product explainer; ChatGPT and Perplexity cite definitional content heavily | Blog post / landing page | **High** | Half day |
| "Automated content desk for trading platforms" | Exact Daily Signals use-case; near-zero competition; high-intent buyer keyword | Daily Signals page expansion | **High** | Quick win |
| Case study: crypto client | Specific data (AUM, volume, timelines) is highly citable by AI engines; social proof | Case study page | **High** | Multi-day |
| FAQ section on homepage | People Also Ask results; FAQPage schema required for AI Overview inclusion | FAQ section in index.html | **High** | Quick win |
| FAQ section on Daily Signals page | Same as above for product page queries | FAQ section in dailysignals.html | **High** | Quick win |
| "Best marketing automation tools for fintech 2026" | Comparison/listicle format earns 13× more AI citations than standard pages | Blog listicle | Medium | Half day |
| Services detail pages (Bespoke, Analytics, Workflow Design) | Currently stub cards — no content for Google or AI to index per service | Expand each to a full page | Medium | Multi-day |
| Founder thought leadership article | Person schema + expert byline improves E-E-A-T; Frankie's track record (OKX, $29.5M AUM) is highly citable | Blog post or About page | Medium | Half day |
| "Marketing automation for DeFi / crypto exchanges" | Vertical-specific; captures niche search demand | Blog post | Medium | Half day |
| Pricing / engagement model page | B2B buyers expect transparency; improves conversion and trust signals | Landing page | Medium | Half day |
| Press/media page or client logos | Trust signals; improves domain authority and E-E-A-T | Section in homepage | Low | Quick win |

---

## Technical SEO Checklist

| Check | Status | Details |
|---|---|---|
| HTTPS | ✅ Pass | Site served over HTTPS |
| HTML lang attribute | ✅ Pass | `<html lang="en">` on all pages |
| Meta charset first | ✅ Pass | `<meta charset="utf-8">` is first in `<head>` |
| Viewport meta | ✅ Pass | Present on all pages |
| Mobile responsive | ✅ Pass | Responsive CSS, media queries, hamburger nav |
| Canonical tag (index) | ❌ Fail | Missing on homepage — risk of www/non-www duplicate |
| Canonical tag (dailysignals) | ✅ Pass | Present |
| Canonical tag (free-campaign) | ❌ Fail | Missing |
| XML Sitemap | ❌ Fail | No sitemap.xml found — submit via Google Search Console |
| robots.txt | ✅ Pass | Correctly allows all bots including GPTBot and Claude-Web |
| AI bot permissions | ✅ Pass | GPTBot, CCBot, Claude-Web explicitly allowed — excellent |
| Schema markup | ❌ Fail | No JSON-LD on any page — highest-impact fix for both SEO and GEO |
| FAQ schema | ❌ Fail | No FAQ sections or FAQPage schema anywhere |
| Organization schema | ❌ Fail | Missing — Google uses this for knowledge panel and AI citations |
| Person schema (Frankie) | ❌ Fail | Missing — E-E-A-T signal for AI engines |
| Open Graph tags | ✅ Pass | Present on index and dailysignals |
| Twitter Card tags | ✅ Pass | Present on index and dailysignals |
| Hero image `fetchpriority="high"` | ✅ Pass | Correctly set on both pages |
| Conflicting lazy + fetchpriority | ✅ Pass | Fixed in previous session |
| Render-blocking scripts | ⚠️ Warning | GTM + GA load synchronously at top of `<head>` — consider `async` deferral |
| Image alt text (hero) | ⚠️ Warning | "OM Digital hero image" — not keyword-rich |
| Image alt text (founder) | ✅ Pass | "Frankie Chan" — acceptable for a person photo |
| Internal linking | ⚠️ Warning | Very limited — index links to dailysignals but not vice versa with descriptive anchor text |
| Heading hierarchy | ✅ Pass | H1→H2→H3 structure correct after previous fixes |
| `<main>` landmark | ✅ Pass | Added in previous session |
| Expired content indexed | ❌ Fail | free-campaign.html with Dec 2025 deadline is live and indexable |
| Footer copyright | ⚠️ Warning | free-campaign.html still shows © 2025 |
| Logo domain mismatch | ❌ Fail | free-campaign.html loads logo from `dailysignals.info` — external broken dependency |
| Content depth (homepage) | ❌ Fail | ~200 words — well below the 600–1200 words needed for meaningful ranking or AI citation |
| Content depth (dailysignals) | ⚠️ Warning | Richer than homepage but still lacks FAQ, structured definitions, and schema |

---

## Competitor Comparison

| Dimension | OM Digital | ICODA | NinjaPromo | Coinbound |
|---|---|---|---|---|
| Keyword focus | Fintech/crypto + white label | Crypto/blockchain (broad) | Fintech + Web3 | Web3/crypto (broad) |
| White-label product | ✅ **Yes** (Daily Signals) | ❌ No | ❌ No | ❌ No |
| Content volume | ❌ Very thin (2 pages) | ✅ Extensive blog | ✅ 13+ guides | ✅ 100+ articles |
| FAQ schema | ❌ None | Unknown | ✅ Yes | ✅ Yes |
| Case studies | ❌ None | ✅ Yes | ✅ Yes | ✅ Yes |
| Schema markup | ❌ None | Partial | ✅ Yes | ✅ Yes |
| Author bylines (E-E-A-T) | ⚠️ Founder bio only | ✅ Yes | ✅ Yes | ✅ Yes |
| Podcast / owned media | ❌ None | Partial | ✅ Yes | ✅ Podcast |
| SERP feature presence | ❌ None detected | ✅ Roundups + snippets | ✅ Fintech roundups | ✅ Top 3 for crypto |
| AI citation likelihood | ❌ Very low | Medium-High | Medium | High |
| **Unique competitive advantage** | White-label product + trading platform niche | Crypto-native AEO focus | Fintech compliance expertise | Largest content authority |

**Key takeaway:** OM Digital's white-label product is a genuine market differentiator that no competitor has. But until there's content to rank and be cited, it's invisible.

---

## GEO Recommendations (ChatGPT + Google AI Overviews)

### Why this matters right now
Google AI Overviews now pull from positions 21–100 at 200–400% higher rates than traditional search. You don't need to rank #1 — you need to be *citable*. 89% of B2B buyers use AI tools during their buying journey. ChatGPT cites structured, dense, question-answering content. None of the current pages qualify.

### What needs to change

**1. Add schema markup immediately (highest ROI, lowest effort)**

Add this JSON-LD block to `index.html`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "OM Digital",
      "url": "https://omdigital.agency",
      "logo": "https://omdigital.agency/images/om-logo-black.png",
      "description": "AI marketing automation agency for fintech and crypto startups. Bespoke workflows, white-label content desk.",
      "founder": { "@type": "Person", "name": "Frankie Chan" },
      "areaServed": ["GB", "US", "HK", "Global"],
      "sameAs": [
        "https://linkedin.com/in/frankieweb3",
        "https://x.com/wlfc_"
      ],
      "knowsAbout": ["AI marketing", "marketing automation", "fintech marketing", "crypto marketing", "white label marketing"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is AI marketing automation?",
          "acceptedAnswer": { "@type": "Answer", "text": "AI marketing automation uses artificial intelligence to design, trigger, and optimise marketing workflows — from content generation to lead nurture — without manual effort. It lets lean teams scale output that normally requires a large marketing department." }
        },
        {
          "@type": "Question",
          "name": "What does OM Digital do?",
          "acceptedAnswer": { "@type": "Answer", "text": "OM Digital builds bespoke AI marketing automation systems for fintech and crypto startups, and offers Daily Signals — a white-label automated content desk for trading platforms that turns market intelligence into branded social posts, newsletters, and podcast content." }
        },
        {
          "@type": "Question",
          "name": "What is a white-label AI marketing product?",
          "acceptedAnswer": { "@type": "Answer", "text": "A white-label AI marketing product is a ready-built automation system that a business can rebrand and offer to its customers as its own. OM Digital's Daily Signals product lets trading platforms deliver automated market insights content to their users, branded under the platform's identity." }
        },
        {
          "@type": "Question",
          "name": "How long does it take to set up marketing automation?",
          "acceptedAnswer": { "@type": "Answer", "text": "A bespoke automation workflow typically takes 2–6 weeks to scope and deploy, depending on your existing stack and the complexity of the process. OM Digital handles the full build — from workflow design and integration to testing and maintenance." }
        }
      ]
    }
  ]
}
```

**2. Rewrite the H1 with keywords**

Current: `Less labor. More flow.`
Proposed H1: `AI Marketing Automation for Fintech & Crypto Teams`
Add as sub-headline (keep the personality): `Less labor. More flow.`

This alone is a meaningful GEO signal — AI engines use H1 content as the primary topic signal for a page.

**3. Add FAQ sections to both main pages (visible on page — no accordions)**

Add 4–6 visible Q&A pairs below each hero section. Pair with FAQPage schema. Questions should mirror "People Also Ask" patterns:
- What is [your service]?
- How does [your service] work?
- Who is [your service] for?
- How much does it cost? / How do I get started?
- What tools do you integrate with?

**4. Improve content density**

Current homepage: ~200 words. AI engines need minimum 600 words of substantive, question-answering prose to cite a page. Target 800–1,200 words across index.html by expanding service descriptions, adding use cases, and inserting the FAQ section.

**5. Start a blog with 4 foundational posts**

Prioritise these first four in this order:
1. "What is AI marketing automation? A guide for fintech founders" — definitional, high GEO value
2. "How Daily Signals works: automated market content for trading platforms" — product SEO
3. "White label marketing automation: what it is and who it's for" — commercial, low competition
4. "How Frankie Chan built a crypto exchange P2P platform to $8M monthly volume in 90 days" — E-E-A-T + case study

**6. Add Person schema for Frankie**

Frankie's track record (OKX, Yield App, $29.5M AUM in 9 months) is exactly the kind of specific, authoritative data AI engines cite. Add Person schema with `jobTitle`, `alumniOf`, `knowsAbout`, and `sameAs` social profiles.

---

## Prioritised Action Plan

### Quick Wins — Do This Week (under 2 hours each)

| Action | Expected Impact | Effort | File |
|---|---|---|---|
| **Add canonical tag to index.html** | Prevents duplicate content penalty | 15 min | index.html |
| **Rewrite H1** from "Less labor. More flow." to keyword-rich heading | High — direct ranking + GEO signal | 15 min | index.html |
| **Add Organization + FAQ JSON-LD schema** to index.html (copy from above) | High — GEO citations, knowledge panel | 45 min | index.html |
| **Add FAQ section HTML** (4 Q&A visible on page) to index.html | High — People Also Ask, AI citation | 45 min | index.html |
| **Add noindex** to free-campaign.html or update the expired offer | Removes negative trust signal | 10 min | free-campaign.html |
| **Fix logo src** in free-campaign.html (`dailysignals.info` → `omdigital.agency`) | Removes broken external dependency | 5 min | free-campaign.html |
| **Update copyright** in free-campaign.html to © 2026 | Hygiene | 2 min | free-campaign.html |
| **Improve hero image alt text** | Medium — image search + AI citation | 5 min | index.html |
| **Create sitemap.xml** and reference in robots.txt | High — crawlability | 30 min | New file |

### Strategic Investments — This Quarter

| Action | Expected Impact | Effort | Notes |
|---|---|---|---|
| **Write 4 foundational blog posts** (see GEO section above) | Very high — organic + AI citation | 2–3 days | Host at `/blog/` |
| **Expand Daily Signals page** with FAQ section, schema, and 400+ additional words | High — product SEO | Half day | dailysignals.html |
| **Add Person schema for Frankie Chan** | Medium — E-E-A-T signal | 1 hour | index.html |
| **Create one detailed case study page** | Very high — AI engines love specific outcome data | 1 day | New page `/case-study/` |
| **Expand service stubs** (Workflow Design, Maintenance, Analytics) into full landing pages | High — long-tail keyword capture | 2–3 days | New pages |
| **Add HowTo schema** to any process-driven content | Medium — GEO signal | 1–2 hours | Per blog post |
| **Add social proof / client logo strip** to homepage | Medium — trust + E-E-A-T | Half day | index.html |
| **Submit sitemap to Google Search Console** | High — indexation speed | 15 min | GSC account |
| **Clean URL structure** — redirect `dailysignals.html` → `/dailysignals/` | Low-Medium | 30 min | Server config |

---

## Sitemap.xml to Create

Save as `/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://omdigital.agency/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://omdigital.agency/dailysignals.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

Add to robots.txt:
```
Sitemap: https://omdigital.agency/sitemap.xml
```

---

*Audit prepared by Claude for OM Digital — April 2026*
