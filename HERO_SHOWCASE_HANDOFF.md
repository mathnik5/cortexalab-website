# Handoff: PlanNEat "floating phone + popped-out card" hero showcase

Recreate the PlanNEat hero visual in the cortexalab Astro site. It is a CSS-drawn
phone frame holding an app screenshot, with a full-width "day card" popped out in
front of the screen, both gently floating on an infinite loop. It is **image-based**
(two PNGs) — not a CSS reconstruction of the UI.

## 1. Assets (copy these two files)

Place both into the cortexalab repo at `src/assets/screenshots/`:

- `planner-full.png`      — the phone screenshot shown inside the frame
- `planner-top-card.png`  — the popped-out full-width day card (Breakfast/Lunch/Snacks/Dinner)

These are imported via `astro:assets` (`import { Image } from 'astro:assets'`), which
gives responsive `srcset`/sizes automatically. If you'd rather not use astro:assets,
swap `<Image .../>` for a plain `<img>` pointing at `/public`.

## 2. Component: `src/components/HeroShowcase.astro`

The component below is **self-contained**: every design token it needs is provided as
a CSS custom-property *fallback* (`var(--token, fallback)`), so it renders correctly
even if cortexalab's token names differ. If cortexalab already defines `--ease`,
`--r-full`, `--c-surface`, `--c-border`, those win; otherwise the inline fallbacks
apply.

```astro
---
/*
 * Hero visual: an app screenshot inside a CSS-drawn phone frame, with the
 * full-width "day card" popped out in front of the screen. The pop-out (a)
 * emphasises the card and (b) reveals all four meal columns that are clipped
 * off the right edge in the actual phone-width view. Both elements float on a
 * gentle, slightly-parallaxed 7s loop. Pauses under prefers-reduced-motion.
 */
import { Image } from 'astro:assets';
import fullShot from '../assets/screenshots/planner-full.png';
import topCard from '../assets/screenshots/planner-top-card.png';
---

<div class="showcase">
  <div class="phone">
    <div class="phone__frame">
      <div class="phone__notch"></div>
      <div class="phone__screen">
        <Image
          class="phone__shot"
          src={fullShot}
          alt="App screenshot"
          widths={[300, 600, 900]}
          sizes="(max-width: 860px) 78vw, 300px"
          loading="eager"
        />
      </div>
    </div>
  </div>

  <figure class="showcase__card" aria-hidden="true">
    <Image
      class="showcase__card-img"
      src={topCard}
      alt=""
      widths={[360, 720, 1080]}
      sizes="(max-width: 600px) 92vw, 380px"
      loading="eager"
    />
  </figure>
</div>

<style>
  .showcase {
    /* token fallbacks — override by defining these globally if you have them */
    --frame: #11160f;
    --ease: var(--ease, cubic-bezier(0.22, 0.61, 0.36, 1));
    --r-full: var(--r-full, 9999px);
    --c-surface: var(--c-surface, #fffdf6);
    --c-border: var(--c-border, rgba(31, 42, 34, 0.1));

    position: relative;
    width: min(300px, 78vw);
    margin-inline: auto;
    /* room for the popped-out card to overhang without being clipped */
    padding-bottom: 2rem;
    animation: showcase-float 7s var(--ease) infinite;
  }

  .phone {
    filter: drop-shadow(0 30px 50px rgba(16, 24, 40, 0.18));
  }

  .phone__frame {
    position: relative;
    aspect-ratio: 300 / 620;
    background: var(--frame);
    border-radius: 42px;
    padding: 12px;
    box-shadow:
      inset 0 0 0 2px rgba(255, 255, 255, 0.08),
      inset 0 0 0 7px #000;
  }

  .phone__notch {
    position: absolute;
    top: 14px;
    left: 50%;
    transform: translateX(-50%);
    width: 38%;
    height: 18px;
    background: var(--frame);
    border-radius: var(--r-full);
    z-index: 2;
  }

  .phone__screen {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    /* dark inset at the top so the screenshot starts below the camera notch */
    padding-top: 26px;
    border-radius: 32px;
    overflow: hidden;
    background: var(--frame);
  }
  .phone__shot {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }

  /* ---- popped-out full-width day card ---- */
  .showcase__card {
    position: absolute;
    left: 50%;
    top: 12%;
    width: 133%;
    margin: 0;
    transform: translateX(-50%) rotate(-2deg);
    border-radius: 14px;
    overflow: hidden;
    background: var(--c-surface);
    border: 1px solid var(--c-border);
    box-shadow:
      0 22px 45px rgba(16, 24, 40, 0.28),
      0 6px 14px rgba(16, 24, 40, 0.16);
    animation: card-float 7s var(--ease) infinite;
  }
  .showcase__card-img {
    display: block;
    width: 100%;
    height: auto;
  }

  /* Gentle, slightly-parallaxed float so the card reads as lifted off the
     screen rather than pasted on. */
  @keyframes showcase-float {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-8px); }
  }
  @keyframes card-float {
    0%, 100% { transform: translateX(-50%) translateY(0) rotate(-2deg); }
    50%      { transform: translateX(-50%) translateY(-14px) rotate(-2deg); }
  }

  @media (prefers-reduced-motion: reduce) {
    .showcase,
    .showcase__card {
      animation: none;
    }
  }
</style>
```

