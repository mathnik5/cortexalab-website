/**
 * Scroll-reveal (IntersectionObserver) + sticky-nav shadow on scroll.
 * Respects prefers-reduced-motion (the CSS already shows everything; we just
 * skip wiring the observer so nothing depends on JS to become visible).
 */

function initReveal(): void {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll<HTMLElement>(
    '[data-reveal], [data-reveal-stagger]',
  );

  if (reduce || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
  );

  targets.forEach((el) => observer.observe(el));
}

function initStickyNav(): void {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initMobileMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-menu]');
  if (!toggle || !menu) return;

  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  menu.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => setOpen(false)),
  );

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
}

/**
 * Outbound app-store click analytics. Mirrors PlanNEat's pattern:
 *   event: 'store_click', params: { store, placement }
 */
function initStoreClicks(): void {
  document.querySelectorAll<HTMLAnchorElement>('[data-store]').forEach((el) => {
    el.addEventListener('click', () => {
      const store = el.dataset.store;
      const placement = el.dataset.placement ?? 'unknown';
      const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
      if (typeof gtag === 'function') {
        gtag('event', 'store_click', { store, placement });
      }
    });
  });
}

function init(): void {
  initReveal();
  initStickyNav();
  initMobileMenu();
  initStoreClicks();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
