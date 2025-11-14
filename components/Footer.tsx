'use client';

import { useTranslations } from 'next-intl';
import { Link } from '../navigation'; // Используем Link из навигации для поддержки локализации

// Иконки социальных сетей (можно вынести в отдельные файлы)
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
    </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);


export default function Footer() {
  const t = useTranslations('Footer');
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 py-12">
        
        {/* About Section */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-xl font-bold gradient-text mb-4">WebDevGE</h3>
          <p className="text-sm text-slate-400">{t('about.description')}</p>
        </div>

        {/* Sitemap Section */}
        <div>
          <h3 className="font-semibold text-slate-100 mb-4">{t('sitemap.title')}</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">{t('sitemap.home')}</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">{t('sitemap.about')}</Link></li>
            <li><Link href="/portfolio" className="hover:text-white transition-colors">{t('sitemap.portfolio')}</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">{t('sitemap.contact')}</Link></li>
          </ul>
        </div>

        {/* Contacts Section */}
        <div>
          <h3 className="font-semibold text-slate-100 mb-4">{t('contacts.title')}</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><span className="font-semibold text-slate-300">Email:</span> contact@webdev.ge</li>
            <li><span className="font-semibold text-slate-300">{t('contacts.phone')}:</span> +995 123 456 789</li>
            <li><span className="font-semibold text-slate-300">Telegram:</span> @webdevge</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="font-semibold text-slate-100 mb-4">{t('social.title')}</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><FacebookIcon className="h-6 w-6" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><TwitterIcon className="h-6 w-6" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><InstagramIcon className="h-6 w-6" /></a>
          </div>
        </div>

      </div>
      <div className="border-t border-slate-800 py-4">
        <p className="text-center text-sm text-slate-500">
          {t('copyright', { year })}
        </p>
      </div>
    </footer>
  );
}
