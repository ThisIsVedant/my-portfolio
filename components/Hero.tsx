'use client';

import { useContext, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { ScrollContext } from './Providers/ScrollProvider';
import { GlassButton } from './ui/apple-tahoe-liquid-glass-button';
import { renderCanvas } from './renderCanvas';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  if (ref.current) progress = Math.min(1, scrollY / ref.current.clientHeight);

  useEffect(() => {
    if (window.innerWidth >= 640) renderCanvas();
  }, []);

  const scrollToWorks   = () => document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div id="home" className="relative min-h-dvh flex items-center overflow-hidden bg-white dark:bg-black">
      <canvas className="pointer-events-none absolute inset-0 hidden sm:block" id="canvas" />
      <div ref={ref} className="relative z-10 w-full mx-auto max-w-6xl px-4 sm:px-6 pt-24 pb-16">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-6">
            {/* Badge */}
            <motion.div variants={item} className="flex">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-600 dark:text-primary-400">
                <Sparkles size={14} />
                Open to work
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-extrabold leading-none tracking-tighter text-gray-900 dark:text-white"
            >
              Vedant
              <br />
              <span className="bg-gradient-to-r from-primary-400 via-teal-400 to-emerald-300 bg-clip-text text-transparent">
                Sharma
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={item}
              className="text-xl sm:text-3xl md:text-4xl font-medium text-gray-600 dark:text-gray-300 max-w-2xl"
            >
              I build things{' '}
              <span className="text-gray-900 dark:text-white font-semibold">for the future.</span>
            </motion.p>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed"
            >
              AI learner · Frontend developer · Product thinker.
              Crafting web experiences at the intersection of design and machine intelligence.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-4 mt-2">
              <GlassButton size="lg" onClick={scrollToContact} contentClassName="font-semibold">
                Let&apos;s Work Together
              </GlassButton>
              <button
                onClick={scrollToWorks}
                className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                See my work
                <ArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-1" />
              </button>
            </motion.div>
          </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ translateY: `${progress * 10}vh`, opacity: 1 - progress * 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="cursor-pointer text-gray-400 hover:text-gray-300 transition-colors"
          onClick={scrollToWorks}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </div>
  );
}
