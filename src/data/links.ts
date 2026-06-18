/** Outbound links — single source of truth. */

export const links = {
  planneat: {
    site: 'https://planneat.in',
    googlePlay:
      'https://play.google.com/store/apps/details?id=com.nikhil.mealplanner',
    appStore:
      'https://apps.apple.com/in/app/planneat-indian-meal-planner/id6761127147',
    packageId: 'com.nikhil.mealplanner',
    supportEmail: 'support@planneat.in',
    helloEmail: 'hello@planneat.in',
  },
  nav: [
    { label: 'Products', href: '/products' },
    { label: 'How we build', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;
