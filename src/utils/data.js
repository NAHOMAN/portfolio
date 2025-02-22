import { FaCode, FaServer, FaTools } from 'react-icons/fa';

export const personalInfo = {
  name: "Nahom Nigussie",
  title: "Frontend Developer",
  email: "nahom@example.com",
  location: "Ethiopia",
  bio: "Frontend Developer passionate about creating beautiful and functional web experiences."
};

export const socialLinks = {
  github: "https://github.com/nahom",
  linkedin: "https://linkedin.com/in/nahom",
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
    category: "Backend Development",
    icon: FaServer,
    items: [
      "Node.js & Express",
      "MongoDB & MySQL",
      "RESTful APIs",
      "Authentication",
      "AWS Services",
      "Firebase"
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
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
    image: "/ecommerce-project.jpg",
    github: "https://github.com/nahom/ecommerce",
    demo: "https://ecommerce-demo.com",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  // Add more projects...
];

export const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" }
]; 