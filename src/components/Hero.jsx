import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import { socialLinks } from '../data';


const Hero = () => {
  const scrollToContact = (e) => { e.preventDefault(); document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }); };
  return (
     <section id="home" className=" min-h-screen flex items-center justify-center text-center">
          <div className="relative z-10 container mx-auto px-6">
               <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
               <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-2 text-black dark:text-white">
                    Hi, I'm <span className="bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text">Resham</span>
               </h1>
               <TypeAnimation sequence={['A Full-Stack Developer', 2000, 'A Machine Learning Enthusiast', 2000, 'A Problem Solver', 2000]} wrapper="h2" speed={50} className="text-xl sm:text-2xl md:text-4xl font-semibold mb-6 mt-4 text-gray-800 dark:text-gray-200" repeat={Infinity} />
               <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-700 dark:text-gray-300">I build beautiful, responsive, and functional web applications. Passionate about creating elegant solutions for complex problems.</p>
               <div className="flex justify-center items-center space-x-6 mb-8 text-gray-800 dark:text-white">
                    <motion.a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }} className="text-3xl hover:text-purple-600 dark:hover:text-purple-400 transition-colors" data-interactive><FaLinkedin /></motion.a>
                    <motion.a href={socialLinks.github} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }} className="text-3xl hover:text-purple-600 dark:hover:text-purple-400 transition-colors" data-interactive><FaGithub /></motion.a>
                    <motion.a href={socialLinks.codolio} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }} className="text-3xl hover:text-purple-600 dark:hover:text-purple-400 transition-colors" data-interactive><FaCode /></motion.a>
               </div>
               <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <motion.a href="/Resume.pdf" download className="px-8 py-3 w-full sm:w-auto rounded-full font-semibold text-white bg-gradient-to-r from-purple-800 to-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} data-interactive>Download CV</motion.a>
                    <motion.button onClick={scrollToContact} className="px-8 py-3 w-full sm:w-auto rounded-full font-semibold border-2 border-purple-600 text-purple-700 dark:text-purple-400 dark:border-purple-400 transition-all duration-300 hover:bg-purple-100/40 dark:hover:bg-purple-400/10" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} data-interactive>Contact Me</motion.button>
               </div>
               </motion.div>
          </div>
     </section>
  );
};

export default Hero;