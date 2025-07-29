import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';



const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const [imageIndex, setImageIndex] = useState(0);
  const directionRef = useRef(0);

  const changeImage = (newDirection) => {
    directionRef.current = newDirection;
    setImageIndex(prevIndex => (prevIndex + newDirection + project.details.images.length) % project.details.images.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
        <motion.div className="w-full max-w-4xl max-h-full bg-light-background dark:bg-dark-background rounded-lg shadow-2xl flex flex-col" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} onClick={(e) => e.stopPropagation()}>
          <div className="p-4 sm:p-6 border-b border-white/10 flex justify-between items-center flex-shrink-0"><h2 className="text-xl sm:text-2xl font-bold">{project.title}</h2><button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-colors" data-interactive><FaTimes /></button></div>
          
          <div className="p-4 sm:p-6 flex-grow overflow-y-auto">
            {/* Image Carousel */}
            <div className="relative w-full h-56 sm:h-80 mb-6 bg-black/20 rounded-md overflow-hidden">
              <AnimatePresence initial={false} custom={directionRef.current}>
                <motion.img
                  key={imageIndex}
                  src={project.details.images[imageIndex]}
                  alt={`${project.title} screenshot ${imageIndex + 1}`}
                  custom={directionRef.current}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                  className="absolute w-full h-full object-contain"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.5}
                  onDragEnd={(e, { offset, velocity }) => {
                    if (offset.x < -40) { // Swipe left
                      changeImage(1);
                    } else if (offset.x > 40) { // Swipe right
                      changeImage(-1);
                    }
                  }}
                />
              </AnimatePresence>
              
              {project.details.images.length > 1 && (
                <>
                  <button onClick={() => changeImage(-1)} className="absolute top-1/2 -translate-y-1/2 left-2 z-10 p-2 bg-black/40 rounded-full text-white hover:bg-black/60 transition-colors" data-interactive><FaChevronLeft /></button>
                  <button onClick={() => changeImage(1)} className="absolute top-1/2 -translate-y-1/2 right-2 z-10 p-2 bg-black/40 rounded-full text-white hover:bg-black/60 transition-colors" data-interactive><FaChevronRight /></button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
                    {project.details.images.map((_, i) => (
                      <button key={i} onClick={() => setImageIndex(i)} className={`w-2 h-2 rounded-full transition-colors ${imageIndex === i ? 'bg-white' : 'bg-white/50 hover:bg-white'}`} data-interactive />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div><h3 className="font-bold text-lg mb-2 text-light-primary dark:text-dark-primary">The Problem</h3><p className="text-sm text-light-text/80 dark:text-dark-text/80">{project.details.problem}</p></div>
              <div><h3 className="font-bold text-lg mb-2 text-light-primary dark:text-dark-primary">My Solution</h3><p className="text-sm text-light-text/80 dark:text-dark-text/80">{project.details.solution}</p></div>
              <div className="md:col-span-2"><h3 className="font-bold text-lg mb-2 text-light-primary dark:text-dark-primary">Challenges Faced</h3><p className="text-sm text-light-text/80 dark:text-dark-text/80">{project.details.challenges}</p></div>
            </div>
          </div>

          <div className="p-4 sm:p-6 mt-auto border-t border-white/10 flex-shrink-0 flex-wrap gap-4 flex justify-between items-center">
            <div className="flex flex-wrap gap-2">{project.tags.map((tag, i) => (<span key={i} className="px-2 py-1 text-xs font-semibold rounded-full bg-light-primary/20 text-light-primary dark:bg-dark-primary/20 dark:text-dark-primary">{tag}</span>))}</div>
            <div className="flex items-center space-x-4">{project.live && project.live !== '#' && <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-light-primary dark:hover:text-dark-primary transition-colors" data-interactive><FaExternalLinkAlt /> <span>Live</span></a>}<a href={project.source} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-light-primary dark:hover:text-dark-primary transition-colors" data-interactive><FaGithub /> <span>Source</span></a></div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
export default ProjectModal;