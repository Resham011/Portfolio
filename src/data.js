import React from 'react';
import { FaBriefcase, FaChartLine, FaCertificate, FaUserGraduate, FaLightbulb, FaTrophy, FaJava, FaBrain, FaRobot, FaLayerGroup, FaCode, FaDatabase, FaCubes, FaNetworkWired, FaAtom, FaServer, FaVectorSquare } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiCplusplus, SiPostman, SiFigma, SiStreamlit, SiReact, SiNodedotjs, SiPython, SiHtml5, SiCss3, SiGit, SiGithub, SiPytorch, SiScikitlearn, SiHuggingface, SiFastapi, SiPandas, SiNumpy, SiJupyter, SiDocker, SiPostgresql, SiLangchain, SiTensorflow, SiKeras, SiSpacy, SiGooglecolab, SiOpenai, SiAnaconda, SiPlotly, SiFlask } from 'react-icons/si';

import Leetcode from './assets/achievement/Leetcode.png';
import Reem from './assets/achievement/Reem.png';
import GAO from './assets/achievement/GAO.jpeg';
import HP from './assets/achievement/HP.jpg';
import HackIndia from './assets/achievement/HackIndia.jpg';
import Udemy from './assets/achievement/Udemy.jpg';

import MRS from './assets/projects/MRS.png';
import AlgoRecall from './assets/projects/AlgoRecall.png';
import HRS from './assets/projects/HRS.png';
import HRS_1 from './assets/projects/HRS_1.png';
import HRS_2 from './assets/projects/HRS_2.png';
import HRS_3 from './assets/projects/HRS_3.png';
import Classification from './assets/projects/Classification.png';
import Pdf from './assets/projects/Pdf.png';
import Pdf_1 from './assets/projects/Pdf_1.png';
import Readme from './assets/projects/Readme.png';
import Readme_1 from './assets/projects/Readme_1.png';
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
  linkedin: 'https://www.linkedin.com/in/resham-3b438a281/', github: 'https://github.com/Resham011', huggingFace: 'https://huggingface.co/Resham2987', codolio: 'https://codolio.com/profile/Resham298',
};

