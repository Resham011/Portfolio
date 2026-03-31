// import React from 'react';
// import { motion } from 'framer-motion';
// import SectionWrapper from './SectionWrapper';

// const About = () => (
//   <SectionWrapper id="about" title="About Me">
//     <div className="max-w-4xl mx-auto text-center text-lg md:text-xl text-light-text/80 dark:text-dark-text/80 leading-relaxed ">
      
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.1, duration: 0.7 }}
//       >
//         I'm a Computer Science undergraduate focused on building intelligent systems as an <strong>AI/ML Engineer and Data Scientist</strong>. I specialize in developing end-to-end machine learning solutions, from data processing and modeling to deployment, with a strong emphasis on solving real-world problems using data-driven approaches.
//       </motion.p>

//       <motion.p
//         className="mt-6"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.3, duration: 0.7 }}
//       >
//         I have hands-on experience working with <strong>machine learning, deep learning, and Generative AI</strong>, including building <strong>RAG-based LLM applications</strong> and <strong>hybrid recommendation systems</strong>. My work involves designing efficient pipelines using tools like <strong>PyTorch, FastAPI, LangChain, and vector databases</strong>, focusing on improving model accuracy, retrieval quality, and system performance.
//       </motion.p>

//       <motion.p
//         className="mt-6"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.5, duration: 0.7 }}
//       >
//         Alongside ML, I have a strong foundation in <strong>Data Structures and Algorithms</strong>, with <span className="font-semibold text-light-primary dark:text-dark-primary">800+ problems solved</span>, enabling me to build optimized and scalable solutions. I am proficient in <strong>Python, C++, SQL</strong> and experienced in working with structured and unstructured data for analysis and model building.
//       </motion.p>

//       <motion.p
//         className="mt-6"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: 0.7, duration: 0.7 }}
//       >
//         I am particularly interested in applying <strong>AI to real-world applications</strong>, including intelligent search, recommendation systems, and automation. I continuously focus on improving system performance, scalability, and practical usability while staying updated with advancements in AI and data science.
//       </motion.p>

//     </div>
//   </SectionWrapper>
// );

// export default About;

import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const About = () => (
  <SectionWrapper id="about" title="About Me">
    
    {/* 🔥 Background Layer (same as Hero) */}
    {/* <div className="bg-white dark:bg-black py-6 rounded-xl"> */}
      
      <div className="max-w-4xl mx-auto text-center text-lg md:text-xl text-light-text/80 dark:text-dark-text/80 leading-relaxed">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          I'm a Computer Science undergraduate focused on building intelligent systems as an <strong>AI/ML Engineer and Data Scientist</strong>. I specialize in developing end-to-end machine learning solutions, from data processing and modeling to deployment, with a strong emphasis on solving real-world problems using data-driven approaches.
        </motion.p>

        <motion.p
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          I have hands-on experience working with <strong>machine learning, deep learning, and Generative AI</strong>, including building <strong>RAG-based LLM applications</strong> and <strong>hybrid recommendation systems</strong>. My work involves designing efficient pipelines using tools like <strong>PyTorch, FastAPI, LangChain, and vector databases</strong>, focusing on improving model accuracy, retrieval quality, and system performance.
        </motion.p>

        <motion.p
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Alongside ML, I have a strong foundation in <strong>Data Structures and Algorithms</strong>, with <span className="font-semibold text-light-primary dark:text-dark-primary">800+ problems solved</span>, enabling me to build optimized and scalable solutions. I am proficient in <strong>Python, C++, SQL</strong> and experienced in working with structured and unstructured data for analysis and model building.
        </motion.p>

        <motion.p
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          I am particularly interested in applying <strong>AI to real-world applications</strong>, including intelligent search, recommendation systems, and automation. I continuously focus on improving system performance, scalability, and practical usability while staying updated with advancements in AI and data science.
        </motion.p>

      </div>
    {/* </div> */}

  </SectionWrapper>
);

export default About;