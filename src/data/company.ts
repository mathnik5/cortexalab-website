import { placeholders, site } from './site';

/** Company legitimacy facts — labels are stable, values may be placeholders. */
export const companyFacts = [
  { label: 'Legal name', value: site.legalName, isPlaceholder: false },
  { label: 'Registration (CIN)', value: placeholders.cin.value, isPlaceholder: placeholders.cin.isPlaceholder },
  { label: 'Registered office', value: placeholders.address.value, isPlaceholder: placeholders.address.isPlaceholder },
  { label: 'Email', value: placeholders.email.value, isPlaceholder: placeholders.email.isPlaceholder },
  { label: 'Phone', value: placeholders.phone.value, isPlaceholder: placeholders.phone.isPlaceholder },
  { label: 'Founded', value: placeholders.founded.value, isPlaceholder: placeholders.founded.isPlaceholder },
] as const;

export const stats = [
  { value: '2', label: 'Products shipping / in build' },
  { value: '2', label: 'App stores live' },
  { value: '100%', label: 'AI-augmented production' },
  { value: placeholders.founded.value, label: 'Founded' },
] as const;

export const process = [
  {
    n: '01',
    title: 'Design with AI',
    body: 'Shape the product, flows and copy fast — exploring more options than a small team normally could.',
  },
  {
    n: '02',
    title: 'Build with AI',
    body: 'Engineer features with AI coding copilots, keeping a human firmly in control of every decision.',
  },
  {
    n: '03',
    title: 'Ship & learn',
    body: 'Release to real users on the Play Store and App Store, then iterate on what they actually do.',
  },
] as const;

export const capabilities = [
  {
    icon: 'sparkles',
    title: 'AI-native by design',
    body: 'Intelligence is the starting point of each product, not a feature bolted on at the end.',
  },
  {
    icon: 'home',
    title: 'Built for real routines',
    body: 'We solve concrete daily problems for ordinary people — what to cook, how to keep a habit — not abstract enterprise workflows.',
  },
  {
    icon: 'gem',
    title: 'Crafted, not cluttered',
    body: 'Premium through restraint. Every screen earns its place.',
  },
] as const;
