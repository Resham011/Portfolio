import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { skillsData } from '../data';

const categoryMeta = {
  ai_ml:        { label: 'AI / ML',          emoji: '◈' },
  data_tools:   { label: 'Data & Tools',      emoji: '⚙' },
  languages:    { label: 'Languages',         emoji: '{ }' },
  web:          { label: 'Web / Full-Stack',  emoji: '⬡' },
  tools:        { label: 'Dev Tools',         emoji: '⚙' },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 24, scale: 0.94 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -16, scale: 0.95, transition: { duration: 0.25 } },
};

const Skills = () => {
  const categories = Object.keys(skillsData);
  const [active, setActive] = useState(categories[0]); // starts on 'ai_ml'

  const skills = skillsData[active];
  const meta   = categoryMeta[active] || { label: active, emoji: '◆' };

  return (
    <SectionWrapper id="skills" title="My Tech Stack">

      {/* Tab bar */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => {
          const m = categoryMeta[cat] || { label: cat, emoji: '◆' };
          const isActive = active === cat;
          return (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              data-interactive
              className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border
                ${isActive
                  ? 'bg-gradient-to-r from-purple-700 to-purple-500 text-white border-transparent shadow-lg shadow-purple-500/25'
                  : 'bg-white/5 dark:bg-white/5 border-white/10 text-light-text/70 dark:text-dark-text/70 hover:border-purple-500/40 hover:text-light-text dark:hover:text-dark-text'
                }`}
            >
              {isActive && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="mr-1.5 opacity-80">{m.emoji}</span>
              {m.label}
            </motion.button>
          );
        })}
      </div>

      {/* Skills grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                className="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl
                  bg-white/5 dark:bg-white/5 border border-white/10
                  hover:border-purple-500/50 hover:bg-purple-500/5 dark:hover:bg-purple-500/10
                  backdrop-blur-sm shadow-sm hover:shadow-purple-500/10 hover:shadow-lg
                  transition-all duration-300 cursor-default overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl bg-gradient-to-br from-purple-600/8 to-transparent" />

                <motion.div
                  className="text-4xl text-light-accent dark:text-dark-accent transition-all duration-300
                    group-hover:text-purple-500 dark:group-hover:text-purple-400 relative z-10"
                  whileHover={{ scale: 1.18, rotate: [0, -6, 6, 0] }}
                  transition={{ duration: 0.35 }}
                >
                  <Icon />
                </motion.div>

                <span className="relative z-10 text-xs sm:text-sm font-semibold text-center
                  text-light-text/80 dark:text-dark-text/80
                  group-hover:text-light-text dark:group-hover:text-dark-text
                  transition-colors duration-300 leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Count indicator */}
      <motion.p
        key={active + '-count'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center text-xs text-light-text/40 dark:text-dark-text/40 mt-8"
      >
        {skills.length} {skills.length === 1 ? 'skill' : 'skills'} in{' '}
        <span className="text-purple-500 dark:text-purple-400 font-medium">{meta.label}</span>
      </motion.p>

    </SectionWrapper>
  );
};

export default Skills;