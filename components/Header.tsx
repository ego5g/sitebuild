'use client';

import { useTranslations } from 'next-intl';
// Используем специальные Link и usePathname из вашей конфигурации навигации
import { Link, usePathname } from '../navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('Navigation');
  const pathname = usePathname(); // Этот хук вернет путь без локали, например, '/about'

  // В href указываем канонические пути. Компонент Link сам добавит нужную локаль.
  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('portfolio'), href: '/portfolio' },
    { name: t('templates'), href: '/templates' },
    { name: t('contact'), href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900/50 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          {/* Используем WebBuildGE, как вы и просили */}
          <span className="text-xl font-bold gradient-text">WebBuildGE</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors hover:text-white ${isActive ? 'text-white' : ''}`}>
                {link.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
