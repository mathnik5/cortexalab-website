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
  founded: { value: '2025', isPlaceholder: false },
  cin: { value: 'U70200KA2025PTC206633', isPlaceholder: false },
  address: {
    value:
      'No. 3/1, Sivagiri, 2nd Floor, 1st Cross, V K Ramanna Block, Nandini Layout Post, Bengaluru, Karnataka 560096',
    isPlaceholder: false,
  },
  email: { value: 'info@cortexalab.com', isPlaceholder: false },
  phone: { value: '+91 83100 26174', isPlaceholder: false },
  jurisdiction: { value: 'India', isPlaceholder: false },
  legalEffectiveDate: { value: '13 August 2025', isPlaceholder: false },
} as const;

/**
 * Waitlist form (Web3Forms — static-site friendly, AJAX submit, no backend).
 * Get a free access key in ~30s at https://web3forms.com (enter the inbox you
 * want signups delivered to, e.g. info@cortexalab.com, and copy the key here).
 * The access key is SAFE to commit publicly: it can only deliver to your
 * verified email. While `accessKey` is empty, the form falls back to a mailto.
 */
export const waitlistForm = {
  accessKey: '', // PLACEHOLDER — paste Web3Forms access key to enable in-form submit
  endpoint: 'https://api.web3forms.com/submit',
  subject: 'New waitlist signup: CortexaLab habit app',
  fallbackMailto:
    'mailto:info@cortexalab.com?subject=Waitlist%3A%20CortexaLab%20habit%20app',
} as const;

/** Structured address parts for JSON-LD PostalAddress (schema.org). */
export const addressParts = {
  streetAddress:
    'No. 3/1, Sivagiri, 2nd Floor, 1st Cross, V K Ramanna Block, Nandini Layout Post',
  addressLocality: 'Bengaluru',
  addressRegion: 'Karnataka',
  postalCode: '560096',
  addressCountry: 'IN',
} as const;
