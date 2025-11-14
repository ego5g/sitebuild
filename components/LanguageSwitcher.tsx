'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname, locales } from '../navigation';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  const localeNames: {[key: string]: string} = {
    en: 'English',
    ru: 'Русский',
    ka: 'ქართული'
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
      >
        <span>{currentLocale.toUpperCase()}</span>
        <svg
          className="fill-current h-4 w-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.516 7.548c.436-.446 1.144-.446 1.58 0L10 10.435l2.904-2.887c.436-.446 1.144-.446 1.58 0 .436.446.436 1.17 0 1.615l-3.694 3.66a1.12 1.12 0 0 1-1.58 0L5.516 9.163c-.436-.445-.436-1.17 0-1.615z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
          {locales.filter(l => l !== currentLocale).map(l => (
            <button
              key={l}
              onClick={() => handleLanguageChange(l)}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
            >
              {localeNames[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
