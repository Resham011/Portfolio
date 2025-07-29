import React, { useState, useEffect } from 'react';

// Context
import { ThemeContext } from './context/ThemeContext';

// Components
import Layout from './components/Layout';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

function App() {
  const [modalData, setModalData] = useState(null);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme || (userPrefersDark ? 'dark' : 'light');
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Layout>
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects onProjectClick={setModalData} />
          <Achievements />
          <Contact />
        </main>
        <Footer />
        {modalData && <ProjectModal project={modalData} onClose={() => setModalData(null)} />}
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;




















// // const Footer = () => (
// //   <footer className="relative z-10 py-8 bg-light-background/50 dark:bg-dark-background/50 border-t border-white/10">
// //     <div className="container mx-auto px-6 text-center">
// //       <p className="text-sm text-light-text/60 dark:text-dark-text/60">&copy; {new Date().getFullYear()} Resham. All rights reserved.</p>
// //       <p className="text-xs text-light-text/50 dark:text-dark-text/50 mt-1">Designed & Built by Resham</p>
// //     </div>
// //   </footer>
// // );

// // --- MAIN APP COMPONENT ---
// function App() {
//   const [modalData, setModalData] = useState(null);
//   const [theme, setTheme] = useState(() => {
//     const savedTheme = localStorage.getItem('theme');
//     const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     return savedTheme || (userPrefersDark ? 'dark' : 'light');
//   });
//   useEffect(() => {
//     const root = window.document.documentElement;
//     root.classList.remove('light', 'dark'); root.classList.add(theme);
//     localStorage.setItem('theme', theme);
//   }, [theme]);
//   const toggleTheme = () => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <Layout>
//         <Header />
//         <main className="relative z-10">
//           <Hero />
//           <About />
//           <Skills />
//           <Experience />
//           <Projects onProjectClick={setModalData} />
//           <Achievements />
//           <Contact />
//         </main>
//         <Footer />
//         {modalData && <ProjectModal project={modalData} onClose={() => setModalData(null)} />}
//       </Layout>
//     </ThemeContext.Provider>
//   );
// }

// export default App;

