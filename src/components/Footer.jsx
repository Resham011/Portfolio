import React from 'react';

const Footer = () => (
  <footer className="relative z-10 py-8 bg-light-background/50 dark:bg-dark-background/50 border-t border-white/10">
    <div className="container mx-auto px-6 text-center">
      <p className="text-sm text-light-text/60 dark:text-dark-text/60">&copy; {new Date().getFullYear()} Resham. All rights reserved.</p>
      <p className="text-xs text-light-text/50 dark:text-dark-text/50 mt-1">Designed & Built by Resham</p>
    </div>
  </footer>
);

export default Footer;
