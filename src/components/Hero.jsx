import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si';
import { socialLinks } from '../data';

const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center "
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 🔹 Tagline */}
          <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">
            AI • Machine Learning • Data Science
          </p>

          {/* 🧠 Main Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 leading-tight text-black dark:text-white">
            Hi, I'm <span className="text-purple-600 dark:text-purple-400">Resham</span>
          </h1>

          {/* 🤖 AI-focused typing */}
          <TypeAnimation
            sequence={[
              'AI & ML Engineer',
              2000,
              'LLM Developer',
              2000,
              'Data Science Enthusiast',
              2000,
              'Building Intelligent Systems',
              2000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
            repeat={Infinity}
          />

          {/* 📝 Description */}
          <p className="max-w-2xl mx-auto text-lg mb-10 text-gray-600 dark:text-gray-300 leading-relaxed">
            I design and build intelligent systems using Machine Learning, Deep Learning,
            and Large Language Models. Focused on solving real-world problems with data-driven
            solutions and scalable AI applications.
          </p>

          {/* 🔗 Social Icons */}
          <div className="flex justify-center items-center gap-6 mb-10">
            {[ 
              { icon: <FaLinkedin />, link: socialLinks.linkedin },
              { icon: <FaGithub />, link: socialLinks.github },
              { icon: <SiHuggingface />, link: socialLinks.huggingFace },
              { icon: <FaCode />, link: socialLinks.codolio },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl sm:text-3xl p-3 rounded-full 
                border border-gray-300 dark:border-gray-700
                hover:text-purple-600 dark:hover:text-purple-400 
                transition-all duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          {/* 🎯 Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.a
              href="/Resham_Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full font-semibold text-white 
              bg-purple-600 hover:bg-purple-700 
              transition-all duration-300"
            >
              Download CV
            </motion.a>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full font-semibold 
              border border-purple-600 text-purple-600 dark:text-purple-400 
              hover:bg-purple-100 dark:hover:bg-purple-900/20
              transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;