// ─── SKILLS (AI/ML focused) ──────────────────────────────────────────────────
export const skillsData = {
  // 1. AI / ML Core — primary target for roles
  ai_ml: [
    { name: 'Machine Learning', icon: FaBrain },
    { name: 'Deep Learning',    icon: FaNetworkWired },
    { name: 'LLMs / GenAI',     icon: FaRobot },
    { name: 'Transformers',     icon: FaAtom },
    { name: 'NLP',              icon: FaLayerGroup },
    { name: 'RAG Systems',      icon: FaVectorSquare },
    { name: 'PyTorch',          icon: SiPytorch },
    { name: 'TensorFlow',       icon: SiTensorflow },
    { name: 'Keras',            icon: SiKeras },
    { name: 'Scikit-learn',     icon: SiScikitlearn },
    { name: 'Hugging Face',     icon: SiHuggingface },
    { name: 'OpenAI API',       icon: SiOpenai },
    { name: 'LangChain',   icon: SiLangchain },
    { name: 'Vector DB',   icon: FaServer },
    { name: 'FastAPI',     icon: SiFastapi },
    { name: 'Flask',       icon: SiFlask },
  ],
  // 3. Data Science Stack
  data_tools: [
    { name: 'Pandas',         icon: SiPandas },
    { name: 'NumPy',          icon: SiNumpy },
    { name: 'Plotly',         icon: SiPlotly },
    { name: 'Streamlit',      icon: SiStreamlit },
    { name: 'Jupyter',        icon: SiJupyter },
    { name: 'Google Colab',   icon: SiGooglecolab },
    { name: 'Anaconda',       icon: SiAnaconda },
  ],
  // 4. Languages
  languages: [
    { name: 'Python',  icon: SiPython },
    { name: 'C++',     icon: SiCplusplus },
    { name: 'Java',    icon: FaJava },
    { name: 'SQL',     icon: SiPostgresql },
  ],
  // 5. Web / Full-Stack (supporting skill)
  web: [
    { name: 'React.js',    icon: SiReact },
    { name: 'Node.js',     icon: SiNodedotjs },
    { name: 'MongoDB',     icon: SiMongodb },
    { name: 'Express.js',  icon: SiExpress },
    { name: 'Tailwind CSS',icon: SiTailwindcss },
    { name: 'HTML5',       icon: SiHtml5 },
    { name: 'CSS3',        icon: SiCss3 },
  ],
  // 6. Dev Tools
  tools: [
    { name: 'Git',    icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
    { name: 'Docker', icon: SiDocker },
    { name: 'VS Code',icon: FaCode },
    { name: 'Postman',icon: SiPostman },
    { name: 'Figma',  icon: SiFigma },
  ],
};

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
export const experienceData = [
  {
    date: 'July 2025 - October 2025',
    title: 'Contributor (Remote)',
    company: 'GSSOC 2025',
    description: 'Selected as a contributor for GirlScript Summer of Code 2025, contributing to open-source projects, collaborating with a global community of developers, and enhancing software development skills.',
    isCurrent: false,
    icon: FaBriefcase,
    details: [
      'Collaborated on a large-scale open-source project, following agile methodologies.',
      'Resolved complex bugs and implemented new features based on community feedback.',
      'Gained experience with Git, pull requests, and code reviews in a team environment.',
    ],
  },
  {
    date: 'May 2025 - July 2025',
    title: 'Project Trainee (Delhi, India)',
    company: 'Defence Research and Development Organisation (DRDO)',
    description: 'Selected as a Project Trainee to engineer defense-grade web applications and microservices, focusing on secure authentication and real-time radar data visualization.',
    isCurrent: false,
    icon: FaBriefcase,
    details: [
      'Engineered robust role-based authentication and secure communication protocols for defense-grade web applications.',
      'Developed microservices-based radar simulation modules with high-frequency data processing and real-time visualization.',
      'Optimized automated reporting workflows for large-scale geospatial datasets using Python and RESTful APIs, improving data processing efficiency.',
      'Collaborated on mission-critical software modules following strict security and documentation standards.',
    ],
  },
  {
    date: 'Aug 2024 - Oct 2024',
    title: 'Web Content Upload Intern (Remote)',
    company: 'GAO Tek Inc.',
    description: 'Managed product listings on a WordPress site, focusing on SEO-friendly descriptions and metadata to improve search visibility. Gained experience in CMS workflows and remote collaboration.',
    icon: FaBriefcase,
    details: [
      'Authored and optimized over 100 product descriptions for SEO.',
      'Utilized WordPress and internal tools to manage and update web content.',
      'Worked effectively in a remote, asynchronous team setting.',
    ],
  },
  {
    date: 'July 2024',
    title: 'Campus Ambassador',
    company: 'E-Cell, IIT Bombay',
    description: 'Organized and coordinated campus events to promote entrepreneurial initiatives. Led promotional campaigns to boost student participation and awareness of E-Cell programs.',
    icon: FaBriefcase,
    details: [
      'Successfully increased event attendance by 40% through targeted social media campaigns.',
      'Acted as the primary liaison between the student body and E-Cell.',
      'Developed leadership and public speaking skills through event hosting.',
    ],
  },
];

// ─── PROJECTS ────────────────────────────────────────────────────────────────
// export const projectsData = [
//   {
//     title: 'AlgoRecall',
//     image: AlgoRecall,
//     description: 'A full-stack web app to log, revise, and master coding problems with customized revision sessions and spaced repetition.',
//     tags: ['MERN', 'Redux', 'JWT', 'Tailwind'],
//     live: 'https://algorecall-vert.vercel.app/',
//     source: 'https://github.com/Resham011/AlgoRecall',
//     features: [
//       'Secure signup, login, email verification, and JWT-based authentication',
//       'Add, edit, and organize coding problems with topics, companies, and tags',
//       'Customized revision sessions: random topic, random company, or combined topic + company',
//       'Spaced repetition to reinforce memory and long-term retention',
//       'Analytics and progress tracking: streaks, revision counts, and performance charts',
//       'Dark/light theme toggle and responsive UI for desktop and mobile',
//       'Robust backend with Express + MongoDB, error handling, and route protection',
//     ],
//     details: {
//       problem: 'Practicing coding problems is easy, but retaining solutions and revising them effectively is a challenge. I needed a system to organize solved problems and reinforce memory through structured revisions.',
//       solution: 'I developed AlgoRecall, a full-stack MERN application with authentication, problem CRUD operations, and a revision system powered by spaced repetition. Users can revise problems by topic, company, or even a random combination of both, simulating real interview conditions. The platform also includes personalized settings, analytics dashboards, and a smooth, responsive UI built with Tailwind CSS.',
//       challenges: 'Designing the revision logic was complex — balancing spaced repetition with randomization while keeping the system user-friendly. Implementing secure authentication with JWT, managing state with Redux, and ensuring seamless UI responsiveness across devices added to the learning curve but made the project robust.',
//       images: [AlgoRecall, AlgoRecall_1, AlgoRecall_2, AlgoRecall_3, AlgoRecall_4, AlgoRecall_5, AlgoRecall_6, AlgoRecall_7, AlgoRecall_8, AlgoRecall_9, AlgoRecall_10, AlgoRecall_11],
//     },
//   },
//   {
//     title: 'Movie Recommendation System',
//     image: MRS,
//     description: 'A content-based movie recommendation system that uses natural language processing (NLP) and cosine similarity to suggest similar films based on user preferences.',
//     tags: ['Python', 'Streamlit', 'ML', 'NLP'],
//     live: 'https://movie-recommendation-system-e8pjs6dvu6pcx6ctfhd3hj.streamlit.app/',
//     source: 'https://github.com/Resham011/Movie-Recommendation-System',
//     details: {
//       problem: 'With thousands of movies available, viewers often find it difficult to discover films that align with their tastes and preferences.',
//       solution: 'I designed and developed a content-based recommendation engine using Python and NLP techniques. By processing a dataset of over 5000 movies, the system analyzes genres, keywords, taglines, and cast information to generate similarity scores using cosine similarity. Users receive dynamic, personalized movie recommendations in a clean Streamlit interface.',
//       challenges: 'One major challenge was engineering meaningful features from sparse and inconsistent text data. I combined relevant attributes like genres, keywords, and cast into a unified "tag" field, handled missing values, and optimized the similarity matrix to maintain performance. Streamlining the NLP pipeline and ensuring responsiveness in the Streamlit UI were also key technical hurdles.',
//       images: [MRS_1, MRS_2, MRS],
//     },
//   },
//   {
//     title: 'Personal Portfolio Website',
//     image: Portfolio,
//     description: 'A responsive, visually polished portfolio website built with React and Tailwind CSS to showcase my projects, skills, and technical journey.',
//     tags: ['React', 'Vite', 'Tailwind'],
//     live: 'https://portfolio-three-chi-iwz6yy3ki4.vercel.app/',
//     source: 'https://github.com/Resham011/Portfolio',
//     details: {
//       problem: 'As a developer, having a strong personal brand is essential. I needed a platform to professionally present my work, skills, and background in a way that reflects my technical abilities.',
//       solution: 'I developed a full-stack portfolio website using React with Vite for blazing-fast performance and Tailwind CSS for a sleek, responsive UI. The site features a dark/light theme toggle, smooth scroll animations, interactive project modals, and a working contact form. It\'s optimized for both desktop and mobile viewing, giving visitors an intuitive and engaging experience.',
//       challenges: 'Creating a dynamic yet performant design was a balancing act. I had to fine-tune animation timings, structure reusable components efficiently, and ensure cross-browser/device compatibility. Implementing the interactive project modal and theme persistence added an extra layer of complexity that was rewarding to solve.',
//       images: [Portfolio, Portfolio_1, Portfolio_2, Portfolio_3],
//     },
//   },
// ];

export const projectsData = [
  {
    title: 'PDF RAG Chatbot',
    image: Pdf, // 👉 replace with actual image later
    description: 'A conversational AI system that enables users to chat with PDFs using RAG, embeddings, and LLMs.',
    tags: ['FastAPI', 'LangChain', 'FAISS', 'LLM', 'Next.js'],
    live: 'https://pdf-rag-chatbot-five.vercel.app/',
    source: 'https://github.com/Resham011/pdf-rag-chatbot',
    features: [
      'Chat with large PDF documents using natural language',
      'Efficient chunking strategy (800/150)',
      'FAISS vector database for fast retrieval',
      'MMR retrieval for diverse and accurate responses',
      'Low latency using Groq LPU acceleration',
    ],
    details: {
      problem:
        'Manually searching through large PDFs is slow and inefficient.',
      solution:
        'Built a RAG pipeline: PDF → chunking → embeddings → FAISS → MMR retrieval → LLM response, enabling conversational document querying.',
      challenges:
        'Reduced repetition using MMR, improved latency from 3.1s to 1.5s using Groq, and optimized chunking for better retrieval accuracy.',
      images: [Pdf, Pdf_1],
    },
  },

  {
    title: 'Hybrid Recommendation System',
    image: HRS,
    description: 'A hybrid AI recommender combining collaborative filtering, NLP, and computer vision for fashion products.',
    tags: ['PyTorch', 'FastAPI', 'Scikit-learn', 'Computer Vision'],
    live: 'https://huggingface.co/spaces/Resham2987/Abaya-and-Thobes-Recommendation-System',
    source: 'https://huggingface.co/spaces/Resham2987/Abaya-and-Thobes-Recommendation-System/tree/main',
    features: [
      'Hybrid scoring using multiple ML models',
      'SVD collaborative filtering (user behavior)',
      'TF-IDF based content similarity',
      'Visual similarity using MobileNetV2',
      'Image-based recommendation system',
    ],
    details: {
      problem:
        'Traditional recommenders fail to combine user behavior, metadata, and visual similarity effectively.',
      solution:
        'Designed a hybrid model combining SVD (40%), TF-IDF (40%), and trending signals (20%), plus a MobileNetV2-based visual search system.',
      challenges:
        'Balancing hybrid weights and integrating CV + NLP + collaborative filtering into one system.',
      images: [HRS, HRS_1, HRS_2, HRS_3],
    },
  },

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
      'Robust backend with Express + MongoDB, error handling, and route protection',
    ],
    details: {
      problem: 'Practicing coding problems is easy, but retaining solutions and revising them effectively is a challenge. I needed a system to organize solved problems and reinforce memory through structured revisions.',
      solution: 'I developed AlgoRecall, a full-stack MERN application with authentication, problem CRUD operations, and a revision system powered by spaced repetition. Users can revise problems by topic, company, or even a random combination of both, simulating real interview conditions. The platform also includes personalized settings, analytics dashboards, and a smooth, responsive UI built with Tailwind CSS.',
      challenges: 'Designing the revision logic was complex — balancing spaced repetition with randomization while keeping the system user-friendly. Implementing secure authentication with JWT, managing state with Redux, and ensuring seamless UI responsiveness across devices added to the learning curve but made the project robust.',
      images: [AlgoRecall, AlgoRecall_1, AlgoRecall_2, AlgoRecall_3, AlgoRecall_4, AlgoRecall_5, AlgoRecall_6, AlgoRecall_7, AlgoRecall_8, AlgoRecall_9, AlgoRecall_10, AlgoRecall_11],
    },
  },
  {
  title: 'Abaya & Thobe Classification (Transfer Learning)',
  image: Classification,
  description: 'A computer vision model for fashion classification using transfer learning with fine-tuned CNN layers.',
  tags: ['Computer Vision', 'PyTorch', 'Transfer Learning', 'CNN'],
  live: 'https://huggingface.co/spaces/Resham2987/abaya-thobe-demo',
  source: 'https://huggingface.co/spaces/Resham2987/abaya-thobe-demo/tree/main',
  features: [
    'Image classification using pretrained CNN models',
    'Transfer learning with frozen backbone and fine-tuned last layers',
    'Custom classifier head for domain-specific fashion categories',
    'Deployed interactive demo on Hugging Face Spaces',
  ],
  details: {
    problem:
      'Training deep learning models from scratch for fashion classification requires large datasets and high compute.',
    solution:
      'Used transfer learning by leveraging a pretrained CNN, freezing the feature extraction layers, and training only the final classification layers for efficient and accurate prediction.',
    challenges:
      'Optimizing fine-tuning strategy, selecting the right layers to train, and ensuring good generalization with limited domain-specific data.',
    images: [Classification],
  },
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
      challenges: 'One major challenge was engineering meaningful features from sparse and inconsistent text data. I combined relevant attributes like genres, keywords, and cast into a unified "tag" field, handled missing values, and optimized the similarity matrix to maintain performance. Streamlining the NLP pipeline and ensuring responsiveness in the Streamlit UI were also key technical hurdles.',
      images: [MRS_1, MRS_2, MRS],
    },
  },
  {
  title: 'GitHub README Generator (GenAI)',
  image: Readme, // 👉 replace later
  description: 'An LLM-powered tool that automatically generates structured and professional README files from GitHub repositories.',
  tags: ['LLM', 'GenAI', 'Hugging Face', 'FastAPI'],
  live: 'https://huggingface.co/spaces/Resham2987/Github-Readme-Generator',
  source: 'https://huggingface.co/spaces/Resham2987/Github-Readme-Generator/tree/main',
  features: [
    'Automated README generation using LLMs',
    'Parses repository structure and extracts key information',
    'Generates clean, structured, and developer-friendly documentation',
    'Handles different project types and formats dynamically',
  ],
  details: {
    problem:
      'Developers often struggle to write structured and informative README files, leading to poorly documented projects.',
    solution:
      'Built a GenAI-powered system that analyzes repository inputs and generates high-quality README files using LLMs, reducing manual effort and improving documentation consistency.',
    challenges:
      'Ensuring context-aware generation, maintaining structure across different repositories, and handling incomplete or noisy inputs effectively.',
    images: [Readme, Readme_1],
  },
},
];

