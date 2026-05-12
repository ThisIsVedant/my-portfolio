'use client';

import { motion } from 'framer-motion';

const skillsData = [
  { title: 'Next.js', description: 'Fullstack React framework.' },
  { title: 'React', description: 'Frontend library for dynamic UIs.' },
  { title: 'Python', description: 'Powerful language for AI & data.' },
  { title: 'TypeScript', description: 'Type-safe JavaScript at scale.' },
  { title: 'Pandas', description: 'Data manipulation & analysis.' },
  { title: 'NumPy', description: 'Numerical computing library.' },
  { title: 'Supabase', description: 'Open-source backend platform.' },
  { title: 'Git', description: 'Version control & collaboration.' },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-gray-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-500 dark:text-primary-400">
            Toolkit
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Skills
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Tools that power my development — chosen for depth, not breadth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {skillsData.map(({ title, description }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="group relative rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6 cursor-default overflow-hidden hover:border-primary-300 dark:hover:border-primary-500/40 transition-colors duration-200"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 dark:from-primary-500/0 to-primary-50/0 dark:to-primary-500/0 group-hover:from-primary-50 dark:group-hover:from-primary-500/5 group-hover:to-teal-50 dark:group-hover:to-primary-900/10 transition-all duration-300 rounded-2xl" />
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-500 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
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
