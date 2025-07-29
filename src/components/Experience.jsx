import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { experienceData } from '../data';

// Variants for the vertical expansion
const detailsContainerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
        opacity: 1,
        height: 'auto',
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        height: 0,
        transition: {
            duration: 0.3,
            when: "afterChildren",
            staggerChildren: 0.05,
            staggerDirection: -1,
        }
    }
};

const detailItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
};

const Experience = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const [activeIndex, setActiveIndex] = useState(null);

    // Handler for mouse enter and leave for desktop
    const handleMouseEnter = (index) => {
        if (window.innerWidth >= 768) { // Only trigger hover on desktop
            setActiveIndex(index);
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth >= 768) {
            setActiveIndex(null);
        }
    };
    
    // Handler for click/tap, works on all devices
    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <SectionWrapper id="experience" title="My Journey" ref={sectionRef}>
            <div className="relative max-w-3xl mx-auto">
                <motion.div 
                    className="absolute left-4 md:left-1/2 w-1 bg-gray-200 dark:bg-gray-700 rounded-full"
                    style={{ height: '100%', top: 0, transform: 'translateX(-50%)' }}
                />
                <motion.div 
                    className="absolute left-4 md:left-1/2 w-1 bg-gradient-to-b from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary rounded-full"
                    style={{ height: useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']), top: 0, transform: 'translateX(-50%)' }}
                />
                <div className="space-y-12">
                    {experienceData.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div 
                                key={index} 
                                className="flex items-start"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-light-accent dark:bg-dark-accent text-white flex items-center justify-center absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10 shadow-lg border-4 border-light-background dark:border-dark-background">
                                    <Icon />
                                </div>
                                <div className="w-full pl-16 md:pl-0">
                                    <div className={`md:flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                        <div className="md:w-1/2"></div>
                                        <div className="md:w-1/2">
                                            <div 
                                                className={`p-6 rounded-lg shadow-lg border border-white/10 bg-white/5 dark:bg-white/10 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-500/10 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
                                                onMouseEnter={() => handleMouseEnter(index)}
                                                onMouseLeave={handleMouseLeave}
                                                onClick={() => handleClick(index)}
                                                data-interactive
                                            >
                                                <p className="font-semibold text-sm mb-2 text-light-primary dark:text-dark-primary">{item.date}</p>
                                                <div className="flex items-center mb-1">
                                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                                    {item.isCurrent && (<span className="relative flex h-3 w-3 ml-2"><span className="animate-live-pulse absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span></span>)}
                                                </div>
                                                <p className="text-md font-semibold text-light-text/80 dark:text-dark-text/80 mb-2">{item.company}</p>
                                                <p className="text-sm text-light-text/70 dark:text-dark-text/70">{item.description}</p>
                                                
                                                <AnimatePresence>
                                                    {activeIndex === index && (
                                                        <motion.div
                                                            variants={detailsContainerVariants}
                                                            initial="hidden"
                                                            animate="visible"
                                                            exit="exit"
                                                            className="mt-4 space-y-2 overflow-hidden"
                                                        >
                                                            {item.details.map((detail, i) => (
                                                                <motion.p 
                                                                    key={i}
                                                                    variants={detailItemVariants}
                                                                    className="text-sm text-light-text/90 dark:text-dark-text/90 pl-4 border-l-2 border-light-primary/50 dark:border-dark-primary/50"
                                                                >
                                                                    {detail}
                                                                </motion.p>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Experience;