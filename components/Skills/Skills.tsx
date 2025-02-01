'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  {
    title: 'Python',
    description: 'Powerful language for AI',
  },
  {
    title: 'NextJS',
    description: 'Fullstack framework for React',
  },
  {
    title: 'ReactJS',
    description: 'Frontend library for dynamic UIs.',
  },
  {
    title: 'Pandas',
    description: 'Data manipulation library.',
  },
  {
    title: 'NumPy',
    description: 'Numerical computing library.',
  },
  {
    title: 'Git',
    description: 'Version control tools.',
  },
];

interface SkillItemProps {
  title: string;
  description: string;
}

const SkillCard = ({ title, description }: SkillItemProps) => (
  <motion.div whileHover={{ scale: 1.1 }}>
    <div className="skill-card bg-gray-100 rounded-xl p-6 md:p-8 ">
      <motion.h3
        className="text-2xl md:text-3xl font-bold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="mt-3 text-md md:text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {description}
      </motion.p>
    </div>
  </motion.div>
);

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll-based animations using GSAP
    gsap.fromTo(
      '.skill-section',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: '.skill-section',
          start: 'top 80%',
          end: 'bottom 60%',
          scrub: true,
        },
      },
    );
  }, []);

  useEffect(() => {
    gsap.to('.parallax-item', {
      y: (i, target) => -target.offsetHeight * 0.2,
      scrollTrigger: {
        trigger: '.parallax-item',
        scrub: true,
      },
    });
  }, []);

  return (
    <div id="contact" ref={containerRef} className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="hero bg-gradient-to-b from-white to-gray-200 h-60 flex flex-col justify-center items-center ">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mt-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Tools that power my development.
        </motion.p>
      </section>

      {/* Skill Sections */}
      <section className="skill-section py-10 md:py-20">
        <motion.div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
          {skillsData.map(({ title, description }) => (
            <SkillCard key={title} title={title} description={description} />
          ))}
        </motion.div>
      </section>
    </div>
  );
};
export default Skills;
