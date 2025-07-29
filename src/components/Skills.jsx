import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { skillsData } from '../data';

const Skills = () => (
  <SectionWrapper id="skills" title="My Tech Stack">
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.1 }} 
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      {Object.entries(skillsData).map(([category, skills]) => (
        <motion.div 
          key={category} 
          className="bg-white/5 dark:bg-white/5 p-6 rounded-lg shadow-lg backdrop-blur-sm border border-white/10 relative overflow-hidden"
          variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
        >
          <h3 className="text-xl font-semibold mb-4 text-center text-light-primary dark:text-dark-primary capitalize">
            {category.replace('_', ' & ')}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill) => {
              const Icon = skill.icon; // Correctly assign the component
              return (
                <motion.div 
                  key={skill.name} 
                  className="flex flex-col items-center justify-center p-3 rounded-md bg-light-background/50 dark:bg-dark-background/50 hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 transition-colors" 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                  <div className="text-4xl mb-2 text-light-accent dark:text-dark-accent">
                    <Icon /> {/* Render the component */}
                  </div>
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </SectionWrapper>
);

export default Skills;