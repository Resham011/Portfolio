import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const About = () => (
  <SectionWrapper id="about" title="About Me">
    <div className="max-w-4xl mx-auto text-center text-lg md:text-xl text-light-text/80 dark:text-dark-text/80 leading-relaxed">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        I'm a passionate and performance-driven Computer Science student with a deep interest in <strong>Machine Learning</strong> and a strong command over <strong>Data Structures and Algorithms</strong>. My journey in tech has been shaped by a relentless curiosity and a love for solving complex challenges through clean, efficient code.
      </motion.p>
      <motion.p
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        I've solved over <span className="font-semibold text-light-primary dark:text-dark-primary">800+ coding problems</span> across platforms like LeetCode and GeeksforGeeks, gaining deep insights into algorithmic thinking and optimization. I'm proficient in languages like <strong>C++ and Python</strong>, and regularly apply these skills in building ML models. 
      </motion.p>
      <motion.p
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        On the development side, I work comfortably across the <strong>MERN stack</strong> to build full-stack web applications, but what truly excites me is applying ML to solve real-world problems—from recommendation engines to intelligent automation. I'm always looking to push boundaries, contribute to open-source projects, and stay at the forefront of AI and software innovation.
      </motion.p>
    </div>
  </SectionWrapper>
);
export default About;