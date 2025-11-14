'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter, type AppPathnames } from '@/navigation'; 
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
        <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

// --- Main Header Component ---
export default function Header() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to store the path we want to navigate to after the animation.
  const [navigatingTo, setNavigatingTo] = useState<AppPathnames | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(menuRef, () => setIsMenuOpen(false));

  const navLinks: { name: string; href: AppPathnames }[] = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('portfolio'), href: '/portfolio' },
    { name: t('services'), href: '/services' },
    { name: t('prices'), href: '/prices' },
    { name: t('templates'), href: '/templates' },
    { name: t('contact'), href: '/contact' },
  ];

  // When a link is clicked, we set the destination and close the menu.
  const handleLinkClick = (href: AppPathnames) => {
    if (pathname === href) {
      setIsMenuOpen(false);
    } else {
      setNavigatingTo(href);
      setIsMenuOpen(false);
    }
  };

  // This function will be called only after the exit animation is complete.
  const onAnimationComplete = () => {
    if (navigatingTo) {
      router.push(navigatingTo);
      setNavigatingTo(null); // Reset for the next navigation
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
            <button 
                className="md:hidden p-2"
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
        
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-slate-300">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
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

      <AnimatePresence mode="wait" onExitComplete={onAnimationComplete}>
        {isMenuOpen && (
            <>
            <motion.div 
                className="fixed inset-0 z-40 bg-black/60 md:hidden"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            />
            <motion.div
                ref={menuRef}
                className="fixed top-0 left-0 h-full w-64 bg-slate-950 border-r border-slate-800 z-50 md:hidden shadow-2xl"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                <div className="flex items-center justify-between p-5 border-b border-slate-800">
                    <span className="text-xl font-bold gradient-text">WebBuildGE</span>
                    <button 
                        onClick={() => setIsMenuOpen(false)} 
                        className="p-2 -mr-2"
                        aria-label="Close menu">
                        <XIcon className="h-6 w-6" />
                    </button>
                </div>
                <nav className="flex flex-col px-5 py-3 space-y-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                        <button
                            key={link.href}
                            onClick={() => handleLinkClick(link.href)}
                            className={`w-full text-left rounded-md px-4 py-2.5 text-base font-medium transition-colors hover:bg-slate-800 hover:text-white ${isActive ? 'bg-slate-800 text-white' : 'text-slate-300'}`}>
                            {link.name}
                        </button>
                        );
                    })}
                </nav>
            </motion.div>
            </>
        )}
        </AnimatePresence>
    </header>
  );
}
