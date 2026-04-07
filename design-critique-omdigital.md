# Design Critique: OM Digital Website (omdigital.agency)

**Stage:** Live — surgical revamp
**Reviewed:** April 2026
**Scope:** Overall UX flow · Visual hierarchy · Accessibility · Consistency

---

## Overall Impression

The site has a clean, Apple-inspired minimal aesthetic that feels credible and premium for a B2B agency. The motion design (scroll reveal, parallax) is polished and tasteful. However, the biggest opportunity is conversion: there is no primary CTA in the hero, the pill buttons are visually passive, and a key layout bug breaks the 3-card grid on desktop. A surgical pass on these issues — plus a handful of accessibility fixes — would materially improve performance.

---

## Usability

| Finding | Severity | Recommendation |
|---------|----------|----------------|
| No hero CTA — the first action prompt is buried inside the "What we do" cards below the fold | 🔴 Critical | Add a primary action button in the hero (e.g., "Book a free call →" linking to Calendly). This is the single highest-impact change. |
| The "End-to-end Solutions" section (`#about`) has no nav link — users who scroll past it may never know to go back | 🟡 Moderate | Add a "Solutions" or rename the nav to reflect all sections, or fold the 3-card block into the Services section. |
| Mobile menu has no visible close (X) button — the full-screen overlay only closes when the user taps a link or outside the menu | 🟡 Moderate | Add an explicit ✕ button in the top-right corner of the overlay for discoverability. |
| The `#about` nav anchor links to `#founder`, not `#about` — clicking "About" skips the End-to-end Solutions section entirely | 🟡 Moderate | Decide which section "About" should point to and ensure the anchor is consistent. |
| Calendly CTA is only in the "Bespoke" card — "White Label" card links out but offers no direct book/contact path | 🟢 Minor | Repeat a soft CTA or contact link in the footer or a dedicated strip to catch users who reached the bottom. |

---

## Visual Hierarchy

**What draws the eye first:** The hero image (placed above the headline in the DOM). This is inverted — the image creates visual noise before the value proposition is established.

**Reading flow:** Image → H1 "Less labor. More flow." → Lead copy → Chip label. The chip label reads like a metadata tag rather than a human-readable line, breaking the emotional hook of the headline before any action is taken.

**Emphasis issues:**

- The headline "Less labor. More flow." is strong and well-typeset. However, it floats above the `what-grid` with no clear directional cue pulling visitors toward the CTAs below.
- The "What we do" section has no `<h2>` label. Users land on two unnamed cards. Adding a simple "What we do" heading orients the section and aids scanning.
- The `.pill` CTA buttons are grey (`#c7c7cc`) — a deliberately muted, passive color. On a site designed to convert agency leads, CTAs should carry more weight (stronger color, more padding).
- The `solutions-grid` uses `grid-template-columns: repeat(2, 1fr)` with 3 cards. On desktop, the third card (Analytics) renders alone in a second row on the left — unbalanced and likely unintentional.

**Recommendations:**

1. Flip the hero order: headline → lead → CTA → hero image (or use image as a full-bleed background behind the text).
2. Add a "What we do" `<h2>` above the two-card grid.
3. Change the 3-card grid to `repeat(3, 1fr)` or `repeat(auto-fit, minmax(220px, 1fr))`.
4. Upgrade pill button color from grey to a branded accent (blue, electric, or the gradient from your campaign section).

---

## Consistency

| Element | Issue | Recommendation |
|---------|-------|----------------|
| Duplicate CSS | `.pill` is defined with different values in both the inline `<style>` block in `index.html` and `styles/site.css` (different `padding` and `font-size`). The inline block wins, making `site.css` partially irrelevant. | Consolidate all styles into `site.css` and remove the inline `<style>` block. |
| Undefined CSS variable | `var(--border)` is used on the founder photo's inline style, but `--border` is never declared in `:root`. Only `--hairline` exists. The border renders invisible. | Replace `var(--border)` with `var(--hairline)` on the founder photo. |
| Dead CSS | `#campaign` section styles (gradient background, centered layout) exist in `site.css` but the `#campaign` section does not exist in `index.html`. | Remove the dead `#campaign` block from `site.css` to reduce maintenance risk. |
| `<html>` tag placement | The `<!DOCTYPE html>` is followed by `<script>` tags and `<meta>` tags before `<html lang="en">` opens. This is invalid HTML — content outside `<html>` is technically undefined behavior. | Move all meta/script tags inside `<head>` after `<html lang="en">`. |
| Oversized nav logo | The brand logo image is set to `82×82px` in the nav — most sites use 32–40px height. This inflates nav height and draws disproportionate visual weight to the logo area. | Reduce to `40–48px` height while maintaining aspect ratio. |
| Card hover styles disabled | `#what .card` and `#about .card` have `transition: none` and `hover: { transform: none }`, while cards in other sections have hover lift. This inconsistency is subtle but visible when comparing sections. | Either enable hover lift consistently or disable it globally — pick one. |
| `solutions-grid` vs 3 cards | Grid is 2-column, content is 3 cards. Orphaned card on desktop. | Fix grid column count (see Visual Hierarchy section). |

