# Cortexalab Website — Build Handoff Brief

> **This is a self-contained handoff.** It is written to be handed to an AI coding agent working in a **separate, empty repository** with **no access to the PlanNeat codebase**. Everything the agent needs — design system, copy, PlanNeat reference data, store links, stats, deploy config — is embedded below. The agent should not need to ask for the PlanNeat repo.

---

## 1. Context

**Cortexalab Pvt Ltd** is the private limited company that owns and operates the app **PlanNeat** (an AI Indian meal planner). The company was incorporated to handle the income/expenses of the app and to register on the Apple App Store as an **organization** (not an individual).

A first attempt at Apple organization approval failed because the existing Cortexalab website was a **single, thin page** with **no information about PlanNeat** and no evidence of a real operating company. PlanNeat now has its own polished marketing site (`https://planneat.in`); this brief is to **rebuild the Cortexalab company site** so it:

1. Reads as a **legitimate, operating technology company** (passes Apple org review and general credibility checks).
2. **Introduces PlanNeat** and links out to its site and app-store listings.
3. **Positions Cortexalab as an AI-native product studio** that builds productivity tools — with a second app (a habit tracker, currently in alpha) teased as "coming soon."
4. Leans into the **founder narrative**: a solo founder shipping real, store-grade apps using an AI-augmented production process (Codex, Cursor, Claude Code).

**Intended outcome:** a multi-page, professionally designed company website that a future AI agent can build from this document alone, visually distinct from PlanNeat (its own modern "AI studio" identity) but built on the same proven tech stack.

### Decisions already made (do not re-litigate)
| Topic | Decision |
|---|---|
| Visual identity | **Distinct tech-studio identity** — cooler/modern, NOT PlanNeat's forest-green food brand. PlanNeat appears as a product card in *its own* colors. |
| Founder framing | **Lead with the solo-founder + AI story** as a headline narrative — confident and professional, not a hobby. |
| Second app (habit tracker) | **Tease as "Coming soon"** with a sense of its distinct capabilities. Founder will supply real details later; **use placeholder copy for now.** |
| Tech stack | **Mirror PlanNeat's stack** (Astro static site, vanilla CSS tokens, self-hosted fonts, Firebase Hosting, sitemap/SEO/analytics). |

> ⚠️ **Tension to manage:** "Lead with solo founder" + "Apple org legitimacy" can pull against each other. Resolve it by presenting the solo+AI story **confidently and professionally** (a modern lean studio), and by including all the legitimacy signals Apple reviewers look for: a real company name + registration number, registered address, contact email/phone, legal pages, and a clear products list. Solo ≠ unserious.

---

## 2. Goals & success criteria

- A reviewer landing cold understands within 10 seconds: *this is a real company that makes real, shipping software products.*
- PlanNeat is clearly presented and linked (site + Play Store + App Store).
- The "AI-native studio" and "how we build with AI" story is front-and-center but credible.
- Company legitimacy block is present and complete (name, CIN/registration placeholder, address placeholder, email, phone placeholder).
- Visually distinct from PlanNeat; cohesive, modern, premium-feeling.
- Same technical quality bar as the PlanNeat site: fast static build, full SEO/meta, structured data, analytics, accessible, responsive.

---

## 3. Brand & positioning

**Company:** Cortexalab Pvt Ltd
**Wordmark / display name:** `Cortexalab` (one word). *(If the founder prefers `Cortexa Lab` or `CORTEXA`, treat the wordmark as a single editable constant — see Placeholders §13.)*
**Name meaning to lean on:** "Cortex" → intelligence / the thinking layer; "Lab" → an experimental workshop that ships. The brand is the *intelligence layer* applied to everyday tools.

**One-line positioning:**
> Cortexalab is an independent studio building AI-native productivity apps that quietly remove the friction from everyday life.