// ─── ACHIEVEMENTS ─────────────────────────────────────────────────────────────
export const achievementsData = [
  {
    title: 'HackIndia Top 7 Finalist',
    description: 'Led a team to become one of the top 7 finalists at HackIndia Hackathon.',
    icon: FaTrophy,
    link: 'https://www.linkedin.com/posts/resham-3b438a281_hackathon-hackindia2025-spark9-activity-7322145635367845888-Iwsx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAESTwbgB-A1yB9qXbQ_QhNQaPIApwTgbGAY',
    image: HackIndia,
  },
  {
    title: 'The Complete SQL Bootcamp',
    description: 'Completed a comprehensive SQL Bootcamp course on Udemy.',
    icon: FaCertificate,
    link: 'https://www.udemy.com/certificate/UC-33c0db23-8fec-47c2-8599-3453d6ca4ce1/',
    image: Udemy,
  },
  {
    title: 'AI for Beginners — HP LIFE',
    description: 'Completed the \'AI for Beginners\' course by HP LIFE.',
    icon: FaCertificate,
    link: 'https://www.life-global.org/certificate/c6c04810-4c38-4fcf-9fda-9dda908c934f',
    image: HP,
  },
  {
    title: 'LeetCode Competitive Achiever',
    description: 'Reached 1,623 contest rating with 43 contests, ranking in the top 20.24% globally. Solved 800+ problems with 98%+ acceptance rates across difficulty levels.',
    icon: FaChartLine,
    link: 'https://leetcode.com/u/Resham298/',
    image: Leetcode,
  },
  {
    title: 'Internship at GAO Tek Inc.',
    description: 'Completed a technical internship with GAO Tek Inc., gaining real-world experience.',
    icon: FaUserGraduate,
    link: 'https://www.linkedin.com/in/resham-3b438a281/overlay/experience/2430537506/multiple-media-viewer/?profileId=ACoAAESTwbgB-A1yB9qXbQ_QhNQaPIApwTgbGAY&treasuryMediaId=1729326730143',
    image: GAO,
  },
  {
    title: 'Top 2 Startup — Reem Designers',
    description: "My startup 'Reem Designers' was selected among the top 2 at the Genesis Idea Open House by Quantum University.",
    icon: FaLightbulb,
    link: 'https://www.instagram.com/p/CzbBqS4pzEC/?utm_source=ig_web_copy_link',
    image: Reem,
  },
];