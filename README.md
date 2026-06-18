# CortexaLab Website

The company website for **CortexaLab Pvt Ltd** — an independent, AI-native product
studio and the maker of **PlanNEat**. Built as a fast, static, multi-page site with
a distinct "AI studio" identity (ink + indigo), deployed to `cortexalab.com`.

## Tech stack

- **Astro** (`output: 'static'`, TypeScript strict) + `@astrojs/sitemap`
- **Vanilla CSS** with custom-property design tokens (no Tailwind)
- **Self-hosted fonts** via `@fontsource` (Space Grotesk, Inter, JetBrains Mono)
- Inline **Lucide** icons; scroll-reveal via IntersectionObserver
- **GitHub Pages** deploy (GitHub Actions)

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the production build
```

## Project structure

```
src/
├── pages/        index, products, about, contact, privacy, terms, 404
├── layouts/      BaseLayout.astro, LegalLayout.astro
├── components/   Nav, Footer, Hero pieces, ProductCard, CompanyFacts, Cta, …
├── data/         site.ts, links.ts, products.ts, company.ts, faq.ts  ← edit content here
├── styles/       tokens.css, fonts.css, global.css
└── scripts/      reveal.ts (reveal + sticky nav + mobile menu + store-click events)
public/           CNAME, robots.txt, favicon/apple-touch/og, logo
```

All copy, links, and company facts live in `src/data/` — edit those, not the markup.

## Filling placeholders

Legitimacy and contact details ship as clearly-marked placeholders. Update them in
one place: **`src/data/site.ts`** (`placeholders` object — CIN, registered address,
phone, founded year, company email, jurisdiction, legal effective date) and flip
`analytics.enabled` once a **new** GA4 Measurement ID is issued (do not reuse
PlanNEat's). The habit-tracker product copy lives in `src/data/products.ts`.

## Deployment (GitHub Pages)

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the Astro site
and publishes `dist/` to GitHub Pages. The custom domain is set via `public/CNAME`
(`cortexalab.com`), which is copied into the build output.

> **One-time setup:** in the GitHub repo, go to **Settings → Pages → Build and
> deployment → Source** and select **GitHub Actions**. This switches Pages from the
> old "deploy from a branch" mode to the Actions workflow above.
