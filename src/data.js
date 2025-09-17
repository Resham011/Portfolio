import React from 'react';
import { FaBriefcase, FaChartLine, FaCertificate, FaUserGraduate, FaLightbulb, FaTrophy, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiMongodb, SiExpress, SiCplusplus, SiPostman, SiFigma, SiStreamlit, SiReact, SiNodedotjs, SiJavascript, SiPython, SiHtml5, SiCss3, SiGit, SiGithub } from 'react-icons/si';

import Leetcode from './assets/achievement/Leetcode.png';
import Reem from './assets/achievement/Reem.png';
import GAO from './assets/achievement/GAO.jpeg';
import HP from './assets/achievement/HP.jpg';
import HackIndia from './assets/achievement/HackIndia.jpg';
import Udemy from './assets/achievement/Udemy.jpg';

import MRS from './assets/projects/MRS.png';
import AlgoRecall from './assets/projects/AlgoRecall.png';
import Portfolio from './assets/projects/Portfolio.png';
import Portfolio_1 from './assets/projects/Portfolio_1.png';
import Portfolio_2 from './assets/projects/Portfolio_2.png';
import Portfolio_3 from './assets/projects/Portfolio_3.png';
import AlgoRecall_1 from './assets/projects/AlgoRecall-1.png';
import AlgoRecall_2 from './assets/projects/AlgoRecall-2.png';
import AlgoRecall_3 from './assets/projects/AlgoRecall-3.png';
import AlgoRecall_4 from './assets/projects/AlgoRecall-4.png';
import AlgoRecall_5 from './assets/projects/AlgoRecall-5.png';
import AlgoRecall_6 from './assets/projects/AlgoRecall-6.png';
import AlgoRecall_7 from './assets/projects/AlgoRecall-7.png';
import AlgoRecall_8 from './assets/projects/AlgoRecall-8.png';
import AlgoRecall_9 from './assets/projects/AlgoRecall-9.png';
import AlgoRecall_10 from './assets/projects/AlgoRecall-10.png';
import AlgoRecall_11 from './assets/projects/AlgoRecall-11.png';
import MRS_1 from './assets/projects/MRS_1.png';
import MRS_2 from './assets/projects/MRS_2.png';

// --- DATA ---
export const navLinks = [
  { name: 'About', href: '#about' }, { name: 'Skills', href: '#skills' }, { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' }, { name: 'Achievements', href: '#achievements' }, { name: 'Contact', href: '#contact' },
];
export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/resham-3b438a281/', github: 'https://github.com/Resham011', codolio: 'https://codolio.com/profile/Resham298',
};

export const skillsData = {
  languages: [ { name: 'C++', icon: SiCplusplus }, { name: 'Java', icon: FaJava }, { name: 'JavaScript', icon: SiJavascript }, ],
  frontend: [ { name: 'HTML5', icon: SiHtml5 }, { name: 'CSS3', icon: SiCss3 }, { name: 'Tailwind CSS', icon: SiTailwindcss }, { name: 'React.js', icon: SiReact }, { name: 'Vite', icon: SiVite }, ],
  backend: [ { name: 'Node.js', icon: SiNodedotjs }, { name: 'Express.js', icon: SiExpress }, { name: 'MongoDB', icon: SiMongodb }, ],
  ml_datascience: [ { name: 'Python', icon: SiPython }, { name: 'Machine Learning', icon: FaBriefcase }, { name: 'Streamlit', icon: SiStreamlit }, ],
  tools: [ { name: 'Git', icon: SiGit }, { name: 'GitHub', icon: SiGithub }, { name: 'Postman', icon: SiPostman }, { name: 'Figma', icon: SiFigma } ],
};
export const experienceData = [
    { 
        date: 'July 2024 - Present', 
        title: 'Contributor', 
        company: 'GSSOC 2025', 
        description: 'Selected as a contributor for GirlScript Summer of Code 2025, contributing to open-source projects, collaborating with a global community of developers, and enhancing software development skills.', 
        isCurrent: true, 
        icon: FaBriefcase,
        details: [
            "Collaborated on a large-scale open-source project, following agile methodologies.",
            "Resolved complex bugs and implemented new features based on community feedback.",
            "Gained experience with Git, pull requests, and code reviews in a team environment."
        ]
    },
    { 
        date: 'Aug 2024 - Oct 2024', 
        title: 'Web Content Upload Intern', 
        company: 'GAO Tek Inc. (Remote)', 
        description: 'Managed product listings on a WordPress site, focusing on SEO-friendly descriptions and metadata to improve search visibility. Gained experience in CMS workflows and remote collaboration.', 
        icon: FaBriefcase,
        details: [
            "Authored and optimized over 100 product descriptions for SEO.",
            "Utilized WordPress and internal tools to manage and update web content.",
            "Worked effectively in a remote, asynchronous team setting."
        ]
    },
    { 
        date: 'July 2024', 
        title: 'Campus Ambassador', 
        company: 'E-Cell, IIT Bombay', 
        description: 'Organized and coordinated campus events to promote entrepreneurial initiatives. Led promotional campaigns to boost student participation and awareness of E-Cell programs.', 
        icon: FaBriefcase,
        details: [
            "Successfully increased event attendance by 40% through targeted social media campaigns.",
            "Acted as the primary liaison between the student body and E-Cell.",
            "Developed leadership and public speaking skills through event hosting."
        ]
    },
];

