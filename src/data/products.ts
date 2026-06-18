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
  /** Optional waitlist link (e.g. mailto) for coming-soon products. */
  waitlist?: string;
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
    body: 'PlanNEat plans a whole week of home-style Indian meals and builds your grocery list in minutes. It starts with 800+ preloaded dishes across 50+ regional cuisines, learns how your household eats, and lets AI assemble a balanced week, then auto-generates a deduplicated shopping list. Everything free right now.',
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
        body: 'Meal shapes, weekly rhythm, diet/allergy filters and custom rules. AI builds a balanced week from your personalised menu.',
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
        body: 'Weekly planning, ingredient fetch, mood-based suggestions, cook-with-what-you-have and on-demand recipes, all cached and editable, never a gimmick.',
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
    badge: 'IN ALPHA · COMING SOON',
    tagline: 'Tasks, habits, and time in one app.',
    body: 'Most of us juggle a to-do app, a habit tracker, and a time tracker. Our second product brings all three together: see what is pending, save the history every time you finish, and have the time blocked into your calendar automatically. Under it is a scoring system built for real life, not an idealised one.',
    chips: ['Tasks + habits + time', 'Daily completion %', 'Non-streak scoring', 'Auto time-blocking'],
    features: [
      {
        title: 'One app, three jobs',
        body: 'Tasks, habits, and time tracking in a single place. Finish something and its completion history is saved while the time is blocked into your calendar, with no switching between apps.',
      },
      {
        title: 'Three kinds of targets',
        body: 'Binary to-dos (done or not done), quantity targets (eight glasses of water a day), and time targets (thirty minutes of exercise a day).',
      },
      {
        title: 'Progress you can feel',
        body: 'A daily completion percentage shows how far you actually got, not just what is left. Finishing real work feels like progress instead of a list of failures.',
      },
      {
        title: 'Scoring that survives real life',
        body: 'Cumulative, non-streak scoring. Miss a day and you take a small dip, never a reset to zero, with a recovery bonus when you return. A vacation or a rough week does not erase months of effort.',
      },
      {
        title: 'Rewards persistence, not just consistency',
        body: 'Bank a big effort on a motivated day. Read seventy pages on Sunday instead of ten a day, and the time you pour into a task is rewarded rather than punished when it runs long.',
      },
      {
        title: 'Tuned to how you work',
        body: 'Preset durations log routine tasks automatically, priority multipliers make a dull task worth more, filters hide lists that do not matter right now, and you decide which tasks earn points.',
      },
    ],
    waitlist: '/products#waitlist',
    cta: [],
  },
];

export const planneat = products[0];
export const habitApp = products[1];
