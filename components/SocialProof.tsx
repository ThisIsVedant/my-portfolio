'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '7+', label: 'Technologies mastered' },
  { value: '3+', label: 'Projects shipped' },
  { value: '2023', label: 'AI journey started' },
  { value: '∞', label: 'Problems to solve' },
];

const techStack = [
  'Next.js', 'React', 'Python', 'TypeScript',
  'Supabase', 'Pandas', 'NumPy', 'Git',
];

export default function SocialProof() {
  return (
    <section className="py-20 bg-white dark:bg-black border-y border-gray-100 dark:border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map(({ value, label }) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-br from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                {value}
              </div>
              <div className="mt-2 text-sm text-gray-400 dark:text-gray-500">{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-6">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.08 }}
                className="rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-4 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-white hover:border-primary-300 dark:hover:border-primary-500/40 transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
