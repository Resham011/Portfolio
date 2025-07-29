import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { achievementsData } from '../data';

const Achievements = () => (
  <SectionWrapper id="achievements" title="My Achievements">
    <motion.div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      {achievementsData.map((achievement, index) => {
        const Icon = achievement.icon; // Correctly assign the component
        return (
          <motion.a
            key={index}
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden p-6 rounded-lg shadow-xl backdrop-blur-md border border-white/10 transition-all duration-300 hover:shadow-xl hover:border-purple-600 hover:-translate-y-2 flex flex-col items-center text-center bg-white/5 dark:bg-white/5"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, delay: index * 0.2 },
              },
            }}
            data-interactive
          >
            {achievement.image && (
              <img
                src={achievement.image}
                alt={`${achievement.title} certificate`}
                className="absolute inset-0 w-full h-full object-cover opacity-20 blur-none scale-110 group-hover:blur-md transition-all duration-300"
              />
            )}
            <div className="relative z-10">
              <div className="text-5xl text-light-accent dark:text-dark-accent mb-4 transition-transform duration-300 group-hover:scale-110">
                <Icon /> {/* Render the component */}
              </div>
              <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
              <p className="text-sm text-light-text/70 dark:text-dark-text/70">
                {achievement.description}
              </p>
            </div>
          </motion.a>
        );
      })}
    </motion.div>
  </SectionWrapper>
);

export default Achievements;