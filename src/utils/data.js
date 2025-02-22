import { FaCode, FaTools } from 'react-icons/fa';

export const personalInfo = {
  name: "Nahom Nigussie",
  title: "Frontend Developer",
  email: "nahomnigussie78@example.com",
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
      "Redux & Context API",
      "Responsive Design"
    ]
  },
  {
    category: "Tools & Practices",
    icon: FaTools,
    items: [
      "Git & GitHub",
      "VS Code",
      "Webpack & Vite",
      "Docker",
      "Jest & Testing",
      "Agile/Scrum"
    ]
  }
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A responsive e-commerce platform built with React. Features include product catalog, shopping cart, and a seamless checkout experience.",
    image: "/ET-ecommerce-project.jpg",
    github: "https://github.com/nahom/ecommerce",
    demo: "https://ecommerce-demo.com",
    technologies: ["React", "Redux", "Styled Components", "Firebase"]
  },
  {
    title: "Portfolio Website",
    description: "A modern and responsive portfolio website showcasing my projects and skills. Built with React and featuring smooth animations and dark mode support.",
    image: "/portfolio-project.jpg",
    github: "https://github.com/nahom/portfolio",
    demo: "https://portfolio-demo.com",
    technologies: ["React", "CSS3", "Framer Motion"]
  },
  {
    title: " Trading Blog ",
    description: "NC4x Traders Hub: Your go-to platform for trade insights and inspiration.",
    image: "/nc4x-traders-hub.jpg",
    github: "https://github.com/nahom/webstack---portfolio-project-react",
    demo: "https://nahoman.github.io/webstack---portfolio-project-react/",
    technologies: ["React", "Firebase"]
  },
  {
    title: "Task Management App",
    description: "A clean and intuitive task management application with drag-and-drop functionality, task categories, and progress tracking.",
    image: "/task-manager.jpg",
    github: "https://github.com/nahom/task-manager",
    demo: "https://task-manager-demo.com",
    technologies: ["React", "TypeScript", "Tailwind CSS"]
  }
];

export const navLinks = [
  { title: "Home", href: "home" },
  { title: "About", href: "about" },
  { title: "Skills", href: "skills" },
  { title: "Projects", href: "projects" },
  { title: "Contact", href: "contact" }
]; 