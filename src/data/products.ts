import { links } from './links';

export interface Product {
  id: string;
  name: string;
  status: 'live' | 'coming-soon';
  badge: string;
  tagline: string;
  body: string;
  chips: string[];
  /** Expanded feature one-liners for /products. */
  features?: { title: string; body: string }[];
  cta?: { label: string; href: string }[];
  /** Marks placeholder (greyed) rendering. */
  isPlaceholder?: boolean;
}

export const products: Product[] = [
  {
    id: 'planneat',
    name: 'PlanNEat',
    status: 'live',
    badge: 'LIVE',
    tagline: 'Plan Indian meals with AI.',
    body: 'PlanNEat plans a whole week of home-style Indian meals and builds your grocery list in minutes. It starts with 800+ preloaded dishes across 50+ regional cuisines, learns how your household eats, and lets AI assemble a balanced week — then auto-generates a deduplicated shopping list. Everything free right now.',
    chips: ['800+ dishes', '50+ cuisines', 'AI weekly planning', 'Auto grocery list'],
    features: [
      {
        title: 'Built for Indian kitchens',
        body: '800+ dishes preloaded and pre-mapped to ingredients; plans the Indian way (roti/rice + curry + sabji), narrowed to your household by cuisine, diet and allergy.',
      },
      {
        title: 'Plan the week in minutes',
        body: 'The full week on one screen; copy/paste last week; drag-and-drop to rearrange.',
      },
      {
        title: 'Set your rules once',
        body: 'Meal shapes, weekly rhythm, diet/allergy filters and custom rules — AI builds a balanced week from your personalised menu.',
      },
      {
        title: 'Grocery list in an instant',
        body: 'One tap combines and deduplicates every ingredient, with auto clean-up; quantities are left to you by design.',
      },
      {
        title: 'Customise it',
        body: 'Add your own dishes (AI fetches base ingredients), edit ingredients permanently, and remove dishes you never make.',
      },
      {
        title: 'AI used where it saves real effort',
        body: 'Weekly planning, ingredient fetch, mood-based suggestions, cook-with-what-you-have and on-demand recipes — everything cached and editable, never a gimmick.',
      },
    ],
    cta: [
      { label: 'Visit planneat.in', href: links.planneat.site },
      { label: 'Google Play', href: links.planneat.googlePlay },
      { label: 'App Store', href: links.planneat.appStore },
    ],
  },
  {
    id: 'habit',
    name: 'Habit app',
    status: 'coming-soon',
    badge: 'COMING SOON · IN ALPHA',
    tagline: 'Build habits that actually stick.',
    body: 'Our next product is an AI-assisted habit tracker, currently in alpha. It is designed to remove the friction of staying consistent — full details coming soon.',
    chips: ['AI-assisted', 'Differentiator 1', 'Differentiator 2'],
    isPlaceholder: true,
    cta: [],
  },
];

export const planneat = products[0];
export const habitApp = products[1];