export const projectsData = [
     {
  title: 'AlgoRecall',
  image: AlgoRecall, 
  description: 'A full-stack web app to log, revise, and master coding problems with customized revision sessions and spaced repetition.',
  tags: ['MERN', 'Redux', 'JWT', 'Tailwind'],
  live: 'https://algorecall-vert.vercel.app/', 
  source: 'https://github.com/Resham011/AlgoRecall',
  features: [
    'Secure signup, login, email verification, and JWT-based authentication',
    'Add, edit, and organize coding problems with topics, companies, and tags',
    'Customized revision sessions: random topic, random company, or combined topic + company',
    'Spaced repetition to reinforce memory and long-term retention',
    'Analytics and progress tracking: streaks, revision counts, and performance charts',
    'Dark/light theme toggle and responsive UI for desktop and mobile',
    'Robust backend with Express + MongoDB, error handling, and route protection'
  ],
  details: {
    problem: 'Practicing coding problems is easy, but retaining solutions and revising them effectively is a challenge. I needed a system to organize solved problems and reinforce memory through structured revisions.',
    solution: 'I developed AlgoRecall, a full-stack MERN application with authentication, problem CRUD operations, and a revision system powered by spaced repetition. Users can revise problems by topic, company, or even a random combination of both, simulating real interview conditions. The platform also includes personalized settings, analytics dashboards, and a smooth, responsive UI built with Tailwind CSS.',
    challenges: 'Designing the revision logic was complex — balancing spaced repetition with randomization while keeping the system user-friendly. Implementing secure authentication with JWT, managing state with Redux, and ensuring seamless UI responsiveness across devices added to the learning curve but made the project robust.',
    images: [AlgoRecall, AlgoRecall_1, AlgoRecall_2, AlgoRecall_3, AlgoRecall_4, AlgoRecall_5, AlgoRecall_6, AlgoRecall_7, AlgoRecall_8, AlgoRecall_9, AlgoRecall_10, AlgoRecall_11] // replace with your project screenshots
  }
},
{
  title: 'Movie Recommendation System',
  image: MRS,
  description: 'A content-based movie recommendation system that uses natural language processing (NLP) and cosine similarity to suggest similar films based on user preferences.',
  tags: ['Python', 'Streamlit', 'ML', 'NLP'],
  live: 'https://movie-recommendation-system-e8pjs6dvu6pcx6ctfhd3hj.streamlit.app/',
  source: 'https://github.com/Resham011/Movie-Recommendation-System',
  details: {
    problem: 'With thousands of movies available, viewers often find it difficult to discover films that align with their tastes and preferences.',
    solution: 'I designed and developed a content-based recommendation engine using Python and NLP techniques. By processing a dataset of over 5000 movies, the system analyzes genres, keywords, taglines, and cast information to generate similarity scores using cosine similarity. Users receive dynamic, personalized movie recommendations in a clean Streamlit interface.',
    challenges: 'One major challenge was engineering meaningful features from sparse and inconsistent text data. I combined relevant attributes like genres, keywords, and cast into a unified “tag” field, handled missing values, and optimized the similarity matrix to maintain performance. Streamlining the NLP pipeline and ensuring responsiveness in the Streamlit UI were also key technical hurdles.',
    images: [MRS_1, MRS_2, MRS]
  }
},  
{
  title: 'Personal Portfolio Website',
  image: Portfolio,
  description: 'A responsive, visually polished portfolio website built with React and Tailwind CSS to showcase my projects, skills, and technical journey.',
  tags: ['React', 'Vite', 'Tailwind'],
  live: 'https://portfolio-three-chi-iwz6yy3ki4.vercel.app/',
  source: 'https://github.com/Resham011/Portfolio',
  details: {
    problem: 'As a developer, having a strong personal brand is essential. I needed a platform to professionally present my work, skills, and background in a way that reflects my technical abilities.',
    solution: 'I developed a full-stack portfolio website using React with Vite for blazing-fast performance and Tailwind CSS for a sleek, responsive UI. The site features a dark/light theme toggle, smooth scroll animations, interactive project modals, and a working contact form. It’s optimized for both desktop and mobile viewing, giving visitors an intuitive and engaging experience.',
    challenges: 'Creating a dynamic yet performant design was a balancing act. I had to fine-tune animation timings, structure reusable components efficiently, and ensure cross-browser/device compatibility. Implementing the interactive project modal and theme persistence added an extra layer of complexity that was rewarding to solve.',
    images: [Portfolio, Portfolio_1, Portfolio_2, Portfolio_3]
  }
},
];