**Positioning pillars (use as the spine of the whole site):**
1. **AI-native, not AI-bolted-on.** AI is used where it removes real effort — in the product *and* in how the product is built.
2. **Everyday problems, not enterprise abstractions.** We build consumer productivity tools for real daily routines (deciding what to cook, building better habits).
3. **Solo + AI, shipped for real.** One founder, an AI-augmented production pipeline, apps live on the Play Store and App Store.
4. **Restraint and craft.** Premium feel through simplicity; we sweat the details.

**Voice & tone:** Confident, calm, modern, technically literate but plain-spoken. Short declarative sentences. Avoid hype words ("revolutionary", "disrupt", "cutting-edge"), avoid emoji in body copy, avoid corporate filler. Borrow PlanNeat's honesty ("AI used where it saves real effort, not as a gimmick") but in a slightly cooler, studio register.

---

## 4. Visual design system (DISTINCT "AI studio" identity)

This identity must **not** reuse PlanNeat's forest-green/cream food palette. Cortexalab is the cooler, more technical parent brand. Think: deep ink canvas, generous whitespace, a single electric accent, subtle "intelligence/neural" motifs, sharp modern type.

### 4.1 Color tokens (define as CSS custom properties in `src/styles/tokens.css`)

**Core neutrals (the canvas — ink + paper):**
```
--c-ink:        #0B0F1A;   /* near-black navy-ink — dark sections, footer, hero bg option */
--c-ink-800:    #11172A;   /* elevated dark surface / cards on dark */
--c-ink-700:    #1B2236;   /* borders on dark, hover on dark */
--c-paper:      #FBFBFD;   /* light page background (cool off-white) */
--c-surface:    #FFFFFF;   /* light cards/surfaces */
--c-text:       #0E1320;   /* primary text on light */
--c-text-muted: #5A6478;   /* secondary text on light */
--c-text-onink: #E8ECF6;   /* primary text on ink */
--c-text-onink-muted: #9AA6C0; /* secondary text on ink */
--c-border:     rgba(14, 19, 32, 0.10);
--c-border-strong: rgba(14, 19, 32, 0.16);
--c-border-onink:  rgba(232, 236, 246, 0.12);
```

**Accent (electric intelligence — use deliberately, not everywhere):**
```
--c-accent:      #6D5EF6;   /* electric indigo-violet — primary brand accent, CTAs, links */
--c-accent-700:  #574BD6;   /* hover/darker */
--c-accent-300:  #A99FFB;   /* light tint, on-ink accents */
--c-iris:        #22D3EE;   /* cyan secondary — for gradients/charts/“live” dots only */
--c-ember:       #FF8A4C;   /* warm ember — rare highlight to add humanity/warmth */
```

**Signal colors:**
```
--c-success: #3FB984;   --c-info: #5B8DEF;   --c-warning: #E9B949;
```

**Signature gradient (the “neural/cortex” glow — use in hero washes, CTA blocks, product cards):**
```
--grad-cortex: linear-gradient(135deg, #6D5EF6 0%, #22D3EE 100%);
--wash-cortex: radial-gradient(60% 60% at 75% 15%, rgba(109,94,246,0.22), transparent 70%),
               radial-gradient(50% 50% at 15% 85%, rgba(34,211,238,0.14), transparent 70%);
```

