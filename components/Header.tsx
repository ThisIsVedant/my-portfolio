'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeSwitch from './ThemeSwitch';
import headerNavLinks from '@/content/headerNavLinks';
import { logCustomEvent } from '@/app/firebase';
import { NavHeader } from './ui/nav-header';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string, label: string) => {
    logCustomEvent(label);
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[9995] transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-black/70 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-sm dark:shadow-lg dark:shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
            aria-label="Vedant Sharma"
          >
            v<span className="text-primary-500">.</span>
          </Link>

          {/* Desktop nav — absolutely centered */}
          <nav className="hidden sm:flex absolute left-1/2 -translate-x-1/2">
            <NavHeader links={headerNavLinks} onNavigate={scrollTo} />
          </nav>

          {/* Right — ThemeSwitch + mobile toggle */}
          <div className="flex items-center gap-3">
            <ThemeSwitch />
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              className="sm:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[65px] left-0 right-0 z-[9994] bg-white/95 dark:bg-black/90 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 sm:hidden"
          >
            <nav className="flex flex-col py-4 px-6 gap-1">
              {headerNavLinks.map(({ title, id }, i) => (
                <motion.button
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(id, title)}
                  className="text-left py-3 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border-b border-gray-100 dark:border-white/5 last:border-0 transition-colors"
                >
                  {title}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