export const achievementsData = [
  {
    title: "HackIndia Top 7 Finalist",
    description: "Led a team to become one of the top 7 finalists at HackIndia Hackathon.",
    icon: FaTrophy,
    link: "https://www.linkedin.com/posts/resham-3b438a281_hackathon-hackindia2025-spark9-activity-7322145635367845888-Iwsx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAESTwbgB-A1yB9qXbQ_QhNQaPIApwTgbGAY",
    image: HackIndia,
  },
  {
    title: "The Complete SQL Bootcamp",
    description: "Completed a comprehensive SQL Bootcamp course on Udemy.",
    icon: FaCertificate,
    link: "https://www.udemy.com/certificate/UC-33c0db23-8fec-47c2-8599-3453d6ca4ce1/",
    image: Udemy,
  },
  {
    title: "AI for Beginners — HP LIFE",
    description: "Completed the 'AI for Beginners' course by HP LIFE.",
    icon: FaCertificate,
    link: "https://www.life-global.org/certificate/c6c04810-4c38-4fcf-9fda-9dda908c934f",
    image: HP,
  },
  {
     title: "LeetCode Competitive Achiever",
     description: "Reached 1,623 contest rating with 43 contests, ranking in the top 20.24% globally. Solved 800+ problems with 98%+ acceptance rates across difficulty levels.",
     icon: FaChartLine,
     link: "https://leetcode.com/u/Resham298/", 
     image: Leetcode, 
  },
  {
    title: "Internship at GAO Tek Inc.",
    description: "Completed a technical internship with GAO Tek Inc., gaining real-world experience.",
    icon: FaUserGraduate,
    link: "https://www.linkedin.com/in/resham-3b438a281/overlay/experience/2430537506/multiple-media-viewer/?profileId=ACoAAESTwbgB-A1yB9qXbQ_QhNQaPIApwTgbGAY&treasuryMediaId=1729326730143",
    image: GAO,
  },
  {
    title: "Top 2 Startup — Reem Designers",
    description: "My startup 'Reem Designers' was selected among the top 2 at the Genesis Idea Open House by Quantum University.",
    icon: FaLightbulb,
    link: "https://www.instagram.com/p/CzbBqS4pzEC/?utm_source=ig_web_copy_link",
    image: Reem,
  },
];

