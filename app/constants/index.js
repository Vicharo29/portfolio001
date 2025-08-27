"use client"

import {
    mobile,
    backend,
    creator,
    sim,
    web,
    cpp,
    cpp2,
    ros,
    python,
    matlab,
    qt,
    micon,
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
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    titech,
    canon,
    inventor,
    mainGui,
    psGui,
    conti,
    irrigation,
    fgl,
    fs,
    linear
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
      title: "Mechatronics",
      icon: backend,
    },
    {
      title: "C++ Programmming",
      icon: cpp,
    },
    {
      title: "Microcontroller Interfacing",
      icon: micon,
    },
    {
      title: "Robot Operating System",
      icon: ros,
    },
    {
      title: "3D CAD Design",
      icon: creator,
    },
    {
      title: "System Simulation",
      icon: sim,
    },
    {
      title: "Machine Learning",
      icon: web,
    },
    {
      title: "Fullstack Development",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "Cpp",
      icon: cpp2,
    },
    {
      name: "Python ",
      icon: python,
    },
    {
      name: "Qt ",
      icon: qt,
    },
    {
      name: "MATLAB ",
      icon: matlab
    },
    {
      name: "Inventor",
      icon: inventor,
    },
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];
  
  const educations = [
    {
      school: "Tokyo Institute of Technology",
      company_name: "Bachelor of Engineering",
      icon: titech,
      iconBg: "#E6DEDD",
      date: "April 2018 - March 2022",
      points: [
        "Majoring in Mechanical Engineering.",
        "a.",
      ],
    },
    {
      school: "Tokyo Institute of Technology",
      company_name: "Master of Engineering",
      icon: titech,
      iconBg: "#E6DEDD",
      date: "April 2022 - March 2024",
      points: [
        "Majoring in Human Centered and Biomedical Engineering.",
        "Researching .",
      ],
    },
  ];

  const experiences = [
    {
      title: "Research Assistant",
      company_name: "Tadano Lab",
      icon: titech,
      iconBg: "#E6DEDD",
      date: "June 2021 - March 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Research Assistant",
      company_name: "Omata Lab",
      icon: titech,
      iconBg: "#E6DEDD",
      date: "April 2022 - March 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Canon Medical Systems",
      icon: canon,
      iconBg: "#E6DEDD",//383E56
      date: "April 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const research = [
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
      name: "Exoskeleton Continuum Robot Development",
      description:
        "An robot used for turbine inspection and maintenance is able to move through constrained spaces and around obstacles.",
      tags: [
        {
          name: "cpp",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "deeplearning",
          color: "pink-text-gradient",
        },
        {
          name: "matlab",
          color: "blue-text-gradient",
        },
        {
          name: "dataanalysis",
          color: "green-text-gradient",
        },
        {
          name: "optotrak",
          color: "pink-text-gradient",
        },
        {
          name: "optitrak",
          color: "blue-text-gradient",
        },
      ],
      image: conti,
      source_code_link: "https://github.com/",
    },
    {
      name: "Robotic Forceps with Flexible Joint",
      description:
        "A robotic forceps with a flexible joint that can be used for minimally invasive surgery. \
        It can sense the force applied to the tissue using cable vibration.",
      tags: [
        {
          name: "inventor",
          color: "blue-text-gradient",
        },
        {
          name: "mechatronics",
          color: "pink-text-gradient",
        },
        {
          name: "circuits",
          color: "blue-text-gradient",
        },
      ],
      image: fs,
      source_code_link: "https://github.com/",
    },
    {
      name: "Control System for the Robotic Forceps",
      description:
        "A robotic forceps with a flexible joint that can be used for minimally invasive surgery. \
        It can sense the force applied to the tissue using cable vibration.",
      tags: [
        {
          name: "microcontroller",
          color: "pink-text-gradient",
        },
        {
          name: "cpp",
          color: "blue-text-gradient",
        },
        {
          name: "pyqt",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
        {
          name: "matlab",
          color: "green-text-gradient",
        },
        {
          name: "dataanalysis",
          color: "blue-text-gradient",
        },
      ],
      image: mainGui,
      source_code_link: "https://github.com/",
    },
    {
      name: "Data Acquisition for the Robotic Forceps",
      description:
        "A robotic forceps with a flexible joint that can be used for minimally invasive surgery. \
        It can sense the force applied to the tissue using cable vibration.",
      tags: [
        {
          name: "pyqt",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
        {
          name: "matlab",
          color: "green-text-gradient",
        },
        {
          name: "dataanalysis",
          color: "blue-text-gradient",
        },
        {
          name: "contec",
          color: "pink-text-gradient",
        },
        {
          name: "cpp",
          color: "blue-text-gradient",
        },
      ],
      image: psGui,
      source_code_link: "https://github.com/",
    },
    {
      name: "Future Gadget Laboratory",
      description:
        "A website that showcases the inventions and gadgets created by the Future Gadget Laboratory members. \
        The website also features mathematics, physics and electronics lessons.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "reactjs",
          color: "pink-text-gradient",
        },
        {
          name: "expressjs",
          color: "blue-text-gradient",
        },
      ],
      image: fgl,
      source_code_link: "https://github.com/",
    },
    {
      name: "Automatic Irrigation System",
      description:
        "An automatic irrigation system that uses sensors to detect soil moisture levels and automatically waters plants when the soil is dry. \
        The system can be controlled remotely via a mobile app.",
      tags: [
        {
          name: "cpp",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "inventor",
          color: "pink-text-gradient",
        },
        {
          name: "3dprinting",
          color: "blue-text-gradient",
        },
        {
          name: "microcontroller",
          color: "green-text-gradient",
        },
        {
          name: "platformio",
          color: "pink-text-gradient",
        },
      ],
      image: irrigation,
      source_code_link: "https://github.com/",
    },
    {
      name: "Linear Algebra Book for High School Students",
      description:
        "An automatic irrigation system that uses sensors to detect soil moisture levels and automatically waters plants when the soil is dry. \
        The system can be controlled remotely via a mobile app.",
      tags: [
        {
          name: "math",
          color: "blue-text-gradient",
        },
        {
          name: "latex",
          color: "green-text-gradient",
        },
        {
          name: "khmerlanguage",
          color: "pink-text-gradient",
        },
      ],
      image: linear,
      source_code_link: "https://blogforall777.wordpress.com/2020/10/01/%e1%9e%96%e1%9e%b7%e1%9e%87%e1%9e%82%e1%9e%8e%e1%9e%b7%e1%9e%8f-%e1%9e%95%e1%9f%92%e1%9e%93%e1%9f%82%e1%9e%80-i/",
    },
  ];


  const hobby = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: canon,
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: canon,
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: canon,
      animation: 'salute',
    },
  ];
  
  export { services, technologies, educations, experiences, research, projects, hobby };