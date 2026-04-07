# Design Critique v2: index.html & dailysignals.html
**Reviewed:** April 2026 — post-fix pass, including motion/parallax analysis

---

## index.html

### Overall Impression
After the surgical fixes, the homepage is significantly stronger. The hero CTA is in place, the pill buttons are readable, the three-card grid balances correctly, and the HTML structure is sound. The remaining opportunities are mostly in motion/parallax behaviour, a couple of semantic heading issues, and one lingering visual ordering decision in the hero.

---

### Usability

| Finding | Severity | Recommendation |
|---------|----------|----------------|
| Hero image renders above the headline | 🟡 Moderate | The `.hero-media` div precedes the `<h1>` in DOM order, so the image occupies the viewport before any value proposition text. Consider swapping order (headline → image), or anchoring the headline as an overlay on the image. |
| Two `h2` elements inside the Services section | 🟡 Moderate | The section has `<h2>Services</h2>`, then each card also uses `<h2>` for "Bespoke" and "White Label". Cards should use `<h3>` — this breaks document outline and confuses screen readers. |
| Chip label reads as keyword metadata | 🟢 Minor | "Marketing AI Automation for Crypto/Fintech Startups & SMEs" is useful for SEO but feels impersonal as a visible UI element. Consider rewriting as a human-readable sentence: "Trusted by fintech & crypto teams." |
| Footer email link uses `color: inherit` | 🟢 Minor | The contact email inherits `--muted` grey, making it visually indistinct from surrounding text. Use `var(--link)` or an underline to signal it's interactive. |
| Privacy/Terms links are commented out | 🟢 Minor | The `<!--<p>...</p>-->` comment leaves commented-out privacy and terms links. If the pages don't exist yet, remove the comment rather than leaving placeholder debris. |

---

### Visual Hierarchy

**What draws the eye first:** The hero image — then the H1. This ordering is somewhat unusual for a service business. Most agency sites lead with the claim ("Less labor. More flow.") and use the image as supporting context. Currently the image speaks first and the value proposition second.

**Reading flow after the hero:** H1 → lead → chip → CTA button. This is now logical and has a clear action at the end. The CTA button is dark (`#1d1d1f` background), which contrasts well with the white page and signals finality — good.

**Services section:** Adding `<h2>Services</h2>` now correctly orients the section, but the two card headings ("Bespoke", "White Label") should be `<h3>` not `<h2>`. Semantically the current structure is: `h2 → h2 → h2` (Services → Bespoke → White Label) instead of the correct `h2 → h3 → h3`.

**End-to-end Solutions:** The 3-column grid now balances correctly. The three `h3` card headings (Workflow design, Maintenance, Analytics) are parallel and consistent.

**Founder section:** The two-column layout (photo left, bio right) works well on desktop. The photo and bio slide in from opposite sides via JS parallax — this is the most visually engaging motion effect on the page when it lands well.

---

### Consistency

| Element | Issue | Recommendation |
|---------|-------|----------------|
| Duplicate `<title>` | There are now two `<title>` tags in `<head>` (the SEO title and the meta title added earlier remained). The last one in the document wins. | Remove the duplicate; keep only: `OM Digital — Marketing AI Automation for Crypto/Fintech Startups & SMEs` |
| `<meta charset>` placement | `<meta charset="utf-8">` should be within the first 1024 bytes and ideally the very first element in `<head>`. It currently appears after two `<script>` blocks. | Move `<meta charset="utf-8">` to be the first child of `<head>`. |
| `.meta` style in CSS never used | `.hero .meta` is defined in the styles but the meta paragraph is commented out. | Remove the unused rule or uncomment the element. |
| `#what { padding-top: 24px }` vs `section { padding: 80px 0 }` | The Services section has greatly reduced top padding, making it feel tighter than other sections. Combined with the image above and the headline below, the vertical rhythm breaks. | Either use consistent section padding or deliberately separate the hero and first section with a clear visual boundary. |

---

### Parallax & Motion — Detailed Analysis

The site uses four distinct motion systems. Here is a complete breakdown.

**1. Hero image parallax (scroll-driven)**
The hero image translates downward by `y * 0.12` (max 40px) and scales from 1.06 to 1.08 as the user scrolls past. The `rAF` + passive scroll listener is correct. The `ticking` flag prevents frame doubling.

