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
    threejs,
  } from "../assets";

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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];

  export { services, technologies, experiences, testimonials, projects };