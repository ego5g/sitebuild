
import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation';

export const locales = ['en', 'ru' , 'ka'] as const;

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
  createLocalizedPathnamesNavigation({locales, pathnames});

// Use the default: `always`
export const localePrefix = 'always';

export type AppPathnames = keyof typeof pathnames;