- The image is pre-scaled to `scale(1.06)` at rest. This means the image is permanently rendered ~6% larger than its container, introducing soft edges on most screens where the image is already at native resolution.
- The translate caps at 40px — good, prevents the image from revealing the rounded container border.
- One interaction risk: `.hero-media` has the `reveal reveal-slow` class, so at page load it starts with `opacity: 0` and `transform: translateY(28px)`. The parallax JS sets `img.style.transform` directly on the `<img>`, while the reveal CSS is on the wrapper `.hero-media` div — they are on different elements, so they don't conflict. However, on very fast scrolls during initial page load, the parallax may apply before the reveal animation completes, creating a brief double-transform flicker on the image.

**2. "Services" cards horizontal parallax (continuous rAF loop)**
The two cards start offset 32px and 64px to the right, then slide leftward to their natural positions as the section scrolls into view. The effect uses a smoothed progress value with easeOutCubic.

Critical performance issue: the `tick()` function calls `requestAnimationFrame(tick)` on every frame, creating a loop that runs every ~16ms while the section is in the IntersectionObserver's view. The smoothing formula (`ps += (target - ps) * 0.25`) mathematically approaches but never reaches the target, so **the loop never terminates on its own**. Even after the cards have visually settled, rAF is still firing at 60fps, recalculating and setting `.style.transform` on every frame. On a long session where the user scrolls back and forth past this section, this loop runs continuously.

Fix: add an early-exit condition inside `apply()`:
```js
if (Math.abs(target - ps) < 0.001 && ps > 0.99) {
  if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
  cards.forEach(el => el.style.transform = 'translate3d(0,0,0)');
  return;
}
```

**3. Founder section parallax (continuous rAF loop, dead variable)**
The founder photo slides in from the left (`-20px → 0`) and the bio from the right (`+20px → 0`). The heading name lifts up (`+12px → 0`).

- Same continuous rAF loop issue as above — the loop runs on every frame while the founder section is in the viewport.
- **Dead variable:** Line 515 calculates `const bx = (1 - ps) * -20` but `bx` is never referenced. The bio instead uses `ix` (positive offset). This is either a typo (should be `bx`) or dead code. The bio currently slides from the same direction as the image (both start offset to the right) rather than from opposite sides as the comment implies. If the intent is image-from-left / bio-from-right symmetry, the bio transform should use a negative offset.
- The `apply()` function also uses the same no-termination smoothing pattern. Add the same early-exit as recommended above.

**4. Nav hide-on-scroll**
Clean implementation. The delta-based detection (hide on 6px+ downward scroll past 64px, show on 6px+ upward scroll or near top) is well-tuned. No performance issues — uses the same rAF ticking pattern.

**Reduced motion:** All four systems correctly gate on `prefers-reduced-motion: reduce`. This is best practice and implemented correctly.

---

### Accessibility (post-fix)

- **Muted text:** `--muted: #636366` on white passes AA at ~4.6:1. ✅
- **Pill buttons:** `#0066cc` with white text is ~5.6:1. ✅
- **CTA button:** `#1d1d1f` with white text is ~17:1. ✅
- **Social icon touch targets:** Still 24×24px — below the 44×44px minimum. Wrap `<a>` padding: `padding: 10px` would expand the tap area to 44×44 without changing the icon size.
- **Mobile menu:** Now has a ✕ close button. ✅
- **Hero image alt text:** Still `alt="OM Digital hero image"` — generic. If the image shows product/team/brand content, describe it.

---

### What Works Well

- "Less labor. More flow." is a strong, memorable headline — one of the site's best assets.
- The motion system as a whole (fade-in, scroll-reveal, parallax, nav hide) creates a cohesive premium feel.
- The `prefers-reduced-motion` handling is genuinely thorough — both CSS and JS branches are covered.
- Founder credentials section builds real trust with specific numbers ($29.5M AUM, $8M trading volume). This is exactly the right content for a solo-founder agency.
- The new blue CTA buttons and the dark `cta-btn` are now clearly interactive — night and day vs the grey pill.

---

### Priority Recommendations (index.html)

1. **Fix heading hierarchy** — Change "Bespoke" and "White Label" card headings from `<h2>` to `<h3>`. One-line fix, significant SEO and accessibility improvement.
2. **Add rAF loop termination** to both the Services parallax and the Founder parallax. Without it, the browser is doing unnecessary work on every frame while these sections are in view.
3. **Fix the dead `bx` variable** in the founder parallax — either use it (giving the bio a true mirror-image offset from the right), or remove it. If used correctly, the effect becomes the intended image-from-left / bio-from-right animation.
4. **Move `<meta charset>` to first position in `<head>`** — small but correct.
5. **Swap hero order or overlay** — Put the headline above the image, or overlay it on the image, so the value proposition lands before the visual does.

