'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '../navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { motion, AnimatePresence } from 'framer-motion';

// --- Custom Hook for detecting click outside ---
function useOnClickOutside(ref: React.RefObject<HTMLElement>, handler: (event: MouseEvent | TouchEvent) => void) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

// --- Icons ---
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

// --- Main Header Component ---
export default function Header() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(menuRef, () => setIsMenuOpen(false));

  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('portfolio'), href: '/portfolio' },
    { name: t('services'), href: '/services' },
    { name: t('prices'), href: '/prices' },
    { name: t('templates'), href: '/templates' },
    { name: t('contact'), href: '/contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      router.push(href);
    }, 300); // Wait for menu close animation
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-800 bg-slate-950">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
             {/* Mobile Menu Button */}
            <button 
                className="md:hidden flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-slate-950 transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isMenuOpen ? "x" : "menu"}
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isMenuOpen ? <XIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
                    </motion.div>
                </AnimatePresence>
            </button>
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              <span className="text-xl font-bold gradient-text">WebBuildGE</span>
            </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors hover:text-white ${isActive ? 'text-white font-semibold' : ''}`}>
                {link.name}
              </Link>
            );
          })}
        </nav>
        
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
             <motion.div
                key="mobile-menu-wrapper"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
            {/* Backdrop */}
            <div 
                className="fixed inset-0 z-40 bg-black/60 md:hidden"
                onClick={() => setIsMenuOpen(false)}
            />
            {/* Menu */}
            <motion.div
                ref={menuRef}
                className="fixed top-0 left-0 h-full w-64 bg-slate-950 border-r border-slate-800 z-50 md:hidden shadow-2xl"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                <div className="flex items-center justify-between p-5 border-b border-slate-800">
                    <Link href="/" className="flex items-center gap-2" onClick={() => handleLinkClick('/')}>
                        <span className="text-xl font-bold gradient-text">WebBuildGE</span>
                    </Link>
                    <button 
                        onClick={() => setIsMenuOpen(false)} 
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="Close menu">
                        <XIcon className="h-6 w-6" />
                    </button>
                </div>
                <nav className="flex flex-col px-5 py-3 space-y-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                        <button
                            key={link.name}
                            onClick={() => handleLinkClick(link.href)}
                            className={`w-full text-left rounded-md px-4 py-2.5 text-base font-medium transition-colors hover:bg-slate-800 hover:text-white ${isActive ? 'bg-slate-800 text-white' : 'text-slate-300'}`}>
                            {link.name}
                        </button>
                        );
                    })}
                </nav>
            </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
    </header>
  );
}
