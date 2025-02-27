import { FaCode, FaTools } from 'react-icons/fa';

export const personalInfo = {
  name: "Nahom Nigussie",
  title: "Frontend Developer",
  email: "nahomnigussie78@gmail.com",
  location: "Ethiopia",
  bio: "Frontend Developer passionate about creating beautiful and functional web experiences."
};

export const socialLinks = {
  github: "https://github.com/NAHOMAN",
  linkedin: "https://www.linkedin.com/in/nahomnigussie-girmay",
  twitter: "https://twitter.com/nahom"
};

export const skills = [
  {
    category: "Frontend Development",
    icon: FaCode,
    items: [
      "React & Next.js",
      "JavaScript/TypeScript",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Responsive Design"
    ]
  },
  {
    category: "Tools & Practices",
    icon: FaTools,
    items: [
      "Git & GitHub",
      "VS Code",
      "cursor",
      "Figma",
      "Canva"
    ]
  }
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A responsive e-commerce platform built with React. Features include product catalog, shopping cart, and a seamless checkout experience.",
    image: "ET-ecommerce-project.jpg",
    github: "https://github.com/NAHOMAN/ecommerce",
    demo: "https://ecommerce-demo.com",
    technologies: ["React", "Firebase"]
  },
  {
    title: "Portfolio Website",
    description: "A modern and responsive portfolio website showcasing my projects and skills. Built with React and featuring smooth animations and dark mode support.",
    image: "nahom-profile-image.jpg",
    github: "https://github.com/NAHOMAN/portfolio",
    demo: "https://nahoman.github.io/portfolio/",
    technologies: ["React"]
  },
  {
    title: "Trading Blog",
    description: "NC4x Traders Hub: Your go-to platform for trade insights and inspiration.",
    image: "nc4x-traders-hub.jpg",
    github: "https://github.com/NAHOMAN/webstack---portfolio-project-react",
    demo: "https://nahoman.github.io/webstack---portfolio-project-react/",
    technologies: ["React", "Firebase"]
  },/** 
  {
    title: "Task Management App",
    description: "A clean and intuitive task management application with drag-and-drop functionality, task categories, and progress tracking.",
    image: "/task-manager.jpg",
    github: "https://github.com/NAHOMAN/task-manager",
    demo: "https://task-manager-demo.com",
    technologies: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Movie Search App",
    description: "A dynamic movie search application that lets users discover and explore films with real-time search and filtering capabilities.",
    image: "/movie-search.jpg",
    github: "https://github.com/NAHOMAN/movie-search",
    demo: "https://movie-search-demo.vercel.app",
    technologies: ["React", "TMDB API", "CSS Modules"]
  },
  {
    title: "Recipe Finder",
    description: "An interactive recipe finder app that helps users discover new recipes based on ingredients they have or dietary preferences.",
    image: "/recipe-finder.jpg",
    github: "https://github.com/NAHOMAN/recipe-finder",
    demo: "https://recipe-finder-demo.vercel.app",
    technologies: ["React", "Context API", "Styled Components"]
  }
  */
];

export const navLinks = [
  { title: "Home", href: "home" },
  { title: "About", href: "about" },
  { title: "Skills", href: "skills" },
  { title: "Projects", href: "projects" },
  { title: "Contact", href: "contact" }
]; 