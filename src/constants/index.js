import {
    mobile,
    backend,
    productOwner,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    optima,
    univalle,
    agronomia,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs

  } from "../assets";

import agrobase from '../assets/agrobase.png';
import sigelobase from '../assets/sigelobase.png';
import forecastcesa from '../assets/forecastcesa.png';

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Product Owner",
      icon: productOwner,
    },
  ];

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  const experiences = [
    {
      title: "Fullstack Web Developer",
      company_name: "Club Agronomía Central - Argentina",
      icon: agronomia,
      iconBg: "#E6DEDD",
      date: "Apr 2023 - Present",
      points: [
        "Developing and maintaining a web app using Next.js (React), Tailwind,Express, MongoDb and Node.Js",
        "Collaborating with other developers to create a web app for a sport club in Argentina",
        "Implementing responsive design on different app components",
        "Participating in code reviews and providing constructive feedback to other developers",
      ],
    },

    {
      title: "Python Developer & Product Owner",
      company_name: "Universidad del Valle - Mincienciaton Project",
      icon: univalle,
      iconBg: "#383E56",
      date: "May 2020 - Dec 2020",
      points: [
        "Developing decision models with Python to implement into a web app based on Django framework",
        "Collaborating with team leaders and other developers to define and interpretate different requirements",
        "Activities backlog priorization according to sprint goals",
        "QA functional on different features related with the web app",
      ],
    },


    {
      title: "Vba & R Developer",
      company_name: "Óptima Consultores en Ingeniería Industrial",
      icon: optima,
      iconBg: "#383E56",
      date: "Sept 2015 - Dec 2020",
      points: [
        "Developing and maintaining desktop applications using VBA, SQL and PowerQuery.",
        "Collaborating with clients and other developers to create high-quality products.",
        "Implementing different solutions for Supply Chain decision making with different clients",
        "Leading training with final users and people related",
      ],
    },
    {
      title: "Project Manager",
      company_name: "Óptima Consultores en Ingeniería Industrial",
      icon: optima,
      iconBg: "#E6DEDD",
      date: "Jan 2016 - Dec 2020",
      points: [
        "Leading developer teams to acomplish goals and objectives realted with consulting projects",
        "Activities priorization according to the devlivery dates",
        "Budget management on different projects",
        "Participating in code reviews and providing constructive feedback to other developers and the client",
      ],
    },


    {
      title: "Teacher",
      company_name: "Universidad del Valle",
      icon: univalle,
      iconBg: "#E6DEDD",
      date: "Feb 2013 - Present",
      points: [
        "University teacher on subjects related with engineering for under and postgraduated students",
        "Great skills with decision making on Supply Chain Courses",
        "I teach Optimization, simulation for different problems in the industry",
        "Main skills related with communication and leadership",
      ],
    }
  ];

  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const projects = [
    {
      name: "Club Agronomía Central",
      description:
        "Web based platform that allows the central agronomy sports club in Argentina to manage all its processes. This platform has an administration panel to manage the affiliates, their students and sports events that it offers.",
      tags: [
        {
          name: "Nextjs",
          color: "text-white-600",
        },
        {
          name: "Reactjs",
          color: "text-blue-600",
        },
        {
          name: "Mongodb",
          color: "text-green-600",
        },
        {
          name: "Tailwind",
          color: "text-fuchsia-600",
        },
      ],
      image: agrobase,
      source_code_link: "https://github.com/Brycot/Club-Agronomia-Central",
    },
    {
      name: "Inventory Management App",
      description:
        "Web application for inventory management in a food bank. This application allows to manage the donations that arrive at a food bank and plan the collection, storage and final transport to beneficiaries with a user friendly admin panel.",
      tags: [
        {
          name: "Python",
          color: "text-green-600",
        },
        {
          name: "Django",
          color: "text-white-600",
        },
        {
          name: "Bootstrap",
          color: "text-blue-600",
        },
        {
          name: "RestApi",
          color: "text-yellow-600",
        },
      ],
      image: sigelobase,
      source_code_link: "https://github.com/andressalazar08/proyecto-donaciones",
    },
    {
      name: "Sales Forecasting App",
      description:
        "Web platform to generate a sales forecast in a food packaging production company in Colombia. This platform allows consolidating forecast sales information in all business lines. In addition, statistical models programmed in R were integrated.",
      tags: [
        {
          name: "Angular",
          color: "text-red-600",
        },
        {
          name: "Node",
          color: "text-green-600",
        },
        {
          name: "SQL server",
          color: "text-white-600",
        },
        {
          name: "R programming language",
          color: "text-blue-600",
        },
      ],
      image: forecastcesa,
      source_code_link: "https://github.com/andressalazar08/salesforecast",
    },
  ];

  export { services, technologies, experiences, testimonials, projects };