---
---

## dailysignals.html

### Overall Impression
This is a well-developed B2B product page with strong content structure — outputs, pipeline, deliverables, process, FAQ all in logical order. The carousels work well and the product screenshots are the most persuasive element on the page. However, it still carries all the pre-fix CSS issues from `index.html` (muted contrast, grey pill buttons, oversized logo), plus several motion-specific bugs of its own, including a large block of dead `if (false)` parallax code.

---

### Usability

| Finding | Severity | Recommendation |
|---------|----------|----------------|
| Duplicate `<title>` — wrong title showing | 🔴 Critical | Same structural bug as old `index.html`. The inner `<head>` title is "OM Digital — Marketing AI Automation..." (homepage title) overriding the correct Daily Signals title in the outer head. Fix the HTML structure and keep only the Daily Signals title. |
| `--muted: #6e6e73` — contrast failure | 🔴 Critical | Old value still in inline styles. Update to `#636366` (same fix applied to `index.html`). |
| `.pill` still grey `#c7c7cc` | 🔴 Critical | Three pill CTAs on this page ("Book a 20-minute workflow walkthrough" in hero, pipeline CTA, FAQ CTA) all use low-contrast grey. Update to `#0066cc`. |
| Nav logo `82×82px` | 🟡 Moderate | Still oversized. Reduce to `40×40px`. |
| Hero CTA uses `.pill` not `.cta-btn` | 🟡 Moderate | The hero CTA ("Book a 20-minute workflow walkthrough") uses `.pill` — after the `index.html` fix, `.pill` is a blue smaller button. The homepage hero uses `.cta-btn` (dark, larger). Consider matching the hero CTA style across both pages for brand consistency. |
| No mobile menu close button | 🟡 Moderate | Same ✕ button fix needed as was applied to `index.html`. |
| `loading="lazy"` + `fetchpriority="high"` on hero image | 🟡 Moderate | Same conflicting attributes on `ds-hero-image.png`. Remove `loading="lazy"`. |
| "White Label" nav link is self-referential | 🟢 Minor | When on the Daily Signals page, the "White Label" nav item links back to `omdigital.agency/dailysignals` — the current page. Add `aria-current="page"` and a visual active style. |
| Chip appears before the H1 in the hero | 🟢 Minor | `chip → h1 → lead` order vs the homepage's `h1 → lead → chip`. Choose one pattern and make it consistent. |

---

### Visual Hierarchy

The page has a strong top-to-bottom narrative: what it produces → how it works → what you get → how to start → answers to objections. This is textbook B2B structure and works well.

The **screen gallery** is the highest-value section. Real product screenshots of the output (podcast shows, newsletters, social posts) are far more persuasive than any amount of copy. They are currently placed as the second section — good. The carousel with progress bar and play/pause control shows thoughtful UX.

The **pipeline section** uses a similar horizontal carousel pattern for the 5 pipeline steps plus a CTA card — effective for showing a sequential process. The CTA card at the end of the pipeline carousel ("See it in action") is a smart placement: the user has just mentally walked through the entire workflow and is primed to act.

The **Process section** (6 numbered steps) overlaps conceptually with the Pipeline section. Both explain how the system works. The Pipeline focuses on the technical flow; the Process focuses on the onboarding journey. They're distinct enough to coexist, but the page might benefit from clearer labelling to help users understand one is "what the automation does" and the other is "how we work together."

The **FAQ** is well-crafted — 10 questions that address the real objections a B2B buyer would have (accuracy, input required, onboarding time, publishing control). The first question is open by default, which invites engagement.

---

### Consistency

| Element | Issue | Recommendation |
|---------|-------|----------------|
| `--muted`, `.pill`, `.brand img` | All carry old pre-fix values | Apply same fixes as `index.html`: `--muted: #636366`, `.pill { background: #0066cc }`, `.brand img { width: 40px; height: 40px }` |
| Carousel dot active state | Hardcoded as `background: #6e6e73` (old muted value) | Update to `#636366` or use `var(--muted)` |
| Carousel progress bar fill | Hardcoded as `background: #c7c7cc` (old grey) | Update to `#0066cc` or `var(--link)` for brand consistency |
| `solutions-grid` in Process section | Inline CSS still has `repeat(2, minmax(0, 1fr))` — but this is actually correct here (6 steps in 2 columns × 3 rows = balanced grid). No change needed. | Keep as-is |
| HTML structure (scripts before `<html>`) | Same malformed structure as old `index.html` | Apply same restructuring fix |
| No `<link rel="stylesheet" href="styles/site.css">` | Page duplicates all CSS inline rather than extending `site.css` | At minimum, update the inline block manually each time `site.css` changes. Long-term, refactor to use `site.css` as base. |