**Color philosophy (carry over PlanNeat's discipline):** ink + paper dominate every surface; the indigo accent and cyan are **garnish** — small marks, single CTAs, thin gradient washes, never full backgrounds of solid saturated color. Premium via restraint.

**`theme-color` meta:** `#0B0F1A`.

### 4.2 Typography

Mirror PlanNeat's self-hosted `@fontsource` approach, but pick a **distinct, techier display face** so the brands don't read as identical.

- **Display / headings:** `Space Grotesk` (geometric, modern, slightly technical) — `@fontsource/space-grotesk`, weights 500/600/700.
- **Body / UI:** `Inter` — `@fontsource/inter`, weights 400/500.
- **Mono accent (eyebrows, code-y labels, the “AI/neural” flavor, stat captions):** `JetBrains Mono` or `IBM Plex Mono` — `@fontsource/jetbrains-mono`, weight 500. Use uppercase + letter-spacing for eyebrow labels to reinforce the engineering vibe.

**Type scale (responsive `clamp()`, same pattern as PlanNeat):**
```
--fs-hero:  clamp(2.5rem, 1.5rem + 4.2vw, 4.25rem);
--fs-h2:    clamp(1.7rem, 1.2rem + 2vw, 2.6rem);
--fs-h3:    clamp(1.2rem, 1rem + 0.9vw, 1.6rem);
--fs-lead:  clamp(1.05rem, 1rem + 0.45vw, 1.3rem);
--fs-body:  1rem;
--fs-small: 0.875rem;
--fs-eyebrow: 0.8rem;   /* mono, uppercase, letter-spacing 0.14em */
--lh-tight: 1.1;  --lh-body: 1.6;
```
Headings: letter-spacing `-0.02em`, `text-wrap: balance`. Paragraphs: `text-wrap: pretty`. Enable font smoothing.

### 4.3 Iconography
- **Library:** Lucide (stroke-based, 1.75px), inline SVG — same approach PlanNeat uses. Monoline, never filled, currentColor so they tint per context.
- Use restrained line icons for capability/value items. Avoid clip-art or 3D blobs.

### 4.4 Visual motifs / imagery
- **Neural / node motif:** subtle dotted-grid or thin connected-node line art in hero/background washes (very low opacity, decorative only). Reinforces "cortex" without being literal brains.
- **Gradient mesh** using `--grad-cortex` for hero glow, the CTA band, and the accent edge of product cards.
- **Product mockups:** reuse PlanNeat's CSS-drawn phone-frame idea (no real screenshots required to ship). For PlanNeat's card, render it in PlanNeat's own forest/cream colors (see §9) so it reads as a separate product brand nested inside the company.
- **No stock photos of people.** If any human element is wanted, keep it abstract/illustrative.

### 4.5 Motion
- Same scroll-reveal system as PlanNeat: `[data-reveal]` fade+rise on enter via IntersectionObserver; `[data-reveal-stagger] > *` children stagger (~80/160/240ms).
- Transitions: `--t-fast:120ms; --t-base:200ms; --t-slow:320ms;` easing `cubic-bezier(0.22,0.61,0.36,1)`.
- A gentle float on the hero product mockup. Respect `prefers-reduced-motion` (disable transforms/animation).

### 4.6 Shape, spacing, elevation
- Radius: cards `16px`, buttons/pills `9999px` (full), small chips `10px`.
- Shadows: soft, low-spread, cool-tinted (e.g. `0 12px 40px rgba(11,15,26,0.10)`); on ink sections rely on borders/glMore than shadow.
- Spacing scale (rem): `0.25 / 0.5 / 0.75 / 1 / 1.5 / 2 / 3 / 4 / 6 / 8`. Section vertical padding `clamp(4rem, 8vw, 7rem)`.
- Max content width ~`1120px`, generous gutters.

---

## 5. Tech stack & architecture (mirror PlanNeat)

- **Framework:** Astro `^4.16` (or latest 4.x), `output: 'static'`, TypeScript strict.
- **Integrations:** `@astrojs/sitemap` (auto sitemap-index). Set `site:` to the Cortexalab domain (Placeholder §13, e.g. `https://cortexalab.com`), `trailingSlash: 'never'`.
- **Styling:** **vanilla CSS with CSS custom properties** — no Tailwind. Token file + global reset + per-component scoped `<style>`.
- **Fonts:** self-hosted via `@fontsource/*` (no Google Fonts network calls): `space-grotesk`, `inter`, `jetbrains-mono`.
- **Icons:** inline Lucide SVGs.
- **Data layer:** single-source-of-truth TypeScript files in `src/data/` (e.g. `site.ts`, `links.ts`, `products.ts`, `company.ts`, `faq.ts`) — mirrors PlanNeat's pattern so content edits don't touch markup.
- **Analytics:** Google Analytics (gtag) injected in the base layout behind a config flag; reuse PlanNeat's store-click event pattern for outbound app-store clicks (`event: store_click`, params `store`, `placement`). Use a **new GA4 Measurement ID** for Cortexalab (Placeholder §13) — do **not** reuse PlanNeat's `G-D5KYPH9M3J`.

### Suggested file structure
```
cortexalab-web/
├── astro.config.mjs            # site URL, static, sitemap
├── firebase.json               # hosting target (see §11)
├── package.json
├── public/
│   ├── favicon.png  apple-touch-icon.png  robots.txt
│   └── og/og-default.png       # 1200x630 placeholder
├── src/
│   ├── pages/                  # index, products, about(how-we-build), contact, privacy, terms, 404
│   ├── layouts/                # BaseLayout.astro, LegalLayout.astro
│   ├── components/             # Nav, Hero, Section, ProductCard, CapabilityGrid,
│   │                           # ProcessSteps, StudioStory, StatStrip, Cta, Footer,
│   │                           # Seo, Button, Badge, PhoneMockup, NeuralBackdrop
│   ├── styles/                 # tokens.css, fonts.css, global.css
│   ├── data/                   # site.ts, links.ts, products.ts, company.ts, faq.ts
│   ├── scripts/                # reveal.ts (IntersectionObserver + sticky nav)
│   └── assets/                 # logo, product art
```

---

## 6. Information architecture (pages)

| Route | Purpose |
|---|---|
| `/` | Home: company positioning + products + how-we-build + AI process + legitimacy + CTA |
| `/products` | Dedicated product list (PlanNeat in depth + habit app "coming soon") |
| `/about` (a.k.a. "How we build" / "Studio") | Founder + AI-augmented production narrative; company facts |
| `/contact` | Contact details, company legitimacy block, inquiry email |
| `/privacy` | Company-level privacy policy |
| `/terms` | Company-level terms |
| `/404` | Friendly fallback |

> Home should stand on its own (a reviewer may never click deeper) — include condensed versions of products, studio story, and company facts on the home page, with `/products` and `/about` as expansions.

---

## 7. Homepage — section-by-section with full copy

> All copy below is final-draft and usable as-is. The wordmark `Cortexalab`, the app name `PlanNeat`, and all bracketed `[PLACEHOLDER]` values are editable constants. **App-name casing note:** PlanNeat's own site styles it **`PlanNEat`** (capital N + E). Pick one casing and use it consistently sitewide; recommended is to match whatever currently appears on `planneat.in`. This doc uses `PlanNeat` for readability.

### 7.1 Nav (sticky)
- Left: `Cortexalab` wordmark (accent-dotted or with a small node glyph).
- Links: `Products` · `How we build` · `Contact`.
- Right CTA button (accent): `View PlanNeat` → links to `https://planneat.in`.
- Mobile: collapse links into a menu; keep the CTA visible.

### 7.2 Hero
- **Eyebrow (mono):** `AN INDEPENDENT AI PRODUCT STUDIO`
- **H1:** `AI-native tools for the friction of everyday life.`
- **Lead:**
  > Cortexalab is a one-founder studio building productivity apps where AI does the tedious thinking — so you don't have to. We build the software, and we use AI to build it, end to end.
- **Primary CTA:** `Explore our products` (scrolls to Products) · **Secondary:** `How we build` → `/about`
- **Visual:** `--wash-cortex` glow + faint neural-node backdrop; a floating PhoneMockup rendered in PlanNeat's colors as a teaser of the flagship product.
- **Trust sub-line (small, muted):** `Makers of PlanNeat — live on Google Play and the App Store.`

### 7.3 Stat strip (StatStrip)
Mono-labelled stats, restrained:
- `2` — Products shipping / in build
- `2` — App stores live *(Play + App Store, via PlanNeat)*
- `100%` — AI-augmented production
- `[YEAR]` — Founded *(Placeholder)*

### 7.4 What we build (positioning band)
- **Eyebrow:** `WHAT WE DO`
- **H2:** `We turn everyday friction into quiet, intelligent software.`
- **Lead:**
  > Most days are full of small, repetitive decisions that drain time and attention. Cortexalab builds focused apps that take those decisions off your plate using AI — then get out of your way. No bloat, no dashboards to manage, no gimmicks.
- Three value items (icon + title + line):
  1. **AI-native by design** — `Intelligence is the starting point of each product, not a feature bolted on at the end.`
  2. **Built for real routines** — `We solve concrete daily problems for ordinary people — what to cook, how to keep a habit — not abstract enterprise workflows.`
  3. **Crafted, not cluttered** — `Premium through restraint. Every screen earns its place.`

### 7.5 Products (the proof)
- **Eyebrow:** `OUR PRODUCTS`
- **H2:** `Apps that are already in people's hands.`

**Product card — PlanNeat (LIVE):** *(rendered in PlanNeat's forest/cream accent so it reads as its own brand)*
- Badge: `LIVE`
- Name: `PlanNeat`
- Tagline: `Plan Indian meals with AI.`
- Body:
  > PlanNeat plans a whole week of home-style Indian meals and builds your grocery list in minutes. It starts with 800+ preloaded dishes across 50+ regional cuisines, learns how your household eats, and lets AI assemble a balanced week — then auto-generates a deduplicated shopping list. Everything free right now.
- Chips: `800+ dishes` · `50+ cuisines` · `AI weekly planning` · `Auto grocery list`
- Links: `Visit planneat.in` → `https://planneat.in` · `Google Play` → (see §9) · `App Store` → (see §9)

**Product card — Habit app (COMING SOON):** *(placeholder — founder will supply real details)*
- Badge: `COMING SOON · IN ALPHA`
- Name: `[HABIT APP NAME — PLACEHOLDER]`
- Tagline: `[One-line promise — PLACEHOLDER, e.g. "Build habits that actually stick."]`
- Body (placeholder):
  > `[PLACEHOLDER — describe the habit tracker's distinct capability here. Founder to provide. Keep to ~2 sentences emphasising what makes it different from existing habit trackers, and the AI angle. Until supplied, render this lighter/greyed with a "Details coming soon" note.]`
- Chips (placeholder): `AI-assisted` · `[Differentiator 1]` · `[Differentiator 2]`
- CTA: `Notify me` → mailto/`[WAITLIST LINK PLACEHOLDER]` (optional).

### 7.6 How we build — the solo + AI story (StudioStory) — *headline narrative*
- **Eyebrow:** `HOW WE BUILD`
- **H2:** `One founder. A stack of AI copilots. Apps that actually ship.`
- **Lead:**
  > Cortexalab is deliberately small. A single founder designs, builds, and ships every product — working alongside modern AI coding tools as a full production team. It's a new way to make software: lean, fast, and AI-native from the first line of code to the last pixel.
- **Body:**
  > AI doesn't just live inside our apps — it's how we make them. Product design, engineering, copy, and release work are all AI-augmented, using tools like Codex, Cursor, and Claude Code. That's how one person ships polished, store-grade apps on two platforms, and keeps shipping.
  >
  > We think this is what the next generation of software companies looks like: small teams with enormous leverage, focused on doing a few things exceptionally well.
- Optional three-step "process" mini-row (ProcessSteps), mono-numbered:
  1. **Design with AI** — `Shape the product, flows, and copy fast — exploring more options than a small team normally could.`
  2. **Build with AI** — `Engineer features with AI coding copilots, keeping a human firmly in control of every decision.`
  3. **Ship & learn** — `Release to real users on Play Store and App Store, then iterate on what they actually do.`
- Honesty line (echoing PlanNeat's voice): `AI assists; the founder stays in control. Every decision is human-reviewed.`

### 7.7 Why AI-native (optional belief band)
- **Eyebrow:** `OUR APPROACH`
- **H2:** `Software should think, so you don't have to.`
- **Lead:**
  > We believe the best everyday tools quietly absorb effort. Each Cortexalab app is built around a simple test: does the AI remove a real chore, or is it just there for show? If it's the latter, it doesn't ship.

### 7.8 Company / legitimacy band (CompanyFacts) — *important for Apple review*
- **Eyebrow:** `THE COMPANY`
- **H2:** `Cortexalab Pvt Ltd`
- Body:
  > Cortexalab Pvt Ltd is a private limited company registered in India, building and operating consumer software products including PlanNeat.
- Facts list (mono labels, all editable placeholders):
  - `Legal name:` Cortexalab Pvt Ltd
  - `Registration (CIN):` `[CIN PLACEHOLDER]`
  - `Registered office:` `[ADDRESS PLACEHOLDER]`
  - `Email:` `[hello@cortexalab.com PLACEHOLDER]`
  - `Phone:` `[PHONE PLACEHOLDER]`
  - `Founded:` `[YEAR PLACEHOLDER]`

### 7.9 Final CTA band (Cta) — ink background + `--grad-cortex` edge
- **H2:** `Built with intelligence. Designed for everyday life.`
- **Lead:** `See what an AI-native studio can ship.`
- Buttons: `Explore PlanNeat` → `https://planneat.in` · `Get in touch` → `/contact`

### 7.10 Footer (ink)
- Wordmark + one-liner: `Cortexalab — AI-native productivity tools.`
- Columns:
  - **Products:** PlanNeat · `[Habit app]` (Coming soon)
  - **Company:** How we build · Contact · Privacy · Terms
  - **PlanNeat:** planneat.in · Google Play · App Store
- Legal row: `© [YEAR] Cortexalab Pvt Ltd. All rights reserved.` + registered-office line (small).

---

## 8. Other pages — copy

### 8.1 `/products`
- **H1:** `Products`
- **Intro:** `Focused apps that take everyday decisions off your plate. Here's what we've shipped — and what's next.`
- **PlanNeat (expanded):** reuse §7.5 PlanNeat copy, plus a condensed feature list drawn from §9 (Indian-first dish library, plan-the-week, set-rules-once AI planning, instant deduplicated grocery list, deep customisation). Each as a short line item. Links to planneat.in + both stores.
- **Habit app (expanded, placeholder):** badge `COMING SOON · IN ALPHA`; placeholder description block; `[capabilities — founder to provide]`; optional waitlist CTA.

### 8.2 `/about` ("How we build" / "Studio")
- **H1:** `How we build`
- Expand §7.6 into 3–4 short paragraphs: the founder, the philosophy of a lean AI-native studio, the specific role AI plays across design/engineering/release (Codex, Cursor, Claude Code), and the commitment that AI assists while a human owns every decision and reviews every release.
- Include the §7.8 company facts block here too (legitimacy on a likely-visited page).
- Tone: confident, modern, specific. Avoid sounding apologetic about being small — frame it as leverage.

### 8.3 `/contact`
- **H1:** `Get in touch`
- **Intro:** `Questions, partnership ideas, press, or support — reach out and you'll hear back from the founder directly.`
- Contact methods (cards): General `[hello@cortexalab.com]`, PlanNeat support `support@planneat.in` (real, from PlanNeat), Phone `[PLACEHOLDER]`.
- Full company legitimacy block (§7.8).

### 8.4 `/privacy` and `/terms`
- Company-level documents using `LegalLayout`. Cover: who Cortexalab is, what the site collects (basic analytics via GA4 — cookies/usage), no account system on the marketing site, links to **each product's own** privacy policy (PlanNeat's lives on planneat.in) for app-specific data handling, contact for data requests, governing law `[India / jurisdiction PLACEHOLDER]`, effective date `[PLACEHOLDER]`.
- Keep concise and accurate; do **not** copy PlanNeat's app privacy policy verbatim (different scope — that one covers Firebase/Algolia/Gemini app data; the company site policy is just about the website).

---

## 9. PlanNeat reference appendix (so the agent needs nothing else)

**Canonical facts**
- App name / casing on its own site: **`PlanNEat`** (capital N+E). Website: `https://planneat.in`.
- Tagline / hero: **"Plan Indian meals with AI."**
- One-paragraph description:
  > Plan a whole week of home-style Indian meals with AI. 800+ dishes preloaded across 50+ regional cuisines, plus an auto-generated grocery list. Everything free right now, no credit card needed.
- Headline stats: **800+ home-style dishes**, **50+ regional cuisines**, **₹0 / free, no paywall**.

**Store links (use exactly):**
- Google Play: `https://play.google.com/store/apps/details?id=com.nikhil.mealplanner`
- Apple App Store (India): `https://apps.apple.com/in/app/planneat-indian-meal-planner/id6761127147`
- Android package id: `com.nikhil.mealplanner`

**Feature one-liners (for the expanded PlanNeat section):**
1. **Built for Indian kitchens** — 800+ dishes preloaded and pre-mapped to ingredients; plans the Indian way (roti/rice + curry + sabji), narrowed to your household by cuisine/diet/allergy.
2. **Plan the week in minutes** — full week on one screen; copy/paste last week; drag-drop to rearrange.
3. **Set your rules once** — meal shapes, weekly rhythm, diet/allergy filters, custom rules; AI builds a balanced week from your personalised menu.
4. **Grocery list in an instant** — one tap; combines and deduplicates every ingredient; auto clean-up; quantities left to you by design.
5. **Customise it** — add your own dishes (AI fetches base ingredients), edit ingredients permanently, remove dishes you never make.
6. **What the AI does** — weekly planning, ingredient fetch, mood-based suggestions, cook-with-what-you-have, on-demand recipes; everything cached and editable. *"AI used where it saves real effort, not as a gimmick."*

**PlanNeat brand colors (for rendering its product card / mockup only — do NOT use as Cortexalab's palette):**
`forest #2d5038`, `sage #5fa073`, `cream #efead5`, `clay (CTA) #d97757`, `gold wash #ead98b`, body text `#1f2a22`.

**Emails:** PlanNeat `hello@planneat.in`, `support@planneat.in`, `feedback@planneat.in`. *(Cortexalab company email is a separate placeholder, §13.)*

**Founder:** Nikhil Mathew.

---

## 10. SEO, meta & structured data

Reuse PlanNeat's `Seo.astro` pattern (canonical, Open Graph, Twitter card, theme-color, JSON-LD).
- **Per-page:** title, description, canonical, OG image (`/og/og-default.png` placeholder 1200×630).
- **JSON-LD `Organization`** on home/about:
  ```json
  { "@type": "Organization", "name": "Cortexalab Pvt Ltd", "url": "[SITE URL]",
    "logo": "[LOGO URL]", "email": "[EMAIL]", "founder": "Nikhil Mathew",
    "address": { "@type": "PostalAddress", "addressCountry": "IN", "streetAddress": "[ADDRESS]" },
    "sameAs": ["https://planneat.in", "[store links]"] }
  ```
- **JSON-LD `SoftwareApplication`** for PlanNeat on `/products` (name, operatingSystem Android/iOS, applicationCategory, the two store URLs, free price).
- `robots.txt`: allow all + `Sitemap: [SITE URL]/sitemap-index.xml`.
- Titles e.g. `Cortexalab — AI-native productivity tools`; `Products — Cortexalab`; `How we build — Cortexalab`.

---

## 11. Deploy (Firebase Hosting, NEW target)

Mirror PlanNeat's setup but as a **separate hosting site/target** so it never collides with `planneat`.
- `firebase.json` (in project root): `"hosting": { "site": "[cortexalab-site-id PLACEHOLDER]", "public": "dist", "cleanUrls": true, "trailingSlash": false }` with caching headers — assets `public, max-age=31536000, immutable`; `*.html` `public, max-age=0, must-revalidate`.
- Use a **new** Firebase Hosting site id (e.g. `cortexalab`) under the existing or a new Firebase project (founder's choice — Placeholder §13). Deploy: `npm run build && firebase deploy --only hosting:[target]`.
- Point the custom domain (`[cortexalab domain PLACEHOLDER]`) at the Firebase site once verified.

---

## 12. Build sequence for the agent

1. Scaffold Astro static project; add `@astrojs/sitemap`, `@fontsource/{space-grotesk,inter,jetbrains-mono}`.
2. Create `styles/tokens.css` (§4.1–4.6), `fonts.css`, `global.css` (reset + reveal animations).
3. Build `BaseLayout` + `Seo` + `Nav` + `Footer` + `reveal.ts`.
4. Populate `src/data/` (`site.ts`, `links.ts`, `products.ts`, `company.ts`, `faq.ts`) from §7–§9 so all copy/links/facts are data-driven.
5. Build home sections (§7.1–7.10) as components.
6. Build `/products`, `/about`, `/contact`, `/privacy`, `/terms`, `/404` (§8).
7. Wire GA4 (new ID) + outbound store-click events.
8. Add `robots.txt`, OG placeholder, favicon/apple-touch placeholders, JSON-LD.
9. Add `firebase.json` (§11).
10. Responsive + reduced-motion + a11y pass.

---

## 13. Placeholders to fill (single source — keep in `src/data/`)

| Placeholder | Where |
|---|---|
| Wordmark casing (`Cortexalab` vs `Cortexa Lab`/`CORTEXA`) | global |
| App-name casing (`PlanNeat` vs `PlanNEat`) | global |
| Cortexalab domain / `site:` URL | astro.config, SEO, JSON-LD |
| Company email (e.g. `hello@cortexalab.com`) | hero/contact/footer/JSON-LD |
| Phone number | contact, company facts |
| Registered office address | company facts, footer, JSON-LD |
| CIN / registration number | company facts |
| Founded year | stats, footer, JSON-LD |
| GA4 Measurement ID (new, not PlanNeat's) | base layout |
| Firebase project + hosting site id | firebase.json, .firebaserc |
| Logo / favicon / apple-touch / OG image assets | public/ |
| Habit app: name, tagline, description, differentiators, waitlist link | products, home |
| Legal: governing jurisdiction, effective dates | privacy/terms |

---

## 14. Verification

After the agent builds:
1. `npm run build` succeeds; `npm run preview` serves with no console errors.
2. **Cold-reviewer test:** on `/` a first-time visitor can tell within ~10s that this is a real company shipping real apps, and can reach PlanNeat's site + both store listings in one click.
3. **Legitimacy:** company name, registration, address, email, phone all render (placeholders clearly marked until filled); legal pages reachable from the footer.
4. **Brand distinctness:** the site is clearly NOT PlanNeat's green food brand — ink/indigo studio identity — yet the PlanNeat product card reads in its own colors.
5. **Responsive:** mobile / tablet / desktop layouts hold; nav collapses; CTA stays reachable.
6. **A11y/motion:** keyboard-navigable; visible focus states; `prefers-reduced-motion` disables animation; color contrast passes on both ink and paper surfaces.
7. **SEO:** unique title/description per page, canonical tags, OG image, `Organization` + `SoftwareApplication` JSON-LD validate, `robots.txt` points to sitemap, sitemap generated.
8. **Links:** all store/PlanNeat links open correctly; GA store-click events fire (check GA debug/network).
9. **Lighthouse:** Performance/SEO/Best-Practices/Accessibility ≥ 90 on the home page.
