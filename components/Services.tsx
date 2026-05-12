'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const services = [
  {
    name: 'Consultation',
    tagline: 'For ideas and audits',
    price: "Let's talk",
    description: 'Architecture reviews, tech stack advice, and roadmap planning.',
    features: [
      '1-hour strategy call',
      'Tech stack recommendations',
      'Code review & feedback',
      'Roadmap planning',
    ],
    highlight: false,
    cta: 'Book a call',
  },
  {
    name: 'Development',
    tagline: 'Most popular',
    price: 'Project-based',
    description: 'Frontend web apps built with Next.js, React, and modern tooling.',
    features: [
      'Custom Next.js application',
      'Responsive & accessible UI',
      'API integrations',
      'Database design (Supabase)',
      'Deployment & CI/CD',
    ],
    highlight: true,
    cta: 'Start a project',
  },
  {
    name: 'AI Integration',
    tagline: 'Future-ready',
    price: 'Custom scope',
    description: 'Machine learning features, data pipelines, and AI-powered products.',
    features: [
      'ML model integration',
      'Data pipeline setup',
      'Python scripting & automation',
      'AI-powered features',
      'Ongoing maintenance',
    ],
    highlight: false,
    cta: 'Get a quote',
  },
];

const scrollToContact = () => {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
};

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-500 dark:text-primary-400">
            Services
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            What I offer
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Flexible engagement models to fit your project and timeline.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
        >
          {services.map(({ name, tagline, price, description, features, highlight, cta }) => (
            <motion.div
              key={name}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className={`relative rounded-2xl p-8 ${
                highlight
                  ? 'bg-gradient-to-b from-primary-50 dark:from-primary-500/20 to-teal-50/50 dark:to-primary-900/10 border-2 border-primary-300 dark:border-primary-500/40 shadow-xl shadow-primary-100 dark:shadow-primary-500/10'
                  : 'bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10'
              }`}
            >
              {highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary-500 px-4 py-1 text-xs font-bold text-white uppercase tracking-widest">
                    Popular
                  </span>
                </div>
              )}

              <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                {tagline}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{name}</h3>
              <div className={`mt-2 text-2xl font-extrabold ${highlight ? 'text-primary-500 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'}`}>
                {price}
              </div>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>

              <ul className="mt-6 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <Check size={15} className={highlight ? 'text-primary-500' : 'text-gray-400 dark:text-gray-500'} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`mt-8 w-full rounded-xl py-3 text-sm font-semibold transition-all duration-200 ${
                  highlight
                    ? 'bg-primary-500 text-white hover:bg-primary-400 shadow-lg shadow-primary-200 dark:shadow-primary-500/25'
                    : 'border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {cta}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
