'use client';

import { motion } from 'framer-motion';
import { Brain, Code2, Layers } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Building intelligent systems with Python, Pandas, NumPy, and modern ML frameworks. Turning raw data into actionable insights.',
    lightAccent: 'from-purple-50 to-pink-50',
    darkAccent: 'dark:from-purple-500/20 dark:to-pink-500/20',
    border: 'border-purple-200 dark:border-purple-500/20 hover:border-purple-300 dark:hover:border-purple-400/40',
    iconColor: 'text-purple-600 dark:text-purple-400',
    iconBg: 'bg-purple-50 dark:bg-white/5 border-purple-200 dark:border-white/10',
  },
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Crafting performant web apps with Next.js and React. From pixel-perfect UIs to smooth, accessible user experiences.',
    lightAccent: 'from-emerald-50 to-teal-50',
    darkAccent: 'dark:from-primary-500/20 dark:to-teal-500/20',
    border: 'border-primary-200 dark:border-primary-500/20 hover:border-primary-300 dark:hover:border-primary-400/40',
    iconColor: 'text-primary-600 dark:text-primary-400',
    iconBg: 'bg-emerald-50 dark:bg-white/5 border-emerald-200 dark:border-white/10',
  },
  {
    icon: Layers,
    title: 'Product Thinking',
    description: 'Shipping products with intention — balancing user experience, technical constraints, and business goals end-to-end.',
    lightAccent: 'from-blue-50 to-cyan-50',
    darkAccent: 'dark:from-blue-500/20 dark:to-cyan-500/20',
    border: 'border-blue-200 dark:border-blue-500/20 hover:border-blue-300 dark:hover:border-blue-400/40',
    iconColor: 'text-blue-600 dark:text-blue-400',
    iconBg: 'bg-blue-50 dark:bg-white/5 border-blue-200 dark:border-white/10',
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-gray-50 dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-500 dark:text-primary-400">
            What I do
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Capabilities
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A focused set of skills applied with depth and craft.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map(({ icon: Icon, title, description, lightAccent, darkAccent, border, iconColor, iconBg }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className={`group relative rounded-2xl border ${border} bg-white dark:bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 shadow-sm dark:shadow-xl cursor-default overflow-hidden`}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${lightAccent} ${darkAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className={`mb-5 inline-flex rounded-xl border p-3 ${iconBg} ${iconColor}`}>
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
