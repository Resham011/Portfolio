import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import { socialLinks } from '../data';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const socialContactLinks = [
    { href: 'mailto:resham2987@gmail.com', icon: FaEnvelope, label: 'resham2987@gmail.com', hoverColor: 'hover:text-purple-500 dark:hover:text-purple-400', target: '', },
    { href: 'https://wa.me/9058670701', icon: FaWhatsapp, label: '+91 9058670701', hoverColor: 'hover:text-green-500 dark:hover:text-green-400', target: '_blank', },
    { href: socialLinks.linkedin, icon: FaLinkedin, label: 'LinkedIn', hoverColor: 'hover:text-blue-600 dark:hover:text-blue-400', target: '_blank', },
    { href: socialLinks.github, icon: FaGithub, label: 'GitHub', hoverColor: 'hover:text-gray-800 dark:hover:text-white', target: '_blank', },
  ];


const sendEmail = (e) => {
  e.preventDefault();

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceID || !templateID || !publicKey) {
    console.error("EmailJS credentials are missing. Please check your .env file.");
    setStatus('error');
    setTimeout(() => setStatus(''), 5000);
    return;
  }

  setStatus('sending');

  emailjs.sendForm(serviceID, templateID, form.current, publicKey)
    .then(() => {
      setStatus('success');
      form.current.reset();
      setTimeout(() => setStatus(''), 5000); // reset after success
    })
    .catch((error) => {
      console.error('EmailJS failed:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000); // reset after error
    });
};


  const inputClass = "w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300";

  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <motion.div
          className="space-y-8 order-2 lg:order-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Have an Idea? Let's Talk
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Whether you have a project in mind, a question, or just want to connect, feel free to reach out. I'm always open to discussing new ideas and opportunities.
            </p>
          </div>
          <div className="hidden lg:block border-l-2 border-purple-500/30 dark:border-purple-400/30 pl-8 space-y-10">
            {socialContactLinks.map((link, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[42px] top-1/2 -translate-y-1/2 w-5 h-5 bg-white dark:bg-gray-900 border-4 border-purple-500 rounded-full transition-all duration-300 group-hover:scale-125" />
                <a
                  href={link.href}
                  target={link.target}
                  rel={link.target === '_blank' ? 'noopener noreferrer' : ''}
                  className={`flex items-center gap-4 text-base font-medium text-gray-600 dark:text-gray-300 transition-all duration-300 ${link.hoverColor} hover:scale-105`}
                  data-interactive
                >
                  <link.icon className="text-2xl text-purple-600 dark:text-purple-400 transition-transform duration-300 group-hover:scale-110" />
                  <span>{link.label}</span>
                </a>
              </div>
            ))}
          </div>
          <div className="flex lg:hidden justify-center items-center gap-6 text-3xl pt-4 text-gray-600 dark:text-gray-300">
            {socialContactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.target}
                rel={link.target === '_blank' ? 'noopener noreferrer' : ''}
                className={`transition-colors duration-300 ${link.hoverColor}`}
                aria-label={link.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                data-interactive
              >
                <link.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="rounded-2xl p-6 sm:p-8 bg-white/90 dark:bg-white/5 backdrop-blur-md shadow-lg border border-white/20 order-1 lg:order-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6 " autoComplete="off">
            <input type="text" name="user_name" placeholder="Your Name" required className={inputClass} />
            <input type="email" name="user_email" placeholder="Your Email" required className={inputClass} />
            <textarea name="message" rows="5" placeholder="Your Message" required className={`${inputClass} resize-none`} />
            <div className="text-center pt-2">
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="w-full sm:w-auto px-10 py-3 rounded-full font-bold text-lg text-white bg-gradient-to-r from-purple-800 to-purple-500  disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(120, 81, 228, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                data-interactive
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>
            {status && (
              <p className={`text-center font-medium mt-4 text-sm ${status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {status === 'success' && (<p className="text-center font-medium mt-4 text-sm text-green-500"> Message sent successfully! Thank you. </p>)}
                {status === 'error' && (<p className="text-center font-medium mt-4 text-sm text-red-500">Something went wrong. Please try again.</p> )}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
