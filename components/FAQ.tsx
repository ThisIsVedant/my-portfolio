'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What technologies do you specialize in?',
    a: 'I primarily work with Next.js, React, TypeScript, Python, and Supabase. I also have hands-on experience with AI/ML libraries like Pandas and NumPy for data-driven features.',
  },
  {
    q: 'Are you available for freelance projects?',
    a: "Yes — I'm open to freelance and contract work. Whether it's a quick consultation or a full product build, reach out via email or LinkedIn and we'll find the right fit.",
  },
  {
    q: 'How do you approach a new project?',
    a: "I start with understanding the problem deeply, then move to architecture and design before writing a single line of code. I believe in shipping iteratively and getting real user feedback early.",
  },
  {
    q: 'Can you work with existing codebases?',
    a: "Absolutely. I'm comfortable jumping into existing projects, doing code reviews, refactoring for performance, or adding new features while respecting the current architecture.",
  },
  {
    q: "What's your interest in AI?",
    a: "I've been studying ML and deep learning since 2023, focusing on practical applications — building data pipelines, integrating models into products, and exploring how AI can augment user experiences.",
  },
  {
    q: 'How can I get in touch?',
    a: 'Email is the best way — thisisvedant.2005@gmail.com. You can also find me on LinkedIn or GitHub. I typically respond within 24 hours.',
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-gray-200 dark:border-white/10"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="text-base font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
          {q}
        </span>
        <span className="flex-shrink-0 text-gray-400 dark:text-gray-500 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-gray-50 dark:bg-black">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-500 dark:text-primary-400">
            FAQ
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Common questions
          </h2>
        </motion.div>

        <div>
          {faqs.map(({ q, a }, i) => (
            <FAQItem key={q} q={q} a={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
