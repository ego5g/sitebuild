'use client';

import {useTranslations} from 'next-intl';
import {Link} from '../navigation';
import LanguageSwitcher from './LanguageSwitcher';
 
export default function Header() {
  const t = useTranslations('Navigation');
 
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-primary">GeoDev</Link>
        <nav>
          <Link href="/" className="mx-2">{t('home')}</Link>
          <Link href="/about" className="mx-2">{t('about')}</Link>
          <Link href="/portfolio" className="mx-2">{t('portfolio')}</Link>
          <Link href="/templates" className="mx-2">{t('templates')}</Link>
          <Link href="/contact" className="mx-2">{t('contact')}</Link>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
