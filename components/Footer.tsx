'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import siteMetadata from '@/content/siteMetadata';
import { DottedSurface } from './ui/dotted-surface';

const socials = [
  { label: 'GitHub',   href: siteMetadata.github,                 Icon: FaGithub },
  { label: 'LinkedIn', href: siteMetadata.linkedin,                Icon: FaLinkedin },
  { label: 'Email',    href: `mailto:${siteMetadata.email}`,       Icon: Mail },
];

const links = [
  { title: 'Home',     id: '#home' },
  { title: 'Works',    id: '#works' },
  { title: 'Skills',   id: '#skills' },
  { title: 'Services', id: '#services' },
  { title: 'FAQ',      id: '#faq' },
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer id="contact" className="bg-white dark:bg-black border-t border-gray-100 dark:border-white/10">
      {/* CTA strip */}
      <div className="relative border-b border-gray-100 dark:border-white/5 py-20 sm:py-28 overflow-hidden">
        <DottedSurface />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight"
          >
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-primary-500 to-teal-400 bg-clip-text text-transparent">
              connect
            </span>
            .
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-5 text-lg text-gray-500 dark:text-gray-400 max-w-md mx-auto"
          >
            Have a project in mind or just want to chat? My inbox is always open.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <a
              href={`mailto:${siteMetadata.email}`}
              className="group inline-flex items-center gap-2 rounded-xl bg-primary-500 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-400 transition-all duration-200 shadow-lg shadow-primary-200 dark:shadow-primary-500/25"
            >
              Send an email
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={siteMetadata.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xl font-extrabold text-gray-900 dark:text-white">
              v<span className="text-primary-500">.</span>
            </Link>
            <span className="text-sm text-gray-400 dark:text-gray-600">
              © {new Date().getFullYear()} Vedant Sharma
            </span>
          </div>

          <nav className="hidden sm:flex items-center gap-5">
            {links.map(({ title, id }) => (
              <button
                key={title}
                onClick={() => scrollTo(id)}
                className="text-xs text-gray-400 dark:text-gray-600 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                {title}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={label}
                className="p-2 text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
