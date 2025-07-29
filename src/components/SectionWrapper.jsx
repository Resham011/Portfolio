import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Wrap component in React.forwardRef to accept a ref
const SectionWrapper = React.forwardRef(({ children, id, title }, ref) => {
  const { ref: inViewRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // This function will be called by React with the DOM element
  const setRefs = (el) => {
    // 1. Set the ref for the useInView hook
    inViewRef(el);
    // 2. If a ref is forwarded, set its .current property
    if (ref) {
      ref.current = el;
    }
  };

  return (
    <motion.section
      ref={setRefs} // Use the combined ref handler
      id={id}
      className="py-20 md:py-28 relative"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
      }}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {title}
          <div className="w-20 h-1 mx-auto mt-2 bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-dark-secondary rounded-full" />
        </h2>
        {children}
      </div>
    </motion.section>
  );
});

export default SectionWrapper;