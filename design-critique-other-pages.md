# Design Critique: Other Pages — OM Digital
**Pages reviewed:** Daily Signals (`dailysignals.html`) · Free Campaign (`free-campaign.html`) · Email Signature (`frankie_email.html`)
**Reviewed:** April 2026

---

## Cross-Page Issues (affects all pages)

Before page-specific notes, three systemic issues affect the whole site:

The same HTML structure bug that existed in `index.html` (scripts/meta before `<html>`) is **still present in `dailysignals.html`**. The fix applied to `index.html` needs to be replicated there. `free-campaign.html` and `frankie_email.html` are correctly structured.

`dailysignals.html` has its own self-contained inline `<style>` block (rather than linking to `site.css`), so it did **not** inherit the `--muted` contrast fix or the pill colour fix made to `site.css` and `index.html`. It still runs on old values. `free-campaign.html` correctly links to `site.css` and does benefit from those fixes.

The nav logo is still `82×82px` in `dailysignals.html` — the same oversize issue fixed on `index.html`.

---

## Daily Signals Page

### Overall Impression
This is the most content-rich page on the site and arguably the highest commercial value page — it presents the white-label product to potential B2B buyers. The hero and screen gallery are well-conceived. However, the page carries several copy and structural problems that undermine conversion, and inherits all the unfixed CSS issues mentioned above.

### Usability

| Finding | Severity | Recommendation |
|---------|----------|----------------|
| **No primary CTA above the fold** — same problem as the old homepage hero. The page opens with a product description but no "Book a demo" or "Get pricing" button visible immediately. | 🔴 Critical | Add a hero CTA button (e.g., "Book a demo →" linking to Calendly) directly in the hero section. |
| **Duplicate `<title>` tags** — there's a Daily Signals title in the outer (pre-`<html>`) head, and a generic OM Digital homepage title inside the actual `<head>`. The inner one wins, so the page tab and Google SERP show the wrong title. | 🔴 Critical | Fix the HTML structure (same fix as `index.html`) and ensure only one correct title remains. |
| **Nav has no close button** on mobile overlay — same as the unfixed version of `index.html`. | 🟡 Moderate | Apply the same ✕ button fix made to `index.html`. |
| **Screen gallery has no navigation affordance on desktop** — the horizontal scroll carousel is scroll-only. Users on desktop may not discover they can scroll sideways. | 🟡 Moderate | Add left/right arrow buttons or a "scroll to see more →" hint below the carousel. |
| **No pricing or "request demo" form on page** — for a white-label B2B product, there's no scoped contact mechanism. Users wanting to enquire must navigate back to the homepage CTA. | 🟡 Moderate | Add a short "Request a demo" CTA section at the bottom of the page with a Calendly link or lightweight contact form. |
| **`.pill` still uses grey `#c7c7cc`** — contrast failure, same as the old homepage. | 🟡 Moderate | Update the inline `<style>` block to use `#0066cc` for pill buttons, matching the `index.html` fix. |

### Visual Hierarchy

The page uses the same strong typographic system as the homepage. The screen gallery is a high-value section — real product screenshots are the best conversion tool on a B2B page — but it sits mid-page with no heading to frame what visitors are looking at before the screenshots appear.

The FAQ section at the bottom is well-placed (classic late-funnel objection handling) and the accordion pattern is clean. However, the `+`/`−` toggle character used as the expand indicator is small and easy to miss at `font-size: inherit` (~17px). A slightly larger or bolder indicator would improve discoverability.

### Consistency Issues

| Element | Issue | Recommendation |
|---------|-------|----------------|
| `--muted: #6e6e73` | Still on old value — same contrast issue as homepage had | Update inline `:root` to `#636366` |
| `.pill` background | Still `#c7c7cc` grey — contrast failure | Update to `#0066cc` |
| `.brand img` size | Still `82×82px` — oversized nav logo | Reduce to `40×40px` |
| Inline styles vs. site.css | Page has its own full inline CSS rather than linking site.css, so maintenance fixes don't propagate | Refactor to use `site.css` as the base (or at minimum keep the two files in sync) |
| `loading="lazy"` + `fetchpriority="high"` on hero image | Same conflicting attributes as old `index.html` | Remove `loading="lazy"` from the hero image |

### Accessibility
The same muted text contrast issue (`#6e6e73` on white) applies here. The carousel has no keyboard navigation support — a keyboard user has no way to scroll through the screens. Adding `tabindex="0"` on the scroll container and keyboard arrow handling would cover this.

---

## Free Campaign Page

### Overall Impression
This page had a clear purpose — a time-limited free project offer to build leads and case studies. The gradient hero band is bold and attention-grabbing, and the two-column scope grid is well-laid-out. However, the page has a critical stale content problem that makes it actively damaging to leave live: the campaign deadline passed four months ago.

### Usability