## 3. Using it in a hero section

Drop `<HeroShowcase />` into the visual column of your hero. Reference wiring:

```astro
---
import HeroShowcase from '../components/HeroShowcase.astro';
---
<section class="hero">
  <div class="hero__inner">
    <div class="hero__copy"> ...headline + CTA... </div>
    <div class="hero__visual"><HeroShowcase /></div>
  </div>
</section>

<style>
  .hero__inner {
    display: grid;
    gap: clamp(2rem, 1rem + 4vw, 3.5rem);
    align-items: center;
    grid-template-columns: 1fr;
  }
  .hero__visual { display: flex; justify-content: center; }

  @media (min-width: 860px) {
    .hero__inner  { grid-template-columns: 1.05fr 0.95fr; }
    .hero__visual { justify-content: flex-end; }
  }
</style>
```

## 4. How it works (so you can tweak safely)

- **Phone frame** is pure CSS: a dark rounded rect (`aspect-ratio: 300/620`), an
  inset double box-shadow for the bezel, and an absolutely-positioned notch.
- **Screenshot** fills the frame with `object-fit: cover; object-position: top center`,
  pushed down `26px` so it clears the notch.
- **Popped-out card** is a sibling positioned `absolute; left:50%; top:12%`, made wider
  than the frame (`width:133%`) and rotated `-2deg`. This overhang is why the parent
  has `padding-bottom: 2rem` and the frame's `.phone__screen` is the only thing with
  `overflow:hidden` — the card must NOT be clipped, so don't add `overflow:hidden` to
  `.showcase`.
- **Two animations** run on the same 7s timeline but with different travel
  (`-8px` vs `-14px`) to create a subtle parallax depth cue.
- The card carries `aria-hidden="true"` and empty `alt` because it duplicates content
  already in the screenshot — keep that for accessibility.

## 5. Adapting to cortexalab's brand

- `--frame: #11160f` is the phone bezel colour — change to taste.
- The card's `background`/`border` come from `--c-surface` / `--c-border`. Either
  define those tokens globally in cortexalab, or hard-code hex values in the fallbacks.
- Swap the two PNGs for cortexalab's own product screenshots. Keep the same general
  proportions: `planner-full.png` ~ portrait phone aspect; `planner-top-card.png` a
  wide card crop. If you change aspect ratios, retune `top`, `width`, and the
  `rotate(-2deg)` on `.showcase__card`.

## 6. Optional: the fully-animated CSS planner (no screenshots needed)

PlanNEat also has a 100% CSS/HTML animated planner (`PlannerAnimation.astro`) that
demonstrates drag → multi-select → copy → paste with finger/tap ripples and toasts,
on a shared 15s loop. It needs NO images. It's larger (~1100 lines) and depends on the
same token fallbacks plus `--font-display`/`--fw-display`. If cortexalab wants a
live animated demo rather than a floating screenshot, ask for that file separately —
it's a drop-in `.astro` component with the same self-contained structure.
```
