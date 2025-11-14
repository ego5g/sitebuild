'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/navigation'; // Corrected: Use absolute path for consistency
import { FacebookIcon, InstagramIcon, TwitterIcon } from './icons'; // Corrected: Import icons from the central file

export default function Footer() {
  const t = useTranslations('Footer');
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-4 sm:px-6 lg:px-8 py-16">
        
        {/* About Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold gradient-text mb-4">WebBuildGE</h3>
          <p className="text-sm text-slate-400">{t('about.description')}</p>
        </div>

        {/* Sitemap Section */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-slate-100 mb-4">{t('sitemap.title')}</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">{t('sitemap.home')}</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">{t('sitemap.about')}</Link></li>
            <li><Link href="/portfolio" className="hover:text-white transition-colors">{t('sitemap.portfolio')}</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">{t('sitemap.contact')}</Link></li>
          </ul>
        </div>

        {/* Contacts Section */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-slate-100 mb-4">{t('contacts.title')}</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><span className="font-semibold text-slate-300">Email:</span> contact@webdev.ge</li>
            <li><span className="font-semibold text-slate-300">{t('contacts.phone')}:</span> +995 123 456 789</li>
            <li><span className="font-semibold text-slate-300">Telegram:</span> @webdevge</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-slate-100 mb-4">{t('social.title')}</h3>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><FacebookIcon className="h-6 w-6" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><TwitterIcon className="h-6 w-6" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><InstagramIcon className="h-6 w-6" /></a>
          </div>
        </div>

      </div>
      <div className="border-t border-slate-800 py-6">
        <p className="text-center text-sm text-slate-500">
          {t('copyright', { year })}
        </p>
      </div>
    </footer>
  );
}
