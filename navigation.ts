
import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation';

export const locales = ['en', 'ru' , 'ka'] as const;

// The `pathnames` object holds pairs of internal / navigation pathnames.
// The key is the internal path, and the value is the language-specific navigation path.
export const pathnames = {
  '/': '/',
  '/about': {
    en: '/about',
    ru: '/about',
    ka: '/about',
  },
  '/portfolio': {
    en: '/portfolio',
    ru: '/portfolio',
    ka: '/portfolio',
  },
  '/services': {
    en: '/services',
    ru: '/services',
    ka: '/services',
  },
  '/prices': {
    en: '/prices',
    ru: '/prices',
    ka: '/prices',
  },
  '/templates': {
    en: '/templates',
    ru: '/templates',
    ka: '/templates',
  },
  '/contact': {
    en: '/contact',
    ru: '/contact',
    ka: '/contact',
  },
} satisfies Pathnames<typeof locales>;

export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({locales, pathnames, localePrefix: 'always'});

// No need to export localePrefix separately anymore as it's now part of the navigation configuration.

export type AppPathnames = keyof typeof pathnames;
