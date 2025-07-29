import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import { projectsData } from '../data';

const Projects = ({ onProjectClick }) => (
  <SectionWrapper id="projects" title="Featured Projects">
    <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
      {projectsData.map((project, index) => (<motion.div key={index} className="group bg-white/5 dark:bg-white/5 rounded-lg overflow-hidden shadow-xl backdrop-blur-sm border border-white/10 transition-all duration-300 hover:shadow-xl hover:border-purple-600 flex flex-col" variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } } }}><div className="relative overflow-hidden"><img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" /><div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">{project.live && project.live !== '#' && (<a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 rounded-full text-white hover:bg-white/40 transition-colors" data-interactive><FaExternalLinkAlt size={20} /></a>)}<a href={project.source} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 rounded-full text-white hover:bg-white/40 transition-colors" data-interactive><FaGithub size={20} /></a></div></div><div className="p-6 flex flex-col flex-grow"><h3 className="text-xl font-bold mb-2">{project.title}</h3><p className="text-sm text-light-text/70 dark:text-dark-text/70 mb-4 flex-grow">{project.description}</p><div className="flex flex-wrap gap-2 mb-4">{project.tags.map((tag, i) => (<span key={i} className="px-2 py-1 text-xs font-semibold rounded-full bg-light-primary/20 text-light-primary dark:bg-dark-primary/20 dark:text-dark-primary">{tag}</span>))}</div><button onClick={() => onProjectClick(project)} className="mt-auto w-full text-center px-4 py-2 rounded-md font-semibold text-sm bg-light-primary/10 text-light-primary dark:bg-dark-primary/10 dark:text-dark-primary hover:bg-light-primary/20 dark:hover:bg-dark-primary/20 transition-colors" data-interactive>Learn More</button></div></motion.div>))}
    </motion.div>
  </SectionWrapper>
);

export default Projects;