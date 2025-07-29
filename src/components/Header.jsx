import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import { navLinks } from '../data';


const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (e, href) => { e.preventDefault(); document.querySelector(href).scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); };
  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light-background/80 dark:bg-dark-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text">Resham</a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (<a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors font-medium" data-interactive>{link.name}</a>))}
          <motion.button onClick={toggleTheme} className="p-2 rounded-full " whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} data-interactive>{theme === 'light' ? <FaMoon className="text-purple-600" /> : <FaSun className="text-purple-600" />}</motion.button>
        </nav>
        <div className="md:hidden"><button onClick={() => setIsOpen(!isOpen)} data-interactive>{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}</button></div>
      </div>
      {isOpen && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden bg-light-background dark:bg-dark-background absolute top-full left-0 w-full">
        <nav className="flex flex-col items-center space-y-4 py-4">
          {navLinks.map((link) => (<a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors font-medium text-lg" data-interactive>{link.name}</a>))}
          <button onClick={toggleTheme} className="p-2 rounded-full " data-interactive>{theme === 'light' ? <FaMoon className="text-purple-600 " /> : <FaSun className="text-purple-600" />}</button>
        </nav>
      </motion.div>)}
    </motion.header>
  );
};
export default Header;