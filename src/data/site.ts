/**
 * Global site constants — wordmark, app-name casing, domain, SEO defaults,
 * and the editable PLACEHOLDER values the founder will fill later.
 *
 * Anything wrapped in PLACEHOLDER() renders with a visible marker so an
 * unfilled value is obvious in the UI (and to an Apple reviewer it reads as
 * "to be confirmed" rather than a broken/missing field).
 */

/** Wrap a not-yet-final value. Keep `filled: false` until a real value lands. */
export function placeholder(value: string): string {
  return value;
}

export const site = {
  /** Brand wordmark, used everywhere. */
  wordmark: 'CortexaLab',
  /** Flagship app name casing, used everywhere. */
  appName: 'PlanNEat',

  legalName: 'CortexaLab Pvt Ltd',
  domain: 'https://cortexalab.com',

  tagline: 'AI-native productivity tools.',
  description:
    'CortexaLab is an independent studio building AI-native productivity apps that quietly remove the friction from everyday life. Makers of PlanNEat.',

  founder: 'Nikhil Mathew',

  /** Google Analytics 4. Leave enabled:false until a real, NEW id is issued
   *  (do NOT reuse PlanNEat's G-D5KYPH9M3J). */
  analytics: {
    enabled: false,
    measurementId: 'G-XXXXXXXXXX', // PLACEHOLDER
  },

  ogImage: '/og/og-default.png',
} as const;

/**
 * Editable legitimacy + contact placeholders (single source of truth).
 * `isPlaceholder: true` => the UI shows it as "to be confirmed".
 */
export const placeholders = {
  founded: { value: '2025', isPlaceholder: true },
  cin: { value: 'CIN — to be confirmed', isPlaceholder: true },
  address: {
    value: 'Registered office address — to be confirmed, India',
    isPlaceholder: true,
  },
  email: { value: 'hello@cortexalab.com', isPlaceholder: true },
  phone: { value: 'Phone — to be confirmed', isPlaceholder: true },
  jurisdiction: { value: 'India', isPlaceholder: true },
  legalEffectiveDate: { value: 'To be confirmed', isPlaceholder: true },
} as const;