---

## Accessibility

- **Color contrast — lead/muted text:** `--muted: #6e6e73` on white `#ffffff` yields a contrast ratio of approximately **4.48:1**, which falls just below the WCAG 2.1 AA threshold of 4.5:1 for normal text. The hero lead copy, chip label, and subtitle text are all affected. Darken to `#636366` or `#5c5c61` to clear the threshold.
- **Color contrast — pill buttons:** White `#fff` text on `#c7c7cc` background yields approximately **1.6:1** — a critical failure. Interactive CTAs must meet 4.5:1 minimum. Switch to a darker background color (e.g., `#3c3c43` or a brand accent).
- **Hero image `loading="lazy"` + `fetchpriority="high"`:** These attributes conflict. The LCP image should use `loading="eager"` (or omit `loading` entirely) to avoid the browser deprioritizing its load.
- **Hero image alt text:** `alt="OM Digital hero image"` is generic. If the image is meaningful, describe it; if purely decorative, use `alt=""`.
- **Footer contact email:** Uses `color: inherit` which resolves to `--muted` (#6e6e73). Same contrast issue as above. The email is the primary contact mechanism — it should be visually distinct.
- **Mobile menu close affordance:** No visible ✕ or "Close" element. Screen reader users navigating via keyboard may have difficulty exiting the overlay.
- **`<html lang="en">` placement:** HTML is structurally malformed (see Consistency section). Some assistive technologies may misparse the document.
- **Touch targets:** The social icons (LinkedIn, X) are 24×24px — below the recommended 44×44px touch target minimum. Increase the clickable area using padding on the `<a>` elements.

---

## What Works Well

- The tagline "Less labor. More flow." is punchy, memorable, and on-brand — great copywriting.
- Clean, whitespace-heavy layout feels premium and credible for a B2B services site.
- The scroll-reveal animations are tasteful and not overdone, with full `prefers-reduced-motion` support — excellent accessibility practice.
- Sticky nav with hide-on-scroll behavior is polished UX that doesn't get in the way.
- The founder section with real credentials and social links builds strong trust signals.
- CSS custom properties (`--fg`, `--muted`, `--hairline`, etc.) provide a well-structured design token foundation.
- Responsive breakpoints are thoughtfully handled, especially the mobile founder layout stacking.
- The `prefers-reduced-motion` media query is implemented correctly and comprehensively throughout the JS.

---

## Priority Recommendations

These are ordered by expected impact for a site that is already live:

1. **Add a hero CTA button** — A single "Book a free call →" button in the hero (linking to Calendly) is the highest-impact change. This is what converts visitors to leads. Without it, every visitor must read two sections deep before seeing any action prompt.

2. **Fix the pill button contrast** — White text on `#c7c7cc` is a WCAG failure and visually passive. Switching to a darker or branded color (even `#3c3c43`) will immediately improve both accessibility and click-through.

3. **Fix the 3-card grid** — Change `solutions-grid` to `repeat(3, 1fr)` (or `auto-fit`) so "Analytics" doesn't orphan on desktop. This is a one-line CSS fix that removes a visible layout bug.

4. **Consolidate styles into `site.css`** — Remove the inline `<style>` block from `index.html` and move everything to `site.css`. This eliminates the duplicate `.pill` definition conflict, makes the codebase maintainable, and ensures `site.css` is actually the source of truth.

5. **Darken muted text to clear AA contrast** — Change `--muted` from `#6e6e73` to `#636366`. One variable change fixes all affected text across the site.

6. **Fix the HTML document structure** — Move meta/script tags inside `<html><head>`. This is a correctness issue that could affect SEO crawlers and assistive technologies.