| Finding | Severity | Recommendation |
|---------|----------|----------------|
| **Campaign deadline says "Dec 31, 2025"** — it's now April 2026. The deadline is expired. Any visitor landing on this page sees a stale offer. This actively damages brand credibility. | 🔴 Critical | Either update the deadline and reopen the offer, redirect the URL to the homepage, or add a "This campaign has ended — check back soon" banner. |
| **Footer copyright says "© 2025"** — four months stale. | 🟡 Moderate | Update to "© 2026". |
| **`<br></br>` used in hero** — this is invalid HTML. `<br>` is a void element and should not have a closing tag. Some parsers tolerate it; others may render unexpectedly. | 🟢 Minor | Replace `<br></br>` with `<br>` |
| **Dead JS for a form that doesn't exist** — there's a `document.getElementById('apply-form')` reference in the script, but the page's actual CTA is a Typeform external link. The dead JS runs on every page load, finds nothing, and exits silently. | 🟢 Minor | Remove the Formspree form JS block, or reinstate the form if intended. |
| **No "Back to home" or next-step path** — the page ends after the scope section. Users who are interested but missed the deadline have nowhere to go. | 🟢 Minor | Add a footer CTA pointing to the main Calendly link: "Want something like this? Book a call." |

### Visual Hierarchy

The gradient hero band (`#5b8cff → #9b5cff → #ff6ec7 → #ffd166`) is energetic and stands out from the rest of the site's minimal white palette. This is a deliberate stylistic break that signals a special/limited offer — good.

One tension: the lead text inside the band is forced to black (`color: #000 !important`) against the colorful gradient. On some gradient stops (the lighter yellow end), the black text is fine. On the deep purple area, black text reads as slightly unusual since white would have more contrast. Worth testing, but not critical.

The "How selection works" and "The results" two-column layout is clean and appropriately balanced.

### What Works Well
- The gradient hero band is the most memorable visual on the entire site — it breaks the minimal pattern deliberately, signalling urgency.
- The scope section's no-border, flush card design is consistent with the main site's approach.
- The Typeform CTA is clearly placed with good visual weight.

---

## Email Signature Page

### Overall Impression
The email signature is clean, minimal, and on-brand. The table-based layout is appropriate for email client compatibility. However, it's missing the social links Frankie uses on the main site, the logo is externally hosted on a different domain, and the muted colour is the old out-of-spec value.

### Usability

| Finding | Severity | Recommendation |
|---------|----------|----------------|
| **No social links** — Frankie's LinkedIn and X profiles are prominently shown on the homepage, but absent from the email signature. | 🟡 Moderate | Add small linked icons for LinkedIn (`linkedin.com/in/frankieweb3`) and X (`x.com/wlfc_`), consistent with the homepage founder section. |
| **No CTA or booking link** — email signatures are a low-friction conversion surface. A "Book a call" link with Calendly would turn every outbound email into a soft CTA. | 🟡 Moderate | Add a subtle "Book a call" line linking to Calendly, e.g. as a final row in the table. |
| **Logo hosted on `dailysignals.info`** — not `omdigital.agency`. If `dailysignals.info` goes down or changes, the logo breaks in all sent emails (they're already in recipients' inboxes and can't be fixed). | 🟡 Moderate | Host the logo on `omdigital.agency` and update the `src` to `https://omdigital.agency/images/om-logo-black.png`. |

### Consistency

The muted colour is hardcoded as `#6e6e73` in inline styles. Since this is an email file, it doesn't use CSS variables — but for consistency with the updated brand token (`#636366`), the inline value should be updated. The difference is subtle visually but keeps the brand token in sync if anyone references the signature as a design spec.

### What Works Well
- Clean, minimal layout — no clutter, easy to read in all email clients.
- Correct use of table-based layout for email compatibility.
- The tagline "Less labor. More flow." carries brand consistency into email.
- Appropriate dimensions (max-width: 640px), correct `role="presentation"` on tables.

---

## Priority Recommendations (all pages)

1. **🔴 Take down or update free-campaign.html** — A live page with an expired Dec 2025 deadline is the most urgent issue across the entire site. It either needs a new deadline, a "campaign ended" message, or a redirect to `/`. This is a brand trust issue.

2. **🔴 Fix `dailysignals.html` HTML structure + duplicate title** — The wrong page title is appearing in browser tabs and search results. This is hurting SEO and user orientation. Same structural fix as was applied to `index.html`.

3. **🟡 Sync `dailysignals.html` CSS** — Update `--muted`, `.pill` colour, and nav logo size in the inline styles to match the fixes made to `index.html`. Or refactor the page to extend `site.css` instead of duplicating it.

4. **🟡 Add hero CTAs to Daily Signals** — Mirror the "Book a free call →" pattern added to the homepage. A B2B product page without a hero CTA is leaving leads on the table.

5. **🟡 Update email signature** — Fix logo `src` to `omdigital.agency`, add social links, and add a booking CTA. These are small changes with outsized impact on every email Frankie sends.

6. **🟢 Update copyright year in free-campaign.html** — One line, `© 2025` → `© 2026`.