---

### Parallax & Motion — Detailed Analysis

**1. Hero image parallax**
Identical implementation to `index.html`. Same pre-scale (1.06×), same translate-on-scroll logic. Same potential flicker risk during reveal animation. Same trade-offs apply.

**2. Carousel sections (screen gallery + pipeline)**
These use CSS `scroll-snap-type: x mandatory` — not JS parallax. This is the right choice. Touch-friendly, accessible, no main-thread JS needed for scrolling. The play/pause autoplay and progress bar are implemented via JS that drives the scroll position programmatically.

No performance concerns here — the autoplay timer is driven by `setInterval`, not a continuous rAF loop, and only runs while the section is visible.

**3. Dead sticky horizontal scroll code (`if (false) { ... }`)**
Around line 1086, a large block of code — implementing a sticky-scroll horizontal parallax for the carousel — is permanently disabled with `if (false) {`. This was apparently an earlier, more complex parallax implementation (sticky viewport with JS-driven horizontal pan). It appears to have been replaced with the simpler CSS scroll-snap approach.

The dead block is approximately 120 lines of JavaScript that never executes. It should be removed entirely. It creates maintenance confusion and adds ~3KB of dead weight to the page.

**4. No "What we do" equivalent horizontal parallax**
`index.html` has the cards-sliding-from-right effect on the Services section. `dailysignals.html` doesn't have this. Whether this is intentional or an omission — consistency would suggest either both pages have the effect, or neither does.

**5. Reduced motion**
Correctly handled — the `prefers-reduced-motion` check gates all animations.

---

### Accessibility

- **Muted text contrast:** `#6e6e73` on white is ~4.48:1 — just below AA threshold. Same issue as pre-fix `index.html`. Fix: `#636366`.
- **Pill button contrast:** `#c7c7cc` with white text — critical failure at ~1.6:1.
- **Carousel keyboard navigation:** The horizontal carousels have no keyboard support. A keyboard user cannot arrow through the slides. Add `tabindex="0"` and `keydown` handling to the scroll viewport.
- **Image alt texts:** Excellent throughout the carousel — descriptive, specific alt text on all product screenshots. This is notably better than the homepage.
- **`<article>` semantics:** Carousel items correctly use `<article>` with `<h3>` headings — good semantic structure.
- **`<main>` wrapper:** Daily Signals correctly wraps content in `<main id="daily-signals">`, which the homepage lacks. The homepage should also have a `<main>` wrapper.
- **FAQ uses `<details>/<summary>`:** Native accessible accordion — no ARIA required. Correct approach.

---

### What Works Well

- The 5-section narrative structure (outputs → pipeline → deliverables → process → FAQ) is a textbook B2B product page — this is one of the site's strongest assets.
- Product screenshots with descriptive alt text are the most persuasive content on the whole site.
- The pipeline CTA card ("See it in action") at the end of the carousel is brilliantly placed — action when intent is highest.
- CSS scroll-snap carousels with play/pause and progress bar are clean, touch-friendly, and accessible.
- The FAQ handles all real objections that a B2B buyer would have. The anti-hallucination workflow mention is specifically strong credibility-building copy.
- `<article>` semantics on carousel items and `<main>` wrapper shows thoughtful HTML structure (better than the homepage in this respect).

---

### Priority Recommendations (dailysignals.html)

1. **Fix the `<title>` tag** — The page is showing the wrong title in browser tabs and Google search results. This is an active SEO problem. One-line fix once the HTML structure is corrected.
2. **Apply the same CSS fixes as index.html** — `--muted`, `.pill` colour, and logo size. All three are blocking accessibility and visual consistency.
3. **Remove the `if (false) {}` dead code block** — ~120 lines of unused JS. Clean it out.
4. **Add keyboard navigation to carousels** — Arrow key support and `tabindex="0"` on the scroll viewports. This is the main remaining accessibility gap on an otherwise well-structured page.
5. **Add mobile menu close button** — Apply the same ✕ fix from `index.html`.
6. **Add `<main>` wrapper to index.html** — The homepage is missing a `<main>` element. Add it around the hero, services, about, and founder sections to mirror the cleaner structure of this page